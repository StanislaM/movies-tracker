"use client";

import { Field, FieldLabel } from "@/src/components/ui/field";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import { updateMedia } from "@/src/features/media/media-item";
import { mediaUpdateSchema } from "@/src/features/media/validation";
import { IMedia } from "@/src/types";
import { Check, Loader, X } from "lucide-react";
import { useState } from "react";

type UpdateSelectProps = {
  id: string;
  fieldName: keyof IMedia;
  title: string;
  value: string;
  values: string[];
};

export default function UpdateSelect({
  fieldName,
  title,
  value,
  values,
  id,
}: UpdateSelectProps) {
  const [draft, setDraft] = useState(value ?? "");
  const [prevValue, setPrevValue] = useState(draft);
  const [status, setStatus] = useState<
    "idle" | "pending" | "success" | "error"
  >("idle");
  const [resetStatusTimer, setResetStatusTimer] =
    useState<NodeJS.Timeout | null>(null);

  const commitChanges = async (newValue: string) => {
    if (newValue === prevValue) {
      return;
    }

    const validationResult = mediaUpdateSchema.safeParse({
      [fieldName]: newValue,
    });
    if (!validationResult.success) {
      setDraft(prevValue);
      return;
    }

    setStatus("pending");
    const res = await updateMedia(id, {
      [fieldName]: newValue || null,
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

    setPrevValue(newValue);
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

      <Select
        value={draft}
        onValueChange={async (value) => {
          setDraft(value ?? "movie");
          await commitChanges(value ?? "movie");
        }}
        disabled={status === "pending"}
      >
        <SelectTrigger className="py-5">
          <SelectValue className="capitalize" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {values.map((item) => (
              <SelectItem key={item} value={item} className="py-2 capitalize">
                {item}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </Field>
  );
}
