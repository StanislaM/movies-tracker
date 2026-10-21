import { getSession } from "@/src/features/auth/session";
import { redirect } from "next/navigation";
import LogoutButton from "./_components/logout-button";

export default async function DashboardPage() {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="pt-10">
      {session.name}
      <LogoutButton />
    </div>
  );
}
