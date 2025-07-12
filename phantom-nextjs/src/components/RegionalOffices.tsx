/**
 * REGIONAL OFFICES COMPONENT
 * =========================
 * 
 * PURPOSE: Display regional office locations with world map background
 * CREATED: Based on original website regional offices section
 * 
 * FEATURES:
 * - World map background image
 * - Three regional offices: USA, UAE, and India
 * - Country flags with decent sizing
 * - Full contact information (not trimmed like footer)
 * - Responsive design - columns on desktop, stacked on mobile
 * - Hover effects on contact links
 * 
 * RESPONSIVE BEHAVIOR:
 * - Desktop: 3 columns side by side
 * - Mobile: Single column stacked layout
 * - Flags scale appropriately for screen size
 * 
 * STYLING:
 * - World map background with cover positioning
 * - White text on dark background overlay
 * - Card-like styling for each office
 * - Hover effects for contact links
 */

import React from 'react';
import Image from 'next/image';

const offices = [
  {
    region: 'USA & Western Region',
    flag: '/images/usa-map.jpg',
    alt: 'USA Flag',
    company: 'Phantom Healthcare US LLC',
    address: '424, Fort Hill Drive, STE 105, Naperville, Illinois(60540), United States of America (USA)',
    phones: ['+16307206801', '+919899963601'],
    emails: ['info@phantomhealthcare.com', 'biz@phantomhealthcare.com'],
  },
  {
    region: 'Gulf-Arab & African Region',
    flag: '/images/uae-flag.jpg',
    alt: 'UAE Flag',
    company: 'Phantom Healthcare AE FZC',
    address: 'LV 63-C, Al Hamriyah Freezone, Sharjah United Arab Emirates(UAE)',
    phones: ['+971522208819', '+971556357700'],
    emails: ['sachin.rawat@phantomhealthcare.com', 'info@phantomhealthcare.com', 'biz@phantomhealthcare.com'],
  },
  {
    region: 'India & Sub-Continent Region',
    flag: '/images/india-flag.jpg',
    alt: 'India Flag',
    company: 'Phantom Healthcare IND Private Limited',
    address: 'Plot No. 51, Sector 27C, Near NHPC Chowk, Main Mathura Road, Faridabad, Haryana – 121003 (INDIA)',
    phones: ['+919899963601', '+911294312423'],
    emails: ['info@phantomhealthcare.com', 'biz@phantomhealthcare.com'],
  },
];

const RegionalOffices = () => {
  return (
    <section
      className="w-full py-4 md:py-5 lg:py-6 antialiased"
      style={{
        backgroundImage: "url('/images/world-map-3.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <div className="flex flex-col md:flex-row justify-center items-start md:items-stretch gap-y-6 md:gap-y-0 md:gap-x-2 lg:gap-x-8">
          {offices.map((office) => (
            <div
              key={office.region}
              className="flex-1 flex flex-col items-center text-center text-gray-900"
            >
              <h3 className="font-bold text-base md:text-lg lg:text-xl mb-1" style={{fontSize: 'clamp(1rem, 1.2vw, 1.2rem)'}}>
                {office.region}
              </h3>
              <div className="my-1 mb-2 flex items-center justify-center">
                <div className="relative w-14 md:w-16 lg:w-20 aspect-[3/2]">
                  <Image
                    src={office.flag}
                    alt={office.alt}
                    fill
                    className="object-contain rounded"
                    unoptimized
                  />
                </div>
              </div>
              <div className="mb-0.5">
                <span className="font-bold text-sm md:text-base lg:text-lg block mb-0.5" style={{fontSize: 'clamp(0.95rem, 1vw, 1.05rem)'}}>
                  {office.company}
                </span>
                <span className="block text-xs md:text-sm leading-tight mb-0.5" style={{fontSize: 'clamp(0.85rem, 0.95vw, 0.95rem)'}}>
                  {office.address}
                </span>
              </div>
              <div className="flex flex-wrap justify-center gap-2 text-primary-700 mt-0.5 mb-0.5 text-xs md:text-sm leading-tight" style={{fontSize: 'clamp(0.85rem, 0.95vw, 0.95rem)'}}>
                {office.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone}`}
                    className="hover:underline"
                  >
                    {phone}
                  </a>
                ))}
              </div>
              <div className="flex flex-wrap justify-center gap-2 text-primary-700 mb-0.5 text-xs md:text-sm leading-tight" style={{fontSize: 'clamp(0.85rem, 0.95vw, 0.95rem)'}}>
                {office.emails.map((email) => (
                  <a
                    key={email}
                    href={`mailto:${email}`}
                    className="hover:underline break-all"
                  >
                    {email}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegionalOffices; 