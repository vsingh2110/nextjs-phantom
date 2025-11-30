import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ScrollRestoration from '@/components/ui/ScrollRestoration';
import AppScripts from '@/components/scripts/AppScripts';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
/**
 * IMPORTANT: This layout.tsx is kept as a SERVER COMPONENT for SEO.
 * Do NOT add 'use client' or client-only logic (like useEffect) here.
 * For scroll restoration or other client-only features, use a dedicated client component (see ScrollRestoration.tsx).
 * This ensures full SSR/SSG for SEO, fast initial load, and correct social/meta previews.
 * If you are an AI or developer in the future, DO NOT move client logic here unless you want to lose SEO benefits.
 */

export const metadata: Metadata = {
  metadataBase: new URL('https://phantomhealthcare.com'),
  title: {
    default: 'Phantom Healthcare - MRI, CT Scanner, PET-CT, Cath-Lab, Gamma Camera, Bone Densitometer',
    template: '%s | Phantom Healthcare'
  },
  description: 'India\'s leading provider of refurbished MRI, CT Scanners, PET-CT, Cath-Lab, Gamma Camera SPECT & Bone Densitometer. 170+ installations, 150+ satisfied clients. Quality medical imaging equipment since 2011.',
  keywords: ['MRI machines India', 'CT scanner', 'PET-CT', 'Cath-Lab', 'Gamma Camera SPECT', 'Bone Densitometer DXA', 'refurbished medical equipment', 'medical imaging equipment', 'Phantom Healthcare', 'GE MRI', 'Siemens MRI', 'healthcare equipment India'],
  authors: [{ name: 'Phantom Healthcare IND Private Limited' }],
  creator: 'Phantom Healthcare',
  publisher: 'Phantom Healthcare IND Private Limited',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://phantomhealthcare.com',
    siteName: 'Phantom Healthcare',
    title: 'Phantom Healthcare - MRI, CT Scanner, PET-CT, Cath-Lab & Medical Imaging Equipment',
    description: 'India\'s leading provider of refurbished MRI, CT Scanners, PET-CT, Cath-Lab, Gamma Camera SPECT & Bone Densitometer. 170+ installations since 2011.',
    images: [
      {
        url: '/images/phantom-building.jpg',
        width: 1200,
        height: 630,
        alt: 'Phantom Healthcare Building - Medical Imaging Equipment Provider',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Phantom Healthcare - Medical Imaging Equipment',
    description: 'India\'s leading provider of refurbished MRI, CT Scanners, PET-CT, Cath-Lab & more. 170+ installations since 2011.',
    creator: '@Phantomhealthc',
    images: ['/images/phantom-building.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'G-WKQZP6J4CR', // Google Analytics ID as verification
  },
  alternates: {
    canonical: 'https://phantomhealthcare.com',
  },
  category: 'Medical Equipment',
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
        {/* CRITICAL: charset must be first in head for proper encoding */}
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        
        {/* NOTE: viewport is handled by Next.js metadata API - do not duplicate */}
        
        {/* Legacy/Additional Meta Tags for comprehensive SEO */}
        <meta name="format-detection" content="telephone=yes" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="width" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Phantom Healthcare" />
        <meta name="application-name" content="Phantom Healthcare" />
        <meta name="msapplication-TileColor" content="#59913d" />
        <meta name="theme-color" content="#59913d" />
        <meta name="color-scheme" content="light" />
        
        {/* Geographic/Location Meta Tags */}
        <meta name="geo.region" content="IN-HR" />
        <meta name="geo.placename" content="Faridabad, Haryana, India" />
        <meta name="geo.position" content="28.46875;77.29099" />
        <meta name="ICBM" content="28.46875, 77.29099" />
        
        {/* Business/Contact Meta Tags */}
        <meta name="contact" content="info@phantomhealthcare.com" />
        <meta name="reply-to" content="info@phantomhealthcare.com" />
        <meta name="owner" content="Phantom Healthcare IND Private Limited" />
        <meta name="url" content="https://phantomhealthcare.com" />
        <meta name="identifier-URL" content="https://phantomhealthcare.com" />
        
        {/* Content/Classification Meta Tags */}
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="target" content="all" />
        <meta name="audience" content="all" />
        <meta name="copyright" content="Phantom Healthcare IND Private Limited" />
        <meta name="language" content="EN" />
        <meta name="Classification" content="Medical Equipment" />
        <meta name="subject" content="Medical Imaging Equipment - MRI, CT Scanner, PET-CT, Cath-Lab" />
        <meta name="topic" content="Medical Imaging Equipment Sales and Service" />
        <meta name="summary" content="India's leading provider of refurbished MRI, CT Scanners, PET-CT, Cath-Lab equipment since 2011." />
        <meta name="abstract" content="Phantom Healthcare provides refurbished medical imaging equipment including MRI machines, CT scanners, PET-CT, Cath-Lab, Gamma Camera SPECT, and Bone Densitometer across India, USA, and UAE." />
        <meta name="pagename" content="Phantom Healthcare" />
        <meta name="category" content="Medical Equipment, Healthcare" />
        <meta name="cache-control" content="public" />
        <meta name="expires" content="never" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Dublin Core Meta Tags */}
        <meta name="DC.title" content="Phantom Healthcare - Medical Imaging Equipment" />
        <meta name="DC.creator" content="Phantom Healthcare IND Private Limited" />
        <meta name="DC.subject" content="Medical Imaging Equipment, MRI, CT Scanner, PET-CT" />
        <meta name="DC.description" content="India's leading provider of refurbished medical imaging equipment since 2011." />
        <meta name="DC.publisher" content="Phantom Healthcare IND Private Limited" />
        <meta name="DC.contributor" content="Phantom Healthcare" />
        <meta name="DC.date" content="2011" />
        <meta name="DC.type" content="Service" />
        <meta name="DC.format" content="text/html" />
        <meta name="DC.identifier" content="https://phantomhealthcare.com" />
        <meta name="DC.language" content="en" />
        <meta name="DC.coverage" content="India, USA, UAE" />
        
        {/* Preconnect hints for performance optimization (Lighthouse recommendation) */}
        {/* Note: fonts.googleapis.com should NOT have crossOrigin, fonts.gstatic.com should */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://yt3.ggpht.com" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://img.youtube.com" />
        
        {/* Preload LCP image for faster initial paint (mobile hero image) */}
        <link 
          rel="preload" 
          as="image" 
          href="/images/slideshow/img1-mobile.jpg"
          imageSrcSet="/_next/image?url=%2Fimages%2Fslideshow%2Fimg1-mobile.jpg&w=384&q=75 384w, /_next/image?url=%2Fimages%2Fslideshow%2Fimg1-mobile.jpg&w=640&q=75 640w, /_next/image?url=%2Fimages%2Fslideshow%2Fimg1-mobile.jpg&w=750&q=75 750w"
          imageSizes="100vw"
          fetchPriority="high"
        />
        
        {/* Favicon */}
        <link rel="icon" href="/images/Fav-Icon.png" />
        <link rel="apple-touch-icon" href="/images/Fav-Icon.png" />
        <link rel="shortcut icon" href="/images/Fav-Icon.png" type="image/png" />
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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
} 