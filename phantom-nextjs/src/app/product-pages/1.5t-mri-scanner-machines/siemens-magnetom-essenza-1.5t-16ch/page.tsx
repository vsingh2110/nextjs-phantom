/**
 * Siemens Magnetom Essenza 1.5T 16 Channel MRI Scanner Product Page
 * ==================================================================
 * Created: December 27, 2025
 */

import { Metadata } from 'next';
import ProductPageTemplate from '@/components/product/ProductPageTemplate';
import { getProductById } from '@/data/products';

const productId = 'siemens-magnetom-essenza-1.5t-16ch';

export const metadata: Metadata = {
  title: 'Refurbished Siemens Magnetom Essenza 1.5T 16Ch MRI - Phantom',
  description: 'Compact refurbished Siemens Magnetom Essenza 1.5T MRI with 16-channel system. Space-saving design with professional support across India.',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://phantomhealthcare.com/product-pages/mri-scanner-machines/1.5t-mri-scanner-machines/siemens-magnetom-essenza-1.5t-16ch',
    siteName: 'Phantom Healthcare',
    title: 'Refurbished Siemens Magnetom Essenza 1.5T 16Ch MRI',
    description: 'Compact refurbished Siemens Magnetom Essenza 1.5T MRI with 16-channel system.',
  },
  twitter: {
    card: 'summary_large_image',
  },
  alternates: {
    canonical: 'https://phantomhealthcare.com/product-pages/mri-scanner-machines/1.5t-mri-scanner-machines/siemens-magnetom-essenza-1.5t-16ch',
  },
};

export default function SiemensMagnetomEssenza15T16ChPage() {
  const product = getProductById(productId);
  if (!product) throw new Error(`Product not found: ${productId}`);
  return <ProductPageTemplate product={product} />;
}
