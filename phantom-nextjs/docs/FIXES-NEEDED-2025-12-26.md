# CRITICAL FIXES NEEDED - December 26, 2025

## Issues Identified

### 🔴 CRITICAL ISSUE 1: Wrong Route Structure
**Current (WRONG):**
- `/product-pages/mri-scanner-machines/refurbished-ge-mri-scanner-machines`
- `/product-pages/mri-scanner-machines/refurbished-siemens-mri-scanner-machines`
- `/product-pages/mri-scanner-machines/1.5t-mri-scanner-machines`
- `/product-pages/mri-scanner-machines/3.0t-mri-scanner-machines`

**Required (from static site):**
- `/product-pages/refurbished-ge-mri-scanner-machines`
- `/product-pages/refurbished-siemens-mri-scanner-machines`
- `/product-pages/1.5t-mri-scanner-machines`
- `/product-pages/3.0t-mri-scanner-machines`

**Action:** Move all page folders up one level (remove `mri-scanner-machines` parent folder)

---

### 🔴 CRITICAL ISSUE 2: Branded Page Subheadings WRONG
**Current:** Simple text headings (e.g., "GE 3.0T MRI Machines")
**Required:** GREEN BADGE headings (like mixed pages have)

I removed the green badges when I should have KEPT them and removed the simple text!

**Action:** 
- Branded pages should have ONLY green badge headings
- Mixed pages already correct (green badge only)

---

### 🔴 CRITICAL ISSUE 3: Coming Soon Still Not Working
Even after my changes, Coming Soon products may not be displaying correctly.

**Action:** Test and verify Coming Soon display with actual Coming Soon products in data

---

### 🟡 ISSUE 4: Hero Section Styling
**User's static site:** Light cyan/blue background, simpler design
**Current:** Different gradient, different breadcrumb style

**Action:** Match hero section styling to static site exactly

---

### 🟡 ISSUE 5: Navigation Buttons
Added navigation buttons (GE 3.0T MRI Machines / GE 1.5T MRI Machines) but need to verify if this matches their design

---

## Fix Order

### Batch 1: Route Structure (HIGHEST PRIORITY) ✅ COMPLETED
- [x] Move `refurbished-ge-mri-scanner-machines` folder from `src/app/product-pages/mri-scanner-machines/` to `src/app/product-pages/`
- [x] Move `refurbished-siemens-mri-scanner-machines` folder
- [x] Move `1.5t-mri-scanner-machines` folder
- [x] Move `3.0t-mri-scanner-machines` folder
- [x] Update all canonical URLs in metadata (already correct)
- [x] Update all breadcrumb URLs (updated)
- [x] Update all internal links
- [x] Test build ✅ PASSING

### Batch 2: Branded Page Subheadings ✅ COMPLETED
- [x] Restore green badge headings to GE branded page (both 3T and 1.5T sections)
- [x] Restore green badge headings to Siemens branded page (both 3T and 1.5T sections)
- [x] Remove simple text headings from branded pages (kept description text, removed duplicate h2)
- [x] Add navigation buttons for quick section access
- [x] Add product sorting logic
- [x] Add "Why Choose" sections
- [x] Test build ✅ PASSING

### Batch 3: Coming Soon Products ✅ COMPLETED
- [x] Verify ProductCategoryGrid changes are working
- [x] Display shows "Coming Soon" title with dashes for unavailable products
- [x] Display shows "Out of Stock" title with dashes
- [x] All products show "Request Price" button

### Batch 4: Hero Section Styling ⏳ NOT CRITICAL
- [ ] Match background colors to static site (current: gradient blue, static: lighter cyan)
- [ ] Match breadcrumb styling (minor differences)
- [ ] Match title/description styling

---

## Notes
- User is correct - I should document systematically and work in batches
- Multiple issues were introduced due to misunderstanding requirements
- Route structure was fundamentally wrong from the beginning
