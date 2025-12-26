/**
 * GE Signa 1.5T Optima 360 Advance [25x] MRI Scanner Product Page
 * ================================================================
 * Created: December 27, 2025
 */

import { Metadata } from 'next';
import ProductPageTemplate from '@/components/product/ProductPageTemplate';
import { getProductById } from '@/data/products';

const productId = 'ge-signa-optima-360-advance-1.5t';

export const metadata: Metadata = {
  title: 'Refurbished GE Signa Optima 360 Advance 1.5T [25x] - Phantom',
  description: 'Advanced refurbished GE Signa Optima 360 Advance 1.5T MRI [25x] with 16-channel system. Superior imaging with comprehensive support in India.',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://phantomhealthcare.com/product-pages/mri-scanner-machines/1.5t-mri-scanner-machines/ge-signa-optima-360-advance-1.5t',
    siteName: 'Phantom Healthcare',
    title: 'Refurbished GE Signa Optima 360 Advance 1.5T MRI',
    description: 'Advanced refurbished GE Signa Optima 360 Advance 1.5T MRI [25x].',
  },
  twitter: {
    card: 'summary_large_image',
  },
  alternates: {
    canonical: 'https://phantomhealthcare.com/product-pages/mri-scanner-machines/1.5t-mri-scanner-machines/ge-signa-optima-360-advance-1.5t',
  },
};

export default function GESignaOptima360Advance15TPage() {
  const product = getProductById(productId);
  if (!product) throw new Error(`Product not found: ${productId}`);
  return <ProductPageTemplate product={product} />;
}
