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

  const t = getTranslations("zh");

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

  const url = `${BASE_URL}/zh/${tool.slug}`;

  return {
    title: `${toolTitle} - 免费在线图片转换`,
    description,

    alternates: {
      canonical: url,
      languages: {
        en: `${BASE_URL}/${tool.slug}`,
        ko: `${BASE_URL}/ko/${tool.slug}`,
        ja: `${BASE_URL}/ja/${tool.slug}`,
        zh: url,
        es: `${BASE_URL}/es/${tool.slug}`,
        de: `${BASE_URL}/de/${tool.slug}`,
        "x-default": `${BASE_URL}/${tool.slug}`,
      },
    },

    openGraph: {
      title: `${toolTitle} - 免费在线图片转换`,
      description,
      type: "website",
      url,
      locale: "zh_CN",
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ChineseToolPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const tool = imageTools.find(
    (item) => item.slug === slug
  );

  if (!tool) {
    notFound();
  }

  const t = getTranslations("zh");

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

    url: `${BASE_URL}/zh/${tool.slug}`,

    inLanguage: "zh-CN",

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
        name: `如何将 ${tool.inputFormat} 转换为 ${outputName}？`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `选择 ${tool.inputFormat} 图片，点击转换按钮，然后下载转换后的 ${outputName} 图片。整个过程都直接在浏览器中完成。`,
        },
      },

      {
        "@type": "Question",
        name: `${tool.inputFormat} 转 ${outputName} 是免费的吗？`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `是的。${tool.inputFormat} 转 ${outputName} 转换工具可以免费使用，无需创建账户或安装软件。`,
        },
      },

      {
        "@type": "Question",
        name: "图片会上传到服务器吗？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "不会。图片会直接在您的浏览器中处理，原始图片无需上传到服务器。",
        },
      },

      {
        "@type": "Question",
        name: "最大图片尺寸是多少？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "支持最大 50MB 的图片。图片最大尺寸为 10,000 × 10,000 像素，总像素数限制为 5,000 万像素。",
        },
      },

      {
        "@type": "Question",
        name: "可以在手机上使用吗？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "可以。该工具支持最新的桌面和移动浏览器，无需安装应用或其他软件。",
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
        locale="zh"
      />
    </>
  );
}