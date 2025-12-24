/**
 * GE Signa 3.0T 750W MRI Scanner Product Page
 * ============================================
 * Created: December 24, 2025
 */

import { Metadata } from 'next';
import ProductPageTemplate from '@/components/product/ProductPageTemplate';
import { getProductById } from '@/data/products';

const productId = 'ge-signa-3t-750w';

export const metadata: Metadata = {
  title: 'Refurbished GE Signa 3.0T 750W MRI Scanner - Phantom Healthcare',
  description: 'Premium refurbished GE Signa 3.0T 750W MRI scanner with 70cm wide bore, 32-channel capability. Expert installation & comprehensive AMC support across India.',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://phantomhealthcare.com/product-pages/mri-scanner-machines/3.0t-mri-scanner-machines/ge-signa-3t-750w',
    siteName: 'Phantom Healthcare',
    title: 'Refurbished GE Signa 3.0T 750W MRI Scanner',
    description: 'Premium refurbished GE Signa 3.0T 750W MRI scanner with 70cm wide bore, 32-channel capability.',
  },
  twitter: {
    card: 'summary_large_image',
  },
  alternates: {
    canonical: 'https://phantomhealthcare.com/product-pages/mri-scanner-machines/3.0t-mri-scanner-machines/ge-signa-3t-750w',
  },
};

export default function GESigna3T750WPage() {
  const product = getProductById(productId);
  if (!product) throw new Error(`Product not found: ${productId}`);
  return <ProductPageTemplate product={product} />;
}
