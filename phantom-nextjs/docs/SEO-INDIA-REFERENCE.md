# SEO Reference Guide - India Version

**Created:** November 30, 2025  
**Last Updated:** November 30, 2025  
**Purpose:** Complete SEO & Development Guidelines for Phantom Healthcare India website  
**Why Now:** Fix SEO on initial pages before scaling to 100+ pages

---

## 🎯 WHY DOCUMENT SEO EARLY?

> "If we do SEO at the end, we'll have hundreds of pages to fix. If we do it now and successfully implement for initial pages, the rest of the website will be easy."

This document captures all SEO learnings from the Nov 29-30, 2025 sessions so future pages can be built correctly from the start.

---

## 📚 TABLE OF CONTENTS

1. [Schema.org Types Used](#-schemaorg-types-used)
2. [Meta Tags Reference](#-meta-tags-reference)
3. [Next.js Image Best Practices](#-nextjs-image-best-practices)
4. [Accessibility Guidelines](#-accessibility-guidelines)
5. [New Page Development Checklist](#-new-page-development-checklist)
6. [Common Pitfalls & Mistakes](#-common-pitfalls--mistakes)
7. [Validation Tools](#-validation-tools)
8. [Non-Relevant Warnings](#-non-relevant-warnings-ignore-these)

---

## 📋 SCHEMA.ORG TYPES USED

### 1. Corporation (Organization)
**File:** `src/components/seo/JsonLd.tsx` → `OrganizationJsonLd()`  
**Used On:** Home page

```javascript
{
  "@type": "Corporation",
  "name": "Phantom Healthcare IND Private Limited",
  "alternateName": ["Phantom Healthcare"],
  "url": "https://phantomhealthcare.com",
  "logo": "https://phantomhealthcare.com/images/logo.jpg",
  "foundingDate": "2011",
  "founder": [...],
  "address": {...},
  "location": { "@type": "Place", "geo": {...} },  // geo goes inside Place, NOT Organization
  "contactPoint": [...],
  "sameAs": [...],
  "hasOfferCatalog": {...}
}
```

**⚠️ IMPORTANT:** 
- `geo` property is ONLY valid on `Place` or `LocalBusiness`, NOT on `Organization/Corporation`
- Put geo inside: `"location": { "@type": "Place", "geo": {...} }`

---

### 2. ProfessionalService (LocalBusiness)
**File:** `src/components/seo/JsonLd.tsx` → `LocalBusinessJsonLd()`  
**Used On:** Home, Contact pages

```javascript
{
  "@type": "ProfessionalService",  // NOT MedicalBusiness (restricted on ad platforms)
  "name": "Phantom Healthcare",
  "geo": {...},  // Valid here because LocalBusiness extends Place
  "openingHoursSpecification": {...},
  "priceRange": "$$$$"
}
```

**⚠️ IMPORTANT:**
- Use `ProfessionalService` instead of `MedicalBusiness` (MedicalBusiness restricted on Google Ads, etc.)
- `geo` IS valid on LocalBusiness (it extends Place)

---

### 3. MedicalDevice
**File:** `src/components/seo/JsonLd.tsx` → `MedicalDeviceJsonLd()`  
**Used On:** Home page

**VALID Properties:**
- `name` ✅
- `description` ✅
- `url` ✅
- `image` ✅
- `sameAs` ✅

**INVALID Properties (will show warnings):**
- ~~`category`~~ ❌
- ~~`isRelatedTo`~~ ❌
- ~~`manufacturer`~~ ❌

```javascript
// CORRECT
{
  "@type": "MedicalDevice",
  "name": "Refurbished GE Signa 3.0T MRI Scanner",
  "description": "Refurbished high-field 3.0T MRI Scanner...",
  "url": "https://phantomhealthcare.com/product-pages/..."
}

// WRONG - these properties not recognized
{
  "@type": "MedicalDevice",
  "manufacturer": {...},  // ❌ NOT VALID
  "category": "MRI Scanner",  // ❌ NOT VALID
  "isRelatedTo": "..."  // ❌ NOT VALID
}
```

---

### 4. MedicalBusiness (Secondary Schema)
**File:** `src/components/seo/JsonLd.tsx` → `MedicalBusinessJsonLd()`  
**Used On:** Home, About pages (as secondary, not primary)

Use only required properties:
```javascript
{
  "@type": "MedicalBusiness",
  "name": "...",
  "description": "...",
  "url": "...",
  "telephone": "...",
  "email": "...",
  "address": {...},
  "geo": {...},
  "openingHoursSpecification": {...},
  "priceRange": "$$$$"
}
```

---

### 5. Product (for Offer Catalog)
**File:** `src/components/seo/JsonLd.tsx` → Inside `hasOfferCatalog`

**REQUIRED for Google Rich Results:**
- `name` ✅
- `image` ✅ **CRITICAL - Missing this causes errors!**
- `offers` OR `review` OR `aggregateRating` ✅

```javascript
{
  "@type": "Product",
  "name": "Refurbished GE Signa 3.0T 750W MRI Scanner",
  "description": "...",
  "image": "https://phantomhealthcare.com/images/products/ge-signa-3t.jpg",  // REQUIRED!
  "brand": { "@type": "Brand", "name": "GE Healthcare" },
  "category": "Refurbished MRI Scanner",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "INR",
    "price": "0",  // Use 0 for "Contact for Price"
    "priceValidUntil": "2026-12-31",
    "url": "https://phantomhealthcare.com/contact"
  }
}
```

---

## 📱 META TAGS REFERENCE

### Required in layout.tsx
```tsx
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
// Do NOT add maximum-scale=1 (causes accessibility warning)

<meta name="mobile-web-app-capable" content="yes" />
// NOT apple-mobile-web-app-capable (deprecated)
```

### Recommended Legacy Meta Tags
```tsx
// Geographic
<meta name="geo.region" content="IN-HR" />
<meta name="geo.placename" content="Faridabad" />
<meta name="geo.position" content="28.46875;77.29099" />
<meta name="ICBM" content="28.46875, 77.29099" />

// Dublin Core
<meta name="DC.title" content="..." />
<meta name="DC.creator" content="..." />
<meta name="DC.subject" content="..." />
<meta name="DC.description" content="..." />

// Business
<meta name="contact" content="info@phantomhealthcare.com" />
<meta name="copyright" content="© 2011-2025 Phantom Healthcare" />
```

---

## 📏 SEO LENGTH LIMITS

| Element | Ideal Length | Max Length |
|---------|-------------|------------|
| Title | 50-60 chars | 65 chars |
| Description | 150-160 chars | 165 chars |
| H1 | 20-70 chars | 70 chars |
| URL slug | Short, keyword-rich | N/A |

---

## ✅ VALIDATION TOOLS

1. **Google Rich Results Test** (Primary)
   - https://search.google.com/test/rich-results
   - Tests what Google will actually detect

2. **Schema.org Validator** (Secondary)
   - https://validator.schema.org/
   - More lenient, detects more types

3. **Structured Data Testing Tool** (Legacy)
   - Being phased out, use Rich Results instead

---

## ⚠️ COMMON PITFALLS

### 1. Schema validated on schema.org but NOT on Google
- Google has stricter requirements
- Always test with Google Rich Results
- Example: ContactPage schema may not show in Google

### 2. MedicalBusiness restricted on ad platforms
- Use ProfessionalService for LocalBusiness instead
- MedicalBusiness works for schema but causes ad issues

### 3. geo property placement
- ❌ WRONG: Put geo directly on Organization
- ✅ RIGHT: Put geo inside `location.Place` or on LocalBusiness

### 4. Product without image
- Google REQUIRES image for Product schema eligibility
- Without image = "Invalid item" error

### 5. Refurbished products
- Always include "Refurbished" in product names
- We are resellers, not original manufacturers
- Website clearly states refurbished, but schema should too

---

## 🔗 QUICK REFERENCE

### Files to Edit for SEO
```
src/app/layout.tsx                 - Global meta tags
src/components/seo/JsonLd.tsx      - All JSON-LD schemas
src/app/[page]/page.tsx            - Page-specific metadata
```

### Schema Components Available
```typescript
import { 
  OrganizationJsonLd,      // Corporation schema
  LocalBusinessJsonLd,      // ProfessionalService
  WebSiteJsonLd,           // WebSite with SearchAction
  BreadcrumbJsonLd,        // BreadcrumbList
  MedicalDeviceJsonLd,     // 8 medical device products
  MedicalBusinessJsonLd,   // Secondary business type
  AboutPageFullJsonLd      // AboutPage + Organization
} from '@/components/seo/JsonLd';
```

---

## 📝 CHECKLIST FOR NEW PAGES

- [ ] Add page-specific metadata (title < 65 chars, description < 165 chars)
- [ ] Add openGraph and twitter metadata
- [ ] Add canonical URL
- [ ] Add BreadcrumbJsonLd
- [ ] Add visible breadcrumb in hero section
- [ ] Add relevant page-type schema (AboutPage, ContactPage, etc.)
- [ ] Ensure single H1 (20-70 chars)
- [ ] Test with Google Rich Results
- [ ] Add page to sitemap.xml

---

## 🚫 NON-RELEVANT WARNINGS (IGNORE THESE)

### 1. Canonical URL Warning
- **Warning:** "Canonical and page URL are different"
- **Why Ignore:** During development, we're on `nextjs-phantom.vercel.app` but canonical points to `phantomhealthcare.com` (production domain)
- **Action:** This is intentional. Will resolve when deployed to production domain.

### 2. Vercel Preview URL Warnings
- **Warning:** Any warnings about `vercel.app` URLs
- **Why Ignore:** Development/preview URLs, not production
- **Action:** None needed. Production uses `phantomhealthcare.com`

### 3. Anchor Links Without Text (# links)
- **Warning:** "Links without anchor text" for `#products`, `#services`, etc.
- **Why Ignore:** These are dropdown menu anchor links that trigger submenus
- **Action:** These are intentional UX patterns for navigation dropdowns

### 4. Image WIDTH/HEIGHT Missing (Next.js fill prop)
- **Warning:** "17 images missing WIDTH or HEIGHT attribute"
- **Why Ignore:** Next.js Image with `fill` prop + `sizes` attribute is the correct responsive image pattern
- **Reality:** Images use: `<Image fill sizes="(max-width: 768px) 100vw, 50vw" />`
- **Action:** None needed. This is Next.js best practice for responsive images.

### 5. Hidden Content Warnings for line breaks
- **Warning:** "Content seems to be hidden" for h3 elements
- **Why Ignore:** These h3 elements use `<br/>` tags for text wrapping, not to hide content
- **Example:** `24*7 Service & <br/> Support` shows as two lines, not hidden
- **Action:** None needed. False positive from SEO checker.

### 6. Image TITLE Attribute Missing
- **Warning:** "37 images with missing TITLE attribute"
- **Why Ignore:** TITLE is optional, ALT is required. All our images have ALT text.
- **Action:** Optional - can add title for enhanced tooltips, but not SEO-critical

### 7. META charset/httpEquiv Position
- **Warning:** "This tag has to be placed above"
- **Status:** ✅ FIXED - Moved charset and httpEquiv to top of head in layout.tsx
- **Note:** charset, httpEquiv, viewport should always be first in head

---

## 🖼️ IMAGE WIDTH/HEIGHT GUIDANCE

### When to use `fill` prop (NO width/height needed)
```jsx
// ✅ CORRECT - Hero images, full-width backgrounds
<Image 
  fill 
  sizes="(max-width: 768px) 100vw, 50vw"
  src="/images/hero.jpg" 
  alt="..." 
/>
```

### When to use explicit width/height
```jsx
// ✅ CORRECT - Icons, thumbnails, known-size images
<Image 
  src="/images/icon.png" 
  alt="..." 
  width={150} 
  height={150} 
/>

// ❌ WRONG - Never use width={0} height={0}
<Image 
  src="/images/icon.png" 
  width={0} 
  height={0}  // This causes SEO warnings!
/>
```

### Images Fixed (Nov 30, 2025)
- `icons.png` - Changed from 0x0 to 150x150
- `upd.png` - Changed from 0x0 to 150x150  
- `ser.png` - Changed from 0x0 to 150x150

---

## 🔧 PRODUCT SCHEMA REQUIREMENTS (Google Rich Results)

### Required Fields for Products
```javascript
{
  "@type": "Product",
  "name": "...",              // ✅ REQUIRED
  "image": "...",             // ✅ REQUIRED - Google will reject without this!
  "offers": {...}             // ✅ REQUIRED (or review/aggregateRating)
}
```

### Recommended Fields for Better Rich Results
```javascript
{
  "aggregateRating": {        // Highly recommended
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "45",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": {                 // Highly recommended
    "@type": "Review",
    "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
    "author": { "@type": "Organization", "name": "Apollo Hospitals" },
    "reviewBody": "Excellent refurbished MRI..."
  }
}
```

### Product URL Best Practice
- ❌ WRONG: `"url": "https://phantomhealthcare.com/contact"`
- ✅ RIGHT: `"url": "https://phantomhealthcare.com/product-pages/mri-scanner-machines/3.0t-mri-scanner-machines"`
- Each product's URL should point to its actual product page, not the contact page

---

## 📊 CURRENT PRODUCT COUNT IN SCHEMA

| Category | Count | Schema Location |
|----------|-------|-----------------|
| MRI Machines (3.0T) | 4 | hasOfferCatalog |
| MRI Machines (1.5T) | 4 | hasOfferCatalog |
| CT Scanners | 4 | hasOfferCatalog |
| PET-CT Scanners | 2 | hasOfferCatalog |
| Cath Lab Systems | 2 | hasOfferCatalog |
| Gamma Camera SPECT | 3 | hasOfferCatalog |
| Bone Densitometer | 1 | hasOfferCatalog |
| **TOTAL** | **20** | OrganizationJsonLd |

All products have: name, description, image, brand, category, aggregateRating, review, offers with proper URLs

---

## 🖼️ NEXT.JS IMAGE BEST PRACTICES

### Understanding Image Sizing in Next.js

Next.js `<Image>` component has two main patterns:

#### Pattern 1: Explicit Width/Height (for known-size images)
```jsx
// ✅ CORRECT - Icons, thumbnails, logos with known dimensions
<Image 
  src="/images/icon.png" 
  alt="Icon description" 
  width={150} 
  height={150}
  className="w-28 h-28 object-contain"
/>
```

**When to use:**
- Icons and small graphics
- Thumbnails with fixed sizes
- Logos with known dimensions
- Any image where you know the exact size

#### Pattern 2: Fill + Sizes (for responsive images)
```jsx
// ✅ CORRECT - Hero images, backgrounds, full-width images
<div className="relative h-[400px] w-full">
  <Image 
    src="/images/hero.jpg" 
    alt="Hero image"
    fill
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    className="object-cover"
  />
</div>
```

**When to use:**
- Hero/banner images
- Background images
- Full-width responsive images
- Images that should scale with container

### SEO Tool Warning: Images with 0x0 or - x - dimensions

**Understanding the Warning:**
When SEO tools report images with `REAL 0x0` or `HTML - x -`, this often means:

1. **For `fill` images:** This is EXPECTED behavior. Next.js `fill` uses CSS sizing, not HTML width/height attributes.
2. **For lazy-loaded images:** SEO tools check dimensions before images load into viewport.

**NOT a Problem If:**
- Image has `fill` prop with proper `sizes` attribute
- Image actually renders correctly on the page
- Image has proper `alt` text

**IS a Problem If:**
- Image has explicit `width={0} height={0}` ← NEVER DO THIS
- Image doesn't render visually
- Image is missing entirely

### ❌ NEVER DO THIS
```jsx
// ❌ WRONG - This causes real SEO issues
<Image 
  src="/images/icon.png"
  width={0}
  height={0}
  className="w-auto h-auto"
/>
```

### Priority Loading for Above-the-Fold Images

```jsx
// ✅ For images visible immediately on page load
<Image 
  src="/images/logo.jpg"
  alt="Phantom Healthcare Logo"
  width={220}
  height={70}
  priority  // Loads immediately, not lazy
/>

// For sliders/carousels - first slide gets priority
{slides.map((slide, index) => (
  <Image 
    src={slide.image}
    alt={slide.title}
    fill
    sizes="100vw"
    priority={index === 0}  // Only first slide
  />
))}
```

### Images Fixed During Nov 30, 2025 Session

| File | Issue | Fix Applied |
|------|-------|-------------|
| `TopBlock.tsx` | width={0} height={0} | Changed to width={150} height={150} |
| `Footer.tsx` | `unoptimized` on white-logo | Removed `unoptimized` |
| `Footer.tsx` | `unoptimized` on flags | Removed `unoptimized`, fixed alt text |
| `RegionalOffices.tsx` | `unoptimized`, no sizes | Removed `unoptimized`, added `sizes="80px"` |
| `TestimonialsCarousel.tsx` | `unoptimized` on doctor images | Removed `unoptimized` |
| `page.tsx` (home) | Spare parts images missing sizes | Added responsive `sizes` attribute |
| `Header.tsx` | Logo lazy loading above fold | Added `priority` prop |
| `About page.tsx` | Founder images missing sizes | Added `sizes` attribute |

---

## ♿ ACCESSIBILITY GUIDELINES

### Required for All Interactive Elements

#### Buttons MUST have accessible names
```jsx
// ❌ WRONG - No accessible name
<button onClick={prevSlide}>
  <i className="fas fa-chevron-left"></i>
</button>

// ✅ CORRECT - Has aria-label
<button onClick={prevSlide} aria-label="Previous slide">
  <i className="fas fa-chevron-left" aria-hidden="true"></i>
</button>
```

#### Links MUST have accessible names
```jsx
// ❌ WRONG - Icon-only link without aria-label
<a href="https://twitter.com/...">
  <i className="fa fa-twitter"></i>
</a>

// ✅ CORRECT - Has aria-label
<a href="https://twitter.com/..." aria-label="Follow us on Twitter">
  <i className="fa fa-twitter" aria-hidden="true"></i>
</a>
```

### Icon Best Practices
```jsx
// For decorative icons (next to text)
<i className="fa fa-phone" aria-hidden="true"></i>
<span>+91 9899963601</span>

// For icon-only buttons
<button aria-label="Call us">
  <i className="fa fa-phone" aria-hidden="true"></i>
</button>
```

### Fixed During Nov 30, 2025 Session

| Component | Issue | Fix |
|-----------|-------|-----|
| `HeroSlider.tsx` | 8 buttons without accessible names | Added `aria-label` to prev/next/dots/play-pause |
| `Footer.tsx` | 7 social links without text | Added `aria-label` to all social links |
| `Header.tsx` | Social links in top bar | Already had `aria-label` ✓ |

---

## 📱 META TAGS REFERENCE

### Next.js Metadata API vs Manual Meta Tags

**IMPORTANT:** Next.js adds some meta tags automatically through the metadata API. DO NOT duplicate these:

```tsx
// In metadata object (Next.js handles these):
export const metadata: Metadata = {
  title: '...',
  description: '...',
  viewport: { ... },  // Next.js adds viewport automatically
  // ...
}

// In <head> - DO NOT add viewport manually
// ❌ WRONG - Causes duplicate
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

// ✅ CORRECT - Let Next.js handle viewport
{/* NOTE: viewport is handled by Next.js metadata API - do not duplicate */}
```

### Required Order in <head>

```tsx
<head>
  {/* 1. FIRST: Character encoding */}
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
  
  {/* 2. Next.js adds viewport automatically */}
  
  {/* 3. Then other meta tags */}
  <meta name="HandheldFriendly" content="true" />
  ...
</head>
```

### Deprecated Tags to Avoid

| ❌ Deprecated | ✅ Use Instead |
|--------------|---------------|
| `apple-mobile-web-app-capable` | `mobile-web-app-capable` |
| `maximum-scale=1` in viewport | Remove it (accessibility issue) |

---

## 📝 NEW PAGE DEVELOPMENT CHECKLIST

### Before Creating a New Page

```
□ Identify page type (product, service, about, contact, etc.)
□ Determine which Schema.org types to use
□ Prepare all images with proper dimensions
□ Write title (50-60 chars) and description (150-160 chars)
□ Plan heading hierarchy (single H1, logical H2-H6)
```

### Page Structure Template

```tsx
// 1. Imports
import type { Metadata } from 'next';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import Image from 'next/image';
import Link from 'next/link';

// 2. Metadata (REQUIRED)
export const metadata: Metadata = {
  title: 'Page Title - Phantom Healthcare',  // 50-60 chars
  description: 'Page description...',         // 150-160 chars
  keywords: ['keyword1', 'keyword2'],
  openGraph: {
    title: '...',
    description: '...',
    url: 'https://phantomhealthcare.com/page-slug',
    images: [{ url: '/images/page-image.jpg', width: 1200, height: 630, alt: '...' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '...',
    description: '...',
    images: ['/images/page-image.jpg'],
  },
  alternates: {
    canonical: 'https://phantomhealthcare.com/page-slug',
  },
};

// 3. Page Component
export default function PageName() {
  // Breadcrumb data
  const breadcrumbItems = [
    { name: 'Home', url: 'https://phantomhealthcare.com' },
    { name: 'Current Page', url: 'https://phantomhealthcare.com/page-slug' }
  ];

  return (
    <main className="min-h-screen">
      {/* JSON-LD Structured Data */}
      <BreadcrumbJsonLd items={breadcrumbItems} />
      
      {/* Hero Section with H1 */}
      <section className="...">
        {/* Visible Breadcrumb */}
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li><Link href="/">Home</Link></li>
            <li><span>›</span></li>
            <li>Current Page</li>
          </ol>
        </nav>
        
        {/* Single H1 - 20-70 characters */}
        <h1>Page Main Heading</h1>
      </section>
      
      {/* Page Content */}
      <section>
        <h2>Section Heading</h2>
        {/* ... */}
      </section>
    </main>
  );
}
```

### Image Checklist for New Pages

```
□ All images have descriptive alt text
□ Above-fold images use priority prop
□ Large/responsive images use fill + sizes
□ Small/icon images use explicit width/height
□ NO width={0} height={0} anywhere
□ NO unoptimized prop unless absolutely necessary
```

### Accessibility Checklist

```
□ All buttons have accessible names (aria-label or text)
□ All icon-only links have aria-label
□ Heading hierarchy is logical (H1 → H2 → H3, no skipping)
□ Form inputs have associated labels
□ Color contrast meets WCAG AA (4.5:1 for text)
□ Interactive elements are keyboard accessible
```

### SEO Checklist

```
□ Page has unique title (50-60 chars)
□ Page has unique description (150-160 chars)
□ Single H1 per page (20-70 chars)
□ Canonical URL set
□ Open Graph meta tags present
□ Twitter card meta tags present
□ Breadcrumb JSON-LD added
□ Visible breadcrumb in hero section
□ Page added to sitemap.xml
□ Tested with Google Rich Results Test
```

---

## ⚠️ COMMON PITFALLS & MISTAKES

### Schema.org Mistakes

| Mistake | Why It's Wrong | Correct Approach |
|---------|---------------|------------------|
| `geo` on Organization | `geo` only valid on Place/LocalBusiness | Put inside `location: { "@type": "Place", "geo": {...} }` |
| Product without image | Google REQUIRES image for eligibility | Always include `"image": "https://..."` |
| MedicalDevice with category | `category` not valid on MedicalDevice | Remove, use only supported properties |
| Product URL to contact page | URL should point to product page | Use actual product page URL |

### Next.js Image Mistakes

| Mistake | Effect | Fix |
|---------|--------|-----|
| `width={0} height={0}` | SEO tools report 0x0 dimensions | Use actual dimensions |
| Missing `sizes` on fill images | Poor responsive behavior | Add proper sizes attribute |
| `unoptimized` on all images | No Next.js optimization | Only use when absolutely necessary |
| No `priority` on above-fold | Slow LCP, poor Core Web Vitals | Add `priority` to critical images |

### Meta Tag Mistakes

| Mistake | Effect | Fix |
|---------|--------|-----|
| Duplicate viewport | Conflicting viewport settings | Remove manual viewport, use Next.js metadata |
| `apple-mobile-web-app-capable` | Deprecated | Use `mobile-web-app-capable` |
| `maximum-scale=1` | Accessibility issue, prevents zoom | Remove from viewport |

### Accessibility Mistakes

| Mistake | Effect | Fix |
|---------|--------|-----|
| Icon button without aria-label | Screen readers can't describe action | Add `aria-label="Button purpose"` |
| Icon link without aria-label | Screen readers can't describe link | Add `aria-label="Link destination"` |
| Skipped heading levels | Poor document structure | Use H1→H2→H3 in order |
| H1 too long | Poor SEO, truncated in search results | Keep 20-70 characters |

---

## 🎯 SEO LENGTH LIMITS (REMINDER)

| Element | Ideal | Current Status |
|---------|-------|----------------|
| H1 | 20-70 chars | ✅ Fixed: "Phantom Healthcare - Refurbished MRI & CT Scanner India" (60 chars) |
| Title | 50-60 chars | ✅ OK |
| Description | 150-160 chars | ✅ OK |

