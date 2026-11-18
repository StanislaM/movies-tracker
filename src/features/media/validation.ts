import { genres, mediaItemTypes, watchingStatuses } from "@/src/types";
import z from "zod";

export const updateMediaSchema = z.object({
  title: z
    .string()
    .min(1, "Title cannot be empty")
    .max(128, "Title must be at most 128 characters")
    .optional(),
  description: z
    .string("Description must be at most 512 characters")
    .max(512)
    .optional()
    .nullable(),
  releaseYear: z
    .number()
    .min(0, "Non valid year")
    .max(9999, "Non valid year")
    .optional(),
  type: z.enum(mediaItemTypes).optional(),
  genre: z.enum(genres).optional(),
  ageRating: z
    .string()
    .max(32, "Age rating must be at most 32 characters")
    .optional(),
  duration: z
    .number()
    .min(0)
    .max(Number.MAX_SAFE_INTEGER, "To long")
    .optional(),
  status: z.enum(watchingStatuses).optional(),
  watchUrl: z
    .string()
    .max(512, "Link must be at most 512 characters")
    .optional()
    .nullable(),
  userScore: z
    .number()
    .min(0, "Score cannot be below 0")
    .max(10, "Score cannot be abow 10")
    .optional()
    .nullable(),
});

export const createMediaSchema = z.object({
  title: z
    .string()
    .min(1, "Title cannot be empty")
    .max(128, "Title must be at most 128 characters"),
  description: z
    .string("Description must be at most 512 characters")
    .max(512)
    .optional(),
  releaseYear: z.number().min(0, "Non valid year").max(9999, "Non valid year"),
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
