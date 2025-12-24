/**
 * GE BrightSpeed 16 Slice CT Scanner Product Page
 * ================================================
 * Created: December 24, 2025
 */

import { Metadata } from 'next';
import ProductPageTemplate from '@/components/product/ProductPageTemplate';
import { getProductById } from '@/data/products';

const productId = 'ge-brightspeed-16';

export const metadata: Metadata = {
  title: 'Refurbished GE BrightSpeed 16 Slice CT Scanner - Phantom',
  description: 'Cost-effective refurbished GE BrightSpeed 16-slice CT scanner. Reliable diagnostic imaging with expert installation & AMC support across India.',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://phantomhealthcare.com/product-pages/refurbished-ct-scan-machines/ge-brightspeed-16',
    siteName: 'Phantom Healthcare',
    title: 'Refurbished GE BrightSpeed 16 Slice CT Scanner',
    description: 'Cost-effective refurbished GE BrightSpeed 16-slice CT scanner.',
  },
  twitter: {
    card: 'summary_large_image',
  },
  alternates: {
    canonical: 'https://phantomhealthcare.com/product-pages/refurbished-ct-scan-machines/ge-brightspeed-16',
  },
};

export default function GEBrightSpeed16Page() {
  const product = getProductById(productId);
  if (!product) throw new Error(`Product not found: ${productId}`);
  return <ProductPageTemplate product={product} />;
}
