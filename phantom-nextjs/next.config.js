/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['http://192.168.1.111:3000'],
  // Disable Next.js development overlay
  devIndicators: {
    position: 'bottom-right',
  },
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
  images: {
    domains: ['cdnjs.cloudflare.com', 'unpkg.com', 'cdn.jsdelivr.net'],
  },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  },
}

/**
 * CORS headers for Next.js dev server to allow LAN/devices to access hot reload and assets.
 * Only needed for local development.
 */
module.exports = {
  ...nextConfig,
  async headers() {
    return [
      {
        source: '/_next/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
        ],
      },
    ];
  },
}; 