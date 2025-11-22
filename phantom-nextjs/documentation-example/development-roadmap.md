# Development Roadmap

- **Prepared:** 29 October 2025
- **Major Update:** November 2, 2025 (Decap → Payload CMS Migration + Advanced Features Plan)
- **Horizon:** 6-month plan, revisited weekly

---

## 📜 History & Decisions Log

### Why We're Here (The Journey)

**October 29-30, 2025**: Started with **Decap CMS** (Git-based)
- ✅ Set up GitHub OAuth
- ✅ Configured collections (Blog, Research, Reports)
- ✅ Got editorial workflow working
- ❌ **LIMITATION DISCOVERED**: Cannot customize dashboard UI (React conflicts)
- ❌ Dashboard customization blocked after 6+ failed attempts
- 📝 See `daily-logs/2025-10-31-cms-dashboard-work.md` for full story

**October 31, 2025**: **Decided to migrate to Payload CMS**
- Decap CMS too limited for our needs
- Payload CMS offers: Blocks, Live Preview, Custom UI, Better UX
- ✅ Installed Payload CMS 3.8.1
- ✅ Configured Supabase Postgres
- 📝 See `CMS-MIGRATION.md` for migration rationale

**November 1, 2025**: **8-Hour CSS Crisis & Resolution**
- ❌ Admin panel completely broken (no CSS)
- ❌ Spent 8 hours on trial-and-error
- ✅ **BREAKTHROUGH**: Found solution in official templates
- ✅ Missing line: `import '@payloadcms/next/css'`
- 📚 **LESSON LEARNED**: ALWAYS research official examples FIRST
- 📝 See `daily-logs/2025-11-01-payload-css-crisis.md` for complete story

**November 2, 2025**: **Strategy Pivot - Build World-Class CMS**
- 💡 **REALIZATION**: Stop thinking limited, use Payload's full power
- ✅ Researched ALL advanced Payload features
- ✅ Created comprehensive master plan
- 🎯 **NEW VISION**: Enterprise-grade CMS with Blocks, Live Preview, SEO automation
- 📝 See `PAYLOAD-CMS-MASTER-PLAN.md` for complete feature list

### Key Lessons From This Journey

1. **Research First**: Trial-and-error wastes time. Official docs/templates have answers.
2. **Don't Limit Yourself**: If a tool offers advanced features, use them!
3. **Document Everything**: Future you (or AI agents) will thank you.
4. **Free Tier is Powerful**: Vercel + Supabase + GitHub = $0/month, enterprise features.

---

## 💰 Budget Constraints (Important!)

### What We're Paying For:
- ✅ **Domain name only** (when we buy it)

### What's Free Forever:
- ✅ **Vercel**: Hobby plan (unlimited builds, 100GB bandwidth)
- ✅ **Supabase**: Free tier (500MB DB, 1GB storage, unlimited API requests)
- ✅ **GitHub**: Free plan (unlimited repos, unlimited collaborators)
- ✅ **Payload CMS**: Open source, self-hosted
- ✅ **Next.js**: Open source

### Free Tier Limits (Monitor These):

**Supabase Free Tier**:
- ✅ Database: 500MB (enough for ~5,000-10,000 blog posts in text)
- ✅ Storage: 1GB (enough for ~1,000 images if optimized)
- ✅ Bandwidth: Unlimited (but pooler has limits)
- ⚠️ **Our Usage**: Lots of text (KB per post), some images/PDFs (few MB), rarely video (YouTube embeds)

**Vercel Free Tier**:
- ✅ Bandwidth: 100GB/month
- ✅ Builds: Unlimited
- ✅ Serverless functions: 100GB-Hrs execution
- ⚠️ **Our Usage**: Text-heavy content (low bandwidth), lots of blog posts (manageable)

**GitHub Free**:
- ✅ Storage: Unlimited repos
- ✅ LFS: 1GB free storage (for large files)
- ⚠️ **Our Usage**: Code + text content (tiny), images go to Supabase

### 📊 Estimated Usage (With Heavy Content):

| Resource | Limit | Our Usage (Est.) | Safe? |
|----------|-------|------------------|-------|
| **Supabase DB** | 500MB | 50-100MB (1000+ posts) | ✅ Very safe |
| **Supabase Storage** | 1GB | 200-500MB (images/PDFs) | ✅ Safe |
| **Vercel Bandwidth** | 100GB/month | 5-10GB/month | ✅ Very safe |
| **GitHub Repo** | Unlimited | <100MB (code + text) | ✅ Perfect |

### 🚀 Future Scaling Plan (When We Grow):

**When to upgrade** (traffic thresholds):
- **10,000 visitors/month**: Still free tier works!
- **50,000 visitors/month**: May need Vercel Pro ($20/mo)
- **100,000+ visitors/month**: Consider Supabase Pro ($25/mo) + Vercel Pro

**Why We Can Wait**:
- Text content is TINY (10KB per post average)
- Images optimized with Payload (multiple sizes, compression)
- Videos are YouTube embeds (zero hosting cost)
- CDN edge caching reduces bandwidth

---

## Phase 1 — Public Foundation (Target: Weeks 1–4)

### ✅ COMPLETED (Oct 29 - Nov 2, 2025):
- ✅ Establish Next.js + TypeScript + Tailwind scaffold
- ✅ Configure absolute imports, linting (`eslint`, `prettier`), formatting standards
- ✅ **Dark/Light Mode Toggle** (Oct 31) - Site-wide theme switcher with localStorage persistence
- ✅ **SEO Implementation Complete** (Oct 31) - Comprehensive SEO fields in CMS
- ✅ **Decap CMS Setup** (Oct 29-30) - GitHub OAuth, collections, editorial workflow
- ✅ **Payload CMS Migration** (Oct 31 - Nov 1) - Installed, configured, CSS fixed
- ✅ **Advanced Features Research** (Nov 2) - Studied blocks, live preview, hooks, etc.
- ✅ **Master Plan Created** (Nov 2) - Comprehensive roadmap for world-class CMS

### 🔄 IN PROGRESS:
- ⏳ **Database Schema Fix** (Nov 2) - Run `supabase-complete-fix.sql` to add missing tables
  - ⚠️ Blocks all content creation until fixed
  - 📝 Migration script ready: `supabase-complete-fix.sql`
  - ⏱️ 5 minutes to run in Supabase SQL Editor

### ⏳ REMAINING (Updated with Payload CMS Approach):
- [ ] **Test Core Functionality** (After DB fix)
  - Blog post creation (with new blocks system)
  - Media upload with focal points
  - Draft/publish workflow
  - Version history
  
- [ ] **Implement Blocks System** (Flexible Page Builder)
  - Rich text blocks
  - Image gallery blocks  
  - Quote blocks
  - Video embed blocks
  - CTA blocks
  - Data visualization blocks
  - 📝 See `PAYLOAD-CMS-MASTER-PLAN.md` Phase 2

- [ ] **Enhanced Content Fields**
  - Tabs layout for complex forms (Content | SEO | Settings | Advanced)
  - Conditional logic (premium fields shown only when isPremium = true)
  - Virtual fields (auto-calculate word count, reading time)

- [ ] **Advanced SEO Automation**
  - Auto-generate JSON-LD from fields (using hooks)
  - Breadcrumb schema  
  - SEO score widget (real-time feedback)
  - Auto-generate Open Graph images
  - FAQ schema from Q&A blocks
  - 📝 See `PAYLOAD-CMS-MASTER-PLAN.md` Phase 3

- [ ] **Build Global Layout**
  - Header with navigation
  - Footer with social links
  - Responsive navigation menu
  - Breadcrumbs component

- [ ] **Homepage** 
  - Hero section with featured content
  - Latest research grid
  - Newsletter signup form
  - CTA sections

- [ ] **Content Pages**
  - `/research` - Research articles index
  - `/blog` - Blog posts index  
  - `/about` - About the organization
  - `/team` - Team members (future)
  - `/contact` - Contact form
  - `/newsletter` - Newsletter signup

- [ ] **Newsletter Integration**
  - Connect form to Resend/Mailchimp API
  - Double opt-in workflow
  - Unsubscribe handling

- [ ] **Contact Form**
  - Form with spam protection (hCaptcha or Cloudflare Turnstile)
  - Submit to Supabase function or email service

- [ ] **Document Deployment**
  - Vercel deployment checklist
  - Environment variables guide
  - Staging vs production strategy

---

## Phase 2 — Contributor & Membership Core (Target: Weeks 5–8)
- Implement Supabase Auth with RBAC (roles: admin, editor, publisher, contributor, member).
- Build contributor dashboard for draft submissions and status tracking.
- Create admin overview with content moderation queue.
- Add paywall middleware for `/reports` and member-only sections.
- Integrate Stripe subscription checkout, webhooks, and Supabase sync.
- Develop member dashboard with subscription status, saved content, and profile management.
- Introduce analytics snippets (Plausible/GA) and respect privacy compliance.
- Begin unit/integration testing strategy (Playwright/Testing Library).

## Phase 2 — Advanced CMS Features & Content System (Target: Weeks 5–8)

### 🎯 PRIORITY: Implement Payload CMS Advanced Features
Per `PAYLOAD-CMS-MASTER-PLAN.md`, these features will transform the content creation experience:

#### **Blocks System (Flexible Page Builder)**
- [ ] Rich text blocks with Lexical advanced formatting
- [ ] Image gallery blocks (single, grid, carousel)
- [ ] Quote blocks (with source attribution)
- [ ] Video embed blocks (YouTube, Vimeo)
- [ ] CTA blocks (call-to-action with buttons)
- [ ] Data visualization blocks (charts, graphs)
- [ ] Code blocks with syntax highlighting
- [ ] FAQ blocks (auto-generate JSON-LD schema)
- 📝 **Research First**: Study Payload templates (blog, ecommerce) before implementing
- ⏱️ Estimated: 3-4 days implementation
- ✅ **Free Tier Compatible**: Blocks stored as JSON in Postgres

#### **Live Preview System**
- [ ] Real-time content preview while editing
- [ ] Preview unpublished drafts
- [ ] Preview with different device viewports
- [ ] Shareable preview links (for stakeholder review)
- 📝 See `PAYLOAD-CMS-MASTER-PLAN.md` Phase 4

#### **Content Creation & Publishing**
- [ ] Publish **3–5 initial research articles** using new blocks system
- [ ] Launch blog with **weekly posts** 
- [ ] Create **modular research reports** with downloadable PDFs
- [ ] Test version history and draft workflows
- [ ] Validate autosave and recovery

#### **Content Organization**
- [ ] Implement **category and tag filtering** on `/research` and `/blog`
- [ ] Add **related articles** sections powered by relationships
- [ ] Create content collections (e.g., "Disinformation Series")
- [ ] Build topic taxonomy

#### **Enhanced SEO & Social**
- [ ] Auto-generate JSON-LD using Payload hooks (no manual editing)
- [ ] Auto-generate Open Graph images (dynamic with title/author)
- [ ] Real-time SEO score widget in CMS
- [ ] Breadcrumb schema automation
- [ ] FAQ schema from Q&A blocks
- 📝 See `PAYLOAD-CMS-MASTER-PLAN.md` Phase 3

#### **Engagement Features**
- [ ] Enable comments (Giscus or similar GitHub-backed commenting)
- [ ] Social media sharing functionality (Twitter, LinkedIn, Facebook)
- [ ] Newsletter signup CTA blocks
- [ ] Reading time calculation (virtual field)
- [ ] Word count tracking (virtual field)

#### **About & Team Pages**
- [ ] Draft and publish **about page** with mission statement
- [ ] Build team member collection (with photos, bios, social links)
- [ ] Create team page with custom layout
- [ ] Add researcher profiles to articles

#### **Analytics Setup**
- [ ] Build analytics dashboard for tracking engagement
- [ ] Integrate Vercel Analytics (free tier)
- [ ] Consider Plausible for privacy-friendly analytics
- [ ] Track popular content, referrers, engagement time

---

## Phase 3 — Commerce & Learning Experience (Target: Weeks 9–14)

> **Note**: This phase is aspirational for when the platform needs monetization. Currently focused on free tier content publishing (Phase 1-2).

#### **Course Platform (Future)**
- Build course catalog, course detail, and lesson player pages
- Integrate video hosting provider (Vimeo/Mux) and secure streaming
- Add enrollment tracking, progress persistence, and completion certificates

#### **Analytics & Revenue (When Needed)**
- Expand admin analytics with revenue dashboards and content KPIs
- Launch Stripe customer portal link for subscription management

#### **Search & Discovery**
- Implement advanced search and filtering (Algolia/Typesense candidate)
- Introduce tagging taxonomy for research areas and personas

---

## Phase 4 — Optimization & Expansion (Target: Weeks 15+)

#### **Performance & Accessibility**
- Conduct accessibility audit and remediate issues (WCAG 2.1 AA)
- Optimize Core Web Vitals via image optimization, code splitting, caching
- Localize critical pages (EN + secondary language TBD)

#### **Community Features (Future)**
- Explore community features (forums, events) — may warrant subdomain
- Launch marketing automation workflows (drip campaigns, user segmentation)
- Prepare for mobile app wrapper (React Native/Expo) if justified by metrics

---

## Decision & Risk Log Integration
- Capture major changes as entries in `daily-logs` and expand this roadmap when scope shifts
- For new features outside scope, add to a "Backlog" section with priority tags
- **ALWAYS document failures and lessons learned** (example: 8-hour CSS crisis)

---

## Backlog (To Be Prioritized)

### 🔥 High Priority
- ⏳ **Custom Dashboard Widgets** — Real-time content statistics
  - Draft count widget
  - Recent activity feed
  - Content health scores
  - Publishing calendar
  - 📝 See `PAYLOAD-CMS-MASTER-PLAN.md` Phase 5

- ⏳ **Workflow Automation**
  - Auto-publish scheduled posts (using Payload hooks)
  - Auto-notify team on new drafts
  - Auto-backup content to S3/Supabase Storage
  - Slack/Discord notifications
  - 📝 See `PAYLOAD-CMS-MASTER-PLAN.md` Phase 6

- ⏳ **Enhanced Media Management**
  - CMS Media Library with Supabase Storage
  - Automatic image optimization (Sharp integration)
  - Focal point editor for responsive images
  - Image alt text suggestions (accessibility)

### 📋 Medium Priority
- Editorial style guide and fact-checking workflow automation
- Data visualization component library (charts, maps)
- Integration with citation management tools (Zotero/Mendeley export)
- Portal for external partners to submit datasets securely

### 🔧 Technical Debt (Inherited from Decap Migration)
- ⏳ **Old Decap CMS Cleanup** (When Migration Fully Validated)
  - Remove `public/config.yml` (Decap config file)
  - Remove old MDX content files from `src/content/`
  - Archive Decap setup documentation
  - Update all references from "Decap" to "Payload"
  - ⚠️ **DO NOT DELETE YET** — Keep for rollback safety until Payload fully stable

---
