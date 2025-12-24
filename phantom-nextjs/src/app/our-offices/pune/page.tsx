/**
 * PUNE OFFICE PAGE
 * ================
 * 
 * Phantom Healthcare Pune Office - South India Region
 */

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Pune Office - Phantom Healthcare South India',
  description: 'Phantom Healthcare Pune office serving South India region. Contact us for medical imaging equipment in Maharashtra and surrounding states.',
  openGraph: {
    title: 'Pune Office - Phantom Healthcare',
    description: 'South India office in Pune, Maharashtra. Contact: +91 9899963601',
    url: 'https://phantomhealthcare.com/our-offices/pune',
  },
  alternates: {
    canonical: 'https://phantomhealthcare.com/our-offices/pune',
  },
};

export default function PuneOfficePage() {
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Phantom Healthcare IND Private Limited - Pune Office",
    "image": "https://phantomhealthcare.com/images/phantom-building.jpg",
    "telephone": "+91-9899963601",
    "email": "info@phantomhealthcare.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Office No. A 321-323, 3rd Floor, Tower-A, Gera's Imperium Gateway Old Mumbai Pune Highway, Near Bhosari Metro Station (Nashik Phata), Village-Bhosari, Kasarwadi",
      "addressLocality": "Pimpri-Chinchwad",
      "addressRegion": "Maharashtra",
      "postalCode": "411034",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 18.6298,
      "longitude": 73.8567
    }
  };

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://phantomhealthcare.com' },
          { name: 'Our Offices', url: 'https://phantomhealthcare.com/our-offices' },
          { name: 'Pune Office', url: 'https://phantomhealthcare.com/our-offices/pune' },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
      />

      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative h-[250px] sm:h-[300px] md:h-[350px] bg-gradient-to-r from-orange-500 via-white to-green-600 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 text-center px-4">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shadow-2xl mx-auto mb-4 border-4 border-white">
              <Image src="/images/india-flag.jpg" alt="India" width={96} height={96} className="object-cover" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2">Pune Office</h1>
            <p className="text-lg sm:text-xl text-gray-700 font-semibold">South India Region</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 lg:py-20 bg-gray-50">
          <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="mb-6">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
                <li><Link href="/" className="hover:text-primary-600">Home</Link></li>
                <li>/</li>
                <li><Link href="/our-offices" className="hover:text-primary-600">Our Offices</Link></li>
                <li>/</li>
                <li className="text-gray-900 font-semibold">Pune Office</li>
              </ol>
            </nav>

            {/* Main Card */}
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Phantom Healthcare - Pune India (South India Region)
              </h2>

              {/* Address */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <i className="fa-solid fa-map-marker-alt text-primary-600"></i>
                  Address
                </h3>
                <p className="text-gray-700 text-base leading-relaxed pl-7">
                  Office No. A 321-323, 3rd Floor, Tower-A,<br />
                  Gera's Imperium Gateway Old Mumbai Pune Highway,<br />
                  Near Bhosari Metro Station (Nashik Phata),<br />
                  Village-Bhosari, Kasarwadi,<br />
                  Pimpri-Chinchwad, Pune,<br />
                  Maharashtra 411034<br />
                  INDIA
                </p>
              </div>

              {/* Contact */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <i className="fa-solid fa-phone text-primary-600"></i>
                  Phone Number
                </h3>
                <div className="pl-7 space-y-2 text-gray-700">
                  <p><a href="tel:+919899963601" className="hover:text-primary-600">+91 9899963601</a></p>
                </div>
              </div>

              {/* Email */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <i className="fa-solid fa-envelope text-primary-600"></i>
                  Email
                </h3>
                <div className="pl-7 space-y-2 text-gray-700">
                  <p><a href="mailto:info@phantomhealthcare.com" className="hover:text-primary-600">info@phantomhealthcare.com</a></p>
                </div>
              </div>

              {/* Map */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Location Map</h3>
                <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.0!2d73.8567!3d18.6298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDM3JzQ3LjMiTiA3M8KwNTEnMjQuMSJF!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Phantom Healthcare Pune Office Location"
                  ></iframe>
                </div>
              </div>

              {/* Working Hours */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <i className="fa-solid fa-clock text-primary-600"></i>
                  Working Hours
                </h3>
                <div className="pl-7 text-gray-700">
                  <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Back Button */}
            <div className="text-center">
              <Link
                href="/our-offices"
                className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to All Offices
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
