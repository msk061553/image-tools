import type { Metadata } from "next";
import ImageCompressor from "@/components/ImageCompressor";
import Link from "next/link";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://convertimagefreely.com";

export const metadata: Metadata = {
  title: "Compress Image - Reduce JPG, PNG & WebP File Size",
  description:
    "Compress JPG, PNG and WebP images online for free. Reduce image file size while keeping good visual quality. Process images directly in your browser.",
  alternates: {
    canonical: `${BASE_URL}/compress-image`,
  },
  openGraph: {
    title: "Compress Image - Reduce JPG, PNG & WebP File Size",
    description:
      "Reduce JPG, PNG and WebP image file sizes directly in your browser.",
    type: "website",
    url: `${BASE_URL}/compress-image`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Compress Image",
  description:
    "Free browser-based image compressor for JPG, PNG and WebP images.",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Any",
  browserRequirements: "Requires JavaScript",
  url: `${BASE_URL}/compress-image`,
  inLanguage: "en",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Compress JPG images",
    "Compress PNG images",
    "Compress WebP images",
    "Reduce image file size",
    "Adjust image quality",
    "Browser-based image processing",
    "No server upload required",
  ],
};

export default function CompressImagePage() {
  return (
    <main>
      {/* =========================================================
          Structured Data
      ========================================================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* =========================================================
          Hero + Tool
      ========================================================= */}
      <section
        id="top"
        className="relative overflow-hidden border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-purple-50"
      >
        <div className="mx-auto max-w-5xl px-6 pb-16 pt-16 md:pb-20 md:pt-20">
          <div className="text-center">
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm">
              Free · Browser-based · No Sign up
            </div>

            <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              Compress images online
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
              Reduce JPG, PNG and WebP image file sizes while keeping good
              visual quality. Everything happens directly in your browser.
            </p>
          </div>

          <div className="mt-10 rounded-3xl border border-blue-100 bg-white p-4 shadow-lg shadow-blue-100/50 md:p-6">
            <ImageCompressor />
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-6 text-gray-500">
            Your images are processed directly in your browser. No server
            upload is required.
          </p>
        </div>
      </section>

      {/* =========================================================
          How It Works
      ========================================================= */}
      <section className="border-b border-blue-100 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="mb-10 text-center">
            <div className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              How it works
            </div>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
              Compress your image in three simple steps
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-gray-500">
              Reduce image file size without installing additional software.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Step 1 */}
            <div className="rounded-2xl border border-blue-100 bg-blue-50/40 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 font-semibold text-blue-600">
                1
              </div>

              <div className="mt-5 text-sm font-medium text-blue-600">
                Step 1
              </div>

              <h3 className="mt-2 text-lg font-semibold text-gray-900">
                Select your image
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                Choose a JPG, PNG or WebP image from your device and load it
                into the image compressor.
              </p>
            </div>

            {/* Step 2 */}
            <div className="rounded-2xl border border-purple-100 bg-purple-50/40 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100 font-semibold text-purple-600">
                2
              </div>

              <div className="mt-5 text-sm font-medium text-purple-600">
                Step 2
              </div>

              <h3 className="mt-2 text-lg font-semibold text-gray-900">
                Adjust compression
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                Choose the compression or quality setting that provides the
                right balance between file size and image quality.
              </p>
            </div>

            {/* Step 3 */}
            <div className="rounded-2xl border border-blue-100 bg-blue-50/40 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 font-semibold text-blue-600">
                3
              </div>

              <div className="mt-5 text-sm font-medium text-blue-600">
                Step 3
              </div>

              <h3 className="mt-2 text-lg font-semibold text-gray-900">
                Download the result
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                Download your compressed image and use the smaller file for
                websites, sharing, storage, or other purposes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          Privacy
      ========================================================= */}
      <section className="border-y border-blue-100 bg-blue-50/50">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-2xl">
            🔒
          </div>

          <h2 className="mt-5 text-2xl font-bold text-gray-900">
            Your images stay on your device
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
            Image compression is performed directly in your browser. Your
            files do not need to be uploaded to a remote server.
          </p>

          <div className="mt-5 text-sm font-medium text-blue-700">
            Private · Secure · Browser-based
          </div>
        </div>
      </section>

      {/* =========================================================
          Why Compress Images?
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-24">
          <div className="mb-10 text-center">
            <div className="text-sm font-semibold uppercase tracking-wider text-purple-600">
              Why compress images?
            </div>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
              Why reduce image file size?
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-gray-500">
              Smaller image files are easier to store, share, and use online.
            </p>
          </div>

          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                Faster website loading
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                Large images can contain significantly more data than is
                necessary for their intended display size. Compressing images
                can reduce the amount of data a browser needs to download,
                which can help improve page loading performance.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                Smaller files for sharing
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                Smaller images are easier to attach to emails, upload to
                websites, send through messaging services, and store on your
                devices.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                Save storage space
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                Compressing a large collection of images can reduce the amount
                of storage needed for photos, documents, website assets, and
                other image files.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          Quality vs File Size
      ========================================================= */}
      <section className="border-y border-blue-100 bg-blue-50/30">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <div className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Compression quality
              </div>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
                Find the right balance between quality and file size
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                Higher compression generally produces a smaller file, but
                excessive compression can make visual artifacts more noticeable.
                The best setting depends on how the image will be used.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                For websites and everyday sharing, moderate compression is
                often a useful starting point. Images that require very high
                visual quality may benefit from using a less aggressive
                compression setting.
              </p>
            </div>

            <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm">
              <div className="text-sm font-semibold text-gray-500">
                General guideline
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-20 text-sm font-medium text-gray-700">
                    Higher quality
                  </div>

                  <div className="h-3 flex-1 rounded-full bg-blue-100">
                    <div className="h-3 w-4/5 rounded-full bg-blue-500" />
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-20 text-sm font-medium text-gray-700">
                    Smaller file
                  </div>

                  <div className="h-3 flex-1 rounded-full bg-purple-100">
                    <div className="h-3 w-4/5 rounded-full bg-purple-500" />
                  </div>
                </div>
              </div>

              <p className="mt-6 text-sm leading-6 text-gray-500">
                The ideal balance depends on the image and how it will be
                used.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          JPG / PNG / WebP
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="mb-10 text-center">
            <div className="text-sm font-semibold uppercase tracking-wider text-purple-600">
              Image formats
            </div>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
              JPG, PNG and WebP compression
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-gray-500">
              Different image formats behave differently when compressed.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-blue-100 bg-blue-50/30 p-7">
              <div className="text-xl font-bold text-gray-900">
                JPG
              </div>

              <p className="mt-3 leading-7 text-gray-600">
                JPG is commonly used for photographs and other images with
                many colors. Compression can significantly reduce file size,
                especially when some quality loss is acceptable.
              </p>
            </div>

            <div className="rounded-2xl border border-purple-100 bg-purple-50/30 p-7">
              <div className="text-xl font-bold text-gray-900">
                PNG
              </div>

              <p className="mt-3 leading-7 text-gray-600">
                PNG is useful for graphics, screenshots, and images that need
                transparency. PNG compression behaves differently from
                lossy formats such as JPG.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-blue-50/30 p-7">
              <div className="text-xl font-bold text-gray-900">
                WebP
              </div>

              <p className="mt-3 leading-7 text-gray-600">
                WebP supports both lossy and lossless compression and is
                commonly used for web images where smaller file sizes are
                important.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-24">
          <div className="mb-10 text-center">
            <div className="text-sm font-semibold uppercase tracking-wider text-purple-600">
              FAQ
            </div>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
              Frequently asked questions
            </h2>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-blue-100 bg-blue-50/30 p-6">
              <h3 className="text-lg font-semibold text-gray-900">
                How much can an image be compressed?
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                The amount of compression depends on the original image,
                format, content, and selected quality setting. Photographs,
                screenshots, and graphics can produce very different results.
              </p>
            </div>

            <div className="rounded-2xl border border-purple-100 bg-purple-50/30 p-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Does image compression reduce quality?
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Some compression methods can reduce image quality. Using a
                moderate setting can help balance a smaller file size with
                acceptable visual quality.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-blue-50/30 p-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Can I compress JPG, PNG and WebP images?
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Yes. The image compressor supports JPG, PNG and WebP images.
              </p>
            </div>

            <div className="rounded-2xl border border-purple-100 bg-purple-50/30 p-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Are my images uploaded to a server?
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                No. Image processing happens directly in your browser, so your
                image does not need to be uploaded to our server.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-blue-50/30 p-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Is the image compressor free?
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Yes. ConvertImageFreely's image compressor is free to use and
                does not require an account.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          Related Tools
      ========================================================= */}
      <section className="border-t border-blue-100 bg-blue-50/30">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="mb-10 text-center">
            <div className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              More image tools
            </div>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
              More ways to work with your images
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-gray-500">
              Try another free image tool after compressing your image.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/resize-image"
              className="group rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-xl text-blue-600">
                ↗
              </div>

              <h3 className="mt-5 text-lg font-semibold text-gray-900">
                Resize Image
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Change image dimensions by pixels or percentage.
              </p>

              <div className="mt-5 text-sm font-semibold text-blue-600">
                Try it →
              </div>
            </Link>

            <Link
              href="/crop-image"
              className="group rounded-2xl border border-purple-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-purple-300 hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100 text-xl text-purple-600">
                ⌗
              </div>

              <h3 className="mt-5 text-lg font-semibold text-gray-900">
                Crop Image
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Crop your image to focus on the area you need.
              </p>

              <div className="mt-5 text-sm font-semibold text-purple-600">
                Try it →
              </div>
            </Link>

            <Link
              href="/jpg-to-webp"
              className="group rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-xl text-blue-600">
                ↔
              </div>

              <h3 className="mt-5 text-lg font-semibold text-gray-900">
                JPG to WebP
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Convert JPG images to the WebP format.
              </p>

              <div className="mt-5 text-sm font-semibold text-blue-600">
                Try it →
              </div>
            </Link>

            <Link
              href="/batch-converter"
              className="group rounded-2xl border border-purple-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-purple-300 hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100 text-xl text-purple-600">
                +
              </div>

              <h3 className="mt-5 text-lg font-semibold text-gray-900">
                Batch Converter
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Convert multiple images at once and save time.
              </p>

              <div className="mt-5 text-sm font-semibold text-purple-600">
                Try it →
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          Bottom CTA
      ========================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-20 text-center">
        <div className="relative mx-auto max-w-3xl">
          <div className="text-sm font-semibold uppercase tracking-wider text-blue-100">
            ConvertImageFreely
          </div>

          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            Compress your image for free
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-blue-100">
            Reduce image file size directly in your browser without installing
            software or creating an account.
          </p>

          <a
            href="#top"
            className="mt-8 inline-block rounded-lg bg-white px-7 py-3 font-medium text-blue-700 shadow-sm transition hover:bg-blue-50 hover:shadow-md"
          >
            Compress another image →
          </a>
        </div>
      </section>
    </main>
  );
}