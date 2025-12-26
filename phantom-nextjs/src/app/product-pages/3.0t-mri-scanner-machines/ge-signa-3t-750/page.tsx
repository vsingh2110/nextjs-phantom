/**
 * GE Signa 3.0T 750 MRI Scanner Product Page
 * ===========================================
 * Created: December 24, 2025
 */

import { Metadata } from 'next';
import ProductPageTemplate from '@/components/product/ProductPageTemplate';
import { getProductById } from '@/data/products';

const productId = 'ge-signa-3t-750';

export const metadata: Metadata = {
  title: 'Refurbished GE Signa 3.0T 750 MRI Scanner - Phantom Healthcare',
  description: 'High-performance refurbished GE Signa 3.0T 750 MRI with 32-channel system. Professional refurbishment, installation & AMC support across India.',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://phantomhealthcare.com/product-pages/mri-scanner-machines/3.0t-mri-scanner-machines/ge-signa-3t-750',
    siteName: 'Phantom Healthcare',
    title: 'Refurbished GE Signa 3.0T 750 MRI Scanner',
    description: 'High-performance refurbished GE Signa 3.0T 750 MRI with 32-channel system.',
  },
  twitter: {
    card: 'summary_large_image',
  },
  alternates: {
    canonical: 'https://phantomhealthcare.com/product-pages/mri-scanner-machines/3.0t-mri-scanner-machines/ge-signa-3t-750',
  },
};

export default function GESigna3T750Page() {
  const product = getProductById(productId);
  if (!product) throw new Error(`Product not found: ${productId}`);
  return <ProductPageTemplate product={product} />;
}
