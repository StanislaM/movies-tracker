#!/usr/bin/env -S node
import type { Contract as Start } from '../../snapshots/9536b0cd10e13b6c0205be45afccf6ac2467d95aee21b1e639af59a1c4b9bdda/contract';
import startContract from '../../snapshots/9536b0cd10e13b6c0205be45afccf6ac2467d95aee21b1e639af59a1c4b9bdda/contract.json' with { type: 'json' };
import type { Contract as End } from '../../snapshots/f96162e299fb8a808aed0a232f5728ae24963065b88348a0124dd451612b16b2/contract';
import endContract from '../../snapshots/f96162e299fb8a808aed0a232f5728ae24963065b88348a0124dd451612b16b2/contract.json' with { type: 'json' };
import { Migration, MigrationCLI } from '@prisma/orm-postgres/migration';

export default class M extends Migration<Start, End> {
  override readonly startContractJson = startContract;
  override readonly endContractJson = endContract;

  override get operations() {
    return [this.dropNotNull({ schema: 'public', table: 'MediaItem', column: 'userScore' })];
  }
}

MigrationCLI.run(import.meta.url, M);
