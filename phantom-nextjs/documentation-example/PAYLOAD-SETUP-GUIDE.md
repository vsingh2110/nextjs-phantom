# Payload CMS Setup Guide for MindScape Research

**Date**: October 31, 2025  
**Status**: ✅ Configuration Complete - Ready for Supabase Connection

---

## 🎉 What's Been Completed

### ✅ 1. Payload CMS Installation
All required packages have been installed:
- `payload` - Core CMS
- `@payloadcms/db-postgres` - PostgreSQL adapter for Supabase
- `@payloadcms/richtext-lexical` - Modern rich text editor
- `@payloadcms/next` - Next.js integration
- `sharp` - Image processing

### ✅ 2. Payload Configuration (`src/payload.config.ts`)
Complete configuration with:

#### **Collections Created**:
1. **Users** - Authentication with role-based access
   - Roles: Super Admin, Chief Editor, Editor, Assistant Editor, Contributor, Viewer
   
2. **Blog Posts** - Frequent content updates
   - Fields: title, slug, content, excerpt, featured image
   - SEO: meta title, description, keywords, OG image, canonical URL
   - Status: draft/published/archived
   - Relationships: author, tags, categories
   - Version control with drafts
   
3. **Research Articles** - Long-form research content
   - Fields: title, slug, content, abstract, featured image
   - Reading time estimation
   - Same SEO fields as blog
   - Version control with drafts
   
4. **Reports** - Premium paid content
   - Fields: title, slug, description, preview, full content
   - E-commerce: price (USD & INR), isPremium flag
   - Download file support (PDF/docs)
   - Same SEO fields
   
5. **Media** - File uploads
   - Images, PDFs, documents
   - Alt text and captions
   - Stored in `public/uploads/`
   
6. **Tags & Categories** - Content organization

#### **Access Control**:
- Super Admin: Full access
- Chief Editor: Manage content + users
- Editor: Create/edit/publish
- Assistant Editor: Create/edit
- Contributor: Create only
- Viewer: Read-only

### ✅ 3. Next.js Integration
- Admin panel route: `/admin`
- Payload layout configured
- Next.js config updated with Payload wrapper

### ✅ 4. Environment Setup
Updated `.env.example` with required variables.

---

## 🚀 NEXT STEPS: Connect to Supabase

### Step 1: Get Supabase Database Connection String

1. **Go to your Supabase project**: https://supabase.com/dashboard
2. **Click on your project** (or create a new one)
3. **Go to Settings** → **Database**
4. **Find "Connection String"** section
5. **Copy the "Connection pooling" URI** (not the direct connection)
   - It looks like: `postgresql://postgres.[ref]:[password]@aws-0-[region].pooler.supabase.com:5432/postgres`
   - OR the direct connection: `postgresql://postgres:[password]@db.[ref].supabase.co:5432/postgres`

### Step 2: Create `.env.local` File

Create a new file named `.env.local` in the root directory with this content:

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://[YOUR-PROJECT-REF].supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-from-supabase
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-from-supabase

# Payload CMS Configuration
DATABASE_URL=postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres
PAYLOAD_SECRET=352549f4116e4260106e29e0c222952f5918c0ad98b95d2ec8ef8040a6e94d35

# Next.js
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

**Important**:
- Replace `[YOUR-PROJECT-REF]` with your Supabase project reference
- Replace `[YOUR-PASSWORD]` with your Supabase database password
- The `PAYLOAD_SECRET` is already generated above (keep it secure!)
- Get Supabase keys from: Settings → API

### Step 3: Start the Development Server

```bash
npm run dev
```

### Step 4: Access Admin Panel

1. Open browser and go to: **http://localhost:3000/admin**
2. You'll see the Payload CMS login/setup screen
3. **Create your first Super Admin user**:
   - Email: your-email@example.com
   - Password: [choose a strong password]
   - Name: Your Name
   - Role: Super Admin

---

## 📋 What You Can Do Now

### Content Management
1. **Create Blog Posts**: Go to Collections → Blog Posts → Create New
2. **Add Research Articles**: Collections → Research Articles → Create New
3. **Manage Premium Reports**: Collections → Reports → Create New
4. **Upload Media**: Collections → Media → Upload New

### User Management
1. **Add Team Members**: Collections → Users → Create New
2. **Assign Roles**: Choose from 6 role levels
3. **Manage Permissions**: Automatically enforced based on roles

### SEO Optimization
Every content type has built-in SEO fields:
- Meta title & description
- Keywords
- Open Graph images
- Canonical URLs

---

## 🏗️ Database Schema

Payload CMS will automatically create these tables in your Supabase Postgres database:
- `blog_posts` (+ version tables)
- `research_articles` (+ version tables)
- `reports` (+ version tables)
- `media`
- `tags`
- `categories`
- `users`
- `payload_preferences`
- And various relationship tables

**No manual SQL needed** - Payload handles all migrations automatically!

---

## 🔧 Configuration Files

### Files Created:
```
mindscape-research/
├── src/
│   └── payload.config.ts          # Main Payload configuration
├── payload-config.ts               # Root config (re-exports src config)
├── .env.example                    # Environment template (updated)
├── .env.local                      # Your actual secrets (create this!)
├── next.config.ts                  # Updated with Payload wrapper
├── tsconfig.json                   # Updated with @payload-config alias
└── src/app/(payload)/
    ├── layout.tsx                  # Payload admin layout
    ├── custom.scss                 # Custom admin styles
    └── admin/[[...segments]]/
        └── page.tsx                # Admin route handler
```

---

## 🎯 Role-Based Access Quick Reference

| Action | Super Admin | Chief Editor | Editor | Asst Editor | Contributor | Viewer |
|--------|-------------|--------------|--------|-------------|-------------|--------|
| Create Blog | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| Edit Blog | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |
| Delete Blog | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| Create Research | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| Manage Reports | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| Manage Users | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |

---

## 🚨 Troubleshooting

### Error: "Cannot connect to database"
- ✅ Check DATABASE_URL is correct
- ✅ Verify Supabase database password
- ✅ Ensure `.env.local` file exists (not `.env.example`)
- ✅ Restart dev server after adding env vars

### Error: "Invalid secret"
- ✅ Check PAYLOAD_SECRET is set in `.env.local`
- ✅ Must be at least 32 characters long

### Error: "Module not found @payload-config"
- ✅ File exists at root: `payload-config.ts`
- ✅ tsconfig.json has the alias configured
- ✅ Restart VS Code TypeScript server

### Admin panel not loading
- ✅ Check dev server is running
- ✅ Go to exactly `/admin` (not `/admin/`)
- ✅ Clear browser cache

---

## 📊 Free Tier Limits (Supabase)

| Resource | Free Tier | Your Usage (Est.) |
|----------|-----------|-------------------|
| Database Storage | 500 MB | ~50-100 MB (100+ articles) |
| File Storage | 1 GB | ~200-500 MB (images) |
| Database Bandwidth | Unlimited | N/A |
| API Requests | Unlimited | N/A |

**You're well within limits!** 🎉

---

## 🔄 Next Phase: Content Migration

Once Payload is working:
1. Export existing MDX content
2. Create migration script
3. Import via Payload API
4. Verify all content migrated
5. Update frontend to fetch from Payload API

Documented in: `documentation/CMS-MIGRATION.md`

---

## 📚 Useful Resources

- [Payload CMS Docs](https://payloadcms.com/docs)
- [Supabase Postgres Guide](https://supabase.com/docs/guides/database)
- [Payload Access Control](https://payloadcms.com/docs/access-control/overview)
- [Payload Collections](https://payloadcms.com/docs/configuration/collections)

---

## ✅ Configuration Complete!

**Everything is ready.** Just:
1. Get Supabase connection string
2. Create `.env.local`
3. Run `npm run dev`
4. Visit `/admin`
5. Create first admin user

**You're 5 minutes away from a fully functional CMS!** 🚀

---

*Last updated: October 31, 2025*
