"use client";

import MediaItemCard from "@/src/components/media-item-card";
import MideItemInfoModal from "@/src/components/media-item-info-modal";
import { loadMoreMedia } from "@/src/features/media/media-item";
import {
  Filters,
  IMedia,
  LoadMoreMediaCursor,
  WatchingStatus,
} from "@/src/types";
import { StatusCodes } from "http-status-codes";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { toast } from "sonner";

type MediaListProps = {
  mediaItems: IMedia[];
  cursor: LoadMoreMediaCursor | null;
  hasMore: boolean;
  filters: Filters;
};

export default function MediaList(props: MediaListProps) {
  const router = useRouter();
  const { ref, inView } = useInView();
  const [items, setItems] = useState(props.mediaItems);
  const [cursor, setCursor] = useState(props.cursor);
  const [hasMore, setHasMore] = useState(props.hasMore);
  const [isLoading, setIsLoading] = useState(false);

  const [selectedItem, setSelectedItem] = useState<IMedia | null>(null);

  const loadMore = async () => {
    if (!hasMore || !cursor) {
      return;
    }

    setIsLoading(true);

    const res = await loadMoreMedia(cursor, props.filters);

    if (res.isOk && res.data) {
      setCursor(res.data.cursor);
      setHasMore(res.data.hasMore);
      setItems([...items, ...(res.data.mediaItems || [])]);
    }

    if (!res.isOk) {
      if (res.status === StatusCodes.UNAUTHORIZED) {
        toast.warning("Session has been expired");
        router.push("/login");
      }

      toast.warning(res.errorMessage);
    }

    setIsLoading(false);
  };

  const deleteItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  useEffect(() => {
    if (inView) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      loadMore();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  if (!items || items.length === 0) {
    return <div>No items</div>;
  }

  return (
    <>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-5">
        {items.map((item) => (
          <MediaItemCard
            className="w-full"
            key={item.id}
            {...item}
            deleteSelfAction={deleteItem}
            setSelfSelectedAction={(status: WatchingStatus) =>
              setSelectedItem({ ...item, status })
            }
          />
        ))}
        {isLoading ? (
          <div className="flex aspect-3/4 w-full cursor-pointer items-center justify-center">
            <Loader className="h-20 w-20 animate-spin" />
          </div>
        ) : (
          hasMore && (
            <div
              className="bg-muted/15 hover:bg-muted/35 flex aspect-3/4 w-full cursor-pointer items-center justify-center rounded-2xl uppercase transition"
              onClick={loadMore}
              ref={ref}
            >
              Load more
            </div>
          )
        )}
      </div>

      {selectedItem && (
        <MideItemInfoModal
          item={selectedItem}
          onCloseAction={() => setSelectedItem(null)}
        />
      )}
    </>
  );
}
