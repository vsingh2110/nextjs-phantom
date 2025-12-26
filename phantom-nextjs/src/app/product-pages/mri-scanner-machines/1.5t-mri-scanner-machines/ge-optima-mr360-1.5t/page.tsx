/**
 * GE Optima MR360 1.5T MRI Scanner Product Page
 * ==============================================
 * Created: December 26, 2025
 */

import { Metadata } from 'next';
import ProductPageTemplate from '@/components/product/ProductPageTemplate';
import { getProductById } from '@/data/products';

const productId = 'ge-optima-mr360-1.5t';

export const metadata: Metadata = {
  title: 'Refurbished GE Optima MR360 1.5T MRI Scanner - Phantom',
  description: 'Advanced refurbished GE Optima MR360 1.5T MRI with GEM Suite applications. Expert installation & comprehensive AMC support across India.',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://phantomhealthcare.com/product-pages/mri-scanner-machines/1.5t-mri-scanner-machines/ge-optima-mr360-1.5t',
    siteName: 'Phantom Healthcare',
    title: 'Refurbished GE Optima MR360 1.5T MRI Scanner',
    description: 'Advanced refurbished GE Optima MR360 1.5T MRI',
  },
  twitter: {
    card: 'summary_large_image',
  },
  alternates: {
    canonical: 'https://phantomhealthcare.com/product-pages/mri-scanner-machines/1.5t-mri-scanner-machines/ge-optima-mr360-1.5t',
  },
};

export default function ProductPage() {
  const product = getProductById(productId);
  
  if (!product) {
    throw new Error(`Product with id "${productId}" not found`);
  }

  return <ProductPageTemplate product={product} />;
}
