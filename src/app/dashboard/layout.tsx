import { SidebarProvider, SidebarTrigger } from "@/src/components/ui/sidebar";
import DashboardSidebar from "./_components/dashboard-sidebar";
import { getSession } from "@/src/features/auth/session";
import { redirect } from "next/navigation";
import DashboardTopbar from "./_components/dashboard-topbar";

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
      <main className="relative min-w-0 grow">
        <SidebarTrigger className="fixed top-1 left-1 z-10 md:absolute md:top-0 md:left-0" />
        <DashboardTopbar />
        {children}
      </main>
    </SidebarProvider>
  );
}
