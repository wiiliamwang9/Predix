const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./lib/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'via.placeholder.com', 'coindesk.com', 'espn.com']
  },
  experimental: {
    optimizeCss: false
  },
  webpack: (config, { isServer }) => {
    // Exclude netlify functions from client-side build
    config.resolve.alias = {
      ...config.resolve.alias,
      '@netlify/functions': false
    };
    
    // Optimize for static export
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    
    return config;
  }
};

module.exports = withNextIntl(nextConfig);