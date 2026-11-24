"use client";

import { Button } from "@/src/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import { useIsMobile } from "@/src/hooks/use-mobile";
import { genres, mediaItemTypes, watchingStatuses } from "@/src/types";
import { Bookmark } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";

export default function Filters() {
  const router = useRouter();
  const isMobile = useIsMobile();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const [isSaved, setIsSaved] = useState(searchParams.get("saved") || false);

  const setFilter = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    startTransition(() => {
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    });
  };

  if (isMobile) {
    return (
      <Dialog>
        <DialogTrigger
          render={
            <Button size="sm" className="font-semibold uppercase">
              Filters
            </Button>
          }
        ></DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Filters</DialogTitle>
          </DialogHeader>
          <div className="relative flex flex-wrap gap-3">
            {/* Type */}
            <div className="flex flex-col items-start">
              <span className="text-muted-foreground text-xs">Type</span>
              <Select
                onValueChange={(value) => setFilter("type", value as string)}
                disabled={isPending}
              >
                <SelectTrigger>
                  <SelectValue
                    className="capitalize"
                    placeholder={searchParams.get("type") || "Media Type"}
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem key="none" value={""} className="capitalize">
                      None
                    </SelectItem>
                    {mediaItemTypes.map((item) => (
                      <SelectItem
                        key={item}
                        value={item}
                        className="capitalize"
                      >
                        {item}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            {/* Genre */}
            <div className="flex flex-col items-start">
              <span className="text-muted-foreground text-xs">Genre</span>
              <Select
                onValueChange={(value) => setFilter("genre", value as string)}
                disabled={isPending}
              >
                <SelectTrigger>
                  <SelectValue
                    className="capitalize"
                    placeholder={searchParams.get("genre") || "Genre"}
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem key="none" value={""} className="capitalize">
                      None
                    </SelectItem>
                    {genres.map((item) => (
                      <SelectItem
                        key={item}
                        value={item}
                        className="capitalize"
                      >
                        {item}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            {/* Status */}
            <div className="flex flex-col items-start">
              <span className="text-muted-foreground text-xs">Status</span>
              <Select
                onValueChange={(value) => setFilter("status", value as string)}
                disabled={isPending}
              >
                <SelectTrigger>
                  <SelectValue
                    className="capitalize"
                    placeholder={searchParams.get("status") || "Status"}
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem key="none" value={""} className="capitalize">
                      None
                    </SelectItem>
                    {watchingStatuses.map((item) => (
                      <SelectItem
                        key={item}
                        value={item}
                        className="capitalize"
                      >
                        {item}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            {/* Saved */}
            <div className="flex flex-col items-start">
              <span className="text-muted-foreground text-xs">Saved</span>
              <Button
                size="icon-lg"
                variant={isSaved ? "default" : "secondary"}
                onClick={() => {
                  setFilter("saved", !isSaved ? "true" : null);
                  setIsSaved(!isSaved);
                }}
                disabled={isPending}
              >
                <Bookmark fill={isSaved ? "var(--muted)" : "none"} />
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <div className="relative flex gap-x-3">
      <div className="text-primary absolute -bottom-2 left-0 -z-10 flex w-full justify-between text-7xl font-bold uppercase opacity-10">
        {"Filters".split("").map((letter) => (
          <span key={letter}>{letter}</span>
        ))}
      </div>

      {/* Type */}
      <div className="flex flex-col items-start">
        <span className="text-muted-foreground text-xs">Type</span>
        <Select
          onValueChange={(value) => setFilter("type", value as string)}
          disabled={isPending}
        >
          <SelectTrigger>
            <SelectValue className="capitalize" placeholder="Media type" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem key="none" value={""} className="capitalize">
                None
              </SelectItem>
              {mediaItemTypes.map((item) => (
                <SelectItem key={item} value={item} className="capitalize">
                  {item}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Genre */}
      <div className="flex flex-col items-start">
        <span className="text-muted-foreground text-xs">Genre</span>
        <Select
          onValueChange={(value) => setFilter("genre", value as string)}
          disabled={isPending}
        >
          <SelectTrigger>
            <SelectValue className="capitalize" placeholder="Genre" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem key="none" value={""} className="capitalize">
                None
              </SelectItem>
              {genres.map((item) => (
                <SelectItem key={item} value={item} className="capitalize">
                  {item}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Status */}
      <div className="flex flex-col items-start">
        <span className="text-muted-foreground text-xs">Status</span>
        <Select
          onValueChange={(value) => setFilter("status", value as string)}
          disabled={isPending}
        >
          <SelectTrigger>
            <SelectValue className="capitalize" placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem key="none" value={""} className="capitalize">
                None
              </SelectItem>
              {watchingStatuses.map((item) => (
                <SelectItem key={item} value={item} className="capitalize">
                  {item}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Saved */}
      <div className="flex flex-col items-start">
        <span className="text-muted-foreground text-xs">Saved</span>
        <Button
          size="icon-lg"
          variant={isSaved ? "default" : "secondary"}
          onClick={() => {
            setFilter("saved", !isSaved ? "true" : null);
            setIsSaved(!isSaved);
          }}
          disabled={isPending}
        >
          <Bookmark fill={isSaved ? "var(--muted)" : "none"} />
        </Button>
      </div>
    </div>
  );
}
