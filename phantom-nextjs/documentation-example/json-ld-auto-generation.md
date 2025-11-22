# JSON-LD & Rich Results: Auto-Generation Guide

**Last Updated**: October 31, 2025  
**Technical Level**: Non-Technical Team Members

---

## The Big Picture

### What You See (In CMS):
- ✍️ Title field
- ✍️ Date picker
- ✍️ Author name input
- ✍️ Meta Description textarea
- 📷 Hero Image upload

### What Happens Behind the Scenes:
```
Your CMS Input → Next.js Code → JSON-LD Schema → Google Rich Results
```

**You never see or edit JSON-LD directly!** The system generates it automatically from the fields you fill in.

---

## How It Works: Blog Posts

### Fields You Fill In CMS:
```yaml
title: "Understanding Digital Echo Chambers"
date: 2025-10-31
excerpt: "A deep dive into how social media algorithms create filter bubbles"
author:
  name: "Dr. Jane Smith"
  url: "https://example.com/jane"
  bio: "Research Director at MindScape"
heroImage:
  src: "/uploads/echo-chamber.jpg"
  alt: "Visualization of social media echo chambers"
seo:
  metaDescription: "Explore how algorithms create echo chambers and what we can do about it"
  focusKeyword: "digital echo chambers"
```

### Generated JSON-LD (Automatic!):
```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Understanding Digital Echo Chambers",
  "description": "Explore how algorithms create echo chambers and what we can do about it",
  "image": "https://mindscape-research.vercel.app/uploads/echo-chamber.jpg",
  "datePublished": "2025-10-31T00:00:00.000Z",
  "dateModified": "2025-10-31T00:00:00.000Z",
  "author": {
    "@type": "Person",
    "name": "Dr. Jane Smith",
    "url": "https://example.com/jane"
  },
  "publisher": {
    "@type": "Organization",
    "name": "MindScape Research",
    "logo": {
      "@type": "ImageObject",
      "url": "https://mindscape-research.vercel.app/logo.png"
    }
  }
}
```

### What Google Shows:
```
🔍 GOOGLE SEARCH RESULTS:
┌─────────────────────────────────────────┐
│ Understanding Digital Echo Chambers    │
│ https://mindscape-research.vercel.app   │
│                                         │
│ Oct 31, 2025 · By Dr. Jane Smith       │
│ Explore how algorithms create echo     │
│ chambers and what we can do about it   │
│                                         │
│ [ARTICLE IMAGE THUMBNAIL]              │
└─────────────────────────────────────────┘
```

---

## Field Mapping Reference

### CMS Field → JSON-LD Property

| CMS Field | Goes Into | SEO Impact |
|-----------|-----------|------------|
| **Title** | `headline` | Shows in search result title |
| **Date** | `datePublished` | Shows publication date in results |
| **Updated Date** | `dateModified` | Signals freshness to Google |
| **Excerpt** | `description` (if no SEO description) | Shows in search snippet |
| **SEO Meta Description** | `description` (preferred) | Shows in search snippet |
| **Hero Image** | `image` | Shows thumbnail in search |
| **Hero Image Alt** | Not in JSON-LD | Accessibility & image search |
| **Author Name** | `author.name` | Shows author in results |
| **Author URL** | `author.url` | Links to author profile |
| **Focus Keyword** | Not in JSON-LD | Internal SEO tracking only |
| **Tags** | `keywords` | Helps categorization |
| **Category** | `articleSection` | Helps topical relevance |

---

## Content Type Schemas

### 1. Blog Posts → BlogPosting Schema

**Required Fields for Best Results:**
- ✅ Title (50-60 characters)
- ✅ Date
- ✅ Excerpt OR Meta Description (150-160 chars)
- ✅ Hero Image with Alt Text
- ✅ Author Name

**Optional but Recommended:**
- Author URL and Bio
- Focus Keyword
- Tags
- Social Media overrides

**Generated Schema Type**: `BlogPosting`  
**Rich Result**: Article card with image, date, author

---

### 2. Research Articles → ScholarlyArticle Schema

**Required Fields:**
- ✅ Title
- ✅ Date
- ✅ Summary/Abstract (in excerpt field)
- ✅ Author with credentials
- ✅ Category (e.g., "Disinformation Studies")

**Optional:**
- Funding information
- DOI (if published elsewhere)
- Citations/References

**Generated Schema Type**: `ScholarlyArticle`  
**Rich Result**: Academic article card, may show in Google Scholar

---

### 3. Premium Reports → Product Schema

**Required Fields:**
- ✅ Title
- ✅ Description
- ✅ Price
- ✅ Currency (USD, EUR, etc.)
- ✅ Hero Image

**Optional:**
- Availability (InStock, OutOfStock, PreOrder)
- Price Valid Until date
- Rating (if reviews enabled)

**Generated Schema Type**: `Product`  
**Rich Result**: Product card with price, may show "Buy" button

---

## Where JSON-LD is Generated

### Code Location: `src/lib/seo.ts`

This file contains all the schema generation functions:

```typescript
// Blog Post Schema Generator
export function generateBlogPostingSchema(
  post: ContentMetadata,
  url: string
): WithContext<BlogPosting> {
  // Takes your CMS data...
  // Returns complete JSON-LD object
}

// Research Article Schema Generator  
export function generateScholarlyArticleSchema(
  article: ContentMetadata,
  url: string
): WithContext<ScholarlyArticle> {
  // Generates academic schema
}

// Product Schema Generator (for reports)
export function generateProductSchema(
  product: ContentMetadata,
  url: string
): WithContext<Product> {
  // Generates ecommerce schema
}
```

### Page Templates: `src/app/*/[slug]/page.tsx`

Each page type embeds the JSON-LD:

```typescript
// Example: Blog Post Page
export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  
  // Generate the JSON-LD schema
  const schema = generateBlogPostingSchema(post, `/blog/${params.slug}`);
  
  return (
    <>
      {/* Embed JSON-LD in page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      
      {/* Your actual blog post content */}
      <article>
        <h1>{post.title}</h1>
        {/* ... */}
      </article>
    </>
  );
}
```

---

## Testing Your Rich Results

### Step-by-Step Testing Guide:

#### 1. Publish a Complete Post
Fill in all required fields:
- Title
- Date
- Meta Description
- Hero Image with Alt Text
- Author
- At least 2-3 tags

#### 2. Wait for Deployment
After clicking "Publish":
- Vercel auto-deploys (30-60 seconds)
- Check deployment status: https://vercel.com/mindscape-research/deployments

#### 3. Get Your Live URL
Format: `https://mindscape-research.vercel.app/blog/your-slug`

#### 4. Test with Google Rich Results Tool
1. Go to: https://search.google.com/test/rich-results
2. Paste your URL
3. Click **"Test URL"**
4. Wait for analysis (~10 seconds)

#### 5. Review Results
✅ **Good Result**: "Valid items detected"
- Shows BlogPosting (or ScholarlyArticle/Product)
- Lists all detected properties
- Preview shows how it will look in search

❌ **Issues Found**: 
- Missing required fields
- Invalid image URLs
- Malformed dates

---

## Common Rich Result Issues

### Issue: "Image URL is not accessible"
**Cause**: Image path wrong or file not uploaded  
**Fix**: 
1. Check hero image uploaded to `public/uploads/`
2. Verify image loads at: `https://mindscape-research.vercel.app/uploads/filename.jpg`
3. Re-upload if needed

### Issue: "Missing required field: datePublished"
**Cause**: Date field empty in CMS  
**Fix**: Add publication date in CMS editor

### Issue: "Author name required"
**Cause**: Author object not filled in  
**Fix**: Expand Author section, add at minimum the Name field

### Issue: "Description too short"
**Cause**: Meta Description < 50 characters  
**Fix**: Write 150-160 character description (ideal length)

### Issue: "No rich results detected"
**Cause**: Page might be using generic Article instead of BlogPosting  
**Fix**: Check that page template is using correct schema generator

---

## SEO Best Practices with JSON-LD

### Meta Tags vs. JSON-LD
Both are needed! They serve different purposes:

**Meta Tags** (Open Graph, Twitter Cards):
- For social media sharing (Facebook, Twitter, LinkedIn)
- Shows preview cards when links are shared
- Defined in `<head>` of page

**JSON-LD**:
- For search engines (Google, Bing)
- Shows rich results in search
- Embedded in `<script>` tag

**Both auto-generate from same CMS fields!**

---

## Viewing Generated JSON-LD

### Method 1: View Page Source
1. Visit your published page
2. Right-click → "View Page Source"
3. Search for: `application/ld+json`
4. You'll see the JSON-LD script tag

### Method 2: Browser DevTools
1. Open page
2. Press F12 (DevTools)
3. Elements tab → Search `<script type="application/ld+json">`
4. Expand to see full schema

### Method 3: Rich Results Test Tool
1. Paste URL into: https://search.google.com/test/rich-results
2. Click "View tested page" → "Source code"
3. Shows extracted JSON-LD

---

## Schema.org Reference

### What is Schema.org?
A collaborative project by Google, Microsoft, Yahoo, and Yandex to create structured data standards.

### Main Schema Types Used:

| Type | For | Documentation |
|------|-----|---------------|
| **BlogPosting** | Blog articles | https://schema.org/BlogPosting |
| **ScholarlyArticle** | Research papers | https://schema.org/ScholarlyArticle |
| **Product** | Reports, downloads | https://schema.org/Product |
| **Organization** | About MindScape | https://schema.org/Organization |
| **Person** | Author profiles | https://schema.org/Person |
| **BreadcrumbList** | Navigation | https://schema.org/BreadcrumbList |

---

## Advanced: Schema Hierarchy

Your site uses nested schemas:

```
WebSite (Root Layout)
├── Organization (MindScape info)
│   ├── Logo
│   ├── Contact Info
│   └── Social Links
│
└── Page (Blog/Research/Report)
    ├── BlogPosting / ScholarlyArticle / Product
    │   ├── Headline
    │   ├── Image
    │   ├── Author (Person)
    │   ├── Publisher (Organization)
    │   └── DatePublished
    │
    └── BreadcrumbList
        ├── Home
        ├── Blog
        └── Current Article
```

This hierarchy helps Google understand:
- Site structure
- Content relationships
- Authority signals (organization + author)
- Navigation context

---

## Monitoring & Analytics

### Google Search Console
1. Add site: https://search.google.com/search-console
2. Submit sitemap: `https://mindscape-research.vercel.app/sitemap.xml`
3. Monitor "Enhancements" section for rich results
4. Track impressions and clicks

### Rich Results Report
Shows:
- Valid items
- Items with errors
- Items with warnings
- Click-through rates for rich results

### Manual Testing Schedule
- ✅ Test every new blog post before publishing
- ✅ Re-test after major schema changes
- ✅ Monthly audit of top 10 posts

---

## FAQ

**Q: Do I need to write JSON-LD code?**  
A: No! It's 100% automatic from CMS fields.

**Q: Can I customize the JSON-LD?**  
A: Yes, but requires developer assistance to modify `src/lib/seo.ts`.

**Q: How long until Google shows rich results?**  
A: 1-4 weeks after first crawl. Submit to Search Console to speed up.

**Q: What if I leave fields blank?**  
A: Schema will still generate, but with fewer properties. Less data = less rich results.

**Q: Can I see JSON-LD in the CMS?**  
A: No, it only exists on the published website, not in the CMS editor.

**Q: Does every page need JSON-LD?**  
A: Content pages (blog, research, reports) have it. Static pages (About, Contact) may not need it.

**Q: Can I add multiple schemas to one page?**  
A: Yes! Current setup includes BlogPosting + BreadcrumbList on blog pages.

---

## Summary

### What You Need to Remember:
1. ✅ **Fill all CMS fields completely** - they become JSON-LD
2. ✅ **Meta Description is critical** - shows in search results
3. ✅ **Hero Images required** - for rich result thumbnails
4. ✅ **Test before publishing** - use Rich Results Test tool
5. ✅ **Monitor Search Console** - track performance

### What Happens Automatically:
- ✨ JSON-LD generation from your content
- ✨ Schema embedding in page HTML
- ✨ Sitemap updates with new content
- ✨ Meta tags generation (Open Graph, Twitter)
- ✨ Breadcrumb schemas
- ✨ Organization schema site-wide

### You Don't Need To:
- ❌ Write any JSON-LD code
- ❌ Edit schema files
- ❌ Manually update sitemaps
- ❌ Configure robots.txt
- ❌ Add meta tags manually

**Focus on great content. The system handles the SEO!**

---

**Questions?** Check the main SEO documentation or contact the development team.
