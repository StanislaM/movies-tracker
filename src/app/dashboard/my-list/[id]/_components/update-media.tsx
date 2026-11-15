"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import {
  ageRatings,
  genres,
  IMedia,
  mediaItemTypes,
  watchingStatuses,
} from "@/src/types";
import { Loader, Play } from "lucide-react";
import UpdateInput from "./update-input";
import UpdateSelect from "./update-select";
import UpdateImage from "./update-image";
import { Button } from "@/src/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/ui/dialog";
import { useState } from "react";
import { deleteMedia, saveForLater } from "@/src/features/media/media-item";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type UpdateMediaProps = {
  mediaItem: IMedia;
};

export default function UpdateMedia({ mediaItem }: UpdateMediaProps) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isSaved, setIsSaved] = useState(mediaItem.saved);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const deleteMediaHandler = async () => {
    setIsDeleting(true);

    const res = await deleteMedia(mediaItem.id);

    if (!res.isOk) {
      toast.warning(res.errorMessage);
      setIsDeleting(false);
      return;
    }

    toast.success("Successfully deleted");
    router.replace("/dashboard/my-list");
  };

  const saveForLaterHandler = async () => {
    setIsSaving(true);

    const res = await saveForLater(mediaItem.id, !isSaved);

    if (!res.isOk) {
      toast.warning(res.errorMessage);
      setIsSaving(false);
      return;
    }

    toast.success(res.data ? "Saved" : "Removed from saved");
    setIsSaved(res.data!);
    setIsSaving(false);
  };

  return (
    <div className="flex gap-x-8">
      {/* Information section */}
      <section className="block max-w-3xl grow">
        <Card className="px-4 py-8">
          <CardHeader className="flex items-center gap-x-3">
            <div className="bg-muted flex h-12 w-12 items-center justify-center rounded-full">
              <Play stroke="var(--primary)" height={18} />
            </div>
            <div className="flex flex-col">
              <CardTitle className="mb-2 font-serif text-3xl">
                Update information
              </CardTitle>
              <CardDescription className="text-muted-foreground text-xs">
                Update the details of your media
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col gap-y-4">
            {/* Title */}
            <UpdateInput
              fieldName="title"
              title="Title"
              type="text"
              value={mediaItem.title}
              id={mediaItem.id}
            />

            {/* Description */}
            <UpdateInput
              fieldName="description"
              title="Description(optional)"
              type="textarea"
              value={mediaItem.description}
              id={mediaItem.id}
            />

            <div className="flex gap-x-5">
              {/* Type */}
              <UpdateSelect
                fieldName="type"
                title="Media type"
                value={mediaItem.type}
                id={mediaItem.id}
                values={mediaItemTypes}
              />

              {/* Genre */}
              <UpdateSelect
                fieldName="genre"
                title="Genre"
                value={mediaItem.genre}
                id={mediaItem.id}
                values={genres}
              />
            </div>
            <div className="flex gap-x-5">
              {/* Release year */}
              <UpdateInput
                fieldName="releaseYear"
                title="Release year"
                value={mediaItem.releaseYear}
                type="number"
                id={mediaItem.id}
              />

              {/* Duration */}
              <UpdateInput
                fieldName="duration"
                title="Duration(in minutes)"
                value={mediaItem.duration}
                type="number"
                id={mediaItem.id}
              />
            </div>
            <div className="flex gap-x-5">
              {/* Age rating */}
              <UpdateSelect
                fieldName="ageRating"
                title="Age rating"
                value={mediaItem.ageRating || "None"}
                id={mediaItem.id}
                values={ageRatings}
              />

              {/* Status */}
              <UpdateSelect
                fieldName="status"
                title="Watching status"
                value={mediaItem.status}
                id={mediaItem.id}
                values={watchingStatuses}
              />
            </div>
            {/* Watch URL */}
            <UpdateInput
              fieldName="watchUrl"
              title="URL"
              type="text"
              value={mediaItem.watchUrl}
              id={mediaItem.id}
            />
          </CardContent>
        </Card>
      </section>

      {/* Img section */}
      <section className="block max-w-sm grow">
        <Card className="px-4 py-8">
          <CardContent>
            {/* Image */}
            <UpdateImage
              imgUrl={mediaItem.imgUrl}
              imgKey={mediaItem.imgKey}
              id={mediaItem.id}
            />

            {/* Save for later, deletion */}
            <div className="mt-5 flex gap-x-5">
              <Button
                size="lg"
                variant={isSaved ? "outline" : "default"}
                className="grow"
                disabled={isSaving}
                onClick={saveForLaterHandler}
              >
                {isSaving ? (
                  <Loader className="animate-spin" />
                ) : isSaved ? (
                  "Remove from saved"
                ) : (
                  "Save for later"
                )}
              </Button>

              <Button
                size="lg"
                variant="destructive"
                className="grow"
                onClick={() => setIsOpen(true)}
                disabled={isDeleting}
              >
                Delete Item
              </Button>
            </div>
          </CardContent>
        </Card>
        {/* Deletion modal */}
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger></DialogTrigger>
          <DialogContent>
            <DialogTitle className="mb-2">Delete media</DialogTitle>
            <DialogDescription>This action is permanent</DialogDescription>
            <div className="flex gap-x-3">
              <Button
                variant="secondary"
                size="lg"
                onClick={() => setIsOpen(false)}
                className="px-5"
                disabled={isDeleting}
              >
                Cancel
              </Button>
              <Button
                variant="destructive"
                size="lg"
                className="px-5"
                onClick={deleteMediaHandler}
                disabled={isDeleting}
              >
                {isDeleting ? <Loader className="animate-spin" /> : "Delete"}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </section>
    </div>
  );
}
