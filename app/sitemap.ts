import type { MetadataRoute } from "next";
import { imageTools } from "@/lib/tools/tools";

export default function sitemap(): MetadataRoute.Sitemap {
  const BASE_URL =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://convertimagefreely.com";

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/ko`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const toolPages: MetadataRoute.Sitemap = imageTools.flatMap(
    (tool) => [
      {
        url: `${BASE_URL}/${tool.slug}`,
        changeFrequency: "monthly" as const,
        priority: 0.8,
      },
      {
        url: `${BASE_URL}/ko/${tool.slug}`,
        changeFrequency: "monthly" as const,
        priority: 0.8,
      },
    ]
  );

  return [...staticPages, ...toolPages];
}