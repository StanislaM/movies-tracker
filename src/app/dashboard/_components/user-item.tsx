"use client";

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/src/components/ui/sidebar";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

type UserItem = {
  name: string;
  email: string;
  imgUrl: string | null;
};

export default function UserItem({ email, imgUrl, name }: UserItem) {
  const router = useRouter();

  const [img, setImg] = useState(imgUrl);

  return (
    <SidebarGroup className="mt-auto">
      <SidebarMenu className="px-3">
        <SidebarMenuItem>
          <SidebarMenuButton
            className="px-2 py-6"
            onClick={() => router.push("/dashboard/me")}
          >
            {img ? (
              <Image
                alt="profile-image"
                className="h-8 w-8"
                src={img}
                width={32}
                height={32}
                onError={() => setImg(null)}
              />
            ) : (
              <div className="bg-muted-foreground/20 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xl">
                {name[0]}
              </div>
            )}
            <div className="ml-1 flex flex-col truncate">
              <span className="text-sm font-medium">{name}</span>
              <span className="text-muted-foreground truncate text-xs">
                {email}
              </span>
            </div>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  );
}
