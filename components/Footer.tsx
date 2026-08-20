import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-blue-100 bg-blue-50/40">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <div>
            <Link
              href="/"
              className="font-bold text-blue-600 transition hover:text-blue-700"
            >
              ConvertImageFreely
            </Link>

            <p className="mt-2 max-w-sm text-sm leading-6 text-gray-500">
              Simple and free image conversion tools that work
              directly in your browser.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-500">
            <Link
              href="/"
              className="transition hover:text-blue-600"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="transition hover:text-blue-600"
            >
              About
            </Link>

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

            <Link
              href="/guides"
              className="transition hover:text-blue-600"
            >
              Guides
            </Link>
          </nav>
        </div>

        <div className="mt-8 border-t border-blue-100 pt-6 text-sm text-gray-400">
          © {new Date().getFullYear()} ConvertImageFreely. All rights reserved.
        </div>
      </div>
    </footer>
  );
}