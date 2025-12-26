/**
 * GE Signa HDxt 1.5T MRI Scanner Product Page
 * ============================================
 * Created: December 26, 2025
 */

import { Metadata } from 'next';
import ProductPageTemplate from '@/components/product/ProductPageTemplate';
import { getProductById } from '@/data/products';

const productId = 'ge-signa-hdxt-1.5t';

export const metadata: Metadata = {
  title: 'Refurbished GE Signa HDxt 1.5T MRI Scanner - Phantom',
  description: 'Reliable refurbished GE Signa HDxt 1.5T MRI scanner with 32-channel capability. Expert installation & comprehensive AMC support across India.',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://phantomhealthcare.com/product-pages/mri-scanner-machines/1.5t-mri-scanner-machines/ge-signa-hdxt-1.5t',
    siteName: 'Phantom Healthcare',
    title: 'Refurbished GE Signa HDxt 1.5T MRI Scanner',
    description: 'Reliable refurbished GE Signa HDxt 1.5T MRI scanner',
  },
  twitter: {
    card: 'summary_large_image',
  },
  alternates: {
    canonical: 'https://phantomhealthcare.com/product-pages/mri-scanner-machines/1.5t-mri-scanner-machines/ge-signa-hdxt-1.5t',
  },
};

export default function ProductPage() {
  const product = getProductById(productId);
  
  if (!product) {
    throw new Error(`Product with id "${productId}" not found`);
  }

  return <ProductPageTemplate product={product} />;
}
