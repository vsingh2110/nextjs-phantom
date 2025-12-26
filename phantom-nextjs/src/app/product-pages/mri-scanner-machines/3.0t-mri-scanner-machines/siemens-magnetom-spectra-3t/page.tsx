/**
 * Siemens Magnetom Spectra 3.0T MRI Scanner Product Page
 * =======================================================
 * Created: December 27, 2025
 */

import { Metadata } from 'next';
import ProductPageTemplate from '@/components/product/ProductPageTemplate';
import { getProductById } from '@/data/products';

const productId = 'siemens-magnetom-spectra-3t';

export const metadata: Metadata = {
  title: 'Refurbished Siemens Magnetom Spectra 3T MRI - Phantom Healthcare',
  description: 'Premium refurbished Siemens Magnetom Spectra 3T MRI with 50mT/m gradients, 32-channel capability. Expert refurbishment & AMC support across India.',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://phantomhealthcare.com/product-pages/mri-scanner-machines/3.0t-mri-scanner-machines/siemens-magnetom-spectra-3t',
    siteName: 'Phantom Healthcare',
    title: 'Refurbished Siemens Magnetom Spectra 3T MRI Scanner',
    description: 'Premium refurbished Siemens Magnetom Spectra 3T MRI with 50mT/m gradients.',
  },
  twitter: {
    card: 'summary_large_image',
  },
  alternates: {
    canonical: 'https://phantomhealthcare.com/product-pages/mri-scanner-machines/3.0t-mri-scanner-machines/siemens-magnetom-spectra-3t',
  },
};

export default function SiemensMagnetomSpectra3TPage() {
  const product = getProductById(productId);
  if (!product) throw new Error(`Product not found: ${productId}`);
  return <ProductPageTemplate product={product} />;
}
