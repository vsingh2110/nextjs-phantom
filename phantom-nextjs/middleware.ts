import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Generate a unique nonce for this request
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');

  // Build the CSP header with the nonce for scripts and styles
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' https://www.youtube.com https://s.ytimg.com https://www.googletagmanager.com https://www.gstatic.com https://cdn.jsdelivr.net https://cdnjs.cloudflare.com https://use.fontawesome.com https://maps.googleapis.com https://connect.facebook.net;
    style-src 'self' 'nonce-${nonce}' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com https://use.fontawesome.com;
    img-src 'self' data: https:;
    font-src 'self' data: https://cdnjs.cloudflare.com https://use.fontawesome.com https://fonts.googleapis.com https://fonts.gstatic.com;
    frame-src 'self' https://www.youtube.com https://youtube.com https://www.google.com;
    connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://firestore.googleapis.com https://api.emailjs.com;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
  `;

  // Clean up the CSP header value
  const contentSecurityPolicyHeaderValue = cspHeader.replace(/\s{2,}/g, ' ').trim();

  // Set the nonce as a custom header for use in pages/components
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce);

  // Set the CSP header
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
  response.headers.set('Content-Security-Policy', contentSecurityPolicyHeaderValue);

  return response;
}

// Only run middleware on relevant paths (not static assets, API, etc.)
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}; 