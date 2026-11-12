"use client";

import { Field, FieldLabel } from "@/src/components/ui/field";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import { updateMedia } from "@/src/features/media/media-item";
import { mediaUpdateSchema } from "@/src/features/media/validation";
import { IMedia } from "@/src/types";
import { Check, Loader, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type UpdateInputProps = {
  id: string;
  fieldName: keyof IMedia;
  title: string;
  value: string | number | null;
  type: "text" | "number" | "textarea";
};

export default function UpdateInput({
  fieldName,
  title,
  type,
  value,
  id,
}: UpdateInputProps) {
  const [draft, setDraft] = useState(value ?? "");
  const [prevValue, setPrevValue] = useState(draft);
  const [status, setStatus] = useState<
    "idle" | "pending" | "success" | "error"
  >("idle");
  const [resetStatusTimer, setResetStatusTimer] =
    useState<NodeJS.Timeout | null>(null);

  const commitChanges = async () => {
    console.log(typeof draft);
    if (draft === prevValue) {
      return;
    }

    const validationResult = mediaUpdateSchema.safeParse({
      [fieldName]: draft,
    });
    if (!validationResult.success) {
      setDraft(prevValue);
      return;
    }

    setStatus("pending");

    const res = await updateMedia(id, {
      [fieldName]: draft || null,
    });
    if (!res.isOk) {
      setStatus("error");
      setDraft(prevValue);
      if (resetStatusTimer) {
        clearTimeout(resetStatusTimer);
      }
      setResetStatusTimer(setTimeout(() => setStatus("idle"), 2500));
      return;
    }

    setPrevValue(draft);
    setStatus("success");
    if (resetStatusTimer) {
      clearTimeout(resetStatusTimer);
    }
    setResetStatusTimer(setTimeout(() => setStatus("idle"), 2500));
  };

  return (
    <Field>
      <FieldLabel
        htmlFor={`update-input-${fieldName}`}
        className="text-muted-foreground capitalize"
      >
        {title}
        {status === "pending" && (
          <Loader
            className="animate-spin"
            height={14}
            stroke="var(--primary)"
          />
        )}
        {status === "success" && <Check height={14} stroke="var(--primary)" />}
        {status === "error" && <X height={14} stroke="var(--destructive)" />}
      </FieldLabel>
      {type === "textarea" ? (
        <Textarea
          className="focus-visible:ring-primary focus-visible:border-primary max-h-100 py-2 placeholder:opacity-75"
          id={`update-input-${fieldName}`}
          onChange={(e) => setDraft(e.target.value)}
          onBlur={commitChanges}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setDraft(prevValue);
              e.currentTarget.blur();
            }
            if (e.key === "Enter") {
              e.currentTarget.blur();
            }
          }}
          disabled={status === "pending"}
          value={draft}
          placeholder="Empty"
        ></Textarea>
      ) : (
        <>
          <Input
            className="focus-visible:ring-primary focus-visible:border-primary py-5 placeholder:opacity-75"
            id={`update-input-${fieldName}`}
            onChange={(e) =>
              setDraft(type === "number" ? +e.target.value : e.target.value)
            }
            onBlur={commitChanges}
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                setDraft(() => prevValue);
              }
              if (e.key === "Enter") {
                e.currentTarget.blur();
              }
            }}
            disabled={status === "pending"}
            value={draft}
            type={type}
            placeholder="Empty"
          />
          {fieldName === "watchUrl" && draft && (
            <Link
              className="hover:underline"
              target="_blank"
              href={draft.toString()}
            >
              Click to test
            </Link>
          )}
        </>
      )}
    </Field>
  );
}
