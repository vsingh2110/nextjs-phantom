'use client';

import { useState, useCallback, useMemo, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  // State for mobile menu and dropdowns (Next.js version of static site JS menu logic)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMRIOpen, setIsMRIOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);
  const [iframeError, setIframeError] = useState<string | null>(null);

  // Toggle mobile menu (ported from static site hamburger logic)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Modal open/close logic (used for contact form modal)
  const openModal = useCallback(() => {
    setIsModalOpen(true);
    // Reset states when opening modal
    setIsIframeLoaded(false);
    setIframeError(null);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    // Reset states when closing modal
    setIsIframeLoaded(false);
    setIframeError(null);
  }, []);

  // Handle iframe load events
  const handleIframeLoad = useCallback(() => {
    setIsIframeLoaded(true);
    setIframeError(null);
  }, []);

  const handleIframeError = useCallback(() => {
    setIframeError('Failed to load the form. Please try again later.');
    setIsIframeLoaded(false);
  }, []);

  // Memoized iframe component to prevent unnecessary re-renders
  const iframeComponent = useMemo(() => {
    if (!isModalOpen) return null;

    return (
      <div className="relative w-full h-full">
        {!isIframeLoaded && !iframeError && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#59913d] mx-auto mb-4"></div>
              <p className="text-gray-600 text-lg">Loading form...</p>
            </div>
          </div>
        )}
        
        {iframeError && (
          <div className="absolute inset-0 flex items-center justify-center bg-red-50">
            <div className="text-center p-6">
              <i className="fa fa-exclamation-triangle text-red-500 text-4xl mb-4"></i>
              <p className="text-red-600 text-lg mb-4">{iframeError}</p>
              <button 
                onClick={() => {
                  setIframeError(null);
                  setIsIframeLoaded(false);
                }}
                className="bg-[#59913d] text-white px-6 py-2 rounded-lg hover:bg-[#255a0a] transition-colors"
              >
                Try Again
              </button>
            </div>
          </div>
        )}

        <iframe 
          src="https://docs.google.com/forms/d/e/1FAIpQLSe_biYDKz7FI69XzVT_FoH-hzNvksu5mgYlPg5n9VKVgj62xQ/viewform?embedded=true"
          width="100%" 
          height="100%" 
          frameBorder="0" 
          className={`w-full border-0 transition-opacity duration-300 ${isIframeLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ minHeight: '100%' }}
          onLoad={handleIframeLoad}
          onError={handleIframeError}
          title="Download Brochure Form"
          aria-label="Google Forms for downloading brochure"
          loading="lazy"
        >
          Loading…
        </iframe>
      </div>
    );
  }, [isModalOpen, isIframeLoaded, iframeError, handleIframeLoad, handleIframeError]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen, closeModal]);

  return (
    <>
      {/* --- TOP BAR (from static site: .top-bar-wrapper, .social-set) --- */}
      <div className="bg-[#259ae1] relative z-10 h-auto">
        {/* Mobile: two rows, icons on top, email/login below */}
        <div className="block md:hidden w-full">
          <div className="flex flex-row w-full justify-center items-center gap-1 py-1">
            {/* Social Icons Row */}
            <ul className="flex flex-row w-full justify-center items-center gap-1 px-2">
              {/* Twitter */}
              <li className="flex justify-around items-center pt-2">
                <a className="text-lg p-1 text-white mr-1 hover:bg-white hover:text-[#259ae1] rounded" 
                   href="https://twitter.com/Phantomhealthc" target="_blank" aria-label="Twitter">
                  <i className="fa fa-twitter fa-fw" title="Twitter"></i>
                </a>
              </li>
              {/* Whatsapp */}
              <li className="flex justify-around items-center pt-2">
                <a className="text-lg p-1 text-white mr-1 hover:bg-white hover:text-[#259ae1] rounded" 
                   href="https://wa.me/+919899963601" target="_blank" aria-label="Whatsapp">
                  <i className="fa fa-whatsapp fa-fw" title="Whatsapp"></i>
                </a>
              </li>
              {/* YouTube */}
              <li className="flex justify-around items-center pt-2">
                <a className="text-lg p-1 text-white mr-1 hover:bg-white hover:text-[#259ae1] rounded" 
                   href="https://www.youtube.com/@phantomhealthcare" target="_blank" aria-label="YouTube">
                  <i className="fa fa-youtube fa-fw" title="YouTube"></i>
                </a>
              </li>
              {/* Google Maps */}
              <li className="flex justify-around items-center pt-2">
                <a className="text-lg p-1 text-white mr-1 hover:bg-white hover:text-[#259ae1] rounded" 
                   href="https://goo.gl/maps/2fdRZT8hEBVK4cni9" target="_blank" aria-label="Google Maps">
                  <i className="fa fa-street-view fa-fw" title="Google Maps"></i>
                </a>
              </li>
              {/* Instagram */}
              <li className="flex justify-around items-center pt-2">
                <a className="text-lg p-1 text-white mr-1 hover:bg-white hover:text-[#259ae1] rounded" 
                   href="https://www.instagram.com/phantomhealthcare/" target="_blank" aria-label="Instagram">
                  <i className="fa fa-instagram fa-fw" title="Instagram"></i>
                </a>
              </li>
              {/* Facebook */}
              <li className="flex justify-around items-center pt-2">
                <a className="text-lg p-1 text-white mr-1 hover:bg-white hover:text-[#259ae1] rounded" 
                   href="https://www.facebook.com/phantom.healthcare.ind" target="_blank" aria-label="Facebook">
                  <i className="fa fa-facebook-square fa-fw" title="Facebook"></i>
                </a>
              </li>
              {/* Pinterest */}
              <li className="flex justify-around items-center pt-2">
                <a className="text-lg p-1 text-white mr-1 hover:bg-white hover:text-[#259ae1] rounded" 
                   href="https://www.pinterest.com/phantomhealthcare/" target="_blank" aria-label="Pinterest">
                  <i className="fa fa-pinterest fa-fw" title="Pinterest"></i>
                </a>
              </li>
              {/* LinkedIn */}
              <li className="flex justify-around items-center pt-2">
                <a className="text-lg p-1 text-white mr-1 hover:bg-white hover:text-[#259ae1] rounded" 
                   href="https://in.linkedin.com/company/phantom-healthcare-ind-private-limited-company" target="_blank" aria-label="LinkedIn">
                  <i className="fa fa-linkedin fa-fw" title="LinkedIn"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-row w-full justify-center items-center gap-2 pb-1 text-xs">
            <a href="mailto:info@phantomhealthcare.com" className="text-white font-medium no-underline hover:cursor-pointer">info@phantomhealthcare.com</a>
            <a href="https://www.phantomis.co.in/" className="text-white font-medium no-underline hover:cursor-pointer flex items-center"><i className="fa fa-user mr-1" aria-hidden="true"></i>Employee Login</a>
          </div>
        </div>
        {/* Desktop: side-by-side as before */}
        <div className="hidden md:flex max-w-screen-xl w-[90%] mx-auto justify-between items-center py-1 md:py-2">
          <ul className="flex flex-row flex-wrap justify-left items-center list-none m-0 p-0 h-auto w-auto gap-2 md:gap-2">
            {/* Twitter */}
            <li className="flex justify-around items-center pt-2">
              <a className="text-sm p-1 text-white mr-2 hover:bg-white hover:text-[#259ae1] rounded md:text-base md:p-1 md:mr-2 md:hover:bg-white md:hover:text-[#259ae1]" 
                 href="https://twitter.com/Phantomhealthc" target="_blank" aria-label="Twitter">
                <i className="fa fa-twitter fa-fw" title="Twitter"></i>
              </a>
            </li>
            {/* Whatsapp */}
            <li className="flex justify-around items-center pt-2">
              <a className="text-sm p-1 text-white mr-2 hover:bg-white hover:text-[#259ae1] rounded" 
                 href="https://wa.me/+919899963601" target="_blank" aria-label="Whatsapp">
                <i className="fa fa-whatsapp fa-fw" title="Whatsapp"></i>
              </a>
            </li>
            {/* YouTube */}
            <li className="flex justify-around items-center pt-2">
              <a className="text-sm p-1 text-white mr-2 hover:bg-white hover:text-[#259ae1] rounded" 
                 href="https://www.youtube.com/@phantomhealthcare" target="_blank" aria-label="YouTube">
                <i className="fa fa-youtube fa-fw" title="YouTube"></i>
              </a>
            </li>
            {/* Google Maps */}
            <li className="flex justify-around items-center pt-2">
              <a className="text-sm p-1 text-white mr-2 hover:bg-white hover:text-[#259ae1] rounded" 
                 href="https://goo.gl/maps/2fdRZT8hEBVK4cni9" target="_blank" aria-label="Google Maps">
                <i className="fa fa-street-view fa-fw" title="Google Maps"></i>
              </a>
            </li>
            {/* Instagram */}
            <li className="flex justify-around items-center pt-2">
              <a className="text-sm p-1 text-white mr-2 hover:bg-white hover:text-[#259ae1] rounded" 
                 href="https://www.instagram.com/phantomhealthcare/" target="_blank" aria-label="Instagram">
                <i className="fa fa-instagram fa-fw" title="Instagram"></i>
              </a>
            </li>
            {/* Facebook */}
            <li className="flex justify-around items-center pt-2">
              <a className="text-sm p-1 text-white mr-2 hover:bg-white hover:text-[#259ae1] rounded" 
                 href="https://www.facebook.com/phantom.healthcare.ind" target="_blank" aria-label="Facebook">
                <i className="fa fa-facebook-square fa-fw" title="Facebook"></i>
              </a>
            </li>
            {/* Pinterest */}
            <li className="flex justify-around items-center pt-2">
              <a className="text-sm p-1 text-white mr-2 hover:bg-white hover:text-[#259ae1] rounded" 
                 href="https://www.pinterest.com/phantomhealthcare/" target="_blank" aria-label="Pinterest">
                <i className="fa fa-pinterest fa-fw" title="Pinterest"></i>
              </a>
            </li>
            {/* LinkedIn */}
            <li className="flex justify-around items-center pt-2">
              <a className="text-sm p-1 text-white mr-2 hover:bg-white hover:text-[#259ae1] rounded" 
                 href="https://in.linkedin.com/company/phantom-healthcare-ind-private-limited-company" target="_blank" aria-label="LinkedIn">
                <i className="fa fa-linkedin fa-fw" title="LinkedIn"></i>
              </a>
            </li>
          </ul>
          <span className="text-white font-medium text-xs ml-0 md:text-base">
            <a href="mailto:info@phantomhealthcare.com" className="text-white font-medium text-xs ml-0 no-underline pl-2 hover:cursor-pointer md:text-base md:pl-4">info@phantomhealthcare.com</a>
            <span className="text-white font-medium text-xs ml-0 md:text-base">
              <a href="https://www.phantomis.co.in/" className="text-white font-medium text-xs ml-0 no-underline pl-2 hover:cursor-pointer md:text-base md:pl-4"><i className="fa fa-user mr-1" aria-hidden="true"></i>Employee Login</a>
            </span>
          </span>
        </div>
      </div>

      {/* --- NAVIGATION BAR (from static: nav, .container, menu structure) --- */}
      {/*
        Responsive nav bar structure is ported from static HTML, but uses Next.js Link and state for menu toggling.
        max-w-[1200px] and w-[90%] match static .container.
        Hamburger menu and dropdowns are implemented in React, but mimic static JS/CSS behavior.
      */}
      <nav className="shadow-[0px_5px_10px_0px_#aaa] w-full bg-white text-black opacity-90 z-20 relative">
        <div className="flex h-16 items-center max-w-screen-xl w-[90%] mx-auto px-4">
          {/* Mobile Layout (from static: .mobile-nav) */}
          <div className="flex justify-between items-center w-full md:hidden">
            {/* Hamburger Menu for Mobile (ported from static) */}
            <button 
              onClick={toggleMenu}
              className="flex flex-col justify-center items-center w-10 h-10 space-y-1.5 border-none bg-transparent"
            >
              <span className={`block w-7 h-0.5 bg-black transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-7 h-0.5 bg-black transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-7 h-0.5 bg-black transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>

            {/* Logo for Mobile (from static: .logo) */}
            {/* Logo dimensions: actual image is 260x94 (2.77 aspect ratio) */}
            <div className="flex-shrink-0">
              <Link href="/">
                <Image src="/images/logo.jpg" alt="Phantom Healthcare Logo" width={222} height={80} className="w-auto h-16 md:h-20" priority />
              </Link>
            </div>
          </div>

          {/* Desktop Layout (from static: .container, .menu) */}
          <div className="hidden md:flex md:justify-between md:items-center md:w-full">
            {/* Logo for Desktop (from static: .logo) */}
            {/* Logo dimensions: actual image is 260x94 (2.77 aspect ratio) */}
            <div className="flex-shrink-0">
              <Link href="/">
                <Image src="/images/logo.jpg" alt="Phantom Healthcare Logo" width={155} height={56} className="w-auto h-14" priority />
              </Link>
            </div>

            {/* Desktop Menu Items (from static: .menu, .nav) */}
            <div className="flex flex-row items-center gap-2 md:gap-3 lg:gap-4 xl:gap-5">
            <Link href="/" className="text-black no-underline font-semibold text-sm md:text-base transition-colors duration-300 ease-in-out hover:text-white hover:bg-[#259ae1] px-3 py-2 rounded-lg">
              Home
            </Link>
            <Link href="/about" className="text-black no-underline font-semibold text-sm md:text-base transition-colors duration-300 ease-in-out hover:text-white hover:bg-[#259ae1] px-3 py-2 rounded-lg">
              About Us
            </Link>
            
            {/* Products Dropdown (from static: .dropdown, .submenu) */}
            <div className="relative group">
              <a href="#" className="text-black no-underline font-semibold text-sm md:text-base transition-colors duration-300 ease-in-out hover:text-white hover:bg-[#259ae1] px-3 py-2 rounded-lg flex items-center">
                Products
                <i className="nav-arrow fa fa-angle-down ml-1 text-base" aria-hidden="true" role="img"></i>
              </a>
              <div className="hidden group-hover:block absolute bg-white text-black min-w-[200px] p-4 text-sm leading-6 font-light left-0 top-full z-10 rounded-b-lg shadow-lg border">
                {/* MRI Scanner with submenu (from static: .submenu) */}
                <div className="relative group/mri">
                  <a href="#" className="text-black no-underline hover:text-[#259ae1] block py-1 flex items-center group-hover/mri:bg-gray-100">
                    MRI Scanner
                    <span className="arrow ml-1">▶</span>
                  </a>
                  <div className="hidden group-hover/mri:block absolute left-full top-0 bg-white text-black min-w-[150px] p-3 text-sm leading-6 font-light ml-0 rounded-lg shadow-lg border z-20">
                    <div className="mb-2 mt-1 pl-2 pr-2 font-light">
                      <Link href="/product-pages/refurbished-ge-mri-scanner-machines" className="text-black no-underline hover:text-[#259ae1] block py-1">GE MRI</Link>
                    </div>
                    <div className="mb-2 mt-1 pl-2 pr-2 font-light">
                      <Link href="/product-pages/refurbished-siemens-mri-scanner-machines" className="text-black no-underline hover:text-[#259ae1] block py-1">Siemens MRI</Link>
                    </div>
                  </div>
                </div>
                <hr />
                <p className="mb-2 mt-2 pl-3 pr-3 font-light">
                  <Link href="/product-pages/refurbished-ct-scan-machines" className="text-black no-underline hover:text-[#259ae1] block py-1">CT Scanner</Link>
                </p>
                <hr />
                <p className="mb-2 mt-2 pl-3 pr-3 font-light">
                  <Link href="/product-pages/refurbished-pet-ct-scanner-machines" className="text-black no-underline hover:text-[#259ae1] block py-1">PET-CT Scanner</Link>
                </p>
                <hr />
                <p className="mb-2 mt-2 pl-3 pr-3 font-light">
                  <Link href="/product-pages/refurbished-cath-lab-machines" className="text-black no-underline hover:text-[#259ae1] block py-1">Cath-Lab</Link>
                </p>
                <hr />
                <p className="mb-2 mt-2 pl-3 pr-3 font-light">
                  <Link href="/product-pages/refurbished-gamma-camera-spect-system-machine" className="text-black no-underline hover:text-[#259ae1] block py-1">Gamma Camera-SPECT</Link>
                </p>
                <hr />
                <p className="mb-2 mt-2 pl-3 pr-3 font-light">
                  <Link href="/product-pages/refurbished-bone-densitometer-dexa" className="text-black no-underline hover:text-[#259ae1] block py-1">Bone Desnsitometer-DEXA</Link>
                </p>
              </div>
            </div>

            {/* Services Dropdown (from static: .dropdown, .submenu) */}
            <div className="relative group">
              <a href="#" className="text-black no-underline font-semibold text-sm md:text-base transition-colors duration-300 ease-in-out hover:text-white hover:bg-[#259ae1] px-3 py-2 rounded-lg flex items-center">
                Services
                <i className="nav-arrow fa fa-angle-down ml-1 text-base" aria-hidden="true" role="img"></i>
              </a>
              <div className="hidden group-hover:block absolute bg-white text-black min-w-[200px] p-4 text-sm leading-6 font-light left-0 top-full z-10 rounded-b-lg shadow-lg border">
                <p className="mb-2 mt-2 pl-3 pr-3 font-light">
                  <Link href="/services#service-packages" className="text-black no-underline hover:text-[#259ae1] block py-1">Service Packages</Link>
                </p>
                <hr />
                <p className="mb-2 mt-2 pl-3 pr-3 font-light">
                  <Link href="/services#repairs-and-upgrdaes" className="text-black no-underline hover:text-[#259ae1] block py-1">Repairs and Upgrades</Link>
                </p>
                <hr />
                <p className="mb-2 mt-2 pl-3 pr-3 font-light">
                  <Link href="/spare-parts-and-inventory" className="text-black no-underline hover:text-[#259ae1] block py-1">Spare Parts and Inventory</Link>
                </p>
              </div>
            </div>

            <Link href="/blogs" className="text-black no-underline font-semibold text-sm md:text-base transition-colors duration-300 ease-in-out hover:text-white hover:bg-[#259ae1] px-3 py-2 rounded-lg">
              Blogs
            </Link>
            <Link href="/contact" className="text-black no-underline font-semibold text-sm md:text-base transition-colors duration-300 ease-in-out hover:text-white hover:bg-[#259ae1] px-3 py-2 rounded-lg">
              Contact
            </Link>
          </div>
        </div>
        </div>

                        {/* Mobile Menu Items */}
        <ul className={`absolute top-full left-0 w-full bg-white shadow-lg md:hidden ${isMenuOpen ? 'block' : 'hidden'} z-50`}>
          <li className="block">
            <Link href="/" className="block text-black no-underline font-semibold text-base md:text-lg transition-colors duration-300 ease-in-out hover:text-white hover:bg-[#259ae1] px-4 py-3 rounded-lg">
              Home
            </Link>
          </li>
          <li className="block">
            <Link href="/about" className="block text-black no-underline font-semibold text-base md:text-lg transition-colors duration-300 ease-in-out hover:text-white hover:bg-[#259ae1] px-4 py-3 rounded-lg">
              About Us
            </Link>
          </li>
          
          {/* Products Dropdown */}
          <li className="relative block">
            <button 
              onClick={() => setIsProductsOpen(!isProductsOpen)}
              className="w-full text-left text-black no-underline font-semibold text-base md:text-lg transition-colors duration-300 ease-in-out hover:text-white hover:bg-[#259ae1] px-4 py-3 rounded-lg flex justify-between items-center"
            >
              Products
              <i className={`nav-arrow fa fa-angle-down ml-1 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} aria-hidden="true" role="img"></i>
            </button>
            {isProductsOpen && (
              <div className="bg-white text-black min-w-[200px] p-4 text-sm leading-6 font-light left-0 z-10 border-t border-gray-200">
                {/* MRI Scanner with submenu */}
                <div className="relative">
                  <button 
                    onClick={() => setIsMRIOpen(!isMRIOpen)}
                    className="w-full text-left text-black no-underline hover:text-[#259ae1] block py-1 flex items-center justify-between"
                  >
                    MRI Scanner
                    <span className={`arrow ml-1 transition-transform ${isMRIOpen ? 'rotate-90' : ''}`}>▶</span>
                  </button>
                  {isMRIOpen && (
                    <div className="bg-white text-black min-w-[150px] p-3 text-sm leading-6 font-light ml-0 border-l border-gray-200">
                      <div className="mb-2 mt-1 pl-2 pr-2 font-light">
                        <Link href="/product-pages/refurbished-ge-mri-scanner-machines" className="text-black no-underline hover:text-[#259ae1] block py-1">GE MRI</Link>
                      </div>
                      <div className="mb-2 mt-1 pl-2 pr-2 font-light">
                        <Link href="/product-pages/refurbished-siemens-mri-scanner-machines" className="text-black no-underline hover:text-[#259ae1] block py-1">Siemens MRI</Link>
                      </div>
                    </div>
                  )}
                </div>
                <hr />
                <p className="mb-2 mt-2 pl-3 pr-3 font-light">
                  <Link href="/product-pages/refurbished-ct-scan-machines" className="text-black no-underline hover:text-[#259ae1] block py-1">CT Scanner</Link>
                </p>
                <hr />
                <p className="mb-2 mt-2 pl-3 pr-3 font-light">
                  <Link href="/product-pages/refurbished-pet-ct-scanner-machines" className="text-black no-underline hover:text-[#259ae1] block py-1">PET-CT Scanner</Link>
                </p>
                <hr />
                <p className="mb-2 mt-2 pl-3 pr-3 font-light">
                  <Link href="/product-pages/refurbished-cath-lab-machines" className="text-black no-underline hover:text-[#259ae1] block py-1">Cath-Lab</Link>
                </p>
                <hr />
                <p className="mb-2 mt-2 pl-3 pr-3 font-light">
                  <Link href="/product-pages/refurbished-gamma-camera-spect-system-machine" className="text-black no-underline hover:text-[#259ae1] block py-1">Gamma Camera-SPECT</Link>
                </p>
                <hr />
                <p className="mb-2 mt-2 pl-3 pr-3 font-light">
                  <Link href="/product-pages/refurbished-bone-densitometer-dexa" className="text-black no-underline hover:text-[#259ae1] block py-1">Bone Desnsitometer-DEXA</Link>
                </p>
              </div>
            )}
          </li>

          {/* Services Dropdown */}
          <li className="relative block">
            <button 
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="w-full text-left text-black no-underline font-semibold text-base md:text-lg transition-colors duration-300 ease-in-out hover:text-white hover:bg-[#259ae1] px-4 py-3 rounded-lg flex justify-between items-center"
            >
              Services
              <i className={`nav-arrow fa fa-angle-down ml-1 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} aria-hidden="true" role="img"></i>
            </button>
            {isServicesOpen && (
              <div className="bg-white text-black min-w-[200px] p-4 text-sm leading-6 font-light left-0 z-10 border-t border-gray-200">
                <p className="mb-2 mt-2 pl-3 pr-3 font-light">
                  <Link href="/services#service-packages" className="text-black no-underline hover:text-[#259ae1] block py-1">Service Packages</Link>
                </p>
                <hr />
                <p className="mb-2 mt-2 pl-3 pr-3 font-light">
                  <Link href="/services#repairs-and-upgrdaes" className="text-black no-underline hover:text-[#259ae1] block py-1">Repairs and Upgrades</Link>
                </p>
                <hr />
                <p className="mb-2 mt-2 pl-3 pr-3 font-light">
                  <Link href="/spare-parts-and-inventory" className="text-black no-underline hover:text-[#259ae1] block py-1">Spare Parts and Inventory</Link>
                </p>
              </div>
            )}
          </li>

          <li className="block">
            <Link href="/blogs" className="block text-black no-underline font-semibold text-base md:text-lg transition-colors duration-300 ease-in-out hover:text-white hover:bg-[#259ae1] px-4 py-3 rounded-lg">
              Blogs
            </Link>
          </li>
          <li className="block">
            <Link href="/contact" className="block text-black no-underline font-semibold text-base md:text-lg transition-colors duration-300 ease-in-out hover:text-white hover:bg-[#259ae1] px-4 py-3 rounded-lg">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Floating Download Brochure */}
      <div className="fixed bottom-8 right-1 md:right-4 z-30">
        <button 
          onClick={openModal} 
          className="flex flex-col items-center bg-[#59913d] rounded-lg text-white border-none cursor-pointer hover:bg-[#255a0a] p-1 md:p-2 shadow-lg focus:outline-none focus:ring-2 focus:ring-[#59913d] focus:ring-opacity-50"
          aria-label="Download brochure form"
          title="Download our brochure"
        >
          <i className="fa fa-download text-xs md:text-lg mb-1" aria-hidden="true"></i>
          <p className="text-xs text-center">Download<br />Brochure</p>
        </button>

        {isModalOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 md:p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="header-modal-title"
          >
            <div className="bg-white rounded-lg w-full max-w-4xl h-[95vh] md:h-[90vh] overflow-hidden relative flex flex-col">
              {/* Header */}
              <div className="bg-primary-500 text-white p-4 rounded-t-lg flex-shrink-0">
                <h2 id="header-modal-title" className="text-xl font-bold text-center">Download Our Brochure</h2>
                <p className="text-center text-primary-100 mt-1">Fill up the form below to get instant access</p>
                <button 
                  onClick={closeModal} 
                  className="absolute top-3 right-3 text-white hover:text-gray-200 text-xl font-bold border-none cursor-pointer bg-transparent hover:bg-white hover:bg-opacity-20 rounded-full w-8 h-8 flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                  aria-label="Close modal"
                >
                  <i className="fa fa-close" aria-hidden="true"></i>
                </button>
              </div>
              {/* Form Container */}
              <div className="flex-1 overflow-y-auto p-0">
                {iframeComponent}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Floating WhatsApp Call */}
      <div className="fixed bottom-8 left-1 md:left-4 z-30 bg-[#59913d] w-14 h-14 md:w-16 md:h-16 rounded-full text-center text-xl md:text-2xl text-white hover:bg-[#1e4909] shadow-lg flex items-center justify-center">
        <a href="https://wa.me/919899963601" className="text-white no-underline">
          <i className="fa fa-whatsapp" aria-hidden="true"></i>
        </a>
      </div>

    </>
  );
} 