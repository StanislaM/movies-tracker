"use client";

import { Button } from "@/src/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/src/components/ui/input-group";
import { Kbd } from "@/src/components/ui/kbd";
import { Plus, SearchIcon } from "lucide-react";
import { useEffect, useRef } from "react";

export default function DashboardTopbar() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyPress = (e: globalThis.KeyboardEvent) => {
      if (e.ctrlKey && e.key === "k") {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      console.log("removed");
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [inputRef]);

  return (
    <nav className="flex w-full items-center justify-between gap-x-4 border-b px-3 py-3 sm:px-7 md:gap-x-0 lg:px-14">
      {/* Search movie input */}
      <InputGroup className="h-10 sm:h-12 sm:max-w-xs lg:max-w-sm">
        <InputGroupInput
          placeholder="Search your movies"
          className="w-full text-sm md:w-sm"
          ref={inputRef}
        />
        <InputGroupAddon>
          <SearchIcon className="text-muted-foreground" />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <Kbd className="invisible md:visible">⌘K</Kbd>
        </InputGroupAddon>
      </InputGroup>

      {/* Add movie button */}
      <Button size="lg" className="shrink-0 font-semibold">
        <Plus />
        <span className="hidden sm:inline">Add movie</span>
      </Button>
    </nav>
  );
}
