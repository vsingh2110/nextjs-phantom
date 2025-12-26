/**
 * Siemens Magnetom Skyra 3T MRI Scanner Product Page
 * ===================================================
 * Created: December 24, 2025
 */

import { Metadata } from 'next';
import ProductPageTemplate from '@/components/product/ProductPageTemplate';
import { getProductById } from '@/data/products';

const productId = 'siemens-magnetom-skyra-3t';

export const metadata: Metadata = {
  title: 'Refurbished Siemens Magnetom Skyra 3T MRI - Phantom Healthcare',
  description: 'State-of-the-art refurbished Siemens Magnetom Skyra 3T MRI with 128-channel capability. Premium refurbishment & comprehensive AMC support in India.',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://phantomhealthcare.com/product-pages/mri-scanner-machines/3.0t-mri-scanner-machines/siemens-magnetom-skyra-3t',
    siteName: 'Phantom Healthcare',
    title: 'Refurbished Siemens Magnetom Skyra 3T MRI',
    description: 'State-of-the-art refurbished Siemens Magnetom Skyra 3T MRI with 128-channel capability.',
  },
  twitter: {
    card: 'summary_large_image',
  },
  alternates: {
    canonical: 'https://phantomhealthcare.com/product-pages/mri-scanner-machines/3.0t-mri-scanner-machines/siemens-magnetom-skyra-3t',
  },
};

export default function SiemensMagnetomSkyra3TPage() {
  const product = getProductById(productId);
  if (!product) throw new Error(`Product not found: ${productId}`);
  return <ProductPageTemplate product={product} />;
}
