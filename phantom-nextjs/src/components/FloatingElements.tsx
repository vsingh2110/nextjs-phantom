'use client';

import { useState, useCallback, useMemo, useEffect } from 'react';

export default function FloatingElements() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);
  const [iframeError, setIframeError] = useState<string | null>(null);

  // Memoized handlers to prevent unnecessary re-renders
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
      <div className="relative w-full h-full min-h-[600px]">
        {!isIframeLoaded && !iframeError && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#59913d] mx-auto mb-4"></div>
              <p className="text-gray-600 text-lg">Loading form...</p>
            </div>
          </div>
        )}
        
        {iframeError && (
          <div className="absolute inset-0 flex items-center justify-center bg-red-50 rounded-lg">
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
          height="600" 
          frameBorder="0" 
          className={`w-full transition-opacity duration-300 ${isIframeLoaded ? 'opacity-100' : 'opacity-0'}`}
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
      {/* Floating Download Brochure Button */}
      <div className="fixed top-[77%] right-1/2 translate-x-1/2 md:right-6 md:translate-x-0 z-50 w-auto h-auto rounded-[5rem] text-center text-[2.5rem] text-white">
        <button 
          onClick={openModal}
          className="flex flex-col w-auto h-auto mx-auto text-center text-[1.5rem] p-4 bg-[#59913d] rounded-[10%] text-white border-none cursor-pointer hover:bg-[#255a0a] transition-colors focus:outline-none focus:ring-2 focus:ring-[#59913d] focus:ring-opacity-50"
          aria-label="Download brochure form"
          title="Download our brochure"
        >
          <i className="fa fa-file-pdf-o text-[3.5rem] mx-auto" aria-hidden="true"></i>
          <p className="text-[1.5rem]">Download Brochure</p>
        </button>
      </div>

      {/* Modal Dialog */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-[#6da054] opacity-20" 
            onClick={closeModal}
            aria-hidden="true"
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-white rounded-lg p-6 md:p-8 max-w-4xl w-full max-h-[95vh] overflow-y-auto shadow-2xl">
            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="absolute right-4 top-4 text-[1.7rem] font-semibold border-none cursor-pointer text-red-500 hover:text-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 rounded-full p-2"
              aria-label="Close modal"
            >
              <i className="fa fa-close text-red-500" aria-hidden="true"></i>
            </button>
            
            {/* Modal Title */}
            <h2 id="modal-title" className="text-[2rem] md:text-[3rem] mb-4 font-bold text-gray-800">
              Fill Up The Form <br /> 
              To Download Our Brochure
            </h2>
            
            {/* Iframe Container */}
            <div className="mt-6">
              {iframeComponent}
            </div>
          </div>
        </div>
      )}

      {/* Floating WhatsApp Call Button */}
      <div className="fixed top-[80%] left-2 md:left-6 z-50 bg-[#59913d] w-20 h-20 md:w-28 md:h-28 rounded-[5rem] text-center text-[2.5rem] md:text-[4rem] text-white hover:bg-[#1e4909] transition-colors">
        <a 
          href="https://wa.me/919899963601" 
          className="block w-full h-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded-full"
          aria-label="Contact us on WhatsApp"
          title="Chat with us on WhatsApp"
        >
          <i className="fa fa-whatsapp text-white mt-6" aria-hidden="true"></i>
        </a>
      </div>

      {/* Floating Call Timing - COMMENTED OUT */}
      {/* <div className="fixed top-[82.5%] z-50 bg-[#59913d] w-48 h-16 ml-12 text-center text-[1.2rem] text-white hover:bg-[#1e4909] transition-colors">
        <p className="mt-1.5">
          Mon-Sat <br />
          10:30am to 6:30pm
        </p>
      </div> */}
    </>
  );
} 