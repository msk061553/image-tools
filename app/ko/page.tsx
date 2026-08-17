import Link from "next/link";
import ToolCard from "@/components/ToolCard";
import { imageTools } from "@/lib/tools/tools";
import { getTranslations } from "@/lib/i18n";
import type { Metadata } from "next";

function replaceVariables(
  text: string,
  input: string,
  output: string
) {
  return text
    .replaceAll("{input}", input)
    .replaceAll("{output}", output);
}

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://convertimagefreely.com";

export const metadata: Metadata = {
  title: "무료 온라인 이미지 도구",
  description:
    "JPG, PNG, WebP 이미지를 브라우저에서 직접 변환할 수 있는 무료 온라인 이미지 도구입니다. 이미지 파일을 서버에 업로드할 필요가 없습니다.",

  alternates: {
    canonical: `${BASE_URL}/ko`,
    languages: {
      en: BASE_URL,
      ko: `${BASE_URL}/ko`,
      ja: `${BASE_URL}/ja`,
      zh: `${BASE_URL}/zh`,
      es: `${BASE_URL}/es`,
      de: `${BASE_URL}/de`,
      "x-default": BASE_URL,
    },
  },

  openGraph: {
    title: "무료 온라인 이미지 도구",
    description:
      "JPG, PNG, WebP 이미지를 브라우저에서 직접 변환하세요.",
    type: "website",
    url: `${BASE_URL}/ko`,
    locale: "ko_KR",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function KoreanHome() {
  const t = getTranslations("ko");

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center md:py-32">
          <div className="inline-flex items-center rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm">
            {t.home.badge}
          </div>

          <h1 className="mx-auto mt-6 max-w-4xl text-5xl font-bold tracking-tight text-gray-900 md:text-6xl">
            브라우저에서 바로 사용하는
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              간편한 이미지 도구
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            {t.home.description}
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/ko/jpg-to-png"
              className="rounded-lg bg-blue-600 px-7 py-3 font-medium text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md"
            >
              {t.home.startConverting}
            </Link>

            <a
              href="#tools"
              className="rounded-lg border border-blue-200 bg-white px-7 py-3 font-medium text-gray-700 shadow-sm transition hover:border-blue-300 hover:bg-blue-50"
            >
              {t.home.viewAllTools}
            </a>
          </div>

          {/* Trust points */}
          <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-gray-500">
            <span>✓ 계정이 필요하지 않습니다</span>
            <span>✓ 서버에 업로드하지 않습니다</span>
            <span>✓ 무료로 사용할 수 있습니다</span>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section
        id="tools"
        className="mx-auto max-w-6xl px-6 py-20 md:py-24"
      >
        <div className="mb-10 text-center">
          <div className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            {t.home.toolsTitle}
          </div>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
            이미지를 간편하게 변환하세요
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-gray-500">
            {t.home.toolsDescription}
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {imageTools.map((tool) => {
            const outputName =
              tool.outputFormat === "jpeg"
                ? "JPG"
                : tool.outputFormat.toUpperCase();

            const title = replaceVariables(
              t.converter.toolTitle,
              tool.inputFormat,
              outputName
            );

            const description = replaceVariables(
              t.converter.toolDescription,
              tool.inputFormat,
              outputName
            );

            return (
              <ToolCard
                key={tool.slug}
                title={title}
                description={description}
                href={`/ko/${tool.slug}`}
              />
            );
          })}
        </div>
      </section>

      {/* Privacy */}
      <section className="border-y border-blue-100 bg-blue-50/50">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-2xl">
            🔒
          </div>

          <h2 className="mt-5 text-2xl font-bold text-gray-900">
            {t.home.privacyTitle}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
            {t.home.privacyDescription}
          </p>

          <div className="mt-6 text-sm font-medium text-blue-700">
            비공개 · 안전한 처리 · 브라우저 기반
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="mb-12 text-center">
          <div className="text-sm font-semibold uppercase tracking-wider text-purple-600">
            ConvertImageFreely의 장점
          </div>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
            복잡한 과정 없이 간편하게
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-blue-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
              ⚡
            </div>

            <h3 className="mt-5 text-lg font-semibold text-gray-900">
              {t.home.browserBased}
            </h3>

            <p className="mt-2 leading-7 text-gray-600">
              {t.home.browserBasedDescription}
            </p>
          </div>

          <div className="rounded-2xl border border-purple-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
              ✓
            </div>

            <h3 className="mt-5 text-lg font-semibold text-gray-900">
              {t.home.freeToUse}
            </h3>

            <p className="mt-2 leading-7 text-gray-600">
              {t.home.freeToUseDescription}
            </p>
          </div>

          <div className="rounded-2xl border border-blue-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
              🔒
            </div>

            <h3 className="mt-5 text-lg font-semibold text-gray-900">
              {t.home.fastProcessing}
            </h3>

            <p className="mt-2 leading-7 text-gray-600">
              {t.home.fastProcessingDescription}
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-20 text-center">
        <div className="relative mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-white">
            {t.home.ctaTitle}
          </h2>

          <p className="mt-3 text-blue-100">
            {t.home.ctaDescription}
          </p>

          <Link
            href="/ko/jpg-to-png"
            className="mt-8 inline-block rounded-lg bg-white px-7 py-3 font-medium text-blue-700 shadow-sm transition hover:bg-blue-50 hover:shadow-md"
          >
            {t.home.tryJpgToPng}
          </Link>
        </div>
      </section>
    </main>
  );
}