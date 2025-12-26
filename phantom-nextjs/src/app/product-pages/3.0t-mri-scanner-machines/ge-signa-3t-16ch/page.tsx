/**
 * GE Signa 3.0T 16 Channel MRI Scanner Product Page
 * ==================================================
 * Created: December 27, 2025
 */

import { Metadata } from 'next';
import ProductPageTemplate from '@/components/product/ProductPageTemplate';
import { getProductById } from '@/data/products';

const productId = 'ge-signa-3t-16ch';

export const metadata: Metadata = {
  title: 'Refurbished GE Signa 3.0T 16Ch MRI Scanner - Phantom Healthcare',
  description: 'Reliable refurbished GE Signa 3.0T MRI with 16-channel system. Comprehensive imaging capabilities with professional support across India.',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://phantomhealthcare.com/product-pages/mri-scanner-machines/3.0t-mri-scanner-machines/ge-signa-3t-16ch',
    siteName: 'Phantom Healthcare',
    title: 'Refurbished GE Signa 3.0T 16 Channel MRI Scanner',
    description: 'Reliable refurbished GE Signa 3.0T MRI with 16-channel system.',
  },
  twitter: {
    card: 'summary_large_image',
  },
  alternates: {
    canonical: 'https://phantomhealthcare.com/product-pages/mri-scanner-machines/3.0t-mri-scanner-machines/ge-signa-3t-16ch',
  },
};

export default function GESigna3T16ChPage() {
  const product = getProductById(productId);
  if (!product) throw new Error(`Product not found: ${productId}`);
  return <ProductPageTemplate product={product} />;
}
