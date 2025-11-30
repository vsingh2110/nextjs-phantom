'use client';

/**
 * YOUTUBE LITE FACADE COMPONENT
 * =============================
 * 
 * PURPOSE: Lightweight YouTube embed that defers iframe loading until user interaction
 * CREATED: November 30, 2025
 * 
 * PERFORMANCE BENEFITS:
 * - Saves ~2+ seconds on initial page load
 * - Reduces main-thread work by not loading YouTube's heavy JavaScript
 * - Shows static thumbnail until user clicks to play
 * - Improves FCP, LCP, and TBT scores significantly
 * 
 * HOW IT WORKS:
 * 1. Initially renders only a thumbnail image (very lightweight)
 * 2. When user clicks play button, loads the actual YouTube iframe
 * 3. Uses Intersection Observer to preload thumbnail when in viewport
 * 
 * LIGHTHOUSE RECOMMENDATION:
 * "Facade" approach is the recommended way to embed third-party content
 * See: https://web.dev/articles/third-party-facades
 */

import { useState, useCallback, useRef, useEffect } from 'react';
import Image from 'next/image';

interface YouTubeLiteProps {
  videoId: string;
  title?: string;
  /** If true, autoplay when loaded (muted) */
  autoplayOnLoad?: boolean;
  /** Background style when loading */
  aspectRatio?: 'video' | '16:9' | '4:3';
}

export default function YouTubeLite({ 
  videoId, 
  title = 'YouTube video player',
  autoplayOnLoad = false,
  aspectRatio = 'video'
}: YouTubeLiteProps) {
  const [isLoaded, setIsLoaded] = useState(false);
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
      { 
        threshold: 0.1,
        rootMargin: '100px' // Preload slightly before in view
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleClick = useCallback(() => {
    setIsLoaded(true);
  }, []);

  // High quality thumbnail from YouTube
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  // For higher quality (if available): maxresdefault.jpg

  // Aspect ratio classes
  const aspectClasses = {
    'video': 'aspect-video',
    '16:9': 'aspect-video',
    '4:3': 'aspect-[4/3]'
  };

  return (
    <div 
      ref={containerRef}
      className={`relative w-full ${aspectClasses[aspectRatio]} bg-black overflow-hidden rounded-lg`}
      role="button"
      tabIndex={isLoaded ? -1 : 0}
      onClick={!isLoaded ? handleClick : undefined}
      onKeyDown={!isLoaded ? (e) => { if (e.key === 'Enter' || e.key === ' ') handleClick(); } : undefined}
      aria-label={isLoaded ? undefined : `Play video: ${title}`}
    >
      {!isLoaded ? (
        // Facade: Show thumbnail with play button
        <>
          {/* Thumbnail */}
          {isInView && (
            <Image
              src={thumbnailUrl}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
            />
          )}
          
          {/* Dark overlay for better play button visibility */}
          <div className="absolute inset-0 bg-black/30 hover:bg-black/20 transition-colors duration-200" />
          
          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-red-600 rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-200 hover:scale-110 cursor-pointer">
              <svg 
                className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" 
                fill="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
          
          {/* YouTube branding hint */}
          <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
            <i className="fa-brands fa-youtube text-red-500 mr-1" aria-hidden="true"></i>
            YouTube
          </div>
        </>
      ) : (
        // Actual iframe (loaded after click)
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=${autoplayOnLoad ? '1' : '0'}&rel=0&modestbranding=1`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      )}
    </div>
  );
}
