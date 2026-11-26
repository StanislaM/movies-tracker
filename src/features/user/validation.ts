import z from "zod";

export const updateUserNameSchema = z
  .string()
  .min(2, "Name must be at least 2 characters")
  .max(32, "Name must be at most 32 characters");

export const updatePasswordSchema = z
  .object({
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
    confirmNewPassword: z
      .string()
      .min(1, "Please confirm your password")
      .max(255),
  })
  .superRefine((val, ctx) => {
    if (val.newPassword !== val.confirmNewPassword) {
      ctx.addIssue({
        code: "custom",
        message: "Passwords do not match",
        path: ["confirmNewPassword"],
      });
    }
  });
