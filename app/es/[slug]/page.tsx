import type { Metadata } from "next";
import ToolPage from "@/components/ToolPage";
import { imageTools } from "@/lib/tools/tools";
import { notFound } from "next/navigation";
import { getTranslations } from "@/lib/i18n";

type PageProps = { params: Promise<{ slug: string }> };

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://convertimagefreely.com";

function replaceVariables(text: string, input: string, output: string) {
  return text.replaceAll("{input}", input).replaceAll("{output}", output);
}

export async function generateStaticParams() {
  return imageTools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = imageTools.find((item) => item.slug === slug);
  if (!tool) return {};

  const t = getTranslations("es");
  const outputName = tool.outputFormat === "jpeg" ? "JPG" : tool.outputFormat.toUpperCase();
  const toolTitle = replaceVariables(t.converter.toolTitle, tool.inputFormat, outputName);
  const description = replaceVariables(t.converter.toolIntro, tool.inputFormat, outputName);
  const url = `${BASE_URL}/es/${tool.slug}`;

  return {
    title: `${toolTitle} - Conversor de imágenes online gratuito`,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: `${BASE_URL}/${tool.slug}`,
        ko: `${BASE_URL}/ko/${tool.slug}`,
        ja: `${BASE_URL}/ja/${tool.slug}`,
        zh: `${BASE_URL}/zh/${tool.slug}`,
        es: url,
        "x-default": `${BASE_URL}/${tool.slug}`,
      },
    },
    openGraph: {
      title: `${toolTitle} - Conversor de imágenes online gratuito`,
      description,
      type: "website",
      url,
      locale: "es_ES",
    },
    robots: { index: true, follow: true },
  };
}

export default async function SpanishToolPage({ params }: PageProps) {
  const { slug } = await params;
  const tool = imageTools.find((item) => item.slug === slug);
  if (!tool) notFound();

  const t = getTranslations("es");
  const outputName = tool.outputFormat === "jpeg" ? "JPG" : tool.outputFormat.toUpperCase();
  const toolTitle = replaceVariables(t.converter.toolTitle, tool.inputFormat, outputName);
  const toolDescription = replaceVariables(t.converter.toolDescription, tool.inputFormat, outputName);
  const toolIntro = replaceVariables(t.converter.toolIntro, tool.inputFormat, outputName);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: toolTitle,
    description: toolIntro,
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Any",
    browserRequirements: "Requires JavaScript",
    url: `${BASE_URL}/es/${tool.slug}`,
    inLanguage: "es-ES",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
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
        name: `¿Cómo convierto ${tool.inputFormat} a ${outputName}?`,
        acceptedAnswer: { "@type": "Answer", text: `Selecciona tu imagen ${tool.inputFormat}, haz clic en el botón de conversión y descarga la imagen ${outputName} convertida. Todo el proceso se realiza directamente en tu navegador.` },
      },
      {
        "@type": "Question",
        name: `¿La conversión de ${tool.inputFormat} a ${outputName} es gratuita?`,
        acceptedAnswer: { "@type": "Answer", text: `Sí. El convertidor de ${tool.inputFormat} a ${outputName} es gratuito y no requiere crear una cuenta ni instalar software.` },
      },
      {
        "@type": "Question",
        name: "¿Se suben las imágenes al servidor?",
        acceptedAnswer: { "@type": "Answer", text: "No. Las imágenes se procesan directamente en el navegador y la imagen original no necesita subirse a un servidor." },
      },
      {
        "@type": "Question",
        name: "¿Cuál es el tamaño máximo de imagen?",
        acceptedAnswer: { "@type": "Answer", text: "Se admiten imágenes de hasta 50 MB. El tamaño máximo es de 10.000 × 10.000 píxeles y el total está limitado a 50 millones de píxeles." },
      },
      {
        "@type": "Question",
        name: "¿Puedo utilizarlo en un teléfono?",
        acceptedAnswer: { "@type": "Answer", text: "Sí. Puedes utilizarlo en navegadores modernos de escritorio y móviles sin instalar una aplicación adicional." },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <ToolPage
        slug={tool.slug}
        title={toolTitle}
        description={toolDescription}
        inputFormat={tool.inputFormat}
        outputFormat={tool.outputFormat}
        locale="es"
      />
    </>
  );
}
