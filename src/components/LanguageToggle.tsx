"use client";

import { useLanguage } from "@/lib/language-context";

export default function LanguageToggle() {
  const { lang, toggle } = useLanguage();

  return (
    <button
      onClick={toggle}
      className="text-xs font-medium px-2 py-1 rounded border border-cosmos-700 text-cosmos-400 hover:text-cosmos-200 hover:border-cosmos-500 transition-colors"
      title={lang === "en" ? "Switch to Turkish" : "Switch to English"}
    >
      {lang === "en" ? "TR" : "EN"}
    </button>
  );
}
