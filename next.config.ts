import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://assets.example.com/account123/**')],
    domains:['ap-south-1.graphassets.com']
  },
};

export default nextConfig;
