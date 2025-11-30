'use client';

/**
 * YOUTUBE LITE FACADE COMPONENT
 * =============================
 * 
 * PURPOSE: Lightweight YouTube embed that defers iframe loading until user clicks
 * CREATED: November 30, 2025
 * 
 * USES SAME CSS AS YouTubeEmbed.tsx:
 * - scale-[1.5] to fill container properly
 * - -translate-x-1/2 -translate-y-1/2 for centering
 * - Same iframe params (no controls, no branding, loop)
 */

import { useState, useRef, useEffect } from 'react';

interface YouTubeLiteProps {
  videoId: string;
  title?: string;
}

export default function YouTubeLite({ 
  videoId, 
  title = 'YouTube video'
}: YouTubeLiteProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for lazy loading thumbnail
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // YouTube thumbnail URL (maxres if available, hq as fallback)
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full bg-black overflow-hidden"
    >
      {!isPlaying ? (
        // Facade: Show thumbnail with small play button
        <button
          onClick={() => setIsPlaying(true)}
          className="absolute inset-0 w-full h-full cursor-pointer group"
          aria-label={`Play video: ${title}`}
        >
          {/* Thumbnail */}
          {isInView && (
            <img
              src={thumbnailUrl}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          )}
          
          {/* Small Play Button - centered */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
              <svg 
                className="w-5 h-5 text-white ml-0.5" 
                fill="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </button>
      ) : (
        // Actual iframe - EXACT SAME CSS as YouTubeEmbed.tsx
        <iframe
          className="absolute top-1/2 left-1/2 w-full h-full pointer-events-none -translate-x-1/2 -translate-y-1/2 scale-[1.5]"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&playsinline=1&rel=0&showinfo=0&modestbranding=1&iv_load_policy=3&disablekb=1&fs=0`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          tabIndex={-1}
          aria-hidden="true"
        />
      )}
    </div>
  );
}
