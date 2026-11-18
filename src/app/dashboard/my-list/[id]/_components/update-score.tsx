"use client";

import { updateMedia } from "@/src/features/media/media-item";
import { Loader, Star } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

type UpdateScoreProps = {
  id: string;
  userScore: number | null;
};

export default function UpdateScore({ id, userScore }: UpdateScoreProps) {
  const [score, setScore] = useState(userScore);
  const [draft, setDraft] = useState<number | null>(null);
  const [isPending, setIsPending] = useState(false);

  const updateScoreHandler = async (newScore: number) => {
    if (isPending) {
      return;
    }
    if (score === newScore || newScore > 10 || newScore < 0) {
      return;
    }
    setIsPending(true);

    const res = await updateMedia(id, { userScore: newScore });

    if (!res.isOk) {
      toast.warning(res.errorMessage);
      setIsPending(false);
      return;
    }

    toast.success("Score updated");
    setScore(newScore);
    setIsPending(false);
  };

  return (
    <div className="flex w-full items-center gap-x-2">
      <div className="flex grow">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square min-w-0 grow cursor-pointer pr-0.5"
            onMouseEnter={() => isPending || setDraft(i + 1)}
            onMouseLeave={() => isPending || setDraft(null)}
            onClick={() => updateScoreHandler(i + 1)}
          >
            <Star
              className="h-full w-full"
              fill={
                draft
                  ? draft >= i + 1
                    ? "var(--primary)"
                    : "none"
                  : score
                    ? score >= i + 1
                      ? "var(--primary)"
                      : "none"
                    : "none"
              }
              stroke={
                draft
                  ? draft >= i + 1
                    ? "var(--primary)"
                    : "var(--accent-foreground)"
                  : score
                    ? score >= i + 1
                      ? "var(--primary)"
                      : "var(--accent-foreground)"
                    : "var(--accent-foreground)"
              }
            />
          </div>
        ))}
      </div>
      <span className="xs:w-9 flex h-8 w-7 shrink-0 items-center font-serif text-2xl font-bold">
        {isPending ? (
          <Loader className="animate-spin" />
        ) : (
          draft || (score ?? "NA")
        )}
      </span>
    </div>
  );
}
