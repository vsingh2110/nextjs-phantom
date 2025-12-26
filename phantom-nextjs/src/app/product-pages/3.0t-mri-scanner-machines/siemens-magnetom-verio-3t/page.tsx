/**
 * Siemens Magnetom Verio 3T MRI Scanner Product Page
 * ===================================================
 * Created: December 24, 2025
 */

import { Metadata } from 'next';
import ProductPageTemplate from '@/components/product/ProductPageTemplate';
import { getProductById } from '@/data/products';

const productId = 'siemens-magnetom-verio-3t';

export const metadata: Metadata = {
  title: 'Refurbished Siemens Magnetom Verio 3T MRI - Phantom Healthcare',
  description: 'Premium refurbished Siemens Magnetom Verio 3T MRI with Tim 4G technology, 70cm bore. Expert refurbishment & comprehensive support across India.',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://phantomhealthcare.com/product-pages/mri-scanner-machines/3.0t-mri-scanner-machines/siemens-magnetom-verio-3t',
    siteName: 'Phantom Healthcare',
    title: 'Refurbished Siemens Magnetom Verio 3T MRI',
    description: 'Premium refurbished Siemens Magnetom Verio 3T MRI with Tim 4G technology.',
  },
  twitter: {
    card: 'summary_large_image',
  },
  alternates: {
    canonical: 'https://phantomhealthcare.com/product-pages/mri-scanner-machines/3.0t-mri-scanner-machines/siemens-magnetom-verio-3t',
  },
};

export default function SiemensMagnetomVerio3TPage() {
  const product = getProductById(productId);
  if (!product) throw new Error(`Product not found: ${productId}`);
  return <ProductPageTemplate product={product} />;
}
