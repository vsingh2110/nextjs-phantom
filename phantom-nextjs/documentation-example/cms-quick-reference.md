# Decap CMS Quick Reference Guide

**Last Updated:** October 30, 2025  
**Status:** ✅ Fully Operational

---

## 🎯 Quick Access

**CMS Admin URL:** https://mindscape-research.vercel.app/admin  
**GitHub Repository:** https://github.com/vsingh2110/mindscape-research  
**OAuth App Settings:** https://github.com/settings/developers

---

## 🔐 Authentication

### For Repository Owner (vsingh2110)
1. Visit `/admin`
2. Click "Login with GitHub"
3. Authorize OAuth app (first time only)
4. Dashboard loads automatically

### For Team Members
**Prerequisites:**
- Must have GitHub account
- Must be added as repository collaborator

**Login Process:**
1. Repository owner adds you: https://github.com/vsingh2110/mindscape-research/settings/access
2. You receive email invitation from GitHub
3. Accept invitation
4. Visit https://mindscape-research.vercel.app/admin
5. Click "Login with GitHub"
6. Authorize "MindScape Research - Decap CMS OAuth"
7. CMS dashboard loads

---

## 📝 Content Collections

### 1. Research Articles
- **Location:** `src/content/research/`
- **URL Pattern:** `/research/[slug]`
- **Fields:**
  - Title (required)
  - Author (default: "MindScape Research Team")
  - Publish Date
  - Summary
  - Category: Cyber Psychology | Digital Media | Narratives | Policy
  - Tags (list)
  - Premium (boolean)
  - Hero Image (optional)
  - Body (Markdown)

### 2. Blog Posts
- **Location:** `src/content/blog/`
- **URL Pattern:** `/blog/[slug]`
- **Slug Format:** `YYYY-MM-DD-title`
- **Fields:**
  - Title
  - Author (default: "MindScape Research")
  - Publish Date
  - Excerpt
  - Tags (list, default: ["insight"])
  - Body (Markdown)

### 3. Premium Reports
- **Location:** `src/content/reports/`
- **URL Pattern:** `/reports/[slug]`
- **Fields:**
  - Title
  - Author
  - Publish Date
  - Summary
  - Price (USD, number)
  - Download URL (optional)
  - Tags (list, default: ["premium"])
  - Body (Markdown)

---

## 🔄 Editorial Workflow

### Content States

1. **Draft** 
   - Work in progress
   - Only visible to author
   - Not submitted for review

2. **In Review**
   - Submitted for approval
   - Creates GitHub Pull Request
   - Awaits editor approval

3. **Ready**
   - Approved by editor
   - Merged to master branch
   - Triggers deployment
   - Live on production site

### Creating New Content

1. Log into CMS at `/admin`
2. Select collection (Research, Blog, or Reports)
3. Click "New [Collection Name]"
4. Fill in required fields
5. Click "Save" to save as draft
6. When ready, click "Set status: In review"
7. Wait for editor approval
8. Content publishes automatically upon PR merge

### Editing Existing Content

1. Navigate to collection
2. Click on article title
3. Make edits
4. Click "Save" (updates draft)
5. Submit for review when complete

---

## 👥 User Roles & Permissions

### Repository Owner
- **Access Level:** Full control
- **Capabilities:**
  - Create/edit/delete content
  - Approve/reject submissions
  - Publish directly to production
  - Manage team members
  - Configure CMS settings

### Admin Collaborators
- **Access Level:** Admin
- **Capabilities:**
  - Create/edit content
  - Approve pull requests
  - Merge to production
  - Review other contributors' work

### Write Collaborators
- **Access Level:** Write
- **Capabilities:**
  - Create/edit content
  - Submit for review
  - Cannot publish directly
  - Cannot approve others' work

---

## 🛠️ Technical Details

### OAuth Configuration
- **Client ID:** `Ov23liiJK6XxKEjX2aQM`
- **Callback URL:** `https://mindscape-research.vercel.app/api/decap-oauth`
- **Scopes:** `repo,user`

### Environment Variables (Vercel)
```
DECAP_GITHUB_CLIENT_ID=Ov23liiJK6XxKEjX2aQM
DECAP_GITHUB_CLIENT_SECRET=[secret in Vercel dashboard]
```

### File Locations
- **CMS Config:** `public/config.yml`
- **OAuth Route:** `src/app/api/decap-oauth/route.ts`
- **Admin Page:** `public/admin/index.html`
- **Content Storage:** `src/content/[collection]/`

---

## 🐛 Troubleshooting

### Login Loop / Stuck on Login Screen
**Solutions:**
1. Clear browser cache and cookies
2. Try incognito/private browsing mode
3. Verify you're added as repository collaborator
4. Check GitHub OAuth app is authorized: https://github.com/settings/applications

### 403 Forbidden Error
**Cause:** Not added as repository collaborator  
**Solution:** Contact repository owner to add you at:  
https://github.com/vsingh2110/mindscape-research/settings/access

### Changes Not Appearing on Live Site
**Cause:** Content in draft or review state  
**Solution:**
1. Ensure content status is "Ready" (not "Draft" or "In review")
2. Check GitHub PR was merged
3. Wait 2-3 minutes for Vercel deployment
4. Hard refresh browser (Ctrl+Shift+R)

### Preview Not Loading
**Possible Causes:**
- Local development server not running
- Preview template not configured
- Syntax error in Markdown

**Debug Steps:**
1. Check console for errors (F12)
2. Verify Markdown syntax is valid
3. Test on production after publish

---

## 📚 Resources

### Documentation
- **Daily Logs:** `documentation/daily-logs/`
- **Project Overview:** `documentation/project-overview.md`
- **Development Roadmap:** `documentation/development-roadmap.md`
- **Collaboration Guide:** `documentation/collaboration-guide.md`

### External Links
- **Decap CMS Docs:** https://decapcms.org/docs/
- **Markdown Guide:** https://www.markdownguide.org/
- **GitHub PR Guide:** https://docs.github.com/en/pull-requests

---

## 🆘 Getting Help

### For Content Questions
- Review existing articles for formatting examples
- Check Markdown preview in CMS before submitting
- Ask chief editor for content guidelines

### For Technical Issues
- Check this troubleshooting section first
- Review daily logs for recent changes
- Contact repository owner (vsingh2110)
- Open GitHub issue with details

---

## ✅ Next Steps for New Team Members

1. ✅ Accept GitHub repository invitation
2. ✅ Log into CMS and explore dashboard
3. ✅ Review existing content to understand formatting
4. ✅ Create test draft article
5. ✅ Submit test article for review
6. ✅ Familiarize with editorial workflow
7. ✅ Read content strategy guide (when available)

---

**Last verified working:** October 30, 2025, 3:45 AM  
**Authentication status:** ✅ Operational  
**Known issues:** None
