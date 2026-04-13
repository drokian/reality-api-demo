"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { useLanguage } from "@/lib/language-context";
import { CATEGORY_LABELS, CONFIDENCE_LABELS } from "@/lib/observations";

const confidenceColors: Record<string, string> = {
  "yüksek": "bg-green-900/40 text-green-400 border-green-800",
  "orta": "bg-yellow-900/40 text-yellow-400 border-yellow-800",
  "düşük": "bg-orange-900/40 text-orange-400 border-orange-800",
  "spekülatif": "bg-purple-900/40 text-purple-400 border-purple-800",
};

interface Observation {
  id: number;
  number: number;
  title: string;
  titleEn: string | null;
  date: string;
  category: string;
  confidence: string;
  description: string;
  descriptionEn: string | null;
  translationStatus: string;
}

const ALL = "__all__";

export default function ObservationsClient({
  observations,
}: {
  observations: Observation[];
}) {
  const { lang } = useLanguage();
  const translated = lang === "en";

  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState(ALL);
  const [filterConfidence, setFilterConfidence] = useState(ALL);

  const ui = {
    en: {
      heading: "Observations",
      empty: "No observations recorded yet.",
      noResults: "No observations match your filters.",
      searchPlaceholder: "Search observations...",
      allCategories: "All categories", allConfidence: "All confidence levels",
      showing: "Showing", of: "of",
    },
    tr: {
      heading: "Gözlemler",
      empty: "Henüz gözlem kaydedilmedi.",
      noResults: "Filtrelerinize uyan gözlem bulunamadı.",
      searchPlaceholder: "Gözlem ara...",
      allCategories: "Tüm kategoriler", allConfidence: "Tüm güvenilirlik",
      showing: "Gösterilen", of: "/",
    },
  }[lang];

  const categories = useMemo(() => [...new Set(observations.map((o) => o.category))], [observations]);
  const confidenceLevels = useMemo(() => [...new Set(observations.map((o) => o.confidence))], [observations]);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return observations.filter((obs) => {
      if (filterCategory !== ALL && obs.category !== filterCategory) return false;
      if (filterConfidence !== ALL && obs.confidence !== filterConfidence) return false;
      if (q) {
        const titleMatch = obs.title.toLowerCase().includes(q) || obs.titleEn?.toLowerCase().includes(q);
        const descMatch = obs.description.toLowerCase().includes(q) || obs.descriptionEn?.toLowerCase().includes(q);
        if (!titleMatch && !descMatch) return false;
      }
      return true;
    });
  }, [observations, search, filterCategory, filterConfidence]);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-cosmos-100">{ui.heading}</h1>

      {/* Search + filters */}
      {observations.length > 0 && (
        <div className="flex flex-wrap gap-3">
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={ui.searchPlaceholder}
            className="flex-1 min-w-48 rounded border border-cosmos-700 bg-cosmos-950 px-3 py-1.5 text-sm text-cosmos-100 placeholder-cosmos-600 focus:outline-none focus:border-accent/60"
          />
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="rounded border border-cosmos-700 bg-cosmos-950 px-3 py-1.5 text-sm text-cosmos-300 focus:outline-none focus:border-accent/60"
          >
            <option value={ALL}>{ui.allCategories}</option>
            {categories.map((c) => (
              <option key={c} value={c}>{translated ? (CATEGORY_LABELS[c] ?? c) : c}</option>
            ))}
          </select>
          <select
            value={filterConfidence}
            onChange={(e) => setFilterConfidence(e.target.value)}
            className="rounded border border-cosmos-700 bg-cosmos-950 px-3 py-1.5 text-sm text-cosmos-300 focus:outline-none focus:border-accent/60"
          >
            <option value={ALL}>{ui.allConfidence}</option>
            {confidenceLevels.map((c) => (
              <option key={c} value={c}>{translated ? (CONFIDENCE_LABELS[c] ?? c) : c}</option>
            ))}
          </select>
          {(search || filterCategory !== ALL || filterConfidence !== ALL) && (
            <span className="self-center text-xs text-cosmos-500">
              {ui.showing} {filtered.length} {ui.of} {observations.length}
            </span>
          )}
        </div>
      )}

      {observations.length === 0 ? (
        <div className="rounded-lg border border-cosmos-800 bg-cosmos-900/40 p-12 text-center">
          <p className="text-cosmos-400">{ui.empty}</p>
        </div>
      ) : filtered.length === 0 ? (
        <div className="rounded-lg border border-cosmos-800 bg-cosmos-900/40 p-8 text-center">
          <p className="text-cosmos-400">{ui.noResults}</p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((obs) => {
            const isTranslated = obs.translationStatus === "completed";
            const title = translated && isTranslated && obs.titleEn ? obs.titleEn : obs.title;
            const description = translated && isTranslated && obs.descriptionEn ? obs.descriptionEn : obs.description;

            return (
              <Link
                key={obs.id}
                href={`/observations/${obs.id}`}
                className="block rounded-lg border border-cosmos-800 bg-cosmos-900/40 p-4 hover:border-cosmos-700 hover:bg-cosmos-900/60 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-cosmos-600">
                        #{String(obs.number).padStart(3, "0")}
                      </span>
                      <h3 className="font-medium text-cosmos-100">{title}</h3>
                    </div>
                    <p className="text-xs text-cosmos-400">
                      {new Date(obs.date).toLocaleDateString("en-GB", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                    <p className="text-sm text-cosmos-300 line-clamp-2 mt-1">
                      {description}
                    </p>
                  </div>
                  <div className="flex shrink-0 gap-2">
                    <span className="rounded border border-cosmos-700 bg-cosmos-800/50 px-2 py-0.5 text-xs text-cosmos-400">
                      {CATEGORY_LABELS[obs.category] ?? obs.category}
                    </span>
                    <span
                      className={`rounded border px-2 py-0.5 text-xs ${
                        confidenceColors[obs.confidence] || "bg-cosmos-800 text-cosmos-400 border-cosmos-700"
                      }`}
                    >
                      {CONFIDENCE_LABELS[obs.confidence] ?? obs.confidence}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
