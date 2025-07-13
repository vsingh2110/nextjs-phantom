import React, { useRef, useEffect, useState } from "react";
import MobileHorizontalCounterSection from './MobileHorizontalCounterSection';
import VerticalMobileCounter from './VerticalMobileCounter';

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
  { label: "TOTAL INSTALLATIONS", value: 450 },
  { label: "HAPPY CUSTOMERS", value: 300 },
  { label: "CITIES COVERED", value: 100 },
  { label: "COUNTRIES COVERED", value: 3 },
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
    // For small values, always step by 1 for smooth animation
    const step = value < 20 ? 1 : Math.max(1, Math.ceil(value / (duration / 16)));
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
      { threshold: 0.1 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="counters py-8 px-2 md:px-0 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700">
      {/* Show mobile counters only below 640px */}
      <div className="sm:hidden">
        <div className="mb-6">
          <MobileHorizontalCounterSection visible={visible} />
        </div>
        <VerticalMobileCounter visible={visible} />
      </div>
      {/* Show desktop/tablet counter for sm and up (including iPad) */}
      <div className="hidden sm:block">
        <div className="w-full max-w-full md:max-w-full md:w-full flex flex-row justify-center gap-10 md:gap-8 xl:gap-16 2xl:gap-20 3xl:gap-28 px-4 md:px-[5vw]" role="region" aria-label="Company statistics" tabIndex={0}>
          {counters.map((counter, i) => {
            const count = useCounterAnimation(visible, counter.value);
            return (
              <div
                key={counter.label}
                className="flex-shrink-0 sm:min-w-[9rem] sm:max-w-[11rem] md:flex-1 md:min-w-0 md:max-w-none md:aspect-square xl:min-w-[13rem] xl:max-w-[15rem] 2xl:min-w-[15rem] 2xl:max-w-[17rem] 3xl:min-w-[17rem] 3xl:max-w-[19rem] aspect-square bg-white/10 rounded-2xl border border-white/30 p-2 sm:p-4 text-center flex flex-col justify-center items-center shadow-xl"
              >
                <div className="font-bold text-white" style={{fontSize:'clamp(1.5rem,2vw,2.1rem)', textShadow:'2px 2px 4px #000000'}}>
                  <span className="xl:text-[2.1rem] 2xl:text-[2.4rem] 3xl:text-[2.7rem]">{count}+</span>
                </div>
                <div className="font-normal text-white opacity-90 leading-tight" style={{fontSize:'clamp(0.85rem,1vw,1rem)', textShadow:'2px 2px 4px #000000'}}>
                  <span className="xl:text-[1.1rem] 2xl:text-[1.2rem] 3xl:text-[1.3rem]">{counter.label}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// --- WORK LOG ENTRY: 2024-07-13 ---
// Counter Section Redesign (Mobile & Desktop)
// - Iterative process to achieve a horizontally scrollable counter section on mobile (square, viewport-relative boxes, all four visible, no cut-off).
// - Desktop: counters centered, increased gaps, scalable font sizes, font shadow, matching visual polish of other sections.
// - Strict protocol: commented reference (vertical/stacked) code must never be altered unless explicitly requested.
// - Mistakes: At one point, commented code was changed, leading to user frustration and a protocol update.
// - Workflow: All technical decisions, mistakes, and warnings are documented in real time; logs are always appended, never overwritten.
// - Lessons: Only touch mobile/desktop code as instructed, never alter untouched or reference code, always document mistakes and recovery steps.
// - Final: Both mobile and desktop versions are visually improved, responsive, and consistent with site design. Ready for further tweaks as needed.
// --- END WORK LOG ENTRY ---

// --- WORK LOG ENTRY: 2024-07-13 ---
// Mobile Counter Refactor & Comparison
// - Created two separate mobile counter components: MobileHorizontalCounterSection (modern horizontal) and VerticalMobileCounter (original vertical stacked).
// - Both are now rendered on mobile for side-by-side comparison, as per user request.
// - VerticalMobileCounter is a new component, allowing independent edits without affecting desktop or horizontal mobile versions.
// - User intends to show both to their team and decide which looks better.
// - All changes maintain strict separation of concerns and allow for easy future tweaks to either version.
// --- END WORK LOG ENTRY --- 