import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://convertimagefreely.com";

export const metadata: Metadata = {
  title: "Image Compression Test: JPG vs WebP Quality and File Size",
  description:
    "See how JPG and WebP compression affect image file size at quality 90, 80, and 70 using three real test images.",
  alternates: {
    canonical: `${BASE_URL}/guides/image-compression-test`,
  },
  openGraph: {
    title: "Image Compression Test: JPG vs WebP Quality and File Size",
    description:
      "A practical compression test comparing JPG and WebP at different quality settings.",
    type: "article",
    url: `${BASE_URL}/guides/image-compression-test`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Image Compression Test: JPG vs WebP Quality and File Size",
  description:
    "A practical comparison of JPG and WebP compression using three test images and measured file sizes.",
  url: `${BASE_URL}/guides/image-compression-test`,
  inLanguage: "en",
  publisher: {
    "@type": "Organization",
    name: "ConvertImageFreely",
    url: BASE_URL,
  },
};

const tests = [
  {
    name: "Landscape",
    description:
      "A 1920 × 1280 landscape-style image with gradients, mountains, vegetation, water, and varied visual detail.",
    original: "test-landscape-1920x1280.png",
    jpg: {
      q70: ["landscape-jpg-q70.jpg", "204.5 KB"],
      q80: ["landscape-jpg-q80.jpg", "288.8 KB"],
      q90: ["landscape-jpg-q90.jpg", "540.8 KB"],
    },
    webp: {
      q70: ["landscape-webp-q70.webp", "57.2 KB"],
      q80: ["landscape-webp-q80.webp", "141.7 KB"],
      q90: ["landscape-webp-q90.webp", "469.1 KB"],
    },
  },
  {
    name: "UI Screenshot",
    description:
      "A 1920 × 1080 interface-style image containing large areas of solid color, charts, lines, and sharp graphical elements.",
    original: "test-ui-screenshot-1920x1080.png",
    jpg: {
      q70: ["ui-screenshot-jpg-q70.jpg", "76.0 KB"],
      q80: ["ui-screenshot-jpg-q80.jpg", "86.0 KB"],
      q90: ["ui-screenshot-jpg-q90.jpg", "106.5 KB"],
    },
    webp: {
      q70: ["ui-screenshot-webp-q70.webp", "17.8 KB"],
      q80: ["ui-screenshot-webp-q80.webp", "20.2 KB"],
      q90: ["ui-screenshot-webp-q90.webp", "26.4 KB"],
    },
  },
  {
    name: "Graphic",
    description:
      "A 1600 × 1000 graphic containing flat colors, shapes, charts, and sharp edges.",
    original: "test-graphic-1600x1000.png",
    jpg: {
      q70: ["graphic-jpg-q70.jpg", "67.0 KB"],
      q80: ["graphic-jpg-q80.jpg", "74.2 KB"],
      q90: ["graphic-jpg-q90.jpg", "89.9 KB"],
    },
    webp: {
      q70: ["graphic-webp-q70.webp", "12.6 KB"],
      q80: ["graphic-webp-q80.webp", "14.6 KB"],
      q90: ["graphic-webp-q90.webp", "17.4 KB"],
    },
  },
];

function TestImage({
  src,
  alt,
  label,
  size,
}: {
  src: string;
  alt: string;
  label: string;
  size: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
      <img
        src={`/guides/image-compression-test/${src}`}
        alt={alt}
        className="w-full"
      />

      <div className="border-t border-gray-200 p-4">
        <p className="font-semibold text-gray-900">{label}</p>
        <p className="mt-1 text-sm text-gray-500">{size}</p>
      </div>
    </div>
  );
}

export default function ImageCompressionTestPage() {
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
            Image Compression Test: JPG vs WebP Quality and File Size
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            How much can image compression reduce file size? We tested JPG and
            WebP at quality levels of 90, 80, and 70 using three different
            images to see how the results change.
          </p>
        </header>

        <div className="mt-12 space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              How we performed the test
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              We used three different test images representing a photograph,
              a user-interface screenshot, and a graphic. Each source image
              was converted to JPG and WebP using the same quality settings.
              The image dimensions were kept unchanged.
            </p>

            <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50/50 p-6">
              <h3 className="font-semibold text-gray-900">
                Test conditions
              </h3>

              <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-gray-600">
                <li>JPG quality: 90, 80, and 70</li>
                <li>WebP quality: 90, 80, and 70</li>
                <li>Original image dimensions were preserved</li>
                <li>No resizing was performed</li>
                <li>File size was measured after encoding</li>
              </ul>

              <p className="mt-5 text-sm leading-6 text-gray-500">
                These results are specific to our test images and encoding
                settings. They are not universal benchmarks. Different images,
                dimensions, encoders, and settings can produce different
                results.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              Quick results
            </h2>

            <div className="mt-6 overflow-x-auto rounded-2xl border border-gray-200">
              <table className="w-full min-w-[760px] text-left text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-5 py-4 font-semibold text-gray-900">
                      Image
                    </th>
                    <th className="px-5 py-4 font-semibold text-gray-900">
                      JPG Q70
                    </th>
                    <th className="px-5 py-4 font-semibold text-gray-900">
                      JPG Q80
                    </th>
                    <th className="px-5 py-4 font-semibold text-gray-900">
                      JPG Q90
                    </th>
                    <th className="px-5 py-4 font-semibold text-gray-900">
                      WebP Q70
                    </th>
                    <th className="px-5 py-4 font-semibold text-gray-900">
                      WebP Q80
                    </th>
                    <th className="px-5 py-4 font-semibold text-gray-900">
                      WebP Q90
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-5 py-4 font-medium text-gray-900">
                      Landscape
                    </td>
                    <td className="px-5 py-4">204.5 KB</td>
                    <td className="px-5 py-4">288.8 KB</td>
                    <td className="px-5 py-4">540.8 KB</td>
                    <td className="px-5 py-4">57.2 KB</td>
                    <td className="px-5 py-4">141.7 KB</td>
                    <td className="px-5 py-4">469.1 KB</td>
                  </tr>

                  <tr>
                    <td className="px-5 py-4 font-medium text-gray-900">
                      UI Screenshot
                    </td>
                    <td className="px-5 py-4">76.0 KB</td>
                    <td className="px-5 py-4">86.0 KB</td>
                    <td className="px-5 py-4">106.5 KB</td>
                    <td className="px-5 py-4">17.8 KB</td>
                    <td className="px-5 py-4">20.2 KB</td>
                    <td className="px-5 py-4">26.4 KB</td>
                  </tr>

                  <tr>
                    <td className="px-5 py-4 font-medium text-gray-900">
                      Graphic
                    </td>
                    <td className="px-5 py-4">67.0 KB</td>
                    <td className="px-5 py-4">74.2 KB</td>
                    <td className="px-5 py-4">89.9 KB</td>
                    <td className="px-5 py-4">12.6 KB</td>
                    <td className="px-5 py-4">14.6 KB</td>
                    <td className="px-5 py-4">17.4 KB</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {tests.map((test) => (
            <section key={test.name}>
              <h2 className="text-2xl font-bold text-gray-900">
                {test.name} compression test
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                {test.description}
              </p>

              <div className="mt-6">
                <TestImage
                  src={test.original}
                  alt={`Original ${test.name} test image`}
                  label="Original"
                  size="Source image"
                />
              </div>

              <h3 className="mt-10 text-xl font-bold text-gray-900">
                JPG results
              </h3>

              <div className="mt-5 grid gap-6 md:grid-cols-3">
                <TestImage
                  src={test.jpg.q70[0]}
                  alt={`${test.name} compressed as JPG quality 70`}
                  label="JPG Q70"
                  size={test.jpg.q70[1]}
                />

                <TestImage
                  src={test.jpg.q80[0]}
                  alt={`${test.name} compressed as JPG quality 80`}
                  label="JPG Q80"
                  size={test.jpg.q80[1]}
                />

                <TestImage
                  src={test.jpg.q90[0]}
                  alt={`${test.name} compressed as JPG quality 90`}
                  label="JPG Q90"
                  size={test.jpg.q90[1]}
                />
              </div>

              <h3 className="mt-10 text-xl font-bold text-gray-900">
                WebP results
              </h3>

              <div className="mt-5 grid gap-6 md:grid-cols-3">
                <TestImage
                  src={test.webp.q70[0]}
                  alt={`${test.name} compressed as WebP quality 70`}
                  label="WebP Q70"
                  size={test.webp.q70[1]}
                />

                <TestImage
                  src={test.webp.q80[0]}
                  alt={`${test.name} compressed as WebP quality 80`}
                  label="WebP Q80"
                  size={test.webp.q80[1]}
                />

                <TestImage
                  src={test.webp.q90[0]}
                  alt={`${test.name} compressed as WebP quality 90`}
                  label="WebP Q90"
                  size={test.webp.q90[1]}
                />
              </div>

              <div className="mt-8 rounded-2xl border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900">
                  What happened?
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  Lowering the quality setting generally reduced the file size.
                  However, the amount of reduction varied considerably between
                  image types. The landscape image showed much larger changes
                  in file size than the screenshot and graphic tests.
                </p>
              </div>
            </section>
          ))}

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              What the results tell us
            </h2>

            <div className="mt-6 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Quality 90 is not always necessary
                </h3>

                <p className="mt-2 leading-7 text-gray-600">
                  Higher quality settings produced larger files in all three
                  tests. Depending on the image and intended use, reducing the
                  quality setting can significantly reduce storage and
                  bandwidth requirements.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  WebP produced smaller files in these tests
                </h3>

                <p className="mt-2 leading-7 text-gray-600">
                  WebP produced smaller files than JPG at every tested quality
                  level for all three test images. The difference was
                  particularly noticeable for the UI screenshot and graphic.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Image content matters
                </h3>

                <p className="mt-2 leading-7 text-gray-600">
                  Compression results are not determined by the quality number
                  alone. Photographs, screenshots, and graphics contain
                  different visual information and therefore respond
                  differently to compression.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              What quality setting should you use?
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              There is no single quality setting that works best for every
              image. A practical approach is to compare the visual result at
              several quality levels and choose the lowest setting that still
              provides acceptable image quality.
            </p>

            <div className="mt-6 overflow-x-auto rounded-2xl border border-gray-200">
              <table className="w-full min-w-[600px] text-left text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-5 py-4 font-semibold text-gray-900">
                      Quality
                    </th>
                    <th className="px-5 py-4 font-semibold text-gray-900">
                      General idea
                    </th>
                    <th className="px-5 py-4 font-semibold text-gray-900">
                      Possible use
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-5 py-4 font-medium">90</td>
                    <td className="px-5 py-4 text-gray-600">
                      Higher quality and larger files
                    </td>
                    <td className="px-5 py-4 text-gray-600">
                      Images where visual quality is important
                    </td>
                  </tr>

                  <tr>
                    <td className="px-5 py-4 font-medium">80</td>
                    <td className="px-5 py-4 text-gray-600">
                      Balanced quality and file size
                    </td>
                    <td className="px-5 py-4 text-gray-600">
                      General website images
                    </td>
                  </tr>

                  <tr>
                    <td className="px-5 py-4 font-medium">70</td>
                    <td className="px-5 py-4 text-gray-600">
                      Smaller files with more compression
                    </td>
                    <td className="px-5 py-4 text-gray-600">
                      Situations where bandwidth matters
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              Try converting your own images
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              The best compression setting depends on your actual image.
              You can test different formats and compare the resulting files
              using our browser-based image conversion tools.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
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
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}