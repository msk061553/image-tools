import type { Metadata } from "next";
import LocalizedImageToolPage from "@/components/LocalizedImageToolPage";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://convertimagefreely.com";

export const metadata: Metadata = {
  title: "Batch Image Converter",
  description: "Free browser-based batch image converter for JPG, PNG and WebP images.",
  alternates: {
    canonical: `${BASE_URL}/es/batch-converter`,
    languages: {
      en: `${BASE_URL}/batch-converter`,
      ko: `${BASE_URL}/ko/batch-converter`,
      ja: `${BASE_URL}/ja/batch-converter`,
      zh: `${BASE_URL}/zh/batch-converter`,
      es: `${BASE_URL}/es/batch-converter`,
      de: `${BASE_URL}/de/batch-converter`,
      fr: `${BASE_URL}/fr/batch-converter`,
      "x-default": `${BASE_URL}/batch-converter`,
    },
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <LocalizedImageToolPage locale="es" slug="batch-converter" />;
}
