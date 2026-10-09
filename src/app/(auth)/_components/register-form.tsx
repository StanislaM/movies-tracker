"use client";

import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/src/components/ui/field";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";

const registerFormSchema = z
  .object({
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
    confirmPassword: z.string().min(1, "Please confirm your password").max(255),
  })
  .superRefine((val, ctx) => {
    if (val.password !== val.confirmPassword) {
      ctx.addIssue({
        code: "custom",
        message: "Passwords do not match",
        path: ["confirmPassword"],
      });
    }
  });

export default function RegisterForm() {
  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(data: z.infer<typeof registerFormSchema>) {
    console.log(data);
  }

  return (
    <form id="register-form" onSubmit={form.handleSubmit(onSubmit)} noValidate>
      <FieldGroup className="mb-10 gap-y-6">
        <Controller
          name="name"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel
                className="font-normal opacity-85"
                htmlFor="register-form-name"
              >
                Your name
              </FieldLabel>
              <Input
                className="focus-visible:ring-primary focus-visible:border-primary py-6 placeholder:opacity-75"
                {...field}
                id="register-form-name"
                aria-invalid={fieldState.invalid}
                placeholder="Alex Morgan"
                autoComplete="off"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel
                className="font-normal opacity-85"
                htmlFor="register-form-email"
              >
                Email address
              </FieldLabel>
              <Input
                className="focus-visible:ring-primary focus-visible:border-primary py-6 placeholder:opacity-75"
                {...field}
                id="register-form-email"
                aria-invalid={fieldState.invalid}
                placeholder="alex@example.com"
                autoComplete="off"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel
                className="font-normal opacity-85"
                htmlFor="register-form-password"
              >
                Password
              </FieldLabel>
              <Input
                className="focus-visible:ring-primary focus-visible:border-primary py-6 placeholder:opacity-75"
                {...field}
                id="register-form-paswword"
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
          name="confirmPassword"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel
                className="font-normal opacity-85"
                htmlFor="register-form-confirm-password"
              >
                Confirm password
              </FieldLabel>
              <Input
                className="focus-visible:ring-primary focus-visible:border-primary py-6 placeholder:opacity-75"
                {...field}
                id="register-form-confirm-paswword"
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

      <Button
        type="submit"
        className="text-background w-full py-6 font-bold"
        size="lg"
      >
        Create my account
      </Button>
    </form>
  );
}
