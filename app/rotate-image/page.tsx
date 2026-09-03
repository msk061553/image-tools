import type { Metadata } from "next";
import Link from "next/link";
import ImageRotator from "@/components/ImageRotator";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://convertimagefreely.com";

export const metadata: Metadata = {
  title: "Rotate & Flip Image - Rotate JPG, PNG & WebP Online",
  description:
    "Rotate and flip JPG, PNG and WebP images online for free. Turn images 90, 180 or 270 degrees, or flip them horizontally and vertically in your browser.",
  alternates: {
    canonical: `${BASE_URL}/rotate-image`,
  },
  openGraph: {
    title: "Rotate & Flip Image - Rotate JPG, PNG & WebP Online",
    description:
      "Rotate or flip images directly in your browser. Free, simple, and private.",
    type: "website",
    url: `${BASE_URL}/rotate-image`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Rotate & Flip Image",
  description:
    "Free browser-based image rotator and flipper for JPG, PNG and WebP images.",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Any",
  browserRequirements: "Requires JavaScript",
  url: `${BASE_URL}/rotate-image`,
  inLanguage: "en",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Rotate JPG images",
    "Rotate PNG images",
    "Rotate WebP images",
    "Rotate images 90 degrees",
    "Rotate images 180 degrees",
    "Rotate images 270 degrees",
    "Flip images horizontally",
    "Flip images vertically",
    "Browser-based image processing",
    "No server upload required",
  ],
};

export default function RotateImagePage() {
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
              Rotate & flip images online
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
              Rotate JPG, PNG and WebP images by 90, 180 or 270 degrees, or
              flip them horizontally and vertically directly in your browser.
            </p>
          </div>

          <div className="mt-10 rounded-3xl border border-blue-100 bg-white p-4 shadow-lg shadow-blue-100/50 md:p-6">
            <ImageRotator />
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
              Rotate or flip your image in three simple steps
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-gray-500">
              Correct image orientation without installing any software.
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
                into the image rotator.
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
                Rotate or flip
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                Rotate the image clockwise or counterclockwise, or flip it
                horizontally or vertically to get the orientation you need.
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
                Apply the transformation and download the corrected image
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
            Images are rotated and flipped directly in your browser. Your
            files do not need to be uploaded to a remote server.
          </p>

          <div className="mt-5 text-sm font-medium text-blue-700">
            Private · Secure · Browser-based
          </div>
        </div>
      </section>

      {/* =========================================================
          Why Rotate Images?
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-24">
          <div className="mb-10 text-center">
            <div className="text-sm font-semibold uppercase tracking-wider text-purple-600">
              Why rotate images?
            </div>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
              Why rotate or flip an image?
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-gray-500">
              Correct orientation and adjust the direction of an image without
              using a desktop editor.
            </p>
          </div>

          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                Correct sideways photos
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                Photos can sometimes appear sideways after being transferred
                between devices or applications. Rotating the image can
                correct its orientation before you share or use it elsewhere.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                Turn an image upside down
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                A 180-degree rotation can quickly correct an image that is
                completely upside down without opening a full image editor.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                Create a mirrored image
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                Horizontal and vertical flipping can create a mirrored version
                of an image. This can be useful for certain graphics, layouts,
                and creative projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          Rotation Options
      ========================================================= */}
      <section className="border-y border-blue-100 bg-blue-50/30">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="mb-10 text-center">
            <div className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Rotation options
            </div>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
              Choose the transformation you need
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-gray-500">
              Different transformations are useful for different image
              orientations.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-blue-100 bg-white p-7 shadow-sm">
              <div className="text-3xl font-bold text-blue-600">
                90°
              </div>

              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Rotate 90 degrees
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                Turn a portrait image into landscape orientation or rotate a
                sideways image into the correct position.
              </p>
            </div>

            <div className="rounded-2xl border border-purple-100 bg-white p-7 shadow-sm">
              <div className="text-3xl font-bold text-purple-600">
                180°
              </div>

              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Rotate 180 degrees
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                Turn an upside-down image around so that it faces the opposite
                direction.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-white p-7 shadow-sm">
              <div className="text-3xl font-bold text-blue-600">
                ↔
              </div>

              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Flip horizontally
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                Mirror the image from left to right while keeping the same
                overall dimensions.
              </p>
            </div>

            <div className="rounded-2xl border border-purple-100 bg-white p-7 shadow-sm">
              <div className="text-3xl font-bold text-purple-600">
                ↕
              </div>

              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Flip vertically
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                Mirror the image from top to bottom for a vertical reflection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          Rotate vs Crop vs Resize
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="mb-10 text-center">
            <div className="text-sm font-semibold uppercase tracking-wider text-purple-600">
              Choose the right tool
            </div>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
              Rotate, crop or resize?
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-gray-500">
              Each tool changes a different part of your image.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-blue-100 bg-blue-50/30 p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-xl text-blue-600">
                ↻
              </div>

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                Rotate & Flip
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Change the orientation or direction of the entire image.
              </p>
            </div>

            <div className="rounded-2xl border border-purple-100 bg-purple-50/30 p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100 text-xl text-purple-600">
                ⌗
              </div>

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                Crop
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Remove unwanted areas and keep only the part of the image you
                need.
              </p>

              <Link
                href="/crop-image"
                className="mt-5 inline-block text-sm font-semibold text-purple-600 hover:text-purple-700"
              >
                Open Image Cropper →
              </Link>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-blue-50/30 p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-xl text-blue-600">
                ↗
              </div>

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                Resize
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Change the width and height of the entire image.
              </p>

              <Link
                href="/resize-image"
                className="mt-5 inline-block text-sm font-semibold text-blue-600 hover:text-blue-700"
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
                Can I rotate JPG, PNG and WebP images?
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Yes. The image rotator supports JPG, PNG and WebP images.
              </p>
            </div>

            <div className="rounded-2xl border border-purple-100 bg-purple-50/30 p-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Can I rotate an image by 90 degrees?
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Yes. You can rotate an image in 90-degree increments to
                quickly correct its orientation.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-blue-50/30 p-6">
              <h3 className="text-lg font-semibold text-gray-900">
                What is the difference between rotate and flip?
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Rotating turns the image around its center, while flipping
                creates a mirrored version horizontally or vertically.
              </p>
            </div>

            <div className="rounded-2xl border border-purple-100 bg-purple-50/30 p-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Are my images uploaded to a server?
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                No. Image transformations are performed directly in your
                browser, so your image does not need to be uploaded to our
                server.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-blue-50/30 p-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Is the rotate and flip tool free?
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Yes. ConvertImageFreely's rotate and flip tool is free to use
                and does not require an account.
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
              Continue editing your image with another free image tool.
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
            Rotate your image for free
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-blue-100">
            Correct image orientation or create a mirrored image directly in
            your browser.
          </p>

          <a
            href="#top"
            className="mt-8 inline-block rounded-lg bg-white px-7 py-3 font-medium text-blue-700 shadow-sm transition hover:bg-blue-50 hover:shadow-md"
          >
            Rotate another image →
          </a>
        </div>
      </section>
    </main>
  );
}