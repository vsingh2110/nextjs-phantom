/** @type {import('next').NextConfig} */
const nextConfig = {
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

module.exports = nextConfig 