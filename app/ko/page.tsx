import Link from "next/link";
import ToolCard from "@/components/ToolCard";
import { imageTools } from "@/lib/tools/tools";
import type { Metadata } from "next";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://convertimagefreely.com";

export const metadata: Metadata = {
  title: "무료 온라인 이미지 도구",
  description:
    "JPG, PNG, WebP 이미지를 무료로 변환, 압축, 크기 조절, 자르기 및 편집할 수 있습니다. 모든 작업은 브라우저에서 바로 처리됩니다.",
  alternates: {
    canonical: `${BASE_URL}/ko`,
    languages: {
      en: BASE_URL,
      ko: `${BASE_URL}/ko`,
      ja: `${BASE_URL}/ja`,
      zh: `${BASE_URL}/zh`,
      es: `${BASE_URL}/es`,
      de: `${BASE_URL}/de`,
      fr: `${BASE_URL}/fr`,
      "x-default": BASE_URL,
    },
  },
  openGraph: {
    title: "무료 온라인 이미지 도구",
    description:
      "JPG, PNG, WebP 이미지를 브라우저에서 바로 변환하고 편집하세요.",
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
  return (
    <main>
      {/* =========================================================
          Hero
      ========================================================= */}
      <section className="relative overflow-hidden border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-24 lg:gap-16">
          {/* Left */}
          <div>
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm">
              100% 무료 · 브라우저 기반 · 회원가입 불필요
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              무료 이미지 도구,
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                브라우저에서 바로 사용하세요.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              이미지를 쉽게 변환하고, 압축하고, 크기를 조절하고, 자르고 편집하세요.
              프로그램 설치나 회원가입이 필요하지 않습니다.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/ko/jpg-to-png"
                className="rounded-lg bg-blue-600 px-7 py-3 text-center font-medium text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md"
              >
                이미지 변환 시작 →
              </Link>

              <a
                href="#tools"
                className="rounded-lg border border-blue-200 bg-white px-7 py-3 text-center font-medium text-gray-700 shadow-sm transition hover:border-blue-300 hover:bg-blue-50"
              >
                모든 도구 보기
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-500">
              <span>✓ 회원가입 불필요</span>
              <span>✓ 서버 업로드 없음</span>
              <span>✓ 파일은 기기에 그대로 유지</span>
            </div>
          </div>

          {/* Right - Tool Preview */}
          <div className="relative">
            <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-blue-200/40 via-purple-100/30 to-blue-100/40 blur-2xl" />

            <div className="relative rounded-3xl border border-blue-100 bg-white p-5 shadow-xl">
              <div className="flex items-center gap-2 border-b border-gray-100 pb-4">
                <div className="h-3 w-3 rounded-full bg-red-300" />
                <div className="h-3 w-3 rounded-full bg-yellow-300" />
                <div className="h-3 w-3 rounded-full bg-green-300" />
              </div>

              <div className="mt-5 rounded-2xl border-2 border-dashed border-blue-200 bg-blue-50/30 px-6 py-12 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-3xl">
                  ↑
                </div>

                <h2 className="mt-5 text-lg font-semibold text-gray-900">
                  이미지를 여기에 놓으세요
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  또는 클릭하여 파일 선택
                </p>
              </div>

              <div className="mt-5 grid grid-cols-4 gap-3">
                <div className="rounded-xl border border-gray-100 bg-gray-50 p-3 text-center">
                  <div className="text-lg">JPG</div>
                  <div className="mt-1 text-xs text-gray-500">변환</div>
                </div>

                <div className="rounded-xl border border-gray-100 bg-gray-50 p-3 text-center">
                  <div className="text-lg">PNG</div>
                  <div className="mt-1 text-xs text-gray-500">변환</div>
                </div>

                <div className="rounded-xl border border-gray-100 bg-gray-50 p-3 text-center">
                  <div className="text-lg">WEBP</div>
                  <div className="mt-1 text-xs text-gray-500">변환</div>
                </div>

                <div className="rounded-xl border border-gray-100 bg-gray-50 p-3 text-center">
                  <div className="text-lg">+</div>
                  <div className="mt-1 text-xs text-gray-500">더 보기</div>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap justify-center gap-2 text-xs text-blue-700">
                <span className="rounded-full bg-blue-50 px-3 py-1.5">
                  변환
                </span>

                <span className="rounded-full bg-purple-50 px-3 py-1.5">
                  압축
                </span>

                <span className="rounded-full bg-blue-50 px-3 py-1.5">
                  크기 조절
                </span>

                <span className="rounded-full bg-purple-50 px-3 py-1.5">
                  편집
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          Tool Categories
      ========================================================= */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="mb-10 text-center">
          <div className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            무엇을 하시겠어요?
          </div>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
            도구 카테고리 선택
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-gray-500">
            이미지로 무엇을 하고 싶은지 선택하면 필요한 도구를 빠르게 찾을 수 있습니다.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            href="#tools"
            className="group rounded-2xl border border-blue-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl text-blue-600">
              ↔
            </div>

            <h3 className="mt-5 text-lg font-semibold text-gray-900">
              변환
            </h3>

            <p className="mt-2 leading-6 text-gray-600">
              JPG, PNG, WebP 등 다양한 이미지 포맷으로 변환하세요.
            </p>

            <span className="mt-5 inline-block text-sm font-semibold text-blue-600 group-hover:text-blue-700">
              도구 보기 →
            </span>
          </Link>

          <Link
            href="/ko/compress-image"
            className="group rounded-2xl border border-green-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-green-200 hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-xl text-green-600">
              ↓
            </div>

            <h3 className="mt-5 text-lg font-semibold text-gray-900">
              압축
            </h3>

            <p className="mt-2 leading-6 text-gray-600">
              좋은 화질을 유지하면서 이미지 파일 크기를 줄이세요.
            </p>

            <span className="mt-5 inline-block text-sm font-semibold text-green-600 group-hover:text-green-700">
              도구 보기 →
            </span>
          </Link>

          <Link
            href="/ko/resize-image"
            className="group rounded-2xl border border-purple-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-purple-200 hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-xl text-purple-600">
              ↗
            </div>

            <h3 className="mt-5 text-lg font-semibold text-gray-900">
              크기 조절
            </h3>

            <p className="mt-2 leading-6 text-gray-600">
              픽셀 또는 비율을 사용해 이미지 크기를 변경하세요.
            </p>

            <span className="mt-5 inline-block text-sm font-semibold text-purple-600 group-hover:text-purple-700">
              도구 보기 →
            </span>
          </Link>

          <Link
            href="/ko/crop-image"
            className="group rounded-2xl border border-orange-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-xl text-orange-600">
              ⌗
            </div>

            <h3 className="mt-5 text-lg font-semibold text-gray-900">
              자르기
            </h3>

            <p className="mt-2 leading-6 text-gray-600">
              필요한 영역만 선택하여 이미지를 간편하게 자르세요.
            </p>

            <span className="mt-5 inline-block text-sm font-semibold text-orange-600 group-hover:text-orange-700">
              도구 보기 →
            </span>
          </Link>

          <Link
            href="/ko/rotate-image"
            className="group rounded-2xl border border-cyan-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-cyan-200 hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-100 text-xl text-cyan-600">
              ↻
            </div>

            <h3 className="mt-5 text-lg font-semibold text-gray-900">
              회전 · 뒤집기
            </h3>

            <p className="mt-2 leading-6 text-gray-600">
              몇 번의 클릭으로 이미지를 회전하거나 뒤집으세요.
            </p>

            <span className="mt-5 inline-block text-sm font-semibold text-cyan-600 group-hover:text-cyan-700">
              도구 보기 →
            </span>
          </Link>

          <Link
            href="/ko/batch-converter"
            className="group rounded-2xl border border-pink-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-pink-200 hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-100 text-xl text-pink-600">
              +
            </div>

            <h3 className="mt-5 text-lg font-semibold text-gray-900">
              일괄 변환
            </h3>

            <p className="mt-2 leading-6 text-gray-600">
              여러 이미지를 한 번에 처리하여 시간을 절약하세요.
            </p>

            <span className="mt-5 inline-block text-sm font-semibold text-pink-600 group-hover:text-pink-700">
              도구 보기 →
            </span>
          </Link>
        </div>
      </section>

      {/* =========================================================
          Popular Tools
      ========================================================= */}
      <section
        id="tools"
        className="mx-auto max-w-6xl px-6 py-20 md:py-24"
      >
        <div className="mb-10 text-center">
          <div className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            인기 도구
          </div>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
            인기 이미지 도구
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-gray-500">
            가장 많이 사용하는 이미지 변환 도구를 빠르게 이용하세요.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {imageTools.map((tool) => (
            <ToolCard
              key={tool.slug}
              title={tool.title}
              description={tool.description}
              href={`/ko/${tool.slug}`}
            />
          ))}
        </div>
      </section>

      {/* =========================================================
          Why ConvertImageFreely
      ========================================================= */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="mb-12 text-center">
          <div className="text-sm font-semibold uppercase tracking-wider text-purple-600">
            왜 ConvertImageFreely인가요?
          </div>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            번거로움 없는 간단한 이미지 도구
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            복잡한 프로그램이나 불필요한 설치 없이 이미지 작업에 필요한 기능을 제공합니다.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-blue-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl text-blue-600">
              ⚡
            </div>

            <h3 className="mt-5 text-lg font-semibold text-gray-900">
              100% 브라우저 기반
            </h3>

            <p className="mt-2 leading-7 text-gray-600">
              이미지 처리는 브라우저에서 직접 이루어집니다. 설치할 프로그램이나 데스크톱 소프트웨어가 필요하지 않습니다.
            </p>
          </div>

          <div className="rounded-2xl border border-purple-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-xl text-purple-600">
              ✓
            </div>

            <h3 className="mt-5 text-lg font-semibold text-gray-900">
              무료로 사용
            </h3>

            <p className="mt-2 leading-7 text-gray-600">
              계정을 만들거나 프로그램을 설치하지 않고 기본 이미지 처리 기능을 무료로 이용할 수 있습니다.
            </p>
          </div>

          <div className="rounded-2xl border border-blue-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl text-blue-600">
              🔒
            </div>

            <h3 className="mt-5 text-lg font-semibold text-gray-900">
              개인정보 보호
            </h3>

            <p className="mt-2 leading-7 text-gray-600">
              이미지는 브라우저에서 로컬로 처리되므로 원격 서버에 업로드할 필요가 없습니다.
            </p>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="grid items-center gap-8 px-7 py-10 md:grid-cols-[auto_1fr] md:px-10">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-3xl">
              🔒
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900">
                이미지 파일은 내 기기에 그대로 유지됩니다.
              </h3>

              <p className="mt-2 max-w-3xl leading-7 text-gray-600">
                ConvertImageFreely는 브라우저에서 직접 이미지를 처리합니다.
                파일을 서버에 업로드할 필요가 없기 때문에 간단하고 안전하게 이미지 작업을 할 수 있습니다.
              </p>

              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-blue-700">
                <span>Private</span>
                <span>Secure</span>
                <span>Browser-based</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-20 text-center">
        <div className="relative mx-auto max-w-3xl">
          <div className="text-sm font-semibold uppercase tracking-wider text-blue-100">
            시작하기
          </div>

          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            이미지로 무엇을 하고 싶으신가요?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-blue-100">
            원하는 도구를 선택하고 바로 시작하세요. 모든 작업은 브라우저에서 처리됩니다.
          </p>

          <a
            href="#tools"
            className="mt-8 inline-block rounded-lg bg-white px-7 py-3 font-medium text-blue-700 shadow-sm transition hover:bg-blue-50 hover:shadow-md"
          >
            모든 도구 보기 →
          </a>
        </div>
      </section>

      {/* =========================================================
          Image Guides
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="mb-9 text-center">
            <div className="text-sm font-semibold uppercase tracking-wider text-purple-600">
              이미지 가이드
            </div>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
              이미지에 대해 더 알아보기
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-gray-500">
              실용적인 가이드와 포맷 비교, 실제 이미지 테스트를 확인해보세요.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Format Guide */}
            <Link
              href="/guides/image-format-comparison"
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
            >
              <div className="grid h-full sm:grid-cols-[145px_1fr]">
                <div className="h-44 overflow-hidden bg-gray-100 sm:h-full">
                  <img
                    src="/guides/image-format-comparison/landscape.jpg"
                    alt="JPG, PNG, WebP 이미지 포맷 비교에 사용된 이미지"
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-col justify-center p-6">
                  <div className="text-xs font-semibold uppercase tracking-wide text-blue-600">
                    이미지 포맷 가이드
                  </div>

                  <h3 className="mt-2 text-xl font-bold text-gray-900">
                    JPG vs PNG vs WebP
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    동일한 테스트 이미지를 사용해 파일 크기를 비교하고 JPG, PNG, WebP의 차이를 알아보세요.
                  </p>

                  <span className="mt-4 text-sm font-semibold text-blue-600 group-hover:text-blue-700">
                    가이드 보기 →
                  </span>
                </div>
              </div>
            </Link>

            {/* Compression Test */}
            <Link
              href="/guides/image-compression-test"
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-purple-200 hover:shadow-md"
            >
              <div className="grid h-full sm:grid-cols-[145px_1fr]">
                <div className="h-44 overflow-hidden bg-gray-100 sm:h-full">
                  <img
                    src="/guides/image-compression-test/landscape-jpg-q80.jpg"
                    alt="JPG와 WebP 이미지 압축 테스트에 사용된 이미지"
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-col justify-center p-6">
                  <div className="text-xs font-semibold uppercase tracking-wide text-purple-600">
                    압축 테스트
                  </div>

                  <h3 className="mt-2 text-xl font-bold text-gray-900">
                    이미지 압축 테스트
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    세 가지 테스트 이미지에서 품질 90, 80, 70에 따른 JPG와 WebP의 파일 크기 변화를 확인해보세요.
                  </p>

                  <span className="mt-4 text-sm font-semibold text-purple-600 group-hover:text-purple-700">
                    테스트 보기 →
                  </span>
                </div>
              </div>
            </Link>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/guides"
              className="text-sm font-semibold text-gray-600 transition hover:text-blue-600"
            >
              모든 가이드 보기 →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}