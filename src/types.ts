export type RegisterData = {
  email: string;
  name: string;
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
  imgUrl?: string;
};
