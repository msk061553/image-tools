import { imageTools } from "@/lib/tools/tools";

export default function sitemap() {
  const BASE_URL =
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  return [
    {
      url: BASE_URL,
      changeFrequency: "weekly",
      priority: 1,
    },

    ...imageTools.map((tool) => ({
      url: `${BASE_URL}/${tool.slug}`,
      changeFrequency: "monthly",
      priority: 0.8,
    })),
  ];
}