import type { Metadata } from "next";
import ToolPage from "@/components/ToolPage";
import { imageTools } from "@/lib/tools/tools";
import { notFound } from "next/navigation";
import { getTranslations } from "@/lib/i18n";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://convertimagefreely.com";

function replaceVariables(
  text: string,
  input: string,
  output: string
) {
  return text
    .replaceAll("{input}", input)
    .replaceAll("{output}", output);
}

export async function generateStaticParams() {
  return imageTools.map((tool) => ({
    slug: tool.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const tool = imageTools.find(
    (item) => item.slug === slug
  );

  if (!tool) {
    return {};
  }

  const t = getTranslations("ja");

  const outputName =
    tool.outputFormat === "jpeg"
      ? "JPG"
      : tool.outputFormat.toUpperCase();

  const toolTitle = replaceVariables(
    t.converter.toolTitle,
    tool.inputFormat,
    outputName
  );

  const description = replaceVariables(
    t.converter.toolIntro,
    tool.inputFormat,
    outputName
  );

  const url = `${BASE_URL}/ja/${tool.slug}`;

  return {
    title: `${toolTitle} - 無料オンライン画像変換`,
    description,

    alternates: {
      canonical: url,
      languages: {
        en: `${BASE_URL}/${tool.slug}`,
        ko: `${BASE_URL}/ko/${tool.slug}`,
        ja: url,
        zh: `${BASE_URL}/zh/${tool.slug}`,
        es: `${BASE_URL}/es/${tool.slug}`,
        "x-default": `${BASE_URL}/${tool.slug}`,
      },
    },

    openGraph: {
      title: `${toolTitle} - 無料オンライン画像変換`,
      description,
      type: "website",
      url,
      locale: "ja_JP",
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function JapaneseToolPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const tool = imageTools.find(
    (item) => item.slug === slug
  );

  if (!tool) {
    notFound();
  }

  const t = getTranslations("ja");

  const outputName =
    tool.outputFormat === "jpeg"
      ? "JPG"
      : tool.outputFormat.toUpperCase();

  const toolTitle = replaceVariables(
    t.converter.toolTitle,
    tool.inputFormat,
    outputName
  );

  const toolDescription = replaceVariables(
    t.converter.toolDescription,
    tool.inputFormat,
    outputName
  );

  const toolIntro = replaceVariables(
    t.converter.toolIntro,
    tool.inputFormat,
    outputName
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",

    name: toolTitle,

    description: toolIntro,

    applicationCategory: "MultimediaApplication",

    operatingSystem: "Any",

    browserRequirements: "Requires JavaScript",

    url: `${BASE_URL}/ja/${tool.slug}`,

    inLanguage: "ja-JP",

    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },

    featureList: [
      `${tool.inputFormat} to ${outputName} conversion`,
      "Browser-based image conversion",
      "No server upload required",
      "Free to use",
    ],
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",

    mainEntity: [
      {
        "@type": "Question",
        name: `${tool.inputFormat}を${outputName}に変換するにはどうすればよいですか？`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `${tool.inputFormat}画像を選択し、変換ボタンをクリックして、変換された${outputName}画像をダウンロードしてください。すべての処理はブラウザ上で直接行われます。`,
        },
      },

      {
        "@type": "Question",
        name: `${tool.inputFormat}から${outputName}への変換は無料ですか？`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `はい。${tool.inputFormat}から${outputName}への変換ツールは無料で利用できます。アカウントの作成やソフトウェアのインストールは必要ありません。`,
        },
      },

      {
        "@type": "Question",
        name: "画像はサーバーにアップロードされますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "いいえ。画像はユーザーのブラウザ上で直接処理されるため、元の画像をサーバーにアップロードする必要はありません。",
        },
      },

      {
        "@type": "Question",
        name: "最大画像サイズはどのくらいですか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "最大50MBの画像に対応しています。画像サイズは最大10,000 × 10,000ピクセル、総ピクセル数は5,000万ピクセルまでです。",
        },
      },

      {
        "@type": "Question",
        name: "スマートフォンでも利用できますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "はい。最新のデスクトップおよびモバイルブラウザで利用できます。",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />

      <ToolPage
        slug={tool.slug}
        title={toolTitle}
        description={toolDescription}
        inputFormat={tool.inputFormat}
        outputFormat={tool.outputFormat}
        locale="ja"
      />
    </>
  );
}