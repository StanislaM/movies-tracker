"use client";

import { Button } from "@/src/components/ui/button";
import { logout } from "@/src/features/auth/auth";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    const res = await logout();

    if (res) {
      router.push("/login");
    }
  };

  return (
    <Button variant="destructive" onClick={handleLogout}>
      Logout
    </Button>
  );
}
