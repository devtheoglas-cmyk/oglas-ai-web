import type { MetadataRoute } from "next";
import { insights, services } from "@/content/site";

const baseUrl = "https://oglas-ai.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/services",
    "/industries",
    "/case-studies",
    "/insights",
    "/about",
    "/contact",
    "/privacy",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
    })),
    ...services.map((service) => ({
      url: `${baseUrl}/services/${service.slug}`,
      lastModified: new Date(),
    })),
    ...insights.map((post) => ({
      url: `${baseUrl}/insights/${post.slug}`,
      lastModified: new Date(),
    })),
  ];
}
