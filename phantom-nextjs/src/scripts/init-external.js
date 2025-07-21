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

  // Google Analytics (gtag)
  if (typeof window.gtag === 'undefined' && typeof window.dataLayer !== 'undefined') {
    window.gtag = function(){dataLayer.push(arguments);};
    window.gtag('js', new Date());
    window.gtag('config', 'G-WKQZP6J4CR');
  }
}); 