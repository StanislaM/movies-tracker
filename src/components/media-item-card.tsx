"use client";

import Link from "next/link";
import { Genre, WatchingStatus, watchingStatuses } from "../types";
import Image from "next/image";
import { useState } from "react";
import {
  Bookmark,
  Ellipsis,
  Eye,
  Info,
  Play,
  SquarePen,
  Star,
  Trash,
} from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Separator } from "./ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import {
  deleteMedia,
  saveForLater,
  updateMedia,
} from "../features/media/media-item";
import { toast } from "sonner";

type MediaItemProps = {
  id: string;
  watchUrl: string | null;
  imgUrl: string | null;
  title: string;
  releaseYear: number;
  genre: Genre;
  status: WatchingStatus;
  saved: boolean;
  className?: string;
  userScore: number | null;
  deleteSelfAction?: (id: string) => void;
  setSelfSelectedAction?: (status: WatchingStatus) => void;
};

export default function MediaItemCard({
  id,
  title,
  genre,
  releaseYear,
  imgUrl,
  watchUrl,
  status,
  saved,
  className,
  userScore,
  deleteSelfAction,
  setSelfSelectedAction,
}: MediaItemProps) {
  const [img, setImg] = useState(imgUrl);
  const [isOpen, setIsOpen] = useState(false);
  const [isSaved, setIsSaved] = useState(saved);
  const [isSaving, setIsSaving] = useState(false);
  const [watchingStatus, setWatchingStatus] = useState<WatchingStatus>(status);
  const [isStatusUpdating, setIsStatusUpdating] = useState(false);

  const saveForLaterHandler = async () => {
    setIsSaving(true);

    const res = await saveForLater(id, !isSaved);

    if (!res.isOk) {
      toast.warning(res.errorMessage);
      setIsSaving(false);
      return;
    }

    toast.success(res.data ? "Saved" : "Removed from saved");
    setIsSaved(res.data!);
    setIsSaving(false);
  };

  const updateStatus = async (newStatus: WatchingStatus) => {
    setIsStatusUpdating(true);

    const res = await updateMedia(id, { status: newStatus });

    if (!res.isOk) {
      toast.warning(res.errorMessage);
      setIsStatusUpdating(false);
      return;
    }

    toast.success("Status changed");
    setIsStatusUpdating(false);
  };

  const deleteMediaHandler = async () => {
    const res = await deleteMedia(id);

    if (!res.isOk) {
      toast.warning(res.errorMessage);
      return;
    }

    toast.success("Successfully deleted");
    setIsOpen(false);
    if (deleteSelfAction) {
      deleteSelfAction(id);
    }
  };

  return (
    <article className={` ${className}`}>
      {/* Complete deletion dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="w-fit">
          <DialogHeader>
            <DialogTitle>Are you sure?</DialogTitle>
            <DialogDescription>This operation is permanent</DialogDescription>
            <div className="flex gap-x-1">
              <Button
                size="lg"
                onClick={() => setIsOpen(false)}
                className="grow"
                variant="secondary"
              >
                Cancel
              </Button>
              <Button
                size="lg"
                variant="destructive"
                className="grow"
                onClick={deleteMediaHandler}
              >
                Delete
              </Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <div className="group relative mb-2 aspect-3/4 overflow-hidden rounded-2xl border">
        {/* Score */}
        {userScore !== null && (
          <div className="bg-accent-foreground/45 absolute top-4 left-4 z-10 flex h-12 w-12 items-center justify-center rounded-full text-2xl font-semibold">
            <span className="relative z-2">{userScore ?? "N/A"}</span>
            <Star
              className="absolute z-1 h-10 w-10 opacity-70"
              fill="var(--primary)"
              stroke="var(--primary)"
            />
          </div>
        )}
        {/* Image */}
        {img ? (
          <Image
            alt="poster"
            src={img}
            onError={() => setImg(null)}
            fill
            className="aspect-3/4 w-full object-cover transition duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="from-muted to bg-muted-foreground/10 relative aspect-3/4 h-full w-full overflow-hidden bg-linear-45 from-40%">
            <span className="animate-marquee absolute top-1/2 -translate-y-1/2 text-8xl font-extrabold text-nowrap uppercase">
              {title}
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
        {/* Save for later */}
        <Button
          size="icon-lg"
          className={`bg-background/30 hover:bg-background/50 absolute top-4 right-4 h-12 w-12 rounded-full hover:scale-110 ${!isSaved && "opacity-45"} hover:opacity-100`}
          onClick={saveForLaterHandler}
          disabled={isSaving}
        >
          <Bookmark
            fill={`${isSaved ? "var(--primary)" : "none"}`}
            stroke={`${!isSaved ? "var(--primary)" : "none"}`}
          />
        </Button>
      </div>
      <div className="mb-0.5 flex items-center justify-between">
        <Link
          className="hover:text-primary transition hover:underline"
          href={`/dashboard/my-list/${id}`}
        >
          {title}
        </Link>

        {/* Actions */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Ellipsis />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              {setSelfSelectedAction && (
                <DropdownMenuItem
                  onClick={() => {
                    setSelfSelectedAction(watchingStatus);
                  }}
                >
                  <Info />
                  Details
                </DropdownMenuItem>
              )}
              <DropdownMenuItem
                render={
                  <Link href={`/dashboard/my-list/${id}`}>
                    <SquarePen />
                    Edit
                  </Link>
                }
              ></DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <Eye /> Status
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuRadioGroup
                      value={watchingStatus}
                      onValueChange={async (value) => {
                        setWatchingStatus(value);
                        await updateStatus(value);
                      }}
                    >
                      {watchingStatuses.map((item) => (
                        <DropdownMenuRadioItem
                          className="capitalize"
                          key={item}
                          value={item}
                          disabled={isStatusUpdating}
                        >
                          {item}
                        </DropdownMenuRadioItem>
                      ))}
                    </DropdownMenuRadioGroup>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
              <Separator className="my-1" />
              <DropdownMenuItem
                variant="destructive"
                onClick={() => setIsOpen(true)}
              >
                <Trash />
                Delete
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex items-center gap-x-1">
        <span className="text-muted-foreground text-xs">{releaseYear}</span>
        <span className="bg-muted-foreground h-0.5 w-0.5 rounded-full" />
        <span className="text-muted-foreground text-xs capitalize">
          {genre}
        </span>
      </div>
    </article>
  );
}
