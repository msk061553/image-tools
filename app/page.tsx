import Link from "next/link";
import ToolCard from "@/components/ToolCard";
import { imageTools } from "@/lib/tools/tools";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center md:py-32">
          <div className="text-sm font-medium text-gray-500">
            Free · Fast · Browser-based
          </div>

          <h1 className="mx-auto mt-5 max-w-4xl text-5xl font-bold tracking-tight text-gray-900 md:text-6xl">
            Simple image tools,
            <br />
            right in your browser.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Convert your images between JPG, PNG and WebP formats.
            No uploads, no installation, and no complicated software.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/jpg-to-png"
              className="rounded-lg bg-black px-7 py-3 font-medium text-white transition hover:bg-gray-800"
            >
              Start Converting
            </Link>

            <a
              href="#tools"
              className="rounded-lg border border-gray-300 bg-white px-7 py-3 font-medium text-gray-700 transition hover:bg-gray-50"
            >
              View All Tools
            </a>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section
        id="tools"
        className="mx-auto max-w-6xl px-6 py-20"
      >
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Image Tools
          </h2>

          <p className="mt-2 text-gray-500">
            Free online tools for everyday image conversion.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {imageTools.map((tool) => (
            <ToolCard
              key={tool.slug}
              title={tool.title}
              description={tool.description}
              href={`/${tool.slug}`}
            />
          ))}
        </div>
      </section>

      {/* Privacy */}
      <section className="border-y bg-white">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <div className="text-3xl">🔒</div>

          <h2 className="mt-4 text-2xl font-bold text-gray-900">
            Your images stay on your device.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
            Our image conversion tools process your files directly
            in your browser. Your images do not need to be uploaded
            to a server.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              100% Browser-based
            </h3>

            <p className="mt-2 leading-7 text-gray-600">
              Image conversion happens directly on your device
              using your browser.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Free to use
            </h3>

            <p className="mt-2 leading-7 text-gray-600">
              Convert your images without creating an account
              or installing additional software.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Fast processing
            </h3>

            <p className="mt-2 leading-7 text-gray-600">
              Since your files are processed locally, there is
              no need to wait for an upload to a remote server.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Start converting your images
        </h2>

        <p className="mt-3 text-gray-600">
          Choose a tool and get started for free.
        </p>

        <Link
          href="/jpg-to-png"
          className="mt-8 inline-block rounded-lg bg-black px-7 py-3 font-medium text-white transition hover:bg-gray-800"
        >
          Try JPG to PNG
        </Link>
      </section>
    </main>
  );
}