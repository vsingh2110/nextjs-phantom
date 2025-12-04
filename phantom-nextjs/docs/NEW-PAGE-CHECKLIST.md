# 📋 NEW PAGE CHECKLIST

**Created:** November 30, 2025  
**Last Updated:** December 4, 2025 (AI SEO / GEO / AEO Section Added)  
**Purpose:** Quick reference for creating new pages with proper SEO & Accessibility  
**Use This:** Before creating ANY new page in the Next.js site

---

## ✅ PRE-DEVELOPMENT

- [ ] Read `SEO-INDIA-REFERENCE.md` for SEO guidelines (including AI SEO section!)
- [ ] Check existing similar pages for patterns
- [ ] Identify page type (product, service, location, etc.)
- [ ] Plan schema types needed
- [ ] Plan FAQ section for AI visibility

---

## ✅ METADATA (in page.tsx)

```tsx
export const metadata: Metadata = {
  title: 'Page Title - Phantom Healthcare',  // 50-60 chars ideal
  description: 'Page description with keywords...',  // 150-160 chars ideal
  
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://phantomhealthcare.com/page-url',
    siteName: 'Phantom Healthcare',
    title: '...',
    description: '...',
    images: [{ url: '/images/...', width: 1200, height: 630, alt: '...' }],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: '...',
    description: '...',
    images: ['/images/...'],
  },
  
  alternates: {
    canonical: 'https://phantomhealthcare.com/page-url',
  },
};
```

- [ ] Title: 50-60 characters ✅
- [ ] Description: 150-160 characters ✅
- [ ] OpenGraph configured ✅
- [ ] Twitter card configured ✅
- [ ] Canonical URL set ✅

---

## ✅ HEADING STRUCTURE

- [ ] Exactly ONE `<h1>` per page
- [ ] H1 is 20-70 characters
- [ ] Heading hierarchy: H1 → H2 → H3 (no skipping)

**If visual heading is too long:**
```tsx
<h1 className="sr-only">Short H1 for SEO (20-70 chars)</h1>
<p className="text-4xl font-bold">Longer visual heading text</p>
```

---

## ✅ BREADCRUMBS

### JSON-LD (for search engines)
```tsx
<BreadcrumbJsonLd items={[
  { name: 'Home', item: 'https://phantomhealthcare.com' },
  { name: 'Category', item: 'https://phantomhealthcare.com/category' },
  { name: 'Current Page', item: 'https://phantomhealthcare.com/category/page' },
]} />
```

### Visible Breadcrumb (for users)
```tsx
<nav aria-label="Breadcrumb" className="...">
  <ol className="flex items-center">
    <li><Link href="/">Home</Link></li>
    <li><span aria-hidden="true" className="mx-2">›</span></li>
    <li><Link href="/category">Category</Link></li>
    <li><span aria-hidden="true" className="mx-2">›</span></li>
    <li aria-current="page">Current Page</li>
  </ol>
</nav>
```

- [ ] JSON-LD BreadcrumbList added ✅
- [ ] Visible breadcrumb in hero section ✅
- [ ] Separator uses `aria-hidden="true"` ✅
- [ ] Current page has `aria-current="page"` ✅

---

## ✅ IMAGES

### Fixed Size Images (icons, thumbnails)
```tsx
<Image 
  src="/images/icon.png" 
  alt="Descriptive alt text" 
  width={150}  // Actual or proportional
  height={150} // Actual or proportional
/>
```

### Responsive Images (hero, backgrounds)
```tsx
<div className="relative h-[400px] w-full">
  <Image 
    fill 
    sizes="(max-width: 768px) 100vw, 50vw"
    src="/images/hero.jpg" 
    alt="Descriptive alt text" 
    className="object-cover"
    priority  // Add for above-fold images
  />
</div>
```

### Aspect Ratio Calculation
```
Actual image: 260 × 94 = 2.77 ratio
Display height 56px → width = 56 × 2.77 = 155px
```

- [ ] All images have `alt` text ✅
- [ ] Above-fold images have `priority` ✅
- [ ] Aspect ratios are correct ✅
- [ ] NO `width={0} height={0}` anywhere ✅

---

## ✅ ACCESSIBILITY

### Icon-Only Buttons
```tsx
<button aria-label="Open mobile menu">
  <span className="sr-only">Menu</span>
  <MenuIcon aria-hidden="true" />
</button>
```

### Icon-Only Links
```tsx
<a href="tel:+919876543210" aria-label="Call us at +91 98765 43210">
  <PhoneIcon aria-hidden="true" />
</a>
```

### Social Media Links
```tsx
<a href="https://facebook.com/..." aria-label="Visit our Facebook page" target="_blank" rel="noopener noreferrer">
  <FacebookIcon aria-hidden="true" />
</a>
```

- [ ] All icon buttons have `aria-label` ✅
- [ ] All icon links have `aria-label` ✅
- [ ] Decorative icons have `aria-hidden="true"` ✅
- [ ] Screen reader text uses `sr-only` class ✅

---

## ✅ JSON-LD SCHEMAS

### Choose Based on Page Type

| Page Type | Primary Schema | Additional Schemas |
|-----------|---------------|-------------------|
| Home | OrganizationJsonLd, LocalBusinessJsonLd | WebSiteJsonLd, MedicalDeviceJsonLd |
| About | AboutPageFullJsonLd | BreadcrumbJsonLd, MedicalBusinessJsonLd |
| Contact | LocalBusinessJsonLd | BreadcrumbJsonLd, ContactPageJsonLd |
| Product Category | ItemListJsonLd | BreadcrumbJsonLd |
| Product Detail | ProductJsonLd | BreadcrumbJsonLd |
| Service | ServiceJsonLd | BreadcrumbJsonLd |

### Import from
```tsx
import { 
  BreadcrumbJsonLd,
  OrganizationJsonLd,
  LocalBusinessJsonLd,
  // ... etc
} from '@/components/seo/JsonLd';
```

- [ ] Appropriate schemas added ✅
- [ ] Product schemas have `image` (REQUIRED!) ✅
- [ ] Tested with Google Rich Results Test ✅

---

## 🤖 AI SEO / GEO / AEO CHECKLIST (Added Dec 4, 2025)

**Purpose:** Optimize content to appear in AI-generated answers (ChatGPT, Google AI Overviews, Perplexity, Claude)

### Content Structure for AI
- [ ] Lead with key information (don't bury the lede)
- [ ] Use declarative, quotable sentences with specific data
- [ ] Include actual numbers, specifications, prices (avoid "contact us")
- [ ] Add FAQ section with common questions about the topic

### FAQ Section Example
```tsx
// Add visible FAQ section on page
<section>
  <h2>Frequently Asked Questions</h2>
  
  <h3>What warranty does Phantom Healthcare offer?</h3>
  <p>Phantom Healthcare provides a 12-month comprehensive warranty 
  on all refurbished medical imaging equipment.</p>
  
  <h3>Where are your service centers located?</h3>
  <p>We have service centers in Faridabad (HQ), Mumbai, Chennai, 
  and Kolkata for pan-India support.</p>
</section>
```

### FAQPage Schema
```tsx
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What warranty does Phantom Healthcare offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Phantom Healthcare provides a 12-month comprehensive warranty on all refurbished medical imaging equipment, covering parts and labor."
      }
    }
  ]
}
</script>
```

### AI Content Quality Checklist
- [ ] Avoid vague marketing language ("world-class", "best-in-class")
- [ ] Include specific data that AI can cite ("150+ installations since 2011")
- [ ] Use tables and bullet points for specifications
- [ ] Add expert quotes or testimonials with attribution
- [ ] Include clear answer to "what, when, where, how much" questions

### Testing for AI Visibility
- [ ] Test queries in ChatGPT: "Best refurbished MRI machines in India"
- [ ] Test queries in Perplexity: "Phantom Healthcare reviews"
- [ ] Check if your brand is mentioned in AI responses

---

## ✅ FINAL CHECKS

- [ ] Page builds without errors: `npm run build`
- [ ] No TypeScript errors
- [ ] Test on desktop browser
- [ ] Test on mobile browser (REAL device, not just DevTools)
- [ ] Run Lighthouse audit (IN INCOGNITO MODE!)
- [ ] Check benchmarkIndex > 2000 in Lighthouse JSON
- [ ] Run Google Rich Results Test
- [ ] Add page to `sitemap.xml`
- [ ] Update `CURRENT-STATUS.md`

---

## ♿ ACCESSIBILITY CHECKLIST (Added Dec 1, 2025)

### Buttons
- [ ] All buttons have `aria-label` (especially icon-only buttons)
- [ ] Toggle buttons have `aria-expanded`
- [ ] No empty buttons

### Touch Targets (Mobile)
- [ ] All clickable elements are at least 44x44px
- [ ] Links have `inline-block py-1` for padding
- [ ] Adequate spacing between touch targets (`space-y-2`)

### Contrast
- [ ] Text on colored backgrounds meets 4.5:1 ratio
- [ ] Use `font-medium` on smaller text for better visibility

### CSS Classes
- [ ] No conflicting display classes (`block` vs `flex`)
- [ ] Run ESLint to catch Tailwind conflicts

---

## 🎯 LIGHTHOUSE TARGETS

| Category | Desktop | Mobile |
|----------|---------|--------|
| Performance | >80 | >60 (variable due to throttling) |
| Accessibility | >95 | >95 |
| Best Practices | >90 | >90 |
| SEO | >95 | >95 |

**Note:** Mobile performance varies 20-30% based on testing conditions. Always test in Incognito Mode and check `benchmarkIndex` in JSON report (should be > 2000).

---

## 🔬 LIGHTHOUSE TESTING TIPS

1. **Always use Incognito Mode** - No extensions
2. **Check benchmarkIndex** - Should be > 2000 for accurate results
3. **Run 3-5 times** - Take median score
4. **Close other apps** - Reduce CPU load
5. **Use wired network** - More consistent than WiFi

---

## 📚 REFERENCE DOCUMENTS

- `SEO-INDIA-REFERENCE.md` - Complete SEO guide (includes AI SEO / GEO / AEO section)
- `AI-AGENT-CRITICAL-GUIDELINES.md` - Critical rules
- `best-practices.md` - Coding standards
- `precautions-and-guardrails.md` - What NOT to do

---

## 🔗 EXTERNAL RESOURCES (AI SEO)

- [Semrush: Generative Engine Optimization](https://www.semrush.com/blog/generative-engine-optimization/)
- [Ahrefs: Answer Engine Optimization](https://ahrefs.com/blog/answer-engine-optimization/)
- [Google: Speakable Structured Data](https://developers.google.com/search/docs/appearance/structured-data/speakable)
- [Schema.org: FAQPage](https://schema.org/FAQPage)
