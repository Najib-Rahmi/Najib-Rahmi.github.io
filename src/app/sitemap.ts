import type { MetadataRoute } from "next";

const siteUrl = "https://najibrahmi.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  // Single-page portfolio with hash anchors for sections.
  // Search engines index the root URL; the section anchors are included
  // as alternates so they may appear in rich results.
  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
