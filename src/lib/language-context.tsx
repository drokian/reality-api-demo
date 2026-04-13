"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Language = "en" | "tr";

const LanguageContext = createContext<{
  lang: Language;
  toggle: () => void;
}>({ lang: "en", toggle: () => {} });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("en");

  useEffect(() => {
    const stored = localStorage.getItem("lang") as Language | null;
    if (stored === "tr") setLang("tr");
  }, []);

  const toggle = () => {
    setLang((prev) => {
      const next = prev === "en" ? "tr" : "en";
      localStorage.setItem("lang", next);
      return next;
    });
  };

  return (
    <LanguageContext.Provider value={{ lang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
