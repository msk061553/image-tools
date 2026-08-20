import type { Metadata } from "next";
import GuideCard from "@/components/GuideCard";
import { guides } from "@/lib/guides/guides";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://convertimagefreely.com";

export const metadata: Metadata = {
  title: "Image Guides - ConvertImageFreely",
  description:
    "Helpful guides about JPG, PNG, WebP, image conversion, file sizes, and choosing the right image format.",
  alternates: {
    canonical: `${BASE_URL}/guides`,
  },
  openGraph: {
    title: "Image Guides - ConvertImageFreely",
    description:
      "Helpful guides about JPG, PNG, WebP, image conversion, file sizes, and choosing the right image format.",
    type: "website",
    url: `${BASE_URL}/guides`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function GuidesPage() {
  return (
    <main>
      <section className="border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center md:py-24">
          <div className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            ConvertImageFreely Guides
          </div>

          <h1 className="mx-auto mt-3 max-w-4xl text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Image Conversion Guides
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Learn more about JPG, PNG, WebP, image conversion, file sizes,
            and choosing the right image format for your needs.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {guides.map((guide) => (
            <GuideCard
              key={guide.slug}
              slug={guide.slug}
              title={guide.title}
              description={guide.description}
            />
          ))}
        </div>
      </section>
    </main>
  );
}