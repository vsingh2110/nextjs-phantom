/**
 * ABOUT PAGE COMPONENT
 * ====================
 * 
 * PURPOSE: Company information, history, leadership team, and values
 * CREATED: Initial development
 * LAST MODIFIED: November 29, 2025 (Complete rewrite with SEO, counter animation, fixes)
 * 
 * FEATURES:
 * - Compact hero section with breadcrumb
 * - About company section with history (since 2011)
 * - Animated counter section (reusing home page counter logic)
 * - Leadership team (Rochi Nargotra - CEO, Brijesh Suneja - MD)
 * - Core values section with mobile-centered alignment
 * - Call to action
 * 
 * SEO:
 * - Optimized title (<65 chars) and description (<170 chars)
 * - Complete metadata with Open Graph and Twitter cards
 * - JSON-LD structured data (Organization, BreadcrumbList, AboutPage)
 * - Proper heading hierarchy (single h1, h2s, h3s)
 * 
 * RELATED FILES:
 * - src/components/seo/JsonLd.tsx
 * - src/components/about/AboutCounterSection.tsx
 */

import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { BreadcrumbJsonLd, AboutPageFullJsonLd, MedicalBusinessJsonLd, AboutFAQJsonLd, AboutSpeakableJsonLd } from '@/components/seo/JsonLd'
import AboutCounterSection from '@/components/about/AboutCounterSection'
import FAQSection from '@/components/ui/FAQSection'

export const metadata: Metadata = {
  title: 'About Us - Phantom Healthcare | Since 2011',
  description: 'Phantom Healthcare: 170+ MRI installations, 150+ clients since 2011. Leading refurbisher of MRI, CT, PET-CT equipment in India.',
  keywords: ['Phantom Healthcare', 'medical imaging India', 'MRI refurbishment', 'CT scanner provider', 'Faridabad'],
  openGraph: {
    title: 'About Phantom Healthcare - Medical Imaging Partner Since 2011',
    description: '170+ MRI installations, 150+ clients. Leading medical imaging equipment provider.',
    url: 'https://phantomhealthcare.com/about',
    siteName: 'Phantom Healthcare',
    images: [
      {
        url: '/images/iria 2024 1.jpg',
        width: 1200,
        height: 630,
        alt: 'Phantom Healthcare Team at IRIA 2024',
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Phantom Healthcare',
    description: '170+ MRI installations since 2011. India\'s leading medical imaging provider.',
    images: ['/images/iria 2024 1.jpg'],
    creator: '@Phantomhealthc',
  },
  alternates: {
    canonical: 'https://phantomhealthcare.com/about',
  },
};

export default function About() {
  // Breadcrumb data for the about page
  const breadcrumbItems = [
    { name: 'Home', url: 'https://phantomhealthcare.com' },
    { name: 'About Us', url: 'https://phantomhealthcare.com/about' }
  ];

  // About page FAQ data for AI SEO (GEO/AEO)
  const aboutFaqs = [
    {
      question: "When was Phantom Healthcare established?",
      answer: "Phantom Healthcare was established in 2011 in Faridabad, Haryana, India. Over the past 13+ years, we have grown to become one of India's leading providers of refurbished medical imaging equipment with 170+ installations and 150+ satisfied clients."
    },
    {
      question: "Who are the founders of Phantom Healthcare?",
      answer: "Phantom Healthcare was founded by Rochi Nargotra (Director & CEO) and Brijesh Suneja (Managing Director). Both founders bring decades of experience in the medical imaging industry and continue to lead the company's growth and innovation."
    },
    {
      question: "What is Phantom Healthcare's refurbishment process?",
      answer: "Our refurbishment process includes: 150-point quality inspection, complete cosmetic restoration, replacement of worn components, software updates and calibration, rigorous testing protocols, and quality certification. Each machine is restored to near-original specifications before delivery."
    },
    {
      question: "What certifications does Phantom Healthcare have?",
      answer: "Phantom Healthcare maintains ISO certifications for quality management and follows international standards for medical equipment refurbishment. All equipment meets AERB (Atomic Energy Regulatory Board) requirements for radiation equipment in India."
    },
    {
      question: "How many employees does Phantom Healthcare have?",
      answer: "Phantom Healthcare employs 50-100 professionals including certified biomedical engineers, service technicians, sales specialists, and support staff across our offices in India, USA, and UAE."
    }
  ];

  return (
    <main className="min-h-screen">
      {/* JSON-LD Structured Data for SEO - Using comprehensive schemas */}
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <AboutPageFullJsonLd />
      <MedicalBusinessJsonLd />
      <AboutFAQJsonLd />
      <AboutSpeakableJsonLd />

      {/* Compact Hero Section with strong gradient */}
      <section className="bg-gradient-to-r from-[#2980b9] via-[#3498db] to-[#5dade2] py-8 sm:py-10 md:py-14">
        <div className="w-full max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb - Left aligned */}
          <nav className="mb-4 sm:mb-5" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-white/80">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><span className="mx-1">›</span></li>
              <li className="text-white font-medium">About Us</li>
            </ol>
          </nav>
          {/* Title and Description - Center aligned */}
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-white drop-shadow-lg">
              About Phantom Healthcare
            </h1>
            <p className="text-base sm:text-lg md:text-xl 2xl:text-2xl text-white/90 mt-3 max-w-3xl mx-auto">
              India&apos;s Leading Medical Imaging Equipment Provider Since 2011
            </p>
          </div>
        </div>
      </section>

      {/* IRIA 2024 Hero Image Section */}
      <section className="relative w-full bg-gray-100">
        <div className="w-full max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[2000px] mx-auto">
          <div className="relative aspect-[21/9] sm:aspect-[21/8] w-full">
            <Image 
              src="/images/iria 2024 1.jpg" 
              alt="Phantom Healthcare Team at IRIA 2024 Exhibition"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </section>

      {/* About Company Section - Larger text for big screens */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="w-full max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 2xl:gap-20 items-center">
            
            {/* Content - Larger font sizes for big screens */}
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl 2xl:text-5xl font-bold text-gray-900 mb-6 lg:mb-8">
                Who We Are
              </h2>
              <div className="space-y-4 lg:space-y-6 text-gray-600 text-base sm:text-lg lg:text-lg 2xl:text-xl leading-relaxed">
                <p>
                  Our Group started operations in <strong className="text-primary-600">year 2011</strong> and has become the leading remarketers, refurbishers and re-assemblers of Pre-owned Super Conductive MRIs and CT Scanners in India.
                </p>
                <p>
                  Phantom Healthcare strives to provide professional support with quality services that are custom fit to the needs of today&apos;s growing healthcare industry. We aim to develop long-term relationships with our clients and do our best possible to keep Imaging equipment up-to-date and working like new.
                </p>
                <p>
                  At Phantom Healthcare, we believe that value is not just monetary but also includes meeting client expectations by providing high quality equipment and service. Our team understands that how we operate is just as crucial as what we accomplish.
                </p>
                <p className="font-medium text-gray-700">
                  Our clients are our family and experience many advantages over any other sales and service provider in India.
                </p>
              </div>
            </div>

            {/* Image - Larger for big screens */}
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image 
                  src="/images/phantom-building.jpg" 
                  alt="Phantom Healthcare Building - Plot 51, Sector 27C, Faridabad"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section with Running Counter Animation */}
      <AboutCounterSection />

      {/* Leadership Team Section - Larger for big screens */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="w-full max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-bold text-gray-900 mb-4">
              Our Message
            </h2>
            <p className="text-gray-600 text-base sm:text-lg 2xl:text-xl max-w-3xl mx-auto">
              Meet the visionary leaders behind Phantom Healthcare
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 max-w-5xl 2xl:max-w-6xl mx-auto">
            
            {/* Rochi Nargotra - CEO */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-72 sm:h-80 md:h-96 lg:h-[400px] 2xl:h-[480px] overflow-hidden">
                <Image 
                  src="/images/rochi-nargotra.jpg" 
                  alt="Rochi Nargotra - Director & CEO of Phantom Healthcare"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 lg:p-8 text-center">
                <h3 className="text-xl sm:text-2xl 2xl:text-3xl font-bold text-gray-900 mb-1">
                  Rochi Nargotra
                </h3>
                <p className="text-primary-600 font-medium text-base 2xl:text-lg mb-4">Director & CEO</p>
                <blockquote className="text-gray-600 italic border-l-4 border-primary-500 pl-4 text-left text-sm sm:text-base 2xl:text-lg">
                  &ldquo;At Phantom Healthcare, we are focused on providing to the clients, the best service with affordable pricing while improving Equipment life.&rdquo;
                </blockquote>
              </div>
            </div>

            {/* Brijesh Suneja - MD */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-72 sm:h-80 md:h-96 lg:h-[400px] 2xl:h-[480px] overflow-hidden">
                <Image 
                  src="/images/brijesh-suneja.jpg" 
                  alt="Brijesh Suneja - Managing Director of Phantom Healthcare"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 lg:p-8 text-center">
                <h3 className="text-xl sm:text-2xl 2xl:text-3xl font-bold text-gray-900 mb-1">
                  Brijesh Suneja
                </h3>
                <p className="text-primary-600 font-medium text-base 2xl:text-lg mb-4">Managing Director</p>
                <blockquote className="text-gray-600 italic border-l-4 border-primary-500 pl-4 text-left text-sm sm:text-base 2xl:text-lg">
                  &ldquo;The professionals of the company have dedicatedly offered the customers the products that comply not only with regulatory quality standards but also come well within client&apos;s budgets.&rdquo;
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section - Center aligned on mobile */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="w-full max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 text-base sm:text-lg 2xl:text-xl max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Quality */}
            <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-6 lg:p-8 border border-primary-100 hover:shadow-lg transition-shadow duration-300 text-center sm:text-left">
              <div className="w-14 h-14 2xl:w-16 2xl:h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-4 mx-auto sm:mx-0">
                <i className="fa-solid fa-star text-primary-600 text-2xl 2xl:text-3xl"></i>
              </div>
              <h3 className="text-xl 2xl:text-2xl font-bold text-gray-900 mb-2">Quality</h3>
              <p className="text-gray-600 text-sm sm:text-base 2xl:text-lg">
                We maintain the highest standards of quality in all our products and services, ensuring reliability and performance.
              </p>
            </div>

            {/* Trust */}
            <div className="bg-gradient-to-br from-secondary-50 to-white rounded-2xl p-6 lg:p-8 border border-secondary-100 hover:shadow-lg transition-shadow duration-300 text-center sm:text-left">
              <div className="w-14 h-14 2xl:w-16 2xl:h-16 bg-secondary-100 rounded-xl flex items-center justify-center mb-4 mx-auto sm:mx-0">
                <i className="fa-solid fa-handshake text-secondary-600 text-2xl 2xl:text-3xl"></i>
              </div>
              <h3 className="text-xl 2xl:text-2xl font-bold text-gray-900 mb-2">Trust</h3>
              <p className="text-gray-600 text-sm sm:text-base 2xl:text-lg">
                Building long-term relationships based on trust, transparency, and reliability with our clients and partners.
              </p>
            </div>

            {/* Customer Focus */}
            <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-6 lg:p-8 border border-primary-100 hover:shadow-lg transition-shadow duration-300 text-center sm:text-left">
              <div className="w-14 h-14 2xl:w-16 2xl:h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-4 mx-auto sm:mx-0">
                <i className="fa-solid fa-users text-primary-600 text-2xl 2xl:text-3xl"></i>
              </div>
              <h3 className="text-xl 2xl:text-2xl font-bold text-gray-900 mb-2">Customer Focus</h3>
              <p className="text-gray-600 text-sm sm:text-base 2xl:text-lg">
                Our customers are at the heart of everything we do. Their success is our success.
              </p>
            </div>

            {/* Innovation */}
            <div className="bg-gradient-to-br from-secondary-50 to-white rounded-2xl p-6 lg:p-8 border border-secondary-100 hover:shadow-lg transition-shadow duration-300 text-center sm:text-left">
              <div className="w-14 h-14 2xl:w-16 2xl:h-16 bg-secondary-100 rounded-xl flex items-center justify-center mb-4 mx-auto sm:mx-0">
                <i className="fa-solid fa-lightbulb text-secondary-600 text-2xl 2xl:text-3xl"></i>
              </div>
              <h3 className="text-xl 2xl:text-2xl font-bold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600 text-sm sm:text-base 2xl:text-lg">
                Continuously improving and adopting the latest technologies to serve our clients better.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="w-full max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-gray-600 text-base sm:text-lg 2xl:text-xl max-w-3xl mx-auto">
              Comprehensive medical imaging solutions for healthcare facilities
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
            {[
              { name: 'MRI Scanner', icon: 'fa-solid fa-magnet' },
              { name: 'CT Scanner', icon: 'fa-solid fa-procedures' },
              { name: 'PET-CT', icon: 'fa-solid fa-atom' },
              { name: 'Cath-Lab', icon: 'fa-solid fa-heart-pulse' },
              { name: 'Gamma Camera SPECT', icon: 'fa-solid fa-radiation' },
              { name: 'Bone Densitometer', icon: 'fa-solid fa-bone' },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-4 lg:p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 lg:w-14 lg:h-14 2xl:w-16 2xl:h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className={`${item.icon} text-primary-600 text-xl lg:text-2xl`}></i>
                </div>
                <h3 className="text-sm sm:text-base 2xl:text-lg font-semibold text-gray-900">{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - For AI SEO (GEO/AEO) */}
      <FAQSection 
        title="About Phantom Healthcare"
        subtitle="Common questions about our company, history, and expertise"
        faqs={aboutFaqs}
        variant="white"
      />

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="w-full max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-bold text-white mb-4">
            Ready to Partner With Us?
          </h2>
          <p className="text-white/90 text-base sm:text-lg 2xl:text-xl max-w-2xl mx-auto mb-8">
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