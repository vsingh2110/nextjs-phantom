/**
 * GE 1.5T HDE MRI Scanner Product Page
 * =====================================
 * Created: December 27, 2025
 */

import { Metadata } from 'next';
import ProductPageTemplate from '@/components/product/ProductPageTemplate';
import { getProductById } from '@/data/products';

const productId = 'ge-hde-1.5t';

export const metadata: Metadata = {
  title: 'Refurbished GE 1.5T HDE MRI Scanner - Phantom Healthcare',
  description: 'Proven refurbished GE 1.5T HDE MRI with 8/16-channel options. Reliable Echospeed imaging with comprehensive support across India.',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://phantomhealthcare.com/product-pages/mri-scanner-machines/1.5t-mri-scanner-machines/ge-hde-1.5t',
    siteName: 'Phantom Healthcare',
    title: 'Refurbished GE 1.5T HDE MRI Scanner',
    description: 'Proven refurbished GE 1.5T HDE MRI with 8/16-channel options.',
  },
  twitter: {
    card: 'summary_large_image',
  },
  alternates: {
    canonical: 'https://phantomhealthcare.com/product-pages/mri-scanner-machines/1.5t-mri-scanner-machines/ge-hde-1.5t',
  },
};

export default function GEHDE15TPage() {
  const product = getProductById(productId);
  if (!product) throw new Error(`Product not found: ${productId}`);
  return <ProductPageTemplate product={product} />;
}
