import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = "https://najibrahmi.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
