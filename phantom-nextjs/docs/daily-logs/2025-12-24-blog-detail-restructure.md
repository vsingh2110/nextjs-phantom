# Blog/News Detail Pages Restructure - December 24, 2025

## 🎯 Overview
Fixed individual blog and events-news detail pages by:
1. Removing title/meta from hero banner overlay
2. Creating clean hero image with blurred background effect
3. Moving breadcrumb/title/meta to content area below hero
4. Implementing proper width containers (replacing left-aligned "container" class)
5. Adding 4 comprehensive image layout formats for MDX content

## ✅ Completed Tasks

### 1. Blog Detail Page Restructure ([src/app/blogs/[slug]/page.tsx](src/app/blogs/[slug]/page.tsx))

**Hero Banner (Before):**
- Title overlay on dark gradient background
- Breadcrumb in hero
- Meta information in hero
- Category badge

**Hero Banner (After - CLEAN):**
- Blurred background layer (blur-sm, scale-110, opacity-40)
- Main centered image (object-contain)
- Category badge only (top-left)
- No text overlays

**Content Area (Before):**
- Used "container max-w-4xl" class
- Content left-aligned
- Title was in hero

**Content Area (After - CENTERED):**
```tsx
<div className="w-full max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
```
- Breadcrumb moved to content area
- Title (h1) moved to content area
- Meta info (author, date, read time) moved to content area
- Properly centered with responsive width containers

### 2. Events-News Detail Page Restructure ([src/app/events-and-news/[slug]/page.tsx](src/app/events-and-news/[slug]/page.tsx))

Applied identical fixes:
- Clean hero banner with blurred background
- Category badge with green color (#255a0a)
- All content properly centered with responsive containers
- Breadcrumb/title/meta in content area below hero

### 3. Blog Image System - 4 Formats ([src/app/globals.css](src/app/globals.css))

Added comprehensive CSS (lines 972-1195) for blog content images:

#### **Format 1: Large Center Image with Blur Background**
```css
.blog-content .prose figure:not(.float-left):not(.float-right):not(.image-pair figure)
```
**Features:**
- Height: 65vh (prominent display)
- Blurred background using `--bg-image` CSS variable (set via JS)
- Main image: max-width 90%, centered, shadow, rounded
- Caption: positioned below image (bottom -3.5rem)
- Mobile: No blur, stacks naturally, max-height 50vh

**Usage:**
```mdx
<figure>
  <img src="/path/to/image.jpg" alt="Description" />
  <figcaption>Your caption text</figcaption>
</figure>
```

#### **Format 2: Two Parallel Images Side-by-Side**
```css
.blog-content .prose .image-pair
```
**Features:**
- Flexbox layout with 2rem gap
- Each image: max-width 48%, max-height 55vh
- No blur background (clean)
- Captions below each image
- Mobile: Stacks vertically

**Usage:**
```mdx
<div className="image-pair">
  <figure>
    <img src="/image1.jpg" alt="First" />
    <figcaption>First caption</figcaption>
  </figure>
  <figure>
    <img src="/image2.jpg" alt="Second" />
    <figcaption>Second caption</figcaption>
  </figure>
</div>
```

#### **Format 3: Left Floating Image with Text Wrap**
```css
.blog-content .prose figure.float-left
```
**Features:**
- Width: 400px fixed
- Float: left (text wraps on right)
- Margin: 0.5rem 1.5rem 1rem 0
- Shadow and rounded corners
- Caption below image
- Mobile: Full width, no float

**Usage:**
```mdx
<figure className="float-left">
  <img src="/image.jpg" alt="Description" />
  <figcaption>Caption text</figcaption>
</figure>

Your paragraph text continues here and wraps around the image...
```

#### **Format 4: Right Floating Image with Text Wrap**
```css
.blog-content .prose figure.float-right
```
**Features:**
- Width: 400px fixed
- Float: right (text wraps on left)
- Margin: 0.5rem 0 1rem 1.5rem
- Shadow and rounded corners
- Caption below image
- Mobile: Full width, no float

**Usage:**
```mdx
<figure className="float-right">
  <img src="/image.jpg" alt="Description" />
  <figcaption>Caption text</figcaption>
</figure>

Your paragraph text continues here and wraps around the image...
```

### 4. BlurBackgroundScript Component ([src/components/BlurBackgroundScript.tsx](src/components/BlurBackgroundScript.tsx))

**Purpose:** Dynamically sets `--bg-image` CSS variable for center images to enable blurred background effect

**Implementation:**
```tsx
'use client';
import { useEffect } from 'react';

export default function BlurBackgroundScript() {
  useEffect(() => {
    const figures = document.querySelectorAll(
      '.blog-content .prose figure:not(.float-left):not(.float-right):not(.image-pair figure)'
    );
    
    figures.forEach((figure) => {
      const img = figure.querySelector('img');
      if (img && img.src) {
        (figure as HTMLElement).style.setProperty('--bg-image', `url(${img.src})`);
      }
    });
  }, []);

  return null;
}
```

**Why Needed:**
- CSS `var(--bg-image)` can't access image URLs statically
- Client-side JS reads img.src and sets CSS variable
- Runs once on mount via useEffect
- Applied to both blog and events-news detail pages

### 5. ImagePair Component ([src/components/ImagePair.tsx](src/components/ImagePair.tsx))

**Purpose:** Simplify two-image layouts in MDX content

**Props:**
- src1, alt1, src2, alt2 (required)
- caption1, caption2 (optional)

**Usage in MDX:**
```mdx
<ImagePair
  src1="/image1.jpg"
  alt1="First image"
  src2="/image2.jpg"
  alt2="Second image"
  caption1="Optional caption 1"
  caption2="Optional caption 2"
/>
```

**Features:**
- Uses Next.js Image component for optimization
- Automatically stacks vertically on mobile
- Integrates with blog-content CSS

### 6. MDX Components Updated

Both blog and events-news detail pages now include:
```tsx
const mdxComponents = {
  // ... existing h1-h6, p, ul, ol, etc.
  img: (props: any) => (/* Next.js Image component */),
  ImagePair: ImagePair, // ← NEW
};
```

## 📊 Build Status

**Build succeeded:** ✅ 254 pages generated

**Blog pages:**
- /blogs (listing)
- /blogs/ct-scanner-buyers-guide
- /blogs/importance-of-amc-for-medical-equipment
- /blogs/understanding-mri-technology-guide

**Events-News pages:**
- /events-and-news (listing)
- /events-and-news/phantom-healthcare-at-iria-2024
- /events-and-news/siemens-skyra-3t-mri-available

## 🎨 Design Patterns

### Container Width Strategy
Replaced inconsistent "container" class with explicit responsive widths:
```tsx
className="w-full max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8"
```

**Breakpoints:**
- Base: w-full with padding
- Default: max-w-7xl (1280px)
- 2xl (1536px+): max-w-[1600px]
- 3xl (custom): max-w-[2000px]

### Hero Image Pattern (With Blur Background)
```tsx
<section className="relative h-[400px] lg:h-[500px] overflow-hidden">
  {/* Blurred Background */}
  <div className="absolute inset-0">
    <Image src={image} fill className="object-cover blur-sm scale-110 opacity-40" />
  </div>
  
  {/* Main Image */}
  <div className="relative h-full flex items-center justify-center z-10 px-4">
    <Image src={image} fill className="object-contain" />
  </div>

  {/* Category Badge */}
  <div className="absolute top-8 left-8 z-20">
    <span className="badge">Category</span>
  </div>
</section>
```

**Why This Works:**
- Two Image components: one for blur, one for main content
- Blur layer: object-cover (fills space), blur-sm, scaled up, low opacity
- Main layer: object-contain (maintains aspect ratio), centered
- Result: Clean professional hero with subtle background

## 🔑 Key Learnings

### 1. CSS Scoping
Used `.blog-content .prose figure` prefix to scope styles only to blog/news content, avoiding conflicts with other site images.

### 2. Negative Selectors
`:not(.float-left):not(.float-right):not(.image-pair figure)` ensures center image styles only apply to standalone figures, not floating or paired images.

### 3. Mobile-First Responsive
All image formats gracefully degrade on mobile:
- No blur backgrounds (performance)
- Full width (readability)
- Vertical stacking (natural flow)
- No floats (cleaner)

### 4. Client Component Requirement
`BlurBackgroundScript` must be client-side because:
- Accesses DOM (document.querySelectorAll)
- Reads computed properties (img.src)
- Manipulates inline styles
- Can't run in RSC (React Server Components)

## 📁 Files Modified

1. **src/app/blogs/[slug]/page.tsx** (126 lines changed)
   - Restructured hero banner
   - Moved content to proper container
   - Added BlurBackgroundScript
   - Added ImagePair to MDX components

2. **src/app/events-and-news/[slug]/page.tsx** (127 lines changed)
   - Same fixes as blog page
   - Green category badge (#255a0a)

3. **src/app/globals.css** (224 lines added)
   - 4 image format CSS (lines 972-1195)
   - Mobile responsive breakpoints
   - Clear floats utility

4. **src/components/BlurBackgroundScript.tsx** (NEW - 26 lines)
   - Client component
   - Sets --bg-image CSS variable
   - useEffect hook

5. **src/components/ImagePair.tsx** (NEW - 44 lines)
   - Two-image layout component
   - Next.js Image integration
   - Caption support

## 🚀 Next Steps (If User Requests)

### Potential Enhancements:
1. **Image Lightbox:** Click to view full-size images in modal
2. **Lazy Loading:** Add loading="lazy" to below-fold images
3. **Image Placeholders:** Add blur placeholders during load
4. **Caption Styling:** More typography options for figcaptions
5. **Three-Image Layout:** Add format for 3 parallel images
6. **Image Zoom:** Hover to zoom effect on center images
7. **Dark Mode:** Add dark mode support for image borders/shadows

### Content Creation Guide:
Users can now create rich blog/news posts with:
- Large feature images (center with blur)
- Comparison images (two parallel)
- Inline diagrams (floating left/right)
- Full-width screenshots
- Mixed layouts in single post

## 🎯 Success Metrics

✅ **Layout Fixed:**
- Title moved from hero to content area
- Content properly centered (not left-aligned)
- Clean hero banner with only image + badge

✅ **Image System Complete:**
- 4 distinct image formats implemented
- Responsive behavior tested
- Mobile-friendly (no blur, stacks vertically)

✅ **Build Status:**
- 254 pages generated successfully
- No TypeScript errors
- No build errors

✅ **Code Quality:**
- Reusable components created
- CSS properly scoped
- TypeScript types maintained
- Comments added for clarity

## 📸 Image URL Status

All MDX files checked - image URLs are correct:
- `/images/machines/mri/GE Signa HDxt 1.5T.png` ✅
- `/images/machines/ct-scan/GE revolution EVO.jpg` ✅
- `/images/machines/c-arm/OEC 9800.jpg` ✅
- `/images/iria-2024.jpg` ✅
- `/images/machines/mri/siemens-skyra.jpg` ✅

## 🔗 Reference Implementation

Based on patterns from vsingh2110/vikas-singh-nextjs:
- Image blur background technique
- Center image sizing (65vh)
- Floating image widths (400px)
- Mobile responsive breakpoints (768px)
- Caption positioning strategies

## 📝 Usage Documentation

### For Content Creators:

**Single Large Image:**
```mdx
<figure>
  <img src="/path/to/image.jpg" alt="Descriptive text" />
  <figcaption>This caption appears below the image</figcaption>
</figure>
```

**Two Images Side-by-Side:**
```mdx
<div className="image-pair">
  <figure>
    <img src="/before.jpg" alt="Before" />
    <figcaption>Before renovation</figcaption>
  </figure>
  <figure>
    <img src="/after.jpg" alt="After" />
    <figcaption>After renovation</figcaption>
  </figure>
</div>
```

**Text Wrapping Around Image:**
```mdx
<figure className="float-right">
  <img src="/diagram.jpg" alt="Technical diagram" />
  <figcaption>Figure 1: System architecture</figcaption>
</figure>

Your long-form content continues here. The text will flow naturally around
the image on larger screens, creating a magazine-style layout. On mobile devices,
the image will appear full-width and the text will stack below it.
```

---

**Status:** PRODUCTION READY ✅  
**Build:** Passing (254 pages)  
**Date:** December 24, 2025  
**Session:** Blog/News Detail Page Restructure & Image System Implementation
