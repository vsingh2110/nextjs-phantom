'use client';

import { useState } from 'react';
import Link from 'next/link';
import ContactFormModal from './ContactFormModal';

export default function HeroSideSection() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      {/* Hero Side Section - Responsive for desktop and mobile */}
      <section className="hero-side w-full h-auto lg:h-auto max-h-full z-20 flex items-center justify-center p-0 lg:p-2 mt-4 lg:mt-0">
        <div className="hero-side-warpper bg-white bg-opacity-95 backdrop-blur-sm rounded-none lg:rounded-2xl p-0 lg:p-3 w-full lg:w-[300px] xl:w-[320px] space-y-0 lg:space-y-3 shadow-none lg:shadow-2xl max-h-full overflow-y-auto">
          {/* Buy Online - EXACT TEXT */}
          <div className="buy-online text-center p-4 lg:p-2 bg-gradient-to-r from-primary-50 to-primary-100 rounded-none lg:rounded-lg border-b lg:border-none border-white">
            <h2 className="text-sm lg:text-lg font-bold text-primary-700 mb-1">Buy Online</h2>
            <p className="text-xs lg:text-sm text-gray-600 mb-2 leading-tight">
              Buy parts and services, We have one of the largest inventory of spare parts deliverable all over India.
            </p>
            <button>
              <Link 
                href="http://phantomhealthcare.shop/" 
                className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold py-1 px-3 lg:px-4 rounded-lg transition-all duration-300 text-xs lg:text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Order Now
              </Link>
            </button>
          </div>

          {/* Sell To Us - EXACT TEXT */}
          <div className="sell-to-us text-center p-4 lg:p-2 bg-gradient-to-r from-secondary-50 to-secondary-100 rounded-none lg:rounded-lg border-b lg:border-none border-white">
            <h2 className="text-sm lg:text-lg font-bold text-secondary-700 mb-1">Sell To Us</h2>
            <p className="text-xs lg:text-sm text-gray-600 mb-2 leading-tight">
              Get the best buyback or exchange value of your old/existing MRI and CT Scans
            </p>
            <button 
              onClick={() => {
                if (typeof window !== 'undefined') {
                  const evt = new CustomEvent('openContactModal');
                  window.dispatchEvent(evt);
                }
              }}
              className="inline-block bg-secondary-600 hover:bg-secondary-700 text-white font-semibold py-1 px-3 lg:px-4 rounded-lg transition-all duration-300 text-xs lg:text-sm"
            >
              Sell Now
            </button>
          </div>

          {/* For Enquiries - EXACT TEXT */}
          <div className="hero-call-us text-center p-4 lg:p-2 bg-gradient-to-r from-gray-50 to-gray-100 rounded-none lg:rounded-lg">
            <h2 className="text-sm lg:text-lg font-bold text-gray-700 mb-1">For Enquiries</h2>
            <button>
              <Link 
                href="tel:+919899963601"
                className="inline-flex items-center bg-gray-600 hover:bg-gray-700 text-white font-semibold py-1 px-3 lg:px-4 rounded-lg transition-all duration-300 text-xs lg:text-sm"
              >
                <i className="fa fa-phone mr-1 text-xs lg:text-sm"></i>
                +91-9899963601
              </Link>
            </button>
          </div>
        </div>
      </section>
    </>
  );
} 