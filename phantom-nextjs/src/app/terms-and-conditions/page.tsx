/**
 * TERMS & CONDITIONS PAGE
 * =======================
 * 
 * PURPOSE: Terms and conditions for Phantom Healthcare website and services
 * CREATED: December 7, 2025
 * 
 * SEO:
 * - Optimized title and description
 * - JSON-LD structured data (BreadcrumbList, Speakable)
 * - Proper heading hierarchy
 * 
 * RELATED FILES:
 * - src/components/seo/JsonLd.tsx
 */

import Link from 'next/link'
import type { Metadata } from 'next'
import { BreadcrumbJsonLd, TermsSpeakableJsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Terms & Conditions - Phantom Healthcare',
  description: 'Terms and Conditions for Phantom Healthcare. Our policies on equipment sales, warranty, installation, AMC services.',
  keywords: ['terms and conditions', 'service agreement', 'Phantom Healthcare', 'warranty terms', 'AMC terms'],
  openGraph: {
    title: 'Terms & Conditions - Phantom Healthcare',
    description: 'Terms and conditions for Phantom Healthcare medical imaging equipment and services.',
    url: 'https://phantomhealthcare.com/terms-and-conditions',
    siteName: 'Phantom Healthcare',
    images: [
      {
        url: '/images/phantom-building.jpg',
        width: 1200,
        height: 630,
        alt: 'Phantom Healthcare - Terms & Conditions',
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms & Conditions - Phantom Healthcare',
    description: 'Service agreement and policies for Phantom Healthcare.',
    images: ['/images/phantom-building.jpg'],
    creator: '@Phantomhealthc',
  },
  alternates: {
    canonical: 'https://phantomhealthcare.com/terms-and-conditions',
  },
};

export default function TermsAndConditionsPage() {
  // Breadcrumb data for the terms page
  const breadcrumbItems = [
    { name: 'Home', url: 'https://phantomhealthcare.com' },
    { name: 'Terms & Conditions', url: 'https://phantomhealthcare.com/terms-and-conditions' }
  ];

  return (
    <main className="min-h-screen">
      {/* JSON-LD Structured Data for SEO */}
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <TermsSpeakableJsonLd />

      {/* Hero Section with Breadcrumb */}
      <section className="bg-gradient-to-r from-[#2980b9] via-[#3498db] to-[#5dade2] py-8 sm:py-10 md:py-14">
        <div className="w-full max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb - Left aligned */}
          <nav className="mb-4 sm:mb-5" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-white/80">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><span className="mx-1">›</span></li>
              <li className="text-white font-medium">Terms &amp; Conditions</li>
            </ol>
          </nav>
          {/* Title and Description - Center aligned */}
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-white drop-shadow-lg">
              Terms &amp; Conditions
            </h1>
            <p className="text-base sm:text-lg md:text-xl 2xl:text-2xl text-white/90 mt-3 max-w-3xl mx-auto">
              Service agreement and policies for Phantom Healthcare
            </p>
          </div>
        </div>
      </section>

      {/* Terms & Conditions Content */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Last Updated */}
            <p className="text-gray-500 text-sm mb-8">
              <strong>Last Updated:</strong> December 7, 2025
            </p>

            {/* Introduction */}
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Introduction
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                These Terms and Conditions (&quot;Terms&quot;) govern your use of the Phantom Healthcare website (phantomhealthcare.com) and the purchase of refurbished medical imaging equipment and related services from Phantom Healthcare IND Private Limited (&quot;Phantom Healthcare,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
              </p>
              <p className="text-gray-600 leading-relaxed">
                By accessing our website, requesting quotes, or purchasing equipment or services from us, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our website or services.
              </p>
            </div>

            {/* Definitions */}
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Definitions
              </h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>&quot;Equipment&quot;</strong> refers to refurbished medical imaging equipment including MRI scanners, CT scanners, PET-CT systems, Cath Labs, Gamma Camera SPECT, and Bone Densitometers sold by Phantom Healthcare.</li>
                <li><strong>&quot;Services&quot;</strong> refers to installation, commissioning, training, maintenance (AMC/CMC), repair, and support services provided by Phantom Healthcare.</li>
                <li><strong>&quot;Customer&quot; or &quot;You&quot;</strong> refers to any individual, hospital, clinic, diagnostic center, or organization that purchases Equipment or Services from Phantom Healthcare.</li>
                <li><strong>&quot;AMC&quot;</strong> refers to Annual Maintenance Contract.</li>
                <li><strong>&quot;CMC&quot;</strong> refers to Comprehensive Maintenance Contract.</li>
              </ul>
            </div>

            {/* Equipment Sales */}
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Equipment Sales Terms
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Quotations</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>All quotations are valid for 30 days from the date of issue unless otherwise specified.</li>
                <li>Prices are subject to change based on currency fluctuations, availability, and market conditions.</li>
                <li>Quotations do not include taxes, duties, or shipping charges unless explicitly stated.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Orders and Acceptance</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Orders are accepted upon receipt of a signed purchase order and advance payment as per agreed terms.</li>
                <li>Phantom Healthcare reserves the right to accept or reject any order at its discretion.</li>
                <li>All orders are subject to equipment availability at the time of order confirmation.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Payment Terms</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Standard payment terms require an advance payment (typically 30-50%) at the time of order confirmation.</li>
                <li>Balance payment is due prior to equipment dispatch or as per mutually agreed milestones.</li>
                <li>Payments can be made via bank transfer, RTGS, NEFT, or other approved methods.</li>
                <li>All payments must be made in Indian Rupees (INR) for domestic transactions or in USD for international orders.</li>
              </ul>
            </div>

            {/* Delivery and Installation */}
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Delivery and Installation
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Delivery</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Delivery timelines are estimates and may vary based on equipment availability and logistics.</li>
                <li>Risk of loss or damage transfers to the Customer upon delivery at the designated site.</li>
                <li>Customer is responsible for ensuring site readiness as per Phantom Healthcare&apos;s site requirements document.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Site Requirements</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Customer must ensure the site meets all technical requirements (power, cooling, shielding, space) before equipment delivery.</li>
                <li>For MRI installations, RF shielding room must be ready as per specifications.</li>
                <li>Adequate access (doors, corridors, cranes if required) must be available for equipment transport.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Installation</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Installation is performed by Phantom Healthcare certified engineers.</li>
                <li>Installation typically takes 2-4 weeks depending on equipment type and site conditions.</li>
                <li>Customer must provide necessary support including power, civil work completion, and site access during installation.</li>
              </ul>
            </div>

            {/* Warranty Terms */}
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Warranty Terms
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Standard Warranty</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Phantom Healthcare provides a <strong>12-month comprehensive warranty</strong> on all refurbished medical imaging equipment from the date of commissioning.</li>
                <li>Warranty covers defects in materials and workmanship under normal use conditions.</li>
                <li>Warranty includes parts and labor for covered repairs.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Warranty Exclusions</h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                The warranty does not cover:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Damage caused by misuse, negligence, accidents, or unauthorized modifications</li>
                <li>Damage due to power surges, voltage fluctuations, or inadequate power supply</li>
                <li>Consumables and accessories (coils, injectors, patient positioning aids)</li>
                <li>Damage caused by unauthorized third-party service or repairs</li>
                <li>Normal wear and tear</li>
                <li>Damage due to force majeure events (natural disasters, civil unrest)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Warranty Claims</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Warranty claims must be reported within 24 hours of discovering the issue.</li>
                <li>Claims should be submitted via email to <a href="mailto:service@phantomhealthcare.com" className="text-primary-600 hover:underline">service@phantomhealthcare.com</a> or by calling our service helpline.</li>
                <li>Phantom Healthcare will respond to warranty claims within 24-48 hours.</li>
              </ul>
            </div>

            {/* AMC/CMC Services */}
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                AMC/CMC Service Terms
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Annual Maintenance Contract (AMC)</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>AMC includes preventive maintenance visits (typically 2-4 per year), emergency repairs, and remote support.</li>
                <li>Parts consumed during repairs are charged separately unless included in a Comprehensive Maintenance Contract (CMC).</li>
                <li>AMC contracts are annual and renewable upon mutual agreement.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Comprehensive Maintenance Contract (CMC)</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>CMC includes all AMC coverage plus spare parts (excluding high-value items like X-ray tubes, magnets).</li>
                <li>CMC provides priority response times and dedicated support.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Service Response</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Service response time: Within 24-48 hours across India.</li>
                <li>Remote diagnostic support is available for faster troubleshooting.</li>
                <li>Critical system failures are prioritized for immediate attention.</li>
              </ul>
            </div>

            {/* Customer Responsibilities */}
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Customer Responsibilities
              </h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                As a Customer, you agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Operate the Equipment in accordance with manufacturer guidelines and user manuals.</li>
                <li>Ensure only trained personnel operate the Equipment.</li>
                <li>Maintain proper environmental conditions (temperature, humidity, cleanliness) for Equipment.</li>
                <li>Obtain and maintain all necessary regulatory approvals and licenses (AERB, PCPNDT, etc.).</li>
                <li>Allow Phantom Healthcare engineers access to Equipment for maintenance and repairs.</li>
                <li>Report any Equipment issues promptly to our service team.</li>
                <li>Not modify, reverse-engineer, or tamper with the Equipment.</li>
              </ul>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Limitation of Liability
              </h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Phantom Healthcare&apos;s total liability for any claim arising from Equipment or Services shall not exceed the amount paid by the Customer for the specific Equipment or Service.</li>
                <li>Phantom Healthcare shall not be liable for any indirect, incidental, consequential, or punitive damages including loss of revenue, loss of patients, or business interruption.</li>
                <li>Phantom Healthcare is not liable for delays or failures due to circumstances beyond its reasonable control (force majeure).</li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Intellectual Property
              </h2>
              <p className="text-gray-600 leading-relaxed">
                All content on the Phantom Healthcare website, including text, images, logos, graphics, and software, is the property of Phantom Healthcare or its licensors and is protected by copyright and trademark laws. You may not reproduce, distribute, modify, or create derivative works without our prior written consent.
              </p>
            </div>

            {/* Dispute Resolution */}
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Dispute Resolution
              </h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Any disputes arising from these Terms or transactions with Phantom Healthcare shall first be attempted to be resolved through mutual negotiation.</li>
                <li>If negotiation fails, disputes shall be resolved through arbitration in Faridabad, India, under the Arbitration and Conciliation Act, 1996.</li>
                <li>These Terms are governed by the laws of India, and courts in Faridabad, Haryana shall have exclusive jurisdiction.</li>
              </ul>
            </div>

            {/* Website Use */}
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Website Use
              </h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                When using our website, you agree not to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Use the website for any unlawful purpose</li>
                <li>Attempt to gain unauthorized access to any part of the website</li>
                <li>Use automated tools to scrape or collect data from the website</li>
                <li>Upload or transmit viruses or malicious code</li>
                <li>Interfere with the proper functioning of the website</li>
              </ul>
            </div>

            {/* Changes to Terms */}
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Changes to These Terms
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Phantom Healthcare reserves the right to modify these Terms at any time. Changes will be effective upon posting on our website. Your continued use of our website or services after changes constitutes acceptance of the modified Terms.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <div className="bg-gray-50 rounded-xl p-6 text-gray-600">
                <p className="font-semibold text-gray-900 mb-2">Phantom Healthcare IND Private Limited</p>
                <p className="mb-1">Plot No. 51, Sector 27C, Near NHPC Chowk</p>
                <p className="mb-1">Main Mathura Road, Faridabad, Haryana 121003, India</p>
                <p className="mb-1"><strong>Email:</strong> <a href="mailto:biz@phantomhealthcare.com" className="text-primary-600 hover:underline">biz@phantomhealthcare.com</a></p>
                <p><strong>Phone:</strong> <a href="tel:+919899963601" className="text-primary-600 hover:underline">+91 9899963601</a></p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="w-full max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-bold text-white mb-4">
            Have Questions About Our Terms?
          </h2>
          <p className="text-white/90 text-base sm:text-lg 2xl:text-xl max-w-2xl mx-auto mb-8">
            Contact our team to learn more about our policies and service agreements
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary-600 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300"
          >
            <i className="fa-solid fa-paper-plane mr-2"></i>
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  )
}
