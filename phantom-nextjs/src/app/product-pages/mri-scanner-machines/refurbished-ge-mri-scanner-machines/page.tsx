/**
 * Refurbished GE MRI Scanner Machines Page
 * ========================================
 * Category page showing ALL GE MRI products (3.0T and 1.5T)
 * Created: December 27, 2025
 */

import { Metadata } from 'next';
import Link from 'next/link';
import ProductCategoryGrid from '@/components/product/ProductCategoryGrid';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import { allProducts } from '@/data/products';

export const metadata: Metadata = {
  title: 'Refurbished GE MRI Scanner Machines - Phantom Healthcare',
  description: 'Premium refurbished GE MRI scanners - 3.0T & 1.5T systems. Signa, HDxt, Optima models with comprehensive AMC support across India.',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://phantomhealthcare.com/product-pages/mri-scanner-machines/refurbished-ge-mri-scanner-machines',
    siteName: 'Phantom Healthcare',
    title: 'Refurbished GE MRI Scanner Machines',
    description: 'Premium refurbished GE MRI scanners - 3.0T & 1.5T systems.',
  },
  alternates: {
    canonical: 'https://phantomhealthcare.com/product-pages/mri-scanner-machines/refurbished-ge-mri-scanner-machines',
  },
};

export default function RefurbishedGEMRIPage() {
  // Filter GE 3.0T products
  const ge3TProducts = allProducts.filter(
    p => p.brand === 'GE Healthcare' && p.subcategory === '3.0t'
  );

  // Filter GE 1.5T products
  const ge15TProducts = allProducts.filter(
    p => p.brand === 'GE Healthcare' && p.subcategory === '1.5t'
  );

  const breadcrumbItems = [
    { name: 'Home', url: 'https://phantomhealthcare.com' },
    { name: 'Products', url: 'https://phantomhealthcare.com/product-pages' },
    { name: 'MRI Scanner Machines', url: 'https://phantomhealthcare.com/product-pages/mri-scanner-machines' },
    { name: 'GE MRI Scanners', url: 'https://phantomhealthcare.com/product-pages/mri-scanner-machines/refurbished-ge-mri-scanner-machines' },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
          <div className="container mx-auto px-4">
            {/* Breadcrumb */}
            <nav className="mb-6 text-sm">
              <ol className="flex flex-wrap items-center gap-2">
                <li><Link href="/" className="hover:text-blue-200 transition-colors">Home</Link></li>
                <li className="text-blue-200">/</li>
                <li><Link href="/product-pages" className="hover:text-blue-200 transition-colors">Products</Link></li>
                <li className="text-blue-200">/</li>
                <li><Link href="/product-pages/mri-scanner-machines" className="hover:text-blue-200 transition-colors">MRI Scanners</Link></li>
                <li className="text-blue-200">/</li>
                <li className="font-semibold">GE MRI Scanners</li>
              </ol>
            </nav>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Refurbished GE MRI Scanner Machines
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              Premium refurbished GE Healthcare MRI systems - from budget-friendly to advanced configurations. 
              3.0T and 1.5T field strengths with comprehensive warranty and AMC support across India.
            </p>
          </div>
        </section>

        {/* Quick Links */}
        <section className="bg-white border-b border-gray-200 py-6 sticky top-0 z-10 shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="#ge-3t-section" 
                className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-medium"
              >
                GE 3.0T MRI Machines
              </a>
              <a 
                href="#ge-15t-section" 
                className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-medium"
              >
                GE 1.5T MRI Machines
              </a>
            </div>
          </div>
        </section>

        {/* GE 3.0T Section */}
        <section id="ge-3t-section" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            {/* Simple Text Subheading */}
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              GE 3.0T MRI Machine
            </h2>
            
            {/* Section Header */}
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
            {/* Simple Text Subheading */}
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              GE 1.5T MRI Machine
            </h2>
            
            {/* Section Header */}
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
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="text-xl font-semibold mb-2">Complete Refurbishment</h3>
                <p className="text-gray-600">
                  Comprehensive refurbishment process ensuring like-new performance and reliability
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">📞</div>
                <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                <p className="text-gray-600">
                  Expert technical support and AMC services across India for uninterrupted operations
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Upgrade Your Imaging Capabilities?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact our experts to discuss your requirements and get a customized quote
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Contact Us
              </Link>
              <a 
                href="tel:+919899963601"
                className="inline-block bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 transition-colors"
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
