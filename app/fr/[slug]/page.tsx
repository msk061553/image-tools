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

  const t = getTranslations("fr");

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

  const url = `${BASE_URL}/fr/${tool.slug}`;

  return {
    title: `${toolTitle} - Convertisseur d'images en ligne gratuit`,
    description,

    alternates: {
      canonical: url,
      languages: {
        en: `${BASE_URL}/${tool.slug}`,
        ko: `${BASE_URL}/ko/${tool.slug}`,
        ja: `${BASE_URL}/ja/${tool.slug}`,
        zh: `${BASE_URL}/zh/${tool.slug}`,
        es: `${BASE_URL}/es/${tool.slug}`,
        de: `${BASE_URL}/de/${tool.slug}`,
        fr: url,
        "x-default": `${BASE_URL}/${tool.slug}`,
      },
    },

    openGraph: {
      title: `${toolTitle} - Convertisseur d'images en ligne gratuit`,
      description,
      type: "website",
      url,
      locale: "fr_FR",
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function FrenchToolPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const tool = imageTools.find(
    (item) => item.slug === slug
  );

  if (!tool) {
    notFound();
  }

  const t = getTranslations("fr");

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

    url: `${BASE_URL}/fr/${tool.slug}`,

    inLanguage: "fr-FR",

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
        name: `Comment convertir ${tool.inputFormat} en ${outputName} ?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Sélectionnez votre image ${tool.inputFormat}, cliquez sur le bouton de conversion, puis téléchargez l'image ${outputName} convertie. L'ensemble du processus s'effectue directement dans votre navigateur.`,
        },
      },

      {
        "@type": "Question",
        name: `La conversion de ${tool.inputFormat} en ${outputName} est-elle gratuite ?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Oui. Le convertisseur ${tool.inputFormat} vers ${outputName} est gratuit et ne nécessite ni compte ni installation de logiciel.`,
        },
      },

      {
        "@type": "Question",
        name: "Les images sont-elles envoyées sur un serveur ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Non. Les images sont traitées directement dans votre navigateur et l'image originale n'a pas besoin d'être envoyée sur un serveur.",
        },
      },

      {
        "@type": "Question",
        name: "Quelle est la taille maximale d'une image ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Les images jusqu'à 50 Mo sont prises en charge. La taille maximale est de 10 000 × 10 000 pixels et le nombre total est limité à 50 millions de pixels.",
        },
      },

      {
        "@type": "Question",
        name: "Puis-je utiliser le convertisseur sur un téléphone ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui. Le convertisseur fonctionne sur les navigateurs modernes pour ordinateur et mobile sans application ni logiciel supplémentaire.",
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
        locale="fr"
      />
    </>
  );
}
