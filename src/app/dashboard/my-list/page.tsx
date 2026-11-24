import { parseFilters } from "@/src/lib/utils";
import Filters from "./_components/filters";
import MediaListWrapper from "./_components/media-list-wrapper";

export default async function MyListPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  // Get filters
  const filters = parseFilters(await searchParams);

  return (
    <div className="px-6 lg:px-12">
      {/* Heading */}
      <section className="pt-8 md:pt-12">
        <div className="flex flex-wrap items-end justify-between gap-y-2">
          <div>
            <span className="text-primary mb-2 block text-xs font-semibold tracking-widest uppercase">
              Personal library
            </span>

            <h2 className="mb-4 font-serif text-4xl md:text-5xl">My list</h2>
            <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center">
              <p className="text-muted-foreground text-sm">
                Every story you have saved, ready whenever the mood is right.
              </p>
            </div>
          </div>

          {/* FIlters */}
          <Filters />
        </div>
      </section>

      {/* Media items list */}
      <section className="py-7">
        <MediaListWrapper filters={filters} />
      </section>
    </div>
  );
}
