import type { MetadataRoute } from "next";
import { imageTools } from "@/lib/tools/tools";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://convertimagefreely.com";

const locales = ["en", "ko", "ja", "zh", "es", "de", "fr"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...locales
      .filter((locale) => locale !== "en")
      .map((locale) => ({
        url: `${BASE_URL}/${locale}`,
        changeFrequency: "weekly" as const,
        priority: 0.9,
      })),
  ];

  const toolPages: MetadataRoute.Sitemap = imageTools.flatMap(
    (tool) => [
      {
        url: `${BASE_URL}/${tool.slug}`,
        changeFrequency: "monthly" as const,
        priority: 0.8,
      },
      ...locales
        .filter((locale) => locale !== "en")
        .map((locale) => ({
          url: `${BASE_URL}/${locale}/${tool.slug}`,
          changeFrequency: "monthly" as const,
          priority: 0.8,
        })),
    ]
  );

  return [...staticPages, ...toolPages];
}