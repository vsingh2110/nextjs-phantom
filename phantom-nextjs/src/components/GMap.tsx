// =====================================================================================
// DO NOT TOUCH THIS FILE UNLESS EXPLICITLY INSTRUCTED BY THE PROJECT OWNER!
// =====================================================================================
//
// This file implements the custom Google Maps integration for the Footer component.
// Any changes to this file must be explicitly approved by the project owner.
// See strict-warnings-to-ai-assistant.md and general-development-notes.md for protocol.
//
// If you need to update or debug this file, document every change in the work log.
// =====================================================================================

"use client";

const MAP_EMBED_URL = "https://maps.google.com/maps?q=28.4663696,77.3032972+(Phantom+Healthcare+IND+Private+Limited)&z=15&output=embed";

export default function GMap() {
  // Updated map center (Nov 27, 2025) - Using the 'q=Lat,Lon+(Name)' format WITHOUT the 'loc:' prefix. This is the standard method to force the map to center on specific coordinates while displaying a custom title in the info window.
  return (
    <div className="w-full h-full rounded-lg overflow-hidden shadow-lg bg-gray-100">
      <iframe 
        src={MAP_EMBED_URL}
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Phantom Healthcare Location"
        className="w-full h-full object-cover"
      />
    </div>
  );
}