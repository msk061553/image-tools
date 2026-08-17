import en from "@/locales/en.json";
import ko from "@/locales/ko.json";
import ja from "@/locales/ja.json";
import zh from "@/locales/zh.json";
import es from "@/locales/es.json";
import de from "@/locales/de.json";


export const locales = ["en", "ko", "ja", "zh", "es", "de"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const translations = {
  en,
  ko,
  ja,
  zh,
  es,
  de,
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getTranslations(locale: Locale) {
  return translations[locale];
}