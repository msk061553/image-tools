import Link from "next/link";
import UploadBox from "@/components/UploadBox";
import { imageTools } from "@/lib/tools/tools";

type ToolPageProps = {
  title: string;
  description: string;
  inputFormat: "JPG" | "PNG" | "WebP";
  outputFormat: "png" | "jpeg" | "webp";
  seo: {
    intro: string;
    why: string;
  };
};

export default function ToolPage({
  title,
  description,
  inputFormat,
  outputFormat,
  seo,
}: ToolPageProps) {
  const outputName =
    outputFormat === "jpeg"
      ? "JPG"
      : outputFormat.toUpperCase();

  const currentToolTitle = title.replace(" Converter", "");

  const relatedTools = imageTools
    .filter((tool) => tool.title !== currentToolTitle)
    .filter(
      (tool) =>
        tool.inputFormat === inputFormat ||
        tool.outputFormat === outputFormat
    )
    .slice(0, 3);

  return (
    <main>
      {/* Hero + Converter */}
      <section className="relative overflow-hidden border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="mx-auto max-w-4xl px-6 pb-20 pt-16 md:pb-24 md:pt-20">
          <div className="text-center">
            <div className="mb-5 inline-flex items-center rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm">
              Free · Browser-based · No upload
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              {title}
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
              {description}
            </p>
          </div>

          {/* Converter */}
          <div className="mt-10 rounded-3xl border border-blue-100 bg-white/80 p-2 shadow-xl shadow-blue-100/40 backdrop-blur-sm sm:p-3">
            <UploadBox
              inputFormat={inputFormat}
              outputFormat={outputFormat}
            />
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-500">
            <span>✓ Free to use</span>
            <span>✓ No account required</span>
            <span>✓ No server upload</span>
          </div>

          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-6 text-gray-500">
            Your images are processed directly in your browser.
            Files are not uploaded to our server.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="border-b border-blue-100 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="text-center">
            <div className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              How it works
            </div>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
              Convert {inputFormat} to {outputName} in 3 steps
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-gray-500">
              No software installation or complicated settings required.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-blue-100 bg-blue-50/50 p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 font-bold text-white">
                1
              </div>

              <h3 className="mt-5 text-lg font-semibold text-gray-900">
                Select your image
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Select a {inputFormat} image from your device or
                drag and drop it into the converter.
              </p>
            </div>

            <div className="rounded-2xl border border-purple-100 bg-purple-50/50 p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-600 font-bold text-white">
                2
              </div>

              <h3 className="mt-5 text-lg font-semibold text-gray-900">
                Convert the image
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Click the convert button. Your browser processes
                the image directly on your device.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-blue-50/50 p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 font-bold text-white">
                3
              </div>

              <h3 className="mt-5 text-lg font-semibold text-gray-900">
                Download the result
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Download your converted {outputName} image
                immediately after conversion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="border-b border-blue-100 bg-blue-50/40">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <div className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm sm:p-10">
            <div className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              About this converter
            </div>

            <h2 className="mt-3 text-2xl font-bold text-gray-900">
              {title}
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              {seo.intro}
            </p>

            <h2 className="mt-10 text-2xl font-bold text-gray-900">
              Why convert {inputFormat} to {outputName}?
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              {seo.why}
            </p>

            <h2 className="mt-10 text-2xl font-bold text-gray-900">
              Is this {inputFormat} to {outputName} converter free?
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Yes. This online {inputFormat} to {outputName} converter
              is free to use. You do not need to install software,
              create an account, or upload your images to a server.
            </p>

            <h2 className="mt-10 text-2xl font-bold text-gray-900">
              Are my images uploaded?
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              No. Your images are processed directly in your browser.
              The conversion happens on your device, so your original
              image does not need to be sent to our server.
            </p>

            <h2 className="mt-10 text-2xl font-bold text-gray-900">
              Is there a file size limit?
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              You can convert images up to 50MB. Images are also
              checked for dimensions and total pixel count to help
              prevent excessive browser memory usage during conversion.
            </p>
          </div>
        </div>
      </section>

      {/* Related Tools */}
      <section className="border-b border-blue-100 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="text-center">
            <div className="text-sm font-semibold uppercase tracking-wider text-purple-600">
              More tools
            </div>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
              Related Image Tools
            </h2>

            <p className="mt-3 text-gray-500">
              More free image conversion tools from ConvertImageFreely.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {relatedTools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/${tool.slug}`}
                className="group rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-gray-900 transition group-hover:text-blue-600">
                    {tool.title}
                  </h3>

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    →
                  </div>
                </div>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {tool.description}
                </p>

                <div className="mt-5 text-sm font-semibold text-blue-600 transition group-hover:text-purple-600">
                  Convert →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <div className="text-center">
            <div className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              FAQ
            </div>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">
                How do I convert {inputFormat} to {outputName}?
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                Select your {inputFormat} image, click the convert button,
                and then download the converted {outputName} image.
                The entire process takes place directly in your browser.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">
                Is this {inputFormat} to {outputName} converter free?
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                Yes. This {inputFormat} to {outputName} converter is free
                to use. No account or software installation is required.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">
                Are my images uploaded to a server?
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                No. Your images are processed directly on your device
                using your browser. The original image does not need to
                be uploaded to a server.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">
                What is the maximum image size?
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                Images up to 50MB are supported. Images are also limited
                to 10,000 × 10,000 pixels and 50 million total pixels
                to help prevent excessive browser memory usage.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">
                Can I use this converter on a phone?
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                Yes. The converter works in modern desktop and mobile
                browsers without requiring an app or additional software.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}