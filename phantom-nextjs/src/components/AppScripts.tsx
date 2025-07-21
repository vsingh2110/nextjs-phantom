"use client";
import Script from "next/script";

export default function AppScripts() {
  return (
    <>
      {/* Firebase */}
      <Script src="https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js" strategy="afterInteractive" />
      <Script src="https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore-compat.js" strategy="afterInteractive" />
      {/* EmailJS */}
      <Script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js" strategy="afterInteractive" />
      {/* Google Tag Manager */}
      <Script src="https://www.googletagmanager.com/gtm.js?id=GTM-T6XTLDS" strategy="afterInteractive" />
      {/* Google Analytics */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-WKQZP6J4CR" strategy="afterInteractive" />
      {/* Initialization code for all services */}
      <Script src="/src/scripts/init-external.js" strategy="afterInteractive" />
    </>
  );
} 