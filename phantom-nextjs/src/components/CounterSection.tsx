import React, { useRef, useEffect, useState } from "react";

/**
 * COUNTER SECTION COMPONENT (MODERN CARD STYLE)
 * ============================================
 *
 * - White card-style counter boxes (no glassmorphism), with shadow and rounded corners.
 * - Font and box sizes are compact and modern (not bulky).
 * - Responsive, visually light, and modern.
 * - Uses Intersection Observer for scroll-triggered animation.
 *
 * DESIGN:
 * - Gradient background: from-primary-500 via-primary-600 to-primary-700 (left to right)
 * - Counter boxes: bg-white, rounded-2xl, shadow-xl, compact padding
 * - Numbers: text-primary-600, text-3xl md:text-4xl font-extrabold
 * - Labels: text-gray-800, text-xs md:text-sm font-medium, uppercase, tracking-wide
 */

const counters = [
  { label: "Total Installations", value: 450 },
  { label: "Happy Customers", value: 300 },
  { label: "Cities Covered", value: 100 },
  { label: "Countries Covered", value: 3 },
];

function useCounterAnimation(visible, value) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!visible) {
      setCount(0);
      return;
    }
    let start = 0;
    const duration = 2000;
    const step = Math.max(1, Math.ceil(value / (duration / 16)));
    let frame;
    function animate() {
      start += step;
      if (start >= value) {
        setCount(value);
      } else {
        setCount(start);
        frame = requestAnimationFrame(animate);
      }
    }
    animate();
    return () => cancelAnimationFrame(frame);
  }, [visible, value]);
  return count;
}

export default function CounterSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="counters py-8 px-2 md:px-0 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700"
    >
      {/*
        COUNTER SECTION (FULL-WIDTH, SPREAD, MODERN, RESPONSIVE)
        - On mobile: counters stack vertically (flex-col), with vertical spacing (gap-y).
        - On md/lg (e.g. 1024px): counters are centered as a group (justify-center).
        - On xl+: counters are spread edge-to-edge (justify-between).
        - Responsive horizontal padding: small on mobile, larger on desktop.
        - Do NOT shrink counters too much on mobile; keep them readable.
      */}
      <div className="counters-wrap w-full flex flex-col md:flex-row items-stretch md:items-center justify-center xl:justify-between gap-y-4 md:gap-y-0 md:gap-x-8 xl:gap-x-16 px-2 sm:px-4 md:px-12 xl:px-24 2xl:px-32 3xl:px-48 mx-auto">
        {counters.map((counter, i) => {
          const count = useCounterAnimation(visible, counter.value);
          return (
            <div
              key={counter.label}
              className="counter-box flex flex-col items-center justify-center px-2 sm:px-4 xl:px-8 2xl:px-12 py-2 sm:py-4 xl:py-6 2xl:py-8 min-w-[100px] xl:min-w-[160px] 2xl:min-w-[200px] 3xl:min-w-[260px] max-w-full md:max-w-[200px] xl:max-w-[260px] 2xl:max-w-[320px] 3xl:max-w-[400px] border border-white/30 shadow-lg rounded-xl bg-white/10 backdrop-blur-sm transition-transform duration-300 hover:scale-105"
              /*
                - border-white/30: subtle border for separation
                - shadow-lg: soft shadow for depth
                - bg-white/10 + backdrop-blur-sm: very subtle glass effect, not a box
                - Responsive min/max width and padding for ultra-wide screens
                - On mobile: max-w-full so counters fill width, not squeezed
                - Do NOT use solid backgrounds or heavy borders
              */
            >
              <span className="num text-white text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl font-extrabold drop-shadow-sm">
                {count}+
              </span>
              <span className="text-white text-xs sm:text-sm xl:text-base 2xl:text-lg font-medium mt-2 uppercase tracking-wide text-center opacity-90">
                {counter.label}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
} 