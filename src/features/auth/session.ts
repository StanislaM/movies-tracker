"use server";

import { db } from "@/src/prisma/db";
import { SessionData } from "@/src/types";
import { cookies } from "next/headers";
import { decryptToken } from "./jwt";

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
