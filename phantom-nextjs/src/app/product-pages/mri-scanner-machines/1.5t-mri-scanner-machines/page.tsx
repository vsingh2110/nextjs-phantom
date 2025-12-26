/**
 * 1.5T MRI Scanner Machines Category Page
 * ========================================
 * Created: December 26, 2025
 */

import { Metadata } from 'next';
import Link from 'next/link';
import { allProducts } from '@/data/products';
import ProductCategoryGrid from '@/components/product/ProductCategoryGrid';
import BreadcrumbJsonLd from '@/components/schemas/BreadcrumbJsonLd';

export const metadata: Metadata = {
  title: '1.5T MRI Scanners - Refurbished MRI Machines - Phantom',
  description: 'Premium refurbished 1.5T MRI scanners from GE and Siemens. Expert installation, comprehensive warranty & 24/7 AMC support across India.',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://phantomhealthcare.com/product-pages/mri-scanner-machines/1.5t-mri-scanner-machines',
    siteName: 'Phantom Healthcare',
    title: '1.5T MRI Scanners - Refurbished MRI Machines',
    description: 'Premium refurbished 1.5T MRI scanners with expert support',
  },
  alternates: {
    canonical: 'https://phantomhealthcare.com/product-pages/mri-scanner-machines/1.5t-mri-scanner-machines',
  },
};

export default function MRI15TCategory() {
  // Filter for 1.5T MRI products
  const mri15TProducts = allProducts.filter(
    (product) => product.category === 'mri-scanner' && product.subcategory === '1.5t'
  );

  const breadcrumbItems = [
    { name: 'Home', url: 'https://phantomhealthcare.com' },
    { name: 'Product Pages', url: 'https://phantomhealthcare.com/product-pages' },
    { name: 'MRI Scanners', url: 'https://phantomhealthcare.com/product-pages/mri-scanner-machines' },
    { name: '1.5T MRI Scanners', url: 'https://phantomhealthcare.com/product-pages/mri-scanner-machines/1.5t-mri-scanner-machines' },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} />

      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#2980b9] via-[#3498db] to-[#5dade2] py-12 md:py-16">
          <div className="w-full max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="mb-6" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-sm text-white/80">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li><span className="mx-2">›</span></li>
                <li>
                  <Link href="/product-pages" className="hover:text-white transition-colors">
                    Products
                  </Link>
                </li>
                <li><span className="mx-2">›</span></li>
                <li>
                  <Link href="/product-pages/mri-scanner-machines" className="hover:text-white transition-colors">
                    MRI Scanners
                  </Link>
                </li>
                <li><span className="mx-2">›</span></li>
                <li className="text-white font-medium">1.5T MRI Scanners</li>
              </ol>
            </nav>

            {/* Title and Description */}
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                1.5T MRI Scanners
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                Premium quality refurbished 1.5 Tesla MRI systems from leading brands GE Healthcare and Siemens Healthineers. 
                Ideal for comprehensive diagnostic imaging with excellent image quality and proven reliability.
              </p>
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-8 bg-blue-50">
          <div className="w-full max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Why Choose 1.5T MRI?</h3>
                <p className="text-gray-600 text-sm">
                  Optimal balance of image quality, clinical versatility, and cost-effectiveness for routine and advanced imaging applications.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Clinical Applications</h3>
                <p className="text-gray-600 text-sm">
                  Neuro, MSK, cardiac, abdominal, angiography, and more. Suitable for 80-90% of diagnostic imaging needs.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Support</h3>
                <p className="text-gray-600 text-sm">
                  Professional installation, comprehensive warranty, and 24/7 AMC support from experienced engineers across India.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid Section */}
        <section className="py-12 md:py-16">
          <div className="w-full max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Available 1.5T MRI Systems
            </h2>
            <ProductCategoryGrid products={mri15TProducts} category="1.5T MRI" />
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white py-12">
          <div className="w-full max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Need Help Selecting the Right 1.5T MRI?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Our MRI specialists can guide you through specifications, pricing, financing options, and help you choose the perfect system for your facility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-[#59913d] hover:bg-[#255a0a] text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                Request a Quote
              </Link>
              <a
                href="tel:+919876543210"
                className="bg-white border-2 border-[#59913d] text-[#59913d] hover:bg-[#59913d] hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                Call: +91 98765 43210
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
