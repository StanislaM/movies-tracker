import Logo from "@/src/components/logo";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { ViewTransition } from "react";
import RegisterForm from "../_components/register-form";

export default async function RegisterPage() {
  return (
    <div className="relative flex min-h-screen">
      {/* Title-image section */}
      <ViewTransition name="auth-image">
        <section className="flex min-h-screen w-[55%] flex-col justify-between bg-[url(/bg-auth.webp)] bg-center">
          <Logo size="xl" className="m-15" />

          <div className="from-background to-background/0 flex flex-col bg-linear-to-t from-60% p-15 pt-30">
            <h2 className="mb-8 font-serif text-5xl">
              “Movies are memories we get to visit again.”
            </h2>
            <span className="text-muted-foreground text-xs font-bold tracking-widest uppercase">
              Your library, your story
            </span>
          </div>
        </section>
      </ViewTransition>

      {/* Form section */}
      <ViewTransition name="auth-form">
        <section className="flex min-h-screen w-[45%] flex-col items-center pb-25">
          <div className="flex w-full items-center justify-between p-10">
            <Link
              href="/"
              className="flex items-center text-sm opacity-50 transition hover:opacity-100"
            >
              <ChevronLeft height={19} /> Back
            </Link>

            <ViewTransition name="auth-switch-link">
              <div className="text-sm">
                <span className="text-muted-foreground">Already a member?</span>
                <Link
                  href="/login"
                  className="hover:text-primary ml-1 transition"
                >
                  Sign in
                </Link>
              </div>
            </ViewTransition>
          </div>

          {/* Form */}
          <ViewTransition name="auth-switch-form">
            <div className="animate-reveal my-auto flex w-120 flex-col">
              <h5 className="text-primary mb-2 text-xs font-bold tracking-widest uppercase">
                Create your library
              </h5>
              <h2 className="mb-4 font-serif text-6xl font-medium">
                Join Frame.
              </h2>
              <p className="text-muted-foreground mb-10 max-w-100 text-sm">
                One place for every film you’re watching, saving, and
                recommending.
              </p>

              <RegisterForm />
            </div>
          </ViewTransition>
        </section>
      </ViewTransition>
    </div>
  );
}
