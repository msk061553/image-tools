import type { MetadataRoute } from "next";
import { imageTools } from "@/lib/tools/tools";
import { guides } from "@/lib/guides/guides";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://convertimagefreely.com";

const locales = [
  "en",
  "ko",
  "ja",
  "zh",
  "es",
  "de",
  "fr",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  /*
   * =========================================================
   * Main / locale pages
   * =========================================================
   */

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

    {
      url: `${BASE_URL}/about`,
      changeFrequency: "monthly",
      priority: 0.6,
    },

    {
      url: `${BASE_URL}/contact`,
      changeFrequency: "monthly",
      priority: 0.5,
    },

    {
      url: `${BASE_URL}/privacy`,
      changeFrequency: "monthly",
      priority: 0.5,
    },

    {
      url: `${BASE_URL}/terms`,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  /*
   * =========================================================
   * Image conversion tools
   *
   * These tools are generated from imageTools.
   * Only tools currently registered in tools.ts are included.
   * =========================================================
   */

  const toolPages: MetadataRoute.Sitemap =
    imageTools.flatMap((tool) => [
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
    ]);

  /*
   * =========================================================
   * Standalone image tools
   *
   * These are English-only pages for now.
   *
   * Do NOT add /ko, /ja, /zh, /es, /de or /fr versions
   * until localized pages actually exist.
   * =========================================================
   */

  const standaloneToolPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/compress-image`,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${BASE_URL}/resize-image`,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${BASE_URL}/crop-image`,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${BASE_URL}/rotate-image`,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${BASE_URL}/batch-converter`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  /*
   * =========================================================
   * Guides
   * =========================================================
   */

  const guidePages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/guides`,
      changeFrequency: "weekly",
      priority: 0.8,
    },

    // Existing guides from guides.ts
    ...guides.map((guide) => ({
      url: `${BASE_URL}/guides/${guide.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),

    // Standalone guide pages
    {
      url: `${BASE_URL}/guides/image-format-comparison`,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${BASE_URL}/guides/image-compression-test`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  /*
   * =========================================================
   * Final sitemap
   * =========================================================
   */

  return [
    ...staticPages,
    ...toolPages,
    ...standaloneToolPages,
    ...guidePages,
  ];
}