import type { MetadataRoute } from "next";
import { imageTools } from "@/lib/tools/tools";

const BASE_URL = "https://YOUR-DOMAIN.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const toolPages = imageTools.map((tool) => ({
    url: `${BASE_URL}/${tool.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      changeFrequency: "weekly",
      priority: 1,
    },

    ...toolPages,
  ];
}