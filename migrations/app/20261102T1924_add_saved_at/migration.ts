#!/usr/bin/env -S node
import type { Contract as End } from '../../snapshots/910f464e1b8353e7f6d95d726435cd42f6f7fcb7333fed32e879a4e2472ce591/contract';
import endContract from '../../snapshots/910f464e1b8353e7f6d95d726435cd42f6f7fcb7333fed32e879a4e2472ce591/contract.json' with { type: 'json' };
import type { Contract as Start } from '../../snapshots/b22609a50b0ba329cef785e727d4f65e93db96fc56818e448b00b846fb5e0616/contract';
import startContract from '../../snapshots/b22609a50b0ba329cef785e727d4f65e93db96fc56818e448b00b846fb5e0616/contract.json' with { type: 'json' };
import { Migration, MigrationCLI, col } from '@prisma/orm-postgres/migration';

export default class M extends Migration<Start, End> {
  override readonly startContractJson = startContract;
  override readonly endContractJson = endContract;

  override get operations() {
    return [
      this.addColumn({
        schema: 'public',
        table: 'MediaItem',
        column: col('savedAt', 'timestamptz', {
          codecRef: { codecId: 'pg/timestamptz-temporal@1' },
        }),
      }),
    ];
  }
}

MigrationCLI.run(import.meta.url, M);
