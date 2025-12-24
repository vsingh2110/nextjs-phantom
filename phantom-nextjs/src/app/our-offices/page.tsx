/**
 * OUR OFFICES PAGE COMPONENT
 * ===========================
 * 
 * PURPOSE: Display all Phantom Healthcare office locations worldwide
 * CREATED: December 24, 2025
 * 
 * FEATURES:
 * - Hero section with global presence message
 * - 4 office cards (Delhi, Pune, Dubai, USA)
 * - 2 cards per row on desktop, 1 on mobile
 * - Links to individual office pages
 * - Complete address and contact information
 * 
 * OFFICES:
 * 1. Faridabad, India (Headquarters - North India)
 * 2. Pune, India (South India Region)
 * 3. Dubai, UAE (Middle East & Africa)
 * 4. Illinois, USA (North America)
 */

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Our Offices - Phantom Healthcare Global Locations',
  description: 'Phantom Healthcare offices in India (Delhi, Pune), UAE (Dubai), and USA (Illinois). Contact our global team for medical imaging equipment and services.',
  keywords: ['phantom healthcare offices', 'medical imaging India', 'phantom healthcare locations', 'global presence'],
  openGraph: {
    title: 'Our Offices - Phantom Healthcare',
    description: 'Find our offices in India, UAE, and USA. Contact us for medical imaging equipment and services.',
    url: 'https://phantomhealthcare.com/our-offices',
    siteName: 'Phantom Healthcare',
    images: [
      {
        url: '/images/phantom-building.jpg',
        width: 1200,
        height: 630,
        alt: 'Phantom Healthcare Offices',
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  alternates: {
    canonical: 'https://phantomhealthcare.com/our-offices',
  },
};

const offices = [
  {
    id: 'delhi',
    name: 'India Headquarters',
    region: 'North India',
    company: 'Phantom Healthcare IND Pvt Ltd',
    address: 'Plot No. 51, Sector 27C, Near NHPC Chowk, Main Mathura Road, Faridabad, Haryana – 121003 (INDIA)',
    phone: ['+91 9899963601', '+91 129 4312423', '+91 8545815483'],
    email: ['info@phantomhealthcare.com', 'biz@phantomhealthcare.com'],
    flag: '/images/india-flag.jpg',
    flagColors: 'from-orange-500 via-white to-green-600',
  },
  {
    id: 'pune',
    name: 'Pune Office',
    region: 'South India Region',
    company: 'Phantom Healthcare - Pune India',
    address: 'Office No. A 321-323, 3rd Floor, Tower-A, Gera\'s Imperium Gateway Old Mumbai Pune Highway, Near Bhosari Metro Station (Nashik Phata), Village-Bhosari, Kasarwadi, Pimpri-Chinchwad, Pune, Maharashtra 411034 (INDIA)',
    phone: ['+91 9899963601'],
    email: ['info@phantomhealthcare.com'],
    flag: '/images/india-flag.jpg',
    flagColors: 'from-orange-500 via-white to-green-600',
  },
  {
    id: 'dubai',
    name: 'UAE Office',
    region: 'Middle East & Africa',
    company: 'Phantom Healthcare AE FZC',
    address: 'LV 63-C, Al Hamriyah Freezone, Sharjah, United Arab Emirates (UAE)',
    phone: ['+971 522 208 819', '+971 556 357 700'],
    email: ['sachin.rawat@phantomhealthcare.com'],
    flag: '/images/uae-flag.jpg',
    flagColors: 'from-green-600 via-white to-red-600',
  },
  {
    id: 'usa',
    name: 'USA Office',
    region: 'North America',
    company: 'Phantom Healthcare US LLC',
    address: '2501 Chatham Rd, Suite STE R, Springfield, Illinois (62704), United States of America (USA)',
    phone: ['+1 630 720 6801'],
    email: ['biz@phantomhealthcare.com'],
    flag: '/images/usa-map.jpg',
    flagColors: 'from-red-600 via-white to-blue-700',
  },
];

export default function OurOfficesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          {
            name: 'Home',
            url: 'https://phantomhealthcare.com',
          },
          {
            name: 'Our Offices',
            url: 'https://phantomhealthcare.com/our-offices',
          },
        ]}
      />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] flex items-center justify-center overflow-hidden">
          {/* Background Image with Blur */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/phantom-building.jpg"
              alt="Phantom Healthcare Offices"
              fill
              className="object-cover blur-sm opacity-40"
              priority
              quality={30}
            />
          </div>
          
          {/* Main Image */}
          <div className="relative h-full flex items-center justify-center z-10 px-4">
            <Image
              src="/images/phantom-building.jpg"
              alt="Phantom Healthcare Global Presence"
              fill
              className="object-contain"
              priority
              quality={90}
            />
          </div>

          {/* Title Overlay */}
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-gradient-to-b from-black/30 to-black/50">
            <div className="text-center px-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-2xl">
                Our Offices
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 drop-shadow-lg">
                Serving Healthcare Worldwide from India, UAE & USA
              </p>
            </div>
          </div>
        </section>

        {/* Offices Grid Section */}
        <section className="py-12 lg:py-20 bg-gray-50">
          <div className="w-full max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
                <li>
                  <Link href="/" className="hover:text-primary-600 transition-colors">
                    Home
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <span>/</span>
                  <span className="text-gray-900 font-semibold">Our Offices</span>
                </li>
              </ol>
            </nav>

            {/* Page Title */}
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Our Global Presence
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                With offices strategically located across three continents, we provide seamless support and service to healthcare facilities worldwide.
              </p>
            </div>

            {/* Offices Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {offices.map((office) => (
                <div
                  key={office.id}
                  className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  {/* Flag Color Bar */}
                  <div className={`h-2 bg-gradient-to-r ${office.flagColors}`}></div>
                  
                  <div className="p-6 sm:p-8">
                    {/* Header with Flag */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shadow-lg flex-shrink-0 border-4 border-gray-100">
                        <Image 
                          src={office.flag} 
                          alt={office.name} 
                          width={80} 
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                          {office.name}
                        </h3>
                        <p className="text-sm sm:text-base text-primary-600 font-semibold">
                          {office.region}
                        </p>
                      </div>
                    </div>

                    {/* Company Name */}
                    <div className="mb-4">
                      <h4 className="font-bold text-gray-900 text-base sm:text-lg mb-2">
                        {office.company}
                      </h4>
                    </div>

                    {/* Address */}
                    <div className="mb-6">
                      <div className="flex items-start gap-3">
                        <i className="fa-solid fa-map-marker-alt text-primary-500 text-lg mt-1 flex-shrink-0"></i>
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                          {office.address}
                        </p>
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-3 mb-6">
                      {/* Phone Numbers */}
                      <div className="flex items-start gap-3">
                        <i className="fa-solid fa-phone text-primary-500 text-base mt-1 flex-shrink-0"></i>
                        <div className="flex-1 text-sm sm:text-base">
                          {office.phone.map((phone, idx) => (
                            <div key={idx}>
                              <a
                                href={`tel:${phone.replace(/\s/g, '')}`}
                                className="text-gray-600 hover:text-primary-600 transition-colors"
                              >
                                {phone}
                              </a>
                              {idx < office.phone.length - 1 && ', '}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Email */}
                      <div className="flex items-start gap-3">
                        <i className="fa-solid fa-envelope text-primary-500 text-base mt-1 flex-shrink-0"></i>
                        <div className="flex-1 text-sm sm:text-base">
                          {office.email.map((email, idx) => (
                            <div key={idx}>
                              <a
                                href={`mailto:${email}`}
                                className="text-gray-600 hover:text-primary-600 transition-colors break-all"
                              >
                                {email}
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* View Details Button */}
                    <Link
                      href={`/our-offices/${office.id}`}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-md hover:shadow-lg group"
                    >
                      <span>View Office Details</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 sm:p-12">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Need to Reach Us?
                </h3>
                <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                  Contact any of our offices for medical imaging equipment sales, service, and support
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold text-lg rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <span>Contact Us</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
