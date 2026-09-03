import type { Metadata } from "next";
import LocalizedImageToolPage from "@/components/LocalizedImageToolPage";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://convertimagefreely.com";

export const metadata: Metadata = {
  title: "Resize Image",
  description: "Free browser-based resize image for JPG, PNG and WebP images.",
  alternates: {
    canonical: `${BASE_URL}/ja/resize-image`,
    languages: {
      en: `${BASE_URL}/resize-image`,
      ko: `${BASE_URL}/ko/resize-image`,
      ja: `${BASE_URL}/ja/resize-image`,
      zh: `${BASE_URL}/zh/resize-image`,
      es: `${BASE_URL}/es/resize-image`,
      de: `${BASE_URL}/de/resize-image`,
      fr: `${BASE_URL}/fr/resize-image`,
      "x-default": `${BASE_URL}/resize-image`,
    },
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <LocalizedImageToolPage locale="ja" slug="resize-image" />;
}
