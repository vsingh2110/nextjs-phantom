import { NextRequest, NextResponse } from 'next/server';

// Country detection and redirect logic
const countryRedirects = {
  'US': '/en-us',
  'IN': '/en-in', 
  'AE': '/en-ae',
  'UK': '/en-uk',
  'AU': '/en-au'
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Generate a unique nonce for this request
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');

  // Build the CSP header with the nonce for scripts and styles
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.youtube.com https://s.ytimg.com https://www.googletagmanager.com https://www.gstatic.com https://cdn.jsdelivr.net https://cdnjs.cloudflare.com https://use.fontawesome.com https://maps.googleapis.com https://connect.facebook.net https://vercel.live https://unpkg.com https://apis.google.com;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com https://use.fontawesome.com;
    img-src 'self' data: blob: https://*.google.com https://*.googleapis.com https://*.gstatic.com https://www.facebook.com https://maps.gstatic.com;
    font-src 'self' data: https://cdnjs.cloudflare.com https://use.fontawesome.com https://fonts.googleapis.com https://fonts.gstatic.com;
    frame-src 'self' https://www.youtube.com https://youtube.com https://www.youtube-nocookie.com https://www.google.com https://maps.google.com https://vercel.live https://*.firebaseapp.com;
    connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://firestore.googleapis.com https://api.emailjs.com https://www.facebook.com https://maps.googleapis.com https://maps.gstatic.com https://vercel.live https://identitytoolkit.googleapis.com https://firebaseinstallations.googleapis.com https://securetoken.googleapis.com;
    worker-src 'self' blob:;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'self' https://responsivetesttool.com;
    upgrade-insecure-requests;
  `;

  // Clean up the CSP header value
  const contentSecurityPolicyHeaderValue = cspHeader.replace(/\s{2,}/g, ' ').trim();

  // Set the nonce as a custom header for use in pages/components
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce);

  // COUNTRY REDIRECT LOGIC
  // Skip middleware for static files and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/images') ||
    pathname.startsWith('/favicon')
  ) {
    const response = NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
    response.headers.set('Content-Security-Policy', contentSecurityPolicyHeaderValue);
    return response;
  }

  // Check if user is already on a country-specific path
  const isCountryPath = Object.values(countryRedirects).some(path => 
    pathname.startsWith(path)
  );
  
  if (isCountryPath) {
    const response = NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
    response.headers.set('Content-Security-Policy', contentSecurityPolicyHeaderValue);
    return response;
  }

  // Detect country from IP or Accept-Language header
  const country = detectCountry(request);
  
  if (country && countryRedirects[country]) {
    const redirectUrl = new URL(countryRedirects[country] + pathname, request.url);
    const response = NextResponse.redirect(redirectUrl);
    response.headers.set('Content-Security-Policy', contentSecurityPolicyHeaderValue);
    return response;
  }

  // Default redirect (fallback to US)
  const redirectUrl = new URL('/en-us' + pathname, request.url);
  const response = NextResponse.redirect(redirectUrl);
  response.headers.set('Content-Security-Policy', contentSecurityPolicyHeaderValue);
  return response;
}

function detectCountry(request: NextRequest): string | null {
  // Method 1: IP-based detection (basic)
  const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || '';
  const countryFromIP = getCountryFromIP(ip);
  
  if (countryFromIP) return countryFromIP;

  // Method 2: Accept-Language header
  const acceptLanguage = request.headers.get('accept-language') || '';
  const countryFromLang = getCountryFromLanguage(acceptLanguage);
  
  if (countryFromLang) return countryFromLang;

  return null;
}

function getCountryFromIP(ip: string): string | null {
  // Simple IP-based country detection
  // You can enhance this with a proper IP geolocation service
  const ipRanges = {
    'US': ['192.168.', '10.', '172.16.', '127.0.0.1'], // US IP ranges
    'IN': ['103.', '14.', '27.'], // India IP ranges
    'AE': ['94.', '95.', '96.'], // UAE IP ranges
    'UK': ['81.', '82.', '86.'], // UK IP ranges
    'AU': ['203.', '210.', '220.'] // Australia IP ranges
  };

  for (const [country, ranges] of Object.entries(ipRanges)) {
    if (ranges.some(range => ip.startsWith(range))) {
      return country;
    }
  }
  
  return null;
}

function getCountryFromLanguage(acceptLanguage: string): string | null {
  const languageMap = {
    'en-US': 'US',
    'en-IN': 'IN', 
    'en-AE': 'AE',
    'en-GB': 'UK',
    'en-AU': 'AU'
  };

  const languages = acceptLanguage.split(',').map(lang => lang.split(';')[0].trim());
  
  for (const lang of languages) {
    if (languageMap[lang]) {
      return languageMap[lang];
    }
  }
  
  return null;
}

// Only run middleware on relevant paths (not static assets, API, etc.)
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}; 