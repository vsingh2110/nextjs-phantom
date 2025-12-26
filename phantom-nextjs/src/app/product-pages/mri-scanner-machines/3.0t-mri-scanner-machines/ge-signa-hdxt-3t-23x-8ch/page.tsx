/**
 * GE Signa HDxt 3.0T [23x] 8 Channel MRI Scanner Product Page
 * ============================================================
 * Created: December 27, 2025
 */

import { Metadata } from 'next';
import ProductPageTemplate from '@/components/product/ProductPageTemplate';
import { getProductById } from '@/data/products';

const productId = 'ge-signa-hdxt-3t-23x-8ch';

export const metadata: Metadata = {
  title: 'Refurbished GE Signa HDxt 3.0T [23x] 8Ch - Phantom Healthcare',
  description: 'Budget-friendly refurbished GE Signa HDxt 3.0T MRI [23x] with 8-channel system. Expert refurbishment & support across India.',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://phantomhealthcare.com/product-pages/mri-scanner-machines/3.0t-mri-scanner-machines/ge-signa-hdxt-3t-23x-8ch',
    siteName: 'Phantom Healthcare',
    title: 'Refurbished GE Signa HDxt 3.0T [23x] 8 Channel MRI',
    description: 'Budget-friendly refurbished GE Signa HDxt 3.0T MRI [23x] with 8-channel system.',
  },
  twitter: {
    card: 'summary_large_image',
  },
  alternates: {
    canonical: 'https://phantomhealthcare.com/product-pages/mri-scanner-machines/3.0t-mri-scanner-machines/ge-signa-hdxt-3t-23x-8ch',
  },
};

export default function GESignaHDxt3T23x8ChPage() {
  const product = getProductById(productId);
  if (!product) throw new Error(`Product not found: ${productId}`);
  return <ProductPageTemplate product={product} />;
}
