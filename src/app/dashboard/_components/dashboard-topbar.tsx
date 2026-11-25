"use client";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/src/components/ui/input-group";
import { Kbd } from "@/src/components/ui/kbd";
import { Loader, SearchIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import AddMediaModal from "./add-media-modal";
import { useDebounce } from "@/src/hooks/use-debounce";
import { searchMedia } from "@/src/features/media/media-item";
import { toast } from "sonner";
import { IMedia } from "@/src/types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import Link from "next/link";

export default function DashboardTopbar() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchString, setSearchString] = useState("");
  const debouncedSearchString = useDebounce<string>(searchString);
  const [isPending, setIsPending] = useState(false);
  const [searchedItems, setSearchedItems] = useState<IMedia[] | null>(null);

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

  useEffect(() => {
    if (!debouncedSearchString) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSearchedItems(null);
      return;
    }

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsPending(true);

    const res = searchMedia(debouncedSearchString.trim());

    res
      .then((body) => {
        if (!body.isOk) {
          toast.warning(body.errorMessage);
          return;
        }

        if (body.data) {
          setSearchedItems(body.data);
        }
      })
      .catch(() => toast.warning("Something went wrong"))
      .finally(() => setIsPending(false));
  }, [debouncedSearchString]);

  return (
    <nav className="flex w-full items-center justify-between gap-x-4 border-b px-3 py-3 sm:px-7 md:gap-x-0 lg:px-12">
      {/* Search movie input */}
      <div className="flex flex-col">
        <InputGroup className="h-10 sm:h-12 sm:max-w-xs lg:max-w-sm">
          <InputGroupInput
            placeholder="Search your movies"
            className="w-full text-sm md:w-sm"
            ref={inputRef}
            value={searchString}
            onChange={(e) => setSearchString(e.currentTarget.value)}
            maxLength={128}
          />
          <InputGroupAddon>
            <SearchIcon className="text-muted-foreground" />
          </InputGroupAddon>
          {isPending && (
            <InputGroupAddon align="inline-end">
              <Loader className="animate-spin" />
            </InputGroupAddon>
          )}
          <InputGroupAddon align="inline-end">
            <Kbd className="invisible md:visible">⌘K</Kbd>
          </InputGroupAddon>
        </InputGroup>

        <DropdownMenu open={searchedItems !== null} modal={false}>
          <DropdownMenuTrigger />
          <DropdownMenuContent>
            <DropdownMenuGroup>
              {searchedItems && searchedItems.length === 0 ? (
                <DropdownMenuItem>No items</DropdownMenuItem>
              ) : (
                searchedItems?.map((item) => (
                  <DropdownMenuItem
                    key={item.id}
                    render={
                      <Link href={`/dashboard/my-list/${item.id}`}>
                        {item.title}
                      </Link>
                    }
                  ></DropdownMenuItem>
                ))
              )}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Add movie button */}
      <AddMediaModal />
    </nav>
  );
}
