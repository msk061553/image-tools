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
      <section className="px-6 pb-20 pt-16">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-5 inline-flex rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-600">
            Free · Browser-based · No upload
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            {title}
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            {description}
          </p>

          <div className="mt-10 text-left">
            <UploadBox
              inputFormat={inputFormat}
              outputFormat={outputFormat}
            />
          </div>

          <p className="mx-auto mt-8 max-w-2xl text-sm leading-6 text-gray-500">
            Your images are processed directly in your browser.
            Files are not uploaded to our server.
          </p>
        </div>
      </section>

      <section className="border-t bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-2xl font-bold text-gray-900">
            How to convert {inputFormat} to {outputName}
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div>
              <div className="text-sm font-medium text-gray-500">
                Step 1
              </div>

              <h3 className="mt-2 text-lg font-semibold text-gray-900">
                Select your image
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Select a {inputFormat} image from your device or
                drag and drop it into the converter.
              </p>
            </div>

            <div>
              <div className="text-sm font-medium text-gray-500">
                Step 2
              </div>

              <h3 className="mt-2 text-lg font-semibold text-gray-900">
                Convert the image
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Click the convert button. Your browser processes
                the image directly on your device.
              </p>
            </div>

            <div>
              <div className="text-sm font-medium text-gray-500">
                Step 3
              </div>

              <h3 className="mt-2 text-lg font-semibold text-gray-900">
                Download the result
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Download your converted {outputName} image
                immediately after conversion.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-2xl font-bold text-gray-900">
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
      </section>

      <section className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-bold text-gray-900">
            Related Image Tools
          </h2>

          <p className="mt-2 text-gray-500">
            More free image conversion tools.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {relatedTools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/${tool.slug}`}
                className="rounded-2xl border border-gray-200 p-6 transition hover:-translate-y-1 hover:border-gray-400 hover:shadow-sm"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {tool.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  {tool.description}
                </p>

                <div className="mt-4 text-sm font-medium text-gray-900">
                  Convert →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-2xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>

          <div className="mt-8 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                How do I convert {inputFormat} to {outputName}?
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                Select your {inputFormat} image, click the convert button,
                and then download the converted {outputName} image.
                The entire process takes place directly in your browser.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Is this {inputFormat} to {outputName} converter free?
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                Yes. This {inputFormat} to {outputName} converter is free
                to use. No account or software installation is required.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Are my images uploaded to a server?
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                No. Your images are processed directly on your device
                using your browser. The original image does not need to
                be uploaded to a server.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                What is the maximum image size?
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                Images up to 50MB are supported. Images are also limited
                to 10,000 × 10,000 pixels and 50 million total pixels
                to help prevent excessive browser memory usage.
              </p>
            </div>

            <div>
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