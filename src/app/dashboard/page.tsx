import { getSession } from "@/src/features/auth/session";
import { redirect } from "next/navigation";
import Greetings from "./_components/greetings";
import ContinueWatching from "./_components/continue-watching";
import SavedForLater from "./_components/saved-for-later";
import { Separator } from "@/src/components/ui/separator";
import PersonalStats from "./_components/personal-stats";

export default async function DashboardPage() {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="px-6 lg:px-12">
      {/* Greetings */}
      <section className="pt-8 md:pt-12">
        <Greetings name={session.name} />
      </section>

      {/* Continue watching */}
      <section className="pt-9">
        <ContinueWatching />
      </section>

      {/* Saved for later */}
      <section className="py-9 md:py-15">
        <SavedForLater />
      </section>

      <Separator />

      {/* Personal stats */}
      <section className="py-9">
        <PersonalStats />
      </section>
    </div>
  );
}
