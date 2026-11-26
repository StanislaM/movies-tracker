"use client";

import { Button } from "@/src/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/src/components/ui/field";
import { Input } from "@/src/components/ui/input";
import { logout } from "@/src/features/auth/auth";
import { updatePassword } from "@/src/features/user/user";
import { updatePasswordData } from "@/src/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

const updatePasswordSchema = z
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

type NewPasswordFormProps = {
  setIsPasswordModalOpenAction: (newState: boolean) => void;
  isPasswordPending: boolean;
  setIsPasswordPendingAction: (newState: boolean) => void;
};

export default function NewPasswordForm({
  setIsPasswordModalOpenAction,
  isPasswordPending,
  setIsPasswordPendingAction,
}: NewPasswordFormProps) {
  const router = useRouter();

  const form = useForm<z.infer<typeof updatePasswordSchema>>({
    resolver: zodResolver(updatePasswordSchema),
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
  });

  async function onSubmit(data: z.infer<typeof updatePasswordSchema>) {
    const body: updatePasswordData = {
      oldPassword: data.oldPassword,
      newPassword: data.newPassword,
    };

    setIsPasswordPendingAction(true);

    const res = await updatePassword(body);

    if (!res.isOk) {
      toast.warning(res.errorMessage);
      setIsPasswordPendingAction(false);
      return;
    }

    toast.success("Password changed");
    await logout();
    router.push("login");

    setIsPasswordPendingAction(false);
  }

  return (
    <form
      id="update-password-form"
      onSubmit={form.handleSubmit(onSubmit)}
      noValidate
    >
      <FieldGroup className="mb-4 gap-y-2">
        <Controller
          name="oldPassword"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel
                className="font-normal opacity-85"
                htmlFor="update-password-form-password"
              >
                Old password
              </FieldLabel>
              <Input
                className="focus-visible:ring-primary focus-visible:border-primary placeholder:opacity-75"
                {...field}
                id="update-password-form-old-password"
                aria-invalid={fieldState.invalid}
                placeholder="Your password"
                autoComplete="off"
                type="password"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="newPassword"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel
                className="font-normal opacity-85"
                htmlFor="update-password-form-password"
              >
                New password
              </FieldLabel>
              <Input
                className="focus-visible:ring-primary focus-visible:border-primary placeholder:opacity-75"
                {...field}
                id="update-password-form-new-password"
                aria-invalid={fieldState.invalid}
                placeholder="At least 8 symbols"
                autoComplete="off"
                type="password"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="confirmNewPassword"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel
                className="font-normal opacity-85"
                htmlFor="update-password-form-confirm-password"
              >
                Confirm new password
              </FieldLabel>
              <Input
                className="focus-visible:ring-primary focus-visible:border-primary placeholder:opacity-75"
                {...field}
                id="update-password-form-confirm-paswword"
                aria-invalid={fieldState.invalid}
                placeholder="Retype password"
                autoComplete="off"
                type="password"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>

      <div className="flex gap-x-1">
        <Button
          type="button"
          className="px-4"
          variant="secondary"
          size="lg"
          onClick={() => setIsPasswordModalOpenAction(false)}
          disabled={isPasswordPending}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          className="px-4"
          variant="destructive"
          size="lg"
          disabled={isPasswordPending}
        >
          {isPasswordPending ? <Loader className="animate-spin" /> : "Change"}
        </Button>
      </div>
    </form>
  );
}
