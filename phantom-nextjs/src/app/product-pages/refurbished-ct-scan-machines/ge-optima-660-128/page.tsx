/**
 * GE Optima 660 128 Slice CT Scanner Product Page
 * ================================================
 * Created: December 24, 2025
 */

import { Metadata } from 'next';
import ProductPageTemplate from '@/components/product/ProductPageTemplate';
import { getProductById } from '@/data/products';

const productId = 'ge-optima-660-128';

export const metadata: Metadata = {
  title: 'Refurbished GE Optima 660 128 Slice CT Scanner - Phantom',
  description: 'Premium refurbished GE Optima 660 128-slice CT with advanced ASiR-V. Fast scanning & comprehensive applications with AMC support across India.',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://phantomhealthcare.com/product-pages/refurbished-ct-scan-machines/ge-optima-660-128',
    siteName: 'Phantom Healthcare',
    title: 'Refurbished GE Optima 660 128 Slice CT Scanner',
    description: 'Premium refurbished GE Optima 660 128-slice CT with advanced ASiR-V.',
  },
  twitter: {
    card: 'summary_large_image',
  },
  alternates: {
    canonical: 'https://phantomhealthcare.com/product-pages/refurbished-ct-scan-machines/ge-optima-660-128',
  },
};

export default function GEOptima660128Page() {
  const product = getProductById(productId);
  if (!product) throw new Error(`Product not found: ${productId}`);
  return <ProductPageTemplate product={product} />;
}
