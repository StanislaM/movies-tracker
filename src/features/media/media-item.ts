"use server";

import { utapi } from "@/src/lib/uploadthing";
import { db } from "@/src/prisma/db";
import {
  CreateMediaItemData,
  FeatureResponse,
  genres,
  LoadMoreMediaCursor,
  LoadMoreMediaResponseData,
  mediaItemTypes,
  watchingStatuses,
} from "@/src/types";
import { StatusCodes } from "http-status-codes";
import z from "zod";
import { getSession } from "../auth/session";
import { Temporal } from "@js-temporal/polyfill";
import { convertMediaItems } from "@/src/lib/utils";

export async function createMediaItem(
  data: CreateMediaItemData,
): Promise<FeatureResponse<null>> {
  // Session validation
  const session = await getSession();
  if (!session) {
    return {
      isOk: false,
      data: null,
      status: StatusCodes.UNAUTHORIZED,
      errorMessage: "Unauthorized",
    };
  }

  // Schema validation
  const createMediaSchem = z.object({
    title: z
      .string()
      .min(1, "Title cannot be empty")
      .max(128, "Title must be at most 128 characters"),
    description: z
      .string("Description must be at most 512 characters")
      .max(512)
      .optional(),
    releaseYear: z
      .number()
      .min(0, "Non valid year")
      .max(9999, "Non valid year"),
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
  });

  // Validating
  const validatedFields = createMediaSchem.safeParse(data);

  // If fields failed vaidation
  if (!validatedFields.success) {
    return {
      isOk: false,
      status: 400,
      errorMessage: "Validation error",
      data: null,
    };
  }

  let imgData = null;

  // Img uploading

  // Img validation
  if (
    data.img instanceof File &&
    data.img.size !== 0 &&
    data.img.type.startsWith("image/")
  ) {
    // Uploading
    const [uploadResult] = await utapi.uploadFiles([data.img]);

    // If success
    if (!uploadResult.error || uploadResult.data) {
      imgData = {
        imgUrl: uploadResult.data.ufsUrl,
        imgKey: uploadResult.data.key,
      };
    } else {
      // If upload error
      return {
        isOk: false,
        data: null,
        status: uploadResult.error.code,
      };
    }
  }

  // Item creating
  try {
    await db.orm.public.MediaItem.create({
      title: data.title,
      description: data.description || null,
      type: data.type,
      genre: data.genre,
      releaseYear: data.releaseYear,
      duration: data.duration,
      ageRating: data.ageRating,
      status: data.status,
      watchUrl: data.watchUrl || null,
      saved: false,
      imgKey: imgData?.imgKey || null,
      imgUrl: imgData?.imgUrl || null,
      user: (t) => t.connect({ id: session.userId }),
    });
  } catch (err) {
    console.error(err);

    return {
      isOk: false,
      data: null,
      status: StatusCodes.INTERNAL_SERVER_ERROR,
      errorMessage: "Something went wrong",
    };
  }

  return {
    isOk: true,
    data: null,
    status: 200,
  };
}

export async function loadMoreMedia(
  cursor: LoadMoreMediaCursor,
): Promise<FeatureResponse<LoadMoreMediaResponseData>> {
  const PAGE_LIMIT = 1;

  // Session validation
  const session = await getSession();
  if (!session) {
    return {
      isOk: false,
      data: null,
      status: StatusCodes.UNAUTHORIZED,
      errorMessage: "Unauthorized",
    };
  }

  try {
    // Get media

    let mediaItems = await db.orm.public.MediaItem.where({
      userId: session.userId,
    })
      .orderBy([(p) => p.createdAt.desc()])
      .cursor({
        id: cursor.id,
        createdAt: Temporal.Instant.from(cursor.createdAt.toISOString()),
      })
      .limit(PAGE_LIMIT + 1)
      .all();

    const hasMore = mediaItems.length > PAGE_LIMIT;
    mediaItems = mediaItems.slice(0, PAGE_LIMIT);

    const last = mediaItems[mediaItems.length - 1]!;

    const newCursor = {
      id: last.id,
      createdAt: new Date(last.createdAt.epochMilliseconds),
    };

    const convertedItems = convertMediaItems(mediaItems);
    return {
      isOk: true,
      status: StatusCodes.OK,
      data: { mediaItems: convertedItems, cursor: newCursor, hasMore },
    };
  } catch (err) {
    console.error(err);

    return {
      isOk: false,
      status: StatusCodes.INTERNAL_SERVER_ERROR,
      data: null,
      errorMessage: "Something went wrong",
    };
  }
}
