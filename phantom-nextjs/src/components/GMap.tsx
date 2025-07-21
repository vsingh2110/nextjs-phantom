/**
 * GOOGLE MAPS COMPONENT
 * =====================
 * 
 * PURPOSE: Custom Google Maps integration for Footer component
 * CREATED: July 11, 2025 (during maps integration work)
 * LAST MODIFIED: July 21, 2025 (updated with proper embed URL)
 * 
 * FEATURES:
 * - Google Maps iframe embed with location details
 * - Business location display with pin
 * - Information panel with address and rating
 * - Responsive design
 * 
 * DEPENDENCIES:
 * - Google Maps iframe embed
 * - React hooks (useEffect, useRef)
 * 
 * IMPLEMENTATION DETAILS:
 * - Uses iframe embed with proper Phantom Healthcare location
 * - Shows business details, rating, and "View larger map" link
 * - Responsive design with proper sizing
 * 
 * USAGE:
 * <GMap />
 */

"use client"
import { useEffect, useRef } from "react";

export default function GMap() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div ref={ref} className="w-full h-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121413!2d77.3008!3d28.4654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37cce1054ff3e241!2sPhantom%20Healthcare%20IND%20Private%20Limited!5e0!3m2!1sen!2sin!4v1629789456789!5m2!1sen!2sin&t=m&z=16&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Phantom Healthcare Location"
      />
    </div>
  );
} 