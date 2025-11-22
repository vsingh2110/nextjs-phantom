# Collaboration Guide for Multi-Agent Workflow

- **Context:** MindScape Research website build
- **Audience:** Human collaborators and AI agents sharing this repository
- **Last updated:** 29 October 2025

## Roles & Responsibilities
- **Product Owner (Human):** Final decision-maker, sets priorities, reviews major changes.
- **Lead AI Agent (GitHub Copilot CLI):** Maintains documentation, orchestrates task breakdowns, safeguards architecture.
- **Supporting AI Agents:** Implement scoped tasks, generate code/content, and append logs.
- **Human Developers/Designers:** Review AI output, refine UX/UI, ensure compliance and quality.

## Workflow Expectations
1. **Preparation:**
   - Read `project-overview.md`, `development-roadmap.md`, and latest `daily-logs` entry.
   - Confirm no ongoing merge conflicts or deployment freezes.
2. **Task Definition:**
   - Document the task in the daily log before coding (what, why, owner).
   - Create or update tickets in external tracker if available.
3. **Implementation:**
   - Use feature branches (`feature/<summary>`).
   - Keep commits atomic and descriptive.
   - Run lint/tests relevant to the change; record results.
4. **Review & Merge:**
   - Submit pull request with summary, testing results, screenshots when applicable.
   - Require at least one review (human or trusted AI) before merge.
   - Update documentation if architecture or workflow changes.

## Communication Protocols
- **Daily Logs:** Mandatory updates capturing progress, blockers, and next steps.
- **Decision Records:** Major architectural decisions documented in `development-roadmap.md` or a future ADR folder.
- **Escalation:** Flag blockers or critical bugs in the log and notify stakeholders via primary communication channel (TBD).

## Coding Standards Snapshot
- TypeScript strict mode; prefer functional components and hooks.
- Tailwind for styling; extract components when utility chains grow >3 lines.
- Follow existing folder conventions; do not reorganize without consensus.
- Write docstrings/comments only when logic is non-obvious.

## Tooling Requirements
- **Git:** v2.40+ recommended.
- **Node.js:** LTS (v20+). Record upgrades in daily log before adoption.
- **Package Manager:** npm (do not mix with yarn/pnpm unless project vote).
- **Testing:** Configure Jest/React Testing Library and Playwright during Phase 2.

## Decap CMS Authentication & Team Access (GitHub OAuth + Vercel) ✅ OPERATIONAL

### ✅ Current Status (Updated: Oct 30, 2025)
- **Authentication:** Fully working with custom OAuth proxy
- **CMS Access:** `https://mindscape-research.vercel.app/admin`
- **Collections:** Research Articles, Blog Posts, Premium Reports
- **Editorial Workflow:** Enabled (Draft → Review → Publish via GitHub PRs)

### Backend Configuration
- **Repository:** `vsingh2110/mindscape-research` on `master` branch
- **Config File:** `public/config.yml` (production) and `public/admin/config.yml` (legacy reference)
- **OAuth Proxy:** Custom Next.js API route at `src/app/api/decap-oauth/route.ts`
- **Authentication Method:** GitHub OAuth (no Netlify dependency)

### GitHub OAuth App Setup (COMPLETED)
1. **OAuth App Created:** "MindScape Research - Decap CMS OAuth - Main"
   - Homepage URL: `https://mindscape-research.vercel.app`
   - Authorization callback URL: `https://mindscape-research.vercel.app/api/decap-oauth`
   - Location: https://github.com/settings/developers
2. **Environment Variables (Set in Vercel):**
   - `DECAP_GITHUB_CLIENT_ID=Ov23liiJK6XxKEjX2aQM`
   - `DECAP_GITHUB_CLIENT_SECRET=[stored in Vercel dashboard]`
3. **OAuth Flow:** GitHub → Authorize → Custom proxy exchanges code for token → postMessage to CMS → Dashboard loads

### Team Member Access & Roles

**How to Add New Team Members:**

1. **Add as GitHub Repository Collaborator:**
   ```
   Go to: https://github.com/vsingh2110/mindscape-research/settings/access
   Click "Add people"
   Enter GitHub username
   Select permission level:
     - Write: Content creators, editors (can create PRs)
     - Admin: Chief editors (can approve/merge PRs)
   ```

2. **User Login Process:**
   - Team member visits: `https://mindscape-research.vercel.app/admin`
   - Clicks "Login with GitHub"
   - Authorizes OAuth app (first time only)
   - CMS dashboard loads with their permission level

3. **Role-Based Permissions:**
   - **Repository Owner** (vsingh2110): Full control, direct publish
   - **Admin Collaborators**: Approve PRs, publish content
   - **Write Collaborators**: Create/edit content, submit for review
   - **Read Collaborators**: View-only (not useful for CMS)

### Editorial Workflow (Configured)

**Content Creation Process:**
1. **Draft:** Editor creates content in CMS, saves as draft
2. **Review:** Editor clicks "Set status: In review" → Creates GitHub PR
3. **Approval:** Admin/Chief Editor reviews PR on GitHub
4. **Publish:** Admin merges PR → Triggers Vercel deployment → Live on site

**GitHub Integration:**
- Each "In Review" submission creates a pull request
- PR title: "cms/[collection]/[slug]"
- Reviewers can comment/request changes on GitHub
- Merge to master = publish to production

### Local Development (For Developers)

**Option 1: Local Backend (Recommended for Development)**
```yaml
# In public/config.yml, add during development:
local_backend: true
```
Then run: `npx decap-server`

**Option 2: Production OAuth (For Testing)**
- Use same environment variables as Vercel
- Authenticate with GitHub OAuth like production

### Security & Access Control

**Current Access:**
- Only `vsingh2110` (repository owner) can currently log in
- OAuth app accepts any GitHub user, but repository permissions control actual access
- Non-collaborators get "403 Forbidden" when trying to save content

**Next Steps for Team Setup:**
1. Add team members as collaborators (see process above)
2. Test multi-user access and conflict resolution
3. Configure branch protection rules (require PR reviews)
4. Document content approval workflow for editors

### Troubleshooting

**Common Issues:**
- **Login loop:** Clear browser cache/cookies, try incognito mode
- **403 Forbidden:** User not added as repository collaborator
- **OAuth errors:** Check environment variables in Vercel dashboard
- **Preview not working:** Verify Next.js site is deployed and accessible

**Debug Checklist:**
1. Verify user is repository collaborator: https://github.com/vsingh2110/mindscape-research/settings/access
2. Check OAuth app callback URL matches exactly: https://github.com/settings/developers
3. Confirm Vercel environment variables are set for both Production and Preview
4. Test OAuth flow in incognito window to rule out cache issues

### Security Reminders
- Rotate OAuth secrets if exposed
- OAuth app restricted to `repo,user` scopes only
- Document any changes to auth flow in daily log
- Never commit `.env.local` files (already in `.gitignore`)

---

## Original Decap CMS Documentation (Historical - Pre-Oct 30, 2025)

<details>
<summary>Click to expand legacy documentation</summary>

## Decap CMS Authentication & Login Flow (GitHub + Vercel) - LEGACY

*[Previous documentation preserved for reference - replaced by working implementation above]*

</details>

## AI Prompt Hygiene
- Preserve context by referencing documentation excerpts rather than full files when possible.
- Avoid disclosing secrets or proprietary strategies in external AI tools.
- When an AI suggests architectural change, validate with core team before execution.

## Knowledge Sharing
- Summaries of significant research, UX findings, or stakeholder feedback should be captured in `project-overview.md` (high-level) or appendices as needed.
- Use diagrams (sequence, architecture) stored under `documentation/diagrams/` (create folder if needed) with source files included.

Adhering to this guide ensures every collaborator—human or AI—works from the same blueprint, reducing drift and preserving project integrity. ..
