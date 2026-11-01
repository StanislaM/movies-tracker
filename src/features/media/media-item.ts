"use server";

import {
  CreateMediaItemData,
  FeatureResponse,
  genres,
  mediaItemTypes,
  watchingStatuses,
} from "@/src/types";
import z from "zod";

export async function createMediaItem(
  data: CreateMediaItemData,
): Promise<FeatureResponse<null>> {
  // Schema validation
  const createMediaSchem = z.object({
    title: z
      .string()
      .min(1, "Title cannot be empty")
      .max(128, "Title must be at most 128 characters"),
    description: z
      .string("Description must be at most 512 characters")
      .max(512)
      .optional(),
    releaseYear: z
      .number()
      .min(0, "Non valid year")
      .max(9999, "Non valid year"),
    type: z.enum(mediaItemTypes),
    genre: z.enum(genres),
    ageRating: z
      .string()
      .max(32, "Age rating must be at most 32 characters")
      .optional(),
    duration: z.number().min(0).max(Number.MAX_SAFE_INTEGER, "To long"),
    status: z.enum(watchingStatuses),
    watchUrl: z
      .string()
      .max(512, "Link must be at most 512 characters")
      .optional(),
  });

  // Validating
  const validatedFields = createMediaSchem.safeParse(data);

  // If fields failed vaidation
  if (!validatedFields.success) {
    return {
      isOk: false,
      status: 400,
      errorMessage: "Validation error",
      data: null,
    };
  }

  // Img uploading
  console.log(data.img);

  return {
    isOk: true,
    status: 200,
    data: null,
  };
}
