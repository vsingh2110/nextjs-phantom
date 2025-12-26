/**
 * Refurbished Siemens MRI Scanner Machines Page
 * ==============================================
 * Category page showing ALL Siemens MRI products (3.0T and 1.5T)
 * Created: December 27, 2025
 */

import { Metadata } from 'next';
import Link from 'next/link';
import ProductCategoryGrid from '@/components/product/ProductCategoryGrid';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import { allProducts } from '@/data/products';

export const metadata: Metadata = {
  title: 'Refurbished Siemens MRI Scanner Machines - Phantom Healthcare',
  description: 'Premium refurbished Siemens MRI scanners - 3.0T & 1.5T systems. Magnetom Verio, Skyra, Spectra, Avanto, Aera, Essenza with comprehensive AMC support.',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://phantomhealthcare.com/product-pages/mri-scanner-machines/refurbished-siemens-mri-scanner-machines',
    siteName: 'Phantom Healthcare',
    title: 'Refurbished Siemens MRI Scanner Machines',
    description: 'Premium refurbished Siemens MRI scanners - 3.0T & 1.5T systems with Tim technology.',
  },
  alternates: {
    canonical: 'https://phantomhealthcare.com/product-pages/mri-scanner-machines/refurbished-siemens-mri-scanner-machines',
  },
};

export default function RefurbishedSiemensMRIPage() {
  // Define Siemens product order (from static site)
  const siemens3TOrder = [
    'siemens-magnetom-verio-3t',
    'siemens-magnetom-spectra-3t',
    'siemens-magnetom-skyra-3t',
  ];

  const siemens15TOrder = [
    'siemens-magnetom-essenza-1.5t-16ch',
    'siemens-magnetom-essenza-1.5t-8ch',
    'siemens-magnetom-avanto-1.5t',
  ];

  // Filter and sort Siemens 3.0T products
  const siemens3TProducts = allProducts
    .filter(p => p.brand === 'Siemens Healthineers' && p.subcategory === '3.0t')
    .sort((a, b) => {
      const indexA = siemens3TOrder.indexOf(a.id);
      const indexB = siemens3TOrder.indexOf(b.id);
      if (indexA === -1) return 1;
      if (indexB === -1) return -1;
      return indexA - indexB;
    });

  // Filter and sort Siemens 1.5T products
  const siemens15TProducts = allProducts
    .filter(p => p.brand === 'Siemens Healthineers' && p.subcategory === '1.5t')
    .sort((a, b) => {
      const indexA = siemens15TOrder.indexOf(a.id);
      const indexB = siemens15TOrder.indexOf(b.id);
      if (indexA === -1) return 1;
      if (indexB === -1) return -1;
      return indexA - indexB;
    });

  const breadcrumbItems = [
    { name: 'Home', url: 'https://phantomhealthcare.com' },
    { name: 'Products', url: 'https://phantomhealthcare.com/product-pages' },
    { name: 'MRI Scanner Machines', url: 'https://phantomhealthcare.com/product-pages/mri-scanner-machines' },
    { name: 'Siemens MRI Scanners', url: 'https://phantomhealthcare.com/product-pages/mri-scanner-machines/refurbished-siemens-mri-scanner-machines' },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-teal-600 to-cyan-700 text-white py-16">
          <div className="container mx-auto px-4">
            {/* Breadcrumb */}
            <nav className="mb-6 text-sm">
              <ol className="flex flex-wrap items-center gap-2">
                <li><Link href="/" className="hover:text-teal-200 transition-colors">Home</Link></li>
                <li className="text-teal-200">/</li>
                <li><Link href="/product-pages" className="hover:text-teal-200 transition-colors">Products</Link></li>
                <li className="text-teal-200">/</li>
                <li><Link href="/product-pages/mri-scanner-machines" className="hover:text-teal-200 transition-colors">MRI Scanners</Link></li>
                <li className="text-teal-200">/</li>
                <li className="font-semibold">Siemens MRI Scanners</li>
              </ol>
            </nav>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Refurbished Siemens MRI Scanner Machines
            </h1>
            <p className="text-xl text-teal-100 max-w-3xl">
              Premium refurbished Siemens Healthineers MRI systems featuring Tim technology. 
              3.0T and 1.5T field strengths with exceptional image quality, comprehensive warranty, and AMC support across India.
            </p>
          </div>
        </section>

        {/* Quick Links */}
        <section className="bg-white border-b border-gray-200 py-6 sticky top-0 z-10 shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="#siemens-3t-section" 
                className="px-6 py-2 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-colors font-medium"
              >
                Siemens 3.0T MRI Machines
              </a>
              <a 
                href="#siemens-15t-section" 
                className="px-6 py-2 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-colors font-medium"
              >
                Siemens 1.5T MRI Machines
              </a>
            </div>
          </div>
        </section>

        {/* Siemens 3.0T Section */}
        <section id="siemens-3t-section" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Siemens 3.0T MRI Machines
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                High-field 3.0 Tesla MRI systems from Siemens Healthineers featuring Tim 4G technology. 
                Superior image quality with advanced gradient performance for demanding clinical applications.
              </p>
            </div>
            
            <ProductCategoryGrid products={siemens3TProducts} />
          </div>
        </section>

        {/* Siemens 1.5T Section */}
        <section id="siemens-15t-section" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Siemens 1.5T MRI Machines
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Mid-field 1.5 Tesla MRI systems from Siemens Healthineers with Tim coil technology. 
                Versatile systems from compact Essenza to advanced Aera with 70cm Open Bore.
              </p>
            </div>
            
            <ProductCategoryGrid products={siemens15TProducts} />
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-16 bg-teal-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose Siemens MRI Scanners from Phantom Healthcare?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-2">Tim Technology</h3>
                <p className="text-gray-600">
                  Total imaging matrix technology enables seamless whole-body coverage with multiple coil elements
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold mb-2">Superior Gradients</h3>
                <p className="text-gray-600">
                  Advanced gradient systems (up to 50mT/m) for fast imaging and exceptional image quality
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">🛠️</div>
                <h3 className="text-xl font-semibold mb-2">Expert Service</h3>
                <p className="text-gray-600">
                  Comprehensive refurbishment, installation, and ongoing AMC support across India
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-teal-600 to-cyan-700 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Upgrade Your Imaging Capabilities?
            </h2>
            <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
              Contact our experts to discuss your requirements and get a customized quote
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-block bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-teal-50 transition-colors"
              >
                Contact Us
              </Link>
              <a 
                href="tel:+919899963601"
                className="inline-block bg-teal-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-400 transition-colors"
              >
                Call: +91 98999 63601
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
