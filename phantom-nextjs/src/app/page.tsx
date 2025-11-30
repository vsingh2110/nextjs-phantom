/**
 * HOME PAGE COMPONENT
 * ===================
 * 
 * PURPOSE: Main landing page for Phantom Healthcare website
 * CREATED: Initial development (date unknown)
 * LAST MODIFIED: November 29, 2025 (SEO metadata and JSON-LD added)
 * 
 * FEATURES:
 * - Hero slider with multiple slides and call-to-action buttons
 * - Top notification block for important announcements
 * - "What We Do" services section with 4 main service categories
 * - Featured products grid showcasing medical equipment
 * - Company statistics section with key metrics
 * - About Us section with company overview
 * - Process workflow section explaining company approach
 * - Customer testimonials carousel (newly implemented)
 * - Global contact modal that can be triggered from any component
 * 
 * SEO:
 * - Complete metadata with Open Graph and Twitter cards
 * - JSON-LD structured data (Organization, LocalBusiness, WebSite)
 * - Proper heading hierarchy and semantic HTML
 * 
 * COMPONENTS USED:
 * - HeroSlider: Main banner with rotating slides
 * - TopBlock: Notification/announcement bar
 * - ContactFormModal: Global contact form modal
 * - TestimonialsCarousel: Customer testimonials with Swiper.js (July 12, 2025)
 * 
 * RESPONSIVE DESIGN:
 * - Mobile-first approach with progressive enhancement
 * - Grid layouts adapt from 1 column (mobile) to 4 columns (desktop)
 * - Images and text scale appropriately for different screen sizes
 * - Uses Tailwind CSS utility classes for consistent spacing
 * 
 * STATE MANAGEMENT:
 * - isContactModalOpen: Controls global contact modal visibility
 * - Event listener for 'openContactModal' custom event from other components
 * 
 * STYLING APPROACH:
 * - Tailwind CSS for utility-first styling
 * - Custom gradient backgrounds for accent sections
 * - Card hover effects for interactive elements
 * - Consistent spacing using Tailwind's spacing scale
 * - Font smoothing (antialiased) applied following user preferences
 * 
 * PERFORMANCE CONSIDERATIONS:
 * - Next.js Image component for optimized image loading
 * - unoptimized flag used for some images (should be reviewed)
 * - Client-side rendering for interactive components
 * 
 * RECENT CHANGES:
 * - November 29, 2025: Added complete SEO metadata and JSON-LD structured data
 * - July 12, 2025: Integrated new TestimonialsCarousel component
 * - Replaced previous custom carousel with Swiper.js implementation
 * - Added proper responsive behavior for testimonials section
 * 
 * ACCESSIBILITY:
 * - Semantic HTML structure with proper heading hierarchy
 * - Alt text for all images
 * - ARIA labels for interactive elements
 * - Keyboard navigation support through standard HTML elements
 * 
 * SEO CONSIDERATIONS:
 * - Proper heading structure (h1, h2, h3)
 * - Descriptive alt text for images
 * - Semantic content organization
 * - Fast loading with optimized images
 * - JSON-LD structured data for rich snippets
 * 
 * KNOWN ISSUES:
 * - Some images use unoptimized flag (performance impact)
 * - Floating contact button is commented out (feature incomplete)
 * - Hard-coded product data (should consider CMS integration)
 * 
 * FUTURE IMPROVEMENTS:
 * - Implement proper image optimization for all images
 * - Add loading states for dynamic content
 * - Consider lazy loading for below-fold sections
 * - Implement proper error boundaries
 * - Add analytics tracking for user interactions
 * 
 * RELATED FILES:
 * - src/components/HeroSlider.tsx
 * - src/components/TopBlock.tsx  
 * - src/components/ContactFormModal.tsx
 * - src/components/TestimonialsCarousel.tsx (July 12, 2025)
 * - docs/dev-notes/2025-07-12-testimonials-carousel-implementation.md
 * 
 * USAGE:
 * This is the default export for the root page route (/)
 */

import type { Metadata } from 'next';
import HeroSlider from '@/components/home/HeroSlider'
import Image from 'next/image'
import Link from 'next/link'
import TopBlock from '@/components/layout/TopBlock'
import ContactFormModalWrapper from '@/components/ui/ContactFormModalWrapper';
import TestimonialsCarousel from '@/components/home/TestimonialsCarousel'
import RegionalOffices from '@/components/home/RegionalOffices'
import CounterSection from '@/components/home/CounterSection';
import FeaturedProductsCarousel from '@/components/home/FeaturedProductsCarousel';
import AboutSection from '@/components/home/AboutSection';
import { OrganizationJsonLd, LocalBusinessJsonLd, WebSiteJsonLd, BreadcrumbJsonLd, MedicalDeviceJsonLd, MedicalBusinessJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Phantom Healthcare | MRI, CT Scanner, PET-CT, Cath-Lab India',
  description: 'India\'s leading refurbished MRI, CT Scanner, PET-CT, Cath-Lab provider. 170+ installations, 150+ clients since 2011.',
  keywords: ['MRI machines India', 'CT scanner Faridabad', 'PET-CT India', 'Cath-Lab', 'refurbished medical equipment', 'GE MRI', 'Siemens MRI', 'Phantom Healthcare'],
  openGraph: {
    title: 'Phantom Healthcare - India\'s Leading Medical Imaging Provider',
    description: '170+ MRI installations, 150+ clients. Refurbished MRI, CT Scanner, PET-CT, Cath-Lab since 2011.',
    url: 'https://phantomhealthcare.com',
    siteName: 'Phantom Healthcare',
    images: [
      {
        url: '/images/phantom-building.jpg',
        width: 1200,
        height: 630,
        alt: 'Phantom Healthcare - Medical Imaging Equipment',
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Phantom Healthcare - Medical Imaging Equipment',
    description: '170+ MRI installations, 150+ clients. India\'s leading medical imaging provider.',
    images: ['/images/phantom-building.jpg'],
    creator: '@Phantomhealthc',
  },
  alternates: {
    canonical: 'https://phantomhealthcare.com',
  },
};

// Home page breadcrumb (just home)
const homeBreadcrumb = [
  { name: 'Home', url: 'https://phantomhealthcare.com' }
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* JSON-LD Structured Data for SEO */}
      <OrganizationJsonLd />
      <LocalBusinessJsonLd />
      <WebSiteJsonLd />
      <MedicalDeviceJsonLd />
      <MedicalBusinessJsonLd />
      <BreadcrumbJsonLd items={homeBreadcrumb} />
      
      {/* Global Contact Modal (can be triggered from anywhere) */}
      <ContactFormModalWrapper />
      
      {/* Visually hidden H1 for SEO - Screen readers will read this */}
      {/* H1 should be 20-70 chars (this is 60 chars) */}
      <h1 className="sr-only">
        Phantom Healthcare - Refurbished MRI &amp; CT Scanner India
      </h1>
      
      {/* Hero Slider */}
      <HeroSlider />
      <TopBlock />
      {/* <FloatingElements /> */}

      {/* About Us Section */}
      <AboutSection />

      {/* What We Do Section */}
      <section className="py-20 bg-gray-50">
        <div className="w-full 2xl:max-w-[1600px] 3xl:max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-6 lg:mb-8">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 text-center">
              <Image src="/images/hand.png" alt="Sales & Supply" width={96} height={96} className="mx-auto mb-6 w-24 h-24" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sales & Supply with transparent deals​</h3>
              <p className="text-gray-600">Buy New as well as refurbished equipment from a wide range of models</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 text-center">
              <Image src="/images/up.png" alt="Upgrade" width={96} height={96} className="mx-auto mb-6 w-24 h-24" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Upgrade your existing MRI and CT Machine​</h3>
              <p className="text-gray-600">We have one of the largest inventory of spare parts for upgrades and repairs</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 text-center">
              <Image src="/images/service.jpg" alt="Service Maintenance" width={96} height={96} className="mx-auto mb-6 w-24 h-24 object-cover rounded-lg" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Service Maintenance Plans All over India​​</h3>
              <p className="text-gray-600">Our field engineers are present all over India for instant troubleshooting.</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 text-center">
              <Image src="/images/site.png" alt="Site Planning" width={96} height={96} className="mx-auto mb-6 w-24 h-24" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Site Planning with full financial assistance​</h3>
              <p className="text-gray-600">We provide full support and guidance from site planning with financial assistance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-2 bg-white antialiased">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-1">
            Featured Products
          </h2>
          <FeaturedProductsCarousel />
      </section>

      {/* Stats Section */}


      {/* Floating Contact Button - HIDDEN */}
      {/* <button 
        className="fixed bottom-8 right-8 z-50 bg-primary-600 hover:bg-primary-700 text-white w-16 h-16 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
        aria-label="Contact Us"
      >
        <i className="fas fa-phone text-xl"></i>
      </button> */}

      {/* Featured Spare Parts Section */}
      <section className="py-16 lg:py-24 bg-white antialiased">
        <div className="w-full 2xl:max-w-[1600px] 3xl:max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-6 lg:mb-8">
            Featured Spare Parts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* MRI Coils */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 hover:shadow-2xl transition-all duration-300 border border-gray-100 text-center flex flex-col h-full">
              <div className="relative w-full aspect-[4/3] flex justify-center items-center bg-white">
                <Image
                  src="/images/machines/spare parts/Brain coil.png"
                  alt="MRI Coils"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain p-6"
                />
                <span style={{
                  position: 'absolute',
                  top: '14px',
                  left: '10px',
                  zIndex: 10,
                  display: 'inline-block',
                  padding: '0.18em 1.2em',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  color: '#fff',
                  background: '#59913d',
                  borderRadius: '0.35em',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
                  transform: 'rotate(-18deg)',
                  letterSpacing: '0.2px',
                  textShadow: '0 1px 2px #0001',
                  opacity: 0.93
                }}>
                  Available
                </span>
              </div>
              <div className="p-5 flex flex-col flex-1 items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">MRI Coils</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    High-quality MRI coils for enhanced imaging performance and patient comfort.
                  </p>
                </div>
                <Link 
                  href="https://phantomhealthcare.shop/" 
                  className="inline-flex items-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300 text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                  <i className="fas fa-external-link-alt ml-2"></i>
                </Link>
              </div>
            </div>

            {/* Cold Head MRI Machine */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 hover:shadow-2xl transition-all duration-300 border border-gray-100 text-center flex flex-col h-full">
              <div className="relative w-full aspect-[4/3] flex justify-center items-center bg-white">
                <Image
                  src="/images/machines/spare parts/cold head.png"
                  alt="Cold Head MRI Machine"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain p-6"
                />
                <span style={{
                  position: 'absolute',
                  top: '14px',
                  left: '10px',
                  zIndex: 10,
                  display: 'inline-block',
                  padding: '0.18em 1.2em',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  color: '#fff',
                  background: '#59913d',
                  borderRadius: '0.35em',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
                  transform: 'rotate(-18deg)',
                  letterSpacing: '0.2px',
                  textShadow: '0 1px 2px #0001',
                  opacity: 0.93
                }}>
                  Available
                </span>
              </div>
              <div className="p-5 flex flex-col flex-1 items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Cold Head MRI Machine</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Essential cold head components for MRI machine cooling systems and helium management.
                  </p>
                </div>
                <Link 
                  href="https://phantomhealthcare.shop/" 
                  className="inline-flex items-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300 text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                  <i className="fas fa-external-link-alt ml-2"></i>
                </Link>
              </div>
            </div>

            {/* MHU Tube - CT Scanner */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 hover:shadow-2xl transition-all duration-300 border border-gray-100 text-center flex flex-col h-full">
              <div className="relative w-full aspect-[4/3] flex justify-center items-center bg-white">
                <Image
                  src="/images/machines/spare parts/MHU Tube.png"
                  alt="MHU Tube - CT Scanner"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain p-6"
                />
                <span style={{
                  position: 'absolute',
                  top: '14px',
                  left: '10px',
                  zIndex: 10,
                  display: 'inline-block',
                  padding: '0.18em 1.2em',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  color: '#fff',
                  background: '#59913d',
                  borderRadius: '0.35em',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
                  transform: 'rotate(-18deg)',
                  letterSpacing: '0.2px',
                  textShadow: '0 1px 2px #0001',
                  opacity: 0.93
                }}>
                  Available
                </span>
              </div>
              <div className="p-5 flex flex-col flex-1 items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">MHU Tube - CT Scanner</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    High-performance MHU tubes for CT scanners ensuring optimal imaging quality and durability.
                  </p>
                </div>
                <Link 
                  href="https://phantomhealthcare.shop/" 
                  className="inline-flex items-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300 text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                  <i className="fas fa-external-link-alt ml-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Products Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-50 to-secondary-50 antialiased">
        <div className="w-full 2xl:max-w-[1600px] 3xl:max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-6 lg:mb-8">
            All Products
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {/* GE MRI */}
            <div className="group">
              <Link 
                href="#" 
                className="block w-full bg-white hover:bg-primary-600 text-gray-900 hover:text-white font-semibold py-4 px-3 sm:px-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl text-center text-sm sm:text-base border border-gray-200"
              >
                GE MRI
              </Link>
            </div>

            {/* Siemens MRI */}
            <div className="group">
              <Link 
                href="#" 
                className="block w-full bg-white hover:bg-primary-600 text-gray-900 hover:text-white font-semibold py-4 px-3 sm:px-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl text-center text-sm sm:text-base border border-gray-200"
              >
                Siemens MRI
              </Link>
            </div>

            {/* CT */}
            <div className="group">
              <Link 
                href="#" 
                className="block w-full bg-white hover:bg-primary-600 text-gray-900 hover:text-white font-semibold py-4 px-3 sm:px-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl text-center text-sm sm:text-base border border-gray-200"
              >
                CT
              </Link>
            </div>

            {/* Cath-Lab */}
            <div className="group">
              <Link 
                href="#" 
                className="block w-full bg-white hover:bg-primary-600 text-gray-900 hover:text-white font-semibold py-4 px-3 sm:px-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl text-center text-sm sm:text-base border border-gray-200"
              >
                Cath-Lab
              </Link>
            </div>

            {/* PET-CT */}
            <div className="group">
              <Link 
                href="#" 
                className="block w-full bg-white hover:bg-primary-600 text-gray-900 hover:text-white font-semibold py-4 px-3 sm:px-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl text-center text-sm sm:text-base border border-gray-200"
              >
                PET-CT
              </Link>
            </div>

            {/* Gamma Camera SPECT */}
            <div className="group">
              <Link 
                href="#" 
                className="block w-full bg-white hover:bg-primary-600 text-gray-900 hover:text-white font-semibold py-4 px-3 sm:px-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl text-center text-sm sm:text-base border border-gray-200"
              >
                Gamma Camera SPECT
              </Link>
            </div>

            {/* Bone Densitometer */}
            <div className="group">
              <Link 
                href="#" 
                className="block w-full bg-white hover:bg-primary-600 text-gray-900 hover:text-white font-semibold py-4 px-3 sm:px-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl text-center text-sm sm:text-base border border-gray-200"
              >
                Bone Densitometer
              </Link>
            </div>

            {/* Spare Parts */}
            <div className="group">
              <Link 
                href="https://phantomhealthcare.shop/" 
                className="block w-full bg-white hover:bg-secondary-600 text-gray-900 hover:text-white font-semibold py-4 px-3 sm:px-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl text-center text-sm sm:text-base border border-gray-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                Spare Parts
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-4 bg-white antialiased">
        <div className="w-full 2xl:max-w-[1600px] 3xl:max-w-[2000px] mx-auto px-2 md:px-2 lg:px-4 xl:px-8 2xl:px-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-2 lg:mb-4">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-4 2xl:gap-10 3xl:gap-16 place-content-center">
            {/* 15+ Years of Experience */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100 text-center p-6 xl:p-4 2xl:p-8 3xl:p-12 w-full flex flex-col justify-center items-center min-h-[340px] max-w-full xl:max-w-[320px] 2xl:aspect-square 3xl:aspect-square">
              <div className="mb-6 p-4 flex items-center justify-center">
                <Image
                  src="/images/15.jpg"
                  alt="15+ Years of Experience"
                  width={120}
                  height={120}
                  className="w-20 h-20 sm:w-24 sm:h-24 mx-auto object-cover rounded-full border-4 border-primary-100"
                />
              </div>
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 leading-tight" style={{fontSize: 'clamp(1rem, 1.5vw, 1.25rem)'}}>
                15+ Years of Experience
              </h3>
              <p className="text-gray-600 leading-relaxed" style={{fontSize: 'clamp(0.875rem, 1.2vw, 1rem)'}}>
                We have 15 year experience and sell best refurbished Machine In India
              </p>
            </div>

            {/* 24*7 Service & Support */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100 text-center p-6 xl:p-4 2xl:p-8 3xl:p-12 w-full flex flex-col justify-center items-center min-h-[340px] max-w-full xl:max-w-[320px] 2xl:aspect-square 3xl:aspect-square">
              <div className="mb-6 p-4 flex items-center justify-center">
                <Image
                  src="/images/24.jpg"
                  alt="24*7 Service & Support"
                  width={120}
                  height={120}
                  className="w-20 h-20 sm:w-24 sm:h-24 mx-auto object-cover rounded-full border-4 border-primary-100"
                />
              </div>
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 leading-tight" style={{fontSize: 'clamp(1rem, 1.5vw, 1.25rem)'}}>24*7 Service & <br/> Support</h3>
              <p className="text-gray-600 leading-relaxed" style={{fontSize: 'clamp(0.875rem, 1.2vw, 1rem)'}}>
                Our team is well experienced to set up refurbished MRI machine
              </p>
            </div>

            {/* Best Quality AERB Approved */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100 text-center p-6 xl:p-4 2xl:p-8 3xl:p-12 w-full flex flex-col justify-center items-center min-h-[340px] max-w-full xl:max-w-[320px] 2xl:aspect-square 3xl:aspect-square">
              <div className="mb-6 p-4 flex items-center justify-center">
                <Image
                  src="/images/best.jpg"
                  alt="Best Quality AERB Approved"
                  width={120}
                  height={120}
                  className="w-20 h-20 sm:w-24 sm:h-24 mx-auto object-cover rounded-full border-4 border-primary-100"
                />
              </div>
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 leading-tight break-words whitespace-normal" style={{fontSize: 'clamp(1rem, 1.5vw, 1.25rem)'}}>
                Best Quality<br/><span className="whitespace-nowrap">AERB Approved</span>
              </h3>
              <p className="text-gray-600 leading-relaxed" style={{fontSize: 'clamp(0.875rem, 1.2vw, 1rem)'}}>
                We are giving 100% satisfied guaranteed result of client​
              </p>
            </div>

            {/* Skilled Professional */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100 text-center p-6 xl:p-4 2xl:p-8 3xl:p-12 w-full flex flex-col justify-center items-center min-h-[340px] max-w-full xl:max-w-[320px] 2xl:aspect-square 3xl:aspect-square">
              <div className="mb-6 p-4 flex items-center justify-center">
                <Image
                  src="/images/skill.jpg"
                  alt="Skilled Professional"
                  width={120}
                  height={120}
                  className="w-20 h-20 sm:w-24 sm:h-24 mx-auto object-cover rounded-full border-4 border-primary-100"
                />
              </div>
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 leading-tight" style={{fontSize: 'clamp(1rem, 1.5vw, 1.25rem)'}}>Skilled <br/> Professional</h3>
              <p className="text-gray-600 leading-relaxed" style={{fontSize: 'clamp(0.875rem, 1.2vw, 1rem)'}}>
                We provide a dedicated work for better coordination and with getting
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Counter Section (Animated, scroll-triggered) */}
      <CounterSection />

      {/* Our Process Section */}
      {/*
        Responsive scaling: Our Process section container and images grow on xl/2xl/3xl screens for ultra-wide monitor support.
        - max-w-7xl: default
        - xl:max-w-[90vw]: up to 90% viewport width on xl
        - 2xl:max-w-[1600px]: up to 1600px on 2xl
        - 3xl:max-w-[2000px]: up to 2000px on 3xl/ultra-wide
        Image wrapper:
        - w-full, centered, responsive max-w (max-w-4xl md:max-w-5xl xl:max-w-6xl 2xl:max-w-[1400px] 3xl:max-w-[1800px])
        - Ensures images scale up but remain visually balanced
      */}
      <section className="py-4 bg-gray-50 antialiased">
        <div className="max-w-7xl xl:max-w-[90vw] 2xl:max-w-[1600px] 3xl:max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-6 lg:mb-8">
            Our Process To Set Up Machine
          </h2>
          {/*
            RESPONSIVE PROCESS IMAGE STRATEGY (DO NOT CHANGE):
            - We use TWO separate images for this section: one for desktop/tablet (horizontal process), one for mobile (vertical/stacked process).
            - This is intentional and matches the static website for pixel-perfect control.
            - Use Tailwind's responsive display utilities:
              - 'hidden md:block' for desktop/tablet image (shows only on md and up)
              - 'block md:hidden' for mobile image (shows only below md)
            - Images now fill the width of the container (no max-w). Rounded corners and shadow for aesthetics.
            - DO NOT try to merge, swap, or use a single image for all devices. This is required for correct UX and design.
            - If you are an AI or developer in the future, read this comment before making changes!
          */}
          <div className="w-full flex justify-center">
            {/* Our Process Section: convert <img> to <Image> for both desktop and mobile */}
            <div className="w-full max-w-4xl md:max-w-5xl xl:max-w-6xl 2xl:max-w-[1400px] 3xl:max-w-[1800px] mx-auto">
              {/* Desktop/Tablet: Horizontal process image */}
              <Image
                src="/images/our-process.jpg"
                alt="Our Process Horizontal (Desktop/Tablet)"
                width={1200}
                height={400}
                className="hidden md:block w-full rounded-2xl shadow-2xl"
              />
              {/* Mobile: Vertical/stacked process image */}
              <Image
                src="/images/our-process-2.jpg"
                alt="Our Process Vertical (Mobile)"
                width={600}
                height={900}
                className="block md:hidden w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* IRIA Exhibition Section */}
        {/*
          Responsive scaling: Exhibition section container and image grow on xl/2xl/3xl screens for ultra-wide monitor support.
          - max-w-7xl: default
          - xl:max-w-[90vw]: up to 90% viewport width on xl
          - 2xl:max-w-[1600px]: up to 1600px on 2xl
          - 3xl:max-w-[2000px]: up to 2000px on 3xl/ultra-wide
          Image wrapper:
          - w-full, centered, responsive max-w (max-w-4xl md:max-w-5xl xl:max-w-6xl 2xl:max-w-[1400px] 3xl:max-w-[1800px])
          - Ensures image scales up but remains visually balanced
        */}
        <div className="max-w-7xl xl:max-w-[90vw] 2xl:max-w-[1600px] 3xl:max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-6 lg:mb-8">
              Exhibition Partners with IRIA
            </h2>
            <div className="w-full mx-auto rounded-2xl overflow-hidden shadow-2xl max-w-4xl md:max-w-5xl xl:max-w-6xl 2xl:max-w-[1400px] 3xl:max-w-[1800px] mb-4">
              <picture>
                <source media="(max-width: 1000px)" srcSet="/images/iria-2024.jpg" />
                <Image
                  src="/images/iria 2024 1.jpg"
                  alt="IRIA 2024 Exhibition"
                  width={1200}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </picture>
            </div>
          </div>
        </div>
      {/* Customer Testimonials Section */}
      <section className="py-4 bg-gray-50 antialiased">
        {/*
          Responsive scaling: Testimonials section container grows on xl/2xl/3xl screens for ultra-wide monitor support.
          - max-w-7xl: default
          - xl:max-w-[90vw]: up to 90% viewport width on xl
          - 2xl:max-w-[1600px]: up to 1600px on 2xl
          - 3xl:max-w-[2000px]: up to 2000px on 3xl/ultra-wide
        */}
        <div className="max-w-7xl xl:max-w-[90vw] 2xl:max-w-[1600px] 3xl:max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-6 lg:mb-8">
            Customer Testimonials
          </h2>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* Regional Offices Section */}
      <RegionalOffices />

    </main>
  )
} 