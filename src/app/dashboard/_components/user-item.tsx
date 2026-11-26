"use client";

import { Button } from "@/src/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/src/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import { Field, FieldError } from "@/src/components/ui/field";
import { Input } from "@/src/components/ui/input";
import { Separator } from "@/src/components/ui/separator";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/src/components/ui/sidebar";
import { logout } from "@/src/features/auth/auth";
import { updateUserName } from "@/src/features/user/user";
import { updateUserNameSchema } from "@/src/features/user/validation";
import { useIsMobile } from "@/src/hooks/use-mobile";
import { EllipsisVertical, Pen, Lock, LogOut, Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import z, { ZodError } from "zod";

type UserItem = {
  name: string;
  email: string;
};

export default function UserItem({ email, name }: UserItem) {
  const router = useRouter();
  const isMobile = useIsMobile();
  const [isNameModalOpen, setIsNameModalOpen] = useState(false);
  const [newName, setNewName] = useState("");
  const [isNamePending, setIsNamePending] = useState(false);
  const [newNameError, setNewNameError] = useState<ZodError<string> | null>(
    null,
  );

  const [isLogoutPending, setIsLogoutPending] = useState(false);

  // Update name
  const updateNameHandler = async () => {
    // Validation
    const validationResult = updateUserNameSchema.safeParse(newName);
    if (!validationResult.success) {
      setNewNameError(validationResult.error);
      return;
    } else {
      setNewNameError(null);
    }

    setIsNamePending(true);

    const res = await updateUserName(newName);

    if (!res.isOk) {
      toast.warning(res.errorMessage);
      return;
    }

    toast.success("Name changed");
    setIsNamePending(false);
    router.refresh();
  };

  // Update password

  // Logout
  const logoutHandler = async () => {
    setIsLogoutPending(true);
    const res = await logout();

    if (res.isOk) {
      router.push("/");
    }
    setIsLogoutPending(false);
  };

  return (
    <SidebarGroup>
      <SidebarMenu className="px-3">
        <SidebarMenuItem>
          <DropdownMenu orientation="vertical" modal={false}>
            <DropdownMenuTrigger
              render={
                // User item
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
              {/* User item popup content */}
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
                <DropdownMenuItem
                  className="mt-1"
                  onClick={() => setIsNameModalOpen(true)}
                  disabled={isNamePending}
                >
                  <Pen /> Change name
                </DropdownMenuItem>
                <DropdownMenuItem className="mb-1">
                  <Lock /> Change password
                </DropdownMenuItem>
                <Separator />
                <DropdownMenuItem
                  className="mt-1"
                  variant="destructive"
                  disabled={isLogoutPending}
                  onClick={logoutHandler}
                >
                  <LogOut /> Log out
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>

      {/* Change name dialog */}
      <Dialog open={isNameModalOpen} onOpenChange={setIsNameModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Change name</DialogTitle>
          </DialogHeader>
          <Field>
            <Input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.currentTarget.value)}
              placeholder="Type new name"
              maxLength={32}
              autoComplete="off"
            />
            {newNameError && (
              <FieldError
                errors={z
                  .treeifyError(newNameError)
                  .errors.map((err) => ({ message: err }))}
              />
            )}
          </Field>
          <div className="flex gap-x-1">
            <Button
              className="px-4"
              variant="secondary"
              size="lg"
              onClick={() => setIsNameModalOpen(false)}
              disabled={isNamePending}
            >
              Cancel
            </Button>
            <Button
              className="px-4"
              size="lg"
              disabled={isNamePending}
              onClick={updateNameHandler}
            >
              {isNamePending ? <Loader className="animate-spin" /> : "Change"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </SidebarGroup>
  );
}
