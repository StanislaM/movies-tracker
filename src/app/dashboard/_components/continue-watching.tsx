import { Button } from "@/src/components/ui/button";
import { convertMinutesToHours } from "@/src/lib/utils";
import { AgeRating, MediaItemType } from "@/src/types";
import { Check, Play } from "lucide-react";
import Link from "next/link";

export default async function ContinueWatching() {
  // HARDCODED DATA==============
  const continueWatchingItem = {
    id: "123456",
    releaseYear: 2026,
    type: "movie" as MediaItemType,
    duration: 67,
    ageRating: "PG" as AgeRating,
    name: "A Still Place",
    description:
      "A photographer returns to the remote lake of her childhood, where silence holds more than memory.",
    imgUrl:
      "https://images.pexels.com/photos/16268987/pexels-photo-16268987.jpeg",
    watchUrl: "https://yummyanime.tv/index-6",
  };
  // HARDCODED DATA==============

  const convertedDuration = convertMinutesToHours(
    continueWatchingItem.duration,
  );

  // IF NO ITEM RENDER PROPOSAL TO GO TO SAVED PAGE TO CHOOSE ONE

  return (
    <article
      style={{ backgroundImage: `url('${continueWatchingItem.imgUrl}')` }}
      className={`outline-muted relative flex flex-col overflow-hidden rounded-3xl bg-cover bg-right p-10 outline`}
    >
      {/* Cover */}
      <div className="from-background to-background/0 absolute top-0 left-0 h-full w-full bg-linear-to-r from-20%" />

      <div className="text-muted-foreground relative mb-12 flex items-center text-xs font-semibold tracking-widest">
        <span className="bg-primary mr-2 mb-0.5 block h-2 w-2 rounded-full" />
        Continue watching
      </div>

      <div className="text-muted-foreground relative mb-3 flex items-center gap-x-2 text-xs font-medium">
        <span>{continueWatchingItem.releaseYear}</span>
        <span className="bg-muted-foreground h-0.5 w-0.5 rounded-full" />
        <span className="capitalize">{continueWatchingItem.type}</span>
        <span className="bg-muted-foreground h-0.5 w-0.5 rounded-full" />
        <span>
          {convertedDuration.hours && `${convertedDuration.hours}h`}{" "}
          {convertedDuration.minutes}m
        </span>
        <span className="bg-muted-foreground h-0.5 w-0.5 rounded-full" />

        <span className="border-muted-foreground/50 rounded-sm border px-1 text-[10px]">
          {continueWatchingItem.ageRating}
        </span>
      </div>

      <h2 className="relative mb-7 font-serif text-7xl">
        {continueWatchingItem.name}
      </h2>

      <p className="text-muted-foreground relative mb-7 max-w-110 text-sm leading-6">
        {continueWatchingItem.description}
      </p>

      <div className="relative flex gap-x-3">
        {continueWatchingItem.watchUrl && (
          <Link href={continueWatchingItem.watchUrl} target="_blank">
            <Button
              size="lg"
              className="px-4 py-5 text-sm font-semibold"
              variant="secondary"
            >
              <Play fill="var(--accent-foreground)" className="h-4!" /> Resume
            </Button>
          </Link>
        )}
        <Button
          size="lg"
          className="bg-secondary/0! hover:bg-secondary/40! px-4 py-5 text-sm font-semibold"
          variant="outline"
        >
          {/* Move to client component */}
          <Check className="h-4!" /> Mark watched
        </Button>
      </div>
    </article>
  );
}
