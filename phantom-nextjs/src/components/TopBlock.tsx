"use client";
import Image from 'next/image';

// TopBlock: Three feature boxes and a callback button, ported from static HTML
export default function TopBlock() {
  return (
    <section className="py-8 bg-white w-full overflow-x-hidden">
      <div className="w-full max-w-5xl mx-auto px-2 sm:px-4">
        {/* Three Boxes Row (from static: .top-wrap-box) */}
        <div className="flex flex-col md:flex-row gap-2 md:gap-8 justify-center items-stretch mb-8">
          {/* Box 1: Buy/Sell Machines */}
          <div className="flex-1 bg-white rounded-2xl shadow-2xl p-2 md:p-10 flex flex-col items-center text-center antialiased border border-gray-200 min-w-0">
            <Image src="/images/icons.png" alt="Buy/Sell MRI Machines, CT Scanner, PET-CT, Cath-Lab Machines" width={0} height={0} sizes="100vw" className="mb-4 w-16 h-16 md:w-32 md:h-32 object-contain" unoptimized />
            <h2 className="text-xs md:text-lg font-semibold mb-2 subpixel-antialiased break-words">Buy/Sell MRI Machines, CT Scanner, PET-CT, Cath-Lab Machines</h2>
            <h3 className="text-xs md:text-sm font-medium text-gray-600 break-words">Buy New as well as refurbished equipment from a wide range of models</h3>
          </div>
          {/* Box 2: Spare Parts Inventory */}
          <div className="flex-1 bg-white rounded-2xl shadow-2xl p-2 md:p-10 flex flex-col items-center text-center antialiased border border-gray-200 min-w-0">
            <Image src="/images/upd.png" alt="Inventory of Spare Parts also Available" width={0} height={0} sizes="100vw" className="mb-4 w-16 h-16 md:w-32 md:h-32 object-contain" unoptimized />
            <h2 className="text-xs md:text-lg font-semibold mb-2 subpixel-antialiased break-words">Inventory of Spare Parts also Available​</h2>
            <h3 className="text-xs md:text-sm font-medium text-gray-600 break-words">We have a large inventory of spare parts available for upgrades.</h3>
          </div>
          {/* Box 3: Services and Repairs */}
          <div className="flex-1 bg-white rounded-2xl shadow-2xl p-2 md:p-10 flex flex-col items-center text-center antialiased border border-gray-200 min-w-0">
            <Image src="/images/ser.png" alt="Services and Repairs for Your Equipment" width={0} height={0} sizes="100vw" className="mb-4 w-16 h-16 md:w-32 md:h-32 object-contain" unoptimized />
            <h2 className="text-xs md:text-lg font-semibold mb-2 subpixel-antialiased break-words">Services and Repairs for Your Equipment</h2>
            <h3 className="text-xs md:text-sm font-medium text-gray-600 break-words">We provide service plans and also do repair work of your machines</h3>
          </div>
        </div>
        {/* Request A Callback Button (opens same modal as sell-to-us) */}
        <div className="flex justify-center">
          {/*
            This button triggers the same modal as the 'sell to us' button.
            It dispatches a custom event for modal opening, as used elsewhere.
          */}
          <button
            type="button"
            className="btn btn-primary px-8 py-3 text-lg font-semibold rounded-lg shadow-md hover:bg-primary-700 transition-colors"
            onClick={() => {
              if (typeof window !== 'undefined') {
                const evt = new CustomEvent('openContactModal');
                window.dispatchEvent(evt);
              }
            }}
          >
            Request A Callback
          </button>
        </div>
      </div>
    </section>
  );
} 