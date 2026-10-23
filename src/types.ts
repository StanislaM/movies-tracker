export type RegisterData = {
  email: string;
  name: string;
  password: string;
};

export type LoginData = {
  email: string;
  password: string;
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

export type AgeRating = "G" | "PG" | "PG-13" | "R" | "NC-17";
