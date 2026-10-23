import { SqlQueryError } from "../types";

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
