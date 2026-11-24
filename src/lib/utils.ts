import { DefaultModelRow } from "@prisma/orm-postgres/orm-client";
import {
  AgeRating,
  Genre,
  IMedia,
  MediaItemType,
  SqlQueryError,
  WatchingStatus,
  watchingStatuses,
} from "../types";
import { Contract } from "../prisma/contract";

export { cn } from "cn";

export const isSqlQueryError = (err: unknown): err is SqlQueryError => {
  if (err instanceof Error && "kind" in err && "sqlState" in err) {
    if (err.kind === "sql_query") {
      return true;
    }
  }

  return false;
};

export const convertToPartOfDay = (hours: number) => {
  if (hours >= 6 && hours < 12) {
    return "morning";
  }
  if (hours >= 12 && hours < 18) {
    return "afternoon";
  }
  if (hours >= 18 && hours < 24) {
    return "evening";
  }
  if (hours >= 24 && hours < 6) {
    return "night";
  }

  return "day";
};

export const convertMinutesToHours = (minutes: number) => {
  return {
    hours: Math.floor(minutes / 60),
    minutes: minutes % 60,
  };
};

export const convertMediaItems = (
  mediaItems: DefaultModelRow<Contract, "MediaItem", "public">[],
) => {
  return mediaItems.map((item) => ({
    ...item,
    type: item.type as MediaItemType,
    savedAt: item.savedAt ? new Date(item.savedAt.epochMilliseconds) : null,
    genre: item.genre as Genre,
    ageRating: item.ageRating as AgeRating,
    createdAt: new Date(item.createdAt.epochMilliseconds),
  })) as IMedia[];
};

export const parseFilters = (
  params: Record<string, string | string[] | undefined>,
) => {
  if (!params) {
    return null;
  }

  return {
    ...(Object.hasOwn(params, "type") ? { type: params.type as string } : {}),
    ...(Object.hasOwn(params, "genre")
      ? { genre: params.genre as string }
      : {}),
    ...(Object.hasOwn(params, "status") &&
    watchingStatuses.includes(params.status as string)
      ? { status: params.status as WatchingStatus }
      : {}),
  };
};
