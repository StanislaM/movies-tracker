export type RegisterData = {
  email: string;
  name: string;
  password: string;
};

export type LoginData = {
  email: string;
  password: string;
};

export type CreateMediaItemData = {
  title: string;
  description?: string;
  releaseYear: number;
  type: MediaItemType;
  genre: Genre;
  ageRating?: string;
  duration: number;
  status: WatchingStatus;
  watchUrl?: string;
  img: File | null;
};

export type FeatureResponse<T> = {
  isOk: boolean;
  status: number | string;
  errorMessage?: string;
  data: T | null;
};

export type SessionData = {
  userId: string;
  name: string;
  email: string;
  imgUrl: string | null;
} | null;

export type RegisterResponseData = {
  name: string;
  email: string;
  imgUrl: string | null;
};

export type LoginResponseData = {} & RegisterResponseData;

export type SqlQueryError = {
  kind: "sql_query";
  sqlState: string;
};

export interface IUser {
  name: string;
  email: string;
  imgUrl: string | null;
}

export type MediaItemType = "movie" | "series" | "anime" | "short movie";
export const mediaItemTypes = ["movie", "series", "anime", "short movie"];

export type AgeRating = "G" | "PG" | "PG-13" | "R" | "NC-17" | "None";
export const ageRatings = ["G", "PG", "PG-13", "R", "NC-17", "None"];

export type Genre =
  | "action"
  | "adventure"
  | "comedy"
  | "drama"
  | "horror"
  | "sci-fi"
  | "fantasy"
  | "thriller"
  | "crime"
  | "romance"
  | "mystery"
  | "western"
  | "historical"
  | "war"
  | "animation"
  | "documentary"
  | "musical"
  | "other";
export const genres = [
  "action",
  "adventure",
  "comedy",
  "drama",
  "horror",
  "sci-fi",
  "fantasy",
  "thriller",
  "crime",
  "romance",
  "mystery",
  "western",
  "historical",
  "war",
  "animation",
  "documentary",
  "musical",
  "other",
];

export type WatchingStatus =
  "planned" | "watching" | "completed" | "delayed" | "dropped";
export const watchingStatuses = [
  "planned",
  "watching",
  "completed",
  "delayed",
  "dropped",
];
