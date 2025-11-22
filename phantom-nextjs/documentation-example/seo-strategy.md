# SEO Strategy for MindScape Research

**Last Updated**: October 30, 2025  
**Author**: Development Team  
**Status**: Planning & Implementation

---

## Overview

MindScape Research has multiple content types with different SEO requirements. This document outlines the comprehensive SEO strategy including meta tags, JSON-LD structured data, Open Graph, Twitter Cards, sitemaps, and robots.txt configuration.

---

## Content Types & SEO Requirements

### 1. Blog Posts (`/blog/[slug]`)

**Purpose**: Timely insights, opinions, and discussions  
**Schema Type**: `Article` or `BlogPosting`  
**Update Frequency**: High (weekly/daily)

**Required SEO Fields**:
- **Basic Meta**:
  - Title (50-60 chars, unique per post)
  - Meta Description (150-160 chars)
  - Canonical URL
  - Focus Keyword
  - Slug (auto-generated from title, customizable)

- **Hero Image**:
  - Image URL (required)
  - Alt Text (descriptive, keyword-rich)
  - Width & Height (for proper aspect ratio)
  - Caption (optional)

- **JSON-LD Schema** (`BlogPosting`):
  ```json
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Article title",
    "description": "Meta description",
    "image": "https://example.com/image.jpg",
    "author": {
      "@type": "Person",
      "name": "Author Name",
      "url": "https://example.com/author/name"
    },
    "publisher": {
      "@type": "Organization",
      "name": "MindScape Research",
      "logo": {
        "@type": "ImageObject",
        "url": "https://example.com/logo.png"
      }
    },
    "datePublished": "2025-10-30T08:00:00Z",
    "dateModified": "2025-10-30T10:30:00Z",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://example.com/blog/slug"
    }
  }
  ```

- **Open Graph** (Facebook, LinkedIn):
  - `og:type` = "article"
  - `og:title` = Article title
  - `og:description` = Meta description
  - `og:image` = Hero image URL
  - `og:url` = Canonical URL
  - `article:published_time`
  - `article:modified_time`
  - `article:author`
  - `article:tag` (from tags field)

- **Twitter Card**:
  - `twitter:card` = "summary_large_image"
  - `twitter:title` = Article title
  - `twitter:description` = Meta description
  - `twitter:image` = Hero image URL
  - `twitter:creator` (optional)

---

### 2. Research Articles (`/research/[slug]`)

**Purpose**: In-depth analysis, data-driven reports  
**Schema Type**: `ScholarlyArticle` or `ResearchProject`  
**Update Frequency**: Medium (monthly)

**Required SEO Fields**:
- All fields from Blog Posts, PLUS:

- **Additional Meta**:
  - Publication Date (different from blog)
  - Last Updated Date
  - Reading Time (auto-calculated or manual)
  - Research Category/Topic

- **JSON-LD Schema** (`ScholarlyArticle`):
  ```json
  {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    "headline": "Research title",
    "abstract": "Research summary/excerpt",
    "image": "https://example.com/hero.jpg",
    "author": {
      "@type": "Person",
      "name": "Researcher Name",
      "affiliation": {
        "@type": "Organization",
        "name": "MindScape Research"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "MindScape Research",
      "logo": {
        "@type": "ImageObject",
        "url": "https://example.com/logo.png"
      }
    },
    "datePublished": "2025-10-30",
    "dateModified": "2025-10-30",
    "about": "Research topic/subject",
    "keywords": ["keyword1", "keyword2"],
    "inLanguage": "en-US",
    "isAccessibleForFree": true
  }
  ```

- **Breadcrumbs Schema**:
  ```json
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://example.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Research",
        "item": "https://example.com/research"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Article Title"
      }
    ]
  }
  ```

---

### 3. Premium Reports (`/reports/[slug]`)

**Purpose**: Paid/gated research content  
**Schema Type**: `Product` + `ScholarlyArticle`  
**Update Frequency**: Low (quarterly)

**Required SEO Fields**:
- All fields from Research Articles, PLUS:

- **Product/Pricing Fields**:
  - Price (from existing `price` field)
  - Currency (default: USD)
  - Availability ("InStock", "PreOrder", etc.)
  - Product Category

- **JSON-LD Schema** (Dual: `Product` + `ScholarlyArticle`):
  ```json
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Report Title",
    "description": "Report description",
    "image": "https://example.com/report-cover.jpg",
    "brand": {
      "@type": "Organization",
      "name": "MindScape Research"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://example.com/reports/slug",
      "priceCurrency": "USD",
      "price": "49.99",
      "availability": "https://schema.org/InStock",
      "priceValidUntil": "2026-12-31"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "24"
    }
  }
  ```

---

### 4. Organization Pages (Homepage, About, etc.)

**Purpose**: Brand and organization information  
**Schema Type**: `Organization` + `WebSite`  
**Update Frequency**: Very Low (yearly)

**JSON-LD Schema** (`Organization`):
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "MindScape Research",
  "url": "https://mindscape-research.vercel.app",
  "logo": "https://mindscape-research.vercel.app/logo.png",
  "description": "Independent research organization analyzing digital media, misinformation, and online ecosystems",
  "sameAs": [
    "https://twitter.com/mindscaperesearch",
    "https://linkedin.com/company/mindscape-research",
    "https://github.com/vsingh2110/mindscape-research"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "General Inquiry",
    "email": "contact@mindscaperesearch.com"
  }
}
```

**JSON-LD Schema** (`WebSite` with SearchAction):
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "MindScape Research",
  "url": "https://mindscape-research.vercel.app",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://mindscape-research.vercel.app/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

---

## CMS Field Structure

### Reusable Field Groups

#### 1. Basic SEO Fields (All Content Types)
```yaml
- label: "SEO & Meta Tags"
  name: "seo"
  widget: "object"
  collapsed: true
  fields:
    - { label: "Meta Title", name: "metaTitle", widget: "string", required: false, hint: "Leave blank to use post title. Max 60 characters." }
    - { label: "Meta Description", name: "metaDescription", widget: "text", required: true, hint: "150-160 characters. Appears in search results." }
    - { label: "Focus Keyword", name: "focusKeyword", widget: "string", required: false, hint: "Primary keyword for SEO optimization" }
    - { label: "Canonical URL", name: "canonicalUrl", widget: "string", required: false, hint: "Leave blank to use default URL. Use if content is republished." }
    - { label: "No Index", name: "noIndex", widget: "boolean", default: false, hint: "Prevent search engines from indexing this page" }
    - { label: "No Follow", name: "noFollow", widget: "boolean", default: false, hint: "Prevent search engines from following links on this page" }
```

#### 2. Hero Image Fields
```yaml
- label: "Hero Image"
  name: "heroImage"
  widget: "object"
  collapsed: false
  fields:
    - { label: "Image", name: "src", widget: "image", required: true, hint: "Recommended: 1200x630px for optimal social sharing" }
    - { label: "Alt Text", name: "alt", widget: "string", required: true, hint: "Describe the image for accessibility and SEO" }
    - { label: "Caption", name: "caption", widget: "string", required: false }
    - { label: "Credit/Attribution", name: "credit", widget: "string", required: false }
```

#### 3. Author Information
```yaml
- label: "Author"
  name: "author"
  widget: "object"
  fields:
    - { label: "Name", name: "name", widget: "string", required: true }
    - { label: "Profile URL", name: "url", widget: "string", required: false }
    - { label: "Bio", name: "bio", widget: "text", required: false }
    - { label: "Avatar", name: "avatar", widget: "image", required: false }
```

#### 4. Social Media Override Fields (Optional)
```yaml
- label: "Social Media (Optional Overrides)"
  name: "socialMedia"
  widget: "object"
  collapsed: true
  required: false
  fields:
    - { label: "Social Title", name: "title", widget: "string", required: false, hint: "Override title for social shares (Facebook, Twitter, LinkedIn)" }
    - { label: "Social Description", name: "description", widget: "text", required: false, hint: "Override description for social shares" }
    - { label: "Social Image", name: "image", widget: "image", required: false, hint: "Different image for social sharing (1200x630px)" }
    - { label: "Twitter Handle", name: "twitterCreator", widget: "string", required: false, hint: "@username of content creator" }
```

---

## Dynamic Sitemap Generation

### XML Sitemap (`sitemap.xml`)

**Location**: `/app/sitemap.ts` (Next.js 14+ App Router)

**Requirements**:
- Auto-generates on build
- Scans all MDX files in `src/content/`
- Includes all public routes
- Updates `lastmod` from file modification time
- Sets `changefreq` based on content type
- Sets `priority` based on content importance

**Implementation**:
```typescript
// src/app/sitemap.ts
import { getAllContent } from '@/lib/mdx'
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://mindscape-research.vercel.app'
  
  // Get all content
  const blogPosts = await getAllContent('blog')
  const research = await getAllContent('research')
  const reports = await getAllContent('reports')
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/research`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/reports`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]
  
  // Blog posts
  const blogUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.frontmatter.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))
  
  // Research articles
  const researchUrls = research.map((article) => ({
    url: `${baseUrl}/research/${article.slug}`,
    lastModified: new Date(article.frontmatter.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))
  
  // Premium reports
  const reportUrls = reports.map((report) => ({
    url: `${baseUrl}/reports/${report.slug}`,
    lastModified: new Date(report.frontmatter.date),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }))
  
  return [...staticPages, ...blogUrls, ...researchUrls, ...reportUrls]
}
```

---

### HTML Sitemap (`/sitemap`)

**Location**: `/app/sitemap/page.tsx`

**Purpose**: User-facing sitemap organized by content category

**Features**:
- Lists all public pages organized by section
- Shows recent updates
- Provides quick navigation
- Helps with internal linking SEO

---

## Robots.txt Configuration

**Location**: `/app/robots.ts` (Next.js 14+ App Router)

**Requirements**:
- Allow all search engines
- Reference sitemap.xml
- Block admin routes
- Block API routes (optional)

**Implementation**:
```typescript
// src/app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://mindscape-research.vercel.app'
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/',
          '/api/',
          '/private/',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
```

---

## Implementation Checklist

### Phase 1: CMS Configuration ✅
- [ ] Update `public/config.yml` with SEO field groups
- [ ] Add hero image fields to Blog Posts
- [ ] Add hero image fields to Premium Reports
- [ ] Add author fields to all collections
- [ ] Add social media override fields
- [ ] Test field rendering in CMS interface

### Phase 2: Metadata Components
- [ ] Create `src/lib/seo.ts` utility functions
- [ ] Create metadata generation function for Blog Posts
- [ ] Create metadata generation function for Research Articles
- [ ] Create metadata generation function for Premium Reports
- [ ] Create JSON-LD component
- [ ] Create Organization schema for layout

### Phase 3: Next.js Integration
- [ ] Update `src/app/blog/[slug]/page.tsx` with metadata
- [ ] Update `src/app/research/[slug]/page.tsx` with metadata
- [ ] Update `src/app/reports/[slug]/page.tsx` with metadata (if exists)
- [ ] Update root layout with Organization schema
- [ ] Add Open Graph images

### Phase 4: Sitemap & Robots
- [ ] Create `src/app/sitemap.ts`
- [ ] Create `src/app/robots.ts`
- [ ] Create `src/app/sitemap/page.tsx` (HTML sitemap)
- [ ] Test sitemap generation
- [ ] Verify robots.txt serves correctly

### Phase 5: Testing & Validation
- [ ] Test meta tags with browser dev tools
- [ ] Validate JSON-LD with Google Rich Results Test
- [ ] Test Open Graph with Facebook Debugger
- [ ] Test Twitter Cards with Twitter Card Validator
- [ ] Verify sitemap.xml in Google Search Console
- [ ] Check robots.txt accessibility
- [ ] Run Lighthouse SEO audit

---

## Best Practices

### Meta Tags
- Title: 50-60 characters
- Description: 150-160 characters
- Include focus keyword naturally
- Unique for every page
- Compelling to improve CTR

### Hero Images
- Recommended size: 1200x630px (Open Graph standard)
- Max file size: 1MB
- Format: JPG or PNG
- Always include descriptive alt text
- Consider mobile viewing

### JSON-LD
- Validate with Google's Rich Results Test
- Include all required properties
- Keep data accurate and up-to-date
- Use multiple schemas when appropriate (Product + Article)

### Sitemap
- Update on every build/deployment
- Include only public, indexable URLs
- Set realistic changefreq
- Prioritize important pages
- Keep under 50,000 URLs (create sitemap index if larger)

### Robots.txt
- Allow all legitimate crawlers
- Block admin/private sections
- Include sitemap reference
- Test with Google Search Console

---

## Next.js 14+ Metadata API

Next.js provides built-in metadata support. Example:

```typescript
// src/app/blog/[slug]/page.tsx
import { Metadata } from 'next'
import { getPostBySlug } from '@/lib/mdx'

export async function generateMetadata({ params }): Promise<Metadata> {
  const post = await getPostBySlug(params.slug, 'blog')
  const seo = post.frontmatter.seo || {}
  
  return {
    title: seo.metaTitle || post.frontmatter.title,
    description: seo.metaDescription,
    keywords: [seo.focusKeyword, ...post.frontmatter.tags],
    authors: [{ name: post.frontmatter.author.name }],
    openGraph: {
      title: seo.metaTitle || post.frontmatter.title,
      description: seo.metaDescription,
      type: 'article',
      publishedTime: post.frontmatter.date,
      authors: [post.frontmatter.author.name],
      images: [
        {
          url: post.frontmatter.heroImage.src,
          width: 1200,
          height: 630,
          alt: post.frontmatter.heroImage.alt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.metaTitle || post.frontmatter.title,
      description: seo.metaDescription,
      images: [post.frontmatter.heroImage.src],
      creator: post.frontmatter.socialMedia?.twitterCreator,
    },
    alternates: {
      canonical: seo.canonicalUrl || `https://mindscape-research.vercel.app/blog/${params.slug}`,
    },
    robots: {
      index: !seo.noIndex,
      follow: !seo.noFollow,
    },
  }
}
```

---

**Status**: Ready for implementation  
**Next Step**: Update `public/config.yml` with SEO field groups
