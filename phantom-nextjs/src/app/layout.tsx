import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Phantom Healthcare - MRI,CT Scanner, PET-CT, Cath-Lab, Gamma Camera SPECT, Bone Densitometer DXA',
  description: 'Leading provider of MRI, CT scanners, and medical imaging equipment. New and refurbished solutions with professional installation and support services.',
  keywords: 'MRI, CT scanner, medical imaging, healthcare equipment, phantom healthcare',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/Fav-Icon.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v6.4.0/css/all.css" />
        
        {/* Firebase */}
        <script src="https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"></script>
        <script src="https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore-compat.js"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
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
              
              // Initialize Firebase
              if (!firebase.apps.length) {
                firebase.initializeApp(firebaseConfig);
              } else {
                firebase.app();
              }
              
              // Initialize Firestore
              var firestore = firebase.firestore();
              const db = firestore.collection("formData");
            `,
          }}
        />
        
        {/* EmailJS */}
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/emailjs-com@3.2.0/dist/email.min.js"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Wait for EmailJS to load
                function initEmailJS() {
                  if (typeof emailjs !== 'undefined') {
                    console.log('EmailJS loaded, initializing...');
                    emailjs.init("2kZrD3IVCkNfJsW6w"); // Public Key from EmailJS
                    console.log('EmailJS initialized successfully');
                    window.emailjsReady = true;
                  } else {
                    console.log('EmailJS not loaded yet, retrying...');
                    setTimeout(initEmailJS, 100);
                  }
                }
                initEmailJS();
              })();
            `,
          }}
        />
        
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-T6XTLDS');
            `,
          }}
        />
        {/* End Google Tag Manager */}
        
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-WKQZP6J4CR"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-WKQZP6J4CR');
            `,
          }}
        />
      </head>
      <body className="Poppins">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-T6XTLDS"
            height="0" 
            width="0" 
            style={{display:'none',visibility:'hidden'}}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 