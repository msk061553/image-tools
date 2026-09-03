import Link from "next/link";
import ToolCard from "@/components/ToolCard";
import { imageTools } from "@/lib/tools/tools";
import type { Metadata } from "next";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://convertimagefreely.com";

export const metadata: Metadata = {
  title: "無料オンライン画像ツール",
  description:
    "JPG、PNG、WebP画像を無料で変換、圧縮、リサイズ、切り抜きできます。すべての処理はブラウザ上で直接行われます。",
  alternates: {
    canonical: `${BASE_URL}/ja`,
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
    title: "無料オンライン画像ツール",
    description:
      "JPG、PNG、WebP画像をブラウザ上で直接変換・編集できます。",
    type: "website",
    url: `${BASE_URL}/ja`,
    locale: "ja_JP",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function JapaneseHome() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-24 lg:gap-16">
          <div>
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm">
              100% 無料 · ブラウザで利用 · 登録不要
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              無料の画像ツールを、
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ブラウザですぐに。
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              画像の変換、圧縮、サイズ変更、切り抜き、編集を簡単に行えます。
              インストールもアカウント登録も必要ありません。
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/ja/jpg-to-png"
                className="rounded-lg bg-blue-600 px-7 py-3 text-center font-medium text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md"
              >
                画像変換を始める →
              </Link>

              <a
                href="#tools"
                className="rounded-lg border border-blue-200 bg-white px-7 py-3 text-center font-medium text-gray-700 shadow-sm transition hover:border-blue-300 hover:bg-blue-50"
              >
                すべてのツールを見る
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-500">
              <span>✓ アカウント不要</span>
              <span>✓ サーバーへのアップロード不要</span>
              <span>✓ ファイルはデバイス内で処理</span>
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
                  画像をここにドロップ
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  またはクリックして選択
                </p>
              </div>

              <div className="mt-5 grid grid-cols-4 gap-3">
                <div className="rounded-xl border border-gray-100 bg-gray-50 p-3 text-center">
                  <div className="text-lg">JPG</div>
                  <div className="mt-1 text-xs text-gray-500">変換</div>
                </div>

                <div className="rounded-xl border border-gray-100 bg-gray-50 p-3 text-center">
                  <div className="text-lg">PNG</div>
                  <div className="mt-1 text-xs text-gray-500">変換</div>
                </div>

                <div className="rounded-xl border border-gray-100 bg-gray-50 p-3 text-center">
                  <div className="text-lg">WEBP</div>
                  <div className="mt-1 text-xs text-gray-500">変換</div>
                </div>

                <div className="rounded-xl border border-gray-100 bg-gray-50 p-3 text-center">
                  <div className="text-lg">+</div>
                  <div className="mt-1 text-xs text-gray-500">その他</div>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap justify-center gap-2 text-xs text-blue-700">
                <span className="rounded-full bg-blue-50 px-3 py-1.5">変換</span>
                <span className="rounded-full bg-purple-50 px-3 py-1.5">圧縮</span>
                <span className="rounded-full bg-blue-50 px-3 py-1.5">サイズ変更</span>
                <span className="rounded-full bg-purple-50 px-3 py-1.5">編集</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="mb-10 text-center">
          <div className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            何をしますか？
          </div>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
            ツールカテゴリーを選択
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-gray-500">
            画像でやりたいことを選択して、必要なツールをすぐに見つけましょう。
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
              変換
            </h3>

            <p className="mt-2 leading-6 text-gray-600">
              JPG、PNG、WebPなどの画像フォーマットを変換できます。
            </p>

            <span className="mt-5 inline-block text-sm font-semibold text-blue-600">
              ツールを見る →
            </span>
          </Link>

          <Link
            href="/ja/compress-image"
            className="group rounded-2xl border border-green-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-green-200 hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-xl text-green-600">
              ↓
            </div>

            <h3 className="mt-5 text-lg font-semibold text-gray-900">
              圧縮
            </h3>

            <p className="mt-2 leading-6 text-gray-600">
              画質を保ちながら画像ファイルのサイズを小さくします。
            </p>

            <span className="mt-5 inline-block text-sm font-semibold text-green-600">
              ツールを見る →
            </span>
          </Link>

          <Link
            href="/ja/resize-image"
            className="group rounded-2xl border border-purple-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-purple-200 hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-xl text-purple-600">
              ↗
            </div>

            <h3 className="mt-5 text-lg font-semibold text-gray-900">
              サイズ変更
            </h3>

            <p className="mt-2 leading-6 text-gray-600">
              ピクセルまたは割合で画像サイズを変更します。
            </p>

            <span className="mt-5 inline-block text-sm font-semibold text-purple-600">
              ツールを見る →
            </span>
          </Link>

          <Link
            href="/ja/crop-image"
            className="group rounded-2xl border border-orange-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-xl text-orange-600">
              ⌗
            </div>

            <h3 className="mt-5 text-lg font-semibold text-gray-900">
              切り抜き
            </h3>

            <p className="mt-2 leading-6 text-gray-600">
              必要な部分だけを選択して画像を切り抜きます。
            </p>

            <span className="mt-5 inline-block text-sm font-semibold text-orange-600">
              ツールを見る →
            </span>
          </Link>

          <Link
            href="/ja/rotate-image"
            className="group rounded-2xl border border-cyan-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-cyan-200 hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-100 text-xl text-cyan-600">
              ↻
            </div>

            <h3 className="mt-5 text-lg font-semibold text-gray-900">
              回転・反転
            </h3>

            <p className="mt-2 leading-6 text-gray-600">
              数回のクリックで画像を回転または反転できます。
            </p>

            <span className="mt-5 inline-block text-sm font-semibold text-cyan-600">
              ツールを見る →
            </span>
          </Link>

          <Link
            href="/ja/batch-converter"
            className="group rounded-2xl border border-pink-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-pink-200 hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-100 text-xl text-pink-600">
              +
            </div>

            <h3 className="mt-5 text-lg font-semibold text-gray-900">
              一括変換
            </h3>

            <p className="mt-2 leading-6 text-gray-600">
              複数の画像を一度に処理して時間を節約します。
            </p>

            <span className="mt-5 inline-block text-sm font-semibold text-pink-600">
              ツールを見る →
            </span>
          </Link>
        </div>
      </section>

      <section id="tools" className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="mb-10 text-center">
          <div className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            人気のツール
          </div>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
            人気の画像ツール
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-gray-500">
            よく使われている画像変換ツールへすばやくアクセスできます。
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {imageTools.map((tool) => (
            <ToolCard
              key={tool.slug}
              title={tool.title}
              description={tool.description}
              href={`/ja/${tool.slug}`}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="mb-12 text-center">
          <div className="text-sm font-semibold uppercase tracking-wider text-purple-600">
            なぜConvertImageFreely？
          </div>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            シンプルで使いやすい画像ツール
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            複雑なソフトウェアや面倒な設定なしで、画像作業に必要な機能を利用できます。
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-blue-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl text-blue-600">
              ⚡
            </div>

            <h3 className="mt-5 text-lg font-semibold text-gray-900">
              100% ブラウザベース
            </h3>

            <p className="mt-2 leading-7 text-gray-600">
              画像処理はブラウザ上で直接行われます。ソフトウェアのインストールは必要ありません。
            </p>
          </div>

          <div className="rounded-2xl border border-purple-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-xl text-purple-600">
              ✓
            </div>

            <h3 className="mt-5 text-lg font-semibold text-gray-900">
              無料で利用可能
            </h3>

            <p className="mt-2 leading-7 text-gray-600">
              アカウント登録やソフトウェアのインストールなしで、基本的な画像処理を無料で利用できます。
            </p>
          </div>

          <div className="rounded-2xl border border-blue-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl text-blue-600">
              🔒
            </div>

            <h3 className="mt-5 text-lg font-semibold text-gray-900">
              プライバシー保護
            </h3>

            <p className="mt-2 leading-7 text-gray-600">
              画像はブラウザ内でローカル処理されるため、リモートサーバーへアップロードする必要がありません。
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
                画像はあなたのデバイスに保存されたままです。
              </h3>

              <p className="mt-2 max-w-3xl leading-7 text-gray-600">
                ConvertImageFreelyはブラウザ上で直接画像を処理します。
                ファイルをサーバーへアップロードする必要がないため、シンプルかつプライベートに画像を扱えます。
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
            始めましょう
          </div>

          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            画像で何をしたいですか？
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-blue-100">
            ツールを選択して始めましょう。すべてブラウザ上で利用できます。
          </p>

          <a
            href="#tools"
            className="mt-8 inline-block rounded-lg bg-white px-7 py-3 font-medium text-blue-700 shadow-sm transition hover:bg-blue-50 hover:shadow-md"
          >
            すべてのツールを見る →
          </a>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="mb-9 text-center">
            <div className="text-sm font-semibold uppercase tracking-wider text-purple-600">
              画像ガイド
            </div>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
              画像についてもっと学ぶ
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-gray-500">
              実用的なガイド、フォーマット比較、実際の画像テストをご覧ください。
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
                    alt="JPG、PNG、WebPフォーマット比較に使用する画像"
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-col justify-center p-6">
                  <div className="text-xs font-semibold uppercase tracking-wide text-blue-600">
                    画像フォーマットガイド
                  </div>

                  <h3 className="mt-2 text-xl font-bold text-gray-900">
                    JPG vs PNG vs WebP
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    同じテスト画像を使用してファイルサイズを比較し、JPG、PNG、WebPの違いを確認します。
                  </p>

                  <span className="mt-4 text-sm font-semibold text-blue-600">
                    ガイドを読む →
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
                    alt="JPGとWebPの画像圧縮テストに使用する画像"
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-col justify-center p-6">
                  <div className="text-xs font-semibold uppercase tracking-wide text-purple-600">
                    圧縮テスト
                  </div>

                  <h3 className="mt-2 text-xl font-bold text-gray-900">
                    画像圧縮テスト
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    3種類のテスト画像を使用し、品質90、80、70でJPGとWebPのファイルサイズを比較します。
                  </p>

                  <span className="mt-4 text-sm font-semibold text-purple-600">
                    テストを見る →
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
              すべてのガイドを見る →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}