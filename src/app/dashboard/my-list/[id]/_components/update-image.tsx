"use client";

import { Button } from "@/src/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/src/components/ui/dialog";
import { Input } from "@/src/components/ui/input";
import {
  deleteMediaImage,
  updateMediaImage,
} from "@/src/features/media/media-item";
import { Check, ImageUp, Loader, X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { toast } from "sonner";

type UpdateImageProps = {
  imgUrl: string | null;
  imgKey: string | null;
  id: string;
};

export default function UpdateImage({ imgUrl, imgKey, id }: UpdateImageProps) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const imgInputRef = useRef<HTMLInputElement>(null);
  const [newImage, setNewImage] = useState<File | null>(null);

  const updateImageHandler = async () => {
    if (!newImage) {
      return;
    }

    setIsPending(true);

    const res = await updateMediaImage(id, newImage);

    if (!res.isOk) {
      toast.warning(res.errorMessage);
      setIsPending(false);
      return;
    }

    toast.success("Image updated");
    setNewImage(null);
    setIsPending(false);

    router.refresh();
  };

  const deleteImageHandler = async () => {
    if (!imgKey) {
      return;
    }

    setIsOpen(false);
    setIsPending(true);

    const res = await deleteMediaImage(id, imgKey);

    if (!res.isOk) {
      toast.warning(res.errorMessage);
      setIsPending(false);
      return;
    }

    toast.success("Image deleted");
    setIsPending(false);

    router.refresh();
  };

  return (
    <div>
      {/* Spinner while pending */}
      {isPending ? (
        <div className="from-muted/10 to-muted flex aspect-3/4 w-full flex-col items-center justify-center rounded-2xl bg-linear-60">
          <Loader className="h-15 w-15 animate-spin" />
        </div>
      ) : // If new image uploaded
      newImage ? (
        <div className="group/update-img relative cursor-pointer rounded-2xl">
          <Image
            alt="movie-image"
            src={URL.createObjectURL(newImage) || ""}
            width={300}
            height={400}
            className="aspect-3/4 w-full rounded-2xl object-cover transition group-hover/update-img:opacity-50"
          />
          <ImageUp className="absolute top-1/2 left-1/2 h-15 w-15 -translate-x-1/2 -translate-y-1/2 opacity-0 transition group-hover/update-img:opacity-100" />
          {/* Cancel new image */}
          <div
            className="bg-destructive absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full opacity-0 transition group-hover/update-img:opacity-100 hover:scale-125 [@media(hover:none)]:opacity-100"
            onClick={() => setNewImage(null)}
          >
            <X />
          </div>
          {/* Confirm new image */}
          <div
            className="bg-primary absolute right-5 bottom-5 flex h-10 w-10 items-center justify-center rounded-full opacity-0 transition group-hover/update-img:opacity-100 hover:scale-125 [@media(hover:none)]:opacity-100"
            onClick={updateImageHandler}
          >
            <Check />
          </div>
        </div>
      ) : // Show uploaded image
      imgUrl ? (
        <div
          className="group/update-img relative cursor-pointer rounded-2xl"
          onClick={() => imgInputRef.current?.click()}
        >
          <Image
            alt="movie-image"
            src={imgUrl}
            width={300}
            height={400}
            className="aspect-3/4 w-full rounded-2xl object-cover transition group-hover/update-img:opacity-50"
          />
          <ImageUp className="absolute top-1/2 left-1/2 h-15 w-15 -translate-x-1/2 -translate-y-1/2 opacity-0 transition group-hover/update-img:opacity-100" />
          <div
            className="bg-destructive absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full opacity-0 transition group-hover/update-img:opacity-100 hover:scale-125 [@media(hover:none)]:opacity-100"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(true);
            }}
          >
            <X />
          </div>
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="mb-2">Delete image</DialogTitle>
                <DialogDescription>This action is permanent</DialogDescription>
              </DialogHeader>
              <div className="flex gap-x-3">
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(false);
                  }}
                  className="px-5"
                >
                  Cancel
                </Button>
                <Button
                  variant="destructive"
                  size="lg"
                  className="px-5"
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteImageHandler();
                  }}
                >
                  Delete
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      ) : (
        // If no image uploaded
        <div
          className="from-muted/10 to-muted relaive flex aspect-3/4 w-full items-center justify-center rounded-2xl bg-linear-60 transition hover:opacity-75"
          onClick={() => {
            if (imgInputRef.current) {
              imgInputRef.current.click();
            }
          }}
        >
          <ImageUp className="h-15 w-15" />
        </div>
      )}
      <Input
        type="file"
        ref={imgInputRef}
        className="hidden"
        onChange={(e) => {
          if (e.target.files) {
            if (
              e.target.files[0].type.includes("jpg") ||
              e.target.files[0].type.includes("jpeg") ||
              e.target.files[0].type.includes("png") ||
              e.target.files[0].type.includes("webp")
            ) {
              setNewImage(e.target.files[0]);
            }
          }
        }}
      />
    </div>
  );
}
