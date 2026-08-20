import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { guides } from "@/lib/guides/guides";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://convertimagefreely.com";

export async function generateStaticParams() {
  return guides.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const guide = guides.find((item) => item.slug === slug);

  if (!guide) {
    return {};
  }

  const url = `${BASE_URL}/guides/${guide.slug}`;

  return {
    title: guide.title,
    description: guide.description,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: guide.title,
      description: guide.description,
      type: "article",
      url,
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function GuidePage({
  params,
}: PageProps) {
  const { slug } = await params;

  const guide = guides.find((item) => item.slug === slug);

  if (!guide) {
    notFound();
  }

  const url = `${BASE_URL}/guides/${guide.slug}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    url,
    inLanguage: "en",
    publisher: {
      "@type": "Organization",
      name: "ConvertImageFreely",
      url: BASE_URL,
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <article className="mx-auto max-w-4xl px-6 py-16 md:py-20">
        <Link
          href="/guides"
          className="text-sm font-medium text-blue-600 hover:text-blue-700"
        >
          ← Image Guides
        </Link>

        <header className="mt-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            {guide.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            {guide.description}
          </p>
        </header>

        <div className="mt-12 space-y-10">
          {guide.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl font-bold text-gray-900">
                {section.heading}
              </h2>

              <div className="mt-4 space-y-4">
                {section.paragraphs.map((paragraph, index) => (
                  <p
                    key={`${section.heading}-${index}`}
                    className="leading-7 text-gray-600"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}

          {guide.relatedTool && (
            <section className="rounded-2xl border border-blue-100 bg-blue-50/50 p-7">
              <h2 className="text-xl font-bold text-gray-900">
                Try the related image converter
              </h2>

              <p className="mt-3 leading-7 text-gray-600">
                Convert your image directly in your browser with
                ConvertImageFreely.
              </p>

              <Link
                href={`/${guide.relatedTool}`}
                className="mt-5 inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
              >
                Open Converter
              </Link>
            </section>
          )}

          {guide.faq && guide.faq.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                Frequently Asked Questions
              </h2>

              <div className="mt-6 space-y-6">
                {guide.faq.map((item) => (
                  <div key={item.question}>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.question}
                    </h3>

                    <p className="mt-2 leading-7 text-gray-600">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>
    </main>
  );
}