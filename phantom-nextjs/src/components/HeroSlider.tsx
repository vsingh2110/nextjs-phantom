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
    description: 'Our 100+ Team Of Service Engineers Are Always Present 24*7 For You',
    textClass: 'txt'
  },
  {
    id: 4,
    video: '/images/video2.mp4',
    title: 'Complete Turnkey Solutions',
    description: '• Site Planning, Construction • Financial Assistance, Installation • De-Installations, Re-Installation',
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
    description: 'We Have One Of The Largest Inventory of Spare Parts, We Provide AMC/CMC Services',
    textClass: 'txt'
  }
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
    <section className="relative min-h-[60vh] max-h-[100vh] flex items-center justify-center bg-white hero-slider-container mt-6 md:mt-8 lg:mt-0">
      {/* Mobile-only top border for hero section */}
      <div className="block lg:hidden absolute top-0 left-0 w-full border-t-2 border-gray-200 z-20"></div>
      {isMobile ? (
        // Mobile Layout: Full Hero Slider + Side Section Below
        <div className="flex flex-col w-full">
          <div className="relative h-[70vh] min-h-[350px] max-h-[90vh] w-full overflow-hidden">
            {/* Slides */}
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`myslide absolute inset-0 ${
                  index === currentSlide ? 'active fade' : ''
                }`}
              >
                {/* Background Image/Video */}
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
                    <>
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="hidden md:block img-slider"
                        priority={index === 0}
                        unoptimized
                      />
                      <Image
                        src={slide.mobileImage}
                        alt={slide.title}
                        fill
                        className="md:hidden img-slider"
                        priority={index === 0}
                        unoptimized
                      />
                    </>
                  )}
                </div>

                {/* Content */}
                <div className={slide.textClass}>
                  <h1>{slide.title}</h1>
                  <p>{slide.description}</p>
                </div>
              </div>
            ))}

            {/* Navigation Arrows */}
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

            {/* Dots */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
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

            {/* Play/Pause Button */}
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="absolute top-8 right-8 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              <i className={`fas ${isAutoPlaying ? 'fa-pause' : 'fa-play'} text-xl`}></i>
            </button>
          </div>
          <div className="bg-white py-6 px-2 w-full mt-4">
            <HeroSideSection />
          </div>
        </div>
      ) : (
        // Desktop Layout: Hero Slider (80%) + Side Section (20%)
        <div className="w-full max-w-screen-2xl mx-auto flex flex-col lg:flex-row h-full">
          {/* Hero Slider - Responsive width */}
          <div className="relative flex-1 min-w-0 min-h-[40vh] max-h-[100vh] lg:basis-4/5 xl:basis-3/4 2xl:basis-2/3">
            {/* Slides */}
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`myslide absolute inset-0 ${
                  index === currentSlide ? 'active fade' : ''
                }`}
              >
                {/* Background Image/Video */}
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
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="img-slider"
                      priority={index === 0}
                      unoptimized
                    />
                  )}
                </div>

                {/* Content */}
                <div className={slide.textClass}>
                  <h1>{slide.title}</h1>
                  <p>{slide.description}</p>
                </div>
              </div>
            ))}

            {/* Navigation Arrows */}
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

            {/* Dots */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
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

            {/* Play/Pause Button */}
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="absolute top-8 right-8 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              <i className={`fas ${isAutoPlaying ? 'fa-pause' : 'fa-play'} text-xl`}></i>
            </button>
          </div>
          {/* Side Section - Responsive width */}
          <div className="w-full lg:w-auto lg:basis-1/5 xl:basis-1/4 2xl:basis-1/3 flex-shrink-0 flex-grow-0">
            <HeroSideSection />
          </div>
        </div>
      )}
    </section>
  );
} 