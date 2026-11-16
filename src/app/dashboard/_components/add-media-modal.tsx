"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/ui/dialog";
import { Separator } from "@/src/components/ui/separator";
import { Plus } from "lucide-react";
import AddMediaForm from "./add-media-form";
import { useState } from "react";

export default function AddMediaModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger className="bg-primary text-primary-foreground hover:bg-primary/80 flex items-center rounded-md px-2 py-1.5 text-sm font-medium transition">
        <Plus height={16} />
        <span className="hidden sm:inline">Add movie</span>
      </DialogTrigger>
      <DialogContent className="max-h-[calc(100dvh-20px)] overflow-y-scroll md:w-xl md:max-w-xl!">
        <DialogHeader>
          <span className="text-primary text-xs font-semibold tracking-widest uppercase">
            Your library
          </span>
          <DialogTitle className="mb-1.5 font-serif text-4xl">
            Add a movie
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-xs">
            Save something for your next movie night.
          </DialogDescription>
        </DialogHeader>
        <Separator />

        <AddMediaForm setIsOpenAction={setIsOpen} />
      </DialogContent>
    </Dialog>
  );
}
