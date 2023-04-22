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
};


module.exports = nextConfig
