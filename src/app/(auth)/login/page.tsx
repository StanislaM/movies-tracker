import Logo from "@/src/components/logo";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { ViewTransition } from "react";
import LoginForm from "../_components/login-form";

export default async function RegisterPage() {
  return (
    <div className="relative flex min-h-screen flex-col md:flex-row-reverse">
      {/* Title-image section */}
      <ViewTransition name="auth-image">
        <section className="flex min-h-screen w-full flex-col justify-between gap-y-150 bg-[url(/bg-auth.webp)] bg-center md:w-[50%] md:gap-y-0 lg:w-[40%] xl:w-[55%]">
          <Logo size="xl" className="fit relative z-10 m-7 md:m-15" />

          <div className="from-background to-background/0 flex flex-col bg-linear-to-t from-60% pt-30 pb-10 md:p-15">
            <h2 className="mb-8 text-center font-serif text-xl md:text-left md:text-3xl lg:text-4xl xl:text-5xl">
              “Movies are memories we get to visit again.”
            </h2>
            <span className="text-muted-foreground text-center text-xs font-bold tracking-widest uppercase md:text-left">
              Your library, your story
            </span>
          </div>
        </section>
      </ViewTransition>

      {/* Form section */}
      <ViewTransition name="auth-form">
        <section className="absolute top-0 flex min-h-screen w-full flex-col items-center pt-20 pb-0 md:relative md:w-[50%] md:pt-0 md:pb-15 lg:w-[60%] lg:pb-25 xl:w-[45%]">
          <div className="flex w-full items-center justify-between px-5 py-10 md:p-10">
            <Link
              href="/"
              className="flex items-center text-sm opacity-50 transition hover:opacity-100"
            >
              <ChevronLeft height={19} /> Back
            </Link>

            <ViewTransition name="auth-switch-link">
              <div className="text-sm">
                <span className="text-muted-foreground">
                  Don&apos;t have an account?
                </span>
                <Link
                  href="/register"
                  className="hover:text-primary ml-1 transition"
                >
                  Sign un
                </Link>
              </div>
            </ViewTransition>
          </div>

          {/* Form */}
          <ViewTransition name="auth-switch-form">
            <div className="animate-reveal my-auto flex w-full max-w-120 flex-col px-5 md:w-85 lg:w-120">
              <h5 className="text-primary mb-2 text-xs font-bold tracking-widest uppercase">
                Create your library
              </h5>
              <h2 className="mb-4 font-serif text-5xl font-medium lg:text-6xl">
                Enter Frame.
              </h2>
              <p className="text-muted-foreground mb-10 max-w-100 text-sm">
                One place for every film you’re watching, saving, and
                recommending.
              </p>

              <LoginForm />
            </div>
          </ViewTransition>
        </section>
      </ViewTransition>
    </div>
  );
}
