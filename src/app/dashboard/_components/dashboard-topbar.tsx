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
    <nav className="flex w-full items-center justify-between border-b px-14 py-3">
      {/* Search movie input */}
      <InputGroup className="h-12 max-w-sm">
        <InputGroupInput
          placeholder="Search your movies"
          className="w-sm py-20"
          ref={inputRef}
        />
        <InputGroupAddon>
          <SearchIcon className="text-muted-foreground" />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <Kbd>⌘K</Kbd>
        </InputGroupAddon>
      </InputGroup>

      {/* Add movie button */}
      <Button size="lg" className="font-semibold">
        <Plus />
        Add movie
      </Button>
    </nav>
  );
}
