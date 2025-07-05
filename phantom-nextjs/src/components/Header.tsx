'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#259ae1] z-[-1] h-auto">
        <div className="max-w-[1200px] w-[90%] mx-auto flex justify-between">
          {/* Social Media Icons */}
          <ul className="flex flex-row flex-wrap justify-left list-none m-0 p-0 h-auto w-auto">
            <li className="flex justify-around items-center pt-2">
              <a className="text-sm p-1 text-white mr-2 hover:bg-white hover:text-[#259ae1] rounded" 
                 href="https://twitter.com/Phantomhealthc" target="_blank" aria-label="Twitter">
                <i className="fa fa-twitter fa-fw" title="Twitter"></i>
              </a>
            </li>
            <li className="flex justify-around items-center pt-2">
              <a className="text-sm p-1 text-white mr-2 hover:bg-white hover:text-[#259ae1] rounded" 
                 href="https://wa.me/+919899963601" target="_blank" aria-label="Whatsapp">
                <i className="fa fa-whatsapp fa-fw" title="Whatsapp"></i>
              </a>
            </li>
            <li className="flex justify-around items-center pt-2">
              <a className="text-sm p-1 text-white mr-2 hover:bg-white hover:text-[#259ae1] rounded" 
                 href="https://www.youtube.com/@phantomhealthcare" target="_blank" aria-label="YouTube">
                <i className="fa fa-youtube fa-fw" title="YouTube"></i>
              </a>
            </li>
            <li className="flex justify-around items-center pt-2">
              <a className="text-sm p-1 text-white mr-2 hover:bg-white hover:text-[#259ae1] rounded" 
                 href="https://goo.gl/maps/2fdRZT8hEBVK4cni9" target="_blank" aria-label="Google Maps">
                <i className="fa fa-street-view fa-fw" title="Google Maps"></i>
              </a>
            </li>
            <li className="flex justify-around items-center pt-2">
              <a className="text-sm p-1 text-white mr-2 hover:bg-white hover:text-[#259ae1] rounded" 
                 href="https://www.instagram.com/phantomhealthcare/" target="_blank" aria-label="Instagram">
                <i className="fa fa-instagram fa-fw" title="Instagram"></i>
              </a>
            </li>
            <li className="flex justify-around items-center pt-2">
              <a className="text-sm p-1 text-white mr-2 hover:bg-white hover:text-[#259ae1] rounded" 
                 href="https://www.facebook.com/phantom.healthcare.ind" target="_blank" aria-label="Facebook">
                <i className="fa fa-facebook-square fa-fw" title="Facebook"></i>
              </a>
            </li>
            <li className="flex justify-around items-center pt-2">
              <a className="text-sm p-1 text-white mr-2 hover:bg-white hover:text-[#259ae1] rounded" 
                 href="https://www.pinterest.com/phantomhealthcare/" target="_blank" aria-label="Pinterest">
                <i className="fa fa-pinterest fa-fw" title="Pinterest"></i>
              </a>
            </li>
            <li className="flex justify-around items-center pt-2">
              <a className="text-sm p-1 text-white mr-2 hover:bg-white hover:text-[#259ae1] rounded" 
                 href="https://in.linkedin.com/company/phantom-healthcare-ind-private-limited-company" target="_blank" aria-label="LinkedIn">
                <i className="fa fa-linkedin fa-fw" title="LinkedIn"></i>
              </a>
            </li>
          </ul>

          {/* Contact Info */}
          <span className="text-white font-medium text-sm ml-0">
            <a href="mailto:info@phantomhealthcare.com" className="text-white font-medium text-sm ml-0 no-underline pl-4 hover:cursor-pointer">
              info@phantomhealthcare.com
            </a>
            <span className="text-white font-medium text-sm ml-0">
              <a href="https://www.phantomis.co.in/" className="text-white font-medium text-sm ml-0 no-underline pl-4 hover:cursor-pointer">
                <i className="fa fa-user" aria-hidden="true"></i>
                Employee Login
              </a>
            </span>
          </span>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="shadow-[0px_5px_10px_0px_#aaa] w-full bg-white text-black opacity-90 z-50 sticky top-0">
        <div className="flex justify-between h-16 items-center max-w-[1200px] w-[90%] mx-auto px-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image src="/images/images/logo.jpg" alt="Phantom Healthcare Logo" width={180} height={55} className="w-auto h-14" unoptimized />
            </Link>
          </div>

          {/* Hamburger Menu for Mobile */}
          <button 
            onClick={toggleMenu}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
          >
            <span className={`block w-6 h-0.5 bg-black transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-black transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-black transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>

          {/* Menu Items */}
          <ul className={`absolute top-full left-0 w-full bg-white shadow-lg md:static md:w-auto md:shadow-none md:flex md:flex-row ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
            <li className="block md:inline-block">
              <Link href="/" className="block md:inline-block text-black no-underline font-semibold text-sm transition-colors duration-300 ease-in-out hover:text-white hover:bg-[#259ae1] px-4 py-3 md:px-3 md:py-2">
                Home
              </Link>
            </li>
            <li className="block md:inline-block">
              <Link href="/about" className="block md:inline-block text-black no-underline font-semibold text-sm transition-colors duration-300 ease-in-out hover:text-white hover:bg-[#259ae1] px-4 py-3 md:px-3 md:py-2">
                About Us
              </Link>
            </li>
            
            {/* Products Dropdown */}
            <li className="relative block md:inline-block group">
              <a href="#" className="block md:inline-block text-black no-underline font-semibold text-sm transition-colors duration-300 ease-in-out hover:text-white hover:bg-[#259ae1] px-4 py-3 md:px-3 md:py-2">
                Products
                <i className="nav-arrow fa fa-angle-down ml-1" aria-hidden="true" role="img"></i>
              </a>
              <div className="hidden group-hover:block absolute bg-white text-black min-w-[200px] p-4 text-sm leading-6 font-light left-0 md:ml-[-1rem] h-auto mt-0 z-10 rounded-b-lg shadow-lg border">
                {/* MRI Scanner with submenu */}
                <div className="relative group/mri">
                  <a href="#" className="text-black no-underline hover:text-[#259ae1] block py-1 flex items-center group-hover/mri:bg-gray-100">
                    MRI Scanner
                    <span className="arrow ml-1">▶</span>
                  </a>
                                     {/* Submenu appears on hover of either parent or submenu */}
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
            </li>

            {/* Services Dropdown */}
            <li className="relative block md:inline-block group">
              <a href="#" className="block md:inline-block text-black no-underline font-semibold text-sm transition-colors duration-300 ease-in-out hover:text-white hover:bg-[#259ae1] px-4 py-3 md:px-3 md:py-2">
                Services
                <i className="nav-arrow fa fa-angle-down ml-1" aria-hidden="true" role="img"></i>
              </a>
              <div className="hidden group-hover:block absolute bg-white text-black min-w-[200px] p-4 text-sm leading-6 font-light left-0 md:ml-[-1rem] h-auto mt-0 z-10 rounded-b-lg shadow-lg border">
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
            </li>

            <li className="block md:inline-block">
              <Link href="/blogs" className="block md:inline-block text-black no-underline font-semibold text-sm transition-colors duration-300 ease-in-out hover:text-white hover:bg-[#259ae1] px-4 py-3 md:px-3 md:py-2">
                Blogs
              </Link>
            </li>
            <li className="block md:inline-block">
              <Link href="/contact" className="block md:inline-block text-black no-underline font-semibold text-sm transition-colors duration-300 ease-in-out hover:text-white hover:bg-[#259ae1] px-4 py-3 md:px-3 md:py-2">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Floating Download Brochure */}
      <div className="fixed top-[77%] right-4 z-50">
        <button onClick={openModal} className="flex flex-col items-center bg-[#59913d] rounded-lg text-white border-none cursor-pointer hover:bg-[#255a0a] p-3 shadow-lg">
          <i className="fa fa-file-pdf-o text-2xl mb-1"></i>
          <p className="text-xs text-center">Download<br />Brochure</p>
        </button>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg max-w-4xl w-full max-h-[95vh] overflow-y-auto relative">
              <p className="text-xl mb-4 font-semibold">Fill Up The Form <br /> To Download Our Brochure</p>
              <button onClick={closeModal} className="absolute top-2 right-2 text-lg font-semibold border-none cursor-pointer bg-gray-200 hover:bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center">
                <i className="fa fa-close text-red-500"></i>
              </button>
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSe_biYDKz7FI69XzVT_FoH-hzNvksu5mgYlPg5n9VKVgj62xQ/viewform?embedded=true"
                width={700} 
                height={1250} 
                frameBorder="0" 
                className="w-full"
              >
                Loading…
              </iframe>
            </div>
          </div>
        )}
      </div>

      {/* Floating WhatsApp Call */}
      <div className="fixed top-[80%] z-50 bg-[#59913d] w-16 h-16 rounded-full text-center text-2xl text-white hover:bg-[#1e4909] shadow-lg flex items-center justify-center">
        <a href="https://wa.me/919899963601" className="text-white no-underline">
          <i className="fa fa-whatsapp" aria-hidden="true"></i>
        </a>
      </div>

      {/* Floating Call Timing - COMMENTED OUT */}
      {/* <div className="fixed top-[82.5%] z-50 bg-[#59913d] w-32 h-12 ml-20 text-center text-xs text-white hover:bg-[#1e4909] shadow-lg flex items-center justify-center">
        <p>Mon-Sat <br /> 10:30am to 6:30pm</p>
      </div> */}

    </>
  );
} 