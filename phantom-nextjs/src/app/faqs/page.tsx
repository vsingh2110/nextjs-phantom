/**
 * FAQS PAGE COMPONENT
 * ===================
 * 
 * PURPOSE: Comprehensive FAQ page with all questions organized by category
 * CREATED: December 7, 2025
 * 
 * FEATURES:
 * - Categorized FAQs (Products, Pricing, Services, Company, Contact)
 * - Uses FAQSection component for accordion behavior
 * - JSON-LD structured data (FAQPage, BreadcrumbList, Speakable)
 * 
 * SEO:
 * - Optimized title and description
 * - Comprehensive FAQPage schema with 17 questions
 * - Speakable schema for voice search
 * - Proper heading hierarchy
 * 
 * RELATED FILES:
 * - src/components/seo/JsonLd.tsx
 * - src/components/ui/FAQSection.tsx
 */

import Link from 'next/link'
import type { Metadata } from 'next'
import { BreadcrumbJsonLd, FAQsPageJsonLd, FAQsSpeakableJsonLd } from '@/components/seo/JsonLd'
import FAQSection from '@/components/ui/FAQSection'

export const metadata: Metadata = {
  title: 'FAQs - Phantom Healthcare | MRI & CT Scanner Questions',
  description: 'Frequently asked questions about refurbished MRI, CT scanners, pricing, warranty, installation, and services from Phantom Healthcare.',
  keywords: ['FAQ', 'refurbished MRI questions', 'CT scanner pricing', 'medical equipment warranty', 'Phantom Healthcare', 'MRI cost India'],
  openGraph: {
    title: 'FAQs - Phantom Healthcare | MRI & CT Scanner Questions',
    description: 'Get answers to common questions about refurbished MRI, CT scanners, warranty, and services.',
    url: 'https://phantomhealthcare.com/faqs',
    siteName: 'Phantom Healthcare',
    images: [
      {
        url: '/images/phantom-building.jpg',
        width: 1200,
        height: 630,
        alt: 'Phantom Healthcare - FAQs',
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQs - Phantom Healthcare',
    description: 'Answers to questions about refurbished medical imaging equipment.',
    images: ['/images/phantom-building.jpg'],
    creator: '@Phantomhealthc',
  },
  alternates: {
    canonical: 'https://phantomhealthcare.com/faqs',
  },
};

export default function FAQsPage() {
  // Breadcrumb data
  const breadcrumbItems = [
    { name: 'Home', url: 'https://phantomhealthcare.com' },
    { name: 'FAQs', url: 'https://phantomhealthcare.com/faqs' }
  ];

  // Products & Equipment FAQs
  const productsFaqs = [
    {
      question: "What medical imaging equipment does Phantom Healthcare provide?",
      answer: "Phantom Healthcare provides refurbished MRI Scanners (1.5T and 3.0T), CT Scanners, PET-CT systems, Cath Labs, Gamma Camera SPECT, and Bone Densitometers (DXA). We work with top brands including GE Healthcare, Siemens Healthineers, Philips, Canon, and Toshiba."
    },
    {
      question: "What brands of MRI and CT scanners does Phantom Healthcare refurbish?",
      answer: "Phantom Healthcare refurbishes and supplies equipment from leading manufacturers: GE Healthcare (Signa series), Siemens Healthineers (Magnetom, Somatom series), Philips (Achieva, Ingenia), Canon/Toshiba (Vantage, Aquilion), and Hitachi. We specialize in systems from 2015 onwards for optimal technology and spare parts availability."
    },
    {
      question: "What is Phantom Healthcare's refurbishment process?",
      answer: "Our refurbishment process includes: 150-point quality inspection, complete cosmetic restoration, replacement of worn components, software updates and calibration, rigorous testing protocols, and quality certification. Each machine is restored to near-original specifications before delivery."
    },
    {
      question: "Why choose refurbished medical imaging equipment from Phantom Healthcare?",
      answer: "Refurbished medical imaging equipment from Phantom Healthcare offers 40-60% cost savings compared to new equipment, with the same diagnostic quality. All equipment undergoes rigorous 150-point inspection, complete reconditioning, and comes with warranty. This makes advanced diagnostics accessible for tier-2/tier-3 cities and smaller healthcare facilities."
    }
  ];

  // Pricing & Warranty FAQs
  const pricingFaqs = [
    {
      question: "What is the typical cost of a refurbished MRI scanner in India?",
      answer: "Refurbished MRI scanner prices in India vary based on field strength and brand. 1.5T MRI scanners typically range from ₹1.5 to ₹3 crore, while 3.0T MRI scanners range from ₹3 to ₹6 crore. Contact Phantom Healthcare for specific quotes as prices depend on model year, configuration, and current inventory."
    },
    {
      question: "What warranty does Phantom Healthcare offer on refurbished MRI machines?",
      answer: "Phantom Healthcare provides a 12-month comprehensive warranty on all refurbished MRI machines and CT scanners. The warranty covers parts and labor, with optional extended AMC (Annual Maintenance Contract) packages available for continued support."
    },
    {
      question: "What payment terms does Phantom Healthcare offer?",
      answer: "Standard payment terms require an advance payment (typically 30-50%) at the time of order confirmation. Balance payment is due prior to equipment dispatch or as per mutually agreed milestones. Payments can be made via bank transfer, RTGS, NEFT, or other approved methods."
    }
  ];

  // Services FAQs
  const servicesFaqs = [
    {
      question: "Does Phantom Healthcare provide installation and after-sales service?",
      answer: "Yes, Phantom Healthcare provides complete turnkey solutions including site planning, installation, commissioning, operator training, and ongoing technical support. We have service centers in Faridabad (HQ), Mumbai, Chennai, and Kolkata, enabling pan-India service response within 24-48 hours."
    },
    {
      question: "How quickly does Phantom Healthcare respond to service requests?",
      answer: "Phantom Healthcare provides service response within 24-48 hours across India through our service centers in Faridabad, Mumbai, Chennai, and Kolkata. For AMC customers, we offer priority response and remote diagnostic support for faster resolution."
    },
    {
      question: "Can I schedule a site visit from Phantom Healthcare?",
      answer: "Yes, Phantom Healthcare offers free site visits for serious inquiries. Our technical team will visit your facility to assess site requirements, provide recommendations for equipment selection, and prepare a detailed quotation. Contact us at biz@phantomhealthcare.com to schedule a visit."
    },
    {
      question: "What is included in Phantom Healthcare's AMC (Annual Maintenance Contract)?",
      answer: "AMC includes preventive maintenance visits (typically 2-4 per year), emergency repairs, remote diagnostic support, and priority response times. Parts consumed during repairs are charged separately unless you opt for a Comprehensive Maintenance Contract (CMC) which includes spare parts."
    }
  ];

  // Company FAQs
  const companyFaqs = [
    {
      question: "When was Phantom Healthcare established?",
      answer: "Phantom Healthcare was established in 2011 in Faridabad, Haryana, India. Over the past 13+ years, we have grown to become one of India's leading providers of refurbished medical imaging equipment with 170+ installations and 150+ satisfied clients."
    },
    {
      question: "How many MRI and CT installations has Phantom Healthcare completed?",
      answer: "Since 2011, Phantom Healthcare has completed over 170 successful medical imaging equipment installations across India, serving more than 150 satisfied clients including major hospital chains like Apollo, Fortis, Max Healthcare, and Narayana Health."
    },
    {
      question: "Who are the founders of Phantom Healthcare?",
      answer: "Phantom Healthcare was founded by Rochi Nargotra (Director & CEO) and Brijesh Suneja (Managing Director). Both founders bring decades of experience in the medical imaging industry and continue to lead the company's growth and innovation."
    },
    {
      question: "What certifications does Phantom Healthcare have?",
      answer: "Phantom Healthcare maintains ISO certifications for quality management and follows international standards for medical equipment refurbishment. All equipment meets AERB (Atomic Energy Regulatory Board) requirements for radiation equipment in India."
    }
  ];

  // Contact & Location FAQs
  const contactFaqs = [
    {
      question: "How can I contact Phantom Healthcare for a quote?",
      answer: "You can contact Phantom Healthcare for a quote by: Phone: +91 9899963601 (Sales) or +91 129-4312423 (Office), Email: biz@phantomhealthcare.com, WhatsApp: +91 9899963601, or fill out the contact form on our website. We typically respond within 24 hours on business days."
    },
    {
      question: "Where is Phantom Healthcare located and which regions do they serve?",
      answer: "Phantom Healthcare is headquartered in Faridabad, Haryana, India (near Delhi NCR). We serve clients across India, USA (Illinois office), and UAE/Middle East (Sharjah office). Our pan-India service network ensures support for clients in all states."
    },
    {
      question: "Does Phantom Healthcare have international offices?",
      answer: "Yes, Phantom Healthcare has international offices in: USA - 620 Progress Dr, Glendale Heights, Illinois 60139 (Phone: +1 630-720-6801), and UAE - LV 63-C, Al Hamriyah Freezone, Sharjah (Phone: +971 522 208 819). These offices serve customers in North America and the Middle East/Africa regions."
    },
    {
      question: "What are Phantom Healthcare's business hours?",
      answer: "Phantom Healthcare's India office operates Monday to Saturday, 9:00 AM to 6:00 PM IST. For urgent service requests, our 24/7 emergency helpline is available at +91 8545815483. US and UAE offices operate in their respective local business hours."
    }
  ];

  return (
    <main className="min-h-screen">
      {/* JSON-LD Structured Data for SEO */}
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <FAQsPageJsonLd />
      <FAQsSpeakableJsonLd />

      {/* Hero Section with Breadcrumb */}
      <section className="bg-gradient-to-r from-[#2980b9] via-[#3498db] to-[#5dade2] py-8 sm:py-10 md:py-14">
        <div className="w-full max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb - Left aligned */}
          <nav className="mb-4 sm:mb-5" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-white/80">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><span className="mx-1">›</span></li>
              <li className="text-white font-medium">FAQs</li>
            </ol>
          </nav>
          {/* Title and Description - Center aligned */}
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-white drop-shadow-lg">
              Frequently Asked Questions
            </h1>
            <p className="text-base sm:text-lg md:text-xl 2xl:text-2xl text-white/90 mt-3 max-w-3xl mx-auto">
              Find answers to common questions about our medical imaging equipment and services
            </p>
          </div>
        </div>
      </section>

      {/* Quick Jump Navigation */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="w-full max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <a href="#products" className="px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-gray-700 hover:text-primary-600">
              <i className="fa-solid fa-box mr-2"></i>Products & Equipment
            </a>
            <a href="#pricing" className="px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-gray-700 hover:text-primary-600">
              <i className="fa-solid fa-tag mr-2"></i>Pricing & Warranty
            </a>
            <a href="#services" className="px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-gray-700 hover:text-primary-600">
              <i className="fa-solid fa-wrench mr-2"></i>Services
            </a>
            <a href="#company" className="px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-gray-700 hover:text-primary-600">
              <i className="fa-solid fa-building mr-2"></i>Company
            </a>
            <a href="#contact" className="px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-gray-700 hover:text-primary-600">
              <i className="fa-solid fa-phone mr-2"></i>Contact & Location
            </a>
          </div>
        </div>
      </section>

      {/* Products & Equipment FAQs */}
      <div id="products">
        <FAQSection 
          title="Products & Equipment"
          subtitle="Questions about our refurbished MRI scanners, CT scanners, and other medical imaging equipment"
          faqs={productsFaqs}
          variant="white"
        />
      </div>

      {/* Pricing & Warranty FAQs */}
      <div id="pricing">
        <FAQSection 
          title="Pricing & Warranty"
          subtitle="Learn about costs, payment terms, and warranty coverage"
          faqs={pricingFaqs}
          variant="light"
        />
      </div>

      {/* Services FAQs */}
      <div id="services">
        <FAQSection 
          title="Services & Support"
          subtitle="Information about installation, maintenance, and after-sales service"
          faqs={servicesFaqs}
          variant="white"
        />
      </div>

      {/* Company FAQs */}
      <div id="company">
        <FAQSection 
          title="About Phantom Healthcare"
          subtitle="Learn about our company history, leadership, and certifications"
          faqs={companyFaqs}
          variant="light"
        />
      </div>

      {/* Contact & Location FAQs */}
      <div id="contact">
        <FAQSection 
          title="Contact & Location"
          subtitle="How to reach us and our office locations"
          faqs={contactFaqs}
          variant="white"
        />
      </div>

      {/* Still Have Questions CTA */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="w-full max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-bold text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-white/90 text-base sm:text-lg 2xl:text-xl max-w-2xl mx-auto mb-8">
            Our team is here to help. Contact us for personalized assistance with your medical imaging needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary-600 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300"
            >
              <i className="fa-solid fa-paper-plane mr-2"></i>
              Contact Us
            </Link>
            <a 
              href="tel:+919899963601" 
              className="inline-flex items-center justify-center px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors duration-300"
            >
              <i className="fa-solid fa-phone mr-2"></i>
              Call +91 9899963601
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
