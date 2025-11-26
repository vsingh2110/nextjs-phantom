"use client";
import Script from "next/script";

// Accept a nonce prop for CSP compliance
export default function AppScripts({ nonce }: { nonce?: string }) {
  return (
    <>
      {/* Firebase */}
      <Script src="https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js" strategy="afterInteractive" nonce={nonce} />
      <Script src="https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore-compat.js" strategy="afterInteractive" nonce={nonce} />
      {/* EmailJS */}
      <Script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js" strategy="afterInteractive" nonce={nonce} />
      {/* Facebook Pixel */}
      <Script src="https://connect.facebook.net/en_US/fbevents.js" strategy="afterInteractive" nonce={nonce} />
      {/* Google Tag Manager */}
      <Script src="https://www.googletagmanager.com/gtm.js?id=GTM-T6XTLDS" strategy="afterInteractive" nonce={nonce} />
      {/* Google Analytics */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-WKQZP6J4CR" strategy="afterInteractive" nonce={nonce} />
      {/* Initialization code for all services */}
      <Script src="/scripts/init-external.js" strategy="afterInteractive" nonce={nonce} />
    </>
  );
} 