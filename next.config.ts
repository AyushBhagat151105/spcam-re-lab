// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["assets.aceternity.com", "aceternity.com", "images.unsplash.com"], // Add the domain here
  },
  eslint: {
    ignoreDuringBuilds: true, // Disables ESLint during production builds
  },
};

module.exports = nextConfig;
