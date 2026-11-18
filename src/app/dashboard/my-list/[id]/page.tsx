import { Separator } from "@/src/components/ui/separator";
import { getMedia } from "@/src/features/media/media-item";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import UpdateMedia from "./_components/update-media";
import { Suspense } from "react";
import { Skeleton } from "@/src/components/ui/skeleton";

type MediaItemPageProps = {
  params: Promise<{ id: string }>;
};

async function MediaItemPageSkeleton() {
  return (
    <div className="px-6 lg:px-12">
      {/* Base info */}
      <section className="py-4 md:py-8">
        <div>
          <Link
            href="/dashboard/my-list"
            className="mb-5 flex w-fit items-center text-xs opacity-50 transition hover:opacity-100"
          >
            <ChevronLeft height={16} /> Back to my list
          </Link>
          <span className="text-primary mb-2 block text-xs font-semibold tracking-widest uppercase">
            In your library
          </span>

          <h2 className="mb-4 font-serif text-4xl md:text-5xl">
            Media details
          </h2>
          <p className="text-muted-foreground text-sm">
            Review the information for this film and make changes whenever you
            need.
          </p>
        </div>
      </section>

      <Separator />

      {/* Skeleton */}
      <section className="py-4 md:py-8">
        <div className="flex gap-x-8">
          <Skeleton className="h-180 max-w-3xl grow rounded-2xl" />
          <Skeleton className="h-140 max-w-sm grow rounded-2xl" />
        </div>
      </section>
    </div>
  );
}

async function MediaItemPageContent({ params }: MediaItemPageProps) {
  const { id } = await params;

  const res = await getMedia(id);

  if (!res.isOk || !res.data) {
    return <div>Something went wrong</div>;
  }

  const mediaItem = res.data;

  return (
    <div className="px-6 lg:px-12">
      {/* Base info */}
      <section className="py-4 md:py-8">
        <div>
          <Link
            href="/dashboard/my-list"
            className="mb-5 flex w-fit items-center text-xs opacity-50 transition hover:opacity-100"
          >
            <ChevronLeft height={16} /> Back to my list
          </Link>
          <span className="text-primary mb-2 block text-xs font-semibold tracking-widest uppercase">
            In your library
          </span>

          <h2 className="mb-4 font-serif text-4xl md:text-5xl">
            Media details
          </h2>
          <p className="text-muted-foreground text-sm">
            Review the information for this film and make changes whenever you
            need.
          </p>
        </div>
      </section>

      <Separator />

      {/* Update form */}
      <section className="py-4 md:py-8">
        <UpdateMedia mediaItem={mediaItem} />
      </section>
    </div>
  );
}

export default async function MediaItemPage({ params }: MediaItemPageProps) {
  return (
    <Suspense fallback={<MediaItemPageSkeleton />}>
      <MediaItemPageContent params={params} />
    </Suspense>
  );
}
