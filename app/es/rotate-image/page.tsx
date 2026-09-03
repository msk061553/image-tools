import type { Metadata } from "next";
import LocalizedImageToolPage from "@/components/LocalizedImageToolPage";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://convertimagefreely.com";

export const metadata: Metadata = {
  title: "Rotate & Flip Image",
  description: "Free browser-based rotate & flip image for JPG, PNG and WebP images.",
  alternates: {
    canonical: `${BASE_URL}/es/rotate-image`,
    languages: {
      en: `${BASE_URL}/rotate-image`,
      ko: `${BASE_URL}/ko/rotate-image`,
      ja: `${BASE_URL}/ja/rotate-image`,
      zh: `${BASE_URL}/zh/rotate-image`,
      es: `${BASE_URL}/es/rotate-image`,
      de: `${BASE_URL}/de/rotate-image`,
      fr: `${BASE_URL}/fr/rotate-image`,
      "x-default": `${BASE_URL}/rotate-image`,
    },
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <LocalizedImageToolPage locale="es" slug="rotate-image" />;
}
