/**
 * Product JSON-LD Schema Component
 * =================================
 * Created: December 24, 2025
 * Purpose: Generate Product structured data for individual product pages
 * 
 * Schema: https://schema.org/Product
 * Google Requirements: Image field is REQUIRED for Product schema
 */

import { Product } from '@/types/product';

interface ProductJsonLdProps {
  product: Product;
}

export function ProductJsonLd({ product }: ProductJsonLdProps) {
  const productData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "image": `https://phantomhealthcare.com${product.mainImage.src}`,
    "brand": {
      "@type": "Brand",
      "name": product.brand
    },
    "sku": product.sku || product.id,
    "category": product.category,
    "offers": {
      "@type": "Offer",
      "availability": product.availability === 'Available' 
        ? "https://schema.org/InStock" 
        : product.availability === 'Coming Soon'
        ? "https://schema.org/PreOrder"
        : "https://schema.org/OutOfStock",
      "priceCurrency": "INR",
      "price": "0", // Price on request
      "priceValidUntil": "2026-12-31",
      "url": `https://phantomhealthcare.com${product.urlPath}`,
      "seller": {
        "@type": "Organization",
        "name": "Phantom Healthcare IND Private Limited"
      }
    },
    ...(product.aggregateRating && {
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": product.aggregateRating.ratingValue.toString(),
        "reviewCount": product.aggregateRating.reviewCount.toString(),
        "bestRating": "5",
        "worstRating": "1"
      }
    }),
    ...(product.reviews && product.reviews.length > 0 && {
      "review": product.reviews.map(review => ({
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": review.rating.toString(),
          "bestRating": "5"
        },
        "author": {
          "@type": "Organization",
          "name": review.organization
        },
        "reviewBody": review.comment,
        ...(review.date && { "datePublished": review.date })
      }))
    })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(productData, null, 2) }}
    />
  );
}

/**
 * Product FAQ JSON-LD Schema
 * ===========================
 * For product-specific FAQs (3-5 questions)
 */

interface ProductFAQJsonLdProps {
  faqs: Array<{ question: string; answer: string }>;
}

export function ProductFAQJsonLd({ faqs }: ProductFAQJsonLdProps) {
  if (!faqs || faqs.length === 0) return null;

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData, null, 2) }}
    />
  );
}
