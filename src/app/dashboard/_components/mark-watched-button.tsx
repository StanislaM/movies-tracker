"use client";

import { Button } from "@/src/components/ui/button";
import { updateMedia } from "@/src/features/media/media-item";
import { Check, Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

type MarkWatchedButtonProps = {
  id: string;
};

export default function MarkWatchedButton({ id }: MarkWatchedButtonProps) {
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);

  const markWatched = async () => {
    setIsPending(true);

    const res = await updateMedia(id, { status: "completed" });

    if (!res.isOk) {
      toast.warning(res.errorMessage);
      setIsPending(false);
      return;
    }

    toast.success("Marked as watched");
    router.refresh();
    setIsPending(false);
  };

  return (
    <Button
      size="lg"
      className="bg-secondary/0! hover:bg-secondary/40! px-4 py-5 text-sm font-semibold"
      variant="outline"
      onClick={markWatched}
      disabled={isPending}
    >
      {isPending ? (
        <Loader className="animate-spin" />
      ) : (
        <>
          <Check className="h-4!" /> Mark watched
        </>
      )}
    </Button>
  );
}
