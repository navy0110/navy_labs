import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Local portfolio files are served by Workers Static Assets.
  // Enable an IMAGES binding before switching to runtime image optimization.
  images: { unoptimized: true },
  turbopack: { root: process.cwd() },
};

export default nextConfig;
