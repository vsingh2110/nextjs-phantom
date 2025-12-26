/**
 * Refurbished GE MRI Scanner Machines Category Page
 * ==================================================
 * Created: December 26, 2025
 */

import { Metadata } from 'next';
import Link from 'next/link';
import { allProducts } from '@/data/products';
import ProductCategoryGrid from '@/components/product/ProductCategoryGrid';
import BreadcrumbJsonLd from '@/components/schemas/BreadcrumbJsonLd';

export const metadata: Metadata = {
  title: 'Refurbished GE MRI Scanners - Phantom Healthcare',
  description: 'Premium refurbished GE MRI scanners including Signa HDxt, Optima MR360, and Discovery models. Expert installation, warranty & AMC support across India.',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://phantomhealthcare.com/product-pages/refurbished-ge-mri-scanner-machines',
    siteName: 'Phantom Healthcare',
    title: 'Refurbished GE MRI Scanners',
    description: 'Premium refurbished GE MRI scanners with expert support',
  },
  alternates: {
    canonical: 'https://phantomhealthcare.com/product-pages/refurbished-ge-mri-scanner-machines',
  },
};

export default function GEMRICategory() {
  // Filter for GE MRI products
  const geMRIProducts = allProducts.filter(
    (product) => product.brand === 'GE Healthcare' && product.category === 'mri-scanner'
  );

  const breadcrumbItems = [
    { name: 'Home', url: 'https://phantomhealthcare.com' },
    { name: 'Product Pages', url: 'https://phantomhealthcare.com/product-pages' },
    { name: 'GE MRI Scanners', url: 'https://phantomhealthcare.com/product-pages/refurbished-ge-mri-scanner-machines' },
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
                <li className="text-white font-medium">GE MRI Scanners</li>
              </ol>
            </nav>

            {/* Title and Description */}
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Refurbished GE MRI Scanners
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                Premium quality refurbished GE Healthcare MRI systems including Signa, Optima, and Discovery series. 
                1.5T and 3.0T models with expert installation, comprehensive warranty, and 24/7 AMC support across India.
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid Section */}
        <section className="py-12 md:py-16">
          <div className="w-full max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
            <ProductCategoryGrid products={geMRIProducts} category="GE MRI" />

            {/* No products message */}
            {geMRIProducts.length === 0 && (
              <div className="text-center py-16">
                <h2 className="text-2xl font-bold text-gray-600 mb-4">Products Coming Soon</h2>
                <p className="text-gray-500 mb-8">
                  We are currently updating our GE MRI product catalog. Please check back soon or contact us for available inventory.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-[#59913d] hover:bg-[#255a0a] text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
                >
                  Contact Us for Availability
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white py-12">
          <div className="w-full max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Need Help Choosing the Right GE MRI Scanner?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Our experts can help you select the perfect GE MRI system for your facility's needs and budget.
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
