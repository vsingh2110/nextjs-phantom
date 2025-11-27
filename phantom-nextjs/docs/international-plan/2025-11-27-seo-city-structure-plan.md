# SEO & International Folder Structure Plan

**Date:** November 27, 2025
**Focus:** Hyper-local SEO (City/Region pages), Detailed Specifications, and International Scalability.

## 🚀 Strategy Overview
We are adopting a "Directory-Style" architecture similar to Indiamart or Justdial. This allows us to target long-tail keywords by generating pages for the intersection of **Location x Product x Specification**.

### Key Dimensions
1.  **Geography:** Country -> State/Region -> City
2.  **Product Hierarchy:** Category (MRI) -> Specification (1.5T) -> Model (GE Optima)
3.  **Service Hierarchy:** Service Type (AMC) -> Location

---

## 📂 Proposed Folder Structure (Next.js App Router)

This structure uses **Dynamic Routes** (`[param]`) to handle thousands of potential pages without creating thousands of folders.

```
src/
└── app/
    ├── [country_code]/                  # e.g., 'in', 'us', 'ae'
    │   ├── page.tsx                     # Country Homepage
    │   │
    │   ├── layout.tsx                   # Country-specific layout (Header/Footer)
    │   │
    │   ├── 📁 products/                 # PRODUCT CATALOG
    │   │   ├── page.tsx                 # All Products Listing
    │   │   │
    │   │   ├── [category_slug]/         # e.g., 'mri-machines', 'ct-scanners'
    │   │   │   ├── page.tsx             # Category Landing
    │   │   │   │
    │   │   │   ├── [spec_slug]/         # e.g., '1.5t', '3.0t', '16-slice', '32-slice'
    │   │   │   │   ├── page.tsx         # Spec Landing (Brand agnostic)
    │   │   │   │   │
    │   │   │   │   └── [model_slug]/    # e.g., 'ge-optima-360', 'siemens-magnetom'
    │   │   │   │       └── page.tsx     # INDIVIDUAL PRODUCT PAGE (The "Ecommerce" style page)
    │   │   │
    │   │
    │   ├── 📁 locations/                # SEO CITY PAGES (The "Indiamart" Strategy)
    │   │   ├── page.tsx                 # Index of all cities/regions
    │   │   │
    │   │   ├── [city_slug]/             # e.g., 'mumbai', 'indore', 'london'
    │   │   │   ├── page.tsx             # "Medical Equipment in Mumbai" (General Hub)
    │   │   │   │
    │   │   │   ├── [category_slug]/     # e.g., 'mri-machines'
    │   │   │   │   ├── page.tsx         # "MRI Machines in Mumbai"
    │   │   │   │   │
    │   │   │   │   └── [spec_slug]/     # e.g., '1.5t'
    │   │   │   │       └── page.tsx     # "1.5T MRI Machines in Mumbai"
    │   │   │
    │   │
    │   ├── 📁 services/                 # SERVICE PAGES
    │   │   ├── page.tsx                 # Services Overview
    │   │   │
    │   │   ├── [service_slug]/          # e.g., 'amc-cmc', 'installation'
    │   │   │   ├── page.tsx             # Service Details
    │   │   │   │
    │   │   │   └── [city_slug]/         # e.g., 'delhi', 'tamil-nadu'
    │   │   │       └── page.tsx         # "AMC Services in Delhi"
    │   │
    │   └── ... (About, Contact, etc.)
```

## 🔗 Footer Link Strategy (The "Directory" Look)

Since we cannot fit all these links in the main menu, the Footer will become a massive SEO engine.

**Structure:**
1.  **Popular Cities:** Links to `/[country]/locations/[city]`
2.  **Top Categories:** Links to `/[country]/products/[category]`
3.  **Popular Specs:** Links to `/[country]/products/[category]/[spec]`
4.  **City-Specific Categories:** Links to `/[country]/locations/[city]/[category]` (e.g., "MRI in Mumbai", "CT in Delhi")

## 🛠️ Implementation Notes

1.  **Templates:** We will create reusable "Page Templates" so that `[model_slug]/page.tsx` looks consistent across 1000+ products.
2.  **Data Source:** We will need a structured data file (or CMS/Database) to map slugs to actual content (e.g., `1.5t` -> "1.5 Tesla").
3.  **Scalability:** This structure works for ANY country. `us/locations/new-york/mri-machines` works just like `in/locations/mumbai/mri-machines`.
