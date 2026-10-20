import { SidebarProvider, SidebarTrigger } from "@/src/components/ui/sidebar";
import DashboardSidebar from "./_components/dashboard-sidebar";
import { getSession } from "@/src/features/auth/session";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <SidebarProvider>
      <DashboardSidebar
        user={{
          email: session.email,
          name: session.name,
          imgUrl: session.imgUrl,
        }}
      />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
