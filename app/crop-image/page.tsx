import type { Metadata } from "next";
import Link from "next/link";
import ImageCropper from "@/components/ImageCropper";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://convertimagefreely.com";

export const metadata: Metadata = {
  title: "Crop Image - Crop JPG, PNG & WebP Online",
  description:
    "Crop JPG, PNG and WebP images online for free. Crop images to any area directly in your browser without uploading your files.",
  alternates: {
    canonical: `${BASE_URL}/crop-image`,
  },
  openGraph: {
    title: "Crop Image - Crop JPG, PNG & WebP Online",
    description:
      "Crop images directly in your browser. Free, simple, and private.",
    type: "website",
    url: `${BASE_URL}/crop-image`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Crop Image",
  description:
    "Free browser-based image cropper for JPG, PNG and WebP images.",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Any",
  browserRequirements: "Requires JavaScript",
  url: `${BASE_URL}/crop-image`,
  inLanguage: "en",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Crop JPG images",
    "Crop PNG images",
    "Crop WebP images",
    "Crop images to custom areas",
    "Browser-based image processing",
    "No server upload required",
  ],
};

export default function CropImagePage() {
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
              Crop images online
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
              Crop JPG, PNG and WebP images to the area you need. Everything
              works directly in your browser.
            </p>
          </div>

          <div className="mt-10 rounded-3xl border border-blue-100 bg-white p-4 shadow-lg shadow-blue-100/50 md:p-6">
            <ImageCropper />
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
              Crop your image in three simple steps
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-gray-500">
              Select the area you want to keep and download the cropped image.
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
                into the image cropper.
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
                Select the area to crop
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                Adjust the crop area to keep the part of the image you want.
                Move and resize the selection as needed.
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
                Download the cropped image
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                Apply the crop and download the resulting image directly to
                your device.
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
            Images are cropped directly in your browser. Your files do not
            need to be uploaded to a remote server.
          </p>

          <div className="mt-5 text-sm font-medium text-blue-700">
            Private · Secure · Browser-based
          </div>
        </div>
      </section>

      {/* =========================================================
          Why Crop Images?
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-24">
          <div className="mb-10 text-center">
            <div className="text-sm font-semibold uppercase tracking-wider text-purple-600">
              Why crop images?
            </div>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
              Why crop an image?
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-gray-500">
              Cropping helps remove unwanted areas and focus attention on the
              part of an image that matters.
            </p>
          </div>

          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                Remove unwanted areas
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                Photos often contain extra space around the main subject.
                Cropping lets you remove unnecessary areas and create a more
                focused composition.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                Create the right composition
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                Cropping can help place the main subject in a more useful area
                of the frame. This is especially helpful when preparing images
                for profiles, websites, documents, and social media.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                Prepare images for different uses
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                Different platforms and layouts often require different image
                shapes. Cropping can help prepare an existing image for the
                dimensions or composition you need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          Crop vs Resize
      ========================================================= */}
      <section className="border-y border-blue-100 bg-blue-50/30">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="mb-10 text-center">
            <div className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Crop or resize?
            </div>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
              Cropping and resizing are different
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-gray-500">
              Choose the right tool depending on what you want to change.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-blue-100 bg-white p-7 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl text-blue-600">
                ⌗
              </div>

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                Crop
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Cropping removes part of an image. Use it when you want to
                change what is visible in the frame or remove unwanted areas.
              </p>

              <div className="mt-5 text-sm font-medium text-blue-700">
                Change the visible area
              </div>
            </div>

            <div className="rounded-2xl border border-purple-100 bg-white p-7 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-xl text-purple-600">
                ↗
              </div>

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                Resize
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Resizing changes the width and height of the entire image while
                keeping its visual content.
              </p>

              <Link
                href="/resize-image"
                className="mt-5 inline-block text-sm font-semibold text-purple-600 hover:text-purple-700"
              >
                Open Image Resizer →
              </Link>
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
                Can I crop JPG, PNG and WebP images?
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Yes. The image cropper supports JPG, PNG and WebP images.
              </p>
            </div>

            <div className="rounded-2xl border border-purple-100 bg-purple-50/30 p-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Does cropping change the image dimensions?
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Cropping removes part of the original image and creates a new
                image based on the selected area. The resulting dimensions
                depend on the crop area.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-blue-50/30 p-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Can I crop an image without uploading it?
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Yes. The crop operation is performed directly in your browser,
                so your image does not need to be uploaded to a remote server.
              </p>
            </div>

            <div className="rounded-2xl border border-purple-100 bg-purple-50/30 p-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Is the image cropper free?
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Yes. ConvertImageFreely's image cropper is free to use and
                does not require an account.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-blue-50/30 p-6">
              <h3 className="text-lg font-semibold text-gray-900">
                What is the difference between crop and resize?
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Cropping removes part of the image, while resizing changes the
                dimensions of the complete image. Use crop when you want to
                change the visible area and resize when you want to change the
                overall dimensions.
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
              Continue working with your image using another free tool.
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
              href="/compress-image"
              className="group rounded-2xl border border-purple-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-purple-300 hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100 text-xl text-purple-600">
                ↓
              </div>

              <h3 className="mt-5 text-lg font-semibold text-gray-900">
                Compress Image
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Reduce image file size while keeping good visual quality.
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
            Crop your image for free
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-blue-100">
            Select the area you need and crop your image directly in your
            browser.
          </p>

          <a
            href="#top"
            className="mt-8 inline-block rounded-lg bg-white px-7 py-3 font-medium text-blue-700 shadow-sm transition hover:bg-blue-50 hover:shadow-md"
          >
            Crop another image →
          </a>
        </div>
      </section>
    </main>
  );
}