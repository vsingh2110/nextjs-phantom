# Precautions, Guardrails, and Common Pitfalls

- **Last updated:** 29 October 2025
- **Applies to:** All contributors, AI agents, and collaborators working on the Narrative Research project

## Operational Guardrails
- **Single source of truth:** Always review `documentation/project-overview.md` and latest entries in `documentation/daily-logs/` before commencing work.
- **Change logging:** Every session must append to the current day’s log with what was done, pending tasks, and blockers.
- **No silent overwrites:** Never delete or overwrite existing content without confirming that no other agent is simultaneously editing the same file. Use Git branches and pull requests for conflict resolution.
- **Environment variables:** Never commit secrets. Keep `.env.local` out of version control.
- **Version control discipline:** Commit frequently with descriptive messages. Avoid force pushes on shared branches.

## Architectural Cautions
- **Maintain unified domain:** Keep public, premium, and course content within the same Next.js app unless strategic change is documented.
- **Role-based access:** Enforce Supabase Row Level Security (RLS) and middleware checks for members and admin routes before exposing sensitive pages.
- **Stripe integration:** Use test keys in development, safeguard webhook signing secrets, and log all payment events for auditability.
- **Content storage:** Store long-form content in Supabase or MDX consistently. Do not mix multiple storage paradigms without documentation.
- **Media handling:** Optimize images and defer video hosting decisions until Phase 3; do not self-host large video files in the repo.

## Collaboration & AI Usage
- **Prompt transparency:** When using other AI agents, copy significant guidance back into documentation if it affects architecture or scope.
- **Consistency:** Follow existing file naming conventions, TypeScript coding standards, and Tailwind utility usage.
- **Tests & linting:** Run lint/tests locally before pushing major changes. Document any failing checks in daily logs.
- **Accessibility:** Adhere to WCAG guidelines; flag any deviations for remediation.

## Common Mistakes to Avoid
- Mixing staging and production Supabase credentials.
- Hardcoding URLs or API keys directly in components.
- Introducing breaking schema changes without migrations and documentation updates.
- Skipping responsive design checks; test across desktop, tablet, mobile breakpoints.
- Neglecting performance metrics (Largest Contentful Paint, Core Web Vitals) during layout changes.

## Incident Response Checklist
1. **Identify & isolate:** If a critical bug or security issue is detected, document in the daily log and open a high-priority task.
2. **Communicate:** Notify stakeholders via shared channel (to be decided) and include reproduction steps.
3. **Hotfix:** Create a dedicated hotfix branch, implement fix, add regression tests, and deploy after review.
4. **Postmortem:** Summarize the incident, root cause, and remediation in documentation (consider a `/incidents` folder if recurring).

## Approval Requirements
- Major architectural changes require human sign-off or consensus across AI agents with documentation in `development-roadmap.md`.
- New dependencies must be justified with rationale and alternatives considered.
- Production deployments must reference the ticket or log entry authorizing the release.

Keep this file updated as policies evolve. When in doubt, document decisions and consult human owners before executing irreversible actions.
