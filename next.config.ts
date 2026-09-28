import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/**",
      },
    ],
  },
  transpilePackages: [
    "next-sanity",
    "sanity",
    "@sanity/ui",
    "@sanity/vision",
    "styled-components",
  ],
  async redirects() {
    // The site has moved to https://oglas-ai.com — every old URL here
    // 301s to the same page on the new domain (statusCode: 301, not
    // Next's default 308, per the plain HTTP standard for "moved
    // permanently"; also what search engines expect for a site move).
    // Order matters: the two old service-page rules below resolve
    // directly to their new short URLs in one hop; everything else
    // falls through to the catch-all, which must stay last.
    const newDomain = "https://oglas-ai.com";

    return [
      {
        source: "/services/:slug",
        destination: `${newDomain}/:slug`,
        statusCode: 301,
      },
      {
        source: "/services",
        destination: `${newDomain}/#services`,
        statusCode: 301,
      },
      {
        source: "/company",
        destination: `${newDomain}/about`,
        statusCode: 301,
      },
      {
        source: "/:path*",
        destination: `${newDomain}/:path*`,
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
