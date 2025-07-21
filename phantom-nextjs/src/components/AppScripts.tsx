"use client";
import Script from "next/script";

export default function AppScripts() {
  return (
    <>
      {/* Firebase */}
      <Script src="https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js" strategy="afterInteractive" />
      <Script src="https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore-compat.js" strategy="afterInteractive" />
      <Script id="firebase-init" strategy="afterInteractive">
        {`
          // Firebase configuration
          var firebaseConfig = {
            apiKey: "AIzaSyB_Jl_3FgNT7bHFRY63_e2FkfuqMkUJz5A",
            authDomain: "phantom-test-site-form.firebaseapp.com",
            databaseURL: "https://phantom-test-site-form-default-rtdb.firebaseio.com",
            projectId: "phantom-test-site-form",
            storageBucket: "phantom-test-site-form.appspot.com",
            messagingSenderId: "514732869106",
            appId: "1:514732869106:web:b65039a4f2e1728aeb976b"
          };
          if (typeof window !== 'undefined' && window.firebase) {
            if (!firebase.apps.length) {
              firebase.initializeApp(firebaseConfig);
            } else {
              firebase.app();
            }
            window.firestore = firebase.firestore();
            window.db = window.firestore.collection("formData");
          }
        `}
      </Script>

      {/* EmailJS */}
      <Script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js" strategy="afterInteractive" />
      <Script id="emailjs-init" strategy="afterInteractive">
        {`
          (function() {
            function initEmailJS() {
              if (typeof emailjs !== 'undefined') {
                emailjs.init("2kZrD3IVCkNfJsW6w");
                window.emailjsReady = true;
              } else {
                setTimeout(initEmailJS, 100);
              }
            }
            initEmailJS();
          })();
        `}
      </Script>

      {/* Google Tag Manager */}
      <Script src="https://www.googletagmanager.com/gtm.js?id=GTM-T6XTLDS" strategy="afterInteractive" />
      {/* Google Analytics */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-WKQZP6J4CR" strategy="afterInteractive" />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-WKQZP6J4CR');
        `}
      </Script>
    </>
  );
} 