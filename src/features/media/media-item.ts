"use server";

import { utapi } from "@/src/lib/uploadthing";
import { db } from "@/src/prisma/db";
import {
  CreateMediaItemData,
  FeatureResponse,
  IMedia,
  LoadMoreMediaCursor,
  LoadMoreMediaResponseData,
  updateMediaItemData,
} from "@/src/types";
import { StatusCodes } from "http-status-codes";
import { getSession } from "../auth/session";
import { Temporal } from "@js-temporal/polyfill";
import { convertMediaItems } from "@/src/lib/utils";
import { createMediaSchema, mediaUpdateSchema } from "./validation";

//#region Create Media Item
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

  // Validating
  const validatedFields = createMediaSchema.safeParse(data);

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
// #endregion
//#region Update Media
export async function updateMedia(
  id: string,
  data: updateMediaItemData,
): Promise<FeatureResponse<boolean>> {
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

  // Field validation
  const validationResult = mediaUpdateSchema.safeParse(data);

  if (!validationResult.success) {
    return {
      isOk: false,
      status: StatusCodes.BAD_REQUEST,
      data: false,
      errorMessage: "Wrong data",
    };
  }

  try {
    // Update media
    const res = await db.orm.public.MediaItem.where({
      userId: session.userId,
      id,
    }).update({ ...data });

    if (!res) {
      return {
        isOk: false,
        status: StatusCodes.BAD_REQUEST,
        data: false,
        errorMessage: "Cannot change media",
      };
    }

    return {
      isOk: true,
      status: StatusCodes.OK,
      data: true,
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
// #endregion
//#region Delete Media Image
export async function deleteMediaImage(
  id: string,
  key: string,
): Promise<FeatureResponse<boolean>> {
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
    const mediaItem = await db.orm.public.MediaItem.where({
      id,
      imgKey: key,
      userId: session.userId,
    }).first();

    if (!mediaItem) {
      return {
        isOk: false,
        status: StatusCodes.NOT_FOUND,
        data: false,
        errorMessage: "Not found",
      };
    }

    const deletionResult = await utapi.deleteFiles(key);

    if (!deletionResult.success) {
      return {
        isOk: false,
        status: StatusCodes.INTERNAL_SERVER_ERROR,
        data: false,
        errorMessage: "Failed to delete image",
      };
    }

    await db.orm.public.MediaItem.where({ id, userId: session.userId }).update({
      imgKey: null,
      imgUrl: null,
    });

    return {
      isOk: true,
      data: true,
      status: StatusCodes.OK,
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
// #endregion
//#region Update Media Image
export async function updateMediaImage(
  id: string,
  newImage: File,
): Promise<FeatureResponse<boolean>> {
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

  // Image validation
  if (
    !(newImage instanceof File) ||
    newImage.size === 0 ||
    !newImage.type.startsWith("image/")
  ) {
    // Wrong image format
    return {
      isOk: false,
      data: false,
      status: StatusCodes.BAD_REQUEST,
      errorMessage: "Wrong image format",
    };
  }

  try {
    // Get media item
    const mediaItem = await db.orm.public.MediaItem.where({
      id,
      userId: session.userId,
    }).first();
    // If cannot find
    if (!mediaItem) {
      return {
        isOk: false,
        data: false,
        status: StatusCodes.NOT_FOUND,
        errorMessage: "Cannot find media",
      };
    }

    // Old image deletion
    if (mediaItem.imgKey) {
      const deletionResult = await utapi.deleteFiles(mediaItem.imgKey);
      if (!deletionResult.success) {
        return {
          isOk: false,
          status: StatusCodes.INTERNAL_SERVER_ERROR,
          data: false,
          errorMessage: "Failed to delete image",
        };
      }
      await db.orm.public.MediaItem.where({
        id,
        userId: session.userId,
      }).update({ imgKey: null, imgUrl: null });
    }

    // New image uploading
    const uploadingResult = await utapi.uploadFiles(newImage);
    // If failed to upload
    if (uploadingResult.error) {
      return {
        isOk: false,
        status: StatusCodes.INTERNAL_SERVER_ERROR,
        data: false,
        errorMessage: "Failed to upload image",
      };
    }
    // Update new image url
    const updatedMedia = await db.orm.public.MediaItem.where({
      id,
      userId: session.userId,
    }).update({
      imgKey: uploadingResult.data.key,
      imgUrl: uploadingResult.data.ufsUrl,
    });

    if (!updatedMedia) {
      return {
        isOk: false,
        status: StatusCodes.INTERNAL_SERVER_ERROR,
        data: false,
        errorMessage: "Failed to update media",
      };
    }

    return {
      isOk: true,
      data: true,
      status: StatusCodes.OK,
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
// #endregion
//#region Save for Later
export async function saveForLater(
  id: string,
  saved: boolean,
): Promise<FeatureResponse<boolean>> {
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
    // Get media item
    const mediaItem = await db.orm.public.MediaItem.where({
      id,
      userId: session.userId,
    }).first();
    // If cannot find
    if (!mediaItem) {
      return {
        isOk: false,
        data: false,
        status: StatusCodes.NOT_FOUND,
        errorMessage: "Cannot find media",
      };
    }

    // Updating
    const updatedMedia = await db.orm.public.MediaItem.where({
      id,
      userId: session.userId,
    }).update({
      saved,
      savedAt: saved
        ? Temporal.Instant.fromEpochMilliseconds(Date.now())
        : null,
    });

    if (!updatedMedia) {
      return {
        isOk: false,
        status: StatusCodes.INTERNAL_SERVER_ERROR,
        data: false,
        errorMessage: "Failed to update media",
      };
    }

    return {
      isOk: true,
      data: updatedMedia.saved,
      status: StatusCodes.OK,
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
// #endregion
//#region Load More Media
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
      id: last?.id,
      createdAt: new Date(last?.createdAt.epochMilliseconds),
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
// #endregion
//#region Delete Media
export async function deleteMedia(id: string): Promise<FeatureResponse<null>> {
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
    // Delete item
    const deletedItem = await db.orm.public.MediaItem.where({
      userId: session.userId,
      id,
    }).delete();

    if (!deletedItem) {
      return {
        isOk: false,
        data: null,
        status: StatusCodes.NOT_FOUND,
        errorMessage: "Media item not found",
      };
    }

    // Delete image
    if (deletedItem.imgKey) {
      await utapi.deleteFiles(deletedItem.imgKey);
    }

    return {
      isOk: true,
      data: null,
      status: StatusCodes.OK,
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
// #endregion
//#region Get Media
export async function getMedia(id: string): Promise<FeatureResponse<IMedia>> {
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
    const mediaItem = await db.orm.public.MediaItem.where({
      userId: session.userId,
      id,
    }).first();

    if (!mediaItem) {
      return {
        isOk: false,
        data: null,
        status: StatusCodes.NOT_FOUND,
        errorMessage: "Cannot find media",
      };
    }

    const convertedItems = convertMediaItems([mediaItem]);

    return {
      isOk: true,
      data: convertedItems[0],
      status: StatusCodes.OK,
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
// #endregion
