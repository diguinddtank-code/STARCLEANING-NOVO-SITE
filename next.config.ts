import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  async redirects() {
    return [
      // 1. Canonicalization: starcleaningsc.com/* -> www.starcleaningsc.com/*
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'starcleaningsc.com',
          },
        ],
        destination: 'https://www.starcleaningsc.com/:path*',
        permanent: true,
      },
      // 2. Old pages redirecting to homepage
      { source: '/terms-and-conditions', destination: '/', permanent: true },
      { source: '/m/create-account', destination: '/', permanent: true },
      { source: '/m/login', destination: '/', permanent: true },
      { source: '/airbnb-cleaning', destination: '/', permanent: true },
      { source: '/privacy-policy', destination: '/', permanent: true },
      { source: '/contact', destination: '/', permanent: true },
      { source: '/residential-services', destination: '/', permanent: true },
      { source: '/commercial-services', destination: '/', permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img1.wsimg.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "image-cdn.carrot.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.imgur.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "mistyclean.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "jjccservices.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "prohousekeepers.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "nextdaycleaning.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "imperialcleaning.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
