"use server";

import * as argon2 from "argon2";
import { FeatureResponse, updatePasswordData } from "@/src/types";
import { StatusCodes } from "http-status-codes";
import { updateUserNameSchema } from "./validation";
import { db } from "@/src/prisma/db";
import { getSession } from "../auth/session";
import z from "zod";
import { cookies } from "next/headers";

//#region Update User Name
export async function updateUserName(
  newName: string,
): Promise<FeatureResponse<boolean>> {
  // Session validation
  const session = await getSession();
  if (!session) {
    return {
      isOk: false,
      data: null,
      status: StatusCodes.UNAUTHORIZED,
      errorMessage: "Unauthorized",
    };
  }

  // Validation
  const validationResult = updateUserNameSchema.safeParse(newName);

  if (!validationResult.success) {
    return {
      isOk: false,
      data: null,
      status: StatusCodes.BAD_REQUEST,
      errorMessage: "Wrong name",
    };
  }

  try {
    // Updating name
    const updatedUser = await db.orm.public.User.where({
      id: session.userId,
    }).update({ name: newName });

    if (!updatedUser) {
      return {
        isOk: false,
        status: StatusCodes.INTERNAL_SERVER_ERROR,
        data: false,
        errorMessage: "Failed to update media",
      };
    }

    return {
      isOk: true,
      data: true,
      status: StatusCodes.OK,
    };
  } catch (err) {
    console.error(err);

    return {
      isOk: false,
      data: null,
      status: StatusCodes.INTERNAL_SERVER_ERROR,
      errorMessage: "Something went wrong",
    };
  }
}
// #endregion
//#region Update Password
export async function updatePassword(
  data: updatePasswordData,
): Promise<FeatureResponse<boolean>> {
  // Session validation
  const session = await getSession();
  if (!session) {
    return {
      isOk: false,
      data: null,
      status: StatusCodes.UNAUTHORIZED,
      errorMessage: "Unauthorized",
    };
  }

  const updatePasswordSchema = z.object({
    oldPassword: z
      .string()
      .min(1, "Please enter password")
      .max(255, "To many symbols"),
    newPassword: z
      .string()
      .min(8, "Password must be at least 8 symbols")
      .max(255, "Password must be at most 255 symbols")
      .regex(/[A-Z]/, "Need uppercase")
      .regex(/[0-9]/, "Need number")
      .regex(/[^A-Za-z0-9]/, "Need special char"),
  });

  // Validation
  const validationResult = updatePasswordSchema.safeParse(data);

  // If fields failed vaidation
  if (!validationResult.success) {
    return {
      isOk: false,
      status: StatusCodes.BAD_REQUEST,
      errorMessage: "Validation error",
      data: null,
    };
  }

  try {
    // Old password validation
    // User searching
    const user = await db.orm.public.User.where({ id: session.userId }).first();

    if (!user) {
      return {
        isOk: false,
        status: StatusCodes.UNAUTHORIZED,
        errorMessage: "Cannot find user",
        data: null,
      };
    }

    // Password verifying
    const isPasswordCorrect = await argon2.verify(
      user.passwordHash,
      data.oldPassword,
    );

    if (!isPasswordCorrect) {
      // Wrong password
      return {
        isOk: false,
        status: StatusCodes.UNAUTHORIZED,
        errorMessage: "Wrong password",
        data: null,
      };
    }

    // Generating hash
    // Password hashing
    const hashedPassword = await argon2.hash(data.newPassword, {
      type: argon2.argon2id,
      salt: Buffer.from(process.env.ARGON_SALT!, "hex"),
    });
    // Password updating
    await db.orm.public.User.where({ id: session.userId }).update({
      passwordHash: hashedPassword,
    });

    // Session invalidating
    // Get session token
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get("session")?.value;
    await db.orm.public.Session.where({
      userId: session.userId,
      tokenHash: sessionToken,
    }).delete();

    return {
      isOk: true,
      status: StatusCodes.OK,
      data: true,
    };
  } catch (err) {
    console.error(err);

    return {
      isOk: false,
      data: null,
      status: StatusCodes.INTERNAL_SERVER_ERROR,
      errorMessage: "Something went wrong",
    };
  }
}
// #endregion
