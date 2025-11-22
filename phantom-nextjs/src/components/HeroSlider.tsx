'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeroSideSection from './HeroSideSection';

const slides = [
  {
    id: 1,
    image: '/images/slideshow/Phantom PPT.jpg',
    mobileImage: '/images/slideshow/img1-mobile.jpg',
    title: 'Largest 3rd Party Vendors Of Refurbished Radiology Equipments',
    description: 'MRI, CT Scanners, PET-CT Scanners, Cath Labs, Bone Densitometer',
    textClass: 'txt1'
  },
  {
    id: 2,
    image: '/images/slideshow/map installations.jpg',
    mobileImage: '/images/slideshow/450-Installations-mob.jpg',
    title: '450+ Installations',
    description: 'Happy Customers All Across The Country',
    textClass: 'txt'
  },
  {
    id: 3,
    image: '/images/slideshow/Eng.jpg',
    mobileImage: '/images/slideshow/eng-mob.jpg',
    title: 'Dedicated Team',
    description: <>Our 100+ Team Of Service Engineers<br />Are Always Present 24*7 For You</>,
    textClass: 'txt'
  },
  {
    id: 4,
    video: '/images/video2.mp4',
    title: 'Complete Turnkey Solutions',
    description: <>• Site Planning, Construction<br />• Financial Assistance, Installation<br />• De-Installations, Re-Installation</>,
    textClass: 'txt'
  },
  {
    id: 5,
    image: '/images/slideshow/fa.jpg',
    mobileImage: '/images/slideshow/quality-mob.jpg',
    title: 'Quality Assuarance',
    description: 'We Assist You With Regulatory Support, We have NABL and AERB Approved Lab for CT',
    textClass: 'txt1'
  },
  {
    id: 6,
    image: '/images/slideshow/hf.jpg',
    mobileImage: '/images/slideshow/Spare-mob.jpg',
    title: 'Spare Parts and Services',
    description: <>We Have One Of The Largest Inventory of Spare Parts,<br />We Provide AMC/CMC Services</>,
    textClass: 'txt'
  },
];

// Custom hook to detect if screen is below lg breakpoint
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return isMobile;
}

// --- RESPONSIVE HERO SECTION STRATEGY ---
// This hero section uses TWO SEPARATE BLOCKS for mobile/tablet and desktop/large screens.
// - <div className="block md:hidden"> ... </div> is ONLY for mobile and iPad (below md breakpoint).
// - <div className="hidden md:flex ..."> ... </div> is ONLY for desktop and above (md and up).
// This is a classic HTML/CSS approach: duplicate markup, use CSS to show/hide at breakpoints.
// DO NOT try to merge these blocks or use a single layout for all screens—
// each is carefully crafted for its device type for pixel-perfect control.
// If you need to change layout, edit each block separately and test on all breakpoints.
// --- END STRATEGY ---
export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="relative w-full bg-white hero-slider-container z-0">
      {/* Desktop-only bottom smooth shadow separator for hero section */}
      <div className="hidden md:block absolute bottom-0 left-0 w-full h-6 shadow-[0_12px_32px_-8px_rgba(0,0,0,0.18)] z-20 pointer-events-none"></div>
      {/* Mobile Hero (only visible on mobile) */}
      <div className="block md:hidden w-full overflow-x-hidden bg-blue-100">
        <div className="relative h-[70vh] min-h-[350px] max-h-[90vh] w-full overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`myslide absolute inset-0 ${
                index === currentSlide ? 'active fade' : ''
              }`}
            >
              <div className="absolute inset-0">
                {slide.video ? (
                  <video
                    className="video-bg"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={slide.video} type="video/mp4" />
                  </video>
                ) : (
                  <Image
                    src={slide.mobileImage || slide.image || '/images/slideshow/Phantom PPT.jpg'}
                    alt={slide.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="img-slider object-cover"
                    priority={index === 0}
                  />
                )}
              </div>
              <div className={slide.textClass}>
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 z-10"
          >
            <i className="fas fa-chevron-left text-xl"></i>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 z-10"
          >
            <i className="fas fa-chevron-right text-xl"></i>
          </button>
          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-white scale-125'
                    : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                }`}
              ></button>
            ))}
          </div>
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="absolute top-8 right-8 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          >
            <i className={`fas ${isAutoPlaying ? 'fa-pause' : 'fa-play'} text-xl`}></i>
          </button>
        </div>
        <div className="bg-white py-0 px-0 w-full">
          <HeroSideSection />
        </div>
      </div>
      {/* Desktop/Tablet Hero (only visible on md and up) */}
      <div className="hidden md:flex w-full h-[70vh] flex-row">
        <div className="relative flex-1 h-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`myslide absolute inset-0 h-full w-full ${index === currentSlide ? 'active fade' : ''}`}
            >
              <div className="absolute inset-0 h-full w-full">
                {slide.video ? (
                  <video
                    className="video-bg object-cover h-full w-full"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={slide.video} type="video/mp4" />
                  </video>
                ) : (
                  <Image
                    src={slide.image || '/images/slideshow/Phantom PPT.jpg'}
                    alt={slide.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 70vw"
                    className="img-slider object-cover"
                    priority={index === 0}
                  />
                )}
              </div>
              <div className={slide.textClass + ' text-white drop-shadow-lg text-2xl md:text-4xl font-bold'}>
                <h1>{slide.title}</h1>
                <p className="text-lg md:text-xl font-medium mt-2">{slide.description}</p>
              </div>
            </div>
          ))}
          {/* Navigation Dots (desktop only) */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-0 border-0 shadow-none p-0 m-0 ${
                  index === currentSlide
                    ? 'bg-white scale-125'
                    : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                }`}
              ></button>
            ))}
          </div>
          {/* Navigation Arrows (desktop only) */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 z-10"
          >
            <i className="fas fa-chevron-left text-xl"></i>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 z-10"
          >
            <i className="fas fa-chevron-right text-xl"></i>
          </button>
        </div>
        <div className="relative h-full w-[320px] flex-shrink-0 flex items-center justify-center overflow-hidden bg-white">
          <HeroSideSection />
        </div>
      </div>
    </section>
  );
}