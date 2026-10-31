"use client";

import { Button } from "@/src/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/src/components/ui/field";
import { Input } from "@/src/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import { Separator } from "@/src/components/ui/separator";
import { Textarea } from "@/src/components/ui/textarea";
import {
  ageRatings,
  genres,
  mediaItemTypes,
  watchingStatuses,
} from "@/src/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { ImageUp, Plus } from "lucide-react";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { Controller, useForm } from "react-hook-form";
import z from "zod";

const addMediaFormSchema = z.object({
  title: z
    .string()
    .min(1, "Title cannot be empty")
    .max(128, "Title must be at most 128 characters"),
  description: z
    .string("Description must be at most 512 characters")
    .max(512)
    .optional(),
  releaseYear: z.number().min(0, "Non valid year").max(9999, "Non valid year"),
  type: z.enum(mediaItemTypes),
  genre: z.enum(genres),
  ageRating: z
    .string()
    .max(32, "Age rating must be at most 32 characters")
    .optional(),
  duration: z.number().min(0).max(Number.MAX_SAFE_INTEGER, "To long"),
  status: z.enum(watchingStatuses),
  watchUrl: z
    .string()
    .max(512, "Link must be at most 512 characters")
    .optional(),
  imgUrl: z.string().max(512, "Link must be at most 512 characters").optional(),
});

export default function AddMediaForm({
  setIsOpenAction,
}: {
  setIsOpenAction: Dispatch<SetStateAction<boolean>>;
}) {
  const form = useForm<z.infer<typeof addMediaFormSchema>>({
    resolver: zodResolver(addMediaFormSchema),
    defaultValues: {
      title: "",
      description: "",
      releaseYear: 2020,
      type: "movie",
      genre: "action",
      ageRating: "none",
      duration: 60,
      status: "planned",
      watchUrl: "",
      imgUrl: "",
    },
  });

  async function onSubmit(data: z.infer<typeof addMediaFormSchema>) {
    console.log(data);
  }

  return (
    <form
      id="add-media-item-form"
      onSubmit={form.handleSubmit(onSubmit)}
      noValidate
    >
      <div className="flex gap-x-6">
        <FieldGroup>
          <Controller
            name="title"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel
                  className="font-normal opacity-85"
                  htmlFor="add-media-form-title"
                >
                  Title
                </FieldLabel>
                <Input
                  className="focus-visible:ring-primary focus-visible:border-primary py-4 placeholder:opacity-75"
                  {...field}
                  id="add-media-form-title"
                  aria-invalid={fieldState.invalid}
                  placeholder="e.g. Perfect Days"
                  autoComplete="off"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="description"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel
                  className="font-normal opacity-85"
                  htmlFor="add-media-form-descr"
                >
                  Description(optional)
                </FieldLabel>
                <Textarea
                  maxLength={512}
                  className="focus-visible:ring-primary focus-visible:border-primary py-3 placeholder:opacity-75"
                  {...field}
                  id="add-media-form-descr"
                  aria-invalid={fieldState.invalid}
                  placeholder="This movie about ..."
                  autoComplete="off"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <div className="flex gap-x-4">
            <Controller
              name="type"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel
                    className="font-normal opacity-85"
                    htmlFor="add-media-form-type"
                  >
                    Type
                  </FieldLabel>
                  <Select
                    {...field}
                    value={field.value}
                    onValueChange={field.onChange}
                    id="add-media-form-type"
                    aria-invalid={fieldState.invalid}
                    autoComplete="off"
                  >
                    <SelectTrigger>
                      <SelectValue className="capitalize" placeholder="Movie" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {mediaItemTypes.map((item) => (
                          <SelectItem
                            key={item}
                            value={item}
                            className="capitalize"
                          >
                            {item}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="genre"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel
                    className="font-normal opacity-85"
                    htmlFor="add-media-form-genre"
                  >
                    Genre
                  </FieldLabel>
                  <Select
                    {...field}
                    value={field.value}
                    onValueChange={field.onChange}
                    id="add-media-form-genre"
                    aria-invalid={fieldState.invalid}
                    autoComplete="off"
                  >
                    <SelectTrigger>
                      <SelectValue className="capitalize" placeholder="Movie" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {genres.map((item) => (
                          <SelectItem
                            key={item}
                            value={item}
                            className="capitalize"
                          >
                            {item}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </div>

          <div className="flex gap-x-4">
            <Controller
              name="releaseYear"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel
                    className="font-normal opacity-85"
                    htmlFor="add-media-form-release"
                  >
                    Release year
                  </FieldLabel>
                  <Input
                    type="number"
                    className="focus-visible:ring-primary focus-visible:border-primary py-4 placeholder:opacity-75"
                    {...field}
                    onChange={(e) => field.onChange(+e.target.value)}
                    id="add-media-form-release"
                    aria-invalid={fieldState.invalid}
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="duration"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel
                    className="font-normal opacity-85"
                    htmlFor="add-media-form-duration"
                  >
                    Duration(in minutes)
                  </FieldLabel>
                  <Input
                    type="number"
                    className="focus-visible:ring-primary focus-visible:border-primary py-4 placeholder:opacity-75"
                    {...field}
                    id="add-media-form-duration"
                    aria-invalid={fieldState.invalid}
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </div>

          <div className="flex gap-x-4">
            <Controller
              name="ageRating"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel
                    className="font-normal opacity-85"
                    htmlFor="add-media-form-age"
                  >
                    Age rating
                  </FieldLabel>
                  <Select
                    {...field}
                    value={field.value}
                    onValueChange={field.onChange}
                    id="add-media-form-age"
                    aria-invalid={fieldState.invalid}
                    autoComplete="off"
                  >
                    <SelectTrigger>
                      <SelectValue className="capitalize" placeholder="None" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {ageRatings.map((item) => (
                          <SelectItem
                            key={item}
                            value={item}
                            className="capitalize"
                          >
                            {item}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="status"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel
                    className="font-normal opacity-85"
                    htmlFor="add-media-form-status"
                  >
                    Status
                  </FieldLabel>
                  <Select
                    {...field}
                    value={field.value}
                    onValueChange={field.onChange}
                    id="add-media-form-status"
                    aria-invalid={fieldState.invalid}
                    autoComplete="off"
                  >
                    <SelectTrigger>
                      <SelectValue
                        className="capitalize"
                        placeholder="Planned"
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {watchingStatuses.map((item) => (
                          <SelectItem
                            key={item}
                            value={item}
                            className="capitalize"
                          >
                            {item}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </div>
        </FieldGroup>

        <div className="flex flex-col">
          <span className="text-muted-foreground mb-2 text-xs font-bold tracking-widest uppercase">
            Preview
          </span>
          {form.watch("imgUrl") ? (
            <Image
              src={form.watch("imgUrl") || ""}
              alt="preview-image"
              width={60}
              height={45}
              className="h-60 w-45"
            />
          ) : (
            <div className="from-muted to-muted/30 flex h-60 w-45 items-center justify-center rounded-2xl border bg-linear-60 transition hover:opacity-75">
              <ImageUp />
            </div>
          )}
          <h6 className="mt-2.5 mb-1 font-semibold">
            {form.watch("title") || "Untitled"}
          </h6>
          <div className="text-muted-foreground flex items-center gap-x-1 text-[10px] opacity-75">
            <span>{form.watch("releaseYear")}</span>
            <span className="bg-muted-foreground h-0.5 w-0.5 rounded-full"></span>
            <span>{form.watch("genre")}</span>
          </div>

          <Controller
            name="watchUrl"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="mt-auto">
                <FieldLabel
                  className="font-normal opacity-85"
                  htmlFor="add-media-form-watch"
                >
                  URL
                </FieldLabel>
                <Input
                  type="number"
                  className="focus-visible:ring-primary focus-visible:border-primary py-4 placeholder:opacity-75"
                  {...field}
                  id="add-media-form-watch"
                  aria-invalid={fieldState.invalid}
                  autoComplete="off"
                  placeholder="Paste url for watching"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </div>
      </div>

      <Separator className="my-4" />

      <div className="flex items-center justify-end gap-x-3">
        <Button
          type="button"
          size="lg"
          variant="ghost"
          onClick={() => setIsOpenAction(false)}
        >
          Cancel
        </Button>
        <Button type="submit" size="lg">
          <Plus /> Add to my list
        </Button>
      </div>
    </form>
  );
}
