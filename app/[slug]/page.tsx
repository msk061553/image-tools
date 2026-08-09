import type { Metadata } from "next";
import ToolPage from "@/components/ToolPage";
import { imageTools } from "@/lib/tools/tools";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export async function generateStaticParams() {
  return imageTools.map((tool) => ({
    slug: tool.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const tool = imageTools.find((item) => item.slug === slug);

  if (!tool) {
    return {};
  }

  const title = `${tool.title} Converter - Free Online Image Converter`;
  const url = `${BASE_URL}/${tool.slug}`;

  return {
    title,
    description: tool.seo.intro,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title,
      description: tool.seo.intro,
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

  const tool = imageTools.find((item) => item.slug === slug);

  if (!tool) {
    notFound();
  }

  const outputName =
    tool.outputFormat === "jpeg"
      ? "JPG"
      : tool.outputFormat.toUpperCase();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",

    name: `${tool.title} Converter`,

    description: tool.seo.intro,

    applicationCategory: "MultimediaApplication",

    operatingSystem: "Any",

    browserRequirements: "Requires JavaScript",

    url: `${BASE_URL}/${tool.slug}`,

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
        title={`${tool.title} Converter`}
        description={tool.description}
        inputFormat={tool.inputFormat}
        outputFormat={tool.outputFormat}
        seo={tool.seo}
      />
    </>
  );
}