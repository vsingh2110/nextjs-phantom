# Decap CMS Workflow Guide

**Last Updated**: October 31, 2025  
**For**: MindScape Research Team

---

## Understanding the CMS Dashboard

### Two Main Views

#### 1. **Content View** (Default)
- Shows ALL content (drafts + published)
- Organized by collection: Blog Posts, Research Articles, Premium Reports
- Each item shows: Title, Date, Summary
- Click any item to edit

#### 2. **Workflow View** (Click "Workflow" in top nav)
- Shows content organized by **editorial status**
- 3 columns: **Drafts** | **In Review** | **Ready**
- Drag & drop between columns
- **This is where you manage unpublished content!**

---

## Editorial Workflow States

### Draft (Not Published)
- Content you're still working on
- **Saved in GitHub as a Pull Request (PR)**
- Not visible on live website
- Can **delete** from here without affecting live site

### In Review (Pending Approval)
- Content ready for team review
- Still a PR, waiting for feedback
- Can move back to Draft or forward to Ready

### Ready (Approved for Publishing)
- Content approved and ready to go live
- Still a PR until you click **"Publish"**
- **Publishing merges to master** → goes live immediately

### Published (Live on Website)
- Merged to master branch
- Visible on https://mindscape-research.vercel.app
- **Cannot be moved back** - must edit or delete from Content view

---

## How to Create & Publish Content

### Step 1: Create New Content
1. Click **"New Blog Posts"** (or Research Articles / Premium Reports)
2. Fill in all fields:
   - Title, Date, Excerpt/Summary
   - **Author** (Name, Profile URL, Bio)
   - **Hero Image** (Upload image, add Alt Text)
   - **SEO & Meta Tags** (expand section, add Meta Description)
   - **Social Media** (optional overrides)
   - Body content in Markdown

3. Click **"Save"**
   - Creates a PR in GitHub
   - Appears in **Workflow > Drafts** column

### Step 2: Move Through Review Process
1. Go to **Workflow** view
2. Drag item from **Drafts** → **In Review**
3. Team members can review and comment on GitHub PR
4. When approved, drag to **Ready** column

### Step 3: Publish to Live Site
1. In **Workflow > Ready** column, click on your post
2. Click **"Publish"** button (top right)
3. Choose:
   - **"Publish now"** - Goes live immediately
   - **"Publish and create new"** - Publishes and opens blank editor
   - **"Publish and duplicate"** - Publishes and duplicates for editing

4. Content merges to master → Vercel auto-deploys → Live in ~30 seconds

---

## Viewing Your Published Content

### From CMS:
1. Go to **Content** view (not Workflow)
2. Click on any published post
3. Look for **"View on site"** link (if configured)
4. OR manually visit:
   - Blog: `https://mindscape-research.vercel.app/blog/slug-name`
   - Research: `https://mindscape-research.vercel.app/research/slug-name`
   - Reports: `https://mindscape-research.vercel.app/reports/slug-name`

### Quick Links:
- All Blogs: https://mindscape-research.vercel.app/blog
- All Research: https://mindscape-research.vercel.app/research
- All Reports: https://mindscape-research.vercel.app/reports

---

## How to Delete Content

### Delete Drafts (Before Publishing):
1. Go to **Workflow** view
2. Find item in **Drafts** or **In Review** column
3. Click **three dots** (⋮) on the item card
4. Click **"Delete entry"**
5. Confirm deletion
6. **This closes the PR** - content is gone

### Delete Published Content:
**Option 1: From CMS** (if available):
1. Go to **Content** view
2. Click on published post
3. Click **"Delete"** button
4. This creates a **new PR** to remove the file
5. Merge the PR to actually delete from live site

**Option 2: Manual GitHub**:
1. Go to GitHub repository
2. Navigate to `src/content/blog/` (or research/reports)
3. Find the `.md` file
4. Click **trash icon** → Commit directly to master
5. Site updates in ~30 seconds

---

## Understanding JSON-LD & Rich Results

### What is JSON-LD?
Structured data that helps Google show **rich results** (images, dates, ratings in search).

### Do You Need to Enter JSON-LD Manually?
**NO!** It's **automatically generated** from your SEO metadata.

### What Gets Auto-Generated:

#### Blog Posts:
```json
{
  "@type": "BlogPosting",
  "headline": "Your Title",
  "description": "Your Meta Description",
  "image": "Your Hero Image",
  "author": {
    "name": "Author Name"
  },
  "datePublished": "2025-10-31",
  "publisher": {
    "@type": "Organization",
    "name": "MindScape Research"
  }
}
```

#### Research Articles:
```json
{
  "@type": "ScholarlyArticle",
  "headline": "Your Title",
  "abstract": "Your Summary",
  "author": {
    "name": "Author Name",
    "affiliation": "MindScape Research"
  }
}
```

#### Premium Reports:
```json
{
  "@type": "Product",
  "name": "Report Title",
  "offers": {
    "price": "49.99",
    "priceCurrency": "USD"
  }
}
```

### How to Test Your Rich Results:
1. Publish a blog post with all SEO fields filled
2. Wait ~30 seconds for Vercel deployment
3. Copy the live URL (e.g., `https://mindscape-research.vercel.app/blog/my-post`)
4. Go to: https://search.google.com/test/rich-results
5. Paste URL and click **"Test URL"**
6. Google shows what rich results will appear!

---

## SEO Fields Explained

### Required Fields (Always Fill These):
1. **Title** - 50-60 characters ideal
2. **Excerpt/Summary** - 150-160 characters (becomes meta description if SEO description blank)
3. **Hero Image** with **Alt Text** - CRITICAL for SEO and accessibility

### SEO & Meta Tags Section (Expand this!):
1. **Meta Title** - Override post title if needed (max 60 chars)
2. **Meta Description** - 150-160 chars, shows in Google search results
3. **Focus Keyword** - Main keyword you're targeting
4. **Canonical URL** - Only if republishing content from elsewhere

### Social Media Section (Optional):
1. **Social Title** - Different title for Facebook/Twitter/LinkedIn
2. **Social Description** - Different description for social shares
3. **Social Image** - Different image for social (1200x630px recommended)
4. **Twitter Creator** - Your Twitter handle (e.g., @username)

---

## Where is Everything Stored?

### Content Files:
- **Location**: GitHub repository
  - Blog Posts: `src/content/blog/*.md`
  - Research Articles: `src/content/research/*.mdx`
  - Premium Reports: `src/content/reports/*.mdx`
- **Format**: Markdown with YAML frontmatter
- **Version Control**: Full Git history

### Images/Media:
- **Location**: `public/uploads/` in GitHub
- **Hosting**: Served by Vercel
- **No separate storage needed!**

### Draft Content:
- **Location**: GitHub Pull Requests (separate branches)
- **Visible in**: Workflow tab of CMS
- **Not on live site**: Until merged to master

### Published Content:
- **Location**: Master branch of GitHub
- **Deployed by**: Vercel (auto-deploys on every push)
- **Live at**: https://mindscape-research.vercel.app

---

## Quick Reference

### CMS Access:
- **URL**: https://mindscape-research.vercel.app/admin
- **Login**: GitHub account (must be repo collaborator)

### Content Collections:
| Collection | URL Pattern | Use For |
|------------|-------------|---------|
| Blog Posts | `/blog/slug` | Timely insights, opinions, news |
| Research Articles | `/research/slug` | In-depth analysis, studies |
| Premium Reports | `/reports/slug` | Paid downloadable reports |

### Workflow States:
| State | Meaning | Actions Available |
|-------|---------|-------------------|
| Draft | Work in progress | Save, Delete, Move to Review |
| In Review | Ready for feedback | Move to Draft/Ready, Delete |
| Ready | Approved | Publish, Move back |
| Published | Live on site | Edit, Delete (manual) |

### Key Shortcuts:
- **Workflow View**: Shows draft management board
- **Content View**: Shows all content (drafts + published)
- **Three Dots (⋮)**: Opens context menu for Delete/Duplicate

---

## Troubleshooting

### "Can't see my draft in Content view"
→ Check **Workflow** view instead - drafts live there!

### "Deleted a draft but it still shows"
→ **Refresh the page** - CMS cache needs clearing

### "Published but not live on site"
→ Check Vercel deployment status (should take 30-60 seconds)

### "Can't delete published content"
→ Published content must be deleted from GitHub or via new PR

### "Images not uploading"
→ Check file size (max ~5MB recommended) and format (JPG/PNG)

---

## Best Practices

### Before Publishing:
- ✅ Fill Meta Description (150-160 chars)
- ✅ Add Hero Image with descriptive Alt Text
- ✅ Add 3-5 relevant Tags
- ✅ Preview in CMS before publishing
- ✅ Spell check!

### For SEO:
- ✅ Use Focus Keyword in Title, Description, and first paragraph
- ✅ Hero images should be 1200x630px for social sharing
- ✅ Meta Description should be compelling (improves click-through rate)
- ✅ Add Author bio for expertise signals

### For Team Collaboration:
- ✅ Use "In Review" status for peer feedback
- ✅ Comment on GitHub PRs for detailed feedback
- ✅ Don't delete others' drafts without asking!
- ✅ Coordinate publishing schedules

---

**Need Help?** Check the GitHub repository Issues tab or contact the development team.
