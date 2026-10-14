"use server";

import { z } from "zod";
import * as argon2 from "argon2";
import { StatusCodes } from "http-status-codes";
import {
  FeatureResponse,
  RegisterData,
  RegisterResponseData,
} from "@/src/types";
import { db } from "@/src/prisma/db";
import { isSqlQueryError } from "@/src/lib/utils";

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

    return {
      data: user,
      isOk: true,
      status: StatusCodes.CREATED,
    };
  } catch (err: unknown) {
    if (isSqlQueryError(err)) {
      switch (err.sqlState) {
        case "23505":
          return {
            isOk: false,
            status: StatusCodes.CONFLICT,
            errorMessage: "An account with this email already exists",
            data: null,
          };
      }
    }

    return {
      isOk: false,
      status: StatusCodes.INTERNAL_SERVER_ERROR,
      errorMessage: "Something went wrong",
      data: null,
    };
  }
}
