import type { Metadata } from "next";
import Link from "next/link";
import BatchImageConverter from "@/components/BatchImageConverter";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://convertimagefreely.com";

export const metadata: Metadata = {
  title: "Batch Image Converter - Convert Multiple Images Online",
  description:
    "Convert multiple JPG, PNG and WebP images at once for free. Batch convert images directly in your browser without uploading your files.",
  alternates: {
    canonical: `${BASE_URL}/batch-converter`,
  },
  openGraph: {
    title: "Batch Image Converter - Convert Multiple Images Online",
    description:
      "Convert multiple images at once directly in your browser. Free, simple, and private.",
    type: "website",
    url: `${BASE_URL}/batch-converter`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Batch Image Converter",
  description:
    "Free browser-based batch image converter for JPG, PNG and WebP images.",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Any",
  browserRequirements: "Requires JavaScript",
  url: `${BASE_URL}/batch-converter`,
  inLanguage: "en",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Convert multiple JPG images",
    "Convert multiple PNG images",
    "Convert multiple WebP images",
    "Batch image conversion",
    "Browser-based image processing",
    "No server upload required",
  ],
};

export default function BatchConverterPage() {
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
              Convert multiple images at once
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
              Batch convert JPG, PNG and WebP images without processing each
              file individually. Everything happens directly in your browser.
            </p>
          </div>

          <div className="mt-10 rounded-3xl border border-blue-100 bg-white p-4 shadow-lg shadow-blue-100/50 md:p-6">
            <BatchImageConverter />
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
              Convert multiple images in three simple steps
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-gray-500">
              Process multiple image files together instead of converting them
              one by one.
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
                Select multiple images
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                Select the image files you want to convert. You can process
                multiple files together instead of repeating the conversion
                for every image.
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
                Choose the output format
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                Select the image format you want to use for the converted
                files, depending on your intended use.
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
                Download your files
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                Convert the selected images and download the resulting files
                when processing is complete.
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
            Batch conversion is performed directly in your browser. Your files
            do not need to be uploaded to a remote server.
          </p>

          <div className="mt-5 text-sm font-medium text-blue-700">
            Private · Secure · Browser-based
          </div>
        </div>
      </section>

      {/* =========================================================
          Why Batch Conversion?
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-24">
          <div className="mb-10 text-center">
            <div className="text-sm font-semibold uppercase tracking-wider text-purple-600">
              Why batch convert?
            </div>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
              Why convert multiple images at once?
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-gray-500">
              Batch processing is useful whenever you have more than one image
              that needs the same type of conversion.
            </p>
          </div>

          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                Save time
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                Converting files individually can become repetitive when
                working with a large collection of images. Batch conversion
                allows multiple files to be processed together, reducing
                repetitive steps.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                Keep a consistent output format
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                When a group of images needs to be used in the same project,
                converting them together can make it easier to prepare a
                consistent set of files.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                Useful for large image collections
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                Batch conversion can be helpful for website assets, photo
                collections, documents, and other situations where many image
                files need to be converted.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          Supported Formats
      ========================================================= */}
      <section className="border-y border-blue-100 bg-blue-50/30">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="mb-10 text-center">
            <div className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Supported formats
            </div>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
              Convert JPG, PNG and WebP images
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-gray-500">
              Choose the format that best fits your intended use.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-blue-100 bg-white p-7 shadow-sm">
              <div className="text-2xl font-bold text-gray-900">
                JPG
              </div>

              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Great for photographs
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                JPG is widely used for photographs and images with many colors,
                especially when smaller file sizes are important.
              </p>
            </div>

            <div className="rounded-2xl border border-purple-100 bg-white p-7 shadow-sm">
              <div className="text-2xl font-bold text-gray-900">
                PNG
              </div>

              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Useful for graphics
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                PNG is commonly used for graphics, screenshots, and images
                where lossless quality or transparency is important.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-white p-7 shadow-sm">
              <div className="text-2xl font-bold text-gray-900">
                WebP
              </div>

              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Designed for the web
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                WebP can provide smaller image files while supporting both
                lossy and lossless compression, making it useful for websites
                and online applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          When To Use Batch Converter
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <div className="text-sm font-semibold uppercase tracking-wider text-purple-600">
                Practical use cases
              </div>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
                When is batch conversion useful?
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                Batch conversion is especially useful when the same conversion
                needs to be applied to many files. Instead of opening a
                converter repeatedly, you can prepare multiple images in one
                workflow.
              </p>
            </div>

            <div className="rounded-3xl border border-blue-100 bg-blue-50/30 p-8">
              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 font-semibold text-blue-600">
                    1
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Website images
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Prepare multiple image assets for a website.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-100 font-semibold text-purple-600">
                    2
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Photo collections
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Convert a group of photos to the same format.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 font-semibold text-blue-600">
                    3
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Project assets
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Prepare multiple graphics for a project or application.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-100 font-semibold text-purple-600">
                    4
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900">
                      File organization
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Convert a collection of images into a consistent format.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ
      ========================================================= */}
      <section className="border-t border-blue-100 bg-white">
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
                How many images can I convert at once?
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                The available number of files depends on your browser and
                device resources. Processing many large images may require more
                memory and processing power.
              </p>
            </div>

            <div className="rounded-2xl border border-purple-100 bg-purple-50/30 p-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Which image formats are supported?
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                The batch converter supports JPG, PNG and WebP image formats.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-blue-50/30 p-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Do I have to convert each image separately?
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                No. The purpose of the batch converter is to process multiple
                images together instead of repeating the same conversion for
                each file.
              </p>
            </div>

            <div className="rounded-2xl border border-purple-100 bg-purple-50/30 p-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Are my images uploaded to a server?
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                No. Image conversion is performed directly in your browser, so
                your files do not need to be uploaded to our server.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-blue-50/30 p-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Is the batch converter free?
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Yes. ConvertImageFreely's batch converter is free to use and
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
              Continue working with your images using another free tool.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/compress-image"
              className="group rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-xl text-blue-600">
                ↓
              </div>

              <h3 className="mt-5 text-lg font-semibold text-gray-900">
                Compress Image
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Reduce image file size while keeping good visual quality.
              </p>

              <div className="mt-5 text-sm font-semibold text-blue-600">
                Try it →
              </div>
            </Link>

            <Link
              href="/resize-image"
              className="group rounded-2xl border border-purple-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-purple-300 hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100 text-xl text-purple-600">
                ↗
              </div>

              <h3 className="mt-5 text-lg font-semibold text-gray-900">
                Resize Image
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Change image dimensions by pixels or percentage.
              </p>

              <div className="mt-5 text-sm font-semibold text-purple-600">
                Try it →
              </div>
            </Link>

            <Link
              href="/crop-image"
              className="group rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-xl text-blue-600">
                ⌗
              </div>

              <h3 className="mt-5 text-lg font-semibold text-gray-900">
                Crop Image
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Crop your image to focus on the area you need.
              </p>

              <div className="mt-5 text-sm font-semibold text-blue-600">
                Try it →
              </div>
            </Link>

            <Link
              href="/rotate-image"
              className="group rounded-2xl border border-purple-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-purple-300 hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100 text-xl text-purple-600">
                ↻
              </div>

              <h3 className="mt-5 text-lg font-semibold text-gray-900">
                Rotate & Flip
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Rotate or flip your images with a few simple clicks.
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
            Convert multiple images for free
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-blue-100">
            Process multiple JPG, PNG and WebP images directly in your browser
            without installing software or creating an account.
          </p>

          <a
            href="#top"
            className="mt-8 inline-block rounded-lg bg-white px-7 py-3 font-medium text-blue-700 shadow-sm transition hover:bg-blue-50 hover:shadow-md"
          >
            Convert more images →
          </a>
        </div>
      </section>
    </main>
  );
}