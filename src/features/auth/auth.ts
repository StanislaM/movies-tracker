"use server";

import { z } from "zod";
import * as argon2 from "argon2";
import { Temporal } from "@js-temporal/polyfill";
import { StatusCodes } from "http-status-codes";
import {
  FeatureResponse,
  LoginData,
  LoginResponseData,
  RegisterData,
  RegisterResponseData,
} from "@/src/types";
import { db } from "@/src/prisma/db";
import { isSqlQueryError } from "@/src/lib/utils";
import { encryptToken } from "./jwt";
import { cookies } from "next/headers";

export async function register(
  data: RegisterData,
): Promise<FeatureResponse<RegisterResponseData>> {
  // Validation schema
  const registerFormSchema = z.object({
    name: z
      .string()
      .min(2, "Name must be at least 2 characters")
      .max(32, "Name must be at most 32 characters"),
    email: z.email("Enter a valid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 symbols")
      .max(255, "Password must be at most 255 symbols")
      .regex(/[A-Z]/, "Need uppercase")
      .regex(/[0-9]/, "Need number")
      .regex(/[^A-Za-z0-9]/, "Need special char"),
  });

  // Validating
  const validatedFields = registerFormSchema.safeParse(data);

  // If fields failed vaidation
  if (!validatedFields.success) {
    return {
      isOk: false,
      status: 400,
      errorMessage: "Validation error",
      data: null,
    };
  }

  // User creating
  // Password hashing
  const hashedPassword = await argon2.hash(data.password, {
    type: argon2.argon2id,
    salt: Buffer.from(process.env.ARGON_SALT!, "hex"),
  });

  try {
    // Add user to DB
    const user = await db.orm.public.User.select("email", "name").create({
      email: data.email,
      name: data.name,
      passwordHash: hashedPassword,
    });

    // User successfully created
    return {
      data: { ...user, imgUrl: null },
      isOk: true,
      status: StatusCodes.CREATED,
    };
  } catch (err: unknown) {
    if (isSqlQueryError(err)) {
      switch (err.sqlState) {
        case "23505":
          // User already exists
          return {
            isOk: false,
            status: StatusCodes.CONFLICT,
            errorMessage: "An account with this email already exists",
            data: null,
          };
      }
    }

    console.error(err);
    // Server error
    return {
      isOk: false,
      status: StatusCodes.INTERNAL_SERVER_ERROR,
      errorMessage: "Something went wrong",
      data: null,
    };
  }
}

export async function login(
  data: LoginData,
): Promise<FeatureResponse<LoginResponseData>> {
  //User searching
  try {
    const user = await db.orm.public.User.where({ email: data.email }).first();

    if (!user) {
      // Cant find user
      return {
        isOk: false,
        status: StatusCodes.UNAUTHORIZED,
        errorMessage: "Wrong email or password",
        data: null,
      };
    }

    const isPasswordCorrect = await argon2.verify(
      user.passwordHash,
      data.password,
    );

    if (!isPasswordCorrect) {
      // Wrong password
      return {
        isOk: false,
        status: StatusCodes.UNAUTHORIZED,
        errorMessage: "Wrong email or password",
        data: null,
      };
    }

    const sessionToken = await encryptToken(user.id);

    const session = await db.orm.public.Session.create({
      tokenHash: sessionToken,
      expiresAt: Temporal.Instant.fromEpochMilliseconds(
        Date.now() + 2 * 24 * 60 * 60 * 1000,
      ),
      user: (t) => t.connect({ id: user.id }),
    });

    if (!session) {
      // Session creation failed
      return {
        isOk: false,
        status: StatusCodes.INTERNAL_SERVER_ERROR,
        errorMessage: "Something went wrong",
        data: null,
      };
    }

    const cookieStore = await cookies();
    cookieStore.set("session", sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 2 * 24 * 60 * 60 * 1000,
    });

    // Successfully logged in
    return {
      isOk: true,
      status: StatusCodes.OK,
      data: { email: user.email, name: user.name, imgUrl: user.imgUrl },
    };
  } catch (err) {
    console.error(err);
    // Server or db error
    return {
      isOk: false,
      status: StatusCodes.INTERNAL_SERVER_ERROR,
      errorMessage: "Something went wrong",
      data: null,
    };
  }
}

export async function logout(): Promise<boolean> {
  // Get session token
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get("session")?.value;

  if (!sessionToken) {
    return false;
  }

  // Remove session from db
  try {
    await db.orm.public.Session.where({
      tokenHash: sessionToken,
    }).delete();

    cookieStore.delete("session");

    return true;
  } catch {
    return false;
  }
}
