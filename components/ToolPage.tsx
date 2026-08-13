import Link from "next/link";
import UploadBox from "@/components/UploadBox";
import { imageTools } from "@/lib/tools/tools";
import { getTranslations, type Locale } from "@/lib/i18n";

type ToolPageProps = {
  slug: string;
  title: string;
  description: string;
  inputFormat: "JPG" | "PNG" | "WebP";
  outputFormat: "png" | "jpeg" | "webp";
  locale?: Locale;
};

function replaceVariables(
  text: string,
  input: string,
  output: string
) {
  return text
    .replaceAll("{input}", input)
    .replaceAll("{output}", output);
}

export default function ToolPage({
  slug,
  title,
  description,
  inputFormat,
  outputFormat,
  locale = "en",
}: ToolPageProps) {
  const t = getTranslations(locale);

  const outputName =
    outputFormat === "jpeg"
      ? "JPG"
      : outputFormat.toUpperCase();

  const toolIntro = replaceVariables(
    t.converter.toolIntro,
    inputFormat,
    outputName
  );

  const toolWhy = replaceVariables(
    t.converter.toolWhy,
    inputFormat,
    outputName
  );

  const relatedTools = imageTools
    .filter((tool) => tool.slug !== slug)
    .filter(
      (tool) =>
        tool.inputFormat === inputFormat ||
        tool.outputFormat === outputFormat
    )
    .slice(0, 3);

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="mx-auto max-w-5xl px-6 pb-16 pt-16 md:pb-20 md:pt-20">
          <div className="text-center">
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm">
              {t.converter.freeBrowserBased}
            </div>

            <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              {title}
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
              {description}
            </p>
          </div>

          {/* Converter */}
          <div className="mt-10 rounded-3xl border border-blue-100 bg-white p-4 shadow-lg shadow-blue-100/50 md:p-6">
            <UploadBox
              inputFormat={inputFormat}
              outputFormat={outputFormat}
              locale={locale}
            />
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-6 text-gray-500">
            {t.converter.yourImagesProcessed}
          </p>
        </div>
      </section>

      {/* How to convert */}
      <section className="border-b border-blue-100 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="mb-10 text-center">
            <div className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              {t.converter.howToConvert
                .replace("{input}", inputFormat)
                .replace("{output}", outputName)}
            </div>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
              {locale === "ko"
                ? "간단한 3단계로 변환하세요"
                : "Convert your image in three simple steps"}
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Step 1 */}
            <div className="rounded-2xl border border-blue-100 bg-blue-50/40 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 font-semibold text-blue-600">
                1
              </div>

              <div className="mt-5 text-sm font-medium text-blue-600">
                {t.converter.step1}
              </div>

              <h3 className="mt-2 text-lg font-semibold text-gray-900">
                {t.converter.selectImage}
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                {t.converter.selectImageDescription.replace(
                  "{format}",
                  inputFormat
                )}
              </p>
            </div>

            {/* Step 2 */}
            <div className="rounded-2xl border border-purple-100 bg-purple-50/40 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100 font-semibold text-purple-600">
                2
              </div>

              <div className="mt-5 text-sm font-medium text-purple-600">
                {t.converter.step2}
              </div>

              <h3 className="mt-2 text-lg font-semibold text-gray-900">
                {t.converter.convertImage}
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                {t.converter.convertImageDescription}
              </p>
            </div>

            {/* Step 3 */}
            <div className="rounded-2xl border border-blue-100 bg-blue-50/40 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 font-semibold text-blue-600">
                3
              </div>

              <div className="mt-5 text-sm font-medium text-blue-600">
                {t.converter.step3}
              </div>

              <h3 className="mt-2 text-lg font-semibold text-gray-900">
                {t.converter.downloadResult}
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                {t.converter.downloadResultDescription.replace(
                  "{format}",
                  outputName
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy */}
      <section className="border-y border-blue-100 bg-blue-50/50">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-2xl">
            🔒
          </div>

          <h2 className="mt-5 text-2xl font-bold text-gray-900">
            {t.converter.areImagesUploaded}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
            {t.converter.notUploadedDescription}
          </p>

          <div className="mt-6 text-sm font-medium text-blue-700">
            {locale === "ko"
              ? "비공개 · 안전한 처리 · 브라우저 기반"
              : "Private · Secure · Browser-based"}
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-24">
          <div className="mb-10 text-center">
            <div className="text-sm font-semibold uppercase tracking-wider text-purple-600">
              {title}
            </div>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
              {locale === "ko"
                ? "이미지 변환에 대해 알아보기"
                : "Everything you need to know"}
            </h2>
          </div>

          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {title}
              </h2>

              <p className="mt-4 leading-8 text-gray-600">
                {toolIntro}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {t.converter.whyConvert
                  .replace("{input}", inputFormat)
                  .replace("{output}", outputName)}
              </h2>

              <p className="mt-4 leading-8 text-gray-600">
                {toolWhy}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {t.converter.isFree
                  .replace("{input}", inputFormat)
                  .replace("{output}", outputName)}
              </h2>

              <p className="mt-4 leading-8 text-gray-600">
                {t.converter.freeDescription
                  .replace("{input}", inputFormat)
                  .replace("{output}", outputName)}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {t.converter.fileSizeLimit}
              </h2>

              <p className="mt-4 leading-8 text-gray-600">
                {t.converter.fileSizeDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Tools */}
      <section className="border-t border-blue-100 bg-blue-50/30">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="mb-10 text-center">
            <div className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              {t.converter.relatedTools}
            </div>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
              {t.converter.relatedDescription}
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {relatedTools.map((tool, index) => {
              const relatedOutput =
                tool.outputFormat === "jpeg"
                  ? "JPG"
                  : tool.outputFormat.toUpperCase();

              const relatedTitle =
                locale === "ko"
                  ? replaceVariables(
                      t.converter.toolTitle,
                      tool.inputFormat,
                      relatedOutput
                    )
                  : tool.title;

              const relatedDescription =
                locale === "ko"
                  ? replaceVariables(
                      t.converter.toolDescription,
                      tool.inputFormat,
                      relatedOutput
                    )
                  : tool.description;

              return (
                <Link
                  key={tool.slug}
                  href={
                    locale === "en"
                      ? `/${tool.slug}`
                      : `/${locale}/${tool.slug}`
                  }
                  className={`group rounded-2xl border bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md ${
                    index === 1
                      ? "border-purple-100 hover:border-purple-300"
                      : "border-blue-100 hover:border-blue-300"
                  }`}
                >
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                      index === 1
                        ? "bg-purple-100 text-purple-600"
                        : "bg-blue-100 text-blue-600"
                    }`}
                  >
                    →
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-gray-900">
                    {relatedTitle}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {relatedDescription}
                  </p>

                  <div
                    className={`mt-5 text-sm font-semibold ${
                      index === 1
                        ? "text-purple-600"
                        : "text-blue-600"
                    }`}
                  >
                    {t.converter.convert} →
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-24">
          <div className="mb-10 text-center">
            <div className="text-sm font-semibold uppercase tracking-wider text-purple-600">
              FAQ
            </div>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
              {t.converter.faq}
            </h2>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-blue-100 bg-blue-50/30 p-6">
              <h3 className="text-lg font-semibold text-gray-900">
                {t.converter.howDoIConvert
                  .replace("{input}", inputFormat)
                  .replace("{output}", outputName)}
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                {t.converter.howDoIConvertDescription
                  .replace("{input}", inputFormat)
                  .replace("{output}", outputName)}
              </p>
            </div>

            <div className="rounded-2xl border border-purple-100 bg-purple-50/30 p-6">
              <h3 className="text-lg font-semibold text-gray-900">
                {t.converter.isFree
                  .replace("{input}", inputFormat)
                  .replace("{output}", outputName)}
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                {t.converter.freeDescription
                  .replace("{input}", inputFormat)
                  .replace("{output}", outputName)}
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-blue-50/30 p-6">
              <h3 className="text-lg font-semibold text-gray-900">
                {t.converter.areImagesUploaded}
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                {t.converter.notUploadedDescription}
              </p>
            </div>

            <div className="rounded-2xl border border-purple-100 bg-purple-50/30 p-6">
              <h3 className="text-lg font-semibold text-gray-900">
                {t.converter.maximumImageSize}
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                {t.converter.maximumImageSizeDescription}
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-blue-50/30 p-6">
              <h3 className="text-lg font-semibold text-gray-900">
                {t.converter.phoneSupport}
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                {t.converter.phoneSupportDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-20 text-center">
        <div className="relative mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-white">
            {locale === "ko"
              ? "이미지 변환을 시작하세요"
              : "Start converting your image"}
          </h2>

          <p className="mt-3 text-blue-100">
            {locale === "ko"
              ? "원하는 이미지를 선택하고 무료로 변환하세요."
              : "Choose your image and convert it for free."}
          </p>

          <Link
            href={
              locale === "ko"
                ? "/ko/jpg-to-png"
                : "/jpg-to-png"
            }
            className="mt-8 inline-block rounded-lg bg-white px-7 py-3 font-medium text-blue-700 shadow-sm transition hover:bg-blue-50 hover:shadow-md"
          >
            {locale === "ko"
              ? "JPG를 PNG로 변환"
              : "Try JPG to PNG"}
          </Link>
        </div>
      </section>
    </main>
  );
}