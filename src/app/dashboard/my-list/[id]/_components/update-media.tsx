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
import { Play } from "lucide-react";
import UpdateInput from "./update-input";
import UpdateSelect from "./update-select";

type UpdateMediaProps = {
  mediaItem: IMedia;
};

export default function UpdateMedia({ mediaItem }: UpdateMediaProps) {
  return (
    <div className="flex">
      {/* Information section */}
      <div className="max-w-3xl grow">
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
      </div>

      {/* Img section */}
    </div>
  );
}
