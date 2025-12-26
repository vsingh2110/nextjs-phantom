/**
 * GE 1.5T Explorer MRI Scanner Product Page
 * ==========================================
 * Created: December 27, 2025
 */

import { Metadata } from 'next';
import ProductPageTemplate from '@/components/product/ProductPageTemplate';
import { getProductById } from '@/data/products';

const productId = 'ge-signa-explorer-1.5t';

export const metadata: Metadata = {
  title: 'Refurbished GE 1.5T Explorer MRI Scanner - Phantom Healthcare',
  description: 'Dependable refurbished GE 1.5T Explorer MRI with 8-channel system. Reliable routine imaging with professional support across India.',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://phantomhealthcare.com/product-pages/mri-scanner-machines/1.5t-mri-scanner-machines/ge-signa-explorer-1.5t',
    siteName: 'Phantom Healthcare',
    title: 'Refurbished GE 1.5T Explorer MRI Scanner',
    description: 'Dependable refurbished GE 1.5T Explorer MRI with 8-channel system.',
  },
  twitter: {
    card: 'summary_large_image',
  },
  alternates: {
    canonical: 'https://phantomhealthcare.com/product-pages/mri-scanner-machines/1.5t-mri-scanner-machines/ge-signa-explorer-1.5t',
  },
};

export default function GEExplorer15TPage() {
  const product = getProductById(productId);
  if (!product) throw new Error(`Product not found: ${productId}`);
  return <ProductPageTemplate product={product} />;
}
