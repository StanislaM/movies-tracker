"use client";

import Link from "next/link";
import { Genre, WatchingStatus, watchingStatuses } from "../types";
import Image from "next/image";
import { useState } from "react";
import {
  Bookmark,
  Ellipsis,
  Eye,
  Info,
  Play,
  SquarePen,
  Trash,
} from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Separator } from "./ui/separator";

type MediaItemProps = {
  id: string;
  watchUrl: string | null;
  imgUrl: string | null;
  title: string;
  releaseYear: number;
  genre: Genre;
  status: WatchingStatus;
  className?: string;
};

export default function MediaItemCard({
  id,
  title,
  genre,
  releaseYear,
  imgUrl,
  watchUrl,
  status,
  className,
}: MediaItemProps) {
  const [img, setImg] = useState(imgUrl);
  const [watchinStatus, setWatchinStatus] = useState(status);

  return (
    <article className={` ${className}`}>
      <div className="group relative mb-2 aspect-3/4 overflow-hidden rounded-2xl border">
        {img ? (
          <Image
            alt="poster"
            src={img}
            onError={() => setImg(null)}
            fill
            className="aspect-3/4 w-full object-cover transition duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="from-muted to bg-muted-foreground/10 relative aspect-3/4 h-full w-full overflow-hidden bg-linear-45 from-40%">
            <span className="animate-marquee absolute top-1/2 -translate-y-1/2 text-8xl font-extrabold text-nowrap uppercase">
              {title}
            </span>
          </div>
        )}
        {watchUrl && (
          <Link
            href={watchUrl}
            className="group absolute top-0 left-0 h-full w-full"
            target="_blank"
          >
            <div className="bg-primary absolute right-4 bottom-4 flex h-12 w-12 translate-y-2 items-center justify-center rounded-full opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
              <Play
                fill="var(--background)"
                className="h-3"
                color="var(--background)"
              />
            </div>
          </Link>
        )}
        <Button
          size="icon-lg"
          className="bg-background/30 hover:bg-background/50 absolute top-4 right-4 h-12 w-12 rounded-full hover:scale-110"
        >
          <Bookmark fill="var(--primary)" stroke="none" />
        </Button>
      </div>
      <div className="mb-0.5 flex items-center justify-between">
        {watchUrl ? (
          <Link target="_blank" href={watchUrl}>
            {title}
          </Link>
        ) : (
          <span>{title}</span>
        )}

        {/* Actions */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Ellipsis />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Info />
                Details
              </DropdownMenuItem>
              <DropdownMenuItem>
                <SquarePen />
                Edit
              </DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <Eye /> Status
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuRadioGroup
                      value={watchinStatus}
                      onValueChange={setWatchinStatus}
                    >
                      {watchingStatuses.map((item) => (
                        <DropdownMenuRadioItem
                          className="capitalize"
                          key={item}
                          value={item}
                        >
                          {item}
                        </DropdownMenuRadioItem>
                      ))}
                    </DropdownMenuRadioGroup>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
              <Separator className="my-1" />
              <DropdownMenuItem variant="destructive">
                <Trash />
                Delete
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex items-center gap-x-1">
        <span className="text-muted-foreground text-xs">{releaseYear}</span>
        <span className="bg-muted-foreground h-0.5 w-0.5 rounded-full" />
        <span className="text-muted-foreground text-xs">{genre}</span>
      </div>
    </article>
  );
}
