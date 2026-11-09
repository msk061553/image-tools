import type { Metadata } from "next";
import Link from "next/link";
import PdfToJpgConverter from "@/components/PdfToJpgConverter";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://convertimagefreely.com";

export const metadata: Metadata = {
  title: "PDF to JPG Converter – Convert PDF Pages to JPG Online",
  description: "Convert PDF pages to JPG images online for free. Preview and download each page or save all images as a ZIP. Files are processed locally in your browser.",
  alternates: { canonical: `${BASE_URL}/pdf-to-jpg` },
  openGraph: {
    title: "PDF to JPG Converter | ConvertImageFreely",
    description: "Convert PDF pages to JPG images directly in your browser. No PDF upload required.",
    url: `${BASE_URL}/pdf-to-jpg`,
    siteName: "ConvertImageFreely",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const faqs = [
  ["Can I convert every page in a PDF?", "Yes. The tool converts all pages in the selected PDF, subject to the current 30-page limit."],
  ["Can I download one page at a time?", "Yes. Each converted page has its own JPG download link. You can also download all pages together as a ZIP file."],
  ["Are my PDF files uploaded to a server?", "No. Your browser reads and renders the selected PDF locally. The document contents are not sent to ConvertImageFreely for conversion."],
  ["Does JPG preserve selectable text?", "No. JPG is an image format, so text and vector content on each PDF page become pixels in the resulting image."],
];

export default function PdfToJpgPage() {
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "PDF to JPG Converter",
    url: `${BASE_URL}/pdf-to-jpg`,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description: "Convert PDF pages to JPG images directly in your browser. Download individual pages or all pages as a ZIP file.",
    featureList: ["Browser-based PDF rendering", "Convert PDF pages to JPG", "Individual JPG downloads", "ZIP download", "PDF files are not uploaded"],
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([question, answer]) => ({
      "@type": "Question", name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return <main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <section className="px-6 pb-20 pt-16">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-5 inline-flex rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-600">Free browser-based PDF tool</div>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">PDF to JPG Converter</h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">Convert PDF pages into JPG images directly in your browser. Preview each page and download individual images or one ZIP file.</p>
        <div className="mt-10 text-left"><PdfToJpgConverter /></div>
        <p className="mx-auto mt-8 max-w-2xl text-sm leading-6 text-gray-500">Your PDF is processed locally in your browser and is not uploaded to our servers.</p>
      </div>
    </section>

    <section className="border-t bg-white">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-2xl font-bold text-gray-900">How to convert PDF to JPG</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            ["Step 1", "Select a PDF", "Choose a PDF file from your device or drag it into the upload area."],
            ["Step 2", "Convert PDF pages", "Each PDF page is rendered as a JPG image in your browser, without sending the document to a conversion server."],
            ["Step 3", "Download JPG images", "Preview the converted pages, download a specific page, or download all page images together in a ZIP archive."],
          ].map(([step, title, description]) => <div key={step}>
            <div className="text-sm font-medium text-gray-500">{step}</div>
            <h3 className="mt-2 text-lg font-semibold text-gray-900">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-gray-500">{description}</p>
          </div>)}
        </div>
      </div>
    </section>

    <section className="border-t bg-gray-50">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-2xl font-bold text-gray-900">Convert PDF pages into JPG images</h2>
        <p className="mt-4 leading-7 text-gray-600">A PDF document can contain multiple pages, text, vector graphics, and embedded images. A JPG file is a raster image, so converting a PDF to JPG renders each page into pixels. The result is useful when a website, presentation, messaging app, or image editor needs an image rather than a PDF document.</p>
        <h2 className="mt-10 text-2xl font-bold text-gray-900">What happens during PDF to JPG conversion?</h2>
        <p className="mt-4 leading-7 text-gray-600">The browser reads the selected PDF and renders its pages using PDF.js. Each rendered page is then exported as a JPEG image. Selectable text and vector objects become pixels. Links, form fields, and other interactive PDF features are not retained in the JPG images.</p>
        <h2 className="mt-10 text-2xl font-bold text-gray-900">Image resolution and file size</h2>
        <p className="mt-4 leading-7 text-gray-600">The output dimensions depend on the page dimensions and rendering scale. Higher pixel dimensions can preserve more visual detail but also create larger JPG files and use more browser memory. To keep the tool responsive, this version accepts PDF files up to 50 MB and documents containing up to 30 pages.</p>
        <h2 className="mt-10 text-2xl font-bold text-gray-900">Is my PDF uploaded?</h2>
        <p className="mt-4 leading-7 text-gray-600">No. The selected PDF is read and processed in your browser. The document itself is not sent to ConvertImageFreely for conversion. The PDF rendering worker is loaded from this website, while the selected document remains on your device.</p>
        <h2 className="mt-10 text-2xl font-bold text-gray-900">When should you use PDF or JPG?</h2>
        <p className="mt-4 leading-7 text-gray-600">Keep the original PDF when you need selectable text, searchable content, document structure, or multiple pages in one file. Use JPG when you need a page as a widely supported image for a slide, web page, message, or image editor. JPG is not a replacement for the original PDF when document features need to be preserved.</p>
      </div>
    </section>

    <section className="border-t bg-white">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-2xl font-bold text-gray-900">Frequently asked questions</h2>
        <div className="mt-8 space-y-6">
          {faqs.map(([question, answer]) => <div key={question}>
            <h3 className="text-lg font-semibold text-gray-900">{question}</h3>
            <p className="mt-2 leading-7 text-gray-600">{answer}</p>
          </div>)}
        </div>
        <div className="mt-10 border-t pt-8">
          <h2 className="text-xl font-bold text-gray-900">More image tools</h2>
          <p className="mt-2 leading-7 text-gray-600">Need to create a PDF from images? Try our <Link href="/jpg-to-pdf" className="font-medium text-blue-600 hover:text-blue-700">JPG to PDF converter</Link>. You can also convert between JPG, PNG, and WebP formats.</p>
        </div>
      </div>
    </section>
  </main>;
}
