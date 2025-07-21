// Facebook Pixel (ID from your previous code or scripts)
if (typeof fbq === 'undefined') {
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID'); // <-- Use your actual Pixel ID here if you have it in your old code
  fbq('track', 'PageView');
}

// Google Tag Manager (GTM-T6XTLDS) and Google Analytics (G-WKQZP6J4CR)
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-WKQZP6J4CR');

// Firebase configuration
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
  }

  // EmailJS
  function initEmailJS() {
    if (typeof emailjs !== 'undefined') {
      emailjs.init("2kZrD3IVCkNfJsW6w");
      window.emailjsReady = true;
    } else {
      setTimeout(initEmailJS, 100);
    }
  }
  initEmailJS();
}); 