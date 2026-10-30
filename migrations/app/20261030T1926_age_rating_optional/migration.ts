#!/usr/bin/env -S node
import type { Contract as End } from '../../snapshots/875fcb54f843411d0ad1edc5be6fc9d17db9bf8bfa14496ffaeee632a9cd688f/contract';
import endContract from '../../snapshots/875fcb54f843411d0ad1edc5be6fc9d17db9bf8bfa14496ffaeee632a9cd688f/contract.json' with { type: 'json' };
import type { Contract as Start } from '../../snapshots/f96162e299fb8a808aed0a232f5728ae24963065b88348a0124dd451612b16b2/contract';
import startContract from '../../snapshots/f96162e299fb8a808aed0a232f5728ae24963065b88348a0124dd451612b16b2/contract.json' with { type: 'json' };
import { Migration, MigrationCLI } from '@prisma/orm-postgres/migration';

export default class M extends Migration<Start, End> {
  override readonly startContractJson = startContract;
  override readonly endContractJson = endContract;

  override get operations() {
    return [this.dropNotNull({ schema: 'public', table: 'MediaItem', column: 'ageRating' })];
  }
}

MigrationCLI.run(import.meta.url, M);
