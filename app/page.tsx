import Link from "next/link";
import ToolCard from "@/components/ToolCard";
import { imageTools, pdfTools } from "@/lib/tools/tools";
import type { Metadata } from "next";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://convertimagefreely.com";

export const metadata: Metadata = {
  title: "Free Online Image & PDF Tools",
  description:
    "Free online image and PDF tools. Convert JPG, PNG and WebP images, or turn PDF pages into JPG files directly in your browser.",

  alternates: {
    canonical: BASE_URL,
    languages: {
      en: BASE_URL,
      ko: `${BASE_URL}/ko`,
      ja: `${BASE_URL}/ja`,
      zh: `${BASE_URL}/zh`,
      es: `${BASE_URL}/es`,
      de: `${BASE_URL}/de`,
      fr: `${BASE_URL}/fr`,
      "x-default": BASE_URL,
    },
  },

  openGraph: {
    title: "Free Online Image & PDF Tools",
    description:
      "Convert images and PDF pages directly in your browser without uploading your files.",
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
      {/* =========================================================
          Hero
      ========================================================= */}
      <section className="relative overflow-hidden border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-24 lg:gap-16">
          {/* Left */}
          <div>
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm">
              100% Free · Browser-based · No Sign up
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Free image tools,
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                right in your browser.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Convert, compress, resize, crop and edit your images easily. No
              installation, no sign up, and no complicated software.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/jpg-to-png"
                className="rounded-lg bg-blue-600 px-7 py-3 text-center font-medium text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md"
              >
                Start with an image →
              </Link>

              <a
                href="#tools"
                className="rounded-lg border border-blue-200 bg-white px-7 py-3 text-center font-medium text-gray-700 shadow-sm transition hover:border-blue-300 hover:bg-blue-50"
              >
                Explore all tools
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-500">
              <span>✓ No account required</span>
              <span>✓ No server upload</span>
              <span>✓ Files stay on your device</span>
            </div>
          </div>

          {/* Right - Tool Preview */}
          <div className="relative">
            <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-blue-200/40 via-purple-100/30 to-blue-100/40 blur-2xl" />

            <div className="relative rounded-3xl border border-blue-100 bg-white p-5 shadow-xl">
              <div className="flex items-center gap-2 border-b border-gray-100 pb-4">
                <div className="h-3 w-3 rounded-full bg-red-300" />
                <div className="h-3 w-3 rounded-full bg-yellow-300" />
                <div className="h-3 w-3 rounded-full bg-green-300" />
              </div>

              <div className="mt-5 rounded-2xl border-2 border-dashed border-blue-200 bg-blue-50/30 px-6 py-12 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-3xl">
                  ↑
                </div>

                <h2 className="mt-5 text-lg font-semibold text-gray-900">
                  Drop your image here
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  or click to browse
                </p>
              </div>

              <div className="mt-5 grid grid-cols-4 gap-3">
                <div className="rounded-xl border border-gray-100 bg-gray-50 p-3 text-center">
                  <div className="text-lg">JPG</div>
                  <div className="mt-1 text-xs text-gray-500">
                    Convert
                  </div>
                </div>

                <div className="rounded-xl border border-gray-100 bg-gray-50 p-3 text-center">
                  <div className="text-lg">PNG</div>
                  <div className="mt-1 text-xs text-gray-500">
                    Convert
                  </div>
                </div>

                <div className="rounded-xl border border-gray-100 bg-gray-50 p-3 text-center">
                  <div className="text-lg">WEBP</div>
                  <div className="mt-1 text-xs text-gray-500">
                    Convert
                  </div>
                </div>

                <div className="rounded-xl border border-gray-100 bg-gray-50 p-3 text-center">
                  <div className="text-lg">+</div>
                  <div className="mt-1 text-xs text-gray-500">
                    More
                  </div>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap justify-center gap-2 text-xs text-blue-700">
                <span className="rounded-full bg-blue-50 px-3 py-1.5">
                  Convert
                </span>

                <span className="rounded-full bg-purple-50 px-3 py-1.5">
                  Compress
                </span>

                <span className="rounded-full bg-blue-50 px-3 py-1.5">
                  Resize
                </span>

                <span className="rounded-full bg-purple-50 px-3 py-1.5">
                  Edit
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          Tool Categories
      ========================================================= */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="mb-10 text-center">
          <div className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            What do you want to do?
          </div>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
            Choose a tool category
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-gray-500">
            Choose what you want to do with your image and find the right tool
            in seconds.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            href="#tools"
            className="group rounded-2xl border border-blue-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl text-blue-600">
              ↔
            </div>

            <h3 className="mt-5 text-lg font-semibold text-gray-900">
              Convert
            </h3>

            <p className="mt-2 leading-6 text-gray-600">
              Convert between JPG, PNG, WebP and other image formats.
            </p>

            <span className="mt-5 inline-block text-sm font-semibold text-blue-600 group-hover:text-blue-700">
              Explore tools →
            </span>
          </Link>

          <Link
            href="/compress-image"
            className="group rounded-2xl border border-green-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-green-200 hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-xl text-green-600">
              ↓
            </div>

            <h3 className="mt-5 text-lg font-semibold text-gray-900">
              Compress
            </h3>

            <p className="mt-2 leading-6 text-gray-600">
              Reduce image file size while keeping good visual quality.
            </p>

            <span className="mt-5 inline-block text-sm font-semibold text-green-600 group-hover:text-green-700">
              Explore tools →
            </span>
          </Link>

          <Link
            href="/resize-image"
            className="group rounded-2xl border border-purple-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-purple-200 hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-xl text-purple-600">
              ↗
            </div>

            <h3 className="mt-5 text-lg font-semibold text-gray-900">
              Resize
            </h3>

            <p className="mt-2 leading-6 text-gray-600">
              Change image dimensions by pixels or percentage.
            </p>

            <span className="mt-5 inline-block text-sm font-semibold text-purple-600 group-hover:text-purple-700">
              Explore tools →
            </span>
          </Link>

          <Link
            href="/crop-image"
            className="group rounded-2xl border border-orange-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-xl text-orange-600">
              ⌗
            </div>

            <h3 className="mt-5 text-lg font-semibold text-gray-900">
              Crop
            </h3>

            <p className="mt-2 leading-6 text-gray-600">
              Crop your image to focus on the area you need.
            </p>

            <span className="mt-5 inline-block text-sm font-semibold text-orange-600 group-hover:text-orange-700">
              Explore tools →
            </span>
          </Link>

          <Link
            href="/rotate-image"
            className="group rounded-2xl border border-cyan-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-cyan-200 hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-100 text-xl text-cyan-600">
              ↻
            </div>

            <h3 className="mt-5 text-lg font-semibold text-gray-900">
              Rotate & Flip
            </h3>

            <p className="mt-2 leading-6 text-gray-600">
              Rotate or flip your images with a few simple clicks.
            </p>

            <span className="mt-5 inline-block text-sm font-semibold text-cyan-600 group-hover:text-cyan-700">
              Explore tools →
            </span>
          </Link>

          <Link
            href="/batch-converter"
            className="group rounded-2xl border border-pink-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-pink-200 hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-100 text-xl text-pink-600">
              +
            </div>

            <h3 className="mt-5 text-lg font-semibold text-gray-900">
              Batch
            </h3>

            <p className="mt-2 leading-6 text-gray-600">
              Process multiple images at once and save time.
            </p>

            <span className="mt-5 inline-block text-sm font-semibold text-pink-600 group-hover:text-pink-700">
              Explore tools →
            </span>
          </Link>
        </div>
      </section>

      {/* =========================================================
          Popular Tools
      ========================================================= */}
      <section
        id="tools"
        className="mx-auto max-w-6xl px-6 py-20 md:py-24"
      >
        <div className="mb-10 text-center">
          <div className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Popular Tools
          </div>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
            Popular image & PDF tools
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-gray-500">
            Quick access to image conversion tools and PDF utilities.
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
          {pdfTools.map((tool) => (
            <Link
              key={tool.slug}
              href={`/${tool.slug}`}
              className="group relative rounded-2xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-400 hover:shadow-md"
            >
              <span className="absolute right-4 top-4 rounded-full bg-blue-600 px-2.5 py-1 text-xs font-bold text-white">
                NEW
              </span>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-sm font-bold text-red-600">
                PDF
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {tool.title}
              </h3>
              <p className="mt-2 min-h-12 text-sm leading-6 text-gray-600">
                {tool.description}
              </p>
              <span className="mt-4 inline-block text-sm font-semibold text-blue-600 group-hover:text-blue-700">
                Open tool →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* =========================================================
          Why ConvertImageFreely
      ========================================================= */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="mb-12 text-center">
          <div className="text-sm font-semibold uppercase tracking-wider text-purple-600">
            Why ConvertImageFreely?
          </div>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Simple tools without the hassle
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            Everything you need to work with your images, without unnecessary
            software or complicated setup.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-blue-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl text-blue-600">
              ⚡
            </div>

            <h3 className="mt-5 text-lg font-semibold text-gray-900">
              100% Browser-based
            </h3>

            <p className="mt-2 leading-7 text-gray-600">
              Image processing happens directly in your browser. There is
              nothing to install and no desktop software required.
            </p>
          </div>

          <div className="rounded-2xl border border-purple-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-xl text-purple-600">
              ✓
            </div>

            <h3 className="mt-5 text-lg font-semibold text-gray-900">
              Free to use
            </h3>

            <p className="mt-2 leading-7 text-gray-600">
              Use our image tools without creating an account, installing
              software, or paying for basic image processing.
            </p>
          </div>

          <div className="rounded-2xl border border-blue-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl text-blue-600">
              🔒
            </div>

            <h3 className="mt-5 text-lg font-semibold text-gray-900">
              Private processing
            </h3>

            <p className="mt-2 leading-7 text-gray-600">
              Your images are processed locally in your browser, so they do
              not need to be uploaded to a remote server.
            </p>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="grid items-center gap-8 px-7 py-10 md:grid-cols-[auto_1fr] md:px-10">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-3xl">
              🔒
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900">
                Your images stay on your device.
              </h3>

              <p className="mt-2 max-w-3xl leading-7 text-gray-600">
                ConvertImageFreely processes images directly in your browser.
                Your files do not need to be uploaded to our server, giving
                you a simple and private way to work with your images.
              </p>

              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-blue-700">
                <span>Private</span>
                <span>Secure</span>
                <span>Browser-based</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-20 text-center">
        <div className="relative mx-auto max-w-3xl">
          <div className="text-sm font-semibold uppercase tracking-wider text-blue-100">
            Get started
          </div>

          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            What do you want to do with your image?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-blue-100">
            Choose a tool and get started. Everything works directly in your
            browser.
          </p>

          <a
            href="#tools"
            className="mt-8 inline-block rounded-lg bg-white px-7 py-3 font-medium text-blue-700 shadow-sm transition hover:bg-blue-50 hover:shadow-md"
          >
            Explore all tools →
          </a>
        </div>
      </section>

      {/* =========================================================
          Image Guides
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="mb-9 text-center">
            <div className="text-sm font-semibold uppercase tracking-wider text-purple-600">
              Image Guides
            </div>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
              Learn more about images
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-gray-500">
              Practical guides, comparisons, and real-world image tests.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Format Guide */}
            <Link
              href="/guides/image-format-comparison"
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
            >
              <div className="grid h-full sm:grid-cols-[145px_1fr]">
                <div className="h-44 overflow-hidden bg-gray-100 sm:h-full">
                  <img
                    src="/guides/image-format-comparison/landscape.jpg"
                    alt="Landscape image used for JPG, PNG and WebP comparison"
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-col justify-center p-6">
                  <div className="text-xs font-semibold uppercase tracking-wide text-blue-600">
                    Image Format Guide
                  </div>

                  <h3 className="mt-2 text-xl font-bold text-gray-900">
                    JPG vs PNG vs WebP
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    Compare image formats using the same test images and
                    measured file sizes to see how JPG, PNG, and WebP differ.
                  </p>

                  <span className="mt-4 text-sm font-semibold text-blue-600 group-hover:text-blue-700">
                    Read the guide →
                  </span>
                </div>
              </div>
            </Link>

            {/* Compression Test */}
            <Link
              href="/guides/image-compression-test"
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-purple-200 hover:shadow-md"
            >
              <div className="grid h-full sm:grid-cols-[145px_1fr]">
                <div className="h-44 overflow-hidden bg-gray-100 sm:h-full">
                  <img
                    src="/guides/image-compression-test/landscape-jpg-q80.jpg"
                    alt="Image used for JPEG and WebP compression test"
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-col justify-center p-6">
                  <div className="text-xs font-semibold uppercase tracking-wide text-purple-600">
                    Compression Test
                  </div>

                  <h3 className="mt-2 text-xl font-bold text-gray-900">
                    Image Compression Test
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    See how JPG and WebP file sizes change at quality levels
                    90, 80, and 70 using three different test images.
                  </p>

                  <span className="mt-4 text-sm font-semibold text-purple-600 group-hover:text-purple-700">
                    Read the test →
                  </span>
                </div>
              </div>
            </Link>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/guides"
              className="text-sm font-semibold text-gray-600 transition hover:text-blue-600"
            >
              View all guides →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}