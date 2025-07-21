import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollRestoration from '@/components/ScrollRestoration';
import AppScripts from '@/components/AppScripts';
/**
 * IMPORTANT: This layout.tsx is kept as a SERVER COMPONENT for SEO.
 * Do NOT add 'use client' or client-only logic (like useEffect) here.
 * For scroll restoration or other client-only features, use a dedicated client component (see ScrollRestoration.tsx).
 * This ensures full SSR/SSG for SEO, fast initial load, and correct social/meta previews.
 * If you are an AI or developer in the future, DO NOT move client logic here unless you want to lose SEO benefits.
 */

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
  // Read the nonce from the request headers (set by middleware)
  // @ts-ignore - Next.js will inject the nonce header for us
  const nonce = typeof window === 'undefined' ? (globalThis as any).__NEXT_DATA__?.props?.nonce || '' : '';

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
        <link rel="icon" href="/images/Fav-Icon.png" />
        {/* Font Awesome - Single reliable CDN source */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        
        {/* Firebase */}
        
        {/* EmailJS */}
        
        {/* Google Tag Manager */}
        
        {/* Google tag (gtag.js) */}
      </head>
      <body className="Poppins w-full min-h-screen" suppressHydrationWarning={true}>
        {/* ScrollRestoration is a client component for scroll position restore. Placing it here ensures all pages get the feature, but layout remains a server component for SEO. */}
        <ScrollRestoration />
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
        <main className="w-full min-h-screen">
          {children}
        </main>
        <Footer />
        <AppScripts nonce={nonce} />
      </body>
    </html>
  )
} 