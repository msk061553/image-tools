import Link from "next/link";
import ToolCard from "@/components/ToolCard";
import { imageTools } from "@/lib/tools/tools";
import type { Metadata } from "next";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://convertimagefreely.com";

export const metadata: Metadata = {
  title: "Free Online Image Tools",
  description:
    "Free online image conversion tools for JPG, PNG and WebP. Convert images directly in your browser without uploading your files.",

  alternates: {
    canonical: BASE_URL,
    languages: {
      en: BASE_URL,
      ko: `${BASE_URL}/ko`,
      ja: `${BASE_URL}/ja`,
      zh: `${BASE_URL}/zh`,
      es: `${BASE_URL}/es`,
      "x-default": BASE_URL,
    },
  },

  openGraph: {
    title: "Free Online Image Tools",
    description:
      "Convert JPG, PNG and WebP images directly in your browser.",
    type: "website",
    url: BASE_URL,
    locale: "en_US",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center md:py-32">
          <div className="inline-flex items-center rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm">
            Free · Fast · Browser-based
          </div>

          <h1 className="mx-auto mt-6 max-w-4xl text-5xl font-bold tracking-tight text-gray-900 md:text-6xl">
            Simple image tools,
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              right in your browser.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Convert your images between JPG, PNG and WebP formats.
            No uploads, no installation, and no complicated software.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/jpg-to-png"
              className="rounded-lg bg-blue-600 px-7 py-3 font-medium text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md"
            >
              Start Converting
            </Link>

            <a
              href="#tools"
              className="rounded-lg border border-blue-200 bg-white px-7 py-3 font-medium text-gray-700 shadow-sm transition hover:border-blue-300 hover:bg-blue-50"
            >
              View All Tools
            </a>
          </div>

          {/* Trust points */}
          <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-gray-500">
            <span>✓ No account required</span>
            <span>✓ No server upload</span>
            <span>✓ Free to use</span>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section
        id="tools"
        className="mx-auto max-w-6xl px-6 py-20 md:py-24"
      >
        <div className="mb-10 text-center">
          <div className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Image Tools
          </div>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
            Convert your images easily
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-gray-500">
            Simple and free tools for converting JPG, PNG and WebP
            images directly in your browser.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {imageTools.map((tool) => (
            <ToolCard
              key={tool.slug}
              title={tool.title}
              description={tool.description}
              href={`/${tool.slug}`}
            />
          ))}
        </div>
      </section>

      {/* Privacy */}
      <section className="border-y border-blue-100 bg-blue-50/50">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-2xl">
            🔒
          </div>

          <h2 className="mt-5 text-2xl font-bold text-gray-900">
            Your images stay on your device.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
            ConvertImageFreely processes your files directly in your
            browser. Your images do not need to be uploaded to a
            server, giving you a simple and private way to convert
            your files.
          </p>

          <div className="mt-6 text-sm font-medium text-blue-700">
            Private · Secure · Browser-based
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="mb-12 text-center">
          <div className="text-sm font-semibold uppercase tracking-wider text-purple-600">
            Why ConvertImageFreely?
          </div>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
            Simple tools without the hassle
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-blue-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
              ⚡
            </div>

            <h3 className="mt-5 text-lg font-semibold text-gray-900">
              100% Browser-based
            </h3>

            <p className="mt-2 leading-7 text-gray-600">
              Image conversion happens directly on your device
              using your browser.
            </p>
          </div>

          <div className="rounded-2xl border border-purple-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
              ✓
            </div>

            <h3 className="mt-5 text-lg font-semibold text-gray-900">
              Free to use
            </h3>

            <p className="mt-2 leading-7 text-gray-600">
              Convert your images without creating an account
              or installing additional software.
            </p>
          </div>

          <div className="rounded-2xl border border-blue-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
              🔒
            </div>

            <h3 className="mt-5 text-lg font-semibold text-gray-900">
              Private processing
            </h3>

            <p className="mt-2 leading-7 text-gray-600">
              Your files are processed locally, so there is no need
              to upload your images to a remote server.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-20 text-center">
        <div className="relative mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-white">
            Start converting your images
          </h2>

          <p className="mt-3 text-blue-100">
            Choose a tool and convert your image for free.
          </p>

          <Link
            href="/jpg-to-png"
            className="mt-8 inline-block rounded-lg bg-white px-7 py-3 font-medium text-blue-700 shadow-sm transition hover:bg-blue-50 hover:shadow-md"
          >
            Try JPG to PNG
          </Link>
        </div>
      </section>
    </main>
  );
}