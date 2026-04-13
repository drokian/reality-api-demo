"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language-context";

type Analysis = {
  id: number;
  title: string;
  titleTr: string | null;
  sourceData: string;
  sourceDataTr: string | null;
  methodology: string;
  methodologyTr: string | null;
  result: string;
  resultTr: string | null;
  conclusion: string;
  conclusionTr: string | null;
  aiModel: string | null;
  reproducible: boolean;
  createdAt: string;
  updatedAt: string;
  experiments: { id: number; title: string; status: string }[];
  observations: { id: number; number: number; title: string; confidence: string }[];
  hypotheses: { id: number; title: string; status: string }[];
  tags: { id: number; name: string }[];
};

const CONFIDENCE_LABELS: Record<string, { en: string; tr: string }> = {
  yüksek:    { en: "High",        tr: "Yüksek"    },
  orta:      { en: "Medium",      tr: "Orta"      },
  düşük:     { en: "Low",         tr: "Düşük"     },
  spekülatif:{ en: "Speculative", tr: "Spekülatif" },
};

export default function AnalysisDetail({ analysis: a }: { analysis: Analysis }) {
  const { lang } = useLanguage();
  const tags = a.tags ?? [];
  const hypotheses = a.hypotheses ?? [];
  const experiments = a.experiments ?? [];
  const observations = a.observations ?? [];

  const labels = {
    en: {
      back: "← Analyses", sourceData: "Source Data", methodology: "Methodology",
      result: "Result", conclusion: "Conclusion", aiModel: "AI Model",
      reproducible: "Reproducible", notReproducible: "Not reproducible",
      hypotheses: "Linked Hypotheses", experiments: "Linked Experiments", observations: "Linked Observations",
      tags: "Tags", created: "Created",
    },
    tr: {
      back: "← Analizler", sourceData: "Kaynak Veri", methodology: "Metodoloji",
      result: "Sonuç", conclusion: "Yorum", aiModel: "AI Modeli",
      reproducible: "Tekrarlanabilir", notReproducible: "Tekrarlanamaz",
      hypotheses: "İlişkili Hipotezler", experiments: "İlişkili Deneyler", observations: "İlişkili Gözlemler",
      tags: "Etiketler", created: "Oluşturulma",
    },
  }[lang];

  return (
    <div className="space-y-8 max-w-3xl">
      <Link href="/analyses" className="text-sm text-cosmos-400 hover:text-cosmos-200 transition-colors">
        {labels.back}
      </Link>

      <div className="space-y-3">
        <h1 className="text-2xl font-semibold text-cosmos-100 leading-snug">
          {lang === "tr" ? (a.titleTr ?? a.title) : a.title}
        </h1>
        <div className="flex flex-wrap gap-2">
          {a.aiModel && (
            <span className="text-xs px-2 py-0.5 rounded border border-purple-400/30 bg-purple-400/10 text-purple-400">
              AI: {a.aiModel}
            </span>
          )}
          <span className={`text-xs px-2 py-0.5 rounded border ${
            a.reproducible
              ? "border-green-400/30 bg-green-400/10 text-green-400"
              : "border-red-400/30 bg-red-400/10 text-red-400"
          }`}>
            {a.reproducible ? labels.reproducible : labels.notReproducible}
          </span>
          {tags.map((t) => (
            <span key={t.id} className="text-xs px-2 py-0.5 rounded bg-cosmos-800 text-cosmos-400">{t.name}</span>
          ))}
        </div>
      </div>

      <section>
        <h2 className="text-sm font-medium text-cosmos-400 uppercase tracking-wide mb-2">{labels.sourceData}</h2>
        <p className="text-sm text-cosmos-300 leading-relaxed">
          {lang === "tr" ? (a.sourceDataTr ?? a.sourceData) : a.sourceData}
        </p>
      </section>

      <section>
        <h2 className="text-sm font-medium text-cosmos-400 uppercase tracking-wide mb-2">{labels.methodology}</h2>
        <p className="text-sm text-cosmos-300 leading-relaxed whitespace-pre-wrap">
          {lang === "tr" ? (a.methodologyTr ?? a.methodology) : a.methodology}
        </p>
      </section>

      <div className="rounded border border-cosmos-800 bg-cosmos-900/50 px-4 py-4">
        <p className="text-xs font-medium text-cosmos-500 uppercase tracking-wide mb-2">{labels.result}</p>
        <p className="text-sm text-cosmos-200 leading-relaxed whitespace-pre-wrap">
          {lang === "tr" ? (a.resultTr ?? a.result) : a.result}
        </p>
      </div>

      <div className="rounded border border-accent/20 bg-accent/5 px-4 py-4">
        <p className="text-xs font-medium text-accent/70 uppercase tracking-wide mb-2">{labels.conclusion}</p>
        <p className="text-sm text-cosmos-200 leading-relaxed">
          {lang === "tr" ? (a.conclusionTr ?? a.conclusion) : a.conclusion}
        </p>
      </div>

      {hypotheses.length > 0 && (
        <section>
          <h2 className="text-sm font-medium text-cosmos-400 uppercase tracking-wide mb-3">{labels.hypotheses}</h2>
          <div className="space-y-2">
            {hypotheses.map((h) => (
              <Link key={h.id} href={`/hypotheses/${h.id}`}
                className="flex items-center gap-3 rounded border border-cosmos-800 bg-cosmos-900/50 px-4 py-2.5 hover:border-cosmos-700 transition-colors">
                <span className="text-sm text-cosmos-300 flex-1 truncate">{h.title}</span>
                <span className="text-xs text-cosmos-500">{h.status}</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {experiments.length > 0 && (
        <section>
          <h2 className="text-sm font-medium text-cosmos-400 uppercase tracking-wide mb-3">{labels.experiments}</h2>
          <div className="space-y-2">
            {experiments.map((exp) => (
              <Link key={exp.id} href={`/experiments/${exp.id}`}
                className="flex items-center gap-3 rounded border border-cosmos-800 bg-cosmos-900/50 px-4 py-2.5 hover:border-cosmos-700 transition-colors">
                <span className="text-sm text-cosmos-300 flex-1 truncate">{exp.title}</span>
                <span className="text-xs text-cosmos-500">{exp.status}</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {observations.length > 0 && (
        <section>
          <h2 className="text-sm font-medium text-cosmos-400 uppercase tracking-wide mb-3">{labels.observations}</h2>
          <div className="space-y-2">
            {observations.map((o) => (
              <Link key={o.id} href={`/observations/${o.id}`}
                className="flex items-center gap-3 rounded border border-cosmos-800 bg-cosmos-900/50 px-4 py-2.5 hover:border-cosmos-700 transition-colors">
                <span className="text-xs text-cosmos-500 font-mono">#{String(o.number).padStart(3, "0")}</span>
                <span className="text-sm text-cosmos-300 flex-1 truncate">{o.title}</span>
                <span className="text-xs text-cosmos-500">
                  {CONFIDENCE_LABELS[o.confidence]?.[lang] ?? o.confidence}
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <div className="text-xs text-cosmos-600 border-t border-cosmos-800 pt-4">
        {labels.created} {new Date(a.createdAt).toLocaleDateString()}
      </div>
    </div>
  );
}
