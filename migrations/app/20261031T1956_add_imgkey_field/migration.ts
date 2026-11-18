#!/usr/bin/env -S node
import type { Contract as End } from '../../snapshots/b22609a50b0ba329cef785e727d4f65e93db96fc56818e448b00b846fb5e0616/contract';
import endContract from '../../snapshots/b22609a50b0ba329cef785e727d4f65e93db96fc56818e448b00b846fb5e0616/contract.json' with { type: 'json' };
import type { Contract as Start } from '../../snapshots/b518daaff49aab44c296cb80874ffeb018a9b2dec46d983a24f6253deea477a9/contract';
import startContract from '../../snapshots/b518daaff49aab44c296cb80874ffeb018a9b2dec46d983a24f6253deea477a9/contract.json' with { type: 'json' };
import { Migration, MigrationCLI, col } from '@prisma/orm-postgres/migration';

export default class M extends Migration<Start, End> {
  override readonly startContractJson = startContract;
  override readonly endContractJson = endContract;

  override get operations() {
    return [
      this.addColumn({
        schema: 'public',
        table: 'MediaItem',
        column: col('imgKey', 'text', { codecRef: { codecId: 'pg/text@1' } }),
      }),
    ];
  }
}

MigrationCLI.run(import.meta.url, M);
