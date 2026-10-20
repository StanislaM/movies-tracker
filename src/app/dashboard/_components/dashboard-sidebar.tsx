"use client";

import Logo from "@/src/components/logo";
import { Separator } from "@/src/components/ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/src/components/ui/sidebar";
import { IUser } from "@/src/types";
import { Bookmark, Check, House, Settings } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import UserItem from "./user-item";

const menuItems = [
  {
    title: "Home",
    icon: <House />,
    link: "/dashboard",
  },
  {
    title: "My list",
    icon: <Bookmark />,
    link: "/dashboard/my-list",
  },
  {
    title: "Watched",
    icon: <Check />,
    link: "/dashboard/watched",
  },
];

export default function DashboardSidebar({ user }: { user: IUser }) {
  const router = useRouter();

  const currentUrl = usePathname();

  return (
    <Sidebar>
      <SidebarHeader className="p-8">
        <Logo size="lg" />
      </SidebarHeader>
      <SidebarContent className="pt-6">
        <SidebarGroup>
          <SidebarMenu className="gap-y-1 px-3">
            {menuItems.map((item, i) => (
              <SidebarMenuItem key={i}>
                <SidebarMenuButton
                  className={`${currentUrl.includes(item.link) ? "bg-muted" : "opacity-70"} px-5 py-6`}
                  onClick={() => router.push(item.link)}
                >
                  {item.icon} {item.title}
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>

        {/* Collections */}

        <SidebarGroup className="mt-auto">
          <SidebarMenu className="px-3">
            <SidebarMenuItem>
              <SidebarMenuButton
                className={`${currentUrl.includes("/dashboard/settings") ? "bg-muted" : "opacity-70"} px-5 py-6`}
                onClick={() => router.push("/dashboard/settings")}
              >
                <Settings /> Settings
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <Separator className="mx-5 w-[calc(100%-40px)]!" />
      <SidebarFooter>
        <UserItem {...user} />
      </SidebarFooter>
    </Sidebar>
  );
}
