# SEO Reference Guide - India Version

**Created:** November 30, 2025  
**Purpose:** Document SEO learnings for Phantom Healthcare India website  
**Why Now:** Fix SEO on initial pages before scaling to 100+ pages

---

## 🎯 WHY DOCUMENT SEO EARLY?

> "If we do SEO at the end, we'll have hundreds of pages to fix. If we do it now and successfully implement for initial pages, the rest of the website will be easy."

This document captures all SEO learnings from the Nov 29-30, 2025 sessions so future pages can be built correctly from the start.

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

## 🎯 SEO LENGTH LIMITS (REMINDER)

| Element | Ideal | Current Status |
|---------|-------|----------------|
| H1 | 20-70 chars | ✅ Fixed: "Phantom Healthcare - Refurbished MRI & CT Scanner India" (60 chars) |
| Title | 50-60 chars | ✅ OK |
| Description | 150-160 chars | ✅ OK |

