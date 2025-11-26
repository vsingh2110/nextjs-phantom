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

const MAP_EMBED_URL = "https://maps.google.com/maps?q=Phantom+Healthcare+IND+Private+Limited&ll=28.4663696,77.3032972&z=16&t=m&output=embed";

export default function GMap() {
  // Updated map center (Nov 27, 2025) - Switched to legacy query mode with explicit 'll' (center) parameter. This combination forces the map to center on the coordinates while using the business name for the pin title.
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