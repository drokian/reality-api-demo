"use client";

import { useLanguage } from "@/lib/language-context";

interface Props {
  en?: string | null;
  tr: string;
  isTranslated: boolean;
}

export default function BilingualTitle({ en, tr, isTranslated }: Props) {
  const { lang } = useLanguage();

  const showEn = isTranslated && !!en;
  const primary = showEn && lang === "en" ? en! : tr;
  const secondary = showEn ? (lang === "en" ? tr : en!) : null;

  return (
    <div>
      <h1 className="text-2xl font-bold text-cosmos-100">{primary}</h1>
      {secondary && (
        <p className="text-sm text-cosmos-600 mt-0.5">{secondary}</p>
      )}
    </div>
  );
}
