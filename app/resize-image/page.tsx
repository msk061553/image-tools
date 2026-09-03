import type { Metadata } from "next";
import Link from "next/link";
import ImageResizer from "@/components/ImageResizer";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://convertimagefreely.com";

export const metadata: Metadata = {
  title: "Resize Image - Resize JPG, PNG & WebP Online",
  description:
    "Resize JPG, PNG and WebP images online for free. Change image dimensions by pixels or percentage directly in your browser.",
  alternates: {
    canonical: `${BASE_URL}/resize-image`,
  },
  openGraph: {
    title: "Resize Image - Resize JPG, PNG & WebP Online",
    description:
      "Resize image dimensions directly in your browser. Free and easy to use.",
    type: "website",
    url: `${BASE_URL}/resize-image`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Resize Image",
  description:
    "Free browser-based image resizer for JPG, PNG and WebP images.",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Any",
  browserRequirements: "Requires JavaScript",
  url: `${BASE_URL}/resize-image`,
  inLanguage: "en",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Resize JPG images",
    "Resize PNG images",
    "Resize WebP images",
    "Resize by pixels",
    "Resize by percentage",
    "Maintain aspect ratio",
    "Browser-based image processing",
    "No server upload required",
  ],
};

export default function ResizeImagePage() {
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
          Hero
      ========================================================= */}
      <section className="relative overflow-hidden border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="mx-auto max-w-5xl px-6 pb-16 pt-16 md:pb-20 md:pt-20">
          <div className="text-center">
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm">
              Free · Browser-based · No Sign up
            </div>

            <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              Resize images online
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
              Change image dimensions by pixels or percentage. Resize JPG, PNG
              and WebP images directly in your browser.
            </p>
          </div>

          {/* Tool */}
          <div className="mt-10 rounded-3xl border border-blue-100 bg-white p-4 shadow-lg shadow-blue-100/50 md:p-6">
            <ImageResizer />
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
              Resize your image in three simple steps
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-gray-500">
              Change your image dimensions without installing any software.
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
                into the image resizer.
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
                Set the new dimensions
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                Enter the desired width and height in pixels, or resize the
                image using a percentage.
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
                Download the resized image
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                Apply the new dimensions and download the resized image
                directly to your device.
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
            Images are resized directly in your browser. Your files do not
            need to be uploaded to a remote server.
          </p>

          <div className="mt-5 text-sm font-medium text-blue-700">
            Private · Secure · Browser-based
          </div>
        </div>
      </section>

      {/* =========================================================
          Why Resize Images?
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-24">
          <div className="mb-10 text-center">
            <div className="text-sm font-semibold uppercase tracking-wider text-purple-600">
              Why resize images?
            </div>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
              Why change an image's dimensions?
            </h2>
          </div>

          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                Reduce image dimensions
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                Large images often have dimensions that are much bigger than
                the size at which they are actually displayed. Reducing the
                width and height can make an image easier to store, share, and
                use online.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                Prepare images for websites
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                Images that are larger than necessary can increase page
                loading times. Resizing an image to match its intended display
                size can help reduce unnecessary data and make it easier to
                manage.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                Resize without changing the format
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                Resizing changes the dimensions of an image without requiring
                you to convert it to another format. JPG, PNG, and WebP images
                can all be resized according to your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          Aspect Ratio
      ========================================================= */}
      <section className="border-y border-blue-100 bg-blue-50/30">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <div className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Image quality
              </div>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
                Keep the aspect ratio to avoid distortion
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                Changing the width and height independently can stretch or
                squeeze an image. Keeping the original aspect ratio allows the
                image to be resized without making people or objects appear
                distorted.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                When preparing an image for a website, profile picture, social
                media post, or document, choose dimensions that match the
                intended use whenever possible.
              </p>
            </div>

            <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm">
              <div className="text-sm font-semibold text-gray-500">
                Example
              </div>

              <div className="mt-6 flex items-center justify-center gap-6">
                <div className="flex h-28 w-40 items-center justify-center rounded-xl bg-blue-100 text-sm font-semibold text-blue-700">
                  Original
                </div>

                <div className="text-2xl text-gray-400">
                  →
                </div>

                <div className="flex h-20 w-28 items-center justify-center rounded-xl bg-purple-100 text-sm font-semibold text-purple-700">
                  Resized
                </div>
              </div>

              <p className="mt-6 text-center text-sm leading-6 text-gray-500">
                The image can be made smaller while keeping its original
                proportions.
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
                Can I resize JPG, PNG and WebP images?
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Yes. The image resizer supports JPG, PNG and WebP images.
              </p>
            </div>

            <div className="rounded-2xl border border-purple-100 bg-purple-50/30 p-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Can I resize an image by percentage?
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Yes. You can resize an image by entering dimensions in pixels
                or by using a percentage of the original size.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-blue-50/30 p-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Will resizing stretch my image?
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Keeping the aspect ratio enabled helps maintain the original
                proportions and prevents unwanted stretching or squeezing.
              </p>
            </div>

            <div className="rounded-2xl border border-purple-100 bg-purple-50/30 p-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Are my images uploaded to a server?
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                No. Image resizing is performed directly in your browser, so
                your image does not need to be uploaded to our server.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-blue-50/30 p-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Is the image resizer free?
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Yes. ConvertImageFreely's image resizer is free to use and
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
              Try another free image tool after resizing your image.
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
              href="/rotate-image"
              className="group rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-xl text-blue-600">
                ↻
              </div>

              <h3 className="mt-5 text-lg font-semibold text-gray-900">
                Rotate & Flip
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Rotate or flip your images with a few simple clicks.
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
            Resize your image for free
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-blue-100">
            Change image dimensions directly in your browser without installing
            software or creating an account.
          </p>

          <a
            id="top"
            className="mt-8 inline-block rounded-lg bg-white px-7 py-3 font-medium text-blue-700 shadow-sm transition hover:bg-blue-50 hover:shadow-md"
          >
            Resize another image →
          </a>
        </div>
      </section>
    </main>
  );
}