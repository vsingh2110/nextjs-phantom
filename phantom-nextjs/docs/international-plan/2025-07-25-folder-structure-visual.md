# Phantom Medical Equipment - Project Folder Structure

**Date:** July 25, 2025  
**Purpose:** Visual representation of current and planned project structure

---

## Current Project Structure

```
nextjs-phantom/
├── 📁 phantom-website/ (Legacy Static Site)
│   ├── 📄 index.html (62KB - Home page)
│   ├── 📄 about.html (25KB)
│   ├── 📄 contact.html (27KB)
│   ├── 📄 services.html (24KB)
│   ├── 📄 products.html (20KB)
│   ├── 📄 blogs.html (24KB)
│   ├── 📁 product-pages/ (Individual product pages)
│   │   ├── 📄 refurbished-mri-scanner-machines.html
│   │   ├── 📄 refurbished-ct-scan-machines.html
│   │   ├── 📄 refurbished-pet-ct-scanner-machines.html
│   │   └── 📄 mri-scanner-machines/
│   │       ├── 📄 1.5T-mri-scanner-machines.html
│   │       └── 📄 3.0T-mri-scanner-machines.html
│   ├── 📁 service-pages/ (Service-specific pages)
│   │   ├── 📄 amc-cmc-services-packages-for-ct-scanner-machines.html
│   │   ├── 📄 medical-imaging-radiology-equipment-installation.html
│   │   └── 📄 mri-deinstallation-and-reinstallation-relocation.html
│   ├── 📁 css_files/ (Styling)
│   │   ├── 📄 style.css
│   │   ├── 📄 about.css, contact.css, services.css
│   │   └── 📁 product-files/
│   │       ├── 📄 new-ct.css, refurb-ct.css, refurb-mri.css
│   ├── 📁 js_files/ (JavaScript functionality)
│   │   ├── 📄 main.js, contact.js, modal-dailog.js, owl.js
│   └── 📁 images/ (Media assets - 100+ files)
│       ├── 📁 machines/ (Equipment images)
│       │   ├── 📁 1.5t-mri/, 3.0t-mri/, ct-scan/
│       │   ├── 📁 pet-ct/, gamma-camera-spect/
│       │   └── 📁 spare-parts/
│       ├── 📁 doctors/ (Team photos)
│       ├── 📁 services/ (Service images)
│       └── 📁 slideshow/ (Hero slider images)
│
└── 📁 phantom-nextjs/ (Modern Next.js Application)
    ├── 📄 package.json (Next.js 15.3.5, React 18, TypeScript)
    ├── 📄 next.config.js (Performance & security config)
    ├── 📄 middleware.ts (CSP headers, security)
    ├── 📄 tailwind.config.js (Styling configuration)
    ├── 📄 vercel.json (Deployment configuration)
    ├── 📁 src/ (Source code)
    │   ├── 📁 app/ (App Router - Next.js 13+)
    │   │   ├── 📄 layout.tsx (Global layout)
    │   │   ├── 📄 page.tsx (Home page - 30KB)
    │   │   ├── 📄 globals.css (22KB - Tailwind styles)
    │   │   ├── 📁 about/ (About page)
    │   │   ├── 📁 services/ (Services page)
    │   │   ├── 📁 products/ (Products page)
    │   │   ├── 📁 blogs/ (Blogs page)
    │   │   └── 📁 contact/ (Contact page)
    │   ├── 📁 components/ (Reusable components)
    │   │   ├── 📄 Header.tsx (30KB - Navigation)
    │   │   ├── 📄 Footer.tsx (9KB - Footer)
    │   │   ├── 📄 HeroSlider.tsx (10KB - Home slider)
    │   │   ├── 📄 ContactForm.tsx (10KB - Contact forms)
    │   │   ├── 📄 ContactFormModal.tsx (21KB - Modal forms)
    │   │   ├── 📄 TestimonialsCarousel.tsx (9.5KB - Reviews)
    │   │   ├── 📄 FeaturedProductsCarousel.tsx (7.7KB - Products)
    │   │   ├── 📄 GMap.tsx (7.9KB - Google Maps)
    │   │   ├── 📄 CounterSection.tsx (5.9KB - Statistics)
    │   │   ├── 📄 RegionalOffices.tsx (5.3KB - Offices)
    │   │   ├── 📄 FloatingElements.tsx (7KB - UI elements)
    │   │   ├── 📄 PopupModal.tsx (2.3KB - Popups)
    │   │   ├── 📄 ErrorBoundary.tsx (2.8KB - Error handling)
    │   │   ├── 📄 YouTubeEmbed.tsx (800B - Video embedding)
    │   │   ├── 📄 AppScripts.tsx (1.2KB - External scripts)
    │   │   ├── 📄 ScrollRestoration.tsx (1.6KB - Scroll behavior)
    │   │   ├── 📄 TopBlock.tsx (3.5KB - Top section)
    │   │   ├── 📄 HeroSideSection.tsx (3.3KB - Hero side content)
    │   │   ├── 📄 VerticalMobileCounter.tsx (2KB - Mobile counters)
    │   │   ├── 📄 MobileHorizontalCounterSection.tsx (2.3KB - Mobile layout)
    │   │   └── 📄 ContactFormModalWrapper.tsx (657B - Modal wrapper)
    │   ├── 📁 lib/ (Utility functions)
    │   │   ├── 📄 emailjs.ts (Email integration)
    │   │   ├── 📄 firebase.ts (Database integration)
    │   │   └── 📄 performance.ts (Performance utilities)
    │   └── 📁 types/ (TypeScript definitions)
    │       └── 📄 react.d.ts (React type extensions)
    ├── 📁 public/ (Static assets)
    │   ├── 📁 images/ (Same as legacy site)
    │   └── 📁 scripts/ (External scripts)
    └── 📁 docs/ (Documentation)
        └── 📁 dev-notes/ (Development documentation)
            ├── 📄 2024-05-21-footer-refactor.md
            ├── 📄 2025-07-10-hero-section-separation-critical.md
            ├── 📄 2025-07-11-google-maps-integration.md
            ├── 📄 2025-07-12-testimonials-carousel-implementation.md
            ├── 📄 2025-07-14-conversation-recap.md
            ├── 📄 2025-07-15-work-log.md
            ├── 📄 2025-07-16-evening-home-session.md
            ├── 📄 2025-07-18-work-log.md
            ├── 📄 2025-07-21-work-log.md
            ├── 📄 general-development-notes.md
            ├── 📄 strict-warnings-to-ai-assistant.md
            ├── 📄 2025-01-27-website-migration-international-expansion-strategy.md
            └── 📄 2025-01-27-folder-structure-visual.md
```

---

## Planned International Structure

```
phantom-nextjs/
├── 📁 src/
│   ├── 📁 app/
│   │   ├── 📁 (en-us)/ (United States)
│   │   │   ├── 📄 page.tsx (US Home)
│   │   │   ├── 📁 about/
│   │   │   ├── 📁 products/
│   │   │   │   ├── 📄 page.tsx (Product categories)
│   │   │   │   ├── 📁 mri-machines/
│   │   │   │   │   ├── 📄 page.tsx (MRI category)
│   │   │   │   │   ├── 📄 [model].tsx (Individual MRI models)
│   │   │   │   │   └── 📁 buy-in-[city]/
│   │   │   │   │       ├── 📄 new-york.tsx
│   │   │   │   │       ├── 📄 los-angeles.tsx
│   │   │   │   │       └── 📄 chicago.tsx
│   │   │   │   ├── 📁 ct-scanners/
│   │   │   │   └── 📁 pet-ct-systems/
│   │   │   ├── 📁 services/
│   │   │   └── 📁 contact/
│   │   │
│   │   ├── 📁 (en-ae)/ (United Arab Emirates)
│   │   │   ├── 📄 page.tsx (UAE Home)
│   │   │   ├── 📁 about/
│   │   │   ├── 📁 products/
│   │   │   │   ├── 📄 page.tsx
│   │   │   │   ├── 📁 mri-machines/
│   │   │   │   │   ├── 📄 page.tsx
│   │   │   │   │   ├── 📄 [model].tsx
│   │   │   │   │   └── 📁 buy-in-[city]/
│   │   │   │   │       ├── 📄 dubai.tsx
│   │   │   │   │       ├── 📄 abu-dhabi.tsx
│   │   │   │   │       └── 📄 sharjah.tsx
│   │   │   │   ├── 📁 ct-scanners/
│   │   │   │   └── 📁 pet-ct-systems/
│   │   │   ├── 📁 services/
│   │   │   └── 📁 contact/
│   │   │
│   │   ├── 📁 (en-in)/ (India)
│   │   │   ├── 📄 page.tsx (India Home)
│   │   │   ├── 📁 about/
│   │   │   ├── 📁 products/
│   │   │   │   ├── 📄 page.tsx
│   │   │   │   ├── 📁 mri-machines/
│   │   │   │   │   ├── 📄 page.tsx
│   │   │   │   │   ├── 📄 [model].tsx
│   │   │   │   │   └── 📁 buy-in-[city]/
│   │   │   │   │       ├── 📄 delhi.tsx
│   │   │   │   │       ├── 📄 mumbai.tsx
│   │   │   │   │       ├── 📄 bangalore.tsx
│   │   │   │   │       ├── 📄 chennai.tsx
│   │   │   │   │       ├── 📄 hyderabad.tsx
│   │   │   │   │       ├── 📄 pune.tsx
│   │   │   │   │       ├── 📄 ahmedabad.tsx
│   │   │   │   │       └── 📄 kolkata.tsx
│   │   │   │   ├── 📁 ct-scanners/
│   │   │   │   └── 📁 pet-ct-systems/
│   │   │   ├── 📁 services/
│   │   │   └── 📁 contact/
│   │   │
│   │   ├── 📁 (en-uk)/ (United Kingdom)
│   │   │   ├── 📄 page.tsx (UK Home)
│   │   │   ├── 📁 about/
│   │   │   ├── 📁 products/
│   │   │   │   ├── 📄 page.tsx
│   │   │   │   ├── 📁 mri-machines/
│   │   │   │   │   ├── 📄 page.tsx
│   │   │   │   │   ├── 📄 [model].tsx
│   │   │   │   │   └── 📁 buy-in-[city]/
│   │   │   │   │       ├── 📄 london.tsx
│   │   │   │   │       ├── 📄 manchester.tsx
│   │   │   │   │       └── 📄 birmingham.tsx
│   │   │   │   ├── 📁 ct-scanners/
│   │   │   │   └── 📁 pet-ct-systems/
│   │   │   ├── 📁 services/
│   │   │   └── 📁 contact/
│   │   │
│   │   └── 📁 (en-au)/ (Australia)
│   │       ├── 📄 page.tsx (Australia Home)
│   │       ├── 📁 about/
│   │       ├── 📁 products/
│   │       │   ├── 📄 page.tsx
│   │       │   ├── 📁 mri-machines/
│   │       │   │   ├── 📄 page.tsx
│   │       │   │   ├── 📄 [model].tsx
│   │       │   │   └── 📁 buy-in-[city]/
│   │       │   │       ├── 📄 sydney.tsx
│   │       │   │       ├── 📄 melbourne.tsx
│   │       │   │       └── 📄 brisbane.tsx
│   │       │   ├── 📁 ct-scanners/
│   │       │   └── 📁 pet-ct-systems/
│   │       ├── 📁 services/
│   │       └── 📁 contact/
│   │
│   ├── 📁 components/ (Shared components)
│   │   ├── 📄 Header.tsx (Multi-language navigation)
│   │   ├── 📄 Footer.tsx (Multi-language footer)
│   │   ├── 📄 ProductCard.tsx (Product display)
│   │   ├── 📄 LocationCard.tsx (City-specific cards)
│   │   ├── 📄 ContactForm.tsx (Multi-language forms)
│   │   └── 📄 SEOHead.tsx (Dynamic meta tags)
│   │
│   ├── 📁 lib/ (Utilities)
│   │   ├── 📄 i18n.ts (Internationalization)
│   │   ├── 📄 seo.ts (SEO utilities)
│   │   ├── 📄 locations.ts (City/country data)
│   │   └── 📄 products.ts (Product data)
│   │
│   └── 📁 types/ (TypeScript definitions)
│       ├── 📄 product.ts (Product types)
│       ├── 📄 location.ts (Location types)
│       └── 📄 seo.ts (SEO types)
│
├── 📁 public/ (Static assets)
│   ├── 📁 images/
│   │   ├── 📁 products/ (Product images)
│   │   ├── 📁 locations/ (City images)
│   │   └── 📁 flags/ (Country flags)
│   └── 📁 locales/ (Translation files)
│       ├── 📄 en-us.json
│       ├── 📄 en-ae.json
│       ├── 📄 en-in.json
│       ├── 📄 en-uk.json
│       └── 📄 en-au.json
│
└── 📁 docs/ (Documentation)
    └── 📁 dev-notes/
        ├── 📄 2025-01-27-website-migration-international-expansion-strategy.md
        ├── 📄 2025-01-27-folder-structure-visual.md
        └── 📄 international-seo-strategy.md
```

---

## Key Benefits of This Structure

### 1. SEO Benefits
- **Country-specific URLs:** `/en-us/`, `/en-ae/`, `/en-in/`
- **City-specific pages:** `/en-in/products/mri-machines/buy-in-delhi`
- **Localized content:** Each country has its own content and keywords
- **Structured data:** JSON-LD for each location and product

### 2. User Experience
- **Localized navigation:** Country-specific menus and content
- **Regional pricing:** Currency and pricing for each market
- **Local contact information:** Regional office details
- **Language variants:** English with local terminology

### 3. Technical Advantages
- **Scalable architecture:** Easy to add new countries
- **Shared components:** Reusable across all markets
- **Performance optimized:** Each country gets optimized bundles
- **SEO friendly:** Clean URLs and proper structure

### 4. Business Benefits
- **Market expansion:** 5+ countries in first year
- **Local SEO:** City-specific rankings
- **Revenue growth:** Targeted content for each market
- **Brand consistency:** Unified design across markets

---

## Implementation Timeline

### Phase 1: Core Structure (Month 1)
- ✅ Next.js application setup
- ✅ Basic routing structure
- 🔄 Multi-country routing implementation
- 🔄 Shared component architecture

### Phase 2: Content Migration (Month 2)
- 📋 Product pages for each country
- 📋 Service pages localization
- 📋 About and contact pages
- 📋 Image and asset optimization

### Phase 3: Location Pages (Month 3)
- 📋 India city pages (Delhi, Mumbai, Bangalore, etc.)
- 📋 US city pages (New York, Los Angeles, Chicago)
- 📋 UAE city pages (Dubai, Abu Dhabi, Sharjah)
- 📋 UK city pages (London, Manchester, Birmingham)

### Phase 4: Advanced Features (Month 4)
- 📋 AI search optimization
- 📋 Advanced analytics
- 📋 Performance optimization
- 📋 Security hardening

---

**Total Expected Pages:** 500+ pages across 5 countries  
**SEO Keywords:** 1000+ location-specific keywords  
**Expected Traffic:** 300-500% increase within 6 months 