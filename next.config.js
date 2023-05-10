/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    //TODO: Remove them later
    domains: [
      "tailwindui.com",
      "images.unsplash.com",
      "media.licdn.com",
      "www.itserv.tn",
    ],
  },

  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
