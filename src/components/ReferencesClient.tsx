"use client";

import { useLanguage } from "@/lib/language-context";
import { REFERENCE_CATEGORY_LABELS } from "@/lib/observations";

interface Reference {
  id: number;
  number: number;
  authors: string;
  year: number;
  title: string;
  publication: string | null;
  volume: string | null;
  pages: string | null;
  description: string;
  descriptionEn: string | null;
  category: string;
  url: string | null;
}

export default function ReferencesClient({
  grouped,
  sortedCategories,
}: {
  grouped: Record<string, Reference[]>;
  sortedCategories: string[];
}) {
  const { lang } = useLanguage();

  const heading = lang === "en" ? "Academic References" : "Akademik Referanslar";

  return (
    <div className="space-y-10">
      <h1 className="text-2xl font-bold text-cosmos-100">{heading}</h1>

      {sortedCategories.map((category) => (
        <section key={category} className="space-y-4">
          <h2 className="text-lg font-semibold text-cosmos-300 border-b border-cosmos-800 pb-2">
            {lang === "en"
              ? (REFERENCE_CATEGORY_LABELS[category] ?? category)
              : category}
          </h2>
          <div className="space-y-3">
            {grouped[category].map((ref) => (
              <div
                key={ref.id}
                className="rounded-lg border border-cosmos-800 bg-cosmos-900/40 p-4"
              >
                <div className="flex items-start gap-3">
                  <span className="shrink-0 rounded bg-cosmos-800 px-2 py-0.5 text-xs font-mono text-cosmos-400">
                    {ref.number}
                  </span>
                  <div className="space-y-1">
                    <p className="text-sm text-cosmos-200">
                      <span className="font-medium">{ref.authors}</span>
                      <span className="text-cosmos-400"> ({ref.year})</span>
                    </p>
                    {ref.url ? (
                      <a
                        href={ref.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-accent-hover transition-colors text-sm"
                      >
                        {ref.title}
                        <span className="ml-1 text-xs">&#8599;</span>
                      </a>
                    ) : (
                      <p className="text-sm text-cosmos-100">{ref.title}</p>
                    )}
                    {ref.publication && (
                      <p className="text-xs text-cosmos-400 italic">
                        {ref.publication}
                        {ref.volume && `, ${ref.volume}`}
                        {ref.pages && `, ${ref.pages}`}
                      </p>
                    )}
                    {ref.description && (
                      <p className="text-xs text-cosmos-400 mt-1">
                        {lang === "en" && ref.descriptionEn ? ref.descriptionEn : ref.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
