// WARNING: The following headers and settings are for LOCAL DEVELOPMENT ONLY!
// - X-Frame-Options: ALLOWALL is set to allow embedding in iframes for responsive testing tools.
// - Google Maps API key is hardcoded for local dev and must be blocked/secured before deployment.
//
// REMOVE or SECURE these before deploying to production!

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Bundle analyzer for performance monitoring
  ...(process.env.ANALYZE === 'true' && {
    webpack: (config) => {
      const { BundleAnalyzerPlugin } = require('@next/bundle-analyzer');
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          analyzerPort: 8888,
          openAnalyzer: true,
        })
      );
      return config;
    },
  }),
  
  // Image optimization - Updated to use remotePatterns instead of deprecated domains
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'maps.gstatic.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'unpkg.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.youtube.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'youtube.com',
        port: '',
        pathname: '/**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },
  
  // Performance optimizations
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['swiper'],
  },
  
  // Compression
  compress: true,
  
  // Development origins for cross-origin requests
  allowedDevOrigins: [
    '192.168.1.35',
    'localhost',
    '127.0.0.1',
  ],
  
  // Security headers - Conditional based on environment
  async headers() {
    const isDevelopment = process.env.NODE_ENV === 'development';
    
    return [
      {
        source: '/(.*)',
        headers: [
          // X-Content-Type-Options - Conditional for development embedding
          ...(isDevelopment ? [] : [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
            }
          ]),
          // X-Frame-Options - Removed to allow iframe embedding in responsive test tools
          // Will be re-enabled after testing is complete
          // X-XSS-Protection - Always enabled
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};

// Remove next-safe integration
// Restore original export
module.exports = nextConfig; 
