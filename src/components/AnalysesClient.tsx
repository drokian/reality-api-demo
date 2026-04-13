"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language-context";

type Analysis = {
  id: number;
  title: string;
  titleTr: string | null;
  conclusion: string;
  conclusionTr: string | null;
  aiModel: string | null;
  reproducible: boolean;
  createdAt: string;
  experiments: { id: number; title: string }[];
  observations: { id: number; number: number; title: string }[];
  hypotheses: { id: number; title: string }[];
  tags: { id: number; name: string }[];
};

export default function AnalysesClient({ analyses }: { analyses: Analysis[] }) {
  const { lang } = useLanguage();
  const safeAnalyses = analyses ?? [];

  const ui = {
    en: {
      heading: "Analyses",
      sub: "Meta-analyses and AI-assisted research results.",
      empty: "No analyses recorded yet.",
      aiAssisted: "AI-assisted",
      reproducible: "Reproducible",
      experiments: "Experiments",
      observations: "Observations",
      hypotheses: "Hypotheses",
    },
    tr: {
      heading: "Analizler",
      sub: "Meta-analizler ve yapay zeka destekli araştırma sonuçları.",
      empty: "Henüz analiz kaydedilmedi.",
      aiAssisted: "AI destekli",
      reproducible: "Tekrarlanabilir",
      experiments: "Deneyler",
      observations: "Gözlemler",
      hypotheses: "Hipotezler",
    },
  }[lang];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold text-cosmos-100">{ui.heading}</h1>
        <p className="mt-1 text-sm text-cosmos-400">{ui.sub}</p>
      </div>

      {safeAnalyses.length === 0 && (
        <div className="rounded border border-cosmos-800 bg-cosmos-900/50 px-6 py-12 text-center">
          <p className="text-cosmos-400">{ui.empty}</p>
        </div>
      )}

      <div className="space-y-4">
        {safeAnalyses.map((a) => {
          const tags = a.tags ?? [];
          const hypotheses = a.hypotheses ?? [];
          const experiments = a.experiments ?? [];
          const observations = a.observations ?? [];

          return (
          <Link key={a.id} href={`/analyses/${a.id}`} className="block">
            <div className="rounded border border-cosmos-800 bg-cosmos-900/50 p-5 hover:border-cosmos-700 transition-colors">
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-base font-medium text-cosmos-100 leading-snug">
                  {lang === "tr" ? (a.titleTr ?? a.title) : a.title}
                </h2>
                <div className="flex gap-1.5 shrink-0">
                  {a.aiModel && (
                    <span className="text-xs px-1.5 py-0.5 rounded border border-purple-400/30 bg-purple-400/10 text-purple-400">
                      {ui.aiAssisted}
                    </span>
                  )}
                  {a.reproducible && (
                    <span className="text-xs px-1.5 py-0.5 rounded border border-green-400/30 bg-green-400/10 text-green-400">
                      {ui.reproducible}
                    </span>
                  )}
                </div>
              </div>

              <p className="mt-2 text-sm text-cosmos-400 line-clamp-2">
                {lang === "tr" ? (a.conclusionTr ?? a.conclusion) : a.conclusion}
              </p>

              <div className="mt-3 flex items-center gap-3 flex-wrap text-xs text-cosmos-500">
                {tags.map((t) => (
                  <span key={t.id} className="px-1.5 py-0.5 rounded bg-cosmos-800 text-cosmos-400">{t.name}</span>
                ))}
                <span className="ml-auto">
                  {hypotheses.length > 0 && <>{hypotheses.length} {ui.hypotheses} · </>}
                  {experiments.length} {ui.experiments} · {observations.length} {ui.observations}
                </span>
              </div>
            </div>
          </Link>
          );
        })}
      </div>
    </div>
  );
}
