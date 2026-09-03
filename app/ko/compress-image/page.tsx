import type { Metadata } from "next";
import LocalizedImageToolPage from "@/components/LocalizedImageToolPage";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://convertimagefreely.com";

export const metadata: Metadata = {
  title: "Compress Image",
  description: "Free browser-based compress image for JPG, PNG and WebP images.",
  alternates: {
    canonical: `${BASE_URL}/ko/compress-image`,
    languages: {
      en: `${BASE_URL}/compress-image`,
      ko: `${BASE_URL}/ko/compress-image`,
      ja: `${BASE_URL}/ja/compress-image`,
      zh: `${BASE_URL}/zh/compress-image`,
      es: `${BASE_URL}/es/compress-image`,
      de: `${BASE_URL}/de/compress-image`,
      fr: `${BASE_URL}/fr/compress-image`,
      "x-default": `${BASE_URL}/compress-image`,
    },
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <LocalizedImageToolPage locale="ko" slug="compress-image" />;
}
