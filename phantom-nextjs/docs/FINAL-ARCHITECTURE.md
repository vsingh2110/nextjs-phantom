# FINAL ARCHITECTURE - Phantom Healthcare International

**Date:** 2025-11-27  
**Last Updated:** 2025-12-26 (Product Structure Complete)  
**Status:** APPROVED & IMPLEMENTED ✅  
**Author:** Claude Opus 4.5

---

## Executive Summary

This document defines the **THREE-LAYER** architecture for Phantom Healthcare's web presence:

1. **Main India Site** - Deep product/service catalog (phantomhealthcare.in)
2. **India City Pages** - SEO directory pages (Indiamart/Justdial style)
3. **International Sites** - COMPLETELY SEPARATE websites for each country

**Recent Updates (Dec 26, 2025)**:
- ✅ MRI product structure 100% complete (22 products)
- ✅ Brand pages with section dividers implemented
- ✅ ProductQuoteForm Firebase integration fixed
- ✅ 291 pages generated successfully

---

## Layer 1: Main India Site (Root Level)

### Purpose
Primary business website for Phantom Healthcare India with comprehensive product and service information.

### URL Structure
```
phantomhealthcare.in/
├── /                           # Homepage
├── /about/                     # About us
├── /contact/                   # Contact form (Firebase integrated)
├── /products/                  # Product categories
├── /services/                  # Service categories
├── /blogs/                     # Blog listing
├── /privacy-policy/            # Legal
├── /terms-and-conditions/      # Legal
├── /faqs/                      # FAQs
├── /customer-feedback/         # Testimonials
├── /events-and-news/           # News section
├── /sell-your-medical-imaging-equipment/   # Equipment selling
├── /spare-parts-and-inventory/             # Parts catalog
└── /sitemap/                   # HTML sitemap
```

### Deep Product Structure (IMPLEMENTED ✅)
```
/product-pages/
├── mri-scanner-machines/
│   ├── refurbished-ge-mri-scanner-machines/        # ⭐ NEW (Dec 26)
│   │   └── page.tsx                                # GE 3.0T + divider + GE 1.5T
│   ├── refurbished-siemens-mri-scanner-machines/   # ⭐ NEW (Dec 26)
│   │   └── page.tsx                                # Siemens 3.0T + divider + Siemens 1.5T
│   ├── 3.0t-mri-scanner-machines/
│   │   ├── page.tsx                                # 3.0T category overview
│   │   ├── ge-signa-3t-750w/                       # GE 3.0T Products (8 total)
│   │   ├── ge-signa-3t-750/
│   │   ├── ge-signa-hdxt-3t-23x-16ch/
│   │   ├── ge-signa-hdxt-3t-23x-8ch/
│   │   ├── ge-signa-hdxt-3t-16x-16ch/
│   │   ├── ge-signa-hdxt-3t-16x-8ch/
│   │   ├── ge-signa-3t-16ch/
│   │   ├── ge-signa-3t-8ch/
│   │   ├── siemens-magnetom-verio-3t/              # Siemens 3.0T Products (3 total)
│   │   ├── siemens-magnetom-spectra-3t/
│   │   └── siemens-magnetom-skyra-3t/
│   └── 1.5t-mri-scanner-machines/
│       ├── page.tsx                                # 1.5T category overview
│       ├── ge-signa-creator-1.5t/                  # GE 1.5T Products (8 total)
│       ├── ge-signa-explorer-1.5t/
│       ├── ge-signa-optima-360-advance-1.5t/
│       ├── ge-signa-hdxt-1.5t-23x-16ch/            # ⭐ NEW (Dec 26)
│       ├── ge-signa-hdxt-1.5t-23x-8ch/             # ⭐ NEW (Dec 26)
│       ├── ge-signa-hdxt-1.5t-16x-16ch/            # ⭐ NEW (Dec 26)
│       ├── ge-signa-hdxt-1.5t-16x-8ch/             # ⭐ NEW (Dec 26)
│       ├── ge-hde-1.5t/
│       ├── siemens-magnetom-essenza-1.5t-16ch/     # Siemens 1.5T Products (3 total)
│       ├── siemens-magnetom-essenza-1.5t-8ch/
│       └── siemens-magnetom-avanto-1.5t/
│
├── refurbished-ct-scan-machines/
│   ├── 16-slice-ct/
│   │   ├── page.tsx                        # 16-slice category overview
│   │   ├── ge-brightspeed-16/              # Individual model
│   │   └── siemens-somatom-emotion-16/     # Individual model
│   ├── 32-slice-ct/
│   │   └── page.tsx
│   ├── 64-slice-ct/
│   │   ├── page.tsx
│   │   └── ge-optima-660-64/
│   └── 128-slice-ct/
│       ├── page.tsx
│       ├── ge-optima-660-128/
│       └── ge-revolution-evo-128/
│
├── refurbished-pet-ct-scanner-machines/     # Planned
├── refurbished-cath-lab-machines/           # Planned
├── refurbished-gamma-camera-spect-system/   # Planned
└── refurbished-bone-densitometer-dexa/      # Planned
```

**Total MRI Products**: 22 (100% verified against static HTML)
- GE 3.0T: 8 products
- GE 1.5T: 8 products (includes 4 HDxt variants added Dec 26)
- Siemens 3.0T: 3 products
- Siemens 1.5T: 3 products

### Deep Service Structure (NEW)
```
/service-pages/
├── amc-comprehensive-maintenance/
│   ├── page.tsx                 # General AMC page
│   ├── ge-mri-amc/              # Brand + modality specific
│   ├── siemens-mri-amc/
│   ├── ge-ct-amc/
│   ├── siemens-ct-amc/
│   ├── philips-ct-amc/
│   └── toshiba-ct-amc/
│
├── installation-deinstallation/
├── equipment-relocation/
└── training/
```

---

## Layer 2: India City Pages (SEO Directory)

### Purpose
Indiamart/Justdial-style SEO pages targeting local keywords like:
- "MRI machine buy in Indore"
- "CT scan manufacturers in Mumbai"
- "Used medical imaging equipment Chennai"

### URL Structure
```
/locations/
├── [city]/
│   ├── page.tsx                           # General city page
│   └── [category]/page.tsx                # Category-specific page
```

### Example URLs
```
/locations/mumbai/                          # General Mumbai page
/locations/mumbai/ct-scan/                  # CT scan in Mumbai
/locations/mumbai/mri/                      # MRI in Mumbai
/locations/mumbai/x-ray/                    # X-ray in Mumbai
/locations/mumbai/refurbished-equipment/    # Used equipment in Mumbai
/locations/mumbai/amc-services/             # AMC in Mumbai

/locations/delhi/
/locations/bangalore/
/locations/chennai/
/locations/hyderabad/
/locations/kolkata/
/locations/pune/
/locations/ahmedabad/
/locations/indore/
/locations/jaipur/
/locations/lucknow/
... (50+ Indian cities)
```

### Content Strategy
Each city page includes:
- H1: "MRI Machine Dealers in Mumbai"
- Local address/contact information
- City-specific testimonials
- Nearby hospital references
- Local service coverage details
- Google Maps embed for that region

### SEO Benefits
- Target 50+ cities × 5-10 categories = 250-500 landing pages
- Each page targets "[product/service] in [city]" keywords
- Internal linking to main product pages
- Local schema markup

---

## Layer 3: International Sites (SEPARATE WEBSITES)

### ⚠️ CRITICAL UNDERSTANDING
**International sites are NOT translations of the India site.**
**They are COMPLETELY SEPARATE websites with:**
- Different headers (country-specific logo, navigation)
- Different footers (local contact, country-specific links)
- Different content (country-specific products, pricing)
- Different contact forms (local phone, address, map)
- Different legal pages (country-specific policies)

### URL Structure
```
/[lang]/
├── page.tsx                    # Country homepage
├── about/
├── contact/                    # DIFFERENT form, DIFFERENT map
├── products/
│   ├── page.tsx
│   └── [category]/
├── services/
│   ├── page.tsx
│   └── [type]/
├── locations/                  # Cities in THAT country
│   ├── [city]/
│   │   └── [category]/
└── blogs/
```

### Language Codes
```typescript
const SUPPORTED_LANGS = ['us', 'ae', 'uk', 'au', 'fr'] as const;

// URL Examples:
// /us/              → United States site
// /ae/              → UAE site
// /uk/              → United Kingdom site
// /au/              → Australia site
// /fr/              → France site
```

### Example: UAE Site Structure
```
/ae/                            # UAE Homepage
/ae/about/                      # About Phantom UAE
/ae/contact/                    # Dubai office address, UAE phone
/ae/products/                   # Products available in UAE
/ae/products/mri-machines/      # MRI category for UAE
/ae/services/                   # Services offered in UAE
/ae/locations/dubai/            # Dubai city page
/ae/locations/abu-dhabi/        # Abu Dhabi city page
/ae/locations/sharjah/          # Sharjah city page
```

### Component Architecture
```typescript
// International sites need DIFFERENT components:

// src/components/international/
├── InternationalHeader.tsx     // Country-specific header
├── InternationalFooter.tsx     // Country-specific footer
├── CountryContactForm.tsx      // Country-specific form
├── CountryMap.tsx              // Google Maps for that country
└── CountryContent.tsx          // Country-specific content wrapper

// Usage in [lang] routes:
import { InternationalHeader } from '@/components/international/InternationalHeader';
import { InternationalFooter } from '@/components/international/InternationalFooter';
```

---

## File Structure Summary

```
src/app/
├── page.tsx                    # India homepage
├── about/
├── contact/
├── products/
├── services/
├── blogs/
├── privacy-policy/             # ✅ NEW
├── terms-and-conditions/       # ✅ NEW
├── faqs/                       # ✅ NEW
├── customer-feedback/          # ✅ NEW
├── events-and-news/            # ✅ NEW
├── sell-your-medical-imaging-equipment/  # ✅ NEW
├── spare-parts-and-inventory/  # ✅ NEW
├── sitemap/                    # ✅ NEW
│
├── product-pages/
│   ├── ct-scan-machines/
│   │   ├── 16-slice-ct/        # ✅ NEW
│   │   │   ├── ge-brightspeed-16/      # ✅ NEW
│   │   │   └── siemens-somatom-emotion-16/  # ✅ NEW
│   │   ├── 32-slice-ct/        # ✅ NEW
│   │   ├── 64-slice-ct/        # ✅ NEW
│   │   └── 128-slice-ct/       # ✅ NEW
│   └── mri-machines/
│       ├── 1-5t-mri/           # ✅ NEW
│       └── 3-0t-mri/           # ✅ NEW
│
├── service-pages/
│   └── amc-comprehensive-maintenance/
│       ├── ge-mri-amc/         # ✅ NEW
│       ├── siemens-mri-amc/    # ✅ NEW
│       ├── ge-ct-amc/          # ✅ NEW
│       └── siemens-ct-amc/     # ✅ NEW
│
├── locations/                  # India city pages
│   └── [city]/
│       ├── page.tsx
│       └── [category]/page.tsx
│
└── [lang]/                     # International sites (SEPARATE)
    ├── page.tsx
    ├── about/
    ├── contact/
    ├── products/
    ├── services/
    ├── locations/
    │   └── [city]/
    │       └── [category]/
    └── blogs/
```

---

## SEO Files

### robots.txt (public/robots.txt)
```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/

Sitemap: https://phantomhealthcare.in/sitemap.xml
```

### sitemap.xml (public/sitemap.xml)
- Main pages
- All product categories
- All product specifications (16-slice, 32-slice, etc.)
- All individual product models (22 MRI + 4 CT + more)
- All service pages
- All location pages (168 combinations)
- All international sites

---

## Component & Data Architecture (Dec 26, 2025)

### Product Data Structure
```
src/data/products/
├── index.ts                    # Central export (allProducts array)
├── mri-3t.ts                   # 11 GE + Siemens 3.0T products (8 GE, 3 Siemens)
├── mri-1.5t.ts                 # 11 GE + Siemens 1.5T products (8 GE, 3 Siemens)
├── ct-scan.ts                  # 4 CT scanner products
└── [future categories]         # PET-CT, Cath Lab, Gamma Camera, etc.
```

**Product Interface** (TypeScript):
```typescript
interface Product {
  id: string;                    // Unique slug identifier
  name: string;                  // Display name
  fullName: string;              // Complete product name
  brand: string;                 // Manufacturer (GE Healthcare, Siemens Healthineers)
  model: string;                 // Model designation
  category: string;              // mri-scanner, ct-scanner, etc.
  subcategory: string;           // 3.0t, 1.5t, 16-slice, etc.
  condition: string;             // refurbished, brand-new
  description: string;           // Full description
  shortDescription: string;      // One-liner for cards
  features: string[];            // Bullet point features
  specifications: Spec[];        // Key specs (field strength, channels, etc.)
  mainImage: Image;              // Primary product image
  gallery: Image[];              // Additional images
  availability: string;          // Available, Coming Soon, Out of Stock
  priceOnRequest: boolean;       // True for all products
  metaTitle: string;             // SEO title
  metaDescription: string;       // SEO description
  keywords: string[];            // SEO keywords
  aggregateRating: Rating;       // Schema.org rating
  faqs: FAQ[];                   // Product-specific FAQs
  highlights: string[];          // 4 key highlights
  applications: string[];        // Clinical applications
  warranty: string;              // Warranty details
  relatedProducts: string[];     // IDs of related products
  urlPath: string;               // Full URL path
}
```

### Component Architecture

**ProductPageTemplate** (`src/components/product/ProductPageTemplate.tsx`):
- Reusable template for all individual product pages
- Renders: Hero, Breadcrumb, Specs, Features, Gallery, FAQs, CTA, Related Products
- Includes all JSON-LD schemas (Product, Breadcrumb, FAQ, Offer)

**ProductQuoteForm** (`src/components/product/ProductQuoteForm.tsx`):
- Contact form on all product pages
- **Firebase Integration** (Updated Dec 26, 2025):
  - Fields: name*, phone*, email, country, city, hospital, enquiry* (* = required)
  - Matches exact Firebase configuration from static site
  - Includes validation and submission handling

**ProductCategoryGrid** (`src/components/product/ProductCategoryGrid.tsx`):
- Grid layout for product cards
- Props: `products: Product[]`, `category?: string`
- Used on category pages and brand pages

**Brand Pages** (NEW - Dec 26, 2025):
- `/product-pages/mri-scanner-machines/refurbished-ge-mri-scanner-machines/page.tsx`
- `/product-pages/mri-scanner-machines/refurbished-siemens-mri-scanner-machines/page.tsx`
- Structure: Hero → Quick Links → 3.0T Section → `<hr>` Divider → 1.5T Section → Benefits → CTA
- Filters allProducts by brand and displays in categorized sections

### Dynamic Routing Structure

**Product Pages** - Static Generation:
```
src/app/product-pages/[category]/[subcategory]/[slug]/page.tsx
```
- Each product has its own directory with page.tsx
- Example: `/product-pages/mri-scanner-machines/3.0t-mri-scanner-machines/ge-signa-3t-750w/page.tsx`
- Uses ProductPageTemplate with specific product data

**Category Pages** - Static Generation:
```
src/app/product-pages/[category]/[subcategory]/page.tsx
```
- Lists all products in that subcategory
- Example: `/product-pages/mri-scanner-machines/3.0t-mri-scanner-machines/page.tsx`
- Filters allProducts by subcategory

**Brand Pages** - Static Generation:
```
src/app/product-pages/mri-scanner-machines/refurbished-{brand}-mri-scanner-machines/page.tsx
```
- Shows all products from specific brand
- Divides 3.0T and 1.5T with section dividers
- Example: refurbished-ge-mri-scanner-machines, refurbished-siemens-mri-scanner-machines

---

## URL Mapping: Static → Next.js

| Static Site (phantom-website/) | Next.js Route |
|-------------------------------|---------------|
| index.html | / |
| about.html | /about/ |
| contact.html | /contact/ |
| products.html | /products/ |
| services.html | /services/ |
| blogs.html | /blogs/ |
| privacy-policy.html | /privacy-policy/ |
| terms-and-conditions.html | /terms-and-conditions/ |
| faqs.html | /faqs/ |
| customer-feedback.html | /customer-feedback/ |
| events-and-news.html | /events-and-news/ |
| sell-your-medical-imaging-equipment.html | /sell-your-medical-imaging-equipment/ |
| spare-parts-and-inventory.html | /spare-parts-and-inventory/ |
| sitemap.html | /sitemap/ |
| product-pages/ct-scan-machines.html | /product-pages/ct-scan-machines/ |
| service-pages/amc-comprehensive-maintenance.html | /service-pages/amc-comprehensive-maintenance/ |

---

## Key Architecture Decisions

### Decision 1: City Pages at Root Level
**Why:** India is the primary market. City pages should be `/locations/mumbai/` not `/in/locations/mumbai/`.

### Decision 2: International as Separate Sites
**Why:** Each country has different business requirements, contact details, and products. They are not translations.

### Decision 3: Deep Product Structure
**Why:** SEO requires individual pages for each specification level and model. This allows targeting keywords like:
- "16 slice CT scanner price"
- "GE BrightSpeed 16 specifications"
- "Siemens 3.0T MRI buy"

### Decision 4: Dynamic Routes for Scale
**Why:** With 50+ cities × 10 categories × 5 countries, hard-coding pages is not feasible. Dynamic routes with data files scale efficiently.

---

## Next Steps

1. **Populate Data Files:** Create JSON/TS data files for:
   - City information (address, phone, coordinates)
   - Product specifications (each model's specs, features, price range)
   - International site content

2. **Create Components:**
   - City page template
   - Product page template
   - International header/footer

3. **Generate Static Params:**
   - Implement `generateStaticParams()` for all dynamic routes
   - Create ISR strategy for dynamic content

4. **SEO Implementation:**
   - JSON-LD schema for each page type
   - OpenGraph/Twitter cards
   - Canonical URLs for cross-linking

---

## Version History

| Date | Version | Changes |
|------|---------|---------|
| 2025-11-27 | 1.0 | Initial architecture document |
| 2025-11-27 | 1.1 | Added deep product/service structure |
| 2025-11-27 | 1.2 | Added missing pages (privacy, terms, faqs, etc.) |
| 2025-11-27 | 1.3 | Added robots.txt and sitemap.xml |
| 2025-12-26 | 2.0 | **Major Update**: Complete MRI product structure, brand pages, component architecture, Firebase integration details |
