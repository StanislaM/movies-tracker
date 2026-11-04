# AGENTS.md

## Stack and layout

- Next.js 16 App Router, React 19, TypeScript strict, Tailwind v4 (CSS-first in `src/app/globals.css`; there is no `tailwind.config`).
- UI is shadcn `base-nova` built on `@base-ui/react` (not Radix). `cn` comes from the `cn` package re-exported by `src/lib/utils.ts`.
- Data layer is Prisma ORM 8 (contract-first) on PostgreSQL 15+, deployed with Prisma Composer.
- Routes live in `src/app/**`; route-only components sit in colocated `_components/`. Server/domain logic lives in `src/features/**`, shared UI in `src/components/ui`, shared client-safe types/constants in `src/types.ts`.
- There are no tests or test runner. Don't run `pnpm test`; verify with `pnpm lint`, `pnpm exec tsc --noEmit`, and `pnpm build`.

## Commands

- Use pnpm (pinned `pnpm@11.21.0`), not npm or yarn.
- `pnpm dev` — Next dev server with HMR. Requires `DATABASE_URL` (direct Postgres mode).
- `pnpm dev:composer` — runs a full `build` first, then Composer with local Prisma Postgres and applies the contract. Use it to test real deployment wiring; it is slow for UI iteration.
- `pnpm lint` — ESLint flat config; ignores `migrations/**` and generated `*.d.ts`.
- `pnpm exec tsc --noEmit` — there is no `typecheck` script.
- `pnpm build` / `pnpm deploy` (`build` + deploy to Prisma Compute).
- No format script; `pnpm exec prettier --write <files>` uses `prettier-plugin-tailwindcss`.
- Commits use conventional prefixes (`feat:`, `fix:`, `chore:`).

## Environment

`prisma.config.ts` loads `.env` via `dotenv`. Required keys:

- `DATABASE_URL`
- `JWT_SECRET` — `src/features/auth/jwt.ts` throws on import if missing
- `ARGON_SALT` — hex string, parsed with `Buffer.from(..., "hex")`
- `UPLOADTHING_TOKEN`

`.env.example` only documents `DATABASE_URL`, so don't infer the full list from it. Never commit `.env*`.

## Prisma 8: contract-first workflow

- Schema is `src/prisma/contract.prisma`. There is no `prisma/schema.prisma` and no `prisma generate`.
- `src/prisma/contract.json` and `contract.d.ts` are generated but committed; they are what `db.ts`, `composer.ts`, and the app types consume. Never edit them by hand.
- After every contract change, run `pnpm contract:emit`, then create and apply a migration:
  1. `pnpm migration:plan` — writes a package under `migrations/app/` plus snapshots under `migrations/snapshots/`
  2. `pnpm migrate` (`prisma db migrate`) — applies planned migrations
- Other DB commands: `pnpm db:init` (bootstrap a DB), `pnpm db:update` (sync schema without migration history), `pnpm db:verify`, `pnpm migration:status|show|check`. Don't hand-edit migration snapshots.
- Query via `import { db } from "@/src/prisma/db"` using `db.orm.public.<Model>` (see `src/features/media/media-item.ts`). `db` prefers the Composer service binding and falls back to `DATABASE_URL`.
- DateTime columns are Temporal values at runtime (`createdAt.epochMilliseconds`), not JS `Date`. Convert at the server/client boundary via `convertMediaItems` (`src/lib/utils.ts`) before passing rows to client components.

## Application conventions

- `@/*` maps to the repo root, so imports are `@/src/...` (e.g. `@/src/components/ui/button`). The aliases in `components.json` (`@/components`, `@/lib`) are stale relative to this layout.
- `src/features/auth/{auth,session,jwt}.ts` and `src/features/media/media-item.ts` begin with `"use server"`; every export there must be async. Put shared types/constants in `src/types.ts`, not in action modules.
- Server actions return `FeatureResponse<T>` (`{ isOk, status, errorMessage?, data }`). Clients branch on `isOk`/`status`; on 401 they redirect to `/login` (see `src/app/dashboard/_components/add-media-form.tsx`).
- Auth is custom: a jose HS256 JWT in the `session` cookie plus a `Session` table; `getSession()` validates both. `src/proxy.ts` is the Next 16 proxy (replaces `middleware.ts`) and only gates the exact path `/dashboard`, so nested pages must also guard in their layouts/pages.
- UploadThing wiring is in `src/app/api/uploadthing/`; server-side uploads use `utapi` from `src/lib/uploadthing.ts`. New remote image hosts must be added to `images.remotePatterns` in `next.config.ts` (currently Pexels and `qcmee0iqhn.ufs.sh`).
- Composer wiring is split across `module.ts` (provisions Postgres + app), `service.ts` (compute service and DB dependency), and `src/prisma/composer.ts` (data contract). Change them together.

## Known doc drift

`README.md` says starter users are seeded from `src/prisma/seed.ts`, but that file does not exist; there is currently no seed step.

## Documentation

- Use Context7 when answering questions about library APIs.
- Prefer official, up-to-date documentation.
- Always consider the installed library version.
- For Next.js, use documentation relevant to Next.js 16.
- For Prisma, use documentation relevant to Prisma 8.
- Never assume that documentation for the latest
  version applies to the installed version.
- Distinguish documentation recommendations from
  the implementation currently present in this project.
