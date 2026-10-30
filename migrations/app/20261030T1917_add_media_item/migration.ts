#!/usr/bin/env -S node
import type { Contract as End } from '../../snapshots/9536b0cd10e13b6c0205be45afccf6ac2467d95aee21b1e639af59a1c4b9bdda/contract';
import endContract from '../../snapshots/9536b0cd10e13b6c0205be45afccf6ac2467d95aee21b1e639af59a1c4b9bdda/contract.json' with { type: 'json' };
import type { Contract as Start } from '../../snapshots/d07f27f7f0bf2c183562f6283b46888107411660a8d99e751721bd0ee335936e/contract';
import startContract from '../../snapshots/d07f27f7f0bf2c183562f6283b46888107411660a8d99e751721bd0ee335936e/contract.json' with { type: 'json' };
import {
  Migration,
  MigrationCLI,
  checkExpression,
  col,
  fn,
  primaryKey,
} from '@prisma/orm-postgres/migration';

export default class M extends Migration<Start, End> {
  override readonly startContractJson = startContract;
  override readonly endContractJson = endContract;

  override get operations() {
    return [
      this.createTable({
        schema: 'public',
        table: 'MediaItem',
        columns: [
          col('ageRating', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('createdAt', 'timestamptz', {
            notNull: true,
            default: fn('now()'),
            codecRef: { codecId: 'pg/timestamptz-temporal@1' },
          }),
          col('description', 'text', { codecRef: { codecId: 'pg/text@1' } }),
          col('duration', 'int2', { notNull: true, codecRef: { codecId: 'pg/int2@1' } }),
          col('id', 'uuid', { notNull: true, codecRef: { codecId: 'pg/uuid@1' } }),
          col('imgUrl', 'text', { codecRef: { codecId: 'pg/text@1' } }),
          col('releaseYear', 'int2', { notNull: true, codecRef: { codecId: 'pg/int2@1' } }),
          col('saved', 'bool', { notNull: true, codecRef: { codecId: 'pg/bool@1' } }),
          col('status', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('title', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('type', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('userId', 'uuid', { notNull: true, codecRef: { codecId: 'pg/uuid@1' } }),
          col('userScore', 'int2', { notNull: true, codecRef: { codecId: 'pg/int2@1' } }),
          col('watchUrl', 'text', { codecRef: { codecId: 'pg/text@1' } }),
        ],
        constraints: [
          primaryKey(['id']),
          checkExpression(
            'MediaItem_status_check_399d5be8',
            "\"status\" IN ('planned', 'watching', 'completed', 'delayed', 'dropped')",
          ),
        ],
      }),
      this.createIndex({
        schema: 'public',
        table: 'MediaItem',
        index: 'MediaItem_userId_idx_a489d58a',
        columns: ['userId'],
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'MediaItem',
        foreignKey: {
          name: 'MediaItem_userId_fkey',
          columns: ['userId'],
          references: { schema: 'public', table: 'User', columns: ['id'] },
        },
      }),
    ];
  }
}

MigrationCLI.run(import.meta.url, M);
