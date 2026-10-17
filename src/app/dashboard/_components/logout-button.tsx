"use client";

import { Button } from "@/src/components/ui/button";
import { logout } from "@/src/features/auth/auth";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    const res = await logout();

    if (res.isOk) {
      toast.success("Successfully logged out");
      router.push("/login");
    } else {
      toast.warning(res.errorMessage);
    }
  };

  return (
    <Button variant="destructive" onClick={handleLogout}>
      Logout
    </Button>
  );
}
