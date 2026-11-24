import MediaList from "./media-list";
import { db } from "@/src/prisma/db";
import { getSession } from "@/src/features/auth/session";
import { redirect } from "next/navigation";
import { convertMediaItems } from "@/src/lib/utils";
import { Suspense } from "react";
import { Skeleton } from "@/src/components/ui/skeleton";
import { Filters } from "@/src/types";

const MediaListWrapperSkeleton = async () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-5">
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i}>
          <Skeleton className="mb-3 aspect-3/4 w-full rounded-2xl" />
          <div className="flex flex-col gap-y-1">
            <Skeleton className="h-4 w-10" />
            <Skeleton className="h-4 w-20" />
          </div>
        </div>
      ))}
    </div>
  );
};

type MediaListWrapperProps = {
  filters: Filters;
};

async function MediaListWrapperContent({ filters }: MediaListWrapperProps) {
  const session = await getSession();
  if (!session) {
    redirect("/login");
  }

  // Initial fetch
  const PAGE_LIMIT = 10;
  let mediaItems = null;
  try {
    mediaItems = await db.orm.public.MediaItem.where({
      userId: session.userId,
      ...filters,
    })
      .orderBy([(p) => p.createdAt.desc()])
      .limit(PAGE_LIMIT + 1)
      .all();
  } catch (err) {
    console.error(err);
    return <div>Something went wrong</div>;
  }

  const hasMore = mediaItems.length > PAGE_LIMIT;

  mediaItems = mediaItems.slice(0, PAGE_LIMIT);
  const last = mediaItems[mediaItems.length - 1]!;

  const cursor = last
    ? {
        id: last.id,
        createdAt: new Date(last.createdAt.epochMilliseconds),
      }
    : null;

  const convertedItems = convertMediaItems(mediaItems);

  return (
    <>
      <MediaList
        key={
          mediaItems.map((item) => item.id).join("-") + JSON.stringify(filters)
        }
        mediaItems={convertedItems}
        cursor={cursor}
        hasMore={hasMore}
        filters={filters}
      />
    </>
  );
}

export default async function MediaListWrapper({
  filters,
}: MediaListWrapperProps) {
  return (
    <Suspense fallback={<MediaListWrapperSkeleton />}>
      <MediaListWrapperContent filters={filters} />
    </Suspense>
  );
}
