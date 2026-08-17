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

  const t = getTranslations("ko");

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

  const url = `${BASE_URL}/ko/${tool.slug}`;

  return {
    title: `${toolTitle} - 무료 온라인 이미지 변환`,
    description,

    alternates: {
      canonical: url,
      languages: {
        en: `${BASE_URL}/${tool.slug}`,
        ko: url,
        ja: `${BASE_URL}/ja/${tool.slug}`,
        zh: `${BASE_URL}/zh/${tool.slug}`,
        es: `${BASE_URL}/es/${tool.slug}`,
        de: `${BASE_URL}/de/${tool.slug}`,
        fr: `${BASE_URL}/fr/${tool.slug}`,
        "x-default": `${BASE_URL}/${tool.slug}`,
      },
    },

    openGraph: {
      title: `${toolTitle} - 무료 온라인 이미지 변환`,
      description,
      type: "website",
      url,
      locale: "ko_KR",
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function KoreanToolPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const tool = imageTools.find(
    (item) => item.slug === slug
  );

  if (!tool) {
    notFound();
  }

  const t = getTranslations("ko");

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

    url: `${BASE_URL}/ko/${tool.slug}`,

    inLanguage: "ko-KR",

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
        name: `${tool.inputFormat}를 ${outputName}(으)로 어떻게 변환하나요?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `${tool.inputFormat} 이미지를 선택한 후 변환 버튼을 클릭하고 변환된 ${outputName} 이미지를 다운로드하세요. 모든 과정은 브라우저에서 직접 처리됩니다.`,
        },
      },

      {
        "@type": "Question",
        name: `${tool.inputFormat} → ${outputName} 변환은 무료인가요?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `네. ${tool.inputFormat} → ${outputName} 변환기는 무료로 사용할 수 있으며 계정이나 프로그램 설치가 필요하지 않습니다.`,
        },
      },

      {
        "@type": "Question",
        name: "이미지가 서버에 업로드되나요?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "아니요. 이미지는 사용자의 브라우저에서 직접 처리되며 원본 이미지를 서버에 업로드할 필요가 없습니다.",
        },
      },

      {
        "@type": "Question",
        name: "최대 이미지 크기는 얼마인가요?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "최대 50MB의 이미지를 지원하며 최대 크기는 10,000 × 10,000 픽셀, 전체 픽셀 수는 5천만 픽셀입니다.",
        },
      },

      {
        "@type": "Question",
        name: "휴대폰에서도 사용할 수 있나요?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "네. 최신 데스크톱 및 모바일 브라우저에서 사용할 수 있습니다.",
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
        locale="ko"
      />
    </>
  );
}