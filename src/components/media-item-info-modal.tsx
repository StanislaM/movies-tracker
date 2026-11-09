"use client";

import Image from "next/image";
import { IMedia } from "../types";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { useState } from "react";
import { Edit, Ellipsis, Info, Star } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

type MediaItemInfoModalProps = {
  item: IMedia;
  onCloseAction: () => void;
};

export default function MideItemInfoModal({
  item,
  onCloseAction,
}: MediaItemInfoModalProps) {
  const [img, setImg] = useState(item.imgUrl);

  return (
    <Dialog onOpenChange={(state) => !state && onCloseAction()} defaultOpen>
      <DialogContent className="xs:w-100 xs:max-w-140! max-h-[calc(100dvh-20px)] w-full max-w-77.5! overflow-y-auto md:w-120 lg:w-fit">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-x-1 text-xl">
            <Info height={18} /> Info
          </DialogTitle>
        </DialogHeader>

        <div className="xs:flex-row flex flex-col gap-x-4">
          <div className="relative">
            <div className="bg-primary/75 absolute top-2 left-2 flex h-12 w-12 items-center justify-center rounded-full text-2xl font-semibold">
              <span className="relative z-2">{item.userScore ?? "N/A"}</span>
              <Star
                className="absolute z-1 h-10 w-10 opacity-70"
                fill="var(--muted-foreground)"
                stroke="var(--muted-foreground)"
              />
            </div>
            {img ? (
              <Image
                alt="poster"
                src={img}
                onError={() => setImg(null)}
                width={300}
                height={400}
                className="xs:w-50 aspect-3/4 w-full rounded-t-2xl object-cover transition duration-500 lg:w-60"
              />
            ) : (
              <div className="from-muted to-muted-foreground/10 xs:w-50 relative aspect-3/4 w-full overflow-hidden rounded-t-2xl bg-linear-45 from-40% lg:w-60">
                <span className="animate-marquee absolute top-1/2 -translate-y-1/2 text-8xl font-extrabold text-nowrap uppercase">
                  {item.title}
                </span>
              </div>
            )}
            <div className="flex">
              <Button
                variant={`${item.status === "watching" ? "default" : "secondary"}`}
                className="grow rounded-none rounded-bl-lg border-none text-xs tracking-wide"
              >
                Watching
              </Button>
              <Button
                variant={`${item.status === "completed" ? "default" : "secondary"}`}
                className="grow rounded-none border-none text-xs tracking-wide"
              >
                Completed
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger className="bg-secondary hover:bg-foreground/10 rounded-br-lg transition">
                  <Ellipsis />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuGroup>
                    <DropdownMenuItem
                      className={`${item.status === "planned" && "bg-primary hover:bg-primary/80! transition"}`}
                    >
                      Planned
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className={`${item.status === "delayed" && "bg-primary hover:bg-primary/80! transition"}`}
                    >
                      Delayed
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className={`${item.status === "dropped" && "bg-primary hover:bg-primary/80! transition"}`}
                    >
                      Dropped
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <div className="flex flex-col gap-y-2">
            {/* TITLE */}
            <h3 className="text-primary max-w-60 font-serif text-4xl wrap-anywhere">
              {item.title}
            </h3>

            {/* YEAR */}
            <p>
              <span className="text-primary mr-1 text-xs font-semibold tracking-wider">
                Release year:
              </span>
              <span>{item.releaseYear}</span>
            </p>

            {/* TYPE */}
            <p>
              <span className="text-primary mr-1 font-semibold tracking-wider">
                Type:
              </span>
              <span className="capitalize">{item.type}</span>
            </p>

            {/* GENRE */}
            <p>
              <span className="text-primary mr-1 text-xs font-semibold tracking-wider">
                Genre:
              </span>
              <span>{item.genre}</span>
            </p>

            {/* AGE */}
            <p>
              <span className="text-primary mr-1 text-xs font-semibold tracking-wider">
                Age rating:
              </span>
              <span>{item.ageRating || "None"}</span>
            </p>

            {/* Duration */}
            <p>
              <span className="text-primary mr-1 text-xs font-semibold tracking-wider">
                Duration:
              </span>
              <span>{item.duration}m</span>
            </p>

            {/* WATCH */}
            {item.watchUrl && (
              <p>
                <span className="text-primary mr-1 text-xs font-semibold tracking-wider">
                  Watch url:
                </span>
                <Link
                  href={item.watchUrl}
                  target="_blank"
                  className="hover:underline"
                >
                  Click to watch
                </Link>
              </p>
            )}

            {/* CREATED AT */}
            <p className="mb-3">
              <span className="text-primary mr-1 text-xs font-semibold tracking-wider">
                Added at:
              </span>
              <span className="text-muted-foreground text-xs">
                {item.createdAt.toDateString()}
              </span>
            </p>
            <Button
              nativeButton={false}
              render={
                <Link
                  href={`/dashboard/my-list/${item.id}`}
                  className="flex items-center gap-x-1"
                />
              }
            >
              <Edit /> Edit info
            </Button>
          </div>
        </div>
        {/* DESCRIPTION */}
        {item.description ? (
          <p className="mb-2 w-fit">
            <span className="text-muted-foreground text-xs">Description: </span>
            {item.description}
          </p>
        ) : (
          <span className="text-muted-foreground mb-2 text-xs">
            No description provided
          </span>
        )}
      </DialogContent>
    </Dialog>
  );
}
