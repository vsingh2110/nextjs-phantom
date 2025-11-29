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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
} 