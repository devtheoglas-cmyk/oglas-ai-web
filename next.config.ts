import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  transpilePackages: [
    "next-sanity",
    "sanity",
    "@sanity/ui",
    "@sanity/vision",
    "styled-components",
  ],
};

export default nextConfig;
