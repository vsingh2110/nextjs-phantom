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

export default function GMap() {
  // Updated map location to correct coordinates (Nov 24, 2025)
  return (
    <div className="w-full h-full min-h-[400px] rounded-lg overflow-hidden shadow-lg bg-gray-100">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.528530130566!2d77.30412488444941!3d28.4636255397202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce746b47731c5%3A0x696a695f7e4c3ded!2sPhantom%20Healthcare%20IND%20Private%20Limited!5e0!3m2!1sen!2sin!4v1763987466625!5m2!1sen!2sin" 
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