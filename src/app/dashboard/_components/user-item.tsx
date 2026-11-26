"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import { Separator } from "@/src/components/ui/separator";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/src/components/ui/sidebar";
import { useIsMobile } from "@/src/hooks/use-mobile";
import { EllipsisVertical, Pen, Lock, LogOut } from "lucide-react";

type UserItem = {
  name: string;
  email: string;
};

export default function UserItem({ email, name }: UserItem) {
  const isMobile = useIsMobile();

  return (
    <SidebarGroup>
      <SidebarMenu className="px-3">
        <SidebarMenuItem>
          <DropdownMenu orientation="vertical" modal={false}>
            <DropdownMenuTrigger
              render={
                <SidebarMenuButton className="py-6">
                  <div className="bg-muted-foreground/20 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xl">
                    {name[0]}
                  </div>
                  <div className="ml-1 flex flex-col truncate">
                    <span className="text-sm font-medium">{name}</span>
                    <span className="text-muted-foreground truncate text-xs">
                      {email}
                    </span>
                  </div>
                  <EllipsisVertical className="ml-auto flex h-4 w-2" />
                </SidebarMenuButton>
              }
            ></DropdownMenuTrigger>
            <DropdownMenuContent side={!isMobile ? "right" : "top"}>
              <DropdownMenuGroup>
                <DropdownMenuLabel className="text-accent-foreground flex">
                  <div className="bg-muted-foreground/20 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xl">
                    {name[0]}
                  </div>
                  <div className="ml-1 flex flex-col truncate">
                    <span className="text-sm font-medium">{name}</span>
                    <span className="text-muted-foreground truncate text-xs">
                      {email}
                    </span>
                  </div>
                </DropdownMenuLabel>
                <Separator />
                <DropdownMenuItem className="mt-1">
                  <Pen /> Change name
                </DropdownMenuItem>
                <DropdownMenuItem className="mb-1">
                  <Lock /> Change password
                </DropdownMenuItem>
                <Separator />
                <DropdownMenuItem className="mt-1" variant="destructive">
                  <LogOut /> Log out
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  );
}
