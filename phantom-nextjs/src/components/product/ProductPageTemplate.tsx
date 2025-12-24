/**
 * Product Page Template Component
 * ================================
 * Created: December 24, 2025
 * Purpose: Reusable template for all product detail pages
 * 
 * Features:
 * - Hero section with breadcrumb
 * - Product specifications table
 * - Features list
 * - Image gallery
 * - Quote request form
 * - Related products
 * - FAQs section
 * - Complete SEO schemas (Product, Breadcrumb, FAQ)
 */

import { Product } from '@/types/product';
import Image from 'next/image';
import Link from 'next/link';
import { ProductJsonLd, ProductFAQJsonLd } from '@/components/seo/ProductJsonLd';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import ProductQuoteForm from '@/components/product/ProductQuoteForm';
import { getRelatedProducts } from '@/data/products';

interface ProductPageTemplateProps {
  product: Product;
}

export default function ProductPageTemplate({ product }: ProductPageTemplateProps) {
  const relatedProducts = getRelatedProducts(product.id);

  // Breadcrumb items
  const breadcrumbItems = [
    { name: 'Home', url: 'https://phantomhealthcare.com' },
    { name: 'Products', url: 'https://phantomhealthcare.com/product-pages' },
    { 
      name: getCategoryName(product.category), 
      url: `https://phantomhealthcare.com/product-pages/${getCategorySlug(product.category)}` 
    },
    { name: product.name, url: `https://phantomhealthcare.com${product.urlPath}` },
  ];

  return (
    <>
      {/* JSON-LD Schemas */}
      <ProductJsonLd product={product} />
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <ProductFAQJsonLd faqs={product.faqs} />

      {/* Hero Section with Breadcrumb */}
      <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 pt-24 pb-12">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
        
        <div className="relative w-full max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center space-x-2 text-sm">
              <li>
                <Link href="/" className="text-blue-200 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-blue-300">/</li>
              <li>
                <Link href="/product-pages" className="text-blue-200 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li className="text-blue-300">/</li>
              <li>
                <span className="text-blue-200">{getCategoryName(product.category)}</span>
              </li>
              <li className="text-blue-300">/</li>
              <li className="text-white font-medium">{product.name}</li>
            </ol>
          </nav>

          {/* Hero Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Product Info */}
            <div>
              {/* Badge */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-block px-4 py-1 bg-blue-500/20 text-blue-200 rounded-full text-sm font-medium border border-blue-400/30">
                  {product.condition === 'refurbished' ? 'Refurbished' : 'Brand New'}
                </span>
                <span className={`inline-block px-4 py-1 rounded-full text-sm font-medium border ${
                  product.availability === 'Available' 
                    ? 'bg-green-500/20 text-green-200 border-green-400/30'
                    : product.availability === 'Coming Soon'
                    ? 'bg-yellow-500/20 text-yellow-200 border-yellow-400/30'
                    : 'bg-red-500/20 text-red-200 border-red-400/30'
                }`}>
                  {product.availability}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                {product.fullName || product.name}
              </h1>
              
              {product.shortDescription && (
                <p className="text-lg md:text-xl text-blue-100 mb-6">
                  {product.shortDescription}
                </p>
              )}

              {/* Key Highlights */}
              {product.highlights && product.highlights.length > 0 && (
                <div className="flex flex-wrap gap-3 mb-6">
                  {product.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center text-white">
                      <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#quote-form" 
                  className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Request Quote
                </a>
                <a 
                  href="tel:+919899963601" 
                  className="inline-block px-8 py-4 bg-white hover:bg-gray-100 text-blue-900 font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Call Now
                </a>
              </div>
            </div>

            {/* Right: Product Image */}
            <div className="relative">
              <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={product.mainImage.src}
                  alt={product.mainImage.alt}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              {product.mainImage.caption && (
                <p className="text-center text-blue-200 mt-4 text-sm">
                  {product.mainImage.caption}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="w-full max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Description */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Product Overview
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {product.description}
          </p>
        </section>

        {/* Specifications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Technical Specifications
          </h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody className="divide-y divide-gray-200">
                  {product.specifications.map((spec, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900 w-1/3">
                        {spec.label}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.features.map((feature, index) => (
              <div key={index} className="flex items-start bg-blue-50 p-4 rounded-lg">
                <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-800">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Applications */}
        {product.applications && product.applications.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Clinical Applications
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {product.applications.map((app, index) => (
                <div key={index} className="bg-gradient-to-br from-indigo-50 to-blue-50 p-4 rounded-lg text-center">
                  <p className="text-gray-800 font-medium">{app}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Site Requirements */}
        {product.siteRequirements && product.siteRequirements.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Site Requirements
            </h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <ul className="space-y-3">
                {product.siteRequirements.map((req, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-amber-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-800">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </div>

      {/* Quote Form */}
      <div id="quote-form">
        <ProductQuoteForm productName={product.name} productId={product.id} />
      </div>

      {/* FAQs */}
      {product.faqs && product.faqs.length > 0 && (
        <section className="w-full max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {product.faqs.map((faq, index) => (
              <details key={index} className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden group">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:bg-blue-50 transition-colors flex justify-between items-center">
                  <span>{faq.question}</span>
                  <svg className="w-5 h-5 text-blue-600 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 py-4 bg-gray-50 text-gray-700 border-t border-gray-200">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>
      )}

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="bg-gray-100 py-16">
          <div className="w-full max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <Link 
                  key={relatedProduct.id} 
                  href={relatedProduct.urlPath}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200"
                >
                  <div className="relative h-64">
                    <Image
                      src={relatedProduct.mainImage.src}
                      alt={relatedProduct.mainImage.alt}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {relatedProduct.name}
                    </h3>
                    {relatedProduct.shortDescription && (
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {relatedProduct.shortDescription}
                      </p>
                    )}
                    <span className="inline-block mt-4 text-blue-600 font-medium hover:text-blue-700">
                      Learn More →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

// Helper functions
function getCategoryName(category: string): string {
  const categoryMap: Record<string, string> = {
    'mri-scanner': 'MRI Scanners',
    'ct-scanner': 'CT Scanners',
    'pet-ct': 'PET-CT Scanners',
    'cath-lab': 'Cath Lab Machines',
    'gamma-camera': 'Gamma Camera',
    'bone-densitometer': 'Bone Densitometer',
  };
  return categoryMap[category] || category;
}

function getCategorySlug(category: string): string {
  const slugMap: Record<string, string> = {
    'mri-scanner': 'mri-scanner-machines',
    'ct-scanner': 'refurbished-ct-scan-machines',
    'pet-ct': 'refurbished-pet-ct-scanner-machines',
    'cath-lab': 'refurbished-cath-lab-machines',
    'gamma-camera': 'refurbished-gamma-camera-spect-system-machine',
    'bone-densitometer': 'refurbished-bone-densitometer-dexa',
  };
  return slugMap[category] || category;
}
