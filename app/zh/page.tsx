import Link from "next/link";
import ToolCard from "@/components/ToolCard";
import { imageTools } from "@/lib/tools/tools";
import type { Metadata } from "next";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://convertimagefreely.com";

export const metadata: Metadata = {
  title: "免费在线图片工具",
  description:
    "免费转换、压缩、调整大小和裁剪 JPG、PNG、WebP 图片。所有图片处理均直接在浏览器中完成。",
  alternates: {
    canonical: `${BASE_URL}/zh`,
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
    title: "免费在线图片工具",
    description: "直接在浏览器中转换和编辑 JPG、PNG、WebP 图片。",
    type: "website",
    url: `${BASE_URL}/zh`,
    locale: "zh_CN",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ChineseHome() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-24 lg:gap-16">
          <div>
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm">
              100% 免费 · 浏览器处理 · 无需注册
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              免费图片工具，
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                直接在浏览器中使用。
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              轻松转换、压缩、调整大小、裁剪和编辑图片。无需安装软件，也无需注册账号。
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/zh/jpg-to-png"
                className="rounded-lg bg-blue-600 px-7 py-3 text-center font-medium text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md"
              >
                开始转换图片 →
              </Link>

              <a
                href="#tools"
                className="rounded-lg border border-blue-200 bg-white px-7 py-3 text-center font-medium text-gray-700 shadow-sm transition hover:border-blue-300 hover:bg-blue-50"
              >
                查看所有工具
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-500">
              <span>✓ 无需注册</span>
              <span>✓ 无需上传到服务器</span>
              <span>✓ 文件保留在您的设备上</span>
            </div>
          </div>

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
                  将图片拖放到这里
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  或点击选择文件
                </p>
              </div>

              <div className="mt-5 grid grid-cols-4 gap-3">
                <div className="rounded-xl border border-gray-100 bg-gray-50 p-3 text-center">
                  <div className="text-lg">JPG</div>
                  <div className="mt-1 text-xs text-gray-500">转换</div>
                </div>

                <div className="rounded-xl border border-gray-100 bg-gray-50 p-3 text-center">
                  <div className="text-lg">PNG</div>
                  <div className="mt-1 text-xs text-gray-500">转换</div>
                </div>

                <div className="rounded-xl border border-gray-100 bg-gray-50 p-3 text-center">
                  <div className="text-lg">WEBP</div>
                  <div className="mt-1 text-xs text-gray-500">转换</div>
                </div>

                <div className="rounded-xl border border-gray-100 bg-gray-50 p-3 text-center">
                  <div className="text-lg">+</div>
                  <div className="mt-1 text-xs text-gray-500">更多</div>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap justify-center gap-2 text-xs text-blue-700">
                <span className="rounded-full bg-blue-50 px-3 py-1.5">转换</span>
                <span className="rounded-full bg-purple-50 px-3 py-1.5">压缩</span>
                <span className="rounded-full bg-blue-50 px-3 py-1.5">调整大小</span>
                <span className="rounded-full bg-purple-50 px-3 py-1.5">编辑</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="mb-10 text-center">
          <div className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            您想做什么？
          </div>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
            选择工具类别
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-gray-500">
            选择您想对图片进行的操作，快速找到合适的工具。
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
              格式转换
            </h3>

            <p className="mt-2 leading-6 text-gray-600">
              在 JPG、PNG、WebP 等图片格式之间进行转换。
            </p>

            <span className="mt-5 inline-block text-sm font-semibold text-blue-600">
              查看工具 →
            </span>
          </Link>

          <Link
            href="/zh/compress-image"
            className="group rounded-2xl border border-green-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-green-200 hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-xl text-green-600">
              ↓
            </div>

            <h3 className="mt-5 text-lg font-semibold text-gray-900">
              压缩
            </h3>

            <p className="mt-2 leading-6 text-gray-600">
              在保持良好画质的同时减小图片文件大小。
            </p>

            <span className="mt-5 inline-block text-sm font-semibold text-green-600">
              查看工具 →
            </span>
          </Link>

          <Link
            href="/zh/resize-image"
            className="group rounded-2xl border border-purple-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-purple-200 hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-xl text-purple-600">
              ↗
            </div>

            <h3 className="mt-5 text-lg font-semibold text-gray-900">
              调整大小
            </h3>

            <p className="mt-2 leading-6 text-gray-600">
              按像素或百分比调整图片尺寸。
            </p>

            <span className="mt-5 inline-block text-sm font-semibold text-purple-600">
              查看工具 →
            </span>
          </Link>

          <Link
            href="/zh/crop-image"
            className="group rounded-2xl border border-orange-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-xl text-orange-600">
              ⌗
            </div>

            <h3 className="mt-5 text-lg font-semibold text-gray-900">
              裁剪
            </h3>

            <p className="mt-2 leading-6 text-gray-600">
              选择需要的区域并轻松裁剪图片。
            </p>

            <span className="mt-5 inline-block text-sm font-semibold text-orange-600">
              查看工具 →
            </span>
          </Link>

          <Link
            href="/zh/rotate-image"
            className="group rounded-2xl border border-cyan-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-cyan-200 hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-100 text-xl text-cyan-600">
              ↻
            </div>

            <h3 className="mt-5 text-lg font-semibold text-gray-900">
              旋转和翻转
            </h3>

            <p className="mt-2 leading-6 text-gray-600">
              通过几次点击旋转或翻转图片。
            </p>

            <span className="mt-5 inline-block text-sm font-semibold text-cyan-600">
              查看工具 →
            </span>
          </Link>

          <Link
            href="/zh/batch-converter"
            className="group rounded-2xl border border-pink-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-pink-200 hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-100 text-xl text-pink-600">
              +
            </div>

            <h3 className="mt-5 text-lg font-semibold text-gray-900">
              批量转换
            </h3>

            <p className="mt-2 leading-6 text-gray-600">
              一次处理多张图片，节省时间。
            </p>

            <span className="mt-5 inline-block text-sm font-semibold text-pink-600">
              查看工具 →
            </span>
          </Link>
        </div>
      </section>

      <section id="tools" className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="mb-10 text-center">
          <div className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            热门工具
          </div>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
            热门图片工具
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-gray-500">
            快速访问最常用的图片格式转换工具。
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {imageTools.map((tool) => (
            <ToolCard
              key={tool.slug}
              title={tool.title}
              description={tool.description}
              href={`/zh/${tool.slug}`}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="mb-12 text-center">
          <div className="text-sm font-semibold uppercase tracking-wider text-purple-600">
            为什么选择 ConvertImageFreely？
          </div>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            简单易用的图片工具
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            无需安装复杂软件或进行繁琐设置，即可完成常见图片处理。
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-blue-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl text-blue-600">
              ⚡
            </div>

            <h3 className="mt-5 text-lg font-semibold text-gray-900">
              100% 浏览器处理
            </h3>

            <p className="mt-2 leading-7 text-gray-600">
              图片处理直接在浏览器中完成，无需安装桌面软件。
            </p>
          </div>

          <div className="rounded-2xl border border-purple-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-xl text-purple-600">
              ✓
            </div>

            <h3 className="mt-5 text-lg font-semibold text-gray-900">
              免费使用
            </h3>

            <p className="mt-2 leading-7 text-gray-600">
              无需注册账号或安装软件即可免费使用基本图片处理功能。
            </p>
          </div>

          <div className="rounded-2xl border border-blue-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl text-blue-600">
              🔒
            </div>

            <h3 className="mt-5 text-lg font-semibold text-gray-900">
              隐私保护
            </h3>

            <p className="mt-2 leading-7 text-gray-600">
              图片在浏览器本地处理，因此无需上传到远程服务器。
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
                您的图片会保留在您的设备上。
              </h3>

              <p className="mt-2 max-w-3xl leading-7 text-gray-600">
                ConvertImageFreely直接在浏览器中处理图片。无需将文件上传到服务器，为您提供简单、私密的图片处理方式。
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

      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-20 text-center">
        <div className="relative mx-auto max-w-3xl">
          <div className="text-sm font-semibold uppercase tracking-wider text-blue-100">
            开始使用
          </div>

          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            您想对图片做什么？
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-blue-100">
            选择一个工具即可开始。所有操作都直接在浏览器中完成。
          </p>

          <a
            href="#tools"
            className="mt-8 inline-block rounded-lg bg-white px-7 py-3 font-medium text-blue-700 shadow-sm transition hover:bg-blue-50 hover:shadow-md"
          >
            查看所有工具 →
          </a>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="mb-9 text-center">
            <div className="text-sm font-semibold uppercase tracking-wider text-purple-600">
              图片指南
            </div>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
              了解更多图片知识
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-gray-500">
              查看实用指南、格式比较和真实图片测试。
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Link
              href="/guides/image-format-comparison"
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
            >
              <div className="grid h-full sm:grid-cols-[145px_1fr]">
                <div className="h-44 overflow-hidden bg-gray-100 sm:h-full">
                  <img
                    src="/guides/image-format-comparison/landscape.jpg"
                    alt="JPG、PNG、WebP格式比较图片"
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-col justify-center p-6">
                  <div className="text-xs font-semibold uppercase tracking-wide text-blue-600">
                    图片格式指南
                  </div>

                  <h3 className="mt-2 text-xl font-bold text-gray-900">
                    JPG vs PNG vs WebP
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    使用相同测试图片比较文件大小，了解JPG、PNG和WebP之间的差异。
                  </p>

                  <span className="mt-4 text-sm font-semibold text-blue-600">
                    阅读指南 →
                  </span>
                </div>
              </div>
            </Link>

            <Link
              href="/guides/image-compression-test"
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-purple-200 hover:shadow-md"
            >
              <div className="grid h-full sm:grid-cols-[145px_1fr]">
                <div className="h-44 overflow-hidden bg-gray-100 sm:h-full">
                  <img
                    src="/guides/image-compression-test/landscape-jpg-q80.jpg"
                    alt="JPG和WebP图片压缩测试"
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-col justify-center p-6">
                  <div className="text-xs font-semibold uppercase tracking-wide text-purple-600">
                    压缩测试
                  </div>

                  <h3 className="mt-2 text-xl font-bold text-gray-900">
                    图片压缩测试
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    使用三种测试图片比较质量90、80和70下JPG与WebP的文件大小变化。
                  </p>

                  <span className="mt-4 text-sm font-semibold text-purple-600">
                    查看测试 →
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
              查看所有指南 →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}