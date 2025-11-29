/**
 * ABOUT PAGE COMPONENT
 * ====================
 * 
 * PURPOSE: Company information, history, leadership team, and values
 * CREATED: Initial development
 * LAST MODIFIED: November 29, 2025 (Complete rewrite with SEO and JSON-LD)
 * 
 * FEATURES:
 * - Hero section with company overview
 * - About company section with history (since 2011)
 * - Leadership team (Rochi Nargotra - CEO, Brijesh Suneja - MD)
 * - Company achievements (170+ MRI installations, 150+ clients)
 * - Core values section
 * - Call to action
 * 
 * SEO:
 * - Complete metadata with Open Graph and Twitter cards
 * - JSON-LD structured data (Organization, BreadcrumbList, AboutPage)
 * - Proper heading hierarchy (h1, h2, h3)
 * 
 * RELATED FILES:
 * - src/components/seo/JsonLd.tsx
 */

import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { OrganizationJsonLd, BreadcrumbJsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'About Us - Phantom Healthcare | India\'s Leading Medical Imaging Equipment Provider',
  description: 'Phantom Healthcare, established in 2011, is India\'s leading refurbisher of MRI, CT Scanner, PET-CT & Cath-Lab equipment. 170+ installations, 150+ satisfied clients. Meet our leadership team: Rochi Nargotra (CEO) & Brijesh Suneja (MD).',
  keywords: ['Phantom Healthcare history', 'medical imaging company India', 'Rochi Nargotra', 'Brijesh Suneja', 'MRI refurbishment company', 'healthcare equipment provider Faridabad', 'medical imaging since 2011'],
  openGraph: {
    title: 'About Phantom Healthcare - India\'s Trusted Medical Imaging Partner Since 2011',
    description: '170+ MRI installations, 150+ satisfied clients. Leading remarketers and refurbishers of pre-owned MRI, CT Scanner, PET-CT equipment in India.',
    url: 'https://phantomhealthcare.com/about',
    siteName: 'Phantom Healthcare',
    images: [
      {
        url: '/images/iria 2024 1.jpg',
        width: 1200,
        height: 630,
        alt: 'Phantom Healthcare Team at IRIA 2024',
      },
      {
        url: '/images/phantom-building.jpg',
        width: 1200,
        height: 630,
        alt: 'Phantom Healthcare Headquarters - Faridabad, India',
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Phantom Healthcare',
    description: '170+ MRI installations since 2011. India\'s leading medical imaging equipment provider.',
    images: ['/images/iria 2024 1.jpg'],
    creator: '@Phantomhealthc',
  },
  alternates: {
    canonical: 'https://phantomhealthcare.com/about',
  },
};

// About Page JSON-LD Schema
function AboutPageJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Phantom Healthcare",
    "description": "Learn about Phantom Healthcare, India's leading medical imaging equipment provider since 2011",
    "url": "https://phantomhealthcare.com/about",
    "mainEntity": {
      "@type": "Organization",
      "name": "Phantom Healthcare IND Pvt Ltd",
      "foundingDate": "2011",
      "founder": [
        {
          "@type": "Person",
          "name": "Rochi Nargotra",
          "jobTitle": "Director & CEO",
          "image": "https://phantomhealthcare.com/images/rochi-nargotra.jpg"
        },
        {
          "@type": "Person",
          "name": "Brijesh Suneja",
          "jobTitle": "Managing Director",
          "image": "https://phantomhealthcare.com/images/brijesh-suneja.jpg"
        }
      ],
      "numberOfEmployees": {
        "@type": "QuantitativeValue",
        "minValue": 50,
        "maxValue": 100
      },
      "slogan": "Quality Medical Imaging Equipment Since 2011",
      "knowsAbout": [
        "MRI Scanner Refurbishment",
        "CT Scanner Installation",
        "PET-CT Systems",
        "Cath-Lab Equipment",
        "Gamma Camera SPECT",
        "Bone Densitometer DXA"
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function About() {
  // Breadcrumb data for the about page
  const breadcrumbItems = [
    { name: 'Home', url: 'https://phantomhealthcare.com' },
    { name: 'About Us', url: 'https://phantomhealthcare.com/about' }
  ];

  return (
    <main className="min-h-screen">
      {/* JSON-LD Structured Data for SEO */}
      <OrganizationJsonLd />
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <AboutPageJsonLd />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
        <div className="relative w-full max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-6 animate-fade-in">
            About Phantom Healthcare
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto">
            India&apos;s Leading Remarketers, Refurbishers & Re-assemblers of Medical Imaging Equipment Since 2011
          </p>
        </div>
      </section>

      {/* IRIA 2024 Hero Image Section */}
      <section className="relative w-full">
        <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto">
          <div className="relative aspect-[21/9] w-full">
            <Image 
              src="/images/iria 2024 1.jpg" 
              alt="Phantom Healthcare Team at IRIA 2024 Exhibition"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* About Company Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="w-full max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Content */}
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="mb-4">
                  Our Group started operations in <strong className="text-primary-600">year 2011</strong> and has become the leading remarketers, refurbishers and re-assemblers of Pre-owned Super Conductive MRIs and CT Scanners in India.
                </p>
                <p className="mb-4">
                  Phantom Healthcare strives to provide professional support with quality services that are custom fit to the needs of today&apos;s growing healthcare industry. We aim to develop long-term relationships with our clients and do our best possible to keep Imaging equipment up-to-date and working like new.
                </p>
                <p className="mb-4">
                  At Phantom Healthcare, we believe that value is not just monetary but also includes meeting client expectations by providing high quality equipment and service. Our team understands that how we operate is just as crucial as what we accomplish. It is through the spirit of teamwork and strong sense of vision that we stride towards our goals.
                </p>
                <p>
                  Our clients are our family and experience many advantages over any other sales and service provider in India.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image 
                  src="/images/phantom-building.jpg" 
                  alt="Phantom Healthcare Building - Plot 51, Sector 27C, Faridabad"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-primary-600 to-primary-700">
        <div className="w-full max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Our Achievements
            </h2>
            <p className="text-white/90 text-lg max-w-3xl mx-auto">
              Phantom Healthcare has emerged as a consistent performer with remarkable milestones
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {/* 170+ MRI Installations */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2">
                170<span className="text-secondary-400">+</span>
              </div>
              <p className="text-white/90 text-sm sm:text-base">
                Super-Conductive MRI Installations
              </p>
            </div>

            {/* 150+ Satisfied Clients */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2">
                150<span className="text-secondary-400">+</span>
              </div>
              <p className="text-white/90 text-sm sm:text-base">
                Satisfied Clients
              </p>
            </div>

            {/* 10+ 3.0T MRIs */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2">
                10<span className="text-secondary-400">+</span>
              </div>
              <p className="text-white/90 text-sm sm:text-base">
                3.0T MRI Installations
              </p>
            </div>

            {/* 13+ Years */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2">
                13<span className="text-secondary-400">+</span>
              </div>
              <p className="text-white/90 text-sm sm:text-base">
                Years of Excellence
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="w-full max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Message
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Meet the visionary leaders behind Phantom Healthcare
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
            
            {/* Rochi Nargotra - CEO */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden">
                <Image 
                  src="/images/rochi-nargotra.jpg" 
                  alt="Rochi Nargotra - Director & CEO of Phantom Healthcare"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                  Rochi Nargotra
                </h3>
                <p className="text-primary-600 font-medium mb-4">Director & CEO</p>
                <blockquote className="text-gray-600 italic border-l-4 border-primary-500 pl-4 text-left">
                  &ldquo;At Phantom Healthcare, we are focused on providing to the clients, the best service with affordable pricing while improving Equipment life.&rdquo;
                </blockquote>
              </div>
            </div>

            {/* Brijesh Suneja - MD */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden">
                <Image 
                  src="/images/brijesh-suneja.jpg" 
                  alt="Brijesh Suneja - Managing Director of Phantom Healthcare"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                  Brijesh Suneja
                </h3>
                <p className="text-primary-600 font-medium mb-4">Managing Director</p>
                <blockquote className="text-gray-600 italic border-l-4 border-primary-500 pl-4 text-left">
                  &ldquo;The professionals of the company have dedicatedly offered the customers the products that comply not only with regulatory quality standards but also come well within client&apos;s budgets.&rdquo;
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="w-full max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Quality */}
            <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-6 border border-primary-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                <i className="fa-solid fa-star text-primary-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quality</h3>
              <p className="text-gray-600">
                We maintain the highest standards of quality in all our products and services, ensuring reliability and performance.
              </p>
            </div>

            {/* Trust */}
            <div className="bg-gradient-to-br from-secondary-50 to-white rounded-2xl p-6 border border-secondary-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-secondary-100 rounded-xl flex items-center justify-center mb-4">
                <i className="fa-solid fa-handshake text-secondary-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Trust</h3>
              <p className="text-gray-600">
                Building long-term relationships based on trust, transparency, and reliability with our clients and partners.
              </p>
            </div>

            {/* Customer Focus */}
            <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-6 border border-primary-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                <i className="fa-solid fa-users text-primary-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Customer Focus</h3>
              <p className="text-gray-600">
                Our customers are at the heart of everything we do. Their success is our success.
              </p>
            </div>

            {/* Innovation */}
            <div className="bg-gradient-to-br from-secondary-50 to-white rounded-2xl p-6 border border-secondary-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-secondary-100 rounded-xl flex items-center justify-center mb-4">
                <i className="fa-solid fa-lightbulb text-secondary-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">
                Continuously improving and adopting the latest technologies to serve our clients better.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="w-full max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Comprehensive medical imaging solutions for healthcare facilities
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
            {[
              { name: 'MRI Scanner', icon: 'fa-solid fa-magnet' },
              { name: 'CT Scanner', icon: 'fa-solid fa-x-ray' },
              { name: 'PET-CT', icon: 'fa-solid fa-atom' },
              { name: 'Cath-Lab', icon: 'fa-solid fa-heart-pulse' },
              { name: 'Gamma Camera SPECT', icon: 'fa-solid fa-radiation' },
              { name: 'Bone Densitometer', icon: 'fa-solid fa-bone' },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className={`${item.icon} text-primary-600 text-xl`}></i>
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-gray-900">{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="w-full max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Partner With Us?
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Contact us today to discuss your medical imaging equipment needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary-600 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300"
            >
              <i className="fa-solid fa-paper-plane mr-2"></i>
              Contact Us
            </Link>
            <Link 
              href="/products" 
              className="inline-flex items-center justify-center px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors duration-300"
            >
              <i className="fa-solid fa-boxes-stacked mr-2"></i>
              View Products
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
} 