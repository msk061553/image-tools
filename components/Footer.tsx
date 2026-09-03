import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-blue-100 bg-blue-50/40">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_0.8fr]">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="inline-block text-lg font-bold text-blue-600 transition hover:text-blue-700"
            >
              ConvertImageFreely
            </Link>

            <p className="mt-3 max-w-sm text-sm leading-6 text-gray-500">
              Simple and free image conversion tools that work directly in your
              browser.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">
              Quick Links
            </h3>

            <nav className="mt-4 flex flex-col gap-2.5 text-sm text-gray-500">
              <Link
                href="/"
                className="transition hover:text-blue-600"
              >
                Home
              </Link>

              <Link
                href="/#tools"
                className="transition hover:text-blue-600"
              >
                Tools
              </Link>

              <Link
                href="/guides"
                className="transition hover:text-blue-600"
              >
                Guides
              </Link>

              <Link
                href="/about"
                className="transition hover:text-blue-600"
              >
                About
              </Link>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">
              Legal
            </h3>

            <nav className="mt-4 flex flex-col gap-2.5 text-sm text-gray-500">
              <Link
                href="/privacy"
                className="transition hover:text-blue-600"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="transition hover:text-blue-600"
              >
                Terms
              </Link>

              <Link
                href="/contact"
                className="transition hover:text-blue-600"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">
              Connect
            </h3>

            <div className="mt-4 flex items-center gap-3">
              <span
                aria-label="Social links coming soon"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-sm text-gray-500"
              >
                X
              </span>

              <span
                aria-label="Social links coming soon"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-sm text-gray-500"
              >
                G
              </span>

              <span
                aria-label="Social links coming soon"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-sm text-gray-500"
              >
                I
              </span>
            </div>

            <p className="mt-3 text-xs leading-5 text-gray-400">
              More ways to connect will be added later.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-blue-100 pt-6 text-sm text-gray-400">
          © {new Date().getFullYear()} ConvertImageFreely. All rights reserved.
        </div>
      </div>
    </footer>
  );
}