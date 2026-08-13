"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const languages = [
  {
    code: "en",
    label: "English",
  },
  {
    code: "ko",
    label: "한국어",
  },
];

const localizedLocales = ["ko"];

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  function getPathWithoutLocale() {
    for (const locale of localizedLocales) {
      if (
        pathname === `/${locale}` ||
        pathname.startsWith(`/${locale}/`)
      ) {
        const path = pathname.substring(locale.length + 1);

        return path || "/";
      }
    }

    return pathname;
  }

  function handleLanguageChange(locale: string) {
    setIsOpen(false);

    const currentPath = getPathWithoutLocale();

    if (locale === "en") {
      router.push(currentPath);
      return;
    }

    router.push(
      `/${locale}${currentPath === "/" ? "" : currentPath}`
    );
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        className="flex items-center gap-1 rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-700 transition hover:border-gray-300 hover:bg-gray-50"
        aria-expanded={isOpen}
        aria-haspopup="menu"
      >
        Language
        <span className="text-xs">▾</span>
      </button>

      {isOpen && (
        <div
          className="absolute right-0 top-full z-50 mt-2 w-36 rounded-xl border border-gray-200 bg-white p-2 shadow-lg"
          role="menu"
        >
          {languages.map((language) => (
            <button
              key={language.code}
              type="button"
              onClick={() =>
                handleLanguageChange(language.code)
              }
              className="block w-full rounded-lg px-3 py-2 text-left text-sm text-gray-700 transition hover:bg-gray-100"
              role="menuitem"
            >
              {language.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}