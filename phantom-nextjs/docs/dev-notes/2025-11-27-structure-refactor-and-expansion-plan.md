# Structure Refactor and Expansion Plan
**Date:** November 27, 2025

## 1. Component Reorganization
To align with React/Next.js best practices and prepare for internationalization, the `src/components` directory has been reorganized into logical subdirectories. This prevents the "flat folder" clutter and makes it easier to manage shared vs. specific components.

### New Structure:
- **`src/components/layout/`**: Global layout components (Header, Footer, TopBlock, etc.).
- **`src/components/home/`**: Components specific to the Homepage (HeroSlider, FeaturedProducts, Testimonials, etc.).
- **`src/components/ui/`**: Reusable UI elements (Modals, Buttons, FloatingElements, etc.).
- **`src/components/features/`**: Functional feature components (ContactForm, GMap).
- **`src/components/scripts/`**: Third-party script integrations.

## 2. Page Structure & Internationalization Readiness
We have replicated the URL structure of the legacy static site within the Next.js App Router (`src/app`). This ensures:
1.  **SEO Preservation**: Old URLs will map 1:1 to new routes.
2.  **Internationalization (i18n) Prep**: The clean separation of components and pages allows us to easily wrap these routes in a `[lang]` dynamic segment (e.g., `src/app/[lang]/product-pages/...`) in the future without refactoring the entire codebase.

### Created Route Structure:
- `src/app/product-pages/` (and subfolders for each category)
- `src/app/service-pages/` (and subfolders for each service)

## 3. Content Hierarchy Strategy

### A. Products (Deep Hierarchy)
Products require a nested structure due to the complexity of categories and subcategories.
- **Level 1: Main Category** (e.g., `/product-pages/mri-scanner-machines/`) - Lists subcategories or brands.
- **Level 2: Sub-Category** (e.g., `/product-pages/mri-scanner-machines/1.5t-mri/`) - Lists specific machines.
- **Level 3: Product Detail** (Future) - Specific machine page.

**Future Implementation Note:**
When adding a specific product page, create a folder with the product slug (e.g., `ge-signa-explorer`) inside the relevant category folder, and add a `page.tsx`.

### B. News, Events, Blogs (Flat Hierarchy)
Unlike products, these content types are generally flat lists.
- **List Page**: `/news/` or `/blogs/` - Displays a grid of items (3-4 per row).
- **Detail Page**: `/news/[slug]/` - The individual article.

**Implementation Plan:**
1.  Create `src/app/news/page.tsx` (List view).
2.  Create `src/app/news/[slug]/page.tsx` (Dynamic detail view).
3.  Use a CMS or a structured JSON file to manage the content for these lists to avoid hardcoding every single page.

## 4. Internationalization Strategy (Regional Sites)
**Reference:** See `docs/international-plan/2025-07-25-folder-structure-visual.md` for the definitive plan.

**Strategy:** We are implementing **completely separate regional websites** hosted under the same domain but in different directories. This is **NOT** a simple translation (i18n) project.

### Architecture Plan (Confirmed):
- **Root (`/`)**: Global/India site (Default).
- **US Site (`/us/`)**: Independent directory `src/app/us/`. Contains US-specific content, products, and legal info.
- **UAE Site (`/ae/`)**: Independent directory `src/app/ae/`. Contains Gulf-specific content and products.
- **Other Regions**: As defined in the international plan.

### Why this structure?
- **Content Divergence**: Different countries have different product availability (e.g., specific MRI models only for India).
- **Marketing**: Different strategies and landing pages for each region.
- **Legal**: Different compliance requirements and contact entities.

**Implementation Note:** The current refactor (cleaning up `src/components` and `src/app`) is the prerequisite for this. Once the core (India/Global) site is populated, we will duplicate/adapt the structure into `src/app/us/`, `src/app/ae/`, etc., as "mini-apps".

## 5. Next Steps
1.  **Fill Content**: The newly created product and service pages are currently empty placeholders. Content needs to be migrated from the static site.
2.  **Develop Templates**: Create a reusable `ProductCategoryTemplate` and `ServicePageTemplate` to ensure consistency across all 50+ pages.
