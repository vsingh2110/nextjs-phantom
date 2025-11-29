'use client';

import React, { useRef, useEffect, useState } from "react";

/**
 * ABOUT PAGE COUNTER SECTION
 * ==========================
 * 
 * Animated counter section for the About Us page.
 * Uses Intersection Observer to trigger counter animation when visible.
 * 
 * CREATED: November 29, 2025
 * Based on: CounterSection.tsx from home page
 */

const counters = [
  { label: "Super-Conductive MRI Installations", value: 170 },
  { label: "Satisfied Clients", value: 150 },
  { label: "3.0T MRI Installations", value: 10 },
  { label: "Years of Excellence", value: 13 },
];

function CounterCard({ label, value, visible }: { label: string; value: number; visible: boolean }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!visible) {
      setCount(0);
      return;
    }
    const duration = 2000;
    const totalFrames = Math.round(duration / 16);
    const increment = value / totalFrames;
    let current = 0;
    let frameCount = 0;
    let frame: number;
    
    function animate() {
      frameCount++;
      current += increment;
      if (frameCount >= totalFrames) {
        setCount(value);
      } else {
        setCount(Math.round(current));
        frame = requestAnimationFrame(animate);
      }
    }
    animate();
    return () => cancelAnimationFrame(frame);
  }, [visible, value]);
  
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 text-center border border-white/20">
      <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold text-white mb-2">
        {count}<span className="text-secondary-400">+</span>
      </div>
      <p className="text-white/90 text-xs sm:text-sm md:text-base 2xl:text-lg leading-tight">
        {label}
      </p>
    </div>
  );
}

export default function AboutCounterSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(sectionRef.current);
    
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700"
    >
      <div className="w-full max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-bold text-white mb-3 sm:mb-4">
            Our Achievements
          </h2>
          <p className="text-white/80 text-sm sm:text-base md:text-lg 2xl:text-xl max-w-3xl mx-auto">
            Phantom Healthcare has emerged as a consistent performer with remarkable milestones
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {counters.map((counter) => (
            <CounterCard 
              key={counter.label}
              label={counter.label}
              value={counter.value}
              visible={visible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
