import Link from "next/link";
import ToolCard from "@/components/ToolCard";
import { imageTools } from "@/lib/tools/tools";
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://convertimagefreely.com";

export const metadata: Metadata = {
  title: "Outils d’image en ligne gratuits",
  description: "Convertissez, compressez, redimensionnez, recadrez et modifiez vos images facilement. Aucune installation ni inscription nécessaire.",
  alternates: {
    canonical: `${BASE_URL}/fr`,
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
    title: "Outils d’image en ligne gratuits",
    description: "Convertissez, compressez, redimensionnez, recadrez et modifiez vos images facilement. Aucune installation ni inscription nécessaire.",
    type: "website",
    url: `${BASE_URL}/fr`,
    locale: "fr_FR",
  },
  robots: { index: true, follow: true },
};

export default function LocalizedHome() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-24 lg:gap-16">
          <div>
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm">100 % gratuit · Dans le navigateur · Sans inscription</div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Outils d’image gratuits,<br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">directement dans votre navigateur.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">Convertissez, compressez, redimensionnez, recadrez et modifiez vos images facilement. Aucune installation ni inscription nécessaire.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/fr/jpg-to-png" className="rounded-lg bg-blue-600 px-7 py-3 text-center font-medium text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md">Commencer la conversion →</Link>
              <a href="#tools" className="rounded-lg border border-blue-200 bg-white px-7 py-3 text-center font-medium text-gray-700 shadow-sm transition hover:border-blue-300 hover:bg-blue-50">Voir tous les outils</a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-500">
              <span>✓ Sans inscription</span>
              <span>✓ Aucun envoi au serveur</span>
              <span>✓ Les fichiers restent sur votre appareil</span>
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
                <h2 className="mt-5 text-lg font-semibold text-gray-900">Déposez une image ici</h2>
                <p className="mt-2 text-sm text-gray-500">ou cliquez pour sélectionner un fichier</p>
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
                <span className="rounded-full bg-blue-50 px-3 py-1.5">Convertir</span>
                <span className="rounded-full bg-purple-50 px-3 py-1.5">Compresser</span>
                <span className="rounded-full bg-blue-50 px-3 py-1.5">Redimensionner</span>
                <span className="rounded-full bg-purple-50 px-3 py-1.5">Modifier</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="mb-10 text-center">
          <div className="text-sm font-semibold uppercase tracking-wider text-blue-600">Que voulez-vous faire ?</div>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">Choisissez une catégorie</h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-500">Sélectionnez l’opération souhaitée pour trouver rapidement l’outil adapté.</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Link href="/fr/jpg-to-png" className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md">
  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl text-blue-600">↔</div>
  <h3 className="mt-5 text-lg font-semibold text-gray-900">Convertir</h3>
  <p className="mt-2 leading-6 text-gray-600">Convertissez entre JPG, PNG, WebP et d’autres formats.</p>
  <span className="mt-5 inline-block text-sm font-semibold text-blue-600">→</span>
</Link>
<Link href="/fr/compress-image" className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md">
  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl text-blue-600">↓</div>
  <h3 className="mt-5 text-lg font-semibold text-gray-900">Compresser</h3>
  <p className="mt-2 leading-6 text-gray-600">Réduisez la taille des fichiers tout en conservant une bonne qualité.</p>
  <span className="mt-5 inline-block text-sm font-semibold text-blue-600">→</span>
</Link>
<Link href="/fr/resize-image" className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md">
  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl text-blue-600">↗</div>
  <h3 className="mt-5 text-lg font-semibold text-gray-900">Redimensionner</h3>
  <p className="mt-2 leading-6 text-gray-600">Modifiez les dimensions par pixels ou pourcentage.</p>
  <span className="mt-5 inline-block text-sm font-semibold text-blue-600">→</span>
</Link>
<Link href="/fr/crop-image" className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md">
  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl text-blue-600">⌗</div>
  <h3 className="mt-5 text-lg font-semibold text-gray-900">Recadrer</h3>
  <p className="mt-2 leading-6 text-gray-600">Sélectionnez uniquement la zone d’image dont vous avez besoin.</p>
  <span className="mt-5 inline-block text-sm font-semibold text-blue-600">→</span>
</Link>
<Link href="/fr/rotate-image" className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md">
  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl text-blue-600">↻</div>
  <h3 className="mt-5 text-lg font-semibold text-gray-900">Pivoter et retourner</h3>
  <p className="mt-2 leading-6 text-gray-600">Faites pivoter ou retournez vos images en quelques clics.</p>
  <span className="mt-5 inline-block text-sm font-semibold text-blue-600">→</span>
</Link>
<Link href="/fr/batch-converter" className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md">
  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl text-blue-600">+</div>
  <h3 className="mt-5 text-lg font-semibold text-gray-900">Conversion par lots</h3>
  <p className="mt-2 leading-6 text-gray-600">Traitez plusieurs images en une seule fois.</p>
  <span className="mt-5 inline-block text-sm font-semibold text-blue-600">→</span>
</Link>
        </div>
      </section>

      <section id="tools" className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="mb-10 text-center">
          <div className="text-sm font-semibold uppercase tracking-wider text-blue-600">Outils populaires</div>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">Outils d’image populaires</h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-500">Accédez rapidement aux convertisseurs d’images les plus utilisés.</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {imageTools.map((tool) => (
            <ToolCard key={tool.slug} title={tool.title} description={tool.description} href={`/fr/${tool.slug}`} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="mb-12 text-center">
          <div className="text-sm font-semibold uppercase tracking-wider text-purple-600">Pourquoi ConvertImageFreely ?</div>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">Des outils d’image simples</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-500">Toutes les fonctions essentielles sans logiciel complexe ni installation inutile.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-blue-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl text-blue-600">⚡</div>
  <h3 className="mt-5 text-lg font-semibold text-gray-900">100 % dans le navigateur</h3>
  <p className="mt-2 leading-7 text-gray-600">Le traitement s’effectue directement dans votre navigateur.</p>
</div>
<div className="rounded-2xl border border-blue-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl text-blue-600">✓</div>
  <h3 className="mt-5 text-lg font-semibold text-gray-900">Gratuit</h3>
  <p className="mt-2 leading-7 text-gray-600">Utilisez les fonctions essentielles gratuitement.</p>
</div>
<div className="rounded-2xl border border-blue-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl text-blue-600">🔒</div>
  <h3 className="mt-5 text-lg font-semibold text-gray-900">Confidentialité</h3>
  <p className="mt-2 leading-7 text-gray-600">Les images sont traitées localement dans le navigateur.</p>
</div>
        </div>
        <div className="mt-10 overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="grid items-center gap-8 px-7 py-10 md:grid-cols-[auto_1fr] md:px-10">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-3xl">🔒</div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Vos images restent sur votre appareil.</h3>
              <p className="mt-2 max-w-3xl leading-7 text-gray-600">ConvertImageFreely traite les images directement dans votre navigateur. Aucun envoi vers un serveur n’est nécessaire.</p>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-blue-700">
                <span>Private</span><span>Secure</span><span>Browser-based</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-20 text-center">
        <div className="relative mx-auto max-w-3xl">
          <div className="text-sm font-semibold uppercase tracking-wider text-blue-100">Commencer</div>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">Que voulez-vous faire avec votre image ?</h2>
          <p className="mx-auto mt-4 max-w-xl text-blue-100">Choisissez un outil et commencez. Tout est traité directement dans votre navigateur.</p>
          <a href="#tools" className="mt-8 inline-block rounded-lg bg-white px-7 py-3 font-medium text-blue-700 shadow-sm transition hover:bg-blue-50 hover:shadow-md">Voir tous les outils →</a>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="mb-9 text-center">
            <div className="text-sm font-semibold uppercase tracking-wider text-purple-600">Guides d’image</div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">En savoir plus sur les images</h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-500">Découvrez des guides pratiques, des comparaisons de formats et des tests réels.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Link href="/guides/image-format-comparison" className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md">
              <div className="grid h-full sm:grid-cols-[145px_1fr]">
                <div className="h-44 overflow-hidden bg-gray-100 sm:h-full">
                  <img src="/guides/image-format-comparison/landscape.jpg" alt="Guide des formats" className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
                </div>
                <div className="flex flex-col justify-center p-6">
                  <div className="text-xs font-semibold uppercase tracking-wide text-blue-600">Guide des formats</div>
                  <h3 className="mt-2 text-xl font-bold text-gray-900">JPG vs PNG vs WebP</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">Comparez les tailles de fichiers et découvrez les différences entre JPG, PNG et WebP.</p>
                  <span className="mt-4 text-sm font-semibold text-blue-600">→</span>
                </div>
              </div>
            </Link>
            <Link href="/guides/image-compression-test" className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-purple-200 hover:shadow-md">
              <div className="grid h-full sm:grid-cols-[145px_1fr]">
                <div className="h-44 overflow-hidden bg-gray-100 sm:h-full">
                  <img src="/guides/image-compression-test/landscape-jpg-q80.jpg" alt="Test de compression" className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
                </div>
                <div className="flex flex-col justify-center p-6">
                  <div className="text-xs font-semibold uppercase tracking-wide text-purple-600">Test de compression</div>
                  <h3 className="mt-2 text-xl font-bold text-gray-900">Test de compression d’image</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">Comparez les tailles de JPG et WebP avec différents niveaux de qualité.</p>
                  <span className="mt-4 text-sm font-semibold text-purple-600">→</span>
                </div>
              </div>
            </Link>
          </div>
          <div className="mt-8 text-center">
            <Link href="/guides" className="text-sm font-semibold text-gray-600 transition hover:text-blue-600">Voir tous les outils →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
