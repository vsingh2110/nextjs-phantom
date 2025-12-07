/**
 * PRIVACY POLICY PAGE
 * ===================
 * 
 * PURPOSE: Privacy policy for Phantom Healthcare website and services
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
import { BreadcrumbJsonLd, PrivacyPolicySpeakableJsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Privacy Policy - Phantom Healthcare',
  description: 'Privacy Policy for Phantom Healthcare. Learn how we collect, use, and protect your personal information when using our website.',
  keywords: ['privacy policy', 'data protection', 'Phantom Healthcare', 'personal information', 'cookies'],
  openGraph: {
    title: 'Privacy Policy - Phantom Healthcare',
    description: 'Learn how Phantom Healthcare protects your personal information and data.',
    url: 'https://phantomhealthcare.com/privacy-policy',
    siteName: 'Phantom Healthcare',
    images: [
      {
        url: '/images/phantom-building.jpg',
        width: 1200,
        height: 630,
        alt: 'Phantom Healthcare - Privacy Policy',
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy - Phantom Healthcare',
    description: 'How Phantom Healthcare protects your personal information.',
    images: ['/images/phantom-building.jpg'],
    creator: '@Phantomhealthc',
  },
  alternates: {
    canonical: 'https://phantomhealthcare.com/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  // Breadcrumb data for the privacy policy page
  const breadcrumbItems = [
    { name: 'Home', url: 'https://phantomhealthcare.com' },
    { name: 'Privacy Policy', url: 'https://phantomhealthcare.com/privacy-policy' }
  ];

  return (
    <main className="min-h-screen">
      {/* JSON-LD Structured Data for SEO */}
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <PrivacyPolicySpeakableJsonLd />

      {/* Hero Section with Breadcrumb */}
      <section className="bg-gradient-to-r from-[#2980b9] via-[#3498db] to-[#5dade2] py-8 sm:py-10 md:py-14">
        <div className="w-full max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb - Left aligned */}
          <nav className="mb-4 sm:mb-5" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-white/80">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><span className="mx-1">›</span></li>
              <li className="text-white font-medium">Privacy Policy</li>
            </ol>
          </nav>
          {/* Title and Description - Center aligned */}
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-white drop-shadow-lg">
              Privacy Policy
            </h1>
            <p className="text-base sm:text-lg md:text-xl 2xl:text-2xl text-white/90 mt-3 max-w-3xl mx-auto">
              How Phantom Healthcare protects and handles your information
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
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
                Phantom Healthcare IND Private Limited (&quot;Phantom Healthcare,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <strong>phantomhealthcare.com</strong> or engage with our services for refurbished medical imaging equipment.
              </p>
              <p className="text-gray-600 leading-relaxed">
                By accessing our website or using our services, you agree to the terms of this Privacy Policy. If you do not agree with the terms, please do not access the site or use our services.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Information We Collect
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Personal Information</h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                When you contact us or request a quote, we may collect the following personal information:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Full name and job title</li>
                <li>Organization/hospital/clinic name</li>
                <li>Email address and phone number</li>
                <li>Mailing address (city, state, country)</li>
                <li>Details about your equipment requirements</li>
                <li>Any other information you voluntarily provide in forms or correspondence</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Automatically Collected Information</h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                When you visit our website, we automatically collect certain information about your device, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>IP address and browser type</li>
                <li>Device type (desktop, mobile, tablet)</li>
                <li>Operating system</li>
                <li>Pages visited and time spent on each page</li>
                <li>Referring website or source</li>
                <li>Geographic location (country/city level)</li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                How We Use Your Information
              </h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>To respond to inquiries:</strong> Provide quotes, answer questions about our medical imaging equipment</li>
                <li><strong>To process transactions:</strong> Facilitate the sale, installation, and service of equipment</li>
                <li><strong>To provide customer support:</strong> Assist with technical support, warranty claims, and AMC services</li>
                <li><strong>To improve our website:</strong> Analyze usage patterns to enhance user experience</li>
                <li><strong>To send communications:</strong> Share updates about products, services, and industry news (with your consent)</li>
                <li><strong>To comply with legal obligations:</strong> Meet regulatory and legal requirements</li>
              </ul>
            </div>

            {/* Cookies and Tracking Technologies */}
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Cookies and Tracking Technologies
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our website uses cookies and similar tracking technologies to improve your browsing experience. Cookies are small text files stored on your device that help us:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Remember your preferences and settings</li>
                <li>Understand how you interact with our website</li>
                <li>Analyze website traffic and performance</li>
                <li>Provide relevant content and advertisements</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                You can control cookies through your browser settings. However, disabling cookies may affect some features of our website.
              </p>
            </div>

            {/* Third-Party Services */}
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Third-Party Services
              </h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                We may use third-party services that collect and process data on our behalf:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Google Analytics:</strong> To analyze website traffic and user behavior</li>
                <li><strong>Google Maps:</strong> To display our office locations</li>
                <li><strong>Social Media Platforms:</strong> For sharing content and connecting with us</li>
                <li><strong>Email Service Providers:</strong> To send communications and newsletters</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                These third parties have their own privacy policies governing how they handle your data.
              </p>
            </div>

            {/* Data Security */}
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Data Security
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Phantom Healthcare takes the security of your personal information seriously. We implement appropriate technical and organizational measures to protect your data, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>SSL/TLS encryption for data transmission</li>
                <li>Secure servers and firewalls</li>
                <li>Access controls limiting who can view your information</li>
                <li>Regular security assessments and updates</li>
                <li>Employee training on data protection best practices</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                While we strive to protect your information, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security of data transmitted to our website.
              </p>
            </div>

            {/* International Data Transfers */}
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                International Data Transfers
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Phantom Healthcare operates offices in India, USA, and UAE. Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for any international data transfers in compliance with applicable data protection laws.
              </p>
            </div>

            {/* Data Retention */}
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Data Retention
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including to satisfy legal, accounting, or reporting requirements. For business inquiries and quotes, we typically retain records for up to 7 years. You may request deletion of your data at any time by contacting us.
              </p>
            </div>

            {/* Your Rights */}
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Your Rights
              </h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                Depending on your location, you may have the following rights regarding your personal data:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Right to Access:</strong> Request a copy of the personal data we hold about you</li>
                <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete data</li>
                <li><strong>Right to Erasure:</strong> Request deletion of your personal data</li>
                <li><strong>Right to Restrict Processing:</strong> Request limitation on how we use your data</li>
                <li><strong>Right to Data Portability:</strong> Request your data in a portable format</li>
                <li><strong>Right to Object:</strong> Object to processing of your data for marketing purposes</li>
                <li><strong>Right to Withdraw Consent:</strong> Withdraw consent where processing is based on consent</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                To exercise any of these rights, please contact us using the information provided below.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Children&apos;s Privacy
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our website and services are intended for healthcare professionals and business entities. We do not knowingly collect personal information from children under 18. If you believe we have collected information from a minor, please contact us immediately so we can take appropriate action.
              </p>
            </div>

            {/* Changes to This Policy */}
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Changes to This Privacy Policy
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the updated policy on our website with a new &quot;Last Updated&quot; date. We encourage you to review this policy periodically.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 rounded-xl p-6 text-gray-600">
                <p className="font-semibold text-gray-900 mb-2">Phantom Healthcare IND Private Limited</p>
                <p className="mb-1">Plot No. 51, Sector 27C, Near NHPC Chowk</p>
                <p className="mb-1">Main Mathura Road, Faridabad, Haryana 121003, India</p>
                <p className="mb-1"><strong>Email:</strong> <a href="mailto:info@phantomhealthcare.com" className="text-primary-600 hover:underline">info@phantomhealthcare.com</a></p>
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
            Have Questions About Our Privacy Practices?
          </h2>
          <p className="text-white/90 text-base sm:text-lg 2xl:text-xl max-w-2xl mx-auto mb-8">
            Contact our team to learn more about how we protect your information
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
