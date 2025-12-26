/**
 * Siemens Magnetom Essenza 1.5T 8 Channel MRI Scanner Product Page
 * =================================================================
 * Created: December 27, 2025
 */

import { Metadata } from 'next';
import ProductPageTemplate from '@/components/product/ProductPageTemplate';
import { getProductById } from '@/data/products';

const productId = 'siemens-magnetom-essenza-1.5t-8ch';

export const metadata: Metadata = {
  title: 'Refurbished Siemens Magnetom Essenza 1.5T 8Ch MRI - Phantom',
  description: 'Budget-friendly refurbished Siemens Magnetom Essenza 1.5T MRI with 8-channel system. Compact design with professional support across India.',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://phantomhealthcare.com/product-pages/mri-scanner-machines/1.5t-mri-scanner-machines/siemens-magnetom-essenza-1.5t-8ch',
    siteName: 'Phantom Healthcare',
    title: 'Refurbished Siemens Magnetom Essenza 1.5T 8Ch MRI',
    description: 'Budget-friendly refurbished Siemens Magnetom Essenza 1.5T MRI with 8-channel system.',
  },
  twitter: {
    card: 'summary_large_image',
  },
  alternates: {
    canonical: 'https://phantomhealthcare.com/product-pages/mri-scanner-machines/1.5t-mri-scanner-machines/siemens-magnetom-essenza-1.5t-8ch',
  },
};

export default function SiemensMagnetomEssenza15T8ChPage() {
  const product = getProductById(productId);
  if (!product) throw new Error(`Product not found: ${productId}`);
  return <ProductPageTemplate product={product} />;
}
