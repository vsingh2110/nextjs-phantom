'use client';

import React, { useEffect, useState } from "react";

const counters = [
  { label: "TOTAL INSTALLATIONS", value: 450 },
  { label: "HAPPY CUSTOMERS", value: 300 },
  { label: "CITIES COVERED", value: 100 },
  { label: "COUNTRIES COVERED", value: 3 },
];

function useCounterAnimation(visible: boolean, value: number) {
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
  return count;
}

const MobileHorizontalCounterSection = ({ visible }: { visible: boolean }) => {
  return (
    <div className="w-full mt-6 pb-2">
      <div className="flex flex-row gap-2 w-full px-1">
        {counters.map((counter, i) => {
          const count = useCounterAnimation(visible, counter.value);
          return (
            <div
              key={counter.label}
              className="flex-1 min-w-0 aspect-square bg-white/10 rounded-2xl border border-white/30 p-2 text-center flex flex-col justify-center items-center shadow-xl"
            >
              <div className="font-bold text-white" style={{fontSize:'clamp(1.1rem,4vw,1.3rem)', textShadow:'2px 2px 4px #000000'}}>{count}+</div>
              <div
                className="font-normal text-white opacity-90 leading-tight"
                style={{
                  fontSize: 'clamp(0.65rem,1.8vw,0.85rem)',
                  textShadow: '2px 2px 4px #000000',
                  ...(typeof window !== 'undefined' && window.innerWidth <= 320 ? { fontSize: '0.6rem' } : {})
                }}
              >
                {counter.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MobileHorizontalCounterSection; 