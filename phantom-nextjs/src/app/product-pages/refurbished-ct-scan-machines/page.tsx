/**
 * Refurbished CT Scan Machines Category Page
 * ===========================================
 * Created: December 26, 2025
 */

import { Metadata } from 'next';
import Link from 'next/link';
import { allProducts } from '@/data/products';
import ProductCategoryGrid from '@/components/product/ProductCategoryGrid';
import BreadcrumbJsonLd from '@/components/schemas/BreadcrumbJsonLd';

export const metadata: Metadata = {
  title: 'Refurbished CT Scanners - 16 to 128 Slice CT Machines - Phantom',
  description: 'Premium refurbished CT scanners from GE, Siemens, and Philips. 16-slice to 128-slice systems with expert installation & AMC support across India.',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://phantomhealthcare.com/product-pages/refurbished-ct-scan-machines',
    siteName: 'Phantom Healthcare',
    title: 'Refurbished CT Scanners - Multi-Slice CT Machines',
    description: 'Premium refurbished CT scanners with expert support',
  },
  alternates: {
    canonical: 'https://phantomhealthcare.com/product-pages/refurbished-ct-scan-machines',
  },
};

export default function CTScannerCategory() {
  // Filter for CT scanner products
  const ctProducts = allProducts.filter(
    (product) => product.category === 'ct-scanner'
  );

  const breadcrumbItems = [
    { name: 'Home', url: 'https://phantomhealthcare.com' },
    { name: 'Product Pages', url: 'https://phantomhealthcare.com/product-pages' },
    { name: 'CT Scanners', url: 'https://phantomhealthcare.com/product-pages/refurbished-ct-scan-machines' },
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
                <li className="text-white font-medium">CT Scanners</li>
              </ol>
            </nav>

            {/* Title and Description */}
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Refurbished CT Scanners
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                Premium quality refurbished CT scanners from leading brands GE Healthcare, Siemens Healthineers, and Philips. 
                16-slice to 128-slice systems for comprehensive diagnostic imaging applications.
              </p>
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-8 bg-blue-50">
          <div className="w-full max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">16-Slice CT</h3>
                <p className="text-gray-600 text-sm">
                  Cost-effective for routine diagnostics, emergency departments, and basic imaging centers.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">64-Slice CT</h3>
                <p className="text-gray-600 text-sm">
                  Versatile systems for cardiac imaging, angiography, and advanced diagnostic applications.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">128-Slice CT</h3>
                <p className="text-gray-600 text-sm">
                  High-end systems for comprehensive diagnostics, advanced cardiac, and complex cases.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Support</h3>
                <p className="text-gray-600 text-sm">
                  Professional installation, warranty, and 24/7 AMC support from experienced engineers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid Section */}
        <section className="py-12 md:py-16">
          <div className="w-full max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Available CT Scanner Systems
            </h2>
            <ProductCategoryGrid products={ctProducts} category="CT Scanners" />
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white py-12">
          <div className="w-full max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Need Help Choosing the Right CT Scanner?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Our CT specialists can help you select the perfect system based on your clinical needs, patient volume, and budget.
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
