"use client";

import MediaItemCard from "@/src/components/media-item-card";
import { loadMoreMedia } from "@/src/features/media/media-item";
import { IMedia, LoadMoreMediaCursor } from "@/src/types";
import { Loader } from "lucide-react";
import { useState } from "react";

type MediaListProps = {
  mediaItems: IMedia[] | null;
  cursor: LoadMoreMediaCursor | null;
  hasMore: boolean;
};

export default function MediaList(props: MediaListProps) {
  const [items, setItems] = useState(props.mediaItems);
  const [cursor, setCursor] = useState(props.cursor);
  const [hasMore, setHasMore] = useState(props.hasMore);
  const [isLoading, setIsLoading] = useState(false);

  const loadMore = async () => {
    if (!items || !hasMore || !cursor) {
      return;
    }

    setIsLoading(true);

    const res = await loadMoreMedia(cursor);

    console.log(res.data?.mediaItems);
    if (res.isOk && res.data) {
      setCursor(res.data.cursor);
      setHasMore(res.data.hasMore);
      setItems([...items, ...(res.data.mediaItems || [])]);
    }

    setIsLoading(false);
  };

  if (!items || items.length === 0) {
    return <div>No items</div>;
  }

  return (
    <>
      <div className="flex flex-wrap gap-5">
        {items.map((item) => (
          <MediaItemCard className="w-60" key={item.id} {...item} />
        ))}
        {!isLoading ? (
          <div
            className="bg-muted/15 hover:bg-muted/35 flex aspect-3/4 w-60 cursor-pointer items-center justify-center rounded-2xl uppercase transition"
            onClick={loadMore}
          >
            Load more
          </div>
        ) : (
          <div className="flex aspect-3/4 w-60 cursor-pointer items-center justify-center">
            <Loader className="h-20 w-20 animate-spin" />
          </div>
        )}
      </div>
    </>
  );
}
