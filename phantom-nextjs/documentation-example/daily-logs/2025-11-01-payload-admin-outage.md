# Work Log: November 1, 2025 – Payload CMS Integration Failure

**Session Window**: 17:30 – 01:30 (≈7 hours, continued late night)

**Primary Goal**: Finish migrating from Decap CMS to Payload CMS with Supabase Postgres and verify `/admin` on Vercel.

**Result Summary**: Admin dashboard continues to return `500 Internal Server Error ("Cannot destructure property 'config' of 'G(...)' as it is undefined")`. Work paused for rest and will resume next morning at the office desktop.

---

## Context Snapshot

- **Project Phase**: CMS migration (Decap ➜ Payload) plus production-only verification.
- **Deployment Target**: https://mindscape-research.vercel.app
- **Database**: Supabase Postgres (session pooler endpoint).
- **Testing Policy**: No local auth testing; all validation must occur on Vercel.
- **Baseline before session**: Payload config + collections already authored; Supabase schema manually executed in dashboard because admin endpoint never created tables automatically.

---

## Timeline & Actions

| Time | Action | Notes |
| --- | --- | --- |
| 17:30 | Pulled latest repo at home setup | Verified dark mode + content unchanged. |
| 17:45 – 19:00 | Attempted to resolve `@payload-config` alias | Swapped between `.ts`, `.mjs`, and re-export patterns; Vercel builds alternated between "config undefined" and "module not found". |
| 19:05 | `npm install` | Previous lockfile missing payload packages due to prune; ensured `payload@3.62.0` + adapters installed locally. |
| 19:20 – 22:00 | Repeated deployments with alias experiments | Added webpack alias, tsconfig path, `payload.config.d.ts`; each attempt produced same runtime error once deployed. Local builds succeeded. |
| 22:15 | Restored `payload.config.mjs` as canonical config | Created shim `payload.config.ts` that re-exports MJS default. |
| 22:45 | Clean local build (`npm run build`) | Build passed; admin route compiled. |
| 23:00 – 00:30 | Vercel deploy from commit `1520dd9` | Deployment succeeded but `/admin/create-first-user` still 500 in production. |
| 00:45 | Pulled server logs | Repeat error `Cannot destructure property 'config' of 'eU(...)' as it is undefined` with digest `3052610427`. |
| 01:15 | Validated Supabase | Manual schema (20+ tables) previously inserted through SQL editor; no new rows from admin route. |
| 01:30 | Decision to pause | Too late (~01:36). Need rest and fresh session at office.

---

## Current Blocker

```
TypeError: Cannot destructure property 'config' of 'G(...)' as it is undefined.
  at .next/server/app/(payload)/admin/[[...segments]]/page.js:205:6569
```

- Occurs on production when hitting `/admin` -> redirect to `/admin/create-first-user` -> server 500.
- Same error message captured in browser console as well as Vercel runtime logs.
- Local build succeeds; thus issue is specific to Vercel serverless bundle resolving `@payload-config` at runtime.

---

## Manual Database Intervention

- Ran `documentation/supabase-schema.sql` manually in Supabase dashboard earlier this week.
- Tables now exist (`users`, `payload_preferences`, `blog_posts`, etc.) but remain empty because `/admin` never reached user creation step.
- Keep this in mind when debugging: we must avoid schema drift between manual SQL and Payload `push` behavior.

---

## Key Mistakes & Lessons (Do **NOT** repeat)

1. **Duplicate Config Files**
   - Having both `payload.config.ts` and `src/payload.config.ts` caused Payload CLI to load the wrong one.
   - Ensure only **one** source of truth (`payload.config.mjs`) plus a thin shim for TS consumers.

2. **Top-Level Logging in Config**
   - Adding `console.log` and env validation in `payload.config.ts` broke bundling. Keep config pure.

3. **Uninstalled Dependencies**
   - Earlier lockfile prune led to missing `payload` packages locally. Always run `npm install` after big migrations.

4. **Alias Thrashing**
   - Switching repeatedly between `.ts` and `.mjs` without clearing builds triggered caching confusion. Stick with `payload.config.mjs` + `payload.config.ts` shim.

5. **Production-Only Testing**
   - Refusal to test `/admin` locally slowed debugging. Consider temporary local testing just to isolate errors (even if final validation is on Vercel).

6. **Late-night Deployments**
   - Working past midnight led to mistakes and poor decisions. Plan future CMS sessions during daytime.

---

## Repository State (Commit `1520dd9`)

- `payload.config.mjs` – canonical Payload configuration (full collections, roles, adapters).
- `payload.config.ts` – simple re-export of default from `.mjs` used by Next.js alias `@payload-config`.
- `next.config.ts` – webpack alias points `@payload-config` to `payload.config.ts`.
- `tsconfig.json` – path mapping matches same alias.
- Admin route remains auto-generated at `src/app/(payload)/admin/[[...segments]]/page.tsx`.

---

## Environment Variables in Vercel

| Key | Status |
| --- | --- |
| `DATABASE_URL` | **Set** (Supabase session pooler, password URL encoded) |
| `PAYLOAD_SECRET` | **Set** (long hex string) |
| `NEXT_PUBLIC_SERVER_URL` | **Set** (`https://mindscape-research.vercel.app`) |
| Storage Adapter Vars | **Missing** (media upload warning appears in logs) |
| Email Adapter Vars | **Missing** (log warns emails written to console) |

*Warnings are non-blocking for current issue but should be addressed once admin works.*

---

## Outstanding Tasks for Next Session

1. **Root Cause Analysis for `config` undefined**
   - Investigate how `@payload-config` resolves at runtime on Vercel Edge.
   - Potentially replace alias with `await import('../../../../payload.config.mjs')` inside admin route to confirm.
   - Dump module map inside `.next/server/app/(payload)/admin` to inspect compiled bundle.

2. **Validate Payload CLI**
   - Try `npx payload dump-config` locally to confirm CLI sees correct config.
   - Consider `PAYLOAD_CONFIG_PATH` env override in Vercel build.

3. **Reconcile Manual Schema**
   - Decide whether to keep manual SQL or rely on `push: true`.
   - If manual schema remains, double-check migrations to avoid conflicts.

4. **Storage Adapter Plan**
   - Must pick and configure storage (Supabase Storage or AWS S3) before going live.

5. **Documentation Updates**
   - Sync `documentation/CURRENT-STATUS.md` (done separately below).
   - Keep `project-overview.md` and migration notes aligned.

---

## Message for Next AI Agent / Future Self

> The project is mid-migration to Payload CMS. All configuration lives in `payload.config.mjs`. Deployment build succeeds, but Vercel runtime still cannot resolve `@payload-config`, causing `/admin` to crash before first-user creation. Database schema exists from manual Supabase SQL execution, but no users inserted yet. Resume debugging alias resolution and consider using `PAYLOAD_CONFIG_PATH` or updating the generated admin route to import directly from the `.mjs` file. Work resumed tomorrow morning from office desktop.

---

## Next Session Start Checklist

- [ ] Coffee + rested brain (no more 1:30 AM deploys).
- [ ] Pull latest `master` (should be at `1520dd9`).
- [ ] Re-test `npm run build` (sanity check).
- [ ] Inspect `.next/server/app/(payload)/admin/[[...segments]]/page.js` artifact to see how config import is compiled.
- [ ] Experiment locally with `PAYLOAD_CONFIG_PATH=./payload.config.mjs npx payload generate:types` to ensure CLI respects path.
- [ ] Decide on storage adapter (likely Supabase Storage) after admin login works.

*End of Session – 01:36 AM, November 1, 2025*.  No More addition to this file --  Please see next day or next s
session for continuation.