import Link from "next/link";
import { imageTools } from "@/lib/tools/tools";

export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto max-w-6xl px-6 py-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-gray-900"
          >
            Image Tools
          </Link>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-600">

            <Link
              href="/"
              className="transition hover:text-gray-900"
            >
              Home
            </Link>

            {/* Desktop Tools */}
            <div className="group relative hidden sm:block">
              <button
                type="button"
                className="flex items-center gap-1 transition hover:text-gray-900"
              >
                Tools
                <span className="text-xs">▾</span>
              </button>

              <div className="invisible absolute right-0 top-full z-50 mt-2 w-60 rounded-xl border border-gray-200 bg-white p-2 opacity-0 shadow-lg transition-all duration-150 group-hover:visible group-hover:opacity-100">
                {imageTools.map((tool) => (
                  <Link
                    key={tool.slug}
                    href={`/${tool.slug}`}
                    className="block rounded-lg px-3 py-2 text-sm text-gray-700 transition hover:bg-gray-100 hover:text-gray-900"
                  >
                    {tool.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Tools */}
            <div className="w-full sm:hidden">
              <div className="mb-2 font-medium text-gray-900">
                Tools
              </div>

              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {imageTools.map((tool) => (
                  <Link
                    key={tool.slug}
                    href={`/${tool.slug}`}
                    className="text-gray-600 transition hover:text-gray-900"
                  >
                    {tool.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/about"
              className="transition hover:text-gray-900"
            >
              About
            </Link>

          </nav>
        </div>
      </div>
    </header>
  );
}