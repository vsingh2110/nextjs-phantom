"use client";
import { useState, useEffect } from 'react';
import HeroSlider from '@/components/HeroSlider'
import Image from 'next/image'
import Link from 'next/link'
import TopBlock from '@/components/TopBlock'
import ContactFormModal from '@/components/ContactFormModal';

export default function Home() {
  // Global modal state for ContactFormModal
  const [isContactModalOpen, setContactModalOpen] = useState(false);

  useEffect(() => {
    // Listen for the custom event to open the modal
    const handler = () => setContactModalOpen(true);
    window.addEventListener('openContactModal', handler);
    return () => window.removeEventListener('openContactModal', handler);
  }, []);

  return (
    <main className="min-h-screen">
      {/* Global Contact Modal (can be triggered from anywhere) */}
      <ContactFormModal isOpen={isContactModalOpen} onClose={() => setContactModalOpen(false)} />
      {/* Hero Slider */}
      <HeroSlider />
      <TopBlock />
      {/* <FloatingElements /> */}

      {/* What We Do Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg card-hover text-center">
              <Image src="/images/hand.png" alt="Sales & Supply" width={64} height={64} className="mx-auto mb-6" unoptimized />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sales & Supply with transparent deals​</h3>
              <p className="text-gray-600">Buy New as well as refurbished equipment from a wide range of models</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg card-hover text-center">
              <Image src="/images/up.png" alt="Upgrade" width={64} height={64} className="mx-auto mb-6" unoptimized />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Upgrade your existing MRI and CT Machine​</h3>
              <p className="text-gray-600">We have one of the largest inventory of spare parts for upgrades and repairs</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg card-hover text-center">
              <Image src="/images/service.jpg" alt="Service Maintenance" width={64} height={64} className="mx-auto mb-6 object-cover rounded-lg" unoptimized />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Service Maintenance Plans All over India​​</h3>
              <p className="text-gray-600">Our field engineers are present all over India for instant troubleshooting.</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg card-hover text-center">
              <Image src="/images/site.png" alt="Site Planning" width={64} height={64} className="mx-auto mb-6" unoptimized />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Site Planning with full financial assistance​</h3>
              <p className="text-gray-600">We provide full support and guidance from site planning with financial assistance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[
              {
                image: "/images/machines/3.0t-mri/GE-3.0T-Architect-png.png",
                title: "GE Refurbished 3.0T & 1.5T MRI Scanner Machine",
                description: "8/16 Channel- Magnet FOV:48x48x48cm Gradient:Amp-50mt/m, 120T/m/s",
                link: "/product-pages/refurbished-mri-scanner-machines"
              },
              {
                image: "/images/machines/3.0t-mri/Verio.png",
                title: "Siemens Refurbished 3.0T & 1.5T MRI Scanner Machine",
                description: "8/16 Channel Configuration Zero Helium Boil off Gradient Specification: Amplitude 33mt/m, 120T/m/s",
                link: "/product-pages/refurbished-siemens-mri-scanner-machines"
              },
              {
                image: "/images/machines/ct-scan/brightspeed.png",
                title: "GE Refurbished CT Scanner Machines (8/16/32/64/128 Slices)",
                description: "Advanced CT scanning technology for accurate diagnostic imaging",
                link: "/product-pages/refurbished-ct-scan-machines"
              },
              {
                image: "/images/machines/pet-ct/pet-ct-2.png",
                title: "GE Refurbished PET-CT Scanner Machines (8/16) Slices",
                description: "State-of-the-art PET-CT scanners for comprehensive imaging solutions",
                link: "/product-pages/refurbished-pet-ct-scanner-machines"
              },
              {
                image: "/images/machines/cathlabs.png",
                title: "Philips Refurbished Philips Allura Xper FD10/FD20 Cath-Lab System",
                description: "Advanced cardiovascular imaging system for interventional procedures",
                link: "/product-pages/refurbished-cath-lab-machines"
              },
              {
                image: "/images/machines/gamma camera spect/gamma camera ge discovery nm 630.png",
                title: "GE Refurbished Gamma Camera SPECT",
                description: "Advanced SPECT imaging system for nuclear medicine",
                link: "/product-pages/refurbished-gamma-camera-spect-system-machine"
              },
              {
                image: "/images/machines/Dexa Luner.png",
                title: "GE Refurbished DEXA LUNAR Bone Densitometer Machine",
                description: "Precise bone density measurement for osteoporosis diagnosis",
                link: "/product-pages/refurbished-bone-densitometer-dexa"
              }
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
                <div className="relative">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                    unoptimized
                  />
                  <span className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Available
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                    {product.description}
                  </p>
                  <a href={product.link} className="btn-primary inline-block">
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="text-white">
              <h3 className="text-4xl md:text-5xl font-bold mb-2">450+</h3>
              <p className="text-lg opacity-90">Installations</p>
            </div>
            <div className="text-white">
              <h3 className="text-4xl md:text-5xl font-bold mb-2">100+</h3>
              <p className="text-lg opacity-90">Service Engineers</p>
            </div>
            <div className="text-white">
              <h3 className="text-4xl md:text-5xl font-bold mb-2">24/7</h3>
              <p className="text-lg opacity-90">Support Available</p>
            </div>
            <div className="text-white">
              <h3 className="text-4xl md:text-5xl font-bold mb-2">15+</h3>
              <p className="text-lg opacity-90">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Contact Button - HIDDEN */}
      {/* <button 
        className="fixed bottom-8 right-8 z-50 bg-primary-600 hover:bg-primary-700 text-white w-16 h-16 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
        aria-label="Contact Us"
      >
        <i className="fas fa-phone text-xl"></i>
      </button> */}

      {/* About Us Section */}
      <section className="py-16 lg:py-24 bg-gray-50 antialiased">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* About Content */}
            <div className="order-2 lg:order-1 space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                About Phantom Healthcare
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Our Group had started the operations in year 2011 and has become
                the leading remarketers, refurbishers and re-assemblers of
                Pre-owned Super Conductive MRIs and CT Scanners in India. Phantom
                Healthcare strives to provide professional support with quality
                services that are custom fit to the needs of today's growing
                healthcare industry. We aim to develop long-term relationships
                with our clients and do our best possible to keep Imaging
                equipment up-to-date and working like new.
              </p>
              <div className="pt-4">
                <Link 
                  href="/about" 
                  className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Learn More
                  <i className="fas fa-arrow-right ml-2"></i>
                </Link>
              </div>
            </div>

            {/* About Video */}
            <div className="order-1 lg:order-2">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/xmB3MDYaOMU?controls=0"
                  title="Phantom Healthcare Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Spare Parts Section */}
      <section className="py-16 lg:py-24 bg-white antialiased">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-12 lg:mb-16">
            Featured Spare Parts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* MRI Coils */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="relative">
                <Image
                  src="/images/machines/spare parts/Brain coil.png"
                  alt="MRI Coils"
                  width={400}
                  height={300}
                  className="w-full h-48 sm:h-56 object-cover"
                  unoptimized
                />
                <span className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Available
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">MRI Coils</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  High-quality MRI coils for enhanced imaging performance and patient comfort.
                </p>
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
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="relative">
                <Image
                  src="/images/machines/spare parts/cold head.png"
                  alt="Cold Head MRI Machine"
                  width={400}
                  height={300}
                  className="w-full h-48 sm:h-56 object-cover"
                  unoptimized
                />
                <span className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Available
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cold Head MRI Machine</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Essential cold head components for MRI machine cooling systems and helium management.
                </p>
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
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="relative">
                <Image
                  src="/images/machines/spare parts/MHU Tube.png"
                  alt="MHU Tube - CT Scanner"
                  width={400}
                  height={300}
                  className="w-full h-48 sm:h-56 object-cover"
                  unoptimized
                />
                <span className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Available
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">MHU Tube - CT Scanner</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  High-performance MHU tubes for CT scanners ensuring optimal imaging quality and durability.
                </p>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-12 lg:mb-16">
            All Products
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {/* GE MRI */}
            <div className="group">
              <Link 
                href="#" 
                className="block w-full bg-white hover:bg-primary-600 text-gray-900 hover:text-white font-semibold py-4 px-3 sm:px-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center text-sm sm:text-base border border-gray-200"
              >
                GE MRI
              </Link>
            </div>

            {/* Siemens MRI */}
            <div className="group">
              <Link 
                href="#" 
                className="block w-full bg-white hover:bg-primary-600 text-gray-900 hover:text-white font-semibold py-4 px-3 sm:px-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center text-sm sm:text-base border border-gray-200"
              >
                Siemens MRI
              </Link>
            </div>

            {/* CT */}
            <div className="group">
              <Link 
                href="#" 
                className="block w-full bg-white hover:bg-primary-600 text-gray-900 hover:text-white font-semibold py-4 px-3 sm:px-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center text-sm sm:text-base border border-gray-200"
              >
                CT
              </Link>
            </div>

            {/* Cath-Lab */}
            <div className="group">
              <Link 
                href="#" 
                className="block w-full bg-white hover:bg-primary-600 text-gray-900 hover:text-white font-semibold py-4 px-3 sm:px-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center text-sm sm:text-base border border-gray-200"
              >
                Cath-Lab
              </Link>
            </div>

            {/* PET-CT */}
            <div className="group">
              <Link 
                href="#" 
                className="block w-full bg-white hover:bg-primary-600 text-gray-900 hover:text-white font-semibold py-4 px-3 sm:px-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center text-sm sm:text-base border border-gray-200"
              >
                PET-CT
              </Link>
            </div>

            {/* Gamma Camera SPECT */}
            <div className="group">
              <Link 
                href="#" 
                className="block w-full bg-white hover:bg-primary-600 text-gray-900 hover:text-white font-semibold py-4 px-3 sm:px-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center text-sm sm:text-base border border-gray-200"
              >
                Gamma Camera SPECT
              </Link>
            </div>

            {/* Bone Densitometer */}
            <div className="group">
              <Link 
                href="#" 
                className="block w-full bg-white hover:bg-primary-600 text-gray-900 hover:text-white font-semibold py-4 px-3 sm:px-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center text-sm sm:text-base border border-gray-200"
              >
                Bone Densitometer
              </Link>
            </div>

            {/* Spare Parts */}
            <div className="group">
              <Link 
                href="https://phantomhealthcare.shop/" 
                className="block w-full bg-white hover:bg-secondary-600 text-gray-900 hover:text-white font-semibold py-4 px-3 sm:px-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center text-sm sm:text-base border border-gray-200"
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
      <section className="py-16 lg:py-24 bg-white antialiased">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-12 lg:mb-16">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* 15+ Years of Experience */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center p-6">
              <div className="mb-6">
                <Image
                  src="/images/15.jpg"
                  alt="15+ Years of Experience"
                  width={120}
                  height={120}
                  className="w-20 h-20 sm:w-24 sm:h-24 mx-auto object-cover rounded-full border-4 border-primary-100"
                  unoptimized
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">15+ Years of Experience</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We have 15 year experience and sell best refurbished Machine In India
              </p>
            </div>

            {/* 24*7 Service & Support */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center p-6">
              <div className="mb-6">
                <Image
                  src="/images/24.jpg"
                  alt="24*7 Service & Support"
                  width={120}
                  height={120}
                  className="w-20 h-20 sm:w-24 sm:h-24 mx-auto object-cover rounded-full border-4 border-primary-100"
                  unoptimized
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">24*7 Service & Support</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our team is well experienced to set up refurbished MRI machine
              </p>
            </div>

            {/* Best Quality AERB Approved */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center p-6">
              <div className="mb-6">
                <Image
                  src="/images/best.jpg"
                  alt="Best Quality AERB Approved"
                  width={120}
                  height={120}
                  className="w-20 h-20 sm:w-24 sm:h-24 mx-auto object-cover rounded-full border-4 border-primary-100"
                  unoptimized
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Best Quality AERB Approved​</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We are giving 100% satisfied guaranteed result of client​
              </p>
            </div>

            {/* Skilled Professional */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center p-6">
              <div className="mb-6">
                <Image
                  src="/images/skill.jpg"
                  alt="Skilled Professional"
                  width={120}
                  height={120}
                  className="w-20 h-20 sm:w-24 sm:h-24 mx-auto object-cover rounded-full border-4 border-primary-100"
                  unoptimized
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Skilled Professional</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We provide a dedicated work for better coordination and with getting
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Counters Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary-600 to-secondary-600 antialiased">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {/* Total Installations */}
            <div className="text-white">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">450+</h3>
              <p className="text-base sm:text-lg opacity-90">Total Installations</p>
            </div>

            {/* Happy Customers */}
            <div className="text-white">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">300+</h3>
              <p className="text-base sm:text-lg opacity-90">Happy Customers</p>
            </div>

            {/* Cities Covered */}
            <div className="text-white">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">100+</h3>
              <p className="text-base sm:text-lg opacity-90">Cities Covered</p>
            </div>

            {/* Countries Covered */}
            <div className="text-white">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">3</h3>
              <p className="text-base sm:text-lg opacity-90">Countries Covered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-16 lg:py-24 bg-gray-50 antialiased">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-12 lg:mb-16">
            Our Process To Set Up Machine
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Process Image 1 */}
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/our-process.jpg"
                alt="Our Process Step 1"
                width={600}
                height={400}
                className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                unoptimized
              />
            </div>

            {/* Process Image 2 */}
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/our-process-2.jpg"
                alt="Our Process Step 2"
                width={600}
                height={400}
                className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* IRIA Exhibition Section */}
      <section className="py-16 lg:py-24 bg-white antialiased">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-12 lg:mb-16">
              Exhibition Partners With IRIA
            </h2>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-5xl mx-auto">
              <picture>
                <source media="(max-width: 1000px)" srcSet="/images/iria-2024.jpg" />
                <Image
                  src="/images/iria 2024 1.jpg"
                  alt="IRIA 2024 Exhibition"
                  width={1200}
                  height={600}
                  className="w-full h-auto object-cover"
                  unoptimized
                />
              </picture>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="py-16 lg:py-24 bg-gray-50 antialiased">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-12 lg:mb-16">
            Customer Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Testimonial 1 - Dr. Vikas Jain */}
            <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center mb-6">
                <Image
                  src="/images/doctors/dr.vikas-jain.jpg"
                  alt="Dr. Vikas Jain"
                  width={100}
                  height={100}
                  className="w-20 h-20 mx-auto rounded-full object-cover border-4 border-primary-100"
                  unoptimized
                />
                <h4 className="text-xl font-bold text-gray-900 mt-4">Dr. Vikas Jain</h4>
                <span className="text-sm text-gray-600">(Director, Advanced Imaging MRI)</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                "We thank Phantom Healthcare Pvt. Limited, the only third party vendor dealing in complete turnkey MR
                project at a very affordable cost. They are very professional and competitive in approach. Their approach is
                to make this imaging modality accessible and affordable to the investors and owners of diagnostic centers.
                This makes the quality imaging of MR affordable and accessible to poor and masses."
              </p>
            </div>

            {/* Testimonial 2 - Dr. Devender Singh Yadav */}
            <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center mb-6">
                <Image
                  src="/images/doctors/Dr.Devender-Singh-Yadav.jpg"
                  alt="Dr. Devender Singh Yadav"
                  width={100}
                  height={100}
                  className="w-20 h-20 mx-auto rounded-full object-cover border-4 border-primary-100"
                  unoptimized
                />
                <h4 className="text-xl font-bold text-gray-900 mt-4">Dr. Devender Singh Yadav</h4>
                <span className="text-sm text-gray-600">(Modern Diagnostic & Research Centre)</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                "We thank Phantom Healthcare Pvt. Ltd. for providing us 1.5 T MRI machine at a very affordable cost. Phantom
                Healthcare is the third party vendor that provides complete turnkey MRI project with skilled team of
                engineers, best after sale support and good inventory."
              </p>
            </div>

            {/* Testimonial 3 - Dr. Dhirendra Gyan */}
            <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center mb-6">
                <Image
                  src="/images/doctors/Dr.DhirendraGyan.jpg"
                  alt="Dr. Dhirendra Gyan"
                  width={100}
                  height={100}
                  className="w-20 h-20 mx-auto rounded-full object-cover border-4 border-primary-100"
                  unoptimized
                />
                <h4 className="text-xl font-bold text-gray-900 mt-4">Dr. Dhirendra Gyan</h4>
                <span className="text-sm text-gray-600">(Dr. Pannalal Hospital & Research Centre (P) Ltd.)</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                "We at Dr.Pannalal Hospital & Research Centre (P) Ltd. thank Phantom Healthcare Pvt. Ltd. for providing us a
                real good MRI imaging machine as a full turnkey MR project at a very affordable price and complete peace of
                mind. They are highly professional in their very neat and tidy work."
              </p>
            </div>

            {/* Testimonial 4 - Dr. Himanshu Agarwal */}
            <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center mb-6">
                <Image
                  src="/images/doctors/Dr.Himanshu-Agarwal.jpg"
                  alt="Dr. Himanshu Agarwal"
                  width={100}
                  height={100}
                  className="w-20 h-20 mx-auto rounded-full object-cover border-4 border-primary-100"
                  unoptimized
                />
                <h4 className="text-xl font-bold text-gray-900 mt-4">Dr. Himanshu Agarwal</h4>
                <span className="text-sm text-gray-600">(Resonance Diagnostic Centre and Pathology)</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                "Phantom Healthcare Pvt. Ltd. is the only third party vendor dealing in complete turnkey GE MRI project,
                providing us a good MRI machine well within our budget. Phantom Healthcare has a skilled team of engineers
                and good inventory."
              </p>
            </div>

            {/* Testimonial 5 - Dr. Deepak Patkar */}
            <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center mb-6">
                <Image
                  src="/images/doctors/DrDeepakPatkar.jpg"
                  alt="Dr. Deepak Patkar"
                  width={100}
                  height={100}
                  className="w-20 h-20 mx-auto rounded-full object-cover border-4 border-primary-100"
                  unoptimized
                />
                <h4 className="text-xl font-bold text-gray-900 mt-4">Dr. Deepak Patkar</h4>
                <span className="text-sm text-gray-600">(H.O.D Imaging, Nanavati SuperSpeciality Hospital)</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                "For 1.5T MRI, we trust only Phantom Healthcare Pvt. Ltd. based in New Delhi.
                Phantom Healthcare has always provided best quality equipment at competitive prices. They have given us
                prompt and effective post purchase services and upgradations."
              </p>
            </div>

            {/* Spacer for better grid alignment */}
            <div className="hidden lg:block"></div>
          </div>
        </div>
      </section>

    </main>
  )
} 