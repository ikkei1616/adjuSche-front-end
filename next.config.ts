import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */ experimental: {
    optimizeCss: false, // Lightning CSSを使わない
  },
};

export default nextConfig;
