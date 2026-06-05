import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  experimental: {
    scrollRestoration: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.**.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      { source: '/blog/:slug*',    destination: '/notes/:slug*', permanent: true },
      { source: '/about',          destination: '/',             permanent: false },
      { source: '/projects',       destination: '/#work',        permanent: false },
      { source: '/skills',         destination: '/#work',        permanent: false },
    ];
  },
};

export default nextConfig;
