"use client";

import { Button } from "@/src/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/src/components/ui/field";
import { Input } from "@/src/components/ui/input";
import { login } from "@/src/features/auth/auth";
import { LoginData } from "@/src/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

const loginFormSchema = z.object({
  email: z.email("Enter a valid email address"),
  password: z.string().min(1, "Please enter password"),
});

export default function LoginForm() {
  const router = useRouter();

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: z.infer<typeof loginFormSchema>) {
    console.log(data);
    const body: LoginData = {
      email: data.email,
      password: data.password,
    };
    const res = await login(body);

    if (res.isOk) {
      toast.success("Successfully logged in");
      router.push("/dashboard");
    } else {
      toast.warning(res.errorMessage);
    }
  }

  return (
    <form id="login-form" onSubmit={form.handleSubmit(onSubmit)} noValidate>
      <FieldGroup className="mb-10 gap-y-6">
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel
                className="font-normal opacity-85"
                htmlFor="login-form-email"
              >
                Email address
              </FieldLabel>
              <Input
                className="focus-visible:ring-primary focus-visible:border-primary py-6 placeholder:opacity-75"
                {...field}
                id="login-form-email"
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
                htmlFor="login-form-password"
              >
                Your password
              </FieldLabel>
              <Input
                className="focus-visible:ring-primary focus-visible:border-primary py-6 placeholder:opacity-75"
                {...field}
                id="login-form-paswword"
                aria-invalid={fieldState.invalid}
                placeholder="Password"
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
        Login into my account
      </Button>
    </form>
  );
}
