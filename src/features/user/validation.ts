import z from "zod";

export const updateUserNameSchema = z
  .string()
  .min(2, "Name must be at least 2 characters")
  .max(32, "Name must be at most 32 characters");
