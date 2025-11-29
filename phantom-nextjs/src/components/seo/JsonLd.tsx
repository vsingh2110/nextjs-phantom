/**
 * JSON-LD Structured Data Components
 * ===================================
 * 
 * PURPOSE: Provide structured data for better SEO and rich snippets
 * CREATED: November 29, 2025
 * UPDATED: November 30, 2025 - Added MedicalDevice schema, fixed AboutPage, restored schemas
 * 
 * CHANGES (Nov 30, 2025):
 * - Added MedicalDevice schema type for products (user preference)
 * - Fixed AboutPage schema to be properly detected by Google
 * - Added more comprehensive schemas to About page
 * - Kept ProfessionalService for LocalBusiness (describes service aspect)
 * 
 * PREVIOUS CHANGES:
 * - Changed MedicalBusiness to ProfessionalService (MedicalBusiness is restricted on many platforms)
 * - FIXED: Removed geo from Corporation (geo is only valid on Place/LocalBusiness, not Organization)
 * - RESTORED: hasOfferCatalog with proper product catalog from static website
 * 
 * USAGE:
 * Import and use these components in page files to add structured data
 * 
 * REFERENCES:
 * - https://schema.org/Organization
 * - https://schema.org/LocalBusiness
 * - https://schema.org/MedicalDevice
 * - https://schema.org/ProfessionalService
 * - https://developers.google.com/search/docs/appearance/structured-data
 */

// Organization Schema for company-wide pages
// NOTE: geo property removed - it's only valid for Place/LocalBusiness, not Organization/Corporation
export function OrganizationJsonLd() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Corporation",
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
    "location": {
      "@type": "Place",
      "name": "Phantom Healthcare Headquarters",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 28.46875377374462,
        "longitude": 77.29099839249344
      }
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
    "knowsAbout": [
      "MRI Scanner Refurbishment",
      "CT Scanner Installation",
      "PET-CT Systems",
      "Cath-Lab Equipment",
      "Gamma Camera SPECT",
      "Bone Densitometer DXA",
      "Medical Equipment Service",
      "Medical Equipment AMC"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Refurbished Medical Imaging Equipment",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "MRI Machines",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "GE Signa 3.0T 750W MRI Scanner",
                "description": "32 Channel configurations, Gradient Amplitude 50mT/m, Slew Rate 200T/m/s",
                "brand": { "@type": "Brand", "name": "GE Healthcare" },
                "category": "MRI Scanner"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "GE Signa HDXT 3.0T MRI Scanner",
                "description": "16/32 Channel configurations, Gradient Amplitude 50mT/m, Slew Rate 150T/m/s",
                "brand": { "@type": "Brand", "name": "GE Healthcare" },
                "category": "MRI Scanner"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Siemens Magnetom Verio 3T MRI Scanner",
                "description": "32 Channel configurations, Gradient Amplitude 50mT/m, Slew Rate 200T/m/s",
                "brand": { "@type": "Brand", "name": "Siemens Healthineers" },
                "category": "MRI Scanner"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Siemens Magnetom Skyra 3.0T MRI Scanner",
                "description": "32 Channel configurations, Gradient Amplitude 50mT/m, Slew Rate 200T/m/s",
                "brand": { "@type": "Brand", "name": "Siemens Healthineers" },
                "category": "MRI Scanner"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "GE Signa 1.5T Creator MRI Scanner",
                "description": "8 Channel configurations, Gradient Amplitude 33mT/m, Slew Rate 120T/m/s",
                "brand": { "@type": "Brand", "name": "GE Healthcare" },
                "category": "MRI Scanner"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "GE 1.5T Explorer MRI Scanner",
                "description": "8 Channel configurations, Gradient Amplitude 33mT/m, Slew Rate 120T/m/s",
                "brand": { "@type": "Brand", "name": "GE Healthcare" },
                "category": "MRI Scanner"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "GE Signa 1.5T OPTIMA 360 Advance MRI Scanner",
                "description": "16 Channel configurations, Gradient Amplitude 33mT/m, Slew Rate 120T/m/s",
                "brand": { "@type": "Brand", "name": "GE Healthcare" },
                "category": "MRI Scanner"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "GE Signa 1.5T HDXT MRI Scanner",
                "description": "8/16 Channel configurations, Gradient Amplitude 33mT/m, Slew Rate 120T/m/s",
                "brand": { "@type": "Brand", "name": "GE Healthcare" },
                "category": "MRI Scanner"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "CT Scanners",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "GE BrightSpeed 8 Slice CT Scanner",
                "description": "8 Slice CT Scanner for diagnostic imaging",
                "brand": { "@type": "Brand", "name": "GE Healthcare" },
                "category": "CT Scanner"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "GE Optima 16 Slice CT Scanner",
                "description": "16 Slice CT Scanner with advanced imaging capabilities",
                "brand": { "@type": "Brand", "name": "GE Healthcare" },
                "category": "CT Scanner"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "GE Revolution 64 Slice CT Scanner",
                "description": "64 Slice CT Scanner for high-resolution imaging",
                "brand": { "@type": "Brand", "name": "GE Healthcare" },
                "category": "CT Scanner"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "GE Revolution 128 Slice CT Scanner",
                "description": "128 Slice CT Scanner for advanced cardiac and body imaging",
                "brand": { "@type": "Brand", "name": "GE Healthcare" },
                "category": "CT Scanner"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "PET-CT Scanners",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "GE Discovery PET-CT 8 Slice",
                "description": "High-resolution oncology and cardiac imaging with 8 slice CT",
                "brand": { "@type": "Brand", "name": "GE Healthcare" },
                "category": "PET-CT Scanner"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "GE Discovery PET-CT 16 Slice",
                "description": "Advanced hybrid imaging for oncology, cardiology, and neurology",
                "brand": { "@type": "Brand", "name": "GE Healthcare" },
                "category": "PET-CT Scanner"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Cath Lab Systems",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Philips Allura Xper FD10 Cath Lab",
                "description": "Cardiovascular X-ray system for interventional cardiology with superb image quality",
                "brand": { "@type": "Brand", "name": "Philips Healthcare" },
                "category": "Cath Lab"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Philips Allura Xper FD20 Cath Lab",
                "description": "Advanced cardiovascular X-ray system with 3D guidance and low X-ray dose",
                "brand": { "@type": "Brand", "name": "Philips Healthcare" },
                "category": "Cath Lab"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Gamma Camera SPECT",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "GE Infinia Gamma Camera SPECT",
                "description": "High sensitivity dual-head gamma camera for nuclear medicine imaging",
                "brand": { "@type": "Brand", "name": "GE Healthcare" },
                "category": "Gamma Camera"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "GE Millennium MG Gamma Camera",
                "description": "Versatile gamma camera for cardiology, oncology, and neurology imaging",
                "brand": { "@type": "Brand", "name": "GE Healthcare" },
                "category": "Gamma Camera"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "GE Discovery NM 630 Gamma Camera",
                "description": "Advanced SPECT imaging for comprehensive nuclear medicine diagnostics",
                "brand": { "@type": "Brand", "name": "GE Healthcare" },
                "category": "Gamma Camera"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Bone Densitometer DXA",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "GE Lunar iDXA Bone Densitometer",
                "description": "Dual-energy X-ray absorptiometry for bone density, body composition, and fracture risk assessment",
                "brand": { "@type": "Brand", "name": "GE Healthcare" },
                "category": "Bone Densitometer"
              }
            }
          ]
        }
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

// Local Business Schema - Changed from MedicalBusiness to ProfessionalService
// MedicalBusiness is restricted category on many ad platforms
export function LocalBusinessJsonLd() {
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Phantom Healthcare IND Private Limited",
    "image": "https://phantomhealthcare.com/images/phantom-building.jpg",
    "@id": "https://phantomhealthcare.com",
    "url": "https://phantomhealthcare.com",
    "telephone": "+91-9899963601",
    "priceRange": "₹₹₹",
    "description": "Medical imaging equipment sales, service, and refurbishment. MRI, CT Scanner, PET-CT, Cath-Lab provider since 2011.",
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

// MedicalDevice Schema - For products like MRI, CT Scanner, etc.
// Using schema.org/MedicalDevice type as per user preference
export function MedicalDeviceJsonLd() {
  const medicalDevices = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalDevice",
      "name": "GE Signa 3.0T MRI Scanner",
      "description": "High-field 3.0T MRI Scanner with 32 Channel configurations, Gradient Amplitude 50mT/m, Slew Rate 200T/m/s. Ideal for advanced neurological and musculoskeletal imaging.",
      "manufacturer": {
        "@type": "Organization",
        "name": "GE Healthcare"
      },
      "category": "MRI Scanner",
      "isRelatedTo": "Medical Imaging Equipment",
      "url": "https://phantomhealthcare.com/product-pages/refurbished-ge-mri-scanner-machines"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalDevice",
      "name": "Siemens Magnetom 3.0T MRI Scanner",
      "description": "Premium 3.0T MRI system with Tim (Total imaging matrix) technology for high-resolution diagnostic imaging.",
      "manufacturer": {
        "@type": "Organization",
        "name": "Siemens Healthineers"
      },
      "category": "MRI Scanner",
      "isRelatedTo": "Medical Imaging Equipment",
      "url": "https://phantomhealthcare.com/product-pages/refurbished-siemens-mri-scanner-machines"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalDevice",
      "name": "GE 1.5T MRI Scanner",
      "description": "Versatile 1.5T MRI Scanner suitable for general diagnostic imaging including brain, spine, and body applications.",
      "manufacturer": {
        "@type": "Organization",
        "name": "GE Healthcare"
      },
      "category": "MRI Scanner",
      "isRelatedTo": "Medical Imaging Equipment",
      "url": "https://phantomhealthcare.com/product-pages/refurbished-ge-mri-scanner-machines"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalDevice",
      "name": "Multi-Slice CT Scanner",
      "description": "Advanced CT Scanner available in 8, 16, 64, and 128 slice configurations for rapid, high-resolution diagnostic imaging.",
      "manufacturer": {
        "@type": "Organization",
        "name": "GE Healthcare"
      },
      "category": "CT Scanner",
      "isRelatedTo": "Medical Imaging Equipment",
      "url": "https://phantomhealthcare.com/product-pages/refurbished-ct-scan-machines"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalDevice",
      "name": "GE Discovery PET-CT Scanner",
      "description": "Hybrid PET-CT imaging system for oncology, cardiology, and neurology applications with superior image quality.",
      "manufacturer": {
        "@type": "Organization",
        "name": "GE Healthcare"
      },
      "category": "PET-CT Scanner",
      "isRelatedTo": "Nuclear Medicine Equipment",
      "url": "https://phantomhealthcare.com/product-pages/refurbished-pet-ct-scanner-machines"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalDevice",
      "name": "Philips Allura Cath Lab",
      "description": "Cardiovascular X-ray system for interventional cardiology procedures with advanced flat-panel detector technology.",
      "manufacturer": {
        "@type": "Organization",
        "name": "Philips Healthcare"
      },
      "category": "Cath Lab",
      "isRelatedTo": "Cardiovascular Equipment",
      "url": "https://phantomhealthcare.com/product-pages/refurbished-cath-lab-machines"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalDevice",
      "name": "Gamma Camera SPECT System",
      "description": "Nuclear medicine imaging system for cardiac, oncology, and neurological SPECT studies.",
      "manufacturer": {
        "@type": "Organization",
        "name": "GE Healthcare"
      },
      "category": "Gamma Camera",
      "isRelatedTo": "Nuclear Medicine Equipment",
      "url": "https://phantomhealthcare.com/product-pages/refurbished-gamma-camera-spect-system-machine"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalDevice",
      "name": "Bone Densitometer DXA System",
      "description": "Dual-energy X-ray absorptiometry system for bone density measurement, body composition analysis, and fracture risk assessment.",
      "manufacturer": {
        "@type": "Organization",
        "name": "GE Healthcare"
      },
      "category": "Bone Densitometer",
      "isRelatedTo": "Diagnostic Equipment",
      "url": "https://phantomhealthcare.com/product-pages/refurbished-bone-densitometer-dexa"
    }
  ];

  return (
    <>
      {medicalDevices.map((device, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(device) }}
        />
      ))}
    </>
  );
}

// Comprehensive About Page Schema (separate scripts for better Google detection)
export function AboutPageFullJsonLd() {
  // AboutPage schema
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Phantom Healthcare",
    "description": "Learn about Phantom Healthcare - India's leading provider of refurbished medical imaging equipment since 2011. 170+ MRI installations, 150+ satisfied clients across India, USA, and UAE.",
    "url": "https://phantomhealthcare.com/about",
    "inLanguage": "en-IN",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Phantom Healthcare",
      "url": "https://phantomhealthcare.com"
    }
  };

  // Organization schema for About page
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": "Phantom Healthcare IND Private Limited",
    "alternateName": "Phantom Healthcare",
    "url": "https://phantomhealthcare.com",
    "logo": "https://phantomhealthcare.com/images/logo.jpg",
    "foundingDate": "2011",
    "founder": [
      {
        "@type": "Person",
        "name": "Rochi Nargotra",
        "jobTitle": "Director & CEO",
        "image": "https://phantomhealthcare.com/images/rochi-nargotra.jpg"
      },
      {
        "@type": "Person",
        "name": "Brijesh Suneja",
        "jobTitle": "Managing Director",
        "image": "https://phantomhealthcare.com/images/brijesh-suneja.jpg"
      }
    ],
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "minValue": 50,
      "maxValue": 100
    },
    "slogan": "Your Trusted Partner in Medical Imaging",
    "description": "India's leading provider of refurbished MRI, CT Scanner, PET-CT, Cath-Lab, and other medical imaging equipment since 2011.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot No. 51, Sector 27C, Near NHPC Chowk",
      "addressLocality": "Faridabad",
      "addressRegion": "Haryana",
      "postalCode": "121003",
      "addressCountry": "IN"
    },
    "telephone": "+91-9899963601",
    "email": "info@phantomhealthcare.com",
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
    ],
    "sameAs": [
      "https://www.facebook.com/phantom.healthcare.ind",
      "https://www.instagram.com/phantomhealthcare/",
      "https://www.linkedin.com/company/phantom-healthcare-ind-private-limited-company",
      "https://twitter.com/Phantomhealthc",
      "https://www.youtube.com/@phantomhealthcare"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  );
}
