import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://convertimagefreely.com";

export const metadata: Metadata = {
  title: "JPG vs PNG vs WebP: Image Format Comparison",
  description:
    "Compare JPG, PNG, and WebP image formats, including image quality, file size, transparency, compatibility, and the best use cases for each format.",
  alternates: {
    canonical: `${BASE_URL}/guides/image-format-comparison`,
  },
  openGraph: {
    title: "JPG vs PNG vs WebP: Image Format Comparison",
    description:
      "A practical comparison of JPG, PNG, and WebP image formats, including quality, file size, transparency, and common use cases.",
    type: "article",
    url: `${BASE_URL}/guides/image-format-comparison`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "JPG vs PNG vs WebP: Image Format Comparison",
  description:
    "A practical comparison of JPG, PNG, and WebP image formats.",
  url: `${BASE_URL}/guides/image-format-comparison`,
  inLanguage: "en",
  publisher: {
    "@type": "Organization",
    name: "ConvertImageFreely",
    url: BASE_URL,
  },
};

export default function ImageFormatComparisonPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <article className="mx-auto max-w-4xl px-6 py-16 md:py-20">
        <Link
          href="/guides"
          className="text-sm font-medium text-blue-600 hover:text-blue-700"
        >
          ← Image Guides
        </Link>

        <header className="mt-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            JPG vs PNG vs WebP: Image Format Comparison
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            JPG, PNG, and WebP are three of the most commonly used image
            formats. Each format has different strengths, and the best choice
            depends on the type of image, required quality, file size, and
            where the image will be used.
          </p>
        </header>

        <div className="mt-12 space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              Quick comparison
            </h2>

            <div className="mt-6 overflow-x-auto rounded-2xl border border-gray-200">
              <table className="w-full min-w-[600px] text-left text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-5 py-4 font-semibold text-gray-900">
                      Feature
                    </th>
                    <th className="px-5 py-4 font-semibold text-gray-900">
                      JPG
                    </th>
                    <th className="px-5 py-4 font-semibold text-gray-900">
                      PNG
                    </th>
                    <th className="px-5 py-4 font-semibold text-gray-900">
                      WebP
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-5 py-4 font-medium text-gray-900">
                      Compression
                    </td>
                    <td className="px-5 py-4 text-gray-600">
                      Lossy
                    </td>
                    <td className="px-5 py-4 text-gray-600">
                      Lossless
                    </td>
                    <td className="px-5 py-4 text-gray-600">
                      Lossy / Lossless
                    </td>
                  </tr>

                  <tr>
                    <td className="px-5 py-4 font-medium text-gray-900">
                      Transparency
                    </td>
                    <td className="px-5 py-4 text-gray-600">
                      No
                    </td>
                    <td className="px-5 py-4 text-gray-600">
                      Yes
                    </td>
                    <td className="px-5 py-4 text-gray-600">
                      Yes
                    </td>
                  </tr>

                  <tr>
                    <td className="px-5 py-4 font-medium text-gray-900">
                      Typical use
                    </td>
                    <td className="px-5 py-4 text-gray-600">
                      Photos
                    </td>
                    <td className="px-5 py-4 text-gray-600">
                      Graphics and screenshots
                    </td>
                    <td className="px-5 py-4 text-gray-600">
                      Web images
                    </td>
                  </tr>

                  <tr>
                    <td className="px-5 py-4 font-medium text-gray-900">
                      Compatibility
                    </td>
                    <td className="px-5 py-4 text-gray-600">
                      Very broad
                    </td>
                    <td className="px-5 py-4 text-gray-600">
                      Very broad
                    </td>
                    <td className="px-5 py-4 text-gray-600">
                      Broad in modern software
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              JPG
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              JPG is one of the most widely supported image formats. It uses
              lossy compression, which allows photographs and other detailed
              images to be stored in relatively small files.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              JPG is usually a practical choice for photographs, travel
              pictures, product images, and other images where keeping the
              file size manageable is important.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              The main limitation is that JPG does not support transparent
              backgrounds and repeated lossy processing can reduce image
              quality.
            </p>

            <Link
              href="/png-to-jpg"
              className="mt-5 inline-block font-medium text-blue-600 hover:text-blue-700"
            >
              Convert PNG to JPG →
            </Link>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              PNG
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              PNG uses lossless compression and is commonly used when preserving
              sharp details is more important than minimizing file size.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              Screenshots, logos, interface graphics, diagrams, and images with
              transparent backgrounds are common examples where PNG can be a
              useful choice.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              The trade-off is that PNG files can be considerably larger than
              compressed JPG or WebP files, particularly for photographic
              images.
            </p>

            <Link
              href="/jpg-to-png"
              className="mt-5 inline-block font-medium text-blue-600 hover:text-blue-700"
            >
              Convert JPG to PNG →
            </Link>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              WebP
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              WebP is a modern image format designed with efficient web
              delivery in mind. It supports both lossy and lossless
              compression and can also support transparency.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              WebP can be useful for websites because reducing image file size
              can reduce the amount of data visitors need to download.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              However, compatibility should still be considered when working
              with older software, applications, or systems that expect more
              traditional image formats.
            </p>

            <Link
              href="/jpg-to-webp"
              className="mt-5 inline-block font-medium text-blue-600 hover:text-blue-700"
            >
              Convert JPG to WebP →
            </Link>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              Which format should you use?
            </h2>

            <div className="mt-6 space-y-5">
              <div>
                <h3 className="font-semibold text-gray-900">
                  Choose JPG for photographs
                </h3>

                <p className="mt-2 leading-7 text-gray-600">
                  JPG is often a good choice when working with photographs and
                  when broad compatibility and reasonable file size are
                  important.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  Choose PNG for graphics and transparency
                </h3>

                <p className="mt-2 leading-7 text-gray-600">
                  PNG is often more appropriate for screenshots, logos,
                  diagrams, and graphics where sharp details or transparency
                  are important.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  Choose WebP for modern web use
                </h3>

                <p className="mt-2 leading-7 text-gray-600">
                  WebP is a strong option when efficient image delivery is a
                  priority and the software or platform supports the format.
                </p>
              </div>
            </div>
          </section>

                    <section>
            <h2 className="text-2xl font-bold text-gray-900">
              Real file size comparison
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              We created two test images and converted each image to JPG, PNG,
              and WebP using fixed encoding settings. The results show how
              strongly image content can affect the final file size.
            </p>

            <div className="mt-6 overflow-x-auto rounded-2xl border border-gray-200">
              <table className="w-full min-w-[600px] text-left text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-5 py-4 font-semibold text-gray-900">
                      Test image
                    </th>
                    <th className="px-5 py-4 font-semibold text-gray-900">
                      JPG
                    </th>
                    <th className="px-5 py-4 font-semibold text-gray-900">
                      PNG
                    </th>
                    <th className="px-5 py-4 font-semibold text-gray-900">
                      WebP
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-5 py-4 font-medium text-gray-900">
                      Landscape
                    </td>
                    <td className="px-5 py-4 text-gray-600">
                      372.0 KB
                    </td>
                    <td className="px-5 py-4 text-gray-600">
                      2,332.3 KB
                    </td>
                    <td className="px-5 py-4 text-gray-600">
                      277.0 KB
                    </td>
                  </tr>

                  <tr>
                    <td className="px-5 py-4 font-medium text-gray-900">
                      UI screenshot
                    </td>
                    <td className="px-5 py-4 text-gray-600">
                      94.2 KB
                    </td>
                    <td className="px-5 py-4 text-gray-600">
                      16.6 KB
                    </td>
                    <td className="px-5 py-4 text-gray-600">
                      23.2 KB
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-5 text-sm leading-6 text-gray-500">
              Test conditions: JPG quality 85, WebP quality 85, and PNG
              lossless compression. File sizes will vary depending on the
              source image, dimensions, and encoding settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              Landscape test
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              The landscape test image is 1920 × 1280 pixels. It contains
              gradients, mountains, vegetation, and water to represent a
              photographic image with varied visual detail.
            </p>

            <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200">
              <img
                src="/guides/image-format-comparison/test-landscape-1920x1280.png"
                alt="Original landscape test image"
                className="w-full"
              />
              <div className="border-t border-gray-200 bg-gray-50 p-4">
                <p className="text-sm text-gray-500">
                  Original image — 1920 × 1280 pixels
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="overflow-hidden rounded-2xl border border-gray-200">
                <img
                  src="/guides/image-format-comparison/landscape.jpg"
                  alt="Landscape test image in JPG format"
                  className="w-full"
                />
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900">JPG</h3>
                  <p className="mt-2 text-xl font-bold text-blue-600">
                    372.0 KB
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-gray-200">
                <img
                  src="/guides/image-format-comparison/landscape.png"
                  alt="Landscape test image in PNG format"
                  className="w-full"
                />
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900">PNG</h3>
                  <p className="mt-2 text-xl font-bold text-blue-600">
                    2,332.3 KB
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-gray-200">
                <img
                  src="/guides/image-format-comparison/landscape.webp"
                  alt="Landscape test image in WebP format"
                  className="w-full"
                />
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900">WebP</h3>
                  <p className="mt-2 text-xl font-bold text-blue-600">
                    277.0 KB
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900">
                Result
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                WebP produced the smallest file in this test at 277.0 KB,
                followed by JPG at 372.0 KB. PNG was substantially larger at
                2,332.3 KB.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              UI screenshot test
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              The second test image is a 1920 × 1080 user-interface screenshot
              containing large areas of solid color, charts, lines, and sharp
              graphical elements.
            </p>

            <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200">
              <img
                src="/guides/image-format-comparison/test-ui-screenshot-1920x1080.png"
                alt="Original UI screenshot test image"
                className="w-full"
              />
              <div className="border-t border-gray-200 bg-gray-50 p-4">
                <p className="text-sm text-gray-500">
                  Original image — 1920 × 1080 pixels
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="overflow-hidden rounded-2xl border border-gray-200">
                <img
                  src="/guides/image-format-comparison/ui-screenshot.jpg"
                  alt="UI screenshot in JPG format"
                  className="w-full"
                />
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900">JPG</h3>
                  <p className="mt-2 text-xl font-bold text-blue-600">
                    94.2 KB
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-gray-200">
                <img
                  src="/guides/image-format-comparison/ui-screenshot.png"
                  alt="UI screenshot in PNG format"
                  className="w-full"
                />
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900">PNG</h3>
                  <p className="mt-2 text-xl font-bold text-blue-600">
                    16.6 KB
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-gray-200">
                <img
                  src="/guides/image-format-comparison/ui-screenshot.webp"
                  alt="UI screenshot in WebP format"
                  className="w-full"
                />
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900">WebP</h3>
                  <p className="mt-2 text-xl font-bold text-blue-600">
                    23.2 KB
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900">
                Result
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                The screenshot produced a different result. PNG was the
                smallest at 16.6 KB, followed by WebP at 23.2 KB. JPG was the
                largest at 94.2 KB.
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                This demonstrates why the smallest format depends on the type
                of image. A format that performs well for photographs may not
                produce the smallest file for screenshots or graphics.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              Image quality comparison
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Image quality should not be judged only by the file extension.
              Compression settings, image dimensions, and the original image
              all affect the final result.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              A highly compressed JPG can show visible artifacts, while a
              carefully encoded JPG can still look excellent. Similarly, WebP
              can produce different results depending on whether lossy or
              lossless compression is used.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              For graphics containing text and sharp edges, PNG can often
              preserve details particularly well because it uses lossless
              compression.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              Related image converters
            </h2>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/jpg-to-png"
                className="rounded-lg border border-blue-200 px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50"
              >
                JPG to PNG
              </Link>

              <Link
                href="/png-to-jpg"
                className="rounded-lg border border-blue-200 px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50"
              >
                PNG to JPG
              </Link>

              <Link
                href="/jpg-to-webp"
                className="rounded-lg border border-blue-200 px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50"
              >
                JPG to WebP
              </Link>

              <Link
                href="/png-to-webp"
                className="rounded-lg border border-blue-200 px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50"
              >
                PNG to WebP
              </Link>

              <Link
                href="/webp-to-jpg"
                className="rounded-lg border border-blue-200 px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50"
              >
                WebP to JPG
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>

            <div className="mt-6 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Which format is best for photos?
                </h3>

                <p className="mt-2 leading-7 text-gray-600">
                  JPG is a common choice for photographs because it provides
                  broad compatibility and can keep file sizes relatively
                  manageable.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Which format supports transparency?
                </h3>

                <p className="mt-2 leading-7 text-gray-600">
                  PNG and WebP can support transparency, while standard JPG
                  images do not.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Is WebP always smaller than JPG or PNG?
                </h3>

                <p className="mt-2 leading-7 text-gray-600">
                  No. File size depends on the image and compression settings.
                  WebP can be very efficient, but there is no guarantee that
                  every WebP file will be smaller.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}