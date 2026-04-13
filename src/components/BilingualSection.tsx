"use client";

import { useLanguage } from "@/lib/language-context";

interface Props {
  title: string;
  en?: string | null;
  tr: string;
  isTranslated: boolean;
  /** Render each line as a list item (for open questions) */
  asList?: boolean;
}

export default function BilingualSection({ title, en, tr, isTranslated, asList }: Props) {
  const { lang } = useLanguage();

  const showEn = isTranslated && !!en;
  const primary = showEn && lang === "en" ? en! : tr;
  const secondary = showEn ? (lang === "en" ? tr : en!) : null;
  const secondaryLabel = lang === "en" ? "Türkçe" : "English";

  const renderText = (text: string) => {
    if (asList) {
      const lines = text.split("\n").filter(Boolean);
      return (
        <ul className="space-y-1">
          {lines.map((line, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-cosmos-600 shrink-0">–</span>
              <span>{line.replace(/^[-–]\s*/, "")}</span>
            </li>
          ))}
        </ul>
      );
    }
    return <span className="whitespace-pre-wrap">{text}</span>;
  };

  return (
    <div className="space-y-2">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-cosmos-400">
        {title}
      </h2>
      <div className="rounded-lg border border-cosmos-800 bg-cosmos-900/40 p-4 text-sm text-cosmos-200 leading-relaxed">
        {renderText(primary)}
        {secondary && (
          <details className="mt-4">
            <summary className="cursor-pointer text-xs text-cosmos-600 hover:text-cosmos-400 transition-colors select-none">
              {secondaryLabel}
            </summary>
            <div className="mt-2 pt-2 border-t border-cosmos-800/50 text-cosmos-400 text-xs leading-relaxed">
              {renderText(secondary)}
            </div>
          </details>
        )}
      </div>
    </div>
  );
}
