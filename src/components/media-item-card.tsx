"use client";

import Link from "next/link";
import { Genre } from "../types";
import Image from "next/image";
import { useState } from "react";
import { Bookmark, Play } from "lucide-react";
import { Button } from "./ui/button";

type MediaItemProps = {
  id: string;
  watchUrl?: string;
  imgUrl: string | null;
  name: string;
  releaseYear: number;
  genre: Genre;
  className?: string;
};

export default function MediaItemCard({
  id,
  name,
  genre,
  releaseYear,
  imgUrl,
  watchUrl,
  className,
}: MediaItemProps) {
  const [img, setImg] = useState(imgUrl);

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
          <div className="from-muted to bg-muted-foreground/10 relative aspect-3/4 overflow-hidden bg-linear-45 from-40%">
            <span className="animate-marquee absolute top-1/2 -translate-y-1/2 text-8xl font-extrabold text-nowrap uppercase">
              {name}
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
            {name}
          </Link>
        ) : (
          <span>{name}</span>
        )}

        {/* Placeholder for actions */}
        <span>...</span>
        {/* Placeholder for actions */}
      </div>
      <div className="flex items-center gap-x-1">
        <span className="text-muted-foreground text-xs">{releaseYear}</span>
        <span className="bg-muted-foreground h-0.5 w-0.5 rounded-full" />
        <span className="text-muted-foreground text-xs">{genre}</span>
      </div>
    </article>
  );
}
