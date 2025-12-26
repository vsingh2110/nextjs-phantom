/**
 * Siemens Magnetom Avanto 1.5T MRI Scanner Product Page
 * ======================================================
 * Created: December 26, 2025
 */

import { Metadata } from 'next';
import ProductPageTemplate from '@/components/product/ProductPageTemplate';
import { getProductById } from '@/data/products';

const productId = 'siemens-magnetom-avanto-1.5t';

export const metadata: Metadata = {
  title: 'Refurbished Siemens Magnetom Avanto 1.5T MRI - Phantom',
  description: 'Premium refurbished Siemens Magnetom Avanto 1.5T MRI with Tim technology. Expert installation & comprehensive AMC support across India.',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://phantomhealthcare.com/product-pages/mri-scanner-machines/1.5t-mri-scanner-machines/siemens-magnetom-avanto-1.5t',
    siteName: 'Phantom Healthcare',
    title: 'Refurbished Siemens Magnetom Avanto 1.5T MRI',
    description: 'Premium refurbished Siemens Magnetom Avanto 1.5T MRI',
  },
  twitter: {
    card: 'summary_large_image',
  },
  alternates: {
    canonical: 'https://phantomhealthcare.com/product-pages/mri-scanner-machines/1.5t-mri-scanner-machines/siemens-magnetom-avanto-1.5t',
  },
};

export default function ProductPage() {
  const product = getProductById(productId);
  
  if (!product) {
    throw new Error(`Product with id "${productId}" not found`);
  }

  return <ProductPageTemplate product={product} />;
}
