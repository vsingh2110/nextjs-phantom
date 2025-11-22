# CMS User Interface Guide

**Last Updated**: October 31, 2025

---

## Understanding the CMS Interface

### Two Main Views in Top Navigation:

#### 1. **"Contents"** (Default View)
Shows ALL your content in a flat list - both published and drafts mixed together.

**What You'll See:**
```
┌─────────────────────────────────────────────┐
│ Contents | Workflow | Media                │
│─────────────────────────────────────────────│
│                                             │
│ [Filter ▼] [Group ▼]           [+ New ▼]  │
│                                             │
│ ┌─────────────────────────────────────────┐│
│ │ Understanding Digital Echo Chambers    ││
│ │ 2025-10-31                              ││
│ │ A deep dive into...                     ││
│ │                          [Edit] [View]  ││
│ └─────────────────────────────────────────┘│
│                                             │
│ ┌─────────────────────────────────────────┐│
│ │ Welcome to MindScape (DRAFT)           ││
│ │ 2025-10-25                              ││
│ │ Our first blog post...                  ││
│ │                          [Edit] [View]  ││
│ └─────────────────────────────────────────┘│
└─────────────────────────────────────────────┘
```

**Buttons You'll See:**
- **Edit** - Opens the editor
- **View** - Opens live preview (if published) or preview URL

**Filters Available** (based on our config):
- **Research**: Premium Only / Free Content
- **Reports**: Free Reports / Paid Reports

**Groups Available**:
- **Research**: By Category
- **Blog**: By Year
- **Reports**: By Price Range

---

#### 2. **"Workflow"** (Editorial Board View)
Shows content organized by publication status in **3 columns**.

**What You'll See:**
```
┌─────────────────────────────────────────────────────────┐
│ Contents | Workflow | Media                              │
│─────────────────────────────────────────────────────────│
│                                                          │
│  DRAFTS          IN REVIEW         READY               │
│ ┌──────────┐    ┌──────────┐     ┌──────────┐         │
│ │ Post A   │    │ Post B   │     │ Post C   │         │
│ │ Oct 30   │    │ Oct 29   │     │ Oct 28   │         │
│ │ Draft... │    │ Review...│     │ Ready... │         │
│ └──────────┘    └──────────┘     └──────────┘         │
│                                                          │
│ ┌──────────┐                      ┌──────────┐         │
│ │ Post D   │                      │ Post E   │         │
│ │ Oct 27   │                      │ Oct 26   │         │
│ └──────────┘                      └──────────┘         │
└─────────────────────────────────────────────────────────┘
```

**How to Use:**
1. **Drag & drop** cards between columns to change status
2. Click a card to edit
3. Click "Publish" button (top right when editing) to publish from "Ready" column

---

## Where Are the Draft/Published Labels?

### Current Setup (Decap CMS Default):
Decap CMS **separates** drafts and published content by VIEW, not by label:

| View | Shows |
|------|-------|
| **Workflow** | ONLY unpublished content (Drafts, In Review, Ready) |
| **Contents** | ALL content (Published + Drafts mixed) |

### The Issue:
In the **Contents** view, there's **no visual distinction** between published and draft items by default. This is a limitation of Decap CMS.

---

## Solutions for Better Draft Visibility

### Option 1: Use Workflow View Exclusively ✅ RECOMMENDED
**Go to Workflow tab** to manage unpublished content:
- **Drafts** column = Work in progress
- **In Review** column = Ready for team review
- **Ready** column = Approved, ready to publish

**Published content won't appear here** - it's only in Contents view.

---

### Option 2: Custom CSS (Advanced)
We can add custom styling to show draft badges in the Contents view.

Create `public/admin/custom.css`:
```css
/* Add "DRAFT" badge to unpublished entries */
[data-workflow-status="draft"]::before {
  content: "DRAFT";
  background: orange;
  color: white;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: bold;
  margin-right: 8px;
}

[data-workflow-status="review"]::before {
  content: "IN REVIEW";
  background: blue;
  color: white;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: bold;
  margin-right: 8px;
}

[data-workflow-status="ready"]::before {
  content: "READY";
  background: green;
  color: white;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: bold;
  margin-right: 8px;
}
```

Then reference in `public/admin/index.html`:
```html
<link href="custom.css" rel="stylesheet" />
```

---

### Option 3: Add Status to Summary Template
We can modify the `summary` field in config.yml to show workflow status.

**Current**:
```yaml
summary: "{{title}} - {{date | date('YYYY-MM-DD')}}"
```

**Enhanced** (but workflow status isn't available in summary templates):
```yaml
summary: "{{title}} - {{date | date('YYYY-MM-DD')}} - {{fields.slug}}"
```

❌ **Problem**: Decap CMS doesn't expose workflow status in summary templates.

---

## What About Edit/View/Delete Buttons?

### Where They Appear:

#### In Contents View:
When you hover over or click an entry card, you'll see:
- **Edit** button (pencil icon) - Opens editor
- **Delete** button (trash icon) - Deletes the entry
- **View** link - Opens preview (if `preview_path` configured)

#### In Workflow View:
When you click on a card:
- Opens the editor directly
- Top-right buttons: **Check for Preview**, **Set Status**, **Publish**, **Delete**

#### In Editor View:
Top navigation shows:
- **Save** - Saves draft
- **Publish** - Publishes to live site (if in Ready status)
- **Delete** - Deletes entry
- **View Preview** - Opens preview in new tab

---

## Current Configuration Status

### ✅ What's Working:
1. **Editorial Workflow Enabled**: `publish_mode: editorial_workflow`
2. **Preview Paths Set**: View links work for all collections
3. **Site URL Configured**: `site_url: https://mindscape-research.vercel.app`
4. **View Filters**: Research (Premium/Free), Reports (Free/Paid)
5. **View Groups**: Research (Category), Blog (Year), Reports (Price)

### ⚠️ What's Missing:
1. **Visual Status Labels** in Contents view - Requires custom CSS
2. **Quick Action Buttons** in list view - Limited by Decap CMS UI
3. **Draft Count Badge** - Not supported natively

---

## Recommended Workflow

### For Managing Drafts:
1. **Always use Workflow tab** for draft management
2. Use Contents tab only for published content
3. Filter and group to organize content

### For Publishing:
1. Create content → Auto-saves to **Drafts** column
2. Drag to **In Review** when ready for feedback
3. Drag to **Ready** when approved
4. Click **Publish** button to go live

### For Editing Published Content:
1. Go to **Contents** tab
2. Find the published post
3. Click **Edit**
4. Make changes and click **Save**
5. This creates a **new PR** - appears in Workflow → Ready
6. Click **Publish** to update live content

---

## Quick Reference

| I Want To... | Go To... | Action |
|--------------|----------|--------|
| Create new draft | Contents → New | Opens editor |
| See all drafts | Workflow | View Drafts column |
| Edit a draft | Workflow → Click card | Opens editor |
| Publish a draft | Workflow → Ready → Click card → Publish | Goes live |
| Edit published post | Contents → Find post → Edit | Creates PR |
| Delete draft | Workflow → Click card → Delete | Removes |
| Delete published | Contents → Edit → Delete | Creates delete PR |
| Preview draft | Editor → View Preview | Opens preview |
| View live post | Contents → View button | Opens live URL |

---

## Understanding the View/Edit Buttons

### Why They're Different:

**Edit Button**:
- Opens the CMS editor
- Edits the markdown file
- Changes saved as Git commits

**View Button**:
- Opens the actual website
- Shows how it looks to visitors
- Uses `preview_path` from config

**Preview Button** (in editor):
- Shows a preview while editing
- Not the live site
- Uses CMS preview rendering

---

## Browser Console Commands for Debugging

If you want to check what Decap CMS is doing:

```javascript
// Check current workflow state
CMS.getBackend().currentUser()

// Check all entries
CMS.getBackend().listEntries()

// Check workflow entries
CMS.getBackend().listEntries({collection: 'blog'})
```

---

## Next Steps to Improve UX

### 1. Add Custom CSS for Status Badges
Would you like me to create custom CSS to show DRAFT/PUBLISHED badges in the Contents view?

### 2. Custom Preview Templates
Create better preview rendering for content cards.

### 3. Collection Icons
Add icons to distinguish Blog/Research/Reports at a glance.

### 4. Custom Widgets
Build custom widgets for better UX (advanced).

---

**Which solution would you prefer for seeing draft status more clearly?**
1. Use Workflow tab exclusively (no code needed)
2. Add custom CSS badges (I can implement this now)
3. Build custom collection view component (advanced, more work)
