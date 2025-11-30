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

const VerticalMobileCounter = ({ visible }: { visible: boolean }) => {
  return (
    <div className="counters-wrap w-full flex flex-col items-stretch justify-center gap-y-4 px-2 mt-6">
      {counters.map((counter, i) => {
        const count = useCounterAnimation(visible, counter.value);
        return (
          <div
            key={counter.label}
            className="counter-box flex flex-col items-center justify-center w-full min-h-[80px] bg-white/10 rounded-2xl border border-white/30 shadow-xl py-4 px-2 text-center"
          >
            <div className="font-bold text-white" style={{fontSize:'clamp(1.1rem,4vw,1.3rem)', textShadow:'2px 2px 4px #000000'}}>{count}+</div>
            <div className="font-normal text-white opacity-90 leading-tight" style={{fontSize:'clamp(0.75rem,2vw,0.875rem)', textShadow:'2px 2px 4px #000000'}}>{counter.label}</div>
          </div>
        );
      })}
    </div>
  );
};

export default VerticalMobileCounter; 