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
    </main>
  )
} 