import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   eslint: {
    ignoreDuringBuilds: true, // ✅ Skip ESLint errors during Vercel build
  },
};

export default nextConfig;
