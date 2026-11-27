import Error from "@/src/components/error";
import MediaItemCard from "@/src/components/media-item-card";
import { Button } from "@/src/components/ui/button";
import { Skeleton } from "@/src/components/ui/skeleton";
import { getSession } from "@/src/features/auth/session";
import { convertMediaItems } from "@/src/lib/utils";
import { db } from "@/src/prisma/db";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Suspense } from "react";

const SavedForLaterSkeleton = async () => {
  return (
    <>
      <div>
        <Skeleton className="mb-4 h-10 w-full max-w-[320px]" />
        <Skeleton className="mb-3 h-6 w-full max-w-50" />
      </div>
      <div className="scrollbar-thumb-primary scrollbar-track-muted-foreground w-full min-w-0 overflow-x-auto pb-3 xl:pb-0">
        <div className="flex w-max gap-x-5 xl:w-full">
          <Skeleton className="h-100 w-60 shrink-0 rounded-2xl xl:w-[calc(20%-16px)]" />
          <Skeleton className="h-100 w-60 shrink-0 rounded-2xl xl:w-[calc(20%-16px)]" />
          <Skeleton className="h-100 w-60 shrink-0 rounded-2xl xl:w-[calc(20%-16px)]" />
          <Skeleton className="h-100 w-60 shrink-0 rounded-2xl xl:w-[calc(20%-16px)]" />
          <Skeleton className="h-100 w-60 shrink-0 rounded-2xl xl:w-[calc(20%-16px)]" />
        </div>
      </div>
    </>
  );
};

async function SavedForLaterContent() {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  let savedItems = null;
  try {
    savedItems = await db.orm.public.MediaItem.where({
      userId: session.userId,
      saved: true,
    })
      .orderBy([(media) => media.savedAt.desc()])
      .limit(6)
      .all();
  } catch (err) {
    console.error(err);
    return <Error />;
  }

  if (!savedItems || savedItems.length === 0) {
    return (
      <div className="flex flex-col items-start">
        <h3 className="mb-1 font-serif text-4xl">Saved for later</h3>
        <h4 className="text-muted-foreground mb-2 font-serif text-2xl">
          Nothing here yet. Save something for right night
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
        </div>
      </div>
    );
  }
  const hasMore = savedItems.length > 5;
  savedItems = convertMediaItems(savedItems.slice(0, 5));

  return (
    <>
      <div className="mb-4 flex flex-wrap items-center justify-between">
        <div>
          <h3 className="mb-1 font-serif text-4xl">Saved for later</h3>
          <span className="text-muted-foreground text-xs">
            {savedItems.length} films waiting for the right night
          </span>
        </div>
        {hasMore && (
          <Link
            href="/dashboard/my-list/?saved=true"
            className="text-accent-foreground flex opacity-45 transition hover:opacity-100"
          >
            See all <ChevronRight />
          </Link>
        )}
      </div>

      {/* Wrapper */}
      <div className="scrollbar-thumb-primary scrollbar-track-muted-foreground w-full min-w-0 overflow-x-auto pb-3 xl:pb-0">
        <div className="flex w-max gap-x-5 xl:w-full">
          {savedItems.map((item, i) => (
            <MediaItemCard
              key={i}
              {...item}
              className="w-60 shrink-0 xl:w-[calc(20%-16px)]"
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default async function SavedForLater() {
  return (
    <Suspense fallback={<SavedForLaterSkeleton />}>
      <SavedForLaterContent />
    </Suspense>
  );
}
