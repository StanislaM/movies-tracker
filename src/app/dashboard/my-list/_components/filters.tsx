"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import { genres, mediaItemTypes, watchingStatuses } from "@/src/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";

export default function Filters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

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

  return (
    <div className="relative flex gap-x-2">
      <div className="text-primary absolute -bottom-2 left-0 -z-10 flex w-full justify-between text-7xl font-bold uppercase opacity-10">
        {"Filters".split("").map((letter) => (
          <span key={letter}>{letter}</span>
        ))}
      </div>

      {/* Type */}
      <div className="flex flex-col items-start">
        <span className="text-muted-foreground text-xs">Type</span>
        <Select onValueChange={(value) => setFilter("type", value as string)}>
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
        <Select onValueChange={(value) => setFilter("genre", value as string)}>
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
        <Select onValueChange={(value) => setFilter("status", value as string)}>
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
    </div>
  );
}
