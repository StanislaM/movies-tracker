import { Button } from "@/src/components/ui/button";
import { getContinueWatching } from "@/src/features/media/media-item";
import { convertMinutesToHours } from "@/src/lib/utils";
import { Play } from "lucide-react";
import Link from "next/link";
import AddMediaModal from "./add-media-modal";
import MarkWatchedButton from "./mark-watched-button";
import { Skeleton } from "@/src/components/ui/skeleton";
import { Suspense } from "react";

const ContinueWatchingSkeleton = async () => {
  return <Skeleton className="h-100 w-full rounded-3xl" />;
};

async function ContinueWatchingContent() {
  const res = await getContinueWatching();

  if (!res.isOk) {
    return null;
  }

  if (res.data === null) {
    return (
      <div className="flex flex-col items-start">
        <h3 className="mb-1 font-serif text-4xl">Continue watching</h3>
        <h4 className="text-muted-foreground mb-2 font-serif text-2xl">
          Nothing here yet. Pick something to watch
        </h4>
        <div className="bg-muted/75 flex items-center gap-x-1 rounded-xl px-3 py-1.5">
          <Button
            nativeButton={false}
            className="px-4 font-bold tracking-widest uppercase"
            size="lg"
            role="link"
            render={<Link href="/dashboard/my-list">My List</Link>}
            variant="outline"
          />
          <span className="font-bold">OR</span>
          {/* Add movie button */}
          <AddMediaModal />
        </div>
      </div>
    );
  }

  const mediaItem = res.data;

  const convertedDuration = convertMinutesToHours(mediaItem.duration);

  return (
    <article
      style={{ backgroundImage: `url('${mediaItem.imgUrl}')` }}
      className={`outline-muted relative flex flex-col items-start overflow-hidden rounded-3xl bg-cover bg-right bg-no-repeat p-10 outline md:bg-size-[70%]`}
    >
      {/* Cover */}
      <div className="md:from-background from-background/80 to-background/80 md:to-background/0 absolute top-0 left-0 h-full w-full bg-linear-to-r from-30%" />

      <div className="text-muted-foreground relative mb-8 flex items-center text-xs font-semibold tracking-widest md:mb-12">
        <span className="bg-primary mr-2 mb-0.5 block h-2 w-2 rounded-full" />
        Continue watching
      </div>

      <div className="text-muted-foreground relative mb-3 flex items-center gap-x-2 text-xs font-medium">
        <span>{mediaItem.releaseYear}</span>
        <span className="bg-muted-foreground h-0.5 w-0.5 rounded-full" />
        <span className="capitalize">{mediaItem.type}</span>
        <span className="bg-muted-foreground h-0.5 w-0.5 rounded-full" />
        <span>
          {convertedDuration.hours && `${convertedDuration.hours}h`}{" "}
          {convertedDuration.minutes}m
        </span>

        {mediaItem.ageRating && mediaItem.ageRating !== "none" && (
          <>
            <span className="bg-muted-foreground h-0.5 w-0.5 rounded-full" />
            <span className="border-muted-foreground/50 rounded-sm border px-1 text-[10px] capitalize">
              {mediaItem.ageRating}
            </span>
          </>
        )}
      </div>

      <Link
        href={`/dashboard/my-list/${mediaItem.id}`}
        className="hover:text-primary relative mb-2.5 font-serif text-4xl transition sm:mb-6 sm:text-5xl md:text-7xl"
      >
        {mediaItem.title}
      </Link>

      <p className="text-muted-foreground bg-background/35 relative mb-4 max-w-140 rounded-2xl p-2 text-sm leading-6 sm:mb-5">
        {mediaItem.description}
      </p>

      <div className="relative flex flex-wrap gap-x-3 gap-y-3">
        {mediaItem.watchUrl && (
          <Link href={mediaItem.watchUrl} target="_blank">
            <Button
              size="lg"
              className="px-4 py-5 text-sm font-semibold"
              variant="secondary"
            >
              <Play fill="var(--accent-foreground)" className="h-4!" /> Resume
            </Button>
          </Link>
        )}
        <MarkWatchedButton id={mediaItem.id} />
        <Button
          size="lg"
          className="bg-secondary/0! hover:bg-secondary/40! px-4 py-5 text-sm font-semibold"
          variant="ghost"
          nativeButton={false}
          role="link"
          render={
            <Link href={`/dashboard/my-list/${mediaItem.id}`}>Details</Link>
          }
        />
      </div>
    </article>
  );
}

export default async function ContinueWatching() {
  return (
    <Suspense fallback={<ContinueWatchingSkeleton />}>
      <ContinueWatchingContent />
    </Suspense>
  );
}
