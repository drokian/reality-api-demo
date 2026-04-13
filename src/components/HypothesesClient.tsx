"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { useLanguage } from "@/lib/language-context";

type Hypothesis = {
  id: number;
  title: string;
  titleTr: string | null;
  description: string;
  descriptionTr: string | null;
  prediction: string;
  predictionTr: string | null;
  alternativeOutcome: string;
  alternativeOutcomeTr: string | null;
  mathematicalForm: string | null;
  status: string;
  confidenceScore: number;
  translationStatus: string;
  lastTestedAt: string | null;
  createdAt: string;
  observations: { id: number; number: number; title: string }[];
  references: { id: number; number: number; authors: string; title: string }[];
  experiments: { id: number; title: string; status: string }[];
  tags: { id: number; name: string }[];
};

const STATUS_CONFIG: Record<string, { label: string; color: string }> = {
  PROPOSED: { label: "Proposed", color: "text-yellow-400 border-yellow-400/40 bg-yellow-400/10" },
  TESTING:  { label: "Testing",  color: "text-blue-400  border-blue-400/40  bg-blue-400/10"  },
  SUPPORTED:{ label: "Supported",color: "text-green-400 border-green-400/40 bg-green-400/10" },
  REFUTED:  { label: "Refuted",  color: "text-red-400   border-red-400/40   bg-red-400/10"   },
};

function StatusBadge({ status }: { status: string }) {
  const cfg = STATUS_CONFIG[status] ?? { label: status, color: "text-cosmos-400 border-cosmos-700 bg-cosmos-800" };
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded border text-xs font-medium ${cfg.color}`}>
      {cfg.label}
    </span>
  );
}

function ConfidenceBar({ score }: { score: number }) {
  const pct = Math.round(score * 100);
  const color = score >= 0.7 ? "bg-green-500" : score >= 0.4 ? "bg-yellow-500" : "bg-red-500";
  return (
    <div className="flex items-center gap-2">
      <div className="h-1.5 w-20 rounded-full bg-cosmos-800 overflow-hidden">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${pct}%` }} />
      </div>
      <span className="text-xs text-cosmos-400">{pct}%</span>
    </div>
  );
}

const ALL = "__all__";
const STATUSES = ["PROPOSED", "TESTING", "SUPPORTED", "REFUTED"];

export default function HypothesesClient({ hypotheses }: { hypotheses: Hypothesis[] }) {
  const { lang } = useLanguage();
  const safeHypotheses = hypotheses ?? [];
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState(ALL);

  const ui = {
    en: {
      heading: "Hypotheses",
      sub: "Falsifiable predictions about the computational nature of reality.",
      empty: "No hypotheses recorded yet.",
      emptyHint: "Start by adding a falsifiable hypothesis.",
      noResults: "No hypotheses match your filters.",
      prediction: "Prediction",
      observations: "Observations",
      references: "References",
      experiments: "Experiments",
      confidence: "Confidence",
      searchPlaceholder: "Search hypotheses...",
      allStatuses: "All statuses",
      showing: "Showing", of: "of",
    },
    tr: {
      heading: "Hipotezler",
      sub: "Gerçekliğin hesaplamalı doğasına dair yanlışlanabilir tahminler.",
      empty: "Henüz hipotez kaydedilmedi.",
      emptyHint: "Yanlışlanabilir bir hipotez ekleyerek başla.",
      noResults: "Filtrelerinize uyan hipotez bulunamadı.",
      prediction: "Tahmin",
      observations: "Gözlemler",
      references: "Referanslar",
      experiments: "Deneyler",
      confidence: "Güven",
      searchPlaceholder: "Hipotez ara...",
      allStatuses: "Tüm durumlar",
      showing: "Gösterilen", of: "/",
    },
  }[lang];

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return safeHypotheses.filter((h) => {
      if (filterStatus !== ALL && h.status !== filterStatus) return false;
      if (q) {
        const match = h.title.toLowerCase().includes(q)
          || h.titleTr?.toLowerCase().includes(q)
          || h.description.toLowerCase().includes(q)
          || h.prediction.toLowerCase().includes(q);
        if (!match) return false;
      }
      return true;
    });
  }, [safeHypotheses, search, filterStatus]);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-cosmos-100">{ui.heading}</h1>
        <p className="mt-1 text-sm text-cosmos-400">{ui.sub}</p>
      </div>

      {/* Search + filter */}
      {safeHypotheses.length > 0 && (
        <div className="flex flex-wrap gap-3">
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={ui.searchPlaceholder}
            className="flex-1 min-w-48 rounded border border-cosmos-700 bg-cosmos-950 px-3 py-1.5 text-sm text-cosmos-100 placeholder-cosmos-600 focus:outline-none focus:border-accent/60"
          />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="rounded border border-cosmos-700 bg-cosmos-950 px-3 py-1.5 text-sm text-cosmos-300 focus:outline-none focus:border-accent/60"
          >
            <option value={ALL}>{ui.allStatuses}</option>
            {STATUSES.map((s) => (
              <option key={s} value={s}>{STATUS_CONFIG[s]?.label ?? s}</option>
            ))}
          </select>
          {(search || filterStatus !== ALL) && (
            <span className="self-center text-xs text-cosmos-500">
              {ui.showing} {filtered.length} {ui.of} {safeHypotheses.length}
            </span>
          )}
        </div>
      )}

      {/* Empty state */}
      {safeHypotheses.length === 0 ? (
        <div className="rounded border border-cosmos-800 bg-cosmos-900/50 px-6 py-12 text-center">
          <p className="text-cosmos-400">{ui.empty}</p>
          <p className="mt-1 text-sm text-cosmos-600">{ui.emptyHint}</p>
        </div>
      ) : filtered.length === 0 ? (
        <div className="rounded border border-cosmos-800 bg-cosmos-900/50 px-6 py-8 text-center">
          <p className="text-cosmos-400">{ui.noResults}</p>
        </div>
      ) : null}

      {/* List */}
      <div className="space-y-4">
        {filtered.map((h) => {
          const tags = h.tags ?? [];
          const observations = h.observations ?? [];
          const references = h.references ?? [];
          const experiments = h.experiments ?? [];
          const confidence = typeof h.confidenceScore === "number" ? h.confidenceScore : 0;

          return (
          <Link key={h.id} href={`/hypotheses/${h.id}`} className="block">
            <div className="rounded border border-cosmos-800 bg-cosmos-900/50 p-5 hover:border-cosmos-700 transition-colors">
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-base font-medium text-cosmos-100 leading-snug">
                  {lang === "tr" && h.titleTr ? h.titleTr : h.title}
                </h2>
                <div className="flex items-center gap-2 shrink-0">
                  <StatusBadge status={h.status} />
                </div>
              </div>

              <p className="mt-2 text-sm text-cosmos-400 line-clamp-2">
                {lang === "tr" && h.descriptionTr ? h.descriptionTr : h.description}
              </p>

              <div className="mt-3 rounded bg-cosmos-800/50 px-3 py-2">
                <span className="text-xs font-medium text-cosmos-500 uppercase tracking-wide">{ui.prediction}: </span>
                <span className="text-xs text-cosmos-300">
                  {lang === "tr" && h.predictionTr ? h.predictionTr : h.prediction}
                </span>
              </div>

              <div className="mt-3 flex items-center gap-4 flex-wrap">
                <ConfidenceBar score={confidence} />
                {tags.map((t) => (
                  <span key={t.id} className="text-xs px-1.5 py-0.5 rounded bg-cosmos-800 text-cosmos-400">
                    {t.name}
                  </span>
                ))}
                <span className="ml-auto text-xs text-cosmos-600">
                  {observations.length} {ui.observations} · {references.length} {ui.references} · {experiments.length} {ui.experiments}
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
