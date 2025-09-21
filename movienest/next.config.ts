import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,

   images: {
    domains: ["image.tmdb.org"], // ✅ allow TMDb images
  },
};

export default nextConfig;
