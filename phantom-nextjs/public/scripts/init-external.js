// ============================================
// ANALYTICS & TRACKING INITIALIZATION
// Phantom Healthcare - Updated Nov 27, 2025
// ============================================

// Google Tag Manager dataLayer initialization (MUST be first)
window.dataLayer = window.dataLayer || [];

// GTM Push function
function gtag(){dataLayer.push(arguments);}

// Initialize Google Analytics 4 (G-WKQZP6J4CR)
gtag('js', new Date());
gtag('config', 'G-WKQZP6J4CR', {
  page_path: window.location.pathname,
  send_page_view: true
});

// ============================================
// FIREBASE INITIALIZATION
// ============================================
window.addEventListener('DOMContentLoaded', function() {
  // Firebase
  if (window.firebase) {
    var firebaseConfig = {
      apiKey: "AIzaSyB_Jl_3FgNT7bHFRY63_e2FkfuqMkUJz5A",
      authDomain: "phantom-test-site-form.firebaseapp.com",
      databaseURL: "https://phantom-test-site-form-default-rtdb.firebaseio.com",
      projectId: "phantom-test-site-form",
      storageBucket: "phantom-test-site-form.appspot.com",
      messagingSenderId: "514732869106",
      appId: "1:514732869106:web:b65039a4f2e1728aeb976b"
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    } else {
      firebase.app();
    }
    window.firestore = firebase.firestore();
    window.db = window.firestore.collection("formData");
    console.log('[Phantom] Firebase initialized');
  }

  // EmailJS
  function initEmailJS() {
    if (typeof emailjs !== 'undefined') {
      emailjs.init("2kZrD3IVCkNfJsW6w");
      window.emailjsReady = true;
      console.log('[Phantom] EmailJS initialized');
    } else {
      setTimeout(initEmailJS, 100);
    }
  }
  initEmailJS();
});

// ============================================
// FACEBOOK PIXEL (Add your Pixel ID when ready)
// Uncomment and add your Pixel ID to enable
// ============================================
// !function(f,b,e,v,n,t,s)
// {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
// n.callMethod.apply(n,arguments):n.queue.push(arguments)};
// if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
// n.queue=[];t=b.createElement(e);t.async=!0;
// t.src=v;s=b.getElementsByTagName(e)[0];
// s.parentNode.insertBefore(t,s)}(window, document,'script',
// 'https://connect.facebook.net/en_US/fbevents.js');
// fbq('init', 'YOUR_FACEBOOK_PIXEL_ID');
// fbq('track', 'PageView');

console.log('[Phantom] Analytics loaded: GTM-T6XTLDS, GA4: G-WKQZP6J4CR'); 