"use client";

import { Combobox as ComboboxPrimitive } from "@base-ui/react/combobox";
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
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
} from "@/src/components/ui/combobox";
import { useRouter } from "next/navigation";

export default function DashboardTopbar() {
  const router = useRouter();
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
      <Combobox
        items={searchedItems || []}
        filteredItems={searchedItems || []}
        inputValue={searchString}
        onInputValueChange={setSearchString}
        value={null}
        autoHighlight
        itemToStringLabel={(item: IMedia) => item.title}
        isItemEqualToValue={(a: IMedia, b: IMedia) => a.id === b.id}
        onValueChange={(item: IMedia | null) =>
          item && router.push(`/dashboard/my-list/${item.id}`)
        }
      >
        <InputGroup className="h-10 sm:h-12 sm:max-w-xs lg:max-w-sm">
          <ComboboxPrimitive.Input
            ref={inputRef}
            render={
              <InputGroupInput
                placeholder="Search your movies"
                className="w-full text-sm md:w-sm"
                maxLength={128}
              />
            }
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

        <ComboboxContent>
          <ComboboxEmpty>No items found.</ComboboxEmpty>
          <ComboboxList>
            {(item: IMedia) => (
              <ComboboxItem key={item.id} value={item} className="py-1.5">
                <span className="shrink-0 font-semibold">{item.title}</span>
                <div className="xs:visible invisible flex items-center gap-x-1">
                  <span className="text-muted-foreground text-xs capitalize">
                    {item.type}
                  </span>
                  <span className="bg-accent-foreground h-0.5 w-0.5 rounded-full" />
                  <span className="text-muted-foreground text-xs capitalize">
                    {item.genre}
                  </span>
                  <span className="bg-accent-foreground h-0.5 w-0.5 rounded-full" />
                  <span className="text-muted-foreground text-xs capitalize">
                    {item.releaseYear}
                  </span>
                </div>
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>

      {/* Add movie button */}
      <AddMediaModal />
    </nav>
  );
}
