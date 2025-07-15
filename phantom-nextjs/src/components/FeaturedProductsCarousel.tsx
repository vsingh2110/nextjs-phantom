import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const PRODUCTS = [
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
];

const ProductCard = React.memo(({ product }: { product: typeof PRODUCTS[0] }) => (
  <div className="bg-white rounded-2xl shadow-2xl overflow-hidden card-hover flex flex-col min-h-80 md:min-h-[22rem] lg:min-h-[26rem] h-auto w-full max-w-full">
    <div className="relative w-full aspect-[4/3] flex justify-center items-center bg-white">
      <Image
        src={product.image}
        alt={product.title}
        fill
        className="object-contain p-2 md:p-3 lg:p-4"
        sizes="(max-width: 768px) 95vw, 350px"
        onLoadingComplete={img => {
          if (img.naturalHeight > img.naturalWidth * 1.2) {
            img.classList.remove('object-cover');
            img.classList.add('object-contain');
          }
        }}
      />
      <span className="available-ribbon subtle">Available</span>
      <style jsx>{`
        .available-ribbon.subtle {
          position: absolute;
          top: 14px;
          left: 10px;
          z-index: 10;
          display: inline-block;
          padding: 0.18em 1.2em;
          font-size: 0.92rem;
          font-weight: 600;
          color: #fff;
          background: #59913d;
          border-radius: 0.35em;
          box-shadow: 0 1px 4px rgba(0,0,0,0.08);
          transform: rotate(-18deg);
          letter-spacing: 0.2px;
          text-shadow: 0 1px 2px #0001;
          opacity: 0.93;
        }
        @media (max-width: 1024px) {
          .available-ribbon.subtle {
            top: 8px;
            left: 6px;
            font-size: 0.82rem;
            padding: 0.13em 0.8em;
          }
        }
      `}</style>
    </div>
    <div className="flex flex-col flex-1 items-center text-center justify-center w-full px-4 md:px-6 py-4 md:py-5">
      <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 w-full">{product.title}</h3>
      <p className="text-gray-600 mb-3 text-sm line-clamp-2 flex-1 w-full">{product.description}</p>
      <a href={product.link} className="btn-primary inline-block pt-2 max-w-xs w-full mx-auto">Learn More</a>
    </div>
  </div>
));
ProductCard.displayName = 'ProductCard';

export default function FeaturedProductsCarousel() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    const element = document.querySelector('.featured-products-carousel');
    if (element) {
      observer.observe(element);
    }
    return () => observer.disconnect();
  }, []);

  // Swiper's spaceBetween is in px (Swiper API limitation)
  const swiperConfig = useMemo(() => ({
    modules: [Navigation, Pagination, Autoplay],
    spaceBetween: 20, // px, Swiper API only accepts px
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next-featured',
      prevEl: '.swiper-button-prev-featured',
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 24, // px
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 32, // px
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 40, // px
      },
      1920: {
        slidesPerView: 4,
        spaceBetween: 48, // px
      },
    },
    className: "pb-12",
    onError: () => setHasError(true),
  }), []);

  if (hasError) {
    return (
      <div className="featured-products-carousel">
        <div className="text-center py-8">
          <i className="fa fa-exclamation-triangle text-4xl text-gray-400 mb-4"></i>
          <p className="text-gray-600">Featured products temporarily unavailable</p>
        </div>
      </div>
    );
  }

  if (!isVisible) {
    return (
      <div className="featured-products-carousel">
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading featured products...</p>
        </div>
      </div>
    );
  }

  return (
    <section className="featured-products-carousel relative py-0 my-0 px-0 w-screen left-1/2 right-1/2 -translate-x-1/2 2xl:max-w-[1600px] 3xl:max-w-[2000px]" style={{position:'relative'}}>
      <Swiper {...swiperConfig}>
        {PRODUCTS.map((product, index) => (
          <SwiperSlide key={index} className="p-4 md:p-6">
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom Navigation Buttons */}
      <div className="swiper-button-prev-featured absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-700 w-8 h-8 rounded-full flex items-center justify-center shadow z-10 cursor-pointer">
        <i className="fa fa-chevron-left"></i>
      </div>
      <div className="swiper-button-next-featured absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-700 w-8 h-8 rounded-full flex items-center justify-center shadow z-10 cursor-pointer">
        <i className="fa fa-chevron-right"></i>
      </div>
    </section>
  );
} 