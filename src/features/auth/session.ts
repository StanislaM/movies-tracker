"use server";

import { db } from "@/src/prisma/db";
import { SessionData } from "@/src/types";
import { cookies } from "next/headers";
import { decryptToken, encryptToken } from "./jwt";
import { Temporal } from "@js-temporal/polyfill";

export async function createSession(userId: string): Promise<boolean> {
  try {
    const sessionToken = await encryptToken(userId);

    const session = await db.orm.public.Session.create({
      tokenHash: sessionToken,
      expiresAt: Temporal.Instant.fromEpochMilliseconds(
        Date.now() + 2 * 24 * 60 * 60 * 1000,
      ),
      user: (t) => t.connect({ id: userId }),
    });

    if (!session) {
      // Session creation failed
      return false;
    }

    const cookieStore = await cookies();
    cookieStore.set("session", sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 2 * 24 * 60 * 60 * 1000,
    });

    return true;
  } catch {
    return false;
  }
}

export async function getSession(): Promise<SessionData> {
  // Get session token
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get("session")?.value;

  if (!sessionToken) {
    return null;
  }

  // Verifying token
  const decryptedToken = await decryptToken(sessionToken);

  if (!decryptedToken) {
    return null;
  }

  // Seacrhing session and user
  try {
    const session = await db.orm.public.Session.where({
      tokenHash: sessionToken,
    })
      .include("user")
      .first();

    if (!session || !session.user || session.userId !== decryptedToken.userId) {
      return null;
    }

    return {
      userId: session.userId,
      email: session.user.email,
      name: session.user.name,
      imgUrl: session.user.imgUrl,
    };
  } catch (err) {
    console.error(err);

    return null;
  }
}
