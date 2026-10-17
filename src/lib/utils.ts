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
