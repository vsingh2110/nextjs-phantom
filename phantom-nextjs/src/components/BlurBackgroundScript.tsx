'use client';

import { useEffect } from 'react';

/**
 * Client component that dynamically sets the --bg-image CSS variable
 * for blog post center images to enable the blurred background effect
 */
export default function BlurBackgroundScript() {
  useEffect(() => {
    // Select only center images (not floating or paired)
    const figures = document.querySelectorAll(
      '.blog-content .prose figure:not(.float-left):not(.float-right):not(.image-pair figure)'
    );
    
    figures.forEach((figure) => {
      const img = figure.querySelector('img');
      if (img && img.src) {
        // Set CSS variable with the image URL
        (figure as HTMLElement).style.setProperty('--bg-image', `url(${img.src})`);
      }
    });
  }, []);

  return null; // This component doesn't render anything
}
