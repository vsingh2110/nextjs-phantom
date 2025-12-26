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
  // Define GE product order (from static site)
  const ge3TOrder = [
    'ge-signa-3t-750w',
    'ge-signa-3t-750',
    'ge-signa-hdxt-3t-23x-16ch',
    'ge-signa-hdxt-3t-23x-8ch',
    'ge-signa-hdxt-3t-16x-16ch',
    'ge-signa-hdxt-3t-16x-8ch',
    'ge-signa-3t-16ch',
    'ge-signa-3t-8ch',
  ];

  const ge15TOrder = [
    'ge-signa-creator-1.5t',
    'ge-signa-explorer-1.5t',
    'ge-signa-optima-360-advance-1.5t',
    'ge-signa-hdxt-1.5t-23x-16ch',
    'ge-signa-hdxt-1.5t-23x-8ch',
    'ge-signa-hdxt-1.5t-16x-16ch',
    'ge-signa-hdxt-1.5t-16x-8ch',
    'ge-hde-1.5t',
  ];

  // Filter and sort GE 3.0T products
  const ge3TProducts = allProducts
    .filter(p => p.brand === 'GE Healthcare' && p.subcategory === '3.0t')
    .sort((a, b) => {
      const indexA = ge3TOrder.indexOf(a.id);
      const indexB = ge3TOrder.indexOf(b.id);
      if (indexA === -1) return 1;
      if (indexB === -1) return -1;
      return indexA - indexB;
    });

  // Filter and sort GE 1.5T products
  const ge15TProducts = allProducts
    .filter(p => p.brand === 'GE Healthcare' && p.subcategory === '1.5t')
    .sort((a, b) => {
      const indexA = ge15TOrder.indexOf(a.id);
      const indexB = ge15TOrder.indexOf(b.id);
      if (indexA === -1) return 1;
      if (indexB === -1) return -1;
      return indexA - indexB;
    });

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
                Refurbished GE MRI Scanner Machines
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8">
                Premium refurbished GE Healthcare MRI systems - from budget-friendly to advanced configurations. 
                3.0T and 1.5T field strengths with comprehensive warranty and AMC support across India.
              </p>
              
              {/* Quick Navigation Buttons */}
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <a 
                  href="#ge-3t-section" 
                  className="px-6 py-2 bg-white text-blue-600 rounded-full hover:bg-blue-50 transition-colors font-medium"
                >
                  GE 3.0T MRI Machines
                </a>
                <a 
                  href="#ge-15t-section" 
                  className="px-6 py-2 bg-white text-blue-600 rounded-full hover:bg-blue-50 transition-colors font-medium"
                >
                  GE 1.5T MRI Machines
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* GE 3.0T Section */}
        <section id="ge-3t-section" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-block bg-[#59913d] text-white px-8 py-3 rounded-lg mb-6">
                <h2 className="text-2xl md:text-3xl font-bold m-0">
                  GE 3.0T MRI Machines
                </h2>
              </div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                High-field 3.0 Tesla MRI systems from GE Healthcare. Superior image quality for advanced 
                clinical and research applications.
              </p>
            </div>
            
            <ProductCategoryGrid products={ge3TProducts} />
          </div>
        </section>

        {/* GE 1.5T Section */}
        <section id="ge-15t-section" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-block bg-[#59913d] text-white px-8 py-3 rounded-lg mb-6">
                <h2 className="text-2xl md:text-3xl font-bold m-0">
                  GE 1.5T MRI Machines
                </h2>
              </div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Mid-field 1.5 Tesla MRI systems from GE Healthcare. Versatile systems ideal for routine 
                to advanced imaging applications with excellent value.
              </p>
            </div>
            
            <ProductCategoryGrid products={ge15TProducts} />
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose GE MRI Scanners from Phantom Healthcare?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">✓</div>
                <h3 className="text-xl font-semibold mb-2">Proven Reliability</h3>
                <p className="text-gray-600">
                  GE Healthcare MRI systems are known for their robust design and long-term reliability
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold mb-2">Fast Imaging</h3>
                <p className="text-gray-600">
                  Advanced gradient technology and parallel imaging capabilities for efficient workflows
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">🛠️</div>
                <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
                <p className="text-gray-600">
                  Comprehensive installation, training, warranty, and 24/7 AMC support across India
                </p>
              </div>
            </div>
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
