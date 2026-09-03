"use client";

import Link from "next/link";
import { imageTools } from "@/lib/tools/tools";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const standaloneTools = [
  {
    slug: "compress-image",
    title: "Compress Image",
  },
  {
    slug: "resize-image",
    title: "Resize Image",
  },
  {
    slug: "crop-image",
    title: "Crop Image",
  },
  {
    slug: "rotate-image",
    title: "Rotate & Flip",
  },
  {
    slug: "batch-converter",
    title: "Batch Converter",
  },
];

export default function Header() {
  return (
    <header className="border-b border-blue-100 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-blue-600 transition hover:text-blue-700"
          >
            ConvertImageFreely
          </Link>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-600">
            <Link
              href="/"
              className="font-medium transition hover:text-blue-600"
            >
              Home
            </Link>

            {/* Desktop Tools */}
            <div className="group relative hidden sm:block">
              <button
                type="button"
                className="flex items-center gap-1 font-medium transition hover:text-blue-600"
              >
                Tools
                <span className="text-xs text-blue-500">▾</span>
              </button>

              <div className="invisible absolute right-0 top-full z-50 mt-2 w-72 rounded-2xl border border-blue-100 bg-white p-3 opacity-0 shadow-xl transition-all duration-150 group-hover:visible group-hover:opacity-100">
                {/* Convert */}
                <div className="px-3 pb-2 pt-1 text-[11px] font-bold uppercase tracking-wider text-blue-500">
                  Convert
                </div>

                <div className="grid grid-cols-2 gap-1">
                  {imageTools.map((tool) => (
                    <Link
                      key={tool.slug}
                      href={`/${tool.slug}`}
                      className="rounded-lg px-3 py-2 text-sm text-gray-700 transition hover:bg-blue-50 hover:text-blue-700"
                    >
                      {tool.title}
                    </Link>
                  ))}
                </div>

                {/* Divider */}
                <div className="my-3 border-t border-gray-100" />

                {/* Image Tools */}
                <div className="px-3 pb-2 text-[11px] font-bold uppercase tracking-wider text-purple-500">
                  Image Tools
                </div>

                <div className="grid grid-cols-2 gap-1">
                  {standaloneTools.map((tool) => (
                    <Link
                      key={tool.slug}
                      href={`/${tool.slug}`}
                      className="rounded-lg px-3 py-2 text-sm text-gray-700 transition hover:bg-purple-50 hover:text-purple-700"
                    >
                      {tool.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Tools */}
            <div className="w-full sm:hidden">
              <div className="mb-3 font-medium text-blue-700">
                Tools
              </div>

              {/* Convert */}
              <div className="mb-2 text-xs font-bold uppercase tracking-wider text-blue-500">
                Convert
              </div>

              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {imageTools.map((tool) => (
                  <Link
                    key={tool.slug}
                    href={`/${tool.slug}`}
                    className="text-gray-600 transition hover:text-blue-600"
                  >
                    {tool.title}
                  </Link>
                ))}
              </div>

              {/* Image Tools */}
              <div className="mb-2 mt-5 text-xs font-bold uppercase tracking-wider text-purple-500">
                Image Tools
              </div>

              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {standaloneTools.map((tool) => (
                  <Link
                    key={tool.slug}
                    href={`/${tool.slug}`}
                    className="text-gray-600 transition hover:text-purple-600"
                  >
                    {tool.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/guides"
              className="font-medium transition hover:text-blue-600"
            >
              Guides
            </Link>

            <Link
              href="/about"
              className="font-medium transition hover:text-blue-600"
            >
              About
            </Link>

            <LanguageSwitcher />
          </nav>
        </div>
      </div>
    </header>
  );
}