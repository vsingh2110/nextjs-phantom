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
import FAQSection from '@/components/ui/FAQSection';

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
  // Define product order for GE CT scanners
  const geCTOrder = [
    'ge-brightspeed-16',
    'ge-optima-660-64',
    'ge-optima-660-128',
    'ge-revolution-evo-128',
  ];

  const siemensCTOrder = [
    'siemens-go-now-16',
    'siemens-go-now-32',
  ];

  // Filter and sort CT scanner products by brand
  const geCTProducts = allProducts
    .filter((product) => product.category === 'ct-scanner' && product.brand === 'GE Healthcare')
    .sort((a, b) => {
      const indexA = geCTOrder.indexOf(a.id);
      const indexB = geCTOrder.indexOf(b.id);
      if (indexA === -1) return 1;
      if (indexB === -1) return -1;
      return indexA - indexB;
    });

  const siemensCTProducts = allProducts
    .filter((product) => product.category === 'ct-scanner' && product.brand === 'Siemens Healthineers')
    .sort((a, b) => {
      const indexA = siemensCTOrder.indexOf(a.id);
      const indexB = siemensCTOrder.indexOf(b.id);
      if (indexA === -1) return 1;
      if (indexB === -1) return -1;
      return indexA - indexB;
    });

  const breadcrumbItems = [
    { name: 'Home', url: 'https://phantomhealthcare.com' },
    { name: 'Product Pages', url: 'https://phantomhealthcare.com/product-pages' },
    { name: 'CT Scanners', url: 'https://phantomhealthcare.com/product-pages/refurbished-ct-scan-machines' },
  ];

  const ctFaqs = [
    {
      question: 'What is a 16-Slice CT Scanner?',
      answer: 'A 16-slice CT scanner is a cost-effective imaging system ideal for routine diagnostics, emergency departments, and basic imaging centers. It provides reliable diagnostic imaging for standard clinical applications.',
    },
    {
      question: 'What are the advantages of 64-Slice CT Scanners?',
      answer: '64-slice CT scanners are versatile systems suitable for cardiac imaging, angiography, and advanced diagnostic applications. They offer faster scanning, better image quality, and more comprehensive clinical capabilities compared to 16-slice systems.',
    },
    {
      question: 'When should I choose a 128-Slice CT Scanner?',
      answer: '128-slice CT scanners are high-end systems designed for comprehensive diagnostics, advanced cardiac imaging, and complex cases. They provide superior image quality, ultra-fast scanning, and the most advanced clinical applications.',
    },
    {
      question: 'What support services does Phantom Healthcare provide?',
      answer: 'We provide professional installation, comprehensive warranty coverage, and 24/7 AMC (Annual Maintenance Contract) support from our experienced engineers. Our team ensures your CT scanner operates at peak performance.',
    },
    {
      question: 'Are refurbished CT scanners reliable?',
      answer: 'Yes, our refurbished CT scanners undergo rigorous testing and refurbishment processes. Each system is thoroughly inspected, serviced, and tested to meet manufacturer specifications before delivery.',
    },
    {
      question: 'Do you provide training for CT scanner operation?',
      answer: 'Yes, we provide comprehensive training for radiologists, technicians, and support staff on CT scanner operation, maintenance, and safety protocols.',
    },
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
            <div className="text-center mb-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Refurbished CT Scanners
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                Premium refurbished CT scanners from 16-slice to 128-slice systems. Expert installation, comprehensive warranty, and 24/7 AMC support across India.
              </p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#ge-ct-section"
                className="bg-white text-[#2980b9] hover:bg-white/90 font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                GE CT Scanners
              </a>
              <a
                href="#siemens-ct-section"
                className="bg-white text-[#16a085] hover:bg-white/90 font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                Siemens CT Scanners
              </a>
            </div>
          </div>
        </section>

        {/* GE CT Products Section */}
        <section id="ge-ct-section" className="py-12 md:py-16 bg-white scroll-mt-20">
          <div className="w-full max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="inline-block bg-[#59913d] text-white px-8 py-3 rounded-lg mb-6">
                <h2 className="text-2xl md:text-3xl font-bold m-0">
                  GE CT Scanners
                </h2>
              </div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                High-quality refurbished CT scanners from GE Healthcare with proven reliability and comprehensive imaging capabilities
              </p>
            </div>
            <ProductCategoryGrid products={geCTProducts} category="GE CT Scanners" />
          </div>
        </section>

        {/* Siemens CT Products Section */}
        <section id="siemens-ct-section" className="py-12 md:py-16 bg-gray-50 scroll-mt-20">
          <div className="w-full max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="inline-block bg-[#59913d] text-white px-8 py-3 rounded-lg mb-6">
                <h2 className="text-2xl md:text-3xl font-bold m-0">
                  Siemens CT Scanners
                </h2>
              </div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                Premium Siemens Healthineers CT systems with advanced imaging technology and efficient workflow
              </p>
            </div>
            <ProductCategoryGrid products={siemensCTProducts} category="Siemens CT Scanners" />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="w-full max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <FAQSection faqs={ctFaqs} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-50 py-12">
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