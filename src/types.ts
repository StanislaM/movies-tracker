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
