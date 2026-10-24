import { getSession } from "@/src/features/auth/session";
import { redirect } from "next/navigation";
import Greetings from "./_components/greetings";
import ContinueWatching from "./_components/continue-watching";
import SavedForLater from "./_components/saved-for-later";

export default async function DashboardPage() {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <>
      {/* Greetings */}
      <section className="px-12 pt-12">
        <Greetings name={session.name} />
      </section>

      {/* Continue watching */}
      <section className="px-12 pt-9">
        <ContinueWatching />
      </section>

      {/* Saved for later */}
      <section className="px-12 pt-15">
        <SavedForLater />
      </section>
    </>
  );
}
