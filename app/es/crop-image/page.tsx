import type { Metadata } from "next";
import LocalizedImageToolPage from "@/components/LocalizedImageToolPage";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://convertimagefreely.com";

export const metadata: Metadata = {
  title: "Crop Image",
  description: "Free browser-based crop image for JPG, PNG and WebP images.",
  alternates: {
    canonical: `${BASE_URL}/es/crop-image`,
    languages: {
      en: `${BASE_URL}/crop-image`,
      ko: `${BASE_URL}/ko/crop-image`,
      ja: `${BASE_URL}/ja/crop-image`,
      zh: `${BASE_URL}/zh/crop-image`,
      es: `${BASE_URL}/es/crop-image`,
      de: `${BASE_URL}/de/crop-image`,
      fr: `${BASE_URL}/fr/crop-image`,
      "x-default": `${BASE_URL}/crop-image`,
    },
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <LocalizedImageToolPage locale="es" slug="crop-image" />;
}
