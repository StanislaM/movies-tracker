"use server";

import { FeatureResponse } from "@/src/types";
import { StatusCodes } from "http-status-codes";
import { updateUserNameSchema } from "./validation";
import { db } from "@/src/prisma/db";
import { getSession } from "../auth/session";

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
