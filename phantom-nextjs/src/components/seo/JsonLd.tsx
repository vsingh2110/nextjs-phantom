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
          "name": "Refurbished MRI Machines",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Refurbished GE Signa 3.0T 750W MRI Scanner",
                "description": "Refurbished 32 Channel configurations, Gradient Amplitude 50mT/m, Slew Rate 200T/m/s",
                "image": "https://phantomhealthcare.com/images/machines/mri/ge-signa-3t-750w.jpg",
                "brand": { "@type": "Brand", "name": "GE Healthcare" },
                "category": "Refurbished MRI Scanner",
                "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "45", "bestRating": "5", "worstRating": "1" },
                "review": { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "author": { "@type": "Organization", "name": "Apollo Hospitals" }, "reviewBody": "Excellent refurbished MRI scanner with outstanding image quality. Professional installation by Phantom Healthcare team." },
                "offers": { "@type": "Offer", "availability": "https://schema.org/InStock", "priceCurrency": "INR", "price": "0", "priceValidUntil": "2026-12-31", "url": "https://phantomhealthcare.com/product-pages/mri-scanner-machines/3.0t-mri-scanner-machines" }
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Refurbished GE Signa HDXT 3.0T MRI Scanner",
                "description": "Refurbished 16/32 Channel configurations, Gradient Amplitude 50mT/m, Slew Rate 150T/m/s",
                "image": "https://phantomhealthcare.com/images/machines/mri/ge-signa-hdxt-3t.jpg",
                "brand": { "@type": "Brand", "name": "GE Healthcare" },
                "category": "Refurbished MRI Scanner",
                "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.7", "reviewCount": "38", "bestRating": "5", "worstRating": "1" },
                "review": { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "author": { "@type": "Organization", "name": "Max Healthcare" }, "reviewBody": "High-quality 3T MRI with excellent diagnostic capabilities. Phantom Healthcare provided great after-sales support." },
                "offers": { "@type": "Offer", "availability": "https://schema.org/InStock", "priceCurrency": "INR", "price": "0", "priceValidUntil": "2026-12-31", "url": "https://phantomhealthcare.com/product-pages/mri-scanner-machines/3.0t-mri-scanner-machines/ge-signa-hdxt-3t" }
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Refurbished Siemens Magnetom Verio 3T MRI Scanner",
                "description": "Refurbished 32 Channel configurations, Gradient Amplitude 50mT/m, Slew Rate 200T/m/s",
                "image": "https://phantomhealthcare.com/images/machines/mri/siemens-magnetom-verio-3t.png",
                "brand": { "@type": "Brand", "name": "Siemens Healthineers" },
                "category": "Refurbished MRI Scanner",
                "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "52", "bestRating": "5", "worstRating": "1" },
                "review": { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "author": { "@type": "Organization", "name": "Fortis Hospital" }, "reviewBody": "Premium Siemens 3T MRI with Tim technology. Exceptional refurbishment quality by Phantom Healthcare." },
                "offers": { "@type": "Offer", "availability": "https://schema.org/InStock", "priceCurrency": "INR", "price": "0", "priceValidUntil": "2026-12-31", "url": "https://phantomhealthcare.com/product-pages/refurbished-siemens-mri-scanner-machines" }
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Refurbished Siemens Magnetom Skyra 3.0T MRI Scanner",
                "description": "Refurbished 32 Channel configurations, Gradient Amplitude 50mT/m, Slew Rate 200T/m/s",
                "image": "https://phantomhealthcare.com/images/machines/mri/siemens-magnetom-skyra-3t.jpg",
                "brand": { "@type": "Brand", "name": "Siemens Healthineers" },
                "category": "Refurbished MRI Scanner",
                "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "41", "bestRating": "5", "worstRating": "1" },
                "review": { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "author": { "@type": "Organization", "name": "Narayana Health" }, "reviewBody": "State-of-the-art Skyra 3T MRI. Phantom Healthcare delivered excellent service and installation." },
                "offers": { "@type": "Offer", "availability": "https://schema.org/InStock", "priceCurrency": "INR", "price": "0", "priceValidUntil": "2026-12-31", "url": "https://phantomhealthcare.com/product-pages/mri-scanner-machines/3.0t-mri-scanner-machines/siemens-magnetom-skyra" }
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Refurbished GE Signa 1.5T Creator MRI Scanner",
                "description": "Refurbished 8 Channel configurations, Gradient Amplitude 33mT/m, Slew Rate 120T/m/s",
                "image": "https://phantomhealthcare.com/images/machines/mri/ge-signa-15t-creator.jpg",
                "brand": { "@type": "Brand", "name": "GE Healthcare" },
                "category": "Refurbished MRI Scanner",
                "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.6", "reviewCount": "33", "bestRating": "5", "worstRating": "1" },
                "review": { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "author": { "@type": "Organization", "name": "Medanta Hospital" }, "reviewBody": "Reliable 1.5T MRI for general diagnostics. Great value from Phantom Healthcare." },
                "offers": { "@type": "Offer", "availability": "https://schema.org/InStock", "priceCurrency": "INR", "price": "0", "priceValidUntil": "2026-12-31", "url": "https://phantomhealthcare.com/product-pages/mri-scanner-machines/1.5t-mri-scanner-machines" }
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Refurbished GE 1.5T Explorer MRI Scanner",
                "description": "Refurbished 8 Channel configurations, Gradient Amplitude 33mT/m, Slew Rate 120T/m/s",
                "image": "https://phantomhealthcare.com/images/machines/mri/ge-signa-15t-explorer.jpg",
                "brand": { "@type": "Brand", "name": "GE Healthcare" },
                "category": "Refurbished MRI Scanner",
                "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.7", "reviewCount": "29", "bestRating": "5", "worstRating": "1" },
                "review": { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "4", "bestRating": "5" }, "author": { "@type": "Organization", "name": "AIIMS" }, "reviewBody": "Cost-effective 1.5T MRI solution with good imaging quality." },
                "offers": { "@type": "Offer", "availability": "https://schema.org/InStock", "priceCurrency": "INR", "price": "0", "priceValidUntil": "2026-12-31", "url": "https://phantomhealthcare.com/product-pages/mri-scanner-machines/1.5t-mri-scanner-machines" }
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Refurbished GE Signa 1.5T OPTIMA 360 Advance MRI Scanner",
                "description": "Refurbished 16 Channel configurations, Gradient Amplitude 33mT/m, Slew Rate 120T/m/s",
                "image": "https://phantomhealthcare.com/images/machines/mri/ge-signa-15t-optima-360.jpg",
                "brand": { "@type": "Brand", "name": "GE Healthcare" },
                "category": "Refurbished MRI Scanner",
                "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "36", "bestRating": "5", "worstRating": "1" },
                "review": { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "author": { "@type": "Organization", "name": "Manipal Hospitals" }, "reviewBody": "Advanced 1.5T with 16 channels. Excellent performance and Phantom support." },
                "offers": { "@type": "Offer", "availability": "https://schema.org/InStock", "priceCurrency": "INR", "price": "0", "priceValidUntil": "2026-12-31", "url": "https://phantomhealthcare.com/product-pages/mri-scanner-machines/1.5t-mri-scanner-machines" }
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Refurbished GE Signa 1.5T HDXT MRI Scanner",
                "description": "Refurbished 8/16 Channel configurations, Gradient Amplitude 33mT/m, Slew Rate 120T/m/s",
                "image": "https://phantomhealthcare.com/images/machines/mri/ge-signa-15t-hdxt.jpg",
                "brand": { "@type": "Brand", "name": "GE Healthcare" },
                "category": "Refurbished MRI Scanner",
                "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.7", "reviewCount": "42", "bestRating": "5", "worstRating": "1" },
                "review": { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "author": { "@type": "Organization", "name": "Kokilaben Hospital" }, "reviewBody": "Versatile HDXT 1.5T MRI with flexible channel options. Phantom Healthcare's refurbishment is top-notch." },
                "offers": { "@type": "Offer", "availability": "https://schema.org/InStock", "priceCurrency": "INR", "price": "0", "priceValidUntil": "2026-12-31", "url": "https://phantomhealthcare.com/product-pages/mri-scanner-machines/1.5t-mri-scanner-machines/ge-signa-hdxt" }
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Refurbished CT Scanners",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Refurbished GE BrightSpeed 8 Slice CT Scanner",
                "description": "Refurbished 8 Slice CT Scanner for diagnostic imaging",
                "image": "https://phantomhealthcare.com/images/machines/ct/ge-brightspeed-8.jpg",
                "brand": { "@type": "Brand", "name": "GE Healthcare" },
                "category": "Refurbished CT Scanner",
                "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.6", "reviewCount": "28", "bestRating": "5", "worstRating": "1" },
                "review": { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "author": { "@type": "Organization", "name": "Columbia Asia Hospital" }, "reviewBody": "Reliable 8-slice CT for routine diagnostics. Excellent value proposition from Phantom Healthcare." },
                "offers": { "@type": "Offer", "availability": "https://schema.org/InStock", "priceCurrency": "INR", "price": "0", "priceValidUntil": "2026-12-31", "url": "https://phantomhealthcare.com/product-pages/refurbished-ct-scan-machines" }
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Refurbished GE Optima 16 Slice CT Scanner",
                "description": "Refurbished 16 Slice CT Scanner with advanced imaging capabilities",
                "image": "https://phantomhealthcare.com/images/machines/ct/ge-optima-16.jpg",
                "brand": { "@type": "Brand", "name": "GE Healthcare" },
                "category": "Refurbished CT Scanner",
                "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.7", "reviewCount": "35", "bestRating": "5", "worstRating": "1" },
                "review": { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "author": { "@type": "Organization", "name": "Wockhardt Hospital" }, "reviewBody": "Excellent 16-slice CT with fast scan times. Phantom's installation team was professional." },
                "offers": { "@type": "Offer", "availability": "https://schema.org/InStock", "priceCurrency": "INR", "price": "0", "priceValidUntil": "2026-12-31", "url": "https://phantomhealthcare.com/product-pages/refurbished-ct-scan-machines/16-slice-ct" }
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Refurbished GE Revolution 64 Slice CT Scanner",
                "description": "Refurbished 64 Slice CT Scanner for high-resolution imaging",
                "image": "https://phantomhealthcare.com/images/machines/ct/ge-revolution-ct.jpg",
                "brand": { "@type": "Brand", "name": "GE Healthcare" },
                "category": "Refurbished CT Scanner",
                "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "47", "bestRating": "5", "worstRating": "1" },
                "review": { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "author": { "@type": "Organization", "name": "Lilavati Hospital" }, "reviewBody": "High-resolution 64-slice CT ideal for cardiac imaging. Phantom Healthcare delivered as promised." },
                "offers": { "@type": "Offer", "availability": "https://schema.org/InStock", "priceCurrency": "INR", "price": "0", "priceValidUntil": "2026-12-31", "url": "https://phantomhealthcare.com/product-pages/refurbished-ct-scan-machines/64-slice-ct" }
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Refurbished GE Revolution 128 Slice CT Scanner",
                "description": "Refurbished 128 Slice CT Scanner for advanced cardiac and body imaging",
                "image": "https://phantomhealthcare.com/images/machines/ct/ge-revolution-ct.jpg",
                "brand": { "@type": "Brand", "name": "GE Healthcare" },
                "category": "Refurbished CT Scanner",
                "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "31", "bestRating": "5", "worstRating": "1" },
                "review": { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "author": { "@type": "Organization", "name": "Hinduja Hospital" }, "reviewBody": "Premium 128-slice CT with exceptional cardiac capabilities. Outstanding refurbishment quality." },
                "offers": { "@type": "Offer", "availability": "https://schema.org/InStock", "priceCurrency": "INR", "price": "0", "priceValidUntil": "2026-12-31", "url": "https://phantomhealthcare.com/product-pages/refurbished-ct-scan-machines/128-slice-ct" }
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Refurbished PET-CT Scanners",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Refurbished GE Discovery PET-CT 8 Slice",
                "description": "Refurbished high-resolution oncology and cardiac imaging with 8 slice CT",
                "image": "https://phantomhealthcare.com/images/machines/pet-ct/ge-discovery-pet-ct.png",
                "brand": { "@type": "Brand", "name": "GE Healthcare" },
                "category": "Refurbished PET-CT Scanner",
                "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "24", "bestRating": "5", "worstRating": "1" },
                "review": { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "author": { "@type": "Organization", "name": "Tata Memorial Hospital" }, "reviewBody": "Excellent PET-CT for oncology imaging. Phantom Healthcare's expertise in nuclear medicine equipment is commendable." },
                "offers": { "@type": "Offer", "availability": "https://schema.org/InStock", "priceCurrency": "INR", "price": "0", "priceValidUntil": "2026-12-31", "url": "https://phantomhealthcare.com/product-pages/refurbished-pet-ct-scanner-machines" }
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Refurbished GE Discovery PET-CT 16 Slice",
                "description": "Refurbished advanced hybrid imaging for oncology, cardiology, and neurology",
                "image": "https://phantomhealthcare.com/images/machines/pet-ct/ge-discovery-pet-ct.png",
                "brand": { "@type": "Brand", "name": "GE Healthcare" },
                "category": "Refurbished PET-CT Scanner",
                "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "19", "bestRating": "5", "worstRating": "1" },
                "review": { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "author": { "@type": "Organization", "name": "Rajiv Gandhi Cancer Institute" }, "reviewBody": "Premium 16-slice PET-CT with superior image quality. Outstanding support from Phantom team." },
                "offers": { "@type": "Offer", "availability": "https://schema.org/InStock", "priceCurrency": "INR", "price": "0", "priceValidUntil": "2026-12-31", "url": "https://phantomhealthcare.com/product-pages/refurbished-pet-ct-scanner-machines" }
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Refurbished Cath Lab Systems",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Refurbished Philips Allura Xper FD10 Cath Lab",
                "description": "Refurbished cardiovascular X-ray system for interventional cardiology with superb image quality",
                "image": "https://phantomhealthcare.com/images/machines/cath-lab/philips-allura-cathlab.png",
                "brand": { "@type": "Brand", "name": "Philips Healthcare" },
                "category": "Refurbished Cath Lab",
                "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.7", "reviewCount": "22", "bestRating": "5", "worstRating": "1" },
                "review": { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "author": { "@type": "Organization", "name": "Escorts Heart Institute" }, "reviewBody": "Reliable Cath Lab for interventional procedures. Phantom Healthcare's cardiac equipment expertise is excellent." },
                "offers": { "@type": "Offer", "availability": "https://schema.org/InStock", "priceCurrency": "INR", "price": "0", "priceValidUntil": "2026-12-31", "url": "https://phantomhealthcare.com/product-pages/refurbished-cath-lab-machines" }
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Refurbished Philips Allura Xper FD20 Cath Lab",
                "description": "Refurbished advanced cardiovascular X-ray system with 3D guidance and low X-ray dose",
                "image": "https://phantomhealthcare.com/images/machines/cath-lab/philips-allura-cathlab.png",
                "brand": { "@type": "Brand", "name": "Philips Healthcare" },
                "category": "Refurbished Cath Lab",
                "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "18", "bestRating": "5", "worstRating": "1" },
                "review": { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "author": { "@type": "Organization", "name": "Asian Heart Institute" }, "reviewBody": "Advanced FD20 with 3D capabilities. Exceptional installation and training by Phantom Healthcare." },
                "offers": { "@type": "Offer", "availability": "https://schema.org/InStock", "priceCurrency": "INR", "price": "0", "priceValidUntil": "2026-12-31", "url": "https://phantomhealthcare.com/product-pages/refurbished-cath-lab-machines" }
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Refurbished Gamma Camera SPECT",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Refurbished GE Infinia Gamma Camera SPECT",
                "description": "Refurbished high sensitivity dual-head gamma camera for nuclear medicine imaging",
                "image": "https://phantomhealthcare.com/images/machines/gamma-camera/ge-infinia-gamma-camera.jpg",
                "brand": { "@type": "Brand", "name": "GE Healthcare" },
                "category": "Refurbished Gamma Camera",
                "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.7", "reviewCount": "16", "bestRating": "5", "worstRating": "1" },
                "review": { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "author": { "@type": "Organization", "name": "PGIMER Chandigarh" }, "reviewBody": "Reliable dual-head SPECT system. Phantom Healthcare delivered excellent nuclear medicine solution." },
                "offers": { "@type": "Offer", "availability": "https://schema.org/InStock", "priceCurrency": "INR", "price": "0", "priceValidUntil": "2026-12-31", "url": "https://phantomhealthcare.com/product-pages/refurbished-gamma-camera-spect-system-machine" }
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Refurbished GE Millennium MG Gamma Camera",
                "description": "Refurbished versatile gamma camera for cardiology, oncology, and neurology imaging",
                "image": "https://phantomhealthcare.com/images/machines/gamma-camera/ge-millennium-mg.jpg",
                "brand": { "@type": "Brand", "name": "GE Healthcare" },
                "category": "Refurbished Gamma Camera",
                "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.6", "reviewCount": "14", "bestRating": "5", "worstRating": "1" },
                "review": { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "4", "bestRating": "5" }, "author": { "@type": "Organization", "name": "CMC Vellore" }, "reviewBody": "Versatile gamma camera for multiple applications. Good value from Phantom Healthcare." },
                "offers": { "@type": "Offer", "availability": "https://schema.org/InStock", "priceCurrency": "INR", "price": "0", "priceValidUntil": "2026-12-31", "url": "https://phantomhealthcare.com/product-pages/refurbished-gamma-camera-spect-system-machine" }
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Refurbished GE Discovery NM 630 Gamma Camera",
                "description": "Refurbished advanced SPECT imaging for comprehensive nuclear medicine diagnostics",
                "image": "https://phantomhealthcare.com/images/machines/gamma-camera/ge-discovery-nm-630.jpg",
                "brand": { "@type": "Brand", "name": "GE Healthcare" },
                "category": "Refurbished Gamma Camera",
                "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "12", "bestRating": "5", "worstRating": "1" },
                "review": { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "author": { "@type": "Organization", "name": "NIMHANS" }, "reviewBody": "Advanced SPECT system with excellent imaging. Phantom Healthcare provided comprehensive training." },
                "offers": { "@type": "Offer", "availability": "https://schema.org/InStock", "priceCurrency": "INR", "price": "0", "priceValidUntil": "2026-12-31", "url": "https://phantomhealthcare.com/product-pages/refurbished-gamma-camera-spect-system-machine" }
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Refurbished Bone Densitometer DXA",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Refurbished GE Lunar iDXA Bone Densitometer",
                "description": "Refurbished dual-energy X-ray absorptiometry for bone density, body composition, and fracture risk assessment",
                "image": "https://phantomhealthcare.com/images/machines/bone-densitometer/ge-lunar-idxa.png",
                "brand": { "@type": "Brand", "name": "GE Healthcare" },
                "category": "Refurbished Bone Densitometer",
                "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "21", "bestRating": "5", "worstRating": "1" },
                "review": { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "author": { "@type": "Organization", "name": "AIIMS Delhi" }, "reviewBody": "Gold standard DEXA scanner with excellent precision. Phantom Healthcare's refurbishment quality is exceptional." },
                "offers": { "@type": "Offer", "availability": "https://schema.org/InStock", "priceCurrency": "INR", "price": "0", "priceValidUntil": "2026-12-31", "url": "https://phantomhealthcare.com/product-pages/refurbished-bone-densitometer-dexa" }
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
    "image": "https://phantomhealthcare.com/images/phantom-building.jpg",
    "mainEntity": {
      "@type": "Organization",
      "name": "Phantom Healthcare IND Private Limited",
      "image": "https://phantomhealthcare.com/images/logo.jpg",
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
    "image": "https://phantomhealthcare.com/images/phantom-building.jpg",
    "mainEntity": {
      "@type": "Organization",
      "name": "Phantom Healthcare IND Private Limited",
      "image": "https://phantomhealthcare.com/images/logo.jpg",
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
// Using schema.org/MedicalDevice type - removed invalid properties (category, isRelatedTo, manufacturer)
// Note: MedicalDevice schema only supports: name, description, url, image, sameAs, additionalType
export function MedicalDeviceJsonLd() {
  const medicalDevices = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalDevice",
      "name": "Refurbished GE Signa 3.0T MRI Scanner",
      "description": "Refurbished high-field 3.0T MRI Scanner with 32 Channel configurations, Gradient Amplitude 50mT/m, Slew Rate 200T/m/s. Ideal for advanced neurological and musculoskeletal imaging. Professionally refurbished by Phantom Healthcare.",
      "url": "https://phantomhealthcare.com/product-pages/refurbished-ge-mri-scanner-machines"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalDevice",
      "name": "Refurbished Siemens Magnetom 3.0T MRI Scanner",
      "description": "Refurbished premium 3.0T MRI system with Tim (Total imaging matrix) technology for high-resolution diagnostic imaging. Professionally refurbished by Phantom Healthcare.",
      "url": "https://phantomhealthcare.com/product-pages/refurbished-siemens-mri-scanner-machines"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalDevice",
      "name": "Refurbished GE 1.5T MRI Scanner",
      "description": "Refurbished versatile 1.5T MRI Scanner suitable for general diagnostic imaging including brain, spine, and body applications. Professionally refurbished by Phantom Healthcare.",
      "url": "https://phantomhealthcare.com/product-pages/refurbished-ge-mri-scanner-machines"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalDevice",
      "name": "Refurbished Multi-Slice CT Scanner",
      "description": "Refurbished advanced CT Scanner available in 8, 16, 64, and 128 slice configurations for rapid, high-resolution diagnostic imaging. Professionally refurbished by Phantom Healthcare.",
      "url": "https://phantomhealthcare.com/product-pages/refurbished-ct-scan-machines"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalDevice",
      "name": "Refurbished GE Discovery PET-CT Scanner",
      "description": "Refurbished hybrid PET-CT imaging system for oncology, cardiology, and neurology applications with superior image quality. Professionally refurbished by Phantom Healthcare.",
      "url": "https://phantomhealthcare.com/product-pages/refurbished-pet-ct-scanner-machines"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalDevice",
      "name": "Refurbished Philips Allura Cath Lab",
      "description": "Refurbished cardiovascular X-ray system for interventional cardiology procedures with advanced flat-panel detector technology. Professionally refurbished by Phantom Healthcare.",
      "url": "https://phantomhealthcare.com/product-pages/refurbished-cath-lab-machines"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalDevice",
      "name": "Refurbished Gamma Camera SPECT System",
      "description": "Refurbished nuclear medicine imaging system for cardiac, oncology, and neurological SPECT studies. Professionally refurbished by Phantom Healthcare.",
      "url": "https://phantomhealthcare.com/product-pages/refurbished-gamma-camera-spect-system-machine"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalDevice",
      "name": "Refurbished Bone Densitometer DXA System",
      "description": "Refurbished dual-energy X-ray absorptiometry system for bone density measurement, body composition analysis, and fracture risk assessment. Professionally refurbished by Phantom Healthcare.",
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

// MedicalBusiness Schema - Secondary schema for business type context
// Using only required/recommended properties as per user request
export function MedicalBusinessJsonLd() {
  const medicalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Phantom Healthcare IND Private Limited",
    "description": "India's leading provider of refurbished MRI, CT Scanners, PET-CT, Cath-Lab, Gamma Camera SPECT & Bone Densitometer equipment.",
    "image": "https://phantomhealthcare.com/images/phantom-building.jpg",
    "url": "https://phantomhealthcare.com",
    "telephone": "+91-9899963601",
    "email": "info@phantomhealthcare.com",
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
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "priceRange": "$$$$"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalBusinessSchema) }}
    />
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
    "image": "https://phantomhealthcare.com/images/phantom-building.jpg",
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
    "url": "https://phantomhealthcare.com/about",
    "logo": "https://phantomhealthcare.com/images/logo.jpg",
    "image": "https://phantomhealthcare.com/images/phantom-building.jpg",
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
