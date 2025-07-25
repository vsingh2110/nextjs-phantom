# International SEO Implementation Guide

**Date:** January 27, 2025  
**Purpose:** Technical implementation guide for multi-country website structure  
**Project:** Phantom Medical Equipment International Expansion

---

## Technical Implementation Strategy

### 1. Next.js App Router Structure

#### Current Structure (Single Country)
```
src/app/
├── page.tsx (Home)
├── about/page.tsx
├── services/page.tsx
├── products/page.tsx
├── contact/page.tsx
└── layout.tsx
```

#### Planned Multi-Country Structure
```
src/app/
├── (en-us)/ (United States)
│   ├── page.tsx
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── products/
│   │   ├── page.tsx
│   │   ├── mri-machines/
│   │   │   ├── page.tsx
│   │   │   ├── [model]/page.tsx
│   │   │   └── buy-in-[city]/page.tsx
│   │   └── ct-scanners/
│   └── contact/page.tsx
├── (en-in)/ (India)
│   ├── page.tsx
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── products/
│   │   ├── page.tsx
│   │   ├── mri-machines/
│   │   │   ├── page.tsx
│   │   │   ├── [model]/page.tsx
│   │   │   └── buy-in-[city]/page.tsx
│   │   └── ct-scanners/
│   └── contact/page.tsx
└── layout.tsx (Global layout)
```

### 2. Internationalization (i18n) Setup

#### Configuration Files
```typescript
// src/lib/i18n.ts
export const locales = {
  'en-us': {
    name: 'United States',
    flag: '/images/flags/us.svg',
    currency: 'USD',
    phone: '+1',
    timezone: 'America/New_York'
  },
  'en-in': {
    name: 'India',
    flag: '/images/flags/in.svg',
    currency: 'INR',
    phone: '+91',
    timezone: 'Asia/Kolkata'
  },
  'en-ae': {
    name: 'United Arab Emirates',
    flag: '/images/flags/ae.svg',
    currency: 'AED',
    phone: '+971',
    timezone: 'Asia/Dubai'
  },
  'en-uk': {
    name: 'United Kingdom',
    flag: '/images/flags/uk.svg',
    currency: 'GBP',
    phone: '+44',
    timezone: 'Europe/London'
  },
  'en-au': {
    name: 'Australia',
    flag: '/images/flags/au.svg',
    currency: 'AUD',
    phone: '+61',
    timezone: 'Australia/Sydney'
  }
} as const;

export type Locale = keyof typeof locales;
```

#### Translation Files
```json
// public/locales/en-us.json
{
  "navigation": {
    "home": "Home",
    "about": "About Us",
    "products": "Products",
    "services": "Services",
    "contact": "Contact"
  },
  "home": {
    "hero": {
      "title": "Leading Medical Imaging Equipment",
      "subtitle": "Premium MRI, CT, and PET-CT Systems"
    }
  },
  "products": {
    "mri": "MRI Machines",
    "ct": "CT Scanners",
    "pet_ct": "PET-CT Systems"
  }
}
```

### 3. Dynamic Routing Implementation

#### Product Pages with Location
```typescript
// src/app/(en-in)/products/mri-machines/buy-in-[city]/page.tsx
import { Metadata } from 'next';
import { getCityData, getProductData } from '@/lib/data';

interface PageProps {
  params: {
    city: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const cityData = await getCityData(params.city);
  const productData = await getProductData('mri-machines');
  
  return {
    title: `Buy MRI Machines in ${cityData.name} | Phantom Medical`,
    description: `Find premium MRI machines for sale in ${cityData.name}. ${productData.description}`,
    keywords: `MRI machines ${cityData.name}, medical imaging equipment ${cityData.name}, radiology equipment ${cityData.name}`,
    openGraph: {
      title: `Buy MRI Machines in ${cityData.name}`,
      description: `Premium MRI machines available in ${cityData.name}`,
      images: [`/images/locations/${cityData.slug}.jpg`]
    }
  };
}

export default async function CityProductPage({ params }: PageProps) {
  const cityData = await getCityData(params.city);
  const products = await getProductsByLocation('mri-machines', params.city);
  
  return (
    <div>
      <h1>Buy MRI Machines in {cityData.name}</h1>
      <p>Premium medical imaging equipment available in {cityData.name}</p>
      <ProductGrid products={products} />
      <LocationInfo city={cityData} />
    </div>
  );
}
```

### 4. SEO Optimization Implementation

#### Structured Data (JSON-LD)
```typescript
// src/components/StructuredData.tsx
export function ProductStructuredData({ product, location }: Props) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `${product.name} - ${location.city}`,
    "description": product.description,
    "brand": {
      "@type": "Brand",
      "name": "Phantom Medical Equipment"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": location.currency,
      "price": product.price,
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Phantom Medical Equipment",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": location.city,
          "addressCountry": location.country
        }
      }
    },
    "location": {
      "@type": "Place",
      "name": location.city,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": location.city,
        "addressCountry": location.country
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
```

#### Dynamic Meta Tags
```typescript
// src/lib/seo.ts
export function generateProductMeta(product: Product, location: Location) {
  return {
    title: `Buy ${product.name} in ${location.city} | Phantom Medical`,
    description: `Premium ${product.name} available in ${location.city}. ${product.description}`,
    keywords: `${product.name} ${location.city}, medical equipment ${location.city}, ${product.category} ${location.city}`,
    openGraph: {
      title: `Buy ${product.name} in ${location.city}`,
      description: `Premium ${product.name} available in ${location.city}`,
      images: [`/images/products/${product.slug}.jpg`],
      locale: location.locale,
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: `Buy ${product.name} in ${location.city}`,
      description: `Premium ${product.name} available in ${location.city}`
    }
  };
}
```

### 5. Location-Based Content Strategy

#### India Cities Implementation
```typescript
// src/lib/locations.ts
export const indiaCities = [
  {
    name: 'Delhi',
    slug: 'delhi',
    keywords: ['MRI machines Delhi', 'CT scanner Delhi', 'medical imaging Delhi'],
    description: 'Premium medical imaging equipment in Delhi',
    coordinates: { lat: 28.7041, lng: 77.1025 }
  },
  {
    name: 'Mumbai',
    slug: 'mumbai',
    keywords: ['MRI machines Mumbai', 'CT scanner Mumbai', 'medical imaging Mumbai'],
    description: 'Premium medical imaging equipment in Mumbai',
    coordinates: { lat: 19.0760, lng: 72.8777 }
  },
  {
    name: 'Bangalore',
    slug: 'bangalore',
    keywords: ['MRI machines Bangalore', 'CT scanner Bangalore', 'medical imaging Bangalore'],
    description: 'Premium medical imaging equipment in Bangalore',
    coordinates: { lat: 12.9716, lng: 77.5946 }
  },
  {
    name: 'Chennai',
    slug: 'chennai',
    keywords: ['MRI machines Chennai', 'CT scanner Chennai', 'medical imaging Chennai'],
    description: 'Premium medical imaging equipment in Chennai',
    coordinates: { lat: 13.0827, lng: 80.2707 }
  },
  {
    name: 'Hyderabad',
    slug: 'hyderabad',
    keywords: ['MRI machines Hyderabad', 'CT scanner Hyderabad', 'medical imaging Hyderabad'],
    description: 'Premium medical imaging equipment in Hyderabad',
    coordinates: { lat: 17.3850, lng: 78.4867 }
  },
  {
    name: 'Pune',
    slug: 'pune',
    keywords: ['MRI machines Pune', 'CT scanner Pune', 'medical imaging Pune'],
    description: 'Premium medical imaging equipment in Pune',
    coordinates: { lat: 18.5204, lng: 73.8567 }
  },
  {
    name: 'Ahmedabad',
    slug: 'ahmedabad',
    keywords: ['MRI machines Ahmedabad', 'CT scanner Ahmedabad', 'medical imaging Ahmedabad'],
    description: 'Premium medical imaging equipment in Ahmedabad',
    coordinates: { lat: 23.0225, lng: 72.5714 }
  },
  {
    name: 'Kolkata',
    slug: 'kolkata',
    keywords: ['MRI machines Kolkata', 'CT scanner Kolkata', 'medical imaging Kolkata'],
    description: 'Premium medical imaging equipment in Kolkata',
    coordinates: { lat: 22.5726, lng: 88.3639 }
  }
];
```

### 6. AI Search Optimization

#### Comprehensive Content Strategy
```typescript
// src/lib/ai-content.ts
export const aiContentStrategies = {
  // Comprehensive product descriptions for AI understanding
  productDescriptions: {
    'mri-1.5t': {
      technical: '1.5 Tesla MRI scanner with advanced imaging capabilities',
      applications: 'Diagnostic imaging, neurological studies, musculoskeletal imaging',
      features: 'High-resolution imaging, fast scanning, patient comfort',
      specifications: 'Field strength: 1.5T, Gradient strength: 33 mT/m'
    }
  },
  
  // Location-specific content for local search
  locationContent: {
    'delhi': {
      overview: 'Leading medical imaging equipment provider in Delhi',
      services: 'MRI installation, CT scanner maintenance, equipment upgrades',
      facilities: 'Multiple service centers across Delhi NCR',
      testimonials: 'Trusted by 50+ hospitals in Delhi'
    }
  },
  
  // FAQ sections for AI search
  faqs: {
    'mri-machines': [
      {
        question: 'What are the benefits of 1.5T vs 3.0T MRI?',
        answer: '1.5T MRI offers excellent image quality with faster scanning times, while 3.0T provides higher resolution for detailed imaging.'
      },
      {
        question: 'How much does an MRI machine cost in Delhi?',
        answer: 'MRI machine prices in Delhi range from ₹2-8 crores depending on specifications and brand.'
      }
    ]
  }
};
```

### 7. Performance Optimization

#### Bundle Optimization
```typescript
// next.config.js - Enhanced configuration
const nextConfig = {
  // Country-specific bundle splitting
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['swiper'],
    // Country-specific code splitting
    outputFileTracingRoot: path.join(__dirname, '../../'),
  },
  
  // Image optimization for different regions
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'maps.gstatic.com',
        port: '',
        pathname: '/**',
      }
    ],
    formats: ['image/webp', 'image/avif'],
    // Region-specific image optimization
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Country-specific redirects
  async redirects() {
    return [
      {
        source: '/mri-machines-delhi',
        destination: '/en-in/products/mri-machines/buy-in-delhi',
        permanent: true,
      },
      {
        source: '/ct-scanner-mumbai',
        destination: '/en-in/products/ct-scanners/buy-in-mumbai',
        permanent: true,
      }
    ];
  }
};
```

### 8. Analytics and Tracking

#### Multi-Country Analytics
```typescript
// src/lib/analytics.ts
export const trackPageView = (page: string, country: string, city?: string) => {
  gtag('config', 'GA_MEASUREMENT_ID', {
    page_title: page,
    page_location: window.location.href,
    custom_map: {
      'country': country,
      'city': city || '',
      'page_type': getPageType(page)
    }
  });
};

export const trackProductView = (product: string, location: string) => {
  gtag('event', 'view_item', {
    item_id: product,
    item_name: product,
    item_category: 'Medical Equipment',
    item_location: location,
    currency: getCurrencyByLocation(location)
  });
};
```

---

## Implementation Checklist

### Phase 1: Foundation (Week 1-2)
- [ ] Set up Next.js App Router structure
- [ ] Implement internationalization (i18n)
- [ ] Create translation files for all countries
- [ ] Set up dynamic routing for countries
- [ ] Implement basic SEO meta tags

### Phase 2: Content Structure (Week 3-4)
- [ ] Create product category pages
- [ ] Implement location-based product pages
- [ ] Set up structured data (JSON-LD)
- [ ] Create FAQ sections for AI search
- [ ] Implement breadcrumb navigation

### Phase 3: Location Pages (Week 5-8)
- [ ] Create India city pages (8 cities)
- [ ] Create US city pages (3 major cities)
- [ ] Create UAE city pages (3 cities)
- [ ] Create UK city pages (3 cities)
- [ ] Create Australia city pages (3 cities)

### Phase 4: Advanced Features (Week 9-12)
- [ ] Implement AI search optimization
- [ ] Set up advanced analytics
- [ ] Performance optimization
- [ ] Security hardening
- [ ] Testing and quality assurance

---

## Expected Results

### SEO Performance
- **500+ pages** across 5 countries
- **1000+ location-specific keywords**
- **300-500% traffic increase** within 6 months
- **Top 3 rankings** for target keywords

### AI Search Visibility
- **Featured in ChatGPT responses** for medical equipment queries
- **Claude AI integration** for business research
- **Voice search optimization** for natural language queries
- **Rich snippets** in search results

### Business Impact
- **Market expansion** to 5+ countries
- **Revenue growth** of 200% in international sales
- **Brand recognition** across multiple markets
- **Competitive advantage** in AI-powered search

---

**Technical Lead:** Development Team  
**Next Review:** February 15, 2025  
**Status:** Implementation Planning 