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
      { source: '/residential-services', destination: '/', permanent: true },
      { source: '/commercial-services', destination: '/', permanent: true },
    ];
  },
  // Files in /public are served with max-age=0 by default, so every repeat visit re-checks each
  // image. 30 days is safe for files that are only ever replaced under a new name.
  async headers() {
    const cache = [{ key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" }];
    return [
      { source: "/images/:path*", headers: cache },
      { source: "/videos/:path*", headers: cache },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com",
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
