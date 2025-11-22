# Project Overview — MindScape Research *(working title)*

- **Prepared by:** GitHub Copilot (AI agent)
- **Date:** 29 October 2025 (Updated: Nov 2, 2025)
- **Location/System:** Office desktop (Windows, VS Code)
- **Primary collaborators:** Multi-agent AI workflow + human stakeholders

---

## 📜 Project Journey & Evolution

### **The Decap CMS Chapter (Oct 29-31, 2025)**
**Initial Approach**: Started with Decap CMS (formerly Netlify CMS) as the content management system.

**Why Decap Seemed Good**:
- Git-based workflow (content stored as files)
- Simple setup with GitHub OAuth
- Editorial workflow (draft → review → publish)
- Free and open source

**Why We Abandoned It** (Oct 31, 2025):
- ❌ **UI Customization Nightmare**: Spent 8 hours trying to customize dashboard list items
  - React conflicts prevented custom components
  - CSS targeting issues (dynamic classes, no stable selectors)
  - File corruption incident (8,000+ duplicate lines in custom.scss)
  - Technical limitations documented in `daily-logs/2025-10-31-cms-dashboard-work.md`
- ❌ **Limited Advanced Features**: No blocks system, no live preview, no version history UI
- ❌ **File-Based Limitations**: Git-based storage doesn't scale well for large content volumes
- ❌ **Workflow Issues**: Preview-deploy-merge cycle too slow for content editors

**Lesson Learned**: "Don't pick tools based on simplicity alone — pick based on long-term capabilities and customization power."

### **The Payload CMS Migration (Oct 31 - Nov 2, 2025)**
**Critical Decision** (Oct 31, 2025): Migrated to Payload CMS 3.8.1

**Why Payload Won**:
- ✅ **Database-First**: Postgres backend (Supabase) instead of Git files
- ✅ **Full TypeScript Integration**: Native Next.js compatibility
- ✅ **Unlimited Customization**: React components, hooks, custom fields
- ✅ **Enterprise Features**: Version history, live preview, blocks system, workflows
- ✅ **Free Tier Compatible**: All features work with Supabase free tier (500MB DB)
- ✅ **Self-Hosted**: No vendor lock-in, deploy anywhere

**Migration Challenges**:
- 🔴 **Database Schema Issues** (Nov 2, 2025): 
  - Missing system tables (`payload_locked_documents`, version tables)
  - Media table missing focal point columns
  - Solution: Created `supabase-complete-fix.sql` (comprehensive migration)
- 🔴 **Vercel Admin 500 Error** (Nov 1, 2025):
  - `/admin` throws error on production
  - `@payload-config` alias unresolved
  - Working locally but broken on Vercel
  - Documented in `daily-logs/2025-11-01-payload-admin-outage.md`

**Strategy Pivot** (Nov 2, 2025): User challenged conservative approach:
> "We don't need to run for migration of previous CMS features — when we have huge options and features then why thinking of past??"

**New Vision**: Build world-class CMS leveraging **all** Payload advanced features:
1. **Blocks System** - Flexible page builder (rich text, images, videos, CTAs, data viz)
2. **Live Preview** - Real-time content preview with shareable links
3. **SEO Automation** - Auto-generate JSON-LD, Open Graph images, breadcrumbs
4. **Custom Dashboard** - Real-time widgets (draft count, activity feed, health scores)
5. **Workflow Automation** - Auto-publish scheduled posts, Slack notifications
6. **Enhanced Media** - Focal point editor, automatic optimization
7. **Advanced Roles** - Field-level permissions, custom workflows
8. **Virtual Fields** - Auto-calculate word count, reading time, SEO scores
9. **Conditional Logic** - Dynamic forms (show premium fields only when isPremium = true)
10. **API-First** - Auto-generated REST/GraphQL endpoints

📝 **Full Implementation Plan**: See `PAYLOAD-CMS-MASTER-PLAN.md` (600+ line comprehensive guide)

---

## 💰 Budget Constraints & Infrastructure

### **Free Tier Architecture** (Critical!)
**Total Monthly Cost**: $0 (only domain name when purchased)

| Service | Free Tier Limits | Our Usage Estimate | Status |
|---------|-----------------|-------------------|--------|
| **Vercel** | 100GB bandwidth/month, unlimited builds | ~10-20GB (text-heavy content) | ✅ Safe |
| **Supabase** | 500MB database, 1GB storage, unlimited API | ~100-200MB DB, ~500MB storage | ✅ Safe |
| **GitHub** | Unlimited repos, 1GB LFS storage | ~50MB (code only) | ✅ Safe |
| **Payload CMS** | Free (self-hosted) | N/A | ✅ Free |
| **Next.js** | Free (open source) | N/A | ✅ Free |

### **Content Patterns** (User-Specified)
- **Text Content**: "Lots of blogs/articles/reports (text a lot in kbs per post)"
  - Estimate: 5-10KB per post (text only)
  - 1000 posts = ~10MB database
- **Media**: "Few MBs of PDF, images/graphs/graphics"
  - Estimate: 2-5MB per report PDF
  - 50 reports = ~150MB storage
  - Images compressed to <200KB each
- **Videos**: "Rarely video (YouTube embed mainly)"
  - Embeds: 0 bytes (external hosting)
  - Native uploads: Only if absolutely necessary (use Vimeo free tier)

### **Scaling Triggers** (When to Upgrade)
- Database >400MB → Upgrade Supabase ($25/month for 8GB)
- Storage >800MB → Use Cloudinary free tier (25GB bandwidth)
- Bandwidth >80GB/month → Upgrade Vercel Pro ($20/month for 1TB)
- **User's Strategy**: "I can spend money when userbase/traffic grows"

---

## Mission Statement
Build a trustworthy, research-driven publication platform focused on social and cyber psychology, narrative manipulation, and digital propaganda. The site should blend rigorous analysis with accessible storytelling while providing pathways for premium membership, reports, and future course offerings.

## Brand & Domain Direction
- **Working organization name:** MindScape Research *(current default)*. Alternative candidates under review: Social Mind Research, Influence Research, Collective Research.
- **Planned domain:** mindscaperesearch.org for production (availability check pending); narrative-research.org retained as fallback/staging option.
- **Brand voice:** Authoritative, evidence-based, transparent, non-partisan.
- **Design tone:** Clean, modern, data-forward with strong typography and infographics.

## Target Audiences
1. **Policy makers & NGOs** seeking credible research on information ecosystems.
2. **Academics & journalists** exploring social psychology and propaganda trends.
3. **General readers & subscribers** interested in digestible insights.
4. **Members & students** purchasing premium reports or enrolling in courses.

## Core Value Propositions
- High-quality research publications with rich data visualization.
- Expert commentary and timely blog updates.
- Structured access tiers: free content, members-only resources, and paid courses.
- Seamless contributor workflow with editorial oversight and role-based permissions.
- Ethical data collection and transparent methodology disclosures.

## Product Pillars
1. **Public Research Hub** — free articles, blogs, newsletters, and resource library.
2. **Premium Intelligence** — paid reports, member dashboards, downloadable assets.
3. **Learning Experiences** — course catalog, lesson delivery, and progress tracking (Phase 3).
4. **Contributor Ecosystem** — authenticated roles for writers, editors, publishers, and administrators with collaborative tooling.

## Feature Breakdown
### Public Area (MVP)
- Home page with hero insights, featured research, calls-to-action.
- Research listing (`/research`) and detail pages (SEO-friendly slugs).
- Blog section (`/blog`) with pagination, categories, tags.
- Newsletter signup with double opt-in and CRM integration.
- Contact form with spam protection and CRM handoff.
- About, Team, Methodology, Press, and FAQ pages.

### Authenticated Contributor Area
- Role-based access (contributor, editor, publisher, admin).
- Draft submission and editorial review workflows.
- Rich text/MDX editor with preview and media management.
- Analytics snapshots for content performance (Phase 2).

### Member & Commerce Layer (Post-MVP Foundations in Place)
- Stripe-powered subscriptions for premium content.
- Paywalled reports with secure download and view tracking.
- Individual product checkout (reports and courses).
- Member dashboard with purchase history, saved articles.
- Course delivery infrastructure (lessons, video hosting, progress tracking) scaffolded now, content later.

## Technical Architecture

### **Frontend**
- **Next.js 15.2.3** (App Router) with TypeScript + Tailwind CSS
- Server components for performance
- Responsive design with mobile-first approach
- ✅ **Dark/Light Mode** - Completed Oct 31, 2025

### **Content Management**
- **Payload CMS 3.8.1** (Self-hosted, deployed with Next.js on Vercel)
- **Database**: Supabase Postgres (free tier: 500MB)
- **Collections**:
  - `users` - Authentication with 6 role levels
  - `blog_posts` - Blog articles with SEO, versions, drafts
  - `research_articles` - In-depth research pieces
  - `reports` - Premium downloadable reports
  - `media` - Image/file uploads with focal points
  - `tags` - Content taxonomy
  - `categories` - Content organization

### **Advanced CMS Features** (Planned - See PAYLOAD-CMS-MASTER-PLAN.md)
- **Blocks System**: Flexible page builder (Rich Text, Images, Videos, CTAs, Data Viz, Code, FAQs)
- **Live Preview**: Real-time content preview with shareable links
- **Version History**: Full audit trail with rollback capability
- **Workflows**: Draft → Review → Published states
- **SEO Automation**: Auto-generate JSON-LD, Open Graph images, breadcrumbs
- **Custom Dashboard**: Real-time widgets (draft count, activity feed, publishing calendar)
- **Hooks & Automation**: Auto-publish scheduled posts, notifications, backups
- **Virtual Fields**: Auto-calculate word count, reading time, SEO scores
- **Conditional Logic**: Dynamic forms based on content type
- **API**: Auto-generated REST + GraphQL endpoints

### **Database & Storage**
- **Supabase Postgres** (Primary database)
  - Row Level Security (RLS) for multi-tenant safety
  - Connection pooler for Vercel serverless
  - Manual schema management (`push: false`)
- **Supabase Storage** (Free 1GB)
  - Media uploads (images, PDFs)
  - Automatic image optimization
  - CDN delivery
- **Fallback**: Cloudinary (25GB free bandwidth if Supabase storage exceeded)

### **Authentication & Authorization**
- **Payload CMS Built-in Auth** (JWT-based)
- **Role-Based Access Control**:
  - `super-admin` - Full access (create, edit, delete, manage users)
  - `admin` - Manage content and settings
  - `editor` - Edit all content, publish
  - `contributor` - Create/edit own content (drafts only)
  - `member` - View premium content
  - `viewer` - Read-only access
- **Backup Option**: Clerk (if extended auth workflows needed)

### **Payments & Commerce** (Phase 3 - Future)
- **Stripe** - Subscriptions, one-time purchases, customer portal
- **Fallback**: Lemon Squeezy (if Stripe unavailable in region)
- **Use Cases**:
  - Premium report purchases
  - Course enrollments
  - Membership subscriptions

### **Media & Video Hosting**
- **Images**: Supabase Storage → Cloudinary (if needed)
- **Videos**: YouTube embeds (primary), Vimeo free tier (backup)
- **Course Videos** (Phase 3): Vimeo/Mux

### **Email**
- **Transactional**: Resend or Postmark (decision pending)
- **Marketing**: Same provider with newsletter templates
- **Use Cases**:
  - Newsletter double opt-in
  - Password reset
  - Order confirmations
  - Team notifications

### **Analytics**
- **Vercel Analytics** (Free tier) - Core Web Vitals, page views
- **Plausible/Umami** (Privacy-first alternative)
- **Google Analytics 4** - Only if stakeholders require (privacy concerns)

### **Deployment**
- **Vercel** (Primary) - Free tier (100GB bandwidth/month)
  - Automatic deployments from GitHub
  - Preview deployments for PRs
  - Environment variables management
- **Fallback**: Netlify (if Vercel issues)

### **Version Control**
- **GitHub** - Code repository (free unlimited repos)
- **Branching Strategy**:
  - `main` - Production
  - `develop` - Staging
  - `feature/*` - New features
  - `fix/*` - Bug fixes
- **Commit Convention**: Conventional Commits (feat, fix, docs, chore)

---

## Information Architecture (Initial Skeleton)
```
yourdomain.org/
├── (home)
├── research/
│   ├── [slug]/
├── blog/
│   ├── [slug]/
├── reports/
│   ├── [slug]/
├── courses/
│   ├── [courseId]/
│   │   └── lessons/[lessonId]/
├── members/
│   ├── dashboard/
│   ├── my-courses/
│   ├── profile/
│   └── submissions/
├── admin/
│   ├── dashboard/
│   ├── content/
│   ├── users/
│   └── analytics/
├── pricing/
├── newsletter/
├── about/
├── team/
├── contact/
└── auth/
    ├── login/
    ├── signup/
    └── reset-password/
```

## Development Phases

### **Phase 1 — Public Foundation (Weeks 1-4)**
**Status**: 🔄 In Progress (80% Complete as of Nov 2, 2025)

**✅ Completed**:
- Next.js + TypeScript + Tailwind scaffold
- Absolute imports, linting, formatting standards
- Dark/Light mode toggle (Oct 31)
- Comprehensive SEO implementation (Oct 31)
- Payload CMS installation and configuration (Oct 31 - Nov 1)
- Advanced features research (Nov 2)
- Master plan documentation (Nov 2)

**🔄 In Progress**:
- Database schema fix (SQL script ready, waiting to run)
- Testing core functionality (save/publish/upload)

**⏳ Remaining**:
- Implement blocks system for flexible content layouts
- Build global layout (header, footer, navigation)
- Create homepage with hero and featured content
- Build content listing pages (`/research`, `/blog`)
- Newsletter integration (form → email provider)
- Contact form with spam protection

### **Phase 2 — Advanced CMS Features & Content (Weeks 5-8)**
**Focus**: Leverage Payload CMS advanced features (per PAYLOAD-CMS-MASTER-PLAN.md)

**Priority Features**:
- **Blocks System** (3-4 days)
  - Rich text, images, videos, CTAs, data viz, code, FAQs
  - Research Payload templates before implementing
- **Live Preview** (2 days)
  - Real-time preview while editing
  - Shareable preview links for stakeholders
- **SEO Automation** (2-3 days)
  - Auto-generate JSON-LD using hooks
  - Dynamic Open Graph images
  - Real-time SEO score widget
- **Custom Dashboard** (3 days)
  - Draft count widget
  - Activity feed
  - Publishing calendar
  - Content health scores
- **Workflow Automation** (2 days)
  - Auto-publish scheduled posts
  - Team notifications (Slack/Discord)
  - Auto-backup to Supabase Storage

**Content Creation**:
- Publish 3-5 initial research articles
- Launch blog with weekly posts
- Create modular research reports (PDFs)
- Test version history and draft workflows

**Engagement**:
- Comments (Giscus - GitHub-backed)
- Social sharing (Twitter, LinkedIn, Facebook)
- Reading time calculation
- Related articles sections

### **Phase 3 — Commerce & Learning (Weeks 9-14)**
> **Note**: Aspirational phase for when platform needs monetization. Currently focused on free content publishing.

**Course Platform** (Future):
- Course catalog, lesson player
- Video hosting (Vimeo/Mux)
- Enrollment tracking, progress persistence
- Completion certificates

**Commerce** (When Needed):
- Stripe integration for subscriptions
- Premium report paywalls
- Member dashboard
- Revenue analytics

### **Phase 4 — Optimization & Expansion (Weeks 15+)**
**Performance**:
- Accessibility audit (WCAG 2.1 AA)
- Core Web Vitals optimization
- Image optimization, code splitting
- Caching strategies

**Expansion** (Future):
- Localization (multi-language)
- Community features (forums, events)
- Marketing automation
- Mobile app (React Native/Expo if justified)

---

## Current Status & Immediate Actions

### **🔴 Critical: Database Schema Fix**
**Issue**: Missing Payload system tables preventing content creation
- Missing: `payload_locked_documents`, version tables, focal point columns
- **Solution**: `supabase-complete-fix.sql` (ready to run)
- **Action Required**: User must run script in Supabase SQL Editor
- **Estimated Time**: 5 minutes
- **Blocks**: All content creation until fixed

### **🔴 Critical: Vercel Admin 500 Error**
**Issue**: `/admin` throws error on production (works locally)
- Error: `@payload-config` alias unresolved
- **Documented**: `daily-logs/2025-11-01-payload-admin-outage.md`
- **Workaround**: Use local admin for now
- **Investigation**: Verify production bundle, experiment with `PAYLOAD_CONFIG_PATH` env variable

### **✅ Completed Recently**
- ✅ Advanced features research (fetched Payload docs)
- ✅ Master plan created (`PAYLOAD-CMS-MASTER-PLAN.md`)
- ✅ User guides created (`START-HERE.md`, quick fix guides)
- ✅ Documentation updated (development-roadmap.md, project-overview.md)

### **⏳ Next Immediate Actions**
1. **Run Database Fix** (User action required)
   - Open Supabase SQL Editor
   - Run `supabase-complete-fix.sql`
   - Verify tables created
2. **Test Core Functionality**
   - Create test blog post
   - Upload test image
   - Test draft → publish workflow
   - Verify version history
3. **Begin Blocks Implementation**
   - Research Payload templates (blog, ecommerce)
   - Design block schema
   - Implement rich text block first
   - Add image gallery block
4. **Fix Vercel Admin** (Lower priority - local admin works)
   - Inspect production bundle
   - Test `PAYLOAD_CONFIG_PATH` override
   - Document findings

---

## Outstanding Decisions

### **Domain & Branding**
- ⏳ Confirm **MindScape Research** as permanent name OR choose alternative
- ⏳ Secure `.org` domain (mindscaperesearch.org preferred)
- ⏳ Alternative fallback: narrative-research.org (currently retained for staging)

### **Service Providers**
- ⏳ **Email**: Resend vs Postmark (both have free tiers)
  - Resend: 3,000 emails/month free
  - Postmark: 100 emails/month free, then $1.25/1000
  - **Recommendation**: Resend (better free tier)
- ⏳ **Analytics**: Plausible vs Umami vs Google Analytics 4
  - Plausible: $9/month (10k pageviews)
  - Umami: Free self-hosted OR $9/month cloud
  - GA4: Free but privacy concerns
  - **Recommendation**: Vercel Analytics (free) + Umami self-hosted
- ⏳ **Video Hosting** (Phase 3): Vimeo vs Mux
  - Vimeo: Free tier (500MB/week upload)
  - Mux: Pay-as-you-go ($0.005/min delivered)
  - **Recommendation**: YouTube embeds (free unlimited) for now

### **Content Strategy**
- ⏳ Define editorial style guide and fact-checking workflow
- ⏳ Create content governance policy
- ⏳ Establish publishing calendar and content KPIs
- ⏳ Design data visualization component library (charts, maps)

### **Technical Architecture**
- ✅ ~~CMS Choice~~ **DECIDED**: Payload CMS (Oct 31, 2025)
- ✅ ~~Database~~ **DECIDED**: Supabase Postgres (Oct 29, 2025)
- ✅ ~~Hosting~~ **DECIDED**: Vercel (Oct 29, 2025)
- ✅ ~~SEO Implementation~~ **COMPLETED**: Oct 31, 2025
- ✅ ~~Dark Mode~~ **COMPLETED**: Oct 31, 2025
- 🔄 **Database Schema** **IN PROGRESS**: SQL fix script ready (Nov 2, 2025)
- 🔴 **Vercel Admin** **BLOCKED**: 500 error (Nov 1, 2025)

---

## Tooling & Collaboration Notes

### **Codebase**
- **Repository**: `mindscape-research` (GitHub)
- **Tech Stack**: Next.js 15.2.3 + TypeScript + Tailwind CSS + Payload CMS 3.8.1
- **Package Manager**: npm (or pnpm if preferred)

### **Version Control**
- **Strategy**: Git + GitHub
- **Branching**: 
  - `main` - Production (auto-deploy to Vercel)
  - `develop` - Staging
  - `feature/*` - New features
  - `fix/*` - Bug fixes
- **Commits**: Conventional Commits (feat, fix, docs, chore, refactor)
- **Pull Requests**: Required for `main` branch, code review mandatory

### **Task Tracking**
- **Current**: `daily-logs/` folder (date-based markdown files)
- **Future**: Consider Notion/Jira/Trello when team expands
- **Documentation**: All major decisions logged in `documentation/`

### **AI Agent Guidelines** (CRITICAL!)
📝 **All AI agents MUST**:
1. **Read documentation first** before making changes
   - `AI-AGENT-CRITICAL-GUIDELINES.md`
   - `precautions-and-guardrails.md`
   - Relevant daily logs
2. **Append daily logs** after significant work sessions
   - Date-based filenames (YYYY-MM-DD.md)
   - Document decisions, failures, lessons learned
3. **Research before implementing**
   - Check official docs (Payload, Next.js, etc.)
   - Study templates and examples
   - Don't guess or assume
4. **Preserve history**
   - Never delete past documentation
   - Always explain why decisions changed
   - Keep record of failures (like 8-hour CSS crisis)
5. **Respect budget constraints**
   - All solutions must work on free tier
   - Document usage estimates
   - Flag potential cost triggers

### **Documentation Standards**
- **Format**: Markdown (.md files)
- **Location**: `documentation/` folder
- **Types**:
  - **Guides**: Step-by-step instructions (PAYLOAD-SETUP-GUIDE.md)
  - **Decisions**: Technical choices with rationale (DATABASE-SETUP-DECISION.md)
  - **Status**: Current project state (CURRENT-STATUS.md)
  - **Workflows**: Process documentation (cms-workflow-guide.md)
  - **Daily Logs**: Day-by-day progress (daily-logs/YYYY-MM-DD.md)

---

## Success Metrics & Outcomes

### **Phase 1 Success Criteria** (Current Phase)
- ✅ Dark mode toggle working
- ✅ SEO fields comprehensive
- ✅ Payload CMS installed and configured
- ✅ Advanced features researched
- 🔄 Database schema complete (script ready)
- ⏳ Core functionality working (save/publish/upload)
- ⏳ First blog post published successfully
- ⏳ Homepage live with featured content

### **Phase 2 Success Criteria**
- Blocks system implemented (5+ block types)
- Live preview working
- SEO automation operational (auto JSON-LD)
- 10+ blog posts published
- 3+ research articles published
- Comments enabled and tested
- Social sharing functional

### **Long-Term Vision** (6-12 Months)
- **Content**: 50+ blog posts, 20+ research articles, 5+ reports
- **Traffic**: 1,000+ monthly visitors (organic search)
- **Engagement**: 10+ comments per post average
- **Newsletter**: 500+ subscribers
- **Performance**: Lighthouse score 90+ on all metrics
- **SEO**: Featured snippets in Google for key topics
- **Accessibility**: WCAG 2.1 AA compliant

### **Monetization Triggers** (Phase 3)
- **Start Charging When**:
  - 5,000+ monthly visitors
  - 1,000+ newsletter subscribers
  - High-quality premium content library (10+ reports)
  - Proven engagement (comments, shares, time on page)
- **Revenue Targets** (Year 1):
  - $500/month from premium reports
  - $1,000/month from memberships
  - $2,000/month from courses (if launched)

---

## Key Documents Reference

### **Must-Read for New Team Members**
1. `AI-AGENT-CRITICAL-GUIDELINES.md` - Agent behavior rules
2. `project-overview.md` - This document (comprehensive overview)
3. `CURRENT-STATUS.md` - Latest project status
4. `development-roadmap.md` - Detailed phase breakdown
5. `PAYLOAD-CMS-MASTER-PLAN.md` - Advanced features roadmap

### **Setup Guides**
- `PAYLOAD-SETUP-GUIDE.md` - CMS installation and configuration
- `DATABASE-SETUP-DECISION.md` - Database architecture rationale
- `SETUP-GITHUB-OAUTH.md` - GitHub OAuth configuration (Decap era)
- `START-HERE.md` - Quick start for new developers

### **Historical Context**
- `daily-logs/2025-10-31-cms-dashboard-work.md` - 8-hour CSS crisis
- `daily-logs/2025-11-01-payload-admin-outage.md` - Vercel admin failure
- `daily-logs/2025-11-01-payload-css-crisis.md` - CSS file corruption
- `CMS-MIGRATION.md` - Decap → Payload migration details

### **Technical References**
- `cms-custom-ui-implementation.md` - UI customization attempts
- `cms-workflow-guide.md` - Content publishing workflow
- `seo-implementation-summary.md` - SEO setup details
- `json-ld-auto-generation.md` - Structured data approach

---

## Lessons Learned (Critical!)

### **From Decap CMS Failure**
- ❌ **Don't pick tools for simplicity** - Pick for long-term power
- ❌ **UI customization matters** - Test customization before committing
- ❌ **Git-based CMS has limits** - Database-first scales better
- ✅ **Research thoroughly first** - Would have saved 2 days

### **From 8-Hour CSS Crisis**
- ❌ **Don't fight technical limitations** - Accept or switch tools
- ❌ **File corruption happens** - Always commit before risky changes
- ❌ **Dynamic CSS selectors are fragile** - Need stable class names
- ✅ **Document failures immediately** - Future you will thank you

### **From Payload Migration**
- ✅ **Enterprise features on free tier** - Payload proves it's possible
- ✅ **TypeScript integration matters** - Native Next.js support is gold
- ✅ **Self-hosting gives control** - No vendor lock-in anxiety
- 🔄 **Manual schema management required** - Not auto-magic like some ORMs

### **General Principles**
1. **Always preserve history** - Document past mistakes to learn from them
2. **Budget constraints drive creativity** - Free tier forces smart architecture
3. **Research before implementing** - Official docs > assumptions
4. **Test locally first** - Production surprises are expensive
5. **Incremental progress wins** - Small working steps > big broken leaps

---

*Last Updated: November 2, 2025*  
*Status: Phase 1 (80% complete) - Database fix pending*  
*Next Milestone: First blog post published using blocks system*
