import type { Metadata } from "next";
import ToolPage from "@/components/ToolPage";
import { imageTools } from "@/lib/tools/tools";
import { notFound } from "next/navigation";
import { getTranslations } from "@/lib/i18n";

type PageProps = { params: Promise<{ slug: string }> };
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://convertimagefreely.com";

function replaceVariables(text: string, input: string, output: string) { return text.replaceAll("{input}", input).replaceAll("{output}", output); }

export async function generateStaticParams() { return imageTools.map((tool) => ({ slug: tool.slug })); }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params; const tool = imageTools.find((item) => item.slug === slug); if (!tool) return {};
  const t = getTranslations("de"); const outputName = tool.outputFormat === "jpeg" ? "JPG" : tool.outputFormat.toUpperCase();
  const toolTitle = replaceVariables(t.converter.toolTitle, tool.inputFormat, outputName);
  const description = replaceVariables(t.converter.toolIntro, tool.inputFormat, outputName); const url = `${BASE_URL}/de/${tool.slug}`;
  return { title: `${toolTitle} - Kostenloser Online-Bildkonverter`, description,
    alternates: { canonical: url, languages: { en:`${BASE_URL}/${tool.slug}`, ko:`${BASE_URL}/ko/${tool.slug}`, ja:`${BASE_URL}/ja/${tool.slug}`, zh:`${BASE_URL}/zh/${tool.slug}`, es:`${BASE_URL}/es/${tool.slug}`, de:url, fr: `${BASE_URL}/fr/${tool.slug}`, "x-default":`${BASE_URL}/${tool.slug}` } },
    openGraph:{ title:`${toolTitle} - Kostenloser Online-Bildkonverter`, description, type:"website", url, locale:"de_DE" }, robots:{index:true,follow:true}
  };
}

export default async function GermanToolPage({ params }: PageProps) {
  const { slug } = await params; const tool = imageTools.find((item) => item.slug === slug); if (!tool) notFound();
  const t = getTranslations("de"); const outputName = tool.outputFormat === "jpeg" ? "JPG" : tool.outputFormat.toUpperCase();
  const toolTitle = replaceVariables(t.converter.toolTitle, tool.inputFormat, outputName);
  const toolDescription = replaceVariables(t.converter.toolDescription, tool.inputFormat, outputName);
  const toolIntro = replaceVariables(t.converter.toolIntro, tool.inputFormat, outputName);

  const structuredData = {"@context":"https://schema.org","@type":"WebApplication",name:toolTitle,description:toolIntro,applicationCategory:"MultimediaApplication",operatingSystem:"Any",browserRequirements:"Requires JavaScript",url:`${BASE_URL}/de/${tool.slug}`,inLanguage:"de-DE",offers:{"@type":"Offer",price:"0",priceCurrency:"USD"},featureList:[`${tool.inputFormat} to ${outputName} conversion`,"Browser-based image conversion","No server upload required","Free to use"]};

  const faqStructuredData = {"@context":"https://schema.org","@type":"FAQPage",mainEntity:[
    {"@type":"Question",name:`Wie konvertiere ich ${tool.inputFormat} in ${outputName}?`,acceptedAnswer:{"@type":"Answer",text:`Wähle dein ${tool.inputFormat}-Bild aus, klicke auf die Konvertierungsschaltfläche und lade anschließend das konvertierte ${outputName}-Bild herunter. Der gesamte Vorgang findet direkt in deinem Browser statt.`}},
    {"@type":"Question",name:`Ist die Konvertierung von ${tool.inputFormat} zu ${outputName} kostenlos?`,acceptedAnswer:{"@type":"Answer",text:`Ja. Der Konverter von ${tool.inputFormat} zu ${outputName} kann kostenlos genutzt werden. Du musst kein Konto erstellen und keine Software installieren.`}},
    {"@type":"Question",name:"Werden die Bilder auf einen Server hochgeladen?",acceptedAnswer:{"@type":"Answer",text:"Nein. Die Bilder werden direkt im Browser verarbeitet. Das Originalbild muss nicht auf einen Server hochgeladen werden."}},
    {"@type":"Question",name:"Wie groß darf ein Bild maximal sein?",acceptedAnswer:{"@type":"Answer",text:"Unterstützt werden Bilder bis 50 MB. Die maximale Größe beträgt 10.000 × 10.000 Pixel und insgesamt 50 Millionen Pixel."}},
    {"@type":"Question",name:"Kann ich den Konverter auf einem Smartphone verwenden?",acceptedAnswer:{"@type":"Answer",text:"Ja. Der Konverter funktioniert in modernen Desktop- und mobilen Browsern ohne zusätzliche App oder Software."}}
  ]};

  return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData)}} /><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqStructuredData)}} /><ToolPage slug={tool.slug} title={toolTitle} description={toolDescription} inputFormat={tool.inputFormat} outputFormat={tool.outputFormat} locale="de" /></>;
}
