import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col justify-between gap-8 md:flex-row">

          <div>
            <Link
              href="/"
              className="font-bold text-gray-900"
            >
              Image Tools
            </Link>

            <p className="mt-2 max-w-sm text-sm leading-6 text-gray-500">
              Simple and free image tools that work directly
              in your browser.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-500">
            <Link
              href="/"
              className="transition hover:text-gray-900"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="transition hover:text-gray-900"
            >
              About
            </Link>

            <Link
              href="/privacy"
              className="transition hover:text-gray-900"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition hover:text-gray-900"
            >
              Terms
            </Link>

            <Link
              href="/contact"
              className="transition hover:text-gray-900"
            >
              Contact
            </Link>
          </nav>
        </div>

        <div className="mt-8 border-t pt-6 text-sm text-gray-400">
          © {new Date().getFullYear()} Image Tools. All rights reserved.
        </div>
      </div>
    </footer>
  );
}