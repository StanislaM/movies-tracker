import MediaListWrapper from "./_components/media-list-wrapper";

export default async function MyListPage() {
  return (
    <div className="px-6 lg:px-12">
      {/* Heading */}
      <section className="pt-8 md:pt-12">
        <div>
          <span className="text-primary mb-2 block text-xs font-semibold tracking-widest uppercase">
            Personal library
          </span>

          <h2 className="mb-4 font-serif text-4xl md:text-5xl">My list</h2>
          <div className="flex items-center justify-between">
            <p className="text-muted-foreground text-sm">
              Every story you have saved, ready whenever the mood is right.
            </p>

            {/* FIlters */}
            <div>FILTERS</div>
          </div>
        </div>
      </section>

      {/* Media items list */}
      <section className="pt-7">
        <MediaListWrapper />
      </section>
    </div>
  );
}
