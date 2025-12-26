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
import FAQSection from '@/components/ui/FAQSection';

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
  // Define product order (from static site)
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

  const siemens15TOrder = [
    'siemens-magnetom-essenza-1.5t-16ch',
    'siemens-magnetom-essenza-1.5t-8ch',
    'siemens-magnetom-avanto-1.5t',
  ];

  // Filter and sort for 1.5T MRI products by brand
  const ge15TProducts = allProducts
    .filter((product) => product.category === 'mri-scanner' && product.subcategory === '1.5t' && product.brand === 'GE Healthcare')
    .sort((a, b) => {
      const indexA = ge15TOrder.indexOf(a.id);
      const indexB = ge15TOrder.indexOf(b.id);
      if (indexA === -1) return 1;
      if (indexB === -1) return -1;
      return indexA - indexB;
    });
  
  const siemens15TProducts = allProducts
    .filter((product) => product.category === 'mri-scanner' && product.subcategory === '1.5t' && product.brand === 'Siemens Healthineers')
    .sort((a, b) => {
      const indexA = siemens15TOrder.indexOf(a.id);
      const indexB = siemens15TOrder.indexOf(b.id);
      if (indexA === -1) return 1;
      if (indexB === -1) return -1;
      return indexA - indexB;
    });

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

        {/* GE 1.5T Products Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="w-full max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="inline-block bg-[#59913d] text-white px-8 py-3 rounded-lg mb-6">
                <h2 className="text-2xl md:text-3xl font-bold m-0">
                  GE 1.5T MRI Machines
                </h2>
              </div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                Versatile 1.5T systems from GE Healthcare with proven reliability and comprehensive clinical capabilities
              </p>
            </div>
            <ProductCategoryGrid products={ge15TProducts} category="GE 1.5T MRI" />
          </div>
        </section>

        {/* Siemens 1.5T Products Section */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="w-full max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="inline-block bg-[#59913d] text-white px-8 py-3 rounded-lg mb-6">
                <h2 className="text-2xl md:text-3xl font-bold m-0">
                  Siemens 1.5T MRI Machines
                </h2>
              </div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                Premium 1.5T systems from Siemens Healthineers featuring Tim technology and excellent image quality
              </p>
            </div>
            <ProductCategoryGrid products={siemens15TProducts} category="Siemens 1.5T MRI" />
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection
          title="Frequently Asked Questions - 1.5T MRI"
          faqs={[
            {
              question: 'Why Choose 1.5T MRI over 3.0T?',
              answer: '1.5T MRI offers an optimal balance of image quality, clinical versatility, and cost-effectiveness. It is suitable for 80-90% of diagnostic imaging needs including neuro, MSK, cardiac, and abdominal studies. It also has lower operational costs and is ideal for routine clinical applications.',
            },
            {
              question: 'What are the clinical applications of 1.5T MRI?',
              answer: '1.5T MRI systems are highly versatile and can perform neurological imaging, musculoskeletal studies, cardiac imaging, abdominal and pelvic imaging, angiography, whole body imaging, and more. They are suitable for both routine and advanced diagnostic applications.',
            },
            {
              question: 'What brands of 1.5T MRI do you offer?',
              answer: 'We offer premium refurbished 1.5T MRI systems from leading manufacturers GE Healthcare (Signa series, Optima series, Discovery) and Siemens Healthineers (Magnetom Avanto, Essenza with Tim technology).',
            },
            {
              question: 'What support do you provide with installation?',
              answer: 'We provide comprehensive support including professional installation by expert engineers, site preparation guidance, 12-month warranty, and 24/7 AMC (Annual Maintenance Contract) support across India. Our team ensures your MRI system is fully operational and optimized.',
            },
            {
              question: 'Are your refurbished MRI systems reliable?',
              answer: 'Yes, all our refurbished 1.5T MRI systems undergo rigorous testing, refurbishment by certified engineers, and quality checks. We provide 12-month comprehensive warranty and ongoing AMC support to ensure reliable long-term operation.',
            },
          ]}
          variant="white"
        />

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
