/**
 * GE Optima 660 64 Slice CT Scanner Product Page
 * ===============================================
 * Created: December 24, 2025
 */

import { Metadata } from 'next';
import ProductPageTemplate from '@/components/product/ProductPageTemplate';
import { getProductById } from '@/data/products';

const productId = 'ge-optima-660-64';

export const metadata: Metadata = {
  title: 'Refurbished GE Optima 660 64 Slice CT Scanner - Phantom',
  description: 'Advanced refurbished GE Optima 660 64-slice CT with ASiR dose reduction. Expert refurbishment, installation & comprehensive AMC support in India.',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://phantomhealthcare.com/product-pages/refurbished-ct-scan-machines/ge-optima-660-64',
    siteName: 'Phantom Healthcare',
    title: 'Refurbished GE Optima 660 64 Slice CT Scanner',
    description: 'Advanced refurbished GE Optima 660 64-slice CT with ASiR dose reduction.',
  },
  twitter: {
    card: 'summary_large_image',
  },
  alternates: {
    canonical: 'https://phantomhealthcare.com/product-pages/refurbished-ct-scan-machines/ge-optima-660-64',
  },
};

export default function GEOptima66064Page() {
  const product = getProductById(productId);
  if (!product) throw new Error(`Product not found: ${productId}`);
  return <ProductPageTemplate product={product} />;
}
