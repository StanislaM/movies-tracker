import { getSession } from "@/src/features/auth/session";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  return <div>{session.name}</div>;
}
