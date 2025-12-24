/**
 * GE Revolution EVO 128 Slice CT Scanner Product Page
 * ====================================================
 * Created: December 24, 2025
 */

import { Metadata } from 'next';
import ProductPageTemplate from '@/components/product/ProductPageTemplate';
import { getProductById } from '@/data/products';

const productId = 'ge-revolution-evo-128';

export const metadata: Metadata = {
  title: 'Refurbished GE Revolution EVO 128 Slice CT - Phantom Healthcare',
  description: 'Premium refurbished GE Revolution EVO 128-slice CT with 0.28s rotation. One-beat cardiac imaging & advanced applications with AMC support in India.',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://phantomhealthcare.com/product-pages/refurbished-ct-scan-machines/ge-revolution-evo-128',
    siteName: 'Phantom Healthcare',
    title: 'Refurbished GE Revolution EVO 128 Slice CT',
    description: 'Premium refurbished GE Revolution EVO 128-slice CT with 0.28s rotation.',
  },
  twitter: {
    card: 'summary_large_image',
  },
  alternates: {
    canonical: 'https://phantomhealthcare.com/product-pages/refurbished-ct-scan-machines/ge-revolution-evo-128',
  },
};

export default function GERevolutionEVO128Page() {
  const product = getProductById(productId);
  if (!product) throw new Error(`Product not found: ${productId}`);
  return <ProductPageTemplate product={product} />;
}
