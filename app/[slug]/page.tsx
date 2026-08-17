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

  const t = getTranslations("en");

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

  const title =
    `${toolTitle} Converter - Free Online Image Converter`;

  const url = `${BASE_URL}/${tool.slug}`;

  return {
    title,
    description,

    alternates: {
      canonical: url,
      languages: {
        en: url,
        ko: `${BASE_URL}/ko/${tool.slug}`,
        ja: `${BASE_URL}/ja/${tool.slug}`,
        zh: `${BASE_URL}/zh/${tool.slug}`,
        es: `${BASE_URL}/es/${tool.slug}`,
        de: `${BASE_URL}/de/${tool.slug}`,
        fr: `${BASE_URL}/fr/${tool.slug}`,
        "x-default": url,
      },
    },

    openGraph: {
      title,
      description,
      type: "website",
      url,
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ToolSlugPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const tool = imageTools.find(
    (item) => item.slug === slug
  );

  if (!tool) {
    notFound();
  }

  const t = getTranslations("en");

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

    name: `${toolTitle} Converter`,

    description: toolIntro,

    applicationCategory: "MultimediaApplication",

    operatingSystem: "Any",

    browserRequirements: "Requires JavaScript",

    url: `${BASE_URL}/${tool.slug}`,

    inLanguage: "en",

    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },

    featureList: [
      `Convert ${tool.inputFormat} to ${outputName}`,
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
        name: `How do I convert ${tool.inputFormat} to ${outputName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Select your ${tool.inputFormat} image, convert it using the browser-based converter, and download the resulting ${outputName} image.`,
        },
      },

      {
        "@type": "Question",
        name: `Is this ${tool.inputFormat} to ${outputName} converter free?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Yes. The ${tool.inputFormat} to ${outputName} converter is free to use and does not require an account or software installation.`,
        },
      },

      {
        "@type": "Question",
        name: "Are my images uploaded to a server?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Images are processed directly in the browser on the user's device and do not need to be uploaded to a server.",
        },
      },

      {
        "@type": "Question",
        name: "What is the maximum image size?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Images up to 50MB are supported, with a maximum dimension of 10,000 by 10,000 pixels and a maximum total pixel count of 50 million.",
        },
      },

      {
        "@type": "Question",
        name: "Can I use this converter on a phone?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The converter works in modern desktop and mobile browsers.",
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
        title={`${toolTitle} Converter`}
        description={toolDescription}
        inputFormat={tool.inputFormat}
        outputFormat={tool.outputFormat}
        locale="en"
      />
    </>
  );
}