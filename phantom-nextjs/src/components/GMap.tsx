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

const MAP_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23594.600297204677!2d77.29099839249344!3d28.46875377374462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce746b47731c5%3A0x696a695f7e4c3ded!2sPhantom%20Healthcare%20Pvt%20Ltd.!5e0!3m2!1sen!2sin!4v1663418936010!5m2!1sen!2sin";

export default function GMap() {
  // Updated map center (Nov 26, 2025) so the Phantom Healthcare marker is visible without scrolling.
  return (
    <div className="w-full h-full min-h-[400px] rounded-lg overflow-hidden shadow-lg bg-gray-100">
      <iframe 
        src={MAP_EMBED_URL}
        width="100%" 
        height="100%" 
        style={{ border: 0, minHeight: '400px' }} 
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Phantom Healthcare Location"
        className="w-full h-full object-cover"
      />
    </div>
  );
}