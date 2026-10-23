import { getSession } from "@/src/features/auth/session";
import { redirect } from "next/navigation";
import Greetings from "./_components/greetings";

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
      <section></section>
    </>
  );
}
