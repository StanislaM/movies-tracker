import Logo from "@/src/components/logo";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { ViewTransition } from "react";

export default async function RegisterPage() {
  return (
    <div className="relative flex min-h-screen flex-row-reverse">
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
                <span className="text-muted-foreground">
                  Don&apos;t have an account?
                </span>
                <Link
                  href="/register"
                  className="hover:text-primary ml-1 transition"
                >
                  Sign up
                </Link>
              </div>
            </ViewTransition>
          </div>

          {/* Form placeholder */}
          <div className="bg-accent-foreground test-form my-auto h-150 w-120">
            <span className="bg-primary m-10">
              Textasdfsdfasdfasdfsadfdsdsfds
            </span>
          </div>
        </section>
      </ViewTransition>
    </div>
  );
}
