"use client";
import Script from "next/script";

/**
 * External Scripts for Phantom Healthcare
 * ----------------------------------------
 * GTM ID: GTM-T6XTLDS
 * GA4 ID: G-WKQZP6J4CR
 * Firebase: phantom-test-site-form
 * EmailJS: 2kZrD3IVCkNfJsW6w
 * 
 * PERFORMANCE OPTIMIZATION (November 30, 2025):
 * - Changed Firebase and EmailJS to lazyOnload strategy
 * - These scripts are only needed when user interacts with contact form
 * - Saves ~500ms+ on initial page load
 * 
 * Facebook Pixel: Not currently configured (add in init-external.js when ready)
 */

export default function AppScripts({ nonce }: { nonce?: string }) {
  return (
    <>
      {/* Google Tag Manager - Load afterInteractive for analytics */}
      <Script 
        id="gtm-script"
        strategy="afterInteractive" 
        nonce={nonce}
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-T6XTLDS');
          `
        }}
      />
      
      {/* Google Analytics 4 - afterInteractive for analytics */}
      <Script 
        src="https://www.googletagmanager.com/gtag/js?id=G-WKQZP6J4CR" 
        strategy="afterInteractive" 
        nonce={nonce} 
      />
      
      {/* Firebase - lazyOnload (only needed for contact form) */}
      <Script 
        src="https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js" 
        strategy="lazyOnload" 
        nonce={nonce} 
      />
      <Script 
        src="https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore-compat.js" 
        strategy="lazyOnload" 
        nonce={nonce} 
      />
      
      {/* EmailJS - lazyOnload (only needed for contact form) */}
      <Script 
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js" 
        strategy="lazyOnload" 
        nonce={nonce} 
      />
      
      {/* Initialization code for all services (GTM, GA4, Firebase, EmailJS) */}
      <Script 
        src="/scripts/init-external.js" 
        strategy="lazyOnload" 
        nonce={nonce} 
      />
    </>
  );
} 