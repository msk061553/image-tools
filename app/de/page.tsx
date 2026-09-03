import Link from "next/link";
import ToolCard from "@/components/ToolCard";
import { imageTools } from "@/lib/tools/tools";
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://convertimagefreely.com";

export const metadata: Metadata = {
  title: "Kostenlose Online-Bildtools",
  description: "Bilder einfach konvertieren, komprimieren, skalieren, zuschneiden und bearbeiten. Keine Installation und kein Konto erforderlich.",
  alternates: {
    canonical: `${BASE_URL}/de`,
    languages: {
      en: BASE_URL,
      ko: `${BASE_URL}/ko`,
      ja: `${BASE_URL}/ja`,
      zh: `${BASE_URL}/zh`,
      es: `${BASE_URL}/es`,
      de: `${BASE_URL}/de`,
      fr: `${BASE_URL}/fr`,
      "x-default": BASE_URL,
    },
  },
  openGraph: {
    title: "Kostenlose Online-Bildtools",
    description: "Bilder einfach konvertieren, komprimieren, skalieren, zuschneiden und bearbeiten. Keine Installation und kein Konto erforderlich.",
    type: "website",
    url: `${BASE_URL}/de`,
    locale: "de_DE",
  },
  robots: { index: true, follow: true },
};

export default function LocalizedHome() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-24 lg:gap-16">
          <div>
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm">100% kostenlos · Browserbasiert · Keine Registrierung</div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Kostenlose Bildtools,<br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">direkt im Browser.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">Bilder einfach konvertieren, komprimieren, skalieren, zuschneiden und bearbeiten. Keine Installation und kein Konto erforderlich.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/de/jpg-to-png" className="rounded-lg bg-blue-600 px-7 py-3 text-center font-medium text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md">Bildkonvertierung starten →</Link>
              <a href="#tools" className="rounded-lg border border-blue-200 bg-white px-7 py-3 text-center font-medium text-gray-700 shadow-sm transition hover:border-blue-300 hover:bg-blue-50">Alle Tools anzeigen</a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-500">
              <span>✓ Keine Registrierung</span>
              <span>✓ Kein Server-Upload</span>
              <span>✓ Dateien bleiben auf deinem Gerät</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-blue-200/40 via-purple-100/30 to-blue-100/40 blur-2xl" />
            <div className="relative rounded-3xl border border-blue-100 bg-white p-5 shadow-xl">
              <div className="flex items-center gap-2 border-b border-gray-100 pb-4">
                <div className="h-3 w-3 rounded-full bg-red-300" />
                <div className="h-3 w-3 rounded-full bg-yellow-300" />
                <div className="h-3 w-3 rounded-full bg-green-300" />
              </div>
              <div className="mt-5 rounded-2xl border-2 border-dashed border-blue-200 bg-blue-50/30 px-6 py-12 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-3xl">↑</div>
                <h2 className="mt-5 text-lg font-semibold text-gray-900">Bild hier ablegen</h2>
                <p className="mt-2 text-sm text-gray-500">oder klicken, um eine Datei auszuwählen</p>
              </div>
              <div className="mt-5 grid grid-cols-4 gap-3">
                {[["JPG","✓"],["PNG","✓"],["WEBP","✓"],["+",""]].map(([a,b]) => (
                  <div key={a} className="rounded-xl border border-gray-100 bg-gray-50 p-3 text-center">
                    <div className="text-lg">{a}</div>
                    <div className="mt-1 text-xs text-gray-500">{b}</div>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap justify-center gap-2 text-xs text-blue-700">
                <span className="rounded-full bg-blue-50 px-3 py-1.5">Konvertieren</span>
                <span className="rounded-full bg-purple-50 px-3 py-1.5">Komprimieren</span>
                <span className="rounded-full bg-blue-50 px-3 py-1.5">Größe ändern</span>
                <span className="rounded-full bg-purple-50 px-3 py-1.5">Bearbeiten</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="mb-10 text-center">
          <div className="text-sm font-semibold uppercase tracking-wider text-blue-600">Was möchtest du tun?</div>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">Werkzeugkategorie auswählen</h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-500">Wähle eine Bildbearbeitung und finde schnell das passende Tool.</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Link href="/de/jpg-to-png" className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md">
  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl text-blue-600">↔</div>
  <h3 className="mt-5 text-lg font-semibold text-gray-900">Konvertieren</h3>
  <p className="mt-2 leading-6 text-gray-600">Konvertiere zwischen JPG, PNG, WebP und anderen Formaten.</p>
  <span className="mt-5 inline-block text-sm font-semibold text-blue-600">→</span>
</Link>
<Link href="/de/compress-image" className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md">
  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl text-blue-600">↓</div>
  <h3 className="mt-5 text-lg font-semibold text-gray-900">Komprimieren</h3>
  <p className="mt-2 leading-6 text-gray-600">Reduziere die Dateigröße bei guter Bildqualität.</p>
  <span className="mt-5 inline-block text-sm font-semibold text-blue-600">→</span>
</Link>
<Link href="/de/resize-image" className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md">
  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl text-blue-600">↗</div>
  <h3 className="mt-5 text-lg font-semibold text-gray-900">Größe ändern</h3>
  <p className="mt-2 leading-6 text-gray-600">Ändere Bildabmessungen nach Pixeln oder Prozent.</p>
  <span className="mt-5 inline-block text-sm font-semibold text-blue-600">→</span>
</Link>
<Link href="/de/crop-image" className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md">
  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl text-blue-600">⌗</div>
  <h3 className="mt-5 text-lg font-semibold text-gray-900">Zuschneiden</h3>
  <p className="mt-2 leading-6 text-gray-600">Wähle den gewünschten Bildbereich aus.</p>
  <span className="mt-5 inline-block text-sm font-semibold text-blue-600">→</span>
</Link>
<Link href="/de/rotate-image" className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md">
  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl text-blue-600">↻</div>
  <h3 className="mt-5 text-lg font-semibold text-gray-900">Drehen & Spiegeln</h3>
  <p className="mt-2 leading-6 text-gray-600">Drehe oder spiegle Bilder mit wenigen Klicks.</p>
  <span className="mt-5 inline-block text-sm font-semibold text-blue-600">→</span>
</Link>
<Link href="/de/batch-converter" className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md">
  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl text-blue-600">+</div>
  <h3 className="mt-5 text-lg font-semibold text-gray-900">Stapelkonvertierung</h3>
  <p className="mt-2 leading-6 text-gray-600">Verarbeite mehrere Bilder gleichzeitig.</p>
  <span className="mt-5 inline-block text-sm font-semibold text-blue-600">→</span>
</Link>
        </div>
      </section>

      <section id="tools" className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="mb-10 text-center">
          <div className="text-sm font-semibold uppercase tracking-wider text-blue-600">Beliebte Tools</div>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">Beliebte Bildtools</h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-500">Schneller Zugriff auf die meistgenutzten Bildkonverter.</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {imageTools.map((tool) => (
            <ToolCard key={tool.slug} title={tool.title} description={tool.description} href={`/de/${tool.slug}`} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="mb-12 text-center">
          <div className="text-sm font-semibold uppercase tracking-wider text-purple-600">Warum ConvertImageFreely?</div>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">Einfache Bildtools ohne Aufwand</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-500">Alle wichtigen Funktionen ohne komplizierte Software oder unnötige Installationen.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-blue-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl text-blue-600">⚡</div>
  <h3 className="mt-5 text-lg font-semibold text-gray-900">100% browserbasiert</h3>
  <p className="mt-2 leading-7 text-gray-600">Die Bildverarbeitung erfolgt direkt im Browser.</p>
</div>
<div className="rounded-2xl border border-blue-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl text-blue-600">✓</div>
  <h3 className="mt-5 text-lg font-semibold text-gray-900">Kostenlos</h3>
  <p className="mt-2 leading-7 text-gray-600">Nutze die grundlegenden Bildfunktionen kostenlos.</p>
</div>
<div className="rounded-2xl border border-blue-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl text-blue-600">🔒</div>
  <h3 className="mt-5 text-lg font-semibold text-gray-900">Datenschutz</h3>
  <p className="mt-2 leading-7 text-gray-600">Bilder werden lokal im Browser verarbeitet.</p>
</div>
        </div>
        <div className="mt-10 overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="grid items-center gap-8 px-7 py-10 md:grid-cols-[auto_1fr] md:px-10">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-3xl">🔒</div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Deine Bilder bleiben auf deinem Gerät.</h3>
              <p className="mt-2 max-w-3xl leading-7 text-gray-600">ConvertImageFreely verarbeitet Bilder direkt im Browser. Dateien müssen nicht auf einen Server hochgeladen werden.</p>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-blue-700">
                <span>Private</span><span>Secure</span><span>Browser-based</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-20 text-center">
        <div className="relative mx-auto max-w-3xl">
          <div className="text-sm font-semibold uppercase tracking-wider text-blue-100">Loslegen</div>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">Was möchtest du mit deinem Bild machen?</h2>
          <p className="mx-auto mt-4 max-w-xl text-blue-100">Wähle ein Tool und starte. Alles wird direkt im Browser verarbeitet.</p>
          <a href="#tools" className="mt-8 inline-block rounded-lg bg-white px-7 py-3 font-medium text-blue-700 shadow-sm transition hover:bg-blue-50 hover:shadow-md">Alle Tools anzeigen →</a>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="mb-9 text-center">
            <div className="text-sm font-semibold uppercase tracking-wider text-purple-600">Bildanleitungen</div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">Mehr über Bilder erfahren</h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-500">Praktische Anleitungen, Formatvergleiche und echte Bildtests.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Link href="/guides/image-format-comparison" className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md">
              <div className="grid h-full sm:grid-cols-[145px_1fr]">
                <div className="h-44 overflow-hidden bg-gray-100 sm:h-full">
                  <img src="/guides/image-format-comparison/landscape.jpg" alt="Formatanleitung" className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
                </div>
                <div className="flex flex-col justify-center p-6">
                  <div className="text-xs font-semibold uppercase tracking-wide text-blue-600">Formatanleitung</div>
                  <h3 className="mt-2 text-xl font-bold text-gray-900">JPG vs PNG vs WebP</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">Vergleiche Dateigrößen und erfahre mehr über JPG, PNG und WebP.</p>
                  <span className="mt-4 text-sm font-semibold text-blue-600">→</span>
                </div>
              </div>
            </Link>
            <Link href="/guides/image-compression-test" className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-purple-200 hover:shadow-md">
              <div className="grid h-full sm:grid-cols-[145px_1fr]">
                <div className="h-44 overflow-hidden bg-gray-100 sm:h-full">
                  <img src="/guides/image-compression-test/landscape-jpg-q80.jpg" alt="Kompressionstest" className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
                </div>
                <div className="flex flex-col justify-center p-6">
                  <div className="text-xs font-semibold uppercase tracking-wide text-purple-600">Kompressionstest</div>
                  <h3 className="mt-2 text-xl font-bold text-gray-900">Bildkompression testen</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">Vergleiche die Dateigrößen von JPG und WebP bei verschiedenen Qualitätsstufen.</p>
                  <span className="mt-4 text-sm font-semibold text-purple-600">→</span>
                </div>
              </div>
            </Link>
          </div>
          <div className="mt-8 text-center">
            <Link href="/guides" className="text-sm font-semibold text-gray-600 transition hover:text-blue-600">Alle Tools anzeigen →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
