/**
 * 3.0T MRI Scanner Machines Category Page
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
  title: '3.0T MRI Scanners - High-Field MRI Machines - Phantom',
  description: 'Premium refurbished 3.0T high-field MRI scanners from GE and Siemens. Superior image quality for advanced diagnostic imaging across India.',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://phantomhealthcare.com/product-pages/mri-scanner-machines/3.0t-mri-scanner-machines',
    siteName: 'Phantom Healthcare',
    title: '3.0T MRI Scanners - High-Field MRI Machines',
    description: 'Premium refurbished 3.0T high-field MRI scanners',
  },
  alternates: {
    canonical: 'https://phantomhealthcare.com/product-pages/3.0t-mri-scanner-machines',
  },
};

export default function MRI3TCategory() {
  // Define product order (from static site)
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

  const siemens3TOrder = [
    'siemens-magnetom-verio-3t',
    'siemens-magnetom-spectra-3t',
    'siemens-magnetom-skyra-3t',
  ];

  // Filter and sort for 3.0T MRI products by brand
  const ge3TProducts = allProducts
    .filter((product) => product.category === 'mri-scanner' && product.subcategory === '3.0t' && product.brand === 'GE Healthcare')
    .sort((a, b) => {
      const indexA = ge3TOrder.indexOf(a.id);
      const indexB = ge3TOrder.indexOf(b.id);
      if (indexA === -1) return 1;
      if (indexB === -1) return -1;
      return indexA - indexB;
    });
  
  const siemens3TProducts = allProducts
    .filter((product) => product.category === 'mri-scanner' && product.subcategory === '3.0t' && product.brand === 'Siemens Healthineers')
    .sort((a, b) => {
      const indexA = siemens3TOrder.indexOf(a.id);
      const indexB = siemens3TOrder.indexOf(b.id);
      if (indexA === -1) return 1;
      if (indexB === -1) return -1;
      return indexA - indexB;
    });

  const breadcrumbItems = [
    { name: 'Home', url: 'https://phantomhealthcare.com' },
    { name: 'Product Pages', url: 'https://phantomhealthcare.com/product-pages' },
    { name: 'MRI Scanners', url: 'https://phantomhealthcare.com/product-pages' },
    { name: '3.0T MRI Scanners', url: 'https://phantomhealthcare.com/product-pages/3.0t-mri-scanner-machines' },
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
                <li className="text-white font-medium">3.0T MRI Scanners</li>
              </ol>
            </nav>

            {/* Title and Description */}
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                3.0T High-Field MRI Scanners
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8">
                Premium quality refurbished 3.0 Tesla high-field MRI systems from GE Healthcare and Siemens Healthineers. 
                Superior image quality and advanced applications for cutting-edge diagnostic imaging.
              </p>
              
              {/* Navigation Buttons */}
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <a
                  href="#ge-3t-section"
                  className="bg-white hover:bg-gray-100 text-[#2980b9] font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  GE 3.0T MRI Machines
                </a>
                <a
                  href="#siemens-3t-section"
                  className="bg-white hover:bg-gray-100 text-[#16a085] font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Siemens 3.0T MRI Machines
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* GE 3.0T Products Section */}
        <section id="ge-3t-section" className="py-12 md:py-16 bg-white scroll-mt-20">
          <div className="w-full max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="inline-block bg-[#59913d] text-white px-8 py-3 rounded-lg mb-6">
                <h2 className="text-2xl md:text-3xl font-bold m-0">
                  GE 3.0T MRI Machines
                </h2>
              </div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                High-field 3T systems from GE Healthcare with advanced gradient technology and superior image quality
              </p>
            </div>
            <ProductCategoryGrid products={ge3TProducts} category="GE 3.0T MRI" />
          </div>
        </section>

        {/* Siemens 3.0T Products Section */}
        <section id="siemens-3t-section" className="py-12 md:py-16 bg-gray-50 scroll-mt-20">
          <div className="w-full max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="inline-block bg-[#59913d] text-white px-8 py-3 rounded-lg mb-6">
                <h2 className="text-2xl md:text-3xl font-bold m-0">
                  Siemens 3.0T MRI Machines
                </h2>
              </div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                Premium 3T systems from Siemens Healthineers featuring Tim 4G technology and exceptional performance
              </p>
            </div>
            <ProductCategoryGrid products={siemens3TProducts} category="Siemens 3.0T MRI" />
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection
          title="Frequently Asked Questions - 3.0T MRI"
          faqs={[
            {
              question: 'What are the advantages of 3.0T MRI over 1.5T?',
              answer: '3.0T MRI offers double the field strength of 1.5T, providing superior image resolution, faster scan times, better signal-to-noise ratio, and advanced applications like functional MRI (fMRI), spectroscopy, and high-resolution imaging for complex cases.',
            },
            {
              question: 'What are the advanced applications of 3.0T MRI?',
              answer: '3.0T MRI systems excel in advanced neuroimaging including fMRI and DTI, high-resolution cardiac imaging, detailed musculoskeletal studies, advanced spectroscopy, research applications, and cases requiring superior image detail.',
            },
            {
              question: 'Which brands of 3.0T MRI do you offer?',
              answer: 'We offer premium refurbished 3.0T MRI systems from leading manufacturers including GE Healthcare (Signa HDxt 3T, Discovery MR750 3T) and Siemens Healthineers (Magnetom Skyra, Verio, Trio with Tim 4G technology).',
            },
            {
              question: 'What support is included with your 3.0T systems?',
              answer: 'We provide comprehensive support including expert installation, site planning assistance, 12-month comprehensive warranty, ongoing AMC (Annual Maintenance Contract), and 24/7 technical support from our experienced engineers across India.',
            },
            {
              question: 'Are refurbished 3.0T MRI systems reliable for clinical use?',
              answer: 'Yes, our refurbished 3.0T MRI systems undergo extensive testing, refurbishment by certified engineers, and quality assurance. We provide warranty and AMC support to ensure reliable, high-quality clinical performance for years.',
            },
          ]}
          variant="white"
        />

        {/* CTA Section */}
        <section className="bg-white py-12">
          <div className="w-full max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Interested in a 3.0T MRI System?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Our experts can help you understand the benefits of 3.0T imaging, compare models, discuss pricing, and provide complete installation support.
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
