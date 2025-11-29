/**
 * JSON-LD Structured Data Components
 * ===================================
 * 
 * PURPOSE: Provide structured data for better SEO and rich snippets
 * CREATED: November 29, 2025
 * 
 * USAGE:
 * Import and use these components in page files to add structured data
 * 
 * REFERENCES:
 * - https://schema.org/Organization
 * - https://schema.org/LocalBusiness
 * - https://schema.org/MedicalBusiness
 * - https://developers.google.com/search/docs/appearance/structured-data
 */

// Organization Schema for company-wide pages
export function OrganizationJsonLd() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Phantom Healthcare IND Private Limited",
    "alternateName": ["Phantom Healthcare", "Phantom Medical Imaging"],
    "url": "https://phantomhealthcare.com",
    "logo": "https://phantomhealthcare.com/images/logo.jpg",
    "image": "https://phantomhealthcare.com/images/phantom-building.jpg",
    "description": "India's leading provider of refurbished MRI, CT Scanners, PET-CT, Cath-Lab, Gamma Camera SPECT & Bone Densitometer. Established in 2011 with 170+ installations and 150+ satisfied clients.",
    "foundingDate": "2011",
    "founder": [
      {
        "@type": "Person",
        "name": "Brijesh Suneja",
        "jobTitle": "Managing Director"
      },
      {
        "@type": "Person",
        "name": "Rochi Nargotra",
        "jobTitle": "Director & CEO"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot No. 51, Sector 27C, Near NHPC Chowk, Main Mathura Road",
      "addressLocality": "Faridabad",
      "addressRegion": "Haryana",
      "postalCode": "121003",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "28.46875377374462",
      "longitude": "77.29099839249344"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-9899963601",
        "contactType": "sales",
        "areaServed": ["IN", "US", "AE"],
        "availableLanguage": ["English", "Hindi"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+91-129-4312423",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi"]
      }
    ],
    "email": "info@phantomhealthcare.com",
    "telephone": "+91-9899963601",
    "sameAs": [
      "https://www.facebook.com/phantom.healthcare.ind",
      "https://www.instagram.com/phantomhealthcare/",
      "https://www.linkedin.com/company/phantom-healthcare-ind-private-limited-company",
      "https://twitter.com/Phantomhealthc",
      "https://www.youtube.com/@phantomhealthcare",
      "https://www.pinterest.com/phantomhealthcare/"
    ],
    "areaServed": [
      {
        "@type": "Country",
        "name": "India"
      },
      {
        "@type": "Country",
        "name": "United States"
      },
      {
        "@type": "Country",
        "name": "United Arab Emirates"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Medical Imaging Equipment",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "MRI Machines",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "GE 1.5T MRI" }},
            { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "GE 3.0T MRI" }},
            { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Siemens 1.5T MRI" }},
            { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Siemens 3.0T MRI" }}
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "CT Scanners",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "16-Slice CT Scanner" }},
            { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "64-Slice CT Scanner" }},
            { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "128-Slice CT Scanner" }}
          ]
        },
        { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "PET-CT Scanner" }},
        { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Cath Lab" }},
        { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Gamma Camera SPECT" }},
        { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Bone Densitometer DXA" }}
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
    />
  );
}

// Local Business Schema for location-specific pages
export function LocalBusinessJsonLd() {
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Phantom Healthcare IND Private Limited",
    "image": "https://phantomhealthcare.com/images/phantom-building.jpg",
    "@id": "https://phantomhealthcare.com",
    "url": "https://phantomhealthcare.com",
    "telephone": "+91-9899963601",
    "priceRange": "₹₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot No. 51, Sector 27C, Near NHPC Chowk, Main Mathura Road",
      "addressLocality": "Faridabad",
      "addressRegion": "Haryana",
      "postalCode": "121003",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.46875377374462,
      "longitude": 77.29099839249344
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "10:30",
        "closes": "18:30"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/phantom.healthcare.ind",
      "https://www.instagram.com/phantomhealthcare/",
      "https://www.linkedin.com/company/phantom-healthcare-ind-private-limited-company"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
    />
  );
}

// WebSite Schema for homepage
export function WebSiteJsonLd() {
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Phantom Healthcare",
    "alternateName": "Phantom Medical Imaging Equipment",
    "url": "https://phantomhealthcare.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://phantomhealthcare.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
    />
  );
}

// Contact Page Schema
export function ContactPageJsonLd() {
  const contactPageData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Phantom Healthcare",
    "description": "Contact Phantom Healthcare for MRI, CT Scanner, PET-CT, Cath-Lab equipment sales, service, and spare parts.",
    "url": "https://phantomhealthcare.com/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "Phantom Healthcare IND Private Limited",
      "telephone": "+91-9899963601",
      "email": "info@phantomhealthcare.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Plot No. 51, Sector 27C, Near NHPC Chowk",
        "addressLocality": "Faridabad",
        "addressRegion": "Haryana",
        "postalCode": "121003",
        "addressCountry": "IN"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageData) }}
    />
  );
}

// About Page Schema
export function AboutPageJsonLd() {
  const aboutPageData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Phantom Healthcare",
    "description": "Learn about Phantom Healthcare - India's leading provider of refurbished medical imaging equipment since 2011. 170+ MRI installations, 150+ satisfied clients.",
    "url": "https://phantomhealthcare.com/about",
    "mainEntity": {
      "@type": "Organization",
      "name": "Phantom Healthcare IND Private Limited",
      "foundingDate": "2011",
      "numberOfEmployees": {
        "@type": "QuantitativeValue",
        "minValue": 50,
        "maxValue": 100
      },
      "slogan": "Your Trusted Partner in Medical Imaging",
      "knowsAbout": [
        "MRI Machines",
        "CT Scanners",
        "PET-CT Systems",
        "Cath Lab Equipment",
        "Gamma Camera SPECT",
        "Bone Densitometer DXA",
        "Medical Equipment Refurbishment",
        "Medical Equipment Installation",
        "AMC Services"
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageData) }}
    />
  );
}

// Breadcrumb Schema
interface BreadcrumbItem {
  name: string;
  url: string;
}

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
    />
  );
}
