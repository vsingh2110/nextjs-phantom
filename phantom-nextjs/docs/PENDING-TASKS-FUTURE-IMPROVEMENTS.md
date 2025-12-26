# PENDING TASKS & FUTURE IMPROVEMENTS
**Created:** December 24, 2025  
**Last Updated:** December 27, 2025 (CT Scanner Complete + Testing Reality Check)  
**Status:** Active Development - MRI & CT Complete ✅ | Testing Pending ⚠️

---

## ✅ RECENTLY COMPLETED (December 27, 2025)

### CT Scanner Page - Complete Overhaul ✅
**Status:** ✅ CODE COMPLETE | ⚠️ TESTING REQUIRED

**Completed:**
1. ✅ Split CT page into GE and Siemens brand sections
2. ✅ Added green badge headings for each section
3. ✅ Added navigation buttons in hero (GE + Siemens)
4. ✅ Added 2 Siemens CT products (Go Now 16 & 32) as "Coming Soon"
5. ✅ Implemented FAQ accordion (6 questions)
6. ✅ Removed 4-column info grid
7. ✅ Applied product sorting logic matching static site
8. ✅ Verified images exist in public folder

**Build Status:** ✅ 289 pages, 0 errors, 0 warnings

### Route Structure & Navigation Fixes ✅
**Status:** ✅ ALL CRITICAL ISSUES RESOLVED (Dec 26-27)

**Completed:**
1. ✅ Fixed route structure (removed intermediate mri-scanner-machines folder)
2. ✅ Updated all product URLs in data files (22 MRI products)
3. ✅ Restored product navigation (Learn More buttons working)
4. ✅ Implemented Coming Soon/Out of Stock display logic
5. ✅ Added navigation buttons to mixed pages (1.5T and 3.0T)
6. ✅ Added image fallback system with placeholder
7. ✅ Fixed ribbon positioning (Coming Soon now on left)
8. ✅ Rebuilt branded pages with green badge section headings

---

## 🚨 CRITICAL - COMPREHENSIVE TESTING REQUIRED

### ⚠️ TESTING REALITY CHECK (December 27, 2025)

**CURRENT TESTING STATUS:**
- ❌ **NO comprehensive testing performed since December 24, 2025**
- ✅ **Only basic verification:** URL routes load, page renders, basic layout positioning
- ❌ **NOT tested:** Lighthouse scores, accessibility, mobile responsive, big screen responsive
- ❌ **NOT verified:** Detailed content accuracy, image quality, image backgrounds
- ❌ **Forms NOT tested:** Contact form, quote forms, Firebase submissions

**Pages Completed (Code) BUT NOT TESTED:**
- CT Scanner category page (Dec 27) - GE + Siemens sections
- 4 MRI category pages (1.5T, 3.0T, GE, Siemens)
- 22 MRI individual product pages
- 6 CT individual product pages (4 GE + 2 Siemens Coming Soon)

**CRITICAL ITEMS NEEDING EVALUATION:**
1. 🔴 **High-quality PNG images without backgrounds** - NOT verified
2. 🔴 **Detailed content accuracy** - NOT reviewed thoroughly
3. 🔴 **Image optimization and quality** - NOT tested
4. 🔴 **Mobile responsiveness** - NOT tested on all new pages
5. 🔴 **Big screen layout (2560px, 3840px)** - NOT tested
6. 🔴 **Form functionality** - NOT tested (Contact, Quote forms)
7. 🔴 **Firebase integration** - NOT verified
8. 🔴 **SEO meta tags accuracy** - NOT validated
9. 🔴 **JSON-LD schema validation** - NOT run through Google tools
10. 🔴 **Accessibility compliance** - NOT audited
11. 🔴 **Performance scores (Lighthouse)** - NOT run on new pages
12. 🔴 **Navigation buttons smooth scroll** - NOT tested on production
13. 🔴 **FAQ accordion functionality** - NOT verified
14. 🔴 **Coming Soon product display** - NOT tested on production

**RECOMMENDATION:**
- Schedule dedicated testing session immediately
- Prioritize visual quality audit (images, backgrounds, content)
- Test all forms with actual Firebase submissions
- Run Lighthouse on all new pages (MRI + CT)
- Verify mobile responsiveness on real devices
- Test big screen layouts (2560px+)

---

## ⚡ CRITICAL - IMMEDIATE ACTIONS REQUIRED

### 1. PRODUCTION DEPLOYMENT & VERIFICATION 🚨
**Status:** ⚠️ CHANGES NOT DEPLOYED

**Action Required (NEXT SESSION):**
1. Deploy CT scanner changes to Vercel
2. Visual review of CT page on production URL
3. Test all navigation buttons scroll correctly
4. Verify "Coming Soon" products display with blue ribbons
5. Test FAQ accordion expand/collapse
6. Check all images load correctly
7. Test on mobile devices (375px, 768px)
8. Test on big screens (1920px, 2560px)

---

### 2. IMAGE QUALITY AUDIT 🚨
**Status:** ❌ NOT VERIFIED

**Action Required:**
1. Check all product images for quality
2. Verify PNG images have transparent backgrounds (no white/gray boxes)
3. Replace low-quality images with high-resolution versions
4. Optimize images for web (compression without quality loss)
5. Convert to WebP format where appropriate
6. Add proper alt text to all images

**Affected Images:**
- All MRI product images (22 products)
- All CT scanner images (6 products)
- Category page images
- Hero section images

---

### 3. CONTENT ACCURACY REVIEW 🚨
**Status:** ❌ NOT REVIEWED

**Action Required:**
1. Review all product descriptions for accuracy
2. Verify specifications match actual equipment
3. Check features lists are complete
4. Validate pricing information (if displayed)
5. Review FAQ answers for correctness
6. Check for typos and grammatical errors

**Pages to Review:**
- 22 MRI product pages
- 6 CT product pages
- 6 category pages
- All FAQ sections

---

### 4. FIREBASE FORM TESTING
**Status:** ✅ CODE FIXED | ⚠️ PRODUCTION TESTING REQUIRED

**Issue Fixed:**
- ProductQuoteForm fields updated to match Firebase configuration
- Previous fields replaced with: name*, phone*, email, country, city, hospital, enquiry*

**Action Required:**
1. Test form submission on product pages
2. Verify Firebase receives data correctly
3. Check Firebase console for submissions
4. Test with required fields only
5. Test with all fields filled
6. Test error handling and validation
7. Test on mobile devices

---

## ✅ COMPLETED FEATURES (December 24-27, 2025)

### CT Scanner Catalog - COMPLETE ✅
**Status:** ✅ 6/6 CT PRODUCTS ADDED (Category Page Complete)

**GE CT Scanners** (4 products - All Available) ✅:
- BrightSpeed 16 (16-slice)
- Optima 660 64 (64-slice)
- Optima 660 128 (128-slice)
- Revolution EVO 128 (128-slice, premium)

**Siemens CT Scanners** (2 products - Coming Soon) ✅:
- Go Now 16 (16-slice) ⭐ NEW - Coming Soon
- Go Now 32 (32-slice) ⭐ NEW - Coming Soon

**CT Category Page Created** ✅:
- `/product-pages/refurbished-ct-scan-machines` 
- GE section with green badge heading
- Siemens section with green badge heading
- Navigation buttons for quick section access
- FAQ accordion (6 questions)
- Product sorting applied

**Individual Product Pages:**
- 4 GE CT pages created ✅
- 2 Siemens CT pages NOT yet created (Coming Soon on category page only)

---

### MRI Product Catalog - 100% COMPLETE ✅
**Status:** ✅ 22/22 MRI PRODUCTS LIVE

**GE 3.0T** (8 products) ✅:
- Signa 750W, 750, HDxt [23x] 16ch/8ch, HDxt [16x] 16ch/8ch, Signa 16ch/8ch

**GE 1.5T** (8 products) ✅:
- Creator [25.2x], Explorer, Optima 360 Advance [25x], HDxt [23x] 16ch/8ch ⭐ NEW, HDxt [16x] 16ch/8ch ⭐ NEW, HDE

**Siemens 3.0T** (3 products) ✅:
- Magnetom Verio 3T, Spectra 3T, Skyra 3T

**Siemens 1.5T** (3 products) ✅:
- Magnetom Essenza 16ch/8ch, Avanto 1.5T

**Brand Pages Created** ✅:
- `/product-pages/mri-scanner-machines/refurbished-ge-mri-scanner-machines` (GE 3.0T + divider + GE 1.5T)
- `/product-pages/mri-scanner-machines/refurbished-siemens-mri-scanner-machines` (Siemens 3.0T + divider + Siemens 1.5T)

---

## ⚡ HIGH PRIORITY - NEXT TASKS

### 1. IMAGE COMPONENT ARCHITECTURE
**Status:** 📋 PLANNED | User Requested

**User Quote:** "i thought you make components as i will later change images"

**Current Implementation:**
- Images hardcoded in product data: `mainImage: { src: '/images/...' }`
- Requires data file editing to change images

**Proposed Solution:**
```tsx
// Create ProductImage component
<ProductImage 
  productId="ge-signa-3t-750w"
  fallback="/images/placeholder.jpg"
  alt="GE Signa 3.0T 750W"
/>
```

**Benefits:**
- Change images from single component file
- Add fallback handling
- Lazy loading / optimization
- Easier maintenance

**Action Required:**
1. Create `src/components/product/ProductImage.tsx`
2. Implement image mapping logic
3. Add fallback handling
4. Update ProductPageTemplate to use new component
5. Migrate existing products (optional)

---

### 2. BRAND PAGE CODE REFACTORING
**Status:** 📋 PLANNED - Code Duplication

**Current Issue:**
- GE and Siemens brand pages have nearly identical code (237 lines each)
- Only differences: brand name, color theme, product filters

**Proposed Solution:**
```tsx
// Create BrandPage component
<BrandPage 
  brand="GE Healthcare"
  brandSlug="ge"
  colorTheme="blue"
  products3T={ge3TProducts}
  products15T={ge15TProducts}
  benefits={geBenefits}
/>
```

**Benefits:**
- Single source of truth
- Easier to maintain/update
- Consistent styling
- Less code duplication

**Action Required:**
1. Create `src/components/brand/BrandPage.tsx`
2. Extract common layout structure
3. Make theme/content configurable via props
4. Refactor existing GE/Siemens pages

---

### 3. COMPLETE REMAINING PRODUCT CATEGORIES
**Status:** ⏳ 4/8 CATEGORIES COMPLETE (50%)

**Pattern to Follow:** See `docs/SESSION-HANDOVER-2025-12-24.md` for step-by-step guide

---

### 2. CREATE PRODUCT CATEGORY OVERVIEW PAGES
**Status:** ⏳ NOT STARTED

**Pages Needed:**
- `/product-pages/refurbished-ct-scan-machines` - Category listing page
- `/product-pages/mri-scanner-machines/3.0t-mri-scanner-machines` - 3.0T listing
- `/product-pages/mri-scanner-machines/1.5t-mri-scanner-machines` - 1.5T listing
- `/product-pages/refurbished-pet-ct-scanner-machines` - PET-CT listing
- Others as needed

**Requirements:**
- Product grid layout (2-3-4 columns responsive)
- Filter by brand/specifications
- ItemListJsonLd schema for product listings
- Category-level FAQs (5-8 questions)
- Category description and intro text

**Priority:** After completing all individual product pages

---

### 3. UPDATE TESTING MATRIX WITH PRODUCT PAGES
**Status:** ⏳ NOT STARTED

**Action Required:**
1. Open `docs/TESTING-STATUS-MATRIX.md`
2. Add section for Product Pages (8 completed + 12 pending = 20 total)
3. Test parameters for each:
   - Speed/Performance (Lighthouse)
   - Accessibility (WCAG 2.1)
   - Mobile Responsive (320px-768px)
   - Big Screen Responsive (1920px+)
   - SEO Meta Tags (title/description length)
   - JSON-LD Schemas (Google Rich Results Test)

**Tools:**
- Google Lighthouse
- Google Rich Results Test
- Schema.org Validator
- Mobile-Friendly Test

---

## 🗺️ 4. GOOGLE MAPS ISSUES - HIGH PRIORITY
**Reference:** `phantom-nextjs\docs\GOOGLE-MAPS-ISSUE-COMPLETE-HISTORY.md`

**Problem:**
- All location maps across office pages have issues
- Maps not loading properly or displaying correctly

**Affected Pages:**
- `/our-offices/delhi`
- `/our-offices/pune`
- `/our-offices/dubai`
- `/our-offices/usa`
- `/contact` page

**Action Required:**
- Review complete history in GOOGLE-MAPS-ISSUE-COMPLETE-HISTORY.md
- Fix iframe embeds or implement proper Google Maps API
- Test all location maps for proper rendering
- Ensure mobile responsiveness

---

## 🎨 5. COLOR SCHEME CONSISTENCY - MEDIUM PRIORITY

### A. Use Secondary Colors for Boxes
**Current Issue:** Boxes/cards not using consistent secondary color scheme

**Action Required:**
- Update all box/card components to use secondary colors from design system
- Reference About Us page gradient pattern (SS2) - blend of primary and secondary colors
- Apply gradient pattern across:
  - `/careers` page cards
  - `/our-offices` office cards
  - Blog post cards
  - News/events cards
  - Service cards
  - Product cards

**Color References:**
- Primary: Orange (#ff6b35 or similar)
- Secondary: Green (#6b8e23 or similar)
- Gradient pattern: `bg-gradient-to-r from-orange-500 via-white to-green-600`

### B. Files to Update:
```
src/app/careers/page.tsx - "Why Join Us" cards
src/app/our-offices/page.tsx - Office cards
src/components/blog/*.tsx - Blog components
src/app/events-and-news/page.tsx - News cards
```

---

## 📧 6. ADD DIGITAL EMAIL - LOW PRIORITY

**Action Required:**
- Add `digital@phantomhealthcare.com` to email listings in header/top bar
- Display alongside existing emails: info@, biz@, sachin.rawat@

**Files to Update:**
```
src/components/layout/Header.tsx (or equivalent topbar component)
src/app/contact/page.tsx
src/app/our-offices/[location]/page.tsx (all 4 pages)
```

**Display Format:**
```
📧 info@phantomhealthcare.com | digital@phantomhealthcare.com
```

---

## 🏴 7. FIX OFFICE LOCATION FLAGS - MEDIUM PRIORITY
**Reference:** SS3 (screenshot provided)

**Current Issue:**
- Flag images not properly fitted in round frame
- Flag container too small
- Frame not perfectly circular

**Action Required:**
- Increase flag container size (currently 20-24, make it 32-40)
- Fix border-radius to ensure perfect circle
- Use `object-cover` to properly fit flag inside circle
- Add proper shadow/border for better visibility

**Files to Update:**
```
src/app/our-offices/delhi/page.tsx
src/app/our-offices/pune/page.tsx
src/app/our-offices/dubai/page.tsx
src/app/our-offices/usa/page.tsx
```

**Current Code:**
```tsx
<div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shadow-2xl mx-auto mb-4 border-4 border-white">
```

**Suggested Fix:**
```tsx
<div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden shadow-2xl mx-auto mb-4 border-4 border-white">
  <Image 
    src="/images/flags/india.png" 
    alt="India Flag"
    width={160}
    height={160}
    className="w-full h-full object-cover"
  />
</div>
```

---

## 🦶 5. REBUILD FOOTER - HIGH PRIORITY

### Current Issue:
- Footer too simple with limited links
- Need comprehensive directory-style footer like competitor sites

### Required Footer Structure:

#### Column 1: Company
- About Us
- Our Story
- Leadership Team
- Careers (**NEW**)
- Our Offices (**NEW**)
- News & Events (**NEW**)
- Customer Testimonials

#### Column 2: Products by Location (NEW CONCEPT)
**MRI Machines:**
- MRI Machines in Delhi
- MRI Machines in Mumbai
- MRI Machines in Pune
- MRI Machines in Dubai
- MRI Machines in USA
- MRI Machines in Africa

**CT Scanners:**
- CT Scanners in Delhi
- CT Scanners in Mumbai
- CT Scanners in Dubai
- (etc.)

#### Column 3: Services
- Installation Services
- AMC Services
- Spare Parts
- Refurbishment
- Equipment Buyback
- Service by Location (Delhi, Mumbai, Dubai, etc.)

#### Column 4: Resources
- Blogs
- Equipment Guides
- FAQs
- Privacy Policy
- Terms & Conditions
- Sitemap

#### Column 5: Contact
- Contact Us
- Locate Us (**NEW** - links to /our-offices)
- Request Quote
- Sell Your Equipment
- Email: info@, digital@, biz@
- Phone numbers for all regions

### Implementation Notes:
- Use 5-column layout on desktop
- Collapse to accordion on mobile
- Add social media icons
- Include newsletter signup
- Add trust badges (ISO, certifications)

**File to Create/Update:**
```
src/components/layout/Footer.tsx
```

---

## 🏢 6. UPDATE BUILDING IMAGES - MEDIUM PRIORITY

### Current Issue:
- Old building images across site need replacement
- New redeveloped building photos available

### Images to Replace:
```
/images/phantom-building.jpg (old)
→ Replace with new redeveloped building image
```

### Pages Using Building Image:
- `/about` - Hero section
- `/contact` - Hero/featured image
- All JSON-LD schemas (image property)
- `/our-offices` - Main listing page
- Home page (if applicable)

### Additional Office Images Needed:
- Delhi office exterior/interior (new photos)
- Pune office (new location photos)
- Dubai office (if available)
- USA office (if available)

### Action Required:
1. Get high-quality images of:
   - New headquarters building (Faridabad)
   - Each office location
   - Team photos
   - Equipment showroom
2. Optimize images (WebP format, proper sizing)
3. Update all references across site
4. Update Open Graph images in metadata

---

## 🔗 7. ADD "OUR OFFICES" PROMINENT LINKS

**Action Required:**
- Add large button/link to `/our-offices` page in:
  - `/about` page - "Visit Our Global Offices" CTA section
  - `/contact` page - "Find Nearest Office" button
  
**Design:**
- Use prominent button with icon
- Place after main content, before footer
- Use gradient background matching brand colors

**Example Implementation:**
```tsx
<section className="py-12 bg-gradient-to-r from-orange-50 to-green-50">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold mb-4">Visit Our Global Offices</h2>
    <p className="text-gray-600 mb-6">We have offices across India, UAE, and USA to serve you better</p>
    <Link 
      href="/our-offices"
      className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-green-600 text-white rounded-lg text-lg font-semibold hover:shadow-xl transition-all"
    >
      <MapPinIcon className="w-6 h-6" />
      View All Office Locations
    </Link>
  </div>
</section>
```

**Files to Update:**
```
src/app/about/page.tsx
src/app/contact/page.tsx
```

---

## 📊 8. GOOGLE ANALYTICS & TAG MANAGER - HIGH PRIORITY

**Reference:** https://github.com/vsingh2110/vikas-singh-nextjs/blob/main/documentation/GOOGLE-TAG-MANAGER-ANALYTICS-SETUP.md

### Requirements:
- Implement Google Tag Manager (GTM)
- Setup Google Analytics 4 (GA4)
- Ensure build/deploy without errors
- Track page views, events, conversions

### Implementation Steps:
1. Create GTM account and container
2. Get GTM ID (GTM-XXXXXXX)
3. Create GA4 property
4. Get GA4 Measurement ID (G-XXXXXXXXXX)
5. Install GTM script in Next.js app
6. Configure environment variables
7. Test tracking in preview mode
8. Deploy and verify

### Files to Create/Update:
```
src/components/analytics/GoogleTagManager.tsx (NEW)
src/app/layout.tsx (add GTM component)
.env.local (add GTM_ID, GA_ID)
next.config.js (add script optimization)
```

### Environment Variables Needed:
```env
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Events to Track:
- Page views
- Contact form submissions
- Phone number clicks
- Email clicks
- Product/equipment views
- Download brochure clicks
- Quote requests
- Career applications

---

## 📱 9. RESPONSIVE LAYOUT ISSUES - HIGH PRIORITY
**Reference:** SS4, SS6 (screenshots provided)

### A. Full Width Issues on Large Screens

**Affected Pages:**
- `/privacy-policy`
- `/faqs`
- `/terms-and-conditions`
- Other content pages

**Current Issue:**
- Content not utilizing full viewport width
- Excessive padding on large screens
- Content container too narrow

**Action Required:**
```tsx
// Current (problematic):
<div className="container mx-auto px-4 max-w-4xl">

// Fix - Use wider container:
<div className="container mx-auto px-4 max-w-7xl">

// Or remove max-width restriction:
<div className="container mx-auto px-4 sm:px-6 lg:px-8">
```

**Files to Check:**
```
src/app/privacy-policy/page.tsx
src/app/faqs/page.tsx
src/app/terms-and-conditions/page.tsx
```

### B. Blog Post Content Spacing

**Current Issue (SS6):**
- Blog post text too close to left edge on large screens
- Need more padding/margin (1rem suggested)

**Action Required:**
```tsx
// Add padding to blog content container:
<div className="prose prose-lg max-w-none blog-content px-4 lg:px-6">
  {content}
</div>
```

**Files to Update:**
```
src/app/blogs/[slug]/page.tsx
src/app/events-and-news/[slug]/page.tsx
```

### C. Top Bar Responsiveness (Big Screens)

**Current Issues:**
- Icons too small on large screens
- Content stuck in middle instead of spanning full width
- Need adequate gaps on both sides

**Action Required:**
```tsx
// Top bar should use:
<div className="w-full flex justify-between items-center px-8 lg:px-16 xl:px-24">
  {/* Left side content */}
  <div className="flex items-center gap-6 lg:gap-8">
    {/* Icons - make larger on big screens */}
    <Icon className="w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6" />
  </div>
  
  {/* Right side content */}
  <div className="flex items-center gap-6 lg:gap-8">
    {/* Contact info */}
  </div>
</div>
```

**Files to Update:**
```
src/components/layout/Header.tsx
src/components/layout/Topbar.tsx (if separate)
```

---

## 📋 10. OTHER PENDING TASKS FROM DOCUMENTATION REVIEW

**Source Review Completed:** December 24, 2025  
**Documents Reviewed:** 23 files in `/docs` folder  
**Tasks Extracted:** 47 actionable items

---

### A. CONTENT PAGES (From development-roadmap.md)

**Status:** Route structure created, content migration pending

#### Remaining Core Pages:
- [ ] Customer Feedback Page enhancements (beyond carousel)
  - Testimonials page with full reviews
  - Star ratings display
  - Before/after service comparisons
  - Filter by equipment type

#### Product Detail Pages (Routes Created, Content Pending):
**CT Scanners:**
- [ ] Brand New CT Scan Machines
- [ ] Refurbished CT Scan Machines (General)
- [ ] 16-Slice CT Scanners
- [ ] 64-Slice CT Scanners
- [ ] 128-Slice CT Scanners

**MRI Scanners:**
- [ ] Refurbished MRI Scanner (General)
- [ ] Refurbished GE MRI Scanners
- [ ] Refurbished Siemens MRI Scanners
- [ ] 1.5T MRI Scanner Machines
- [ ] 3.0T MRI Scanner Machines
- [ ] Specific models: GE Signa HDXT, Siemens Verio, Skyra

**Other Modalities:**
- [ ] Refurbished PET-CT Scanners
- [ ] Refurbished Gamma Camera SPECT Systems
- [ ] Refurbished Bone Densitometer (DEXA)
- [ ] Refurbished Cath Lab Machines

**Product Page Features to Include:**
- Detailed specifications tables
- Image galleries with zoom functionality
- Request quote button (form integration)
- Related products suggestions
- Technical documentation downloads
- Financing options
- Warranty information

#### Service Detail Pages (Routes Created, Content Pending):
- [ ] AMC/CMC Packages for CT Scanners
- [ ] AMC/CMC Packages for MRI Scanners
- [ ] Medical Equipment Installation Services
- [ ] Site Planning and Construction
- [ ] MRI Deinstallation and Reinstallation
- [ ] MRI Helium Filling Services

**Service Page Features to Include:**
- Service packages comparison table
- Pricing tiers (if applicable)
- Case studies or success stories
- Contact form for service inquiry
- Equipment compatibility list
- Response time guarantees
- Coverage area maps

---

### B. PERFORMANCE OPTIMIZATION (Phase 4.1 - Planned Jan 2026)

#### Image Optimization:
- [ ] Generate WebP and AVIF formats for all images
- [ ] Implement comprehensive lazy loading strategy
- [ ] Add blur placeholders to all images
- [ ] Optimize image dimensions (remove oversized images)
- [ ] Create responsive image srcsets
- [ ] Audit and compress existing images

#### Code Optimization:
- [ ] Analyze bundle size with webpack analyzer (already installed)
- [ ] Implement aggressive code splitting
- [ ] Remove unused dependencies
- [ ] Tree shake unused code
- [ ] Optimize CSS (purge unused Tailwind classes)
- [ ] Minify JavaScript and CSS
- [ ] Enable compression (gzip/brotli)

#### Loading Performance:
- [ ] Implement progressive rendering
- [ ] Add loading skeletons for all pages
- [ ] Optimize font loading (font-display: swap)
- [ ] Prefetch critical resources
- [ ] Reduce JavaScript bundle size
- [ ] Implement service worker for caching
- [ ] Add preconnect for critical domains

**Target Metrics:**
- Lighthouse score 90+ in all categories
- First Contentful Paint (FCP) < 1.8s
- Largest Contentful Paint (LCP) < 2.5s
- Time to Interactive (TTI) < 3.8s
- Cumulative Layout Shift (CLS) < 0.1
- First Input Delay (FID) < 100ms

---

### C. SEO ENHANCEMENT (Phase 4.2 - Planned Jan 2026)

#### On-Page SEO:
- [ ] Optimize meta titles and descriptions for all product pages
- [ ] Add Open Graph tags to all pages (partially done)
- [ ] Implement Twitter Cards for all pages (partially done)
- [ ] Create dynamic XML sitemap with priority/frequency
- [ ] Add robots.txt optimization
- [ ] Internal linking strategy implementation
- [ ] Add hreflang tags for international targeting

#### Structured Data Expansion:
- [x] Organization schema ✅
- [x] LocalBusiness schema ✅
- [x] BreadcrumbList schema ✅
- [x] FAQPage schema ✅
- [ ] **Product schema** for ALL equipment listings
- [ ] **Service schema** for ALL service offerings
- [ ] **AggregateRating schema** for customer reviews
- [ ] **HowTo schema** for installation guides
- [ ] **VideoObject schema** for YouTube demos

#### Content Optimization:
- [ ] Comprehensive keyword research
- [ ] Optimize all existing pages for target keywords
- [ ] Create content plan for blog posts
- [ ] Alt text audit and optimization
- [ ] Semantic HTML structure review
- [ ] Mobile-friendly content audit
- [ ] Add table of contents to long pages

**Target Keywords Research Needed:**
- "refurbished MRI machine India"
- "buy CT scanner Delhi"
- "medical imaging equipment price"
- "MRI AMC services"
- "second hand PET-CT India"
- Location-specific: "[equipment] in [city]"

---

### D. ACCESSIBILITY (Phase 4.3 - Planned Feb 2026)

**Goal:** WCAG 2.1 Level AA Compliance

#### Keyboard Navigation:
- [ ] Tab order optimization across all pages
- [ ] Focus indicators styling (currently default browser)
- [ ] Skip navigation links
- [ ] Keyboard-accessible carousels (hero slider, testimonials)
- [ ] Keyboard-accessible dropdowns (navigation menu)
- [ ] Focus management for modals/popups

#### Screen Reader Support:
- [ ] ARIA labels audit (partially done)
- [ ] ARIA roles review
- [ ] Landmark regions (header, nav, main, footer, aside)
- [ ] Form field labels and descriptions
- [ ] Error message announcements
- [ ] Dynamic content announcements (loading states)

#### Visual Accessibility:
- [ ] Color contrast audit (WCAG AA: 4.5:1 for text)
- [ ] Focus indicators visible (3:1 contrast)
- [ ] Text resizing support (200% without horizontal scroll)
- [ ] Remove all `maximum-scale=1` restrictions
- [ ] Ensure no color-only information
- [ ] Add text alternatives for all non-text content

#### Forms & Interactions:
- [ ] All form fields have associated labels
- [ ] Error messages are descriptive
- [ ] Success/error states clearly communicated
- [ ] Required field indicators
- [ ] Input validation with clear feedback
- [ ] CAPTCHAs have audio alternatives

---

### E. MOBILE OPTIMIZATION (High Priority)

**Critical Issue (From SEO-INDIA-REFERENCE.md):**
Current mobile performance scores are very poor:
- FCP: 7.8s (should be < 1.8s)
- LCP: 9.0s (should be < 2.5s)
- Main-thread Work: 5.4s (should be < 4.0s)

#### Urgent Mobile Fixes:
- [ ] Reduce JavaScript execution time (currently 2.0s)
- [ ] Optimize images for mobile (use smaller sizes)
- [ ] Implement YouTube lite-embed on mobile ✅ (Already done)
- [ ] Reduce main-thread work
- [ ] Minimize render-blocking resources
- [ ] Add resource hints (preconnect, dns-prefetch)
- [ ] Defer non-critical JavaScript

#### Mobile-Specific Features:
- [ ] Touch-friendly tap targets (minimum 48x48px)
- [ ] Swipe gestures for carousels
- [ ] Mobile-optimized forms
- [ ] Click-to-call phone numbers
- [ ] Click-to-email addresses
- [ ] Mobile-specific navigation patterns
- [ ] Sticky headers on mobile

---

### F. INTERNATIONAL EXPANSION (Phase 5 - Future)

**Planned Regions:** India, UAE, USA (already have offices)

#### i18n Implementation:
- [ ] Install next-intl or similar i18n library
- [ ] Create language switcher component
- [ ] Translate all static content
- [ ] Setup routing for languages (/en, /ar, etc.)
- [ ] Currency conversion (INR, AED, USD)
- [ ] Date/time formatting by locale

#### Regional Customization:
- [ ] Regional pricing displays
- [ ] Country-specific contact information
- [ ] Regional payment methods
- [ ] Shipping/delivery information by region
- [ ] Compliance notices (GDPR, etc.)

---

### G. WAREHOUSE ADDRESS UPDATE

**Status:** ⏳ Pending (From CURRENT-STATUS.md)

**Current Issue:**
- Store schema uses temporary Faridabad headquarters address
- Actual warehouse physical address needed
- Blocking proper Store schema validation

**Action Required:**
1. Get actual warehouse street address from client
2. Update Store schema in spare-parts-and-inventory page
3. Setup Google My Business for warehouse location
4. Add warehouse address to Google Maps

**Files to Update:**
```
src/app/spare-parts-and-inventory/page.tsx
- Update Store schema address
- Update visible address on page
```

---

### H. BLOG POST COLOR CONSISTENCY

**Issue (From CURRENT-STATUS.md):**
Blog pages using green gradient instead of blue (inconsistent with site theme)

**Action Required:**
- [ ] Review blog detail page gradients
- [ ] Align with overall site color scheme
- [ ] Apply consistent gradient pattern from About/Home pages
- [ ] Update events-news pages to match

**Files to Update:**
```
src/app/blogs/[slug]/page.tsx
src/app/events-and-news/[slug]/page.tsx
```

---

### I. API INTEGRATIONS (Phase 6 - Future)

#### Contact Form Enhancement:
- [ ] Integrate with Mailchimp/SendGrid for email
- [ ] Add form validation (client + server)
- [ ] Implement CAPTCHA (Google reCAPTCHA)
- [ ] Add file upload for quote requests
- [ ] Email notifications for form submissions
- [ ] CRM integration (Salesforce, HubSpot, or similar)

#### Quote Request System:
- [ ] Build quote request form
- [ ] Product inquiry tracking
- [ ] Lead management system
- [ ] Auto-response emails
- [ ] Follow-up automation

#### Payment Gateway (for spare parts):
- [ ] Integrate Razorpay/Stripe
- [ ] Shopping cart functionality
- [ ] Checkout process
- [ ] Order management system
- [ ] Invoice generation

---

### J. CONTENT MANAGEMENT

#### Blog System Enhancements:
- [x] MDX blog system ✅ (Complete Dec 24)
- [x] 4 image layout formats ✅
- [ ] Blog categories/tags
- [ ] Search functionality
- [ ] Related posts suggestions
- [ ] Author profiles
- [ ] Social sharing (native + platforms)
- [ ] Comments system (Disqus or similar)

#### News/Events System:
- [x] Basic news system ✅ (Complete Dec 24)
- [ ] Event calendar view
- [ ] Past events archive
- [ ] Event registration forms
- [ ] Event photo galleries
- [ ] Event recap blog posts

---

### K. MONITORING & ANALYTICS

**Critical (From PENDING-TASKS.md):**
- [ ] Google Analytics 4 implementation (HIGH PRIORITY)
- [ ] Google Tag Manager setup (HIGH PRIORITY)
- [ ] Event tracking configuration
- [ ] Conversion tracking
- [ ] E-commerce tracking (for spare parts)

#### Additional Monitoring:
- [ ] Error tracking (Sentry or similar)
- [ ] Performance monitoring (Vercel Analytics)
- [ ] Uptime monitoring
- [ ] SEO monitoring (rankings, visibility)
- [ ] Lighthouse CI in deployment pipeline

---

### L. SECURITY ENHANCEMENTS

#### Content Security Policy:
- [x] Basic CSP implemented ✅
- [ ] Tighten CSP rules (remove unsafe-inline where possible)
- [ ] Add CSP reporting endpoint
- [ ] Implement Subresource Integrity (SRI)

#### Other Security:
- [ ] Rate limiting on forms
- [ ] CSRF protection
- [ ] XSS sanitization
- [ ] SQL injection prevention (when DB added)
- [ ] Regular dependency audits
- [ ] Security headers review

---

### M. TESTING & QA

#### Unit Testing:
- [ ] Setup Jest for unit tests
- [ ] Component testing with React Testing Library
- [ ] Test coverage for critical paths
- [ ] Utility function tests

#### E2E Testing:
- [ ] Setup Playwright or Cypress
- [ ] Test critical user flows
- [ ] Form submission testing
- [ ] Navigation testing
- [ ] Mobile testing

#### Visual Regression:
- [ ] Setup visual regression testing
- [ ] Screenshot comparisons
- [ ] Cross-browser testing

---

### N. DOCUMENTATION IMPROVEMENTS

#### Developer Documentation:
- [ ] Component documentation (Storybook)
- [ ] API documentation
- [ ] Deployment guide
- [ ] Environment setup guide
- [ ] Contributing guidelines

#### User Documentation:
- [ ] Create comprehensive FAQ database
- [ ] Equipment comparison guides
- [ ] Installation guides
- [ ] Maintenance guides
- [ ] Troubleshooting guides

---

### O. BRAND AUTHORITY BUILDING (AI SEO - From SEO-INDIA-REFERENCE.md)

**Goal:** Increase AI visibility in ChatGPT, Perplexity, Google AI Overviews

#### Critical Actions:
- [ ] Create/improve Wikipedia article for Phantom Healthcare
- [ ] Regular LinkedIn company posts with industry expertise
- [ ] YouTube channel with machine demo videos (with transcripts)
- [ ] List on major B2B directories:
  - [ ] IndiaMart
  - [ ] TradeIndia
  - [ ] Sulekha
  - [ ] IndiaMART
  - [ ] ExportersIndia
- [ ] Complete Google Business Profile (all 4 locations)
- [ ] Press releases for major installations/awards
- [ ] Industry certifications prominently displayed
- [ ] Case studies with hospital names (if permitted)
- [ ] Publish whitepapers on medical equipment

#### AI-Friendly Content:
- [ ] Convert existing content to Q&A format
- [ ] Add more FAQs to all pages
- [ ] Include specific data points (prices, specs, warranty terms)
- [ ] Create HowTo schema for technical guides
- [ ] Add more tables and bullet points
- [ ] Ensure all content is quotable by AI

---

## 🎯 UPDATED PRIORITY MATRIX

### IMMEDIATE (Do This Week):
1. ✅ Google Analytics & Tag Manager Setup
2. ✅ Fix Google Maps on all office pages
3. ✅ Fix responsive layout issues (full width, blog spacing, topbar)
4. ⚠️ Get warehouse address and update Store schema

### HIGH PRIORITY (Do This Month):
1. ⚠️ Rebuild footer with directory-style links
2. ⚠️ Fix office location flags (size + fitting)
3. ⚠️ Update all building images with new photos
4. ⚠️ Implement mobile performance fixes (7.8s → <1.8s FCP)
5. ⚠️ Complete product detail pages (20+ products pending)
6. ⚠️ Complete service detail pages (6 services pending)

### MEDIUM PRIORITY (Do Next 2-3 Months):
1. 📌 Color scheme consistency across all pages
2. 📌 Add "Our Offices" prominent links in about/contact
3. 📌 Add digital@phantomhealthcare.com everywhere
4. 📌 Customer Feedback page enhancements
5. 📌 Blog system enhancements (categories, search)
6. 📌 SEO enhancement (all product schemas)
7. 📌 Accessibility audit and fixes

### LOW PRIORITY (Future Planning):
1. 📘 API integrations (payment, CRM)
2. 📘 i18n implementation
3. 📘 Testing infrastructure
4. 📘 Advanced analytics
5. 📘 Security enhancements

---

## 📊 ESTIMATED TOTAL EFFORT

| Category | Tasks | Estimated Hours |
|----------|-------|----------------|
| Immediate fixes | 4 | 15-20 hours |
| High priority | 6 | 60-80 hours |
| Medium priority | 7 | 80-100 hours |
| Low priority | 4 | 120+ hours |
| **TOTAL** | **21+** | **275-320+ hours** |

---

## 🎯 PRIORITY MATRIX

### HIGH PRIORITY (Do First):
1. ✅ Google Analytics & Tag Manager Setup
2. ✅ Google Maps Issues Fix
3. ✅ Rebuild Footer with Directory Links
4. ✅ Responsive Layout Issues (all pages)

### MEDIUM PRIORITY (Do Next):
1. ⚠️ Office Location Flag Fixes
2. ⚠️ Color Scheme Consistency
3. ⚠️ Update Building Images
4. ⚠️ Add "Our Offices" Prominent Links

### LOW PRIORITY (Do When Time Permits):
1. 📌 Add digital@phantomhealthcare.com
2. 📌 Review and extract tasks from other docs

---

## 📝 IMPLEMENTATION CHECKLIST

### Before Starting Any Task:
- [ ] Review this document
- [ ] Check related documentation files
- [ ] Create backup of affected files
- [ ] Test on local environment first

### During Implementation:
- [ ] Follow existing code patterns
- [ ] Maintain responsive design
- [ ] Test on multiple screen sizes
- [ ] Verify build passes without errors
- [ ] Check browser console for errors

### After Completion:
- [ ] Update this document (mark as completed)
- [ ] Update CURRENT-STATUS.md
- [ ] Create SESSION-HANDOVER if needed
- [ ] Document any new issues found
- [ ] Run full build test
- [ ] Deploy to production

---

## 🔄 LAST UPDATED
**Date:** December 24, 2025  
**By:** AI Assistant  
**Next Review:** When starting next development session

---

## 📞 QUESTIONS TO ASK CLIENT

1. **Building Images:** Can you provide new building photos?
2. **Office Images:** Do we have photos of Pune, Dubai, USA offices?
3. **Google Analytics:** Do you have GTM and GA4 accounts created?
4. **Footer Links:** Should location-based product pages be created (e.g., "MRI in Delhi")?
5. **Color Scheme:** Confirm exact primary/secondary color codes
6. **Maps API:** Do we have Google Maps API key?
7. **Email:** Confirm digital@phantomhealthcare.com is active and should be displayed

---

## 🚀 ESTIMATED EFFORT

| Task | Estimated Time | Complexity |
|------|---------------|------------|
| Google Analytics Setup | 2-3 hours | Medium |
| Google Maps Fix | 3-4 hours | High |
| Footer Rebuild | 4-6 hours | High |
| Responsive Fixes | 3-4 hours | Medium |
| Color Scheme Update | 2-3 hours | Low |
| Flag Size Fix | 1 hour | Low |
| Image Updates | 2-3 hours | Low |
| Add Office Links | 1-2 hours | Low |
| Add Email | 30 mins | Low |
| **TOTAL** | **19-27 hours** | - |

---

**END OF DOCUMENT**
