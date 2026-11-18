#!/usr/bin/env -S node
import type { Contract as Start } from "../../snapshots/875fcb54f843411d0ad1edc5be6fc9d17db9bf8bfa14496ffaeee632a9cd688f/contract";
import startContract from "../../snapshots/875fcb54f843411d0ad1edc5be6fc9d17db9bf8bfa14496ffaeee632a9cd688f/contract.json" with { type: "json" };
import type { Contract as End } from "../../snapshots/b518daaff49aab44c296cb80874ffeb018a9b2dec46d983a24f6253deea477a9/contract";
import endContract from "../../snapshots/b518daaff49aab44c296cb80874ffeb018a9b2dec46d983a24f6253deea477a9/contract.json" with { type: "json" };
import {
  Migration,
  MigrationCLI,
  col,
  placeholder,
} from "@prisma/orm-postgres/migration";

export default class M extends Migration<Start, End> {
  override readonly startContractJson = startContract;
  override readonly endContractJson = endContract;

  override get operations() {
    return [
      this.addColumn({
        schema: "public",
        table: "MediaItem",
        column: col("genre", "text", { codecRef: { codecId: "pg/text@1" } }),
      }),
      this.setNotNull({
        schema: "public",
        table: "MediaItem",
        column: "genre",
      }),
    ];
  }
}

MigrationCLI.run(import.meta.url, M);
