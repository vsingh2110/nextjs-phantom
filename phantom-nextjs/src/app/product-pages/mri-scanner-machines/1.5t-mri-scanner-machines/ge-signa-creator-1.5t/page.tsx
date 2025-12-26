/**
 * GE Signa 1.5T Creator [25.2x] MRI Scanner Product Page
 * =======================================================
 * Created: December 27, 2025
 */

import { Metadata } from 'next';
import ProductPageTemplate from '@/components/product/ProductPageTemplate';
import { getProductById } from '@/data/products';

const productId = 'ge-signa-creator-1.5t';

export const metadata: Metadata = {
  title: 'Refurbished GE Signa 1.5T Creator MRI [25.2x] - Phantom',
  description: 'Reliable refurbished GE Signa 1.5T Creator MRI [25.2x] with 8-channel system. Cost-effective solution with comprehensive support across India.',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://phantomhealthcare.com/product-pages/mri-scanner-machines/1.5t-mri-scanner-machines/ge-signa-creator-1.5t',
    siteName: 'Phantom Healthcare',
    title: 'Refurbished GE Signa 1.5T Creator MRI Scanner',
    description: 'Reliable refurbished GE Signa 1.5T Creator MRI [25.2x] with 8-channel system.',
  },
  twitter: {
    card: 'summary_large_image',
  },
  alternates: {
    canonical: 'https://phantomhealthcare.com/product-pages/mri-scanner-machines/1.5t-mri-scanner-machines/ge-signa-creator-1.5t',
  },
};

export default function GESignaCreator15TPage() {
  const product = getProductById(productId);
  if (!product) throw new Error(`Product not found: ${productId}`);
  return <ProductPageTemplate product={product} />;
}
