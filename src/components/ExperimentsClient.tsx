"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language-context";

type Experiment = {
  id: number;
  title: string;
  description: string;
  methodology: string;
  equipment: string | null;
  estimatedBudget: number | null;
  expectedResult: string;
  alternativeResult: string | null;
  status: string;
  duration: string | null;
  fundingSource: string | null;
  createdAt: string;
  hypotheses: { id: number; title: string; status: string }[];
  analyses: { id: number; title: string }[];
  tags: { id: number; name: string }[];
};

const STATUS_CONFIG: Record<string, { label: string; labelTr: string; color: string; step: number }> = {
  PLANNED:   { label: "Planned",   labelTr: "Planlandı",    color: "text-cosmos-400 border-cosmos-600 bg-cosmos-800/60", step: 1 },
  PROPOSED:  { label: "Proposed",  labelTr: "Önerildi",     color: "text-yellow-400 border-yellow-400/40 bg-yellow-400/10", step: 2 },
  FUNDED:    { label: "Funded",    labelTr: "Fonlandı",     color: "text-blue-400   border-blue-400/40   bg-blue-400/10",   step: 3 },
  RUNNING:   { label: "Running",   labelTr: "Devam Ediyor", color: "text-purple-400 border-purple-400/40 bg-purple-400/10", step: 4 },
  COMPLETED: { label: "Completed", labelTr: "Tamamlandı",   color: "text-green-400  border-green-400/40  bg-green-400/10",  step: 5 },
};

const PIPELINE = ["PLANNED", "PROPOSED", "FUNDED", "RUNNING", "COMPLETED"];

function StatusBadge({ status, lang }: { status: string; lang: "en" | "tr" }) {
  const cfg = STATUS_CONFIG[status] ?? { label: status, labelTr: status, color: "text-cosmos-400 border-cosmos-700 bg-cosmos-800" };
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded border text-xs font-medium ${cfg.color}`}>
      {lang === "tr" ? cfg.labelTr : cfg.label}
    </span>
  );
}

function Timeline({ status }: { status: string }) {
  const current = STATUS_CONFIG[status]?.step ?? 0;
  return (
    <div className="flex items-center gap-1 mt-3">
      {PIPELINE.map((s, i) => {
        const step = i + 1;
        const active = step <= current;
        const isCurrent = step === current;
        return (
          <div key={s} className="flex items-center">
            <div className={`w-2 h-2 rounded-full transition-colors ${
              isCurrent ? "bg-accent scale-125" : active ? "bg-cosmos-400" : "bg-cosmos-700"
            }`} />
            {i < PIPELINE.length - 1 && (
              <div className={`h-px w-6 ${active && step < current ? "bg-cosmos-400" : "bg-cosmos-700"}`} />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function ExperimentsClient({ experiments }: { experiments: Experiment[] }) {
  const { lang } = useLanguage();
  const safeExperiments = experiments ?? [];

  const ui = {
    en: {
      heading: "Experiments",
      sub: "Proposed experiments to test computational universe hypotheses.",
      empty: "No experiments recorded yet.",
      budget: "Budget",
      duration: "Duration",
      hypotheses: "Hypotheses",
      analyses: "Analyses",
    },
    tr: {
      heading: "Deneyler",
      sub: "Hesaplamalı evren hipotezlerini test etmek için önerilen deneyler.",
      empty: "Henüz deney kaydedilmedi.",
      budget: "Bütçe",
      duration: "Süre",
      hypotheses: "Hipotezler",
      analyses: "Analizler",
    },
  }[lang];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold text-cosmos-100">{ui.heading}</h1>
        <p className="mt-1 text-sm text-cosmos-400">{ui.sub}</p>
      </div>

      {safeExperiments.length === 0 && (
        <div className="rounded border border-cosmos-800 bg-cosmos-900/50 px-6 py-12 text-center">
          <p className="text-cosmos-400">{ui.empty}</p>
        </div>
      )}

      <div className="space-y-4">
        {safeExperiments.map((exp) => {
          const tags = exp.tags ?? [];
          const hypotheses = exp.hypotheses ?? [];
          const analyses = exp.analyses ?? [];

          return (
          <Link key={exp.id} href={`/experiments/${exp.id}`} className="block">
            <div className="rounded border border-cosmos-800 bg-cosmos-900/50 p-5 hover:border-cosmos-700 transition-colors">
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-base font-medium text-cosmos-100 leading-snug">{exp.title}</h2>
                <StatusBadge status={exp.status} lang={lang} />
              </div>

              <p className="mt-2 text-sm text-cosmos-400 line-clamp-2">{exp.description}</p>

              <Timeline status={exp.status} />

              <div className="mt-3 flex items-center gap-4 flex-wrap text-xs text-cosmos-500">
                {exp.estimatedBudget != null && (
                  <span>{ui.budget}: <span className="text-cosmos-300">${exp.estimatedBudget.toLocaleString()}</span></span>
                )}
                {exp.duration && (
                  <span>{ui.duration}: <span className="text-cosmos-300">{exp.duration}</span></span>
                )}
                {tags.map((t) => (
                  <span key={t.id} className="px-1.5 py-0.5 rounded bg-cosmos-800 text-cosmos-400">{t.name}</span>
                ))}
                <span className="ml-auto">
                  {hypotheses.length} {ui.hypotheses} · {analyses.length} {ui.analyses}
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
