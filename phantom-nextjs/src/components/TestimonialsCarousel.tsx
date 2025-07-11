/**
 * TESTIMONIALS CAROUSEL COMPONENT
 * ================================
 * 
 * PURPOSE: Responsive testimonials carousel using Swiper.js library
 * CREATED: July 12, 2025 (01:50 AM IST)
 * LAST MODIFIED: July 12, 2025
 * 
 * FEATURES:
 * - Responsive breakpoints: 1 card (mobile), 2 cards (tablet), 3 cards (desktop), 4 cards (large screens)
 * - Infinite loop scrolling with smooth transitions
 * - Auto-play every 5 seconds with manual navigation
 * - Custom styled navigation arrows and pagination dots
 * - Optimized for all screen sizes including 1920px+ displays
 * 
 * DEPENDENCIES:
 * - swiper: Carousel library for smooth responsive behavior
 * - next/image: Optimized image loading for doctor profiles
 * 
 * RESPONSIVE BREAKPOINTS:
 * - Mobile (< 768px): 1 card, 16px spacing
 * - Tablet (768px - 1024px): 2 cards, 16px spacing  
 * - Desktop (1024px - 1440px): 3 cards, 20px spacing
 * - Large Desktop (1440px+): 4 cards, 24px spacing
 * - Extra Large (1920px+): 4 cards, 32px spacing
 * 
 * IMPLEMENTATION NOTES:
 * - Replaced custom carousel that had responsive and infinite loop issues
 * - Uses Swiper's built-in modules for Navigation, Pagination, and Autoplay
 * - Custom CSS for pagination styling to match design system
 * - All testimonials data is currently hardcoded (future: CMS integration)
 * 
 * USAGE:
 * <TestimonialsCarousel />
 * 
 * RELATED FILES:
 * - docs/dev-notes/2025-07-12-testimonials-carousel-implementation.md (work log)
 * - package.json (swiper dependency)
 */

"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Testimonial {
  name: string;
  subtitle: string;
  quote: string;
  image: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Dr. Vikas Jain",
    subtitle: "Director, Advanced Imaging MRI",
    quote:
      "We thank Phantom Healthcare Pvt. Limited, the only third party vendor dealing in complete turnkey MR project at a very affordable cost. They are very professional and competitive in approach. Their approach is to make this imaging modality accessible and affordable to the investors and owners of diagnostic centers. This makes the quality imaging of MR affordable and accessible to poor and masses.",
    image: "/images/doctors/dr.vikas-jain.jpg",
  },
  {
    name: "Dr. Devender Singh Yadav",
    subtitle: "Modern Diagnostic & Research Centre",
    quote:
      "We thank Phantom Healthcare Pvt. Ltd. for providing us 1.5 T MRI machine at a very affordable cost. Phantom Healthcare is the third party vendor that provides complete turnkey MRI project with skilled team of engineers, best after sale support and good inventory.",
    image: "/images/doctors/Dr.Devender-Singh-Yadav.jpg",
  },
  {
    name: "Dr. Dhirendra Gyan",
    subtitle: "Dr. Pannalal Hospital & Research Centre (P) Ltd.",
    quote:
      "We at Dr.Pannalal Hospital & Research Centre (P) Ltd. thank Phantom Healthcare Pvt. Ltd. for providing us a real good MRI imaging machine as a full turnkey MR project at a very affordable price and complete peace of mind. They are highly professional in their very neat and tidy work.",
    image: "/images/doctors/Dr.DhirendraGyan.jpg",
  },
  {
    name: "Dr. Himanshu Agarwal",
    subtitle: "Resonance Diagnostic Centre and Pathology",
    quote:
      "Phantom Healthcare Pvt. Ltd. is the only third party vendor dealing in complete turnkey GE MRI project, providing us a good MRI machine well within our budget. Phantom Healthcare has a skilled team of engineers and good inventory.",
    image: "/images/doctors/Dr.Himanshu-Agarwal.jpg",
  },
  {
    name: "Dr. Deepak Patkar",
    subtitle: "H.O.D Imaging, Nanavati SuperSpeciality Hospital",
    quote:
      "For 1.5T MRI, we trust only Phantom Healthcare Pvt. Ltd. based in New Delhi. Phantom Healthcare has always provided best quality equipment at competitive prices. They have given us prompt and effective post purchase services and upgradations.",
    image: "/images/doctors/DrDeepakPatkar.jpg",
  },
];

export default function TestimonialsCarousel() {
  const Card = ({ t }: { t: Testimonial }) => (
    <div className="bg-white rounded-2xl shadow-lg p-4 lg:p-6 flex flex-col h-full hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="text-center mb-4">
        <Image
          src={t.image}
          alt={t.name}
          width={80}
          height={80}
          className="w-16 h-16 lg:w-20 lg:h-20 mx-auto rounded-full object-cover border-4 border-primary-100"
          unoptimized
        />
        <h4 className="text-base lg:text-lg font-bold text-gray-900 mt-3 leading-tight">
          {t.name}
        </h4>
        <span className="text-xs text-gray-600 block mt-1">
          ({t.subtitle})
        </span>
      </div>
      <p className="text-gray-600 text-xs lg:text-sm leading-relaxed flex-grow">{t.quote}</p>
    </div>
  );

  return (
    <div className="testimonials-carousel">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={16}
        slidesPerView={1}
        loop={true}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          // iPad/Tablet: 2 cards side by side
          768: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          // Laptop/Desktop: 3 cards for comfortable viewing
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          // Large Desktop: 4 cards for optimal space usage
          1440: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
                     // Extra Large Screens (1920px+): 4 cards with more spacing
           1920: {
             slidesPerView: 4,
             spaceBetween: 32,
           },
         }}
        className="pb-12"
      >
        {TESTIMONIALS.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <Card t={testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="swiper-button-prev-custom absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-700 w-8 h-8 rounded-full flex items-center justify-center shadow z-10 cursor-pointer">
        <i className="fa fa-chevron-left"></i>
      </div>
      <div className="swiper-button-next-custom absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-700 w-8 h-8 rounded-full flex items-center justify-center shadow z-10 cursor-pointer">
        <i className="fa fa-chevron-right"></i>
      </div>

      <style jsx>{`
        .testimonials-carousel {
          position: relative;
        }
        .testimonials-carousel .swiper-pagination {
          bottom: 0;
        }
        .testimonials-carousel .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #d1d5db;
          opacity: 1;
        }
        .testimonials-carousel .swiper-pagination-bullet-active {
          background: #2563eb;
        }
      `}</style>
    </div>
  );
} 