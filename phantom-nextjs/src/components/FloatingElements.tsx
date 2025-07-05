'use client';

import { useState } from 'react';

export default function FloatingElements() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Floating Download Brochure Button */}
      <div className="fixed top-[77%] right-[5.9%] z-50 w-0 h-0 ml-6 rounded-[5rem] text-center text-[2.5rem] text-white">
        <button 
          onClick={openModal}
          className="flex flex-col w-auto h-auto mx-auto text-center text-[1.5rem] p-4 bg-[#59913d] rounded-[10%] text-white border-none cursor-pointer hover:bg-[#255a0a] transition-colors"
        >
          <i className="fa fa-file-pdf-o text-[3.5rem] mx-auto"></i>
          <p className="text-[1.5rem]">Download Brochure</p>
        </button>
      </div>

      {/* Modal Dialog */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-[#6da054] opacity-20" onClick={closeModal}></div>
          <div className="relative bg-white rounded-lg p-8 max-w-4xl w-full mx-4 max-h-[95vh] overflow-y-auto">
            <button 
              onClick={closeModal}
              className="absolute right-4 top-4 text-[1.7rem] font-semibold border-none cursor-pointer text-red-500"
            >
              <i className="fa fa-close text-red-500"></i> Close
            </button>
            <p className="text-[3rem] mb-4">Fill Up The Form <br /> To Download Our Brochure</p>
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

      {/* Floating WhatsApp Call Button */}
      <div className="fixed top-[80%] z-50 bg-[#59913d] w-28 h-28 ml-1 rounded-[5rem] text-center text-[4rem] text-white hover:bg-[#1e4909] transition-colors">
        <a href="https://wa.me/919899963601" className="block w-full h-full flex items-center justify-center">
          <i className="fa fa-whatsapp text-white mt-6"></i>
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