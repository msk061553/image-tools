import Link from "next/link";
import ToolCard from "@/components/ToolCard";
import { imageTools } from "@/lib/tools/tools";
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://convertimagefreely.com";

export const metadata: Metadata = {
  title: "Herramientas de imágenes online gratuitas",
  description: "Convierte, comprime, cambia el tamaño, recorta y edita imágenes fácilmente. No necesitas instalar programas ni crear una cuenta.",
  alternates: {
    canonical: `${BASE_URL}/es`,
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
    title: "Herramientas de imágenes online gratuitas",
    description: "Convierte, comprime, cambia el tamaño, recorta y edita imágenes fácilmente. No necesitas instalar programas ni crear una cuenta.",
    type: "website",
    url: `${BASE_URL}/es`,
    locale: "es_ES",
  },
  robots: { index: true, follow: true },
};

export default function LocalizedHome() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-24 lg:gap-16">
          <div>
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm">100% gratis · Basado en navegador · Sin registro</div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Herramientas de imágenes gratuitas,<br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">directamente en tu navegador.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">Convierte, comprime, cambia el tamaño, recorta y edita imágenes fácilmente. No necesitas instalar programas ni crear una cuenta.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/es/jpg-to-png" className="rounded-lg bg-blue-600 px-7 py-3 text-center font-medium text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md">Empezar a convertir →</Link>
              <a href="#tools" className="rounded-lg border border-blue-200 bg-white px-7 py-3 text-center font-medium text-gray-700 shadow-sm transition hover:border-blue-300 hover:bg-blue-50">Ver todas las herramientas</a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-500">
              <span>✓ Sin registro</span>
              <span>✓ Sin subir archivos al servidor</span>
              <span>✓ Los archivos permanecen en tu dispositivo</span>
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
                <h2 className="mt-5 text-lg font-semibold text-gray-900">Arrastra una imagen aquí</h2>
                <p className="mt-2 text-sm text-gray-500">o haz clic para seleccionar un archivo</p>
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
                <span className="rounded-full bg-purple-50 px-3 py-1.5">Comprimir</span>
                <span className="rounded-full bg-blue-50 px-3 py-1.5">Redimensionar</span>
                <span className="rounded-full bg-purple-50 px-3 py-1.5">Editar</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="mb-10 text-center">
          <div className="text-sm font-semibold uppercase tracking-wider text-blue-600">¿Qué quieres hacer?</div>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">Elige una categoría</h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-500">Selecciona lo que quieres hacer con tu imagen y encuentra rápidamente la herramienta adecuada.</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Link href="/es/jpg-to-png" className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md">
  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl text-blue-600">↔</div>
  <h3 className="mt-5 text-lg font-semibold text-gray-900">Convertir</h3>
  <p className="mt-2 leading-6 text-gray-600">Convierte entre JPG, PNG, WebP y otros formatos.</p>
  <span className="mt-5 inline-block text-sm font-semibold text-blue-600">→</span>
</Link>
<Link href="/es/compress-image" className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md">
  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl text-blue-600">↓</div>
  <h3 className="mt-5 text-lg font-semibold text-gray-900">Comprimir</h3>
  <p className="mt-2 leading-6 text-gray-600">Reduce el tamaño de los archivos manteniendo una buena calidad.</p>
  <span className="mt-5 inline-block text-sm font-semibold text-blue-600">→</span>
</Link>
<Link href="/es/resize-image" className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md">
  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl text-blue-600">↗</div>
  <h3 className="mt-5 text-lg font-semibold text-gray-900">Redimensionar</h3>
  <p className="mt-2 leading-6 text-gray-600">Cambia las dimensiones por píxeles o porcentaje.</p>
  <span className="mt-5 inline-block text-sm font-semibold text-blue-600">→</span>
</Link>
<Link href="/es/crop-image" className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md">
  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl text-blue-600">⌗</div>
  <h3 className="mt-5 text-lg font-semibold text-gray-900">Recortar</h3>
  <p className="mt-2 leading-6 text-gray-600">Selecciona solo el área que necesitas.</p>
  <span className="mt-5 inline-block text-sm font-semibold text-blue-600">→</span>
</Link>
<Link href="/es/rotate-image" className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md">
  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl text-blue-600">↻</div>
  <h3 className="mt-5 text-lg font-semibold text-gray-900">Girar y voltear</h3>
  <p className="mt-2 leading-6 text-gray-600">Gira o voltea imágenes con unos pocos clics.</p>
  <span className="mt-5 inline-block text-sm font-semibold text-blue-600">→</span>
</Link>
<Link href="/es/batch-converter" className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md">
  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl text-blue-600">+</div>
  <h3 className="mt-5 text-lg font-semibold text-gray-900">Conversión por lotes</h3>
  <p className="mt-2 leading-6 text-gray-600">Procesa varias imágenes de una sola vez.</p>
  <span className="mt-5 inline-block text-sm font-semibold text-blue-600">→</span>
</Link>
        </div>
      </section>

      <section id="tools" className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="mb-10 text-center">
          <div className="text-sm font-semibold uppercase tracking-wider text-blue-600">Herramientas populares</div>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">Herramientas de imágenes populares</h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-500">Accede rápidamente a las herramientas de conversión más utilizadas.</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {imageTools.map((tool) => (
            <ToolCard key={tool.slug} title={tool.title} description={tool.description} href={`/es/${tool.slug}`} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="mb-12 text-center">
          <div className="text-sm font-semibold uppercase tracking-wider text-purple-600">¿Por qué ConvertImageFreely?</div>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">Herramientas de imágenes sencillas</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-500">Obtén las funciones que necesitas sin software complejo ni instalaciones innecesarias.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-blue-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl text-blue-600">⚡</div>
  <h3 className="mt-5 text-lg font-semibold text-gray-900">100% basado en navegador</h3>
  <p className="mt-2 leading-7 text-gray-600">El procesamiento se realiza directamente en tu navegador.</p>
</div>
<div className="rounded-2xl border border-blue-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl text-blue-600">✓</div>
  <h3 className="mt-5 text-lg font-semibold text-gray-900">Gratis</h3>
  <p className="mt-2 leading-7 text-gray-600">Utiliza las funciones básicas sin crear una cuenta ni instalar programas.</p>
</div>
<div className="rounded-2xl border border-blue-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl text-blue-600">🔒</div>
  <h3 className="mt-5 text-lg font-semibold text-gray-900">Privacidad</h3>
  <p className="mt-2 leading-7 text-gray-600">Las imágenes se procesan localmente en el navegador.</p>
</div>
        </div>
        <div className="mt-10 overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="grid items-center gap-8 px-7 py-10 md:grid-cols-[auto_1fr] md:px-10">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-3xl">🔒</div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Tus imágenes permanecen en tu dispositivo.</h3>
              <p className="mt-2 max-w-3xl leading-7 text-gray-600">ConvertImageFreely procesa las imágenes directamente en el navegador. No necesitas subir archivos a un servidor.</p>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-blue-700">
                <span>Private</span><span>Secure</span><span>Browser-based</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-20 text-center">
        <div className="relative mx-auto max-w-3xl">
          <div className="text-sm font-semibold uppercase tracking-wider text-blue-100">Empezar</div>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">¿Qué quieres hacer con tu imagen?</h2>
          <p className="mx-auto mt-4 max-w-xl text-blue-100">Elige una herramienta y empieza. Todo se procesa directamente en tu navegador.</p>
          <a href="#tools" className="mt-8 inline-block rounded-lg bg-white px-7 py-3 font-medium text-blue-700 shadow-sm transition hover:bg-blue-50 hover:shadow-md">Ver todas las herramientas →</a>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="mb-9 text-center">
            <div className="text-sm font-semibold uppercase tracking-wider text-purple-600">Guías de imágenes</div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">Aprende más sobre imágenes</h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-500">Consulta guías prácticas, comparaciones de formatos y pruebas reales.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Link href="/guides/image-format-comparison" className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md">
              <div className="grid h-full sm:grid-cols-[145px_1fr]">
                <div className="h-44 overflow-hidden bg-gray-100 sm:h-full">
                  <img src="/guides/image-format-comparison/landscape.jpg" alt="Guía de formatos" className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
                </div>
                <div className="flex flex-col justify-center p-6">
                  <div className="text-xs font-semibold uppercase tracking-wide text-blue-600">Guía de formatos</div>
                  <h3 className="mt-2 text-xl font-bold text-gray-900">JPG vs PNG vs WebP</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">Compara tamaños y conoce las diferencias entre JPG, PNG y WebP.</p>
                  <span className="mt-4 text-sm font-semibold text-blue-600">→</span>
                </div>
              </div>
            </Link>
            <Link href="/guides/image-compression-test" className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-purple-200 hover:shadow-md">
              <div className="grid h-full sm:grid-cols-[145px_1fr]">
                <div className="h-44 overflow-hidden bg-gray-100 sm:h-full">
                  <img src="/guides/image-compression-test/landscape-jpg-q80.jpg" alt="Prueba de compresión" className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
                </div>
                <div className="flex flex-col justify-center p-6">
                  <div className="text-xs font-semibold uppercase tracking-wide text-purple-600">Prueba de compresión</div>
                  <h3 className="mt-2 text-xl font-bold text-gray-900">Prueba de compresión de imágenes</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">Compara los tamaños de JPG y WebP con diferentes niveles de calidad.</p>
                  <span className="mt-4 text-sm font-semibold text-purple-600">→</span>
                </div>
              </div>
            </Link>
          </div>
          <div className="mt-8 text-center">
            <Link href="/guides" className="text-sm font-semibold text-gray-600 transition hover:text-blue-600">Ver todas las herramientas →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
