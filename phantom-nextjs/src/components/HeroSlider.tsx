'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeroSideSection from './HeroSideSection';

const slides = [
  {
    id: 1,
    image: '/images/images/slideshow/Phantom PPT.jpg',
    mobileImage: '/images/images/slideshow/img1-mobile.jpg',
    title: 'Largest 3rd Party Vendors Of Refurbished Radiology Equipments',
    description: 'MRI, CT Scanners, PET-CT Scanners, Cath Labs, Bone Densitometer',
    textClass: 'txt1'
  },
  {
    id: 2,
    image: '/images/images/slideshow/map installations.jpg',
    mobileImage: '/images/images/slideshow/450-Installations-mob.jpg',
    title: '450+ Installations',
    description: 'Happy Customers All Across The Country',
    textClass: 'txt'
  },
  {
    id: 3,
    image: '/images/images/slideshow/Eng.jpg',
    mobileImage: '/images/images/slideshow/eng-mob.jpg',
    title: 'Dedicated Team',
    description: 'Our 100+ Team Of Service Engineers Are Always Present 24*7 For You',
    textClass: 'txt'
  },
  {
    id: 4,
    video: '/images/images/video2.mp4',
    title: 'Complete Turnkey Solutions',
    description: '• Site Planning, Construction • Financial Assistance, Installation • De-Installations, Re-Installation',
    textClass: 'txt'
  },
  {
    id: 5,
    image: '/images/images/slideshow/fa.jpg',
    mobileImage: '/images/images/slideshow/quality-mob.jpg',
    title: 'Quality Assuarance',
    description: 'We Assist You With Regulatory Support, We have NABL and AERB Approved Lab for CT',
    textClass: 'txt1'
  },
  {
    id: 6,
    image: '/images/images/slideshow/hf.jpg',
    mobileImage: '/images/images/slideshow/Spare-mob.jpg',
    title: 'Spare Parts and Services',
    description: 'We Have One Of The Largest Inventory of Spare Parts, We Provide AMC/CMC Services',
    textClass: 'txt'
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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
    <section className="relative h-screen overflow-hidden hero-slider-container">
      {/* Desktop Layout: Hero Slider (80%) + Side Section (20%) */}
      <div className="hidden lg:flex h-full">
        {/* Hero Slider - 80% width */}
        <div className="w-4/5 relative">
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

        {/* Side Section - 20% width */}
        <div className="w-1/5">
          <HeroSideSection />
        </div>
      </div>

      {/* Mobile Layout: Full Hero Slider + Side Section Below */}
      <div className="lg:hidden flex flex-col">
        {/* Hero Slider - Reduced height on mobile to show enquiry box */}
        <div className="relative h-[65vh]">
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

        {/* Side Section - Below hero on mobile */}
        <div className="bg-white py-6 px-2">
          <HeroSideSection />
        </div>
      </div>
    </section>
  );
} 