/**
 * JSON-LD Structured Data Components
 * ===================================
 * 
 * PURPOSE: Provide structured data for better SEO and rich snippets
 * CREATED: November 29, 2025
 * UPDATED: December 7, 2025 - Added Speakable Schema for voice search (AI SEO)
 * 
 * CHANGES (Dec 7, 2025):
 * - Added SpeakableJsonLd for voice search optimization (Google Assistant, Alexa, Siri)
 * - Speakable schema tells voice assistants which content is suitable for audio playback
 * 
 * CHANGES (Dec 4, 2025):
 * - Added HomeFAQJsonLd for home page FAQs (AI SEO optimization)
 * - Added AboutFAQJsonLd for about page FAQs
 * - Added ContactFAQJsonLd for contact page FAQs
 * - FAQPage schema helps AI systems (ChatGPT, Google AI, Perplexity) cite our content
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
 * - https://schema.org/FAQPage
 * - https://schema.org/speakable
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

// ============================================================================
// FAQ PAGE SCHEMAS FOR AI SEO (GEO/AEO) - Added December 4, 2025
// ============================================================================
// These schemas help AI systems (ChatGPT, Google AI Overviews, Perplexity, etc.)
// extract and cite our content in their responses.
// Each page has specific FAQs relevant to that page's content.

/**
 * HOME PAGE FAQ Schema
 * Focus: Products, services, general company info
 * Use on: Home page (page.tsx)
 */
export function HomeFAQJsonLd() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What medical imaging equipment does Phantom Healthcare provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Phantom Healthcare provides refurbished MRI Scanners (1.5T and 3.0T), CT Scanners, PET-CT systems, Cath Labs, Gamma Camera SPECT, and Bone Densitometers (DXA). We work with top brands including GE Healthcare, Siemens Healthineers, Philips, Canon, and Toshiba."
        }
      },
      {
        "@type": "Question",
        "name": "What warranty does Phantom Healthcare offer on refurbished MRI machines?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Phantom Healthcare provides a 12-month comprehensive warranty on all refurbished MRI machines and CT scanners. The warranty covers parts and labor, with optional extended AMC (Annual Maintenance Contract) packages available for continued support."
        }
      },
      {
        "@type": "Question",
        "name": "How many MRI and CT installations has Phantom Healthcare completed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Since 2011, Phantom Healthcare has completed over 170 successful medical imaging equipment installations across India, serving more than 150 satisfied clients including major hospital chains like Apollo, Fortis, Max Healthcare, and Narayana Health."
        }
      },
      {
        "@type": "Question",
        "name": "Why choose refurbished medical imaging equipment from Phantom Healthcare?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Refurbished medical imaging equipment from Phantom Healthcare offers 40-60% cost savings compared to new equipment, with the same diagnostic quality. All equipment undergoes rigorous 150-point inspection, complete reconditioning, and comes with warranty. This makes advanced diagnostics accessible for tier-2/tier-3 cities and smaller healthcare facilities."
        }
      },
      {
        "@type": "Question",
        "name": "Does Phantom Healthcare provide installation and after-sales service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Phantom Healthcare provides complete turnkey solutions including site planning, installation, commissioning, operator training, and ongoing technical support. We have service centers in Faridabad (HQ), Mumbai, Chennai, and Kolkata, enabling pan-India service response within 24-48 hours."
        }
      },
      {
        "@type": "Question",
        "name": "What brands of MRI and CT scanners does Phantom Healthcare refurbish?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Phantom Healthcare refurbishes and supplies equipment from leading manufacturers: GE Healthcare (Signa series), Siemens Healthineers (Magnetom, Somatom series), Philips (Achieva, Ingenia), Canon/Toshiba (Vantage, Aquilion), and Hitachi. We specialize in systems from 2015 onwards for optimal technology and spare parts availability."
        }
      },
      {
        "@type": "Question",
        "name": "Where is Phantom Healthcare located and which regions do they serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Phantom Healthcare is headquartered in Faridabad, Haryana, India (near Delhi NCR). We serve clients across India, USA (Illinois office), and UAE/Middle East (Sharjah office). Our pan-India service network ensures support for clients in all states."
        }
      },
      {
        "@type": "Question",
        "name": "What is the typical cost of a refurbished MRI scanner in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Refurbished MRI scanner prices in India vary based on field strength and brand. 1.5T MRI scanners typically range from ₹1.5 to ₹3 crore, while 3.0T MRI scanners range from ₹3 to ₹6 crore. Contact Phantom Healthcare for specific quotes as prices depend on model year, configuration, and current inventory."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}

/**
 * ABOUT PAGE FAQ Schema
 * Focus: Company history, leadership, values, expertise
 * Use on: About page (about/page.tsx)
 */
export function AboutFAQJsonLd() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "When was Phantom Healthcare established?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Phantom Healthcare was established in 2011 in Faridabad, Haryana, India. Over the past 13+ years, we have grown to become one of India's leading providers of refurbished medical imaging equipment with 170+ installations and 150+ satisfied clients."
        }
      },
      {
        "@type": "Question",
        "name": "Who are the founders of Phantom Healthcare?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Phantom Healthcare was founded by Rochi Nargotra (Director & CEO) and Brijesh Suneja (Managing Director). Both founders bring decades of experience in the medical imaging industry and continue to lead the company's growth and innovation."
        }
      },
      {
        "@type": "Question",
        "name": "What is Phantom Healthcare's refurbishment process?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Phantom Healthcare's refurbishment process includes: 150-point quality inspection, complete cosmetic restoration, replacement of worn components, software updates and calibration, rigorous testing protocols, and quality certification. Each machine is restored to near-original specifications before delivery."
        }
      },
      {
        "@type": "Question",
        "name": "What certifications does Phantom Healthcare have?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Phantom Healthcare maintains ISO certifications for quality management and follows international standards for medical equipment refurbishment. All equipment meets AERB (Atomic Energy Regulatory Board) requirements for radiation equipment in India."
        }
      },
      {
        "@type": "Question",
        "name": "How many employees does Phantom Healthcare have?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Phantom Healthcare employs 50-100 professionals including certified biomedical engineers, service technicians, sales specialists, and support staff across our offices in India, USA, and UAE."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}

/**
 * CONTACT PAGE FAQ Schema
 * Focus: How to reach us, office locations, response times
 * Use on: Contact page (contact/page.tsx)
 */
export function ContactFAQJsonLd() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How can I contact Phantom Healthcare for a quote?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can contact Phantom Healthcare for a quote by: Phone: +91 9899963601 (Sales) or +91 129-4312423 (Office), Email: biz@phantomhealthcare.com, WhatsApp: +91 9899963601, or fill out the contact form on our website. We typically respond within 24 hours on business days."
        }
      },
      {
        "@type": "Question",
        "name": "Where is Phantom Healthcare's head office located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Phantom Healthcare's head office is located at Plot No. 51, Sector 27C, Near NHPC Chowk, Main Mathura Road, Faridabad, Haryana 121003, India. We are about 30 minutes from Delhi NCR and easily accessible from the Faridabad-Delhi highway."
        }
      },
      {
        "@type": "Question",
        "name": "Does Phantom Healthcare have international offices?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Phantom Healthcare has international offices in: USA - 620 Progress Dr, Glendale Heights, Illinois 60139 (Phone: +1 630-720-6801), and UAE - LV 63-C, Al Hamriyah Freezone, Sharjah (Phone: +971 522 208 819). These offices serve customers in North America and the Middle East/Africa regions."
        }
      },
      {
        "@type": "Question",
        "name": "What are Phantom Healthcare's business hours?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Phantom Healthcare's India office operates Monday to Saturday, 9:00 AM to 6:00 PM IST. For urgent service requests, our 24/7 emergency helpline is available at +91 8545815483. US and UAE offices operate in their respective local business hours."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly does Phantom Healthcare respond to service requests?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Phantom Healthcare provides service response within 24-48 hours across India through our service centers in Faridabad, Mumbai, Chennai, and Kolkata. For AMC customers, we offer priority response and remote diagnostic support for faster resolution."
        }
      },
      {
        "@type": "Question",
        "name": "Can I schedule a site visit from Phantom Healthcare?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Phantom Healthcare offers free site visits for serious inquiries. Our technical team will visit your facility to assess site requirements, provide recommendations for equipment selection, and prepare a detailed quotation. Contact us at biz@phantomhealthcare.com to schedule a visit."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}

// ============================================================================
// SPEAKABLE SCHEMA FOR VOICE SEARCH (AI SEO) - Added December 7, 2025
// ============================================================================
// Speakable schema helps voice assistants (Google Assistant, Alexa, Siri)
// identify which parts of your page are most suitable for audio playback.
// This is critical for voice search optimization and AI assistants.

/**
 * HOME PAGE Speakable Schema
 * Identifies key content for voice assistants to read aloud
 * Use on: Home page (page.tsx)
 * NOTE: Only use CSS selectors that actually exist on the page!
 */
export function HomeSpeakableJsonLd() {
  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Phantom Healthcare - Refurbished MRI & CT Scanner India",
    "url": "https://phantomhealthcare.com",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [
        "h1",
        "h2"
      ]
    },
    "mainEntity": {
      "@type": "MedicalBusiness",
      "name": "Phantom Healthcare",
      "description": "Phantom Healthcare is India's leading provider of refurbished MRI scanners, CT scanners, and medical imaging equipment. Established in 2011, we have completed over 170 installations across India with a 12-month comprehensive warranty on all equipment.",
      "telephone": "+91-9899963601",
      "email": "biz@phantomhealthcare.com",
      "url": "https://phantomhealthcare.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Plot No. 51, Sector 27C, Near NHPC Chowk, Main Mathura Road",
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
      dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
    />
  );
}

/**
 * ABOUT PAGE Speakable Schema
 * Identifies company history and leadership content for voice
 * Use on: About page (about/page.tsx)
 * NOTE: Only use CSS selectors that actually exist on the page!
 */
export function AboutSpeakableJsonLd() {
  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Phantom Healthcare - Company History & Leadership",
    "url": "https://phantomhealthcare.com/about",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [
        "h1",
        "h2"
      ]
    },
    "mainEntity": {
      "@type": "Organization",
      "name": "Phantom Healthcare IND Private Limited",
      "description": "Phantom Healthcare was founded in 2011 by Rochi Nargotra and Brijesh Suneja. We are India's premier provider of refurbished medical imaging equipment with 170+ installations, 150+ clients, and offices in India, USA, and UAE.",
      "url": "https://phantomhealthcare.com",
      "telephone": "+91-9899963601",
      "email": "biz@phantomhealthcare.com"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
    />
  );
}

/**
 * CONTACT PAGE Speakable Schema
 * Highlights contact information for voice assistants
 * Use on: Contact page (contact/page.tsx)
 * NOTE: Only use CSS selectors that actually exist on the page!
 */
export function ContactSpeakableJsonLd() {
  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Phantom Healthcare - Get a Quote",
    "url": "https://phantomhealthcare.com/contact",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [
        "h1",
        "h2"
      ]
    },
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Phantom Healthcare",
      "telephone": "+91-9899963601",
      "email": "biz@phantomhealthcare.com",
      "url": "https://phantomhealthcare.com/contact",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Plot No. 51, Sector 27C, Near NHPC Chowk, Main Mathura Road",
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
      dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
    />
  );
}

/**
 * PRIVACY POLICY PAGE Speakable Schema
 * Highlights privacy information for voice assistants
 * Use on: Privacy Policy page (privacy-policy/page.tsx)
 */
export function PrivacyPolicySpeakableJsonLd() {
  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy - Phantom Healthcare",
    "url": "https://phantomhealthcare.com/privacy-policy",
    "description": "Privacy Policy for Phantom Healthcare covering data collection, cookies, third-party services, security, and user rights.",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [
        "h1",
        "h2"
      ]
    },
    "mainEntity": {
      "@type": "Organization",
      "name": "Phantom Healthcare IND Private Limited",
      "description": "Phantom Healthcare is committed to protecting your privacy. We collect personal information when you contact us or request quotes for medical imaging equipment. We implement security measures including SSL encryption and access controls to protect your data.",
      "url": "https://phantomhealthcare.com",
      "telephone": "+91-9899963601",
      "email": "biz@phantomhealthcare.com"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
    />
  );
}

/**
 * TERMS & CONDITIONS PAGE Speakable Schema
 * Highlights terms information for voice assistants
 * Use on: Terms & Conditions page (terms-and-conditions/page.tsx)
 */
export function TermsSpeakableJsonLd() {
  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms & Conditions - Phantom Healthcare",
    "url": "https://phantomhealthcare.com/terms-and-conditions",
    "description": "Terms & Conditions for Phantom Healthcare covering equipment sales, installation, warranty, AMC/CMC services, liability, and dispute resolution.",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [
        "h1",
        "h2"
      ]
    },
    "mainEntity": {
      "@type": "Organization",
      "name": "Phantom Healthcare IND Private Limited",
      "description": "Phantom Healthcare provides refurbished medical imaging equipment with 12-month warranty. Our terms cover equipment sales, installation, AMC services, and customer responsibilities.",
      "url": "https://phantomhealthcare.com",
      "telephone": "+91-9899963601",
      "email": "biz@phantomhealthcare.com"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
    />
  );
}

/**
 * FAQS PAGE FAQ Schema (Comprehensive)
 * Combines all FAQs from Home, About, and Contact pages
 * Use on: FAQs page (faqs/page.tsx)
 */
export function FAQsPageJsonLd() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "url": "https://phantomhealthcare.com/faqs",
    "mainEntity": [
      // Products & Equipment FAQs
      {
        "@type": "Question",
        "name": "What medical imaging equipment does Phantom Healthcare provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Phantom Healthcare provides refurbished MRI Scanners (1.5T and 3.0T), CT Scanners, PET-CT systems, Cath Labs, Gamma Camera SPECT, and Bone Densitometers (DXA). We work with top brands including GE Healthcare, Siemens Healthineers, Philips, Canon, and Toshiba."
        }
      },
      {
        "@type": "Question",
        "name": "What brands of MRI and CT scanners does Phantom Healthcare refurbish?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Phantom Healthcare refurbishes and supplies equipment from leading manufacturers: GE Healthcare (Signa series), Siemens Healthineers (Magnetom, Somatom series), Philips (Achieva, Ingenia), Canon/Toshiba (Vantage, Aquilion), and Hitachi. We specialize in systems from 2015 onwards for optimal technology and spare parts availability."
        }
      },
      {
        "@type": "Question",
        "name": "What is Phantom Healthcare's refurbishment process?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our refurbishment process includes: 150-point quality inspection, complete cosmetic restoration, replacement of worn components, software updates and calibration, rigorous testing protocols, and quality certification. Each machine is restored to near-original specifications before delivery."
        }
      },
      // Pricing & Warranty FAQs
      {
        "@type": "Question",
        "name": "What is the typical cost of a refurbished MRI scanner in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Refurbished MRI scanner prices in India vary based on field strength and brand. 1.5T MRI scanners typically range from ₹1.5 to ₹3 crore, while 3.0T MRI scanners range from ₹3 to ₹6 crore. Contact Phantom Healthcare for specific quotes as prices depend on model year, configuration, and current inventory."
        }
      },
      {
        "@type": "Question",
        "name": "What warranty does Phantom Healthcare offer on refurbished MRI machines?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Phantom Healthcare provides a 12-month comprehensive warranty on all refurbished MRI machines and CT scanners. The warranty covers parts and labor, with optional extended AMC (Annual Maintenance Contract) packages available for continued support."
        }
      },
      {
        "@type": "Question",
        "name": "Why choose refurbished medical imaging equipment from Phantom Healthcare?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Refurbished medical imaging equipment from Phantom Healthcare offers 40-60% cost savings compared to new equipment, with the same diagnostic quality. All equipment undergoes rigorous 150-point inspection, complete reconditioning, and comes with warranty. This makes advanced diagnostics accessible for tier-2/tier-3 cities and smaller healthcare facilities."
        }
      },
      // Services FAQs
      {
        "@type": "Question",
        "name": "Does Phantom Healthcare provide installation and after-sales service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Phantom Healthcare provides complete turnkey solutions including site planning, installation, commissioning, operator training, and ongoing technical support. We have service centers in Faridabad (HQ), Mumbai, Chennai, and Kolkata, enabling pan-India service response within 24-48 hours."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly does Phantom Healthcare respond to service requests?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Phantom Healthcare provides service response within 24-48 hours across India through our service centers in Faridabad, Mumbai, Chennai, and Kolkata. For AMC customers, we offer priority response and remote diagnostic support for faster resolution."
        }
      },
      {
        "@type": "Question",
        "name": "Can I schedule a site visit from Phantom Healthcare?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Phantom Healthcare offers free site visits for serious inquiries. Our technical team will visit your facility to assess site requirements, provide recommendations for equipment selection, and prepare a detailed quotation. Contact us at biz@phantomhealthcare.com to schedule a visit."
        }
      },
      // Company FAQs
      {
        "@type": "Question",
        "name": "When was Phantom Healthcare established?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Phantom Healthcare was established in 2011 in Faridabad, Haryana, India. Over the past 13+ years, we have grown to become one of India's leading providers of refurbished medical imaging equipment with 170+ installations and 150+ satisfied clients."
        }
      },
      {
        "@type": "Question",
        "name": "How many MRI and CT installations has Phantom Healthcare completed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Since 2011, Phantom Healthcare has completed over 170 successful medical imaging equipment installations across India, serving more than 150 satisfied clients including major hospital chains like Apollo, Fortis, Max Healthcare, and Narayana Health."
        }
      },
      {
        "@type": "Question",
        "name": "Who are the founders of Phantom Healthcare?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Phantom Healthcare was founded by Rochi Nargotra (Director & CEO) and Brijesh Suneja (Managing Director). Both founders bring decades of experience in the medical imaging industry and continue to lead the company's growth and innovation."
        }
      },
      {
        "@type": "Question",
        "name": "What certifications does Phantom Healthcare have?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Phantom Healthcare maintains ISO certifications for quality management and follows international standards for medical equipment refurbishment. All equipment meets AERB (Atomic Energy Regulatory Board) requirements for radiation equipment in India."
        }
      },
      // Contact & Location FAQs
      {
        "@type": "Question",
        "name": "Where is Phantom Healthcare located and which regions do they serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Phantom Healthcare is headquartered in Faridabad, Haryana, India (near Delhi NCR). We serve clients across India, USA (Illinois office), and UAE/Middle East (Sharjah office). Our pan-India service network ensures support for clients in all states."
        }
      },
      {
        "@type": "Question",
        "name": "How can I contact Phantom Healthcare for a quote?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can contact Phantom Healthcare for a quote by: Phone: +91 9899963601 (Sales) or +91 129-4312423 (Office), Email: biz@phantomhealthcare.com, WhatsApp: +91 9899963601, or fill out the contact form on our website. We typically respond within 24 hours on business days."
        }
      },
      {
        "@type": "Question",
        "name": "Does Phantom Healthcare have international offices?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Phantom Healthcare has international offices in: USA - 620 Progress Dr, Glendale Heights, Illinois 60139 (Phone: +1 630-720-6801), and UAE - LV 63-C, Al Hamriyah Freezone, Sharjah (Phone: +971 522 208 819). These offices serve customers in North America and the Middle East/Africa regions."
        }
      },
      {
        "@type": "Question",
        "name": "What are Phantom Healthcare's business hours?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Phantom Healthcare's India office operates Monday to Saturday, 9:00 AM to 6:00 PM IST. For urgent service requests, our 24/7 emergency helpline is available at +91 8545815483. US and UAE offices operate in their respective local business hours."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}

/**
 * FAQS PAGE Speakable Schema
 * Highlights FAQ content for voice assistants
 * Use on: FAQs page (faqs/page.tsx)
 */
export function FAQsSpeakableJsonLd() {
  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Frequently Asked Questions - Phantom Healthcare",
    "url": "https://phantomhealthcare.com/faqs",
    "description": "Frequently Asked Questions about Phantom Healthcare's refurbished MRI, CT, pricing, warranty, services, company, and contact details.",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [
        "h1",
        "h2",
        "h3"
      ]
    },
    "mainEntity": {
      "@type": "Organization",
      "name": "Phantom Healthcare IND Private Limited",
      "description": "Find answers to frequently asked questions about Phantom Healthcare's refurbished MRI scanners, CT scanners, pricing, warranty, installation services, and company information.",
      "url": "https://phantomhealthcare.com",
      "telephone": "+91-9899963601",
      "email": "biz@phantomhealthcare.com"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
    />
  );
}
