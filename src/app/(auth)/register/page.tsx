import Logo from "@/src/components/logo";

export default async function RegisterPage() {
  return (
    <div className="flex min-h-screen">
      {/* Title-image section */}
      <section className="flex min-h-screen w-3/5 flex-col justify-between bg-[url(/bg-auth.webp)] bg-center">
        <Logo size="xl" />

        <div className="from-background to-background/0 flex flex-col bg-linear-to-t p-15 pt-20">
          <h2 className="mb-8 font-serif text-5xl">
            “Movies are memories we get to visit again.”
          </h2>
          <span className="text-muted-foreground text-xs font-bold tracking-widest uppercase">
            Your library, your story
          </span>
        </div>
      </section>

      {/* Form section */}
      <section></section>
    </div>
  );
}
