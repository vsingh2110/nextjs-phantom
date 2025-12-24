/**
 * Product Type Definitions
 * ========================
 * Created: December 24, 2025
 * Purpose: Type-safe product data structure for medical imaging equipment
 */

export type ProductCategory = 
  | 'mri-scanner'
  | 'ct-scanner'
  | 'pet-ct'
  | 'cath-lab'
  | 'gamma-camera'
  | 'bone-densitometer';

export type ProductBrand = 
  | 'GE Healthcare'
  | 'Siemens Healthineers'
  | 'Philips Healthcare'
  | 'Toshiba Medical'
  | 'Canon Medical';

export type ProductCondition = 'refurbished' | 'brand-new' | 'pre-owned';

export type ProductAvailability = 'Available' | 'Coming Soon' | 'Out of Stock' | 'On Request';

export interface ProductSpecification {
  label: string;
  value: string;
}

export interface ProductFAQ {
  question: string;
  answer: string;
}

export interface ProductImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface ProductReview {
  organization: string;
  rating: number;
  comment: string;
  date?: string;
}

export interface Product {
  // Identifiers
  id: string; // URL-friendly slug
  sku?: string;
  
  // Basic Info
  name: string;
  fullName?: string; // Extended name for display
  brand: ProductBrand;
  model: string;
  category: ProductCategory;
  subcategory?: string;
  condition: ProductCondition;
  
  // Content
  description: string;
  shortDescription?: string;
  features: string[];
  
  // Technical
  specifications: ProductSpecification[];
  
  // Media
  mainImage: ProductImage;
  gallery?: ProductImage[];
  brochureUrl?: string;
  videoUrl?: string;
  
  // Availability & Pricing
  availability: ProductAvailability;
  priceOnRequest: boolean;
  estimatedPrice?: string;
  
  // SEO & Reviews
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
  reviews?: ProductReview[];
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
  
  // FAQs
  faqs: ProductFAQ[];
  
  // Relations
  relatedProducts?: string[]; // Array of product IDs
  
  // Additional
  highlights?: string[];
  applications?: string[];
  siteRequirements?: string[];
  warranty?: string;
  
  // URLs
  urlPath: string; // Full URL path: /product-pages/category/product-id
}

export interface ProductCategoryInfo {
  id: string;
  name: string;
  description: string;
  icon?: string;
  urlPath: string;
  productCount: number;
}
