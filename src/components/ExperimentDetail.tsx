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
  updatedAt: string;
  hypotheses: { id: number; title: string; status: string; confidenceScore: number }[];
  analyses: { id: number; title: string; conclusion: string; createdAt: string }[];
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

export default function ExperimentDetail({ experiment: exp }: { experiment: Experiment }) {
  const { lang } = useLanguage();
  const statusCfg = STATUS_CONFIG[exp.status] ?? STATUS_CONFIG.PLANNED;
  const currentStep = statusCfg.step;

  const labels = {
    en: {
      back: "← Experiments", status: "Status", budget: "Estimated Budget",
      duration: "Duration", funding: "Funding Source", methodology: "Methodology",
      equipment: "Equipment / Resources", expectedResult: "Expected Result",
      alternativeResult: "Alternative Result", hypotheses: "Linked Hypotheses",
      analyses: "Analyses", tags: "Tags", created: "Created",
    },
    tr: {
      back: "← Deneyler", status: "Durum", budget: "Tahmini Bütçe",
      duration: "Süre", funding: "Fon Kaynağı", methodology: "Metodoloji",
      equipment: "Ekipman / Kaynaklar", expectedResult: "Beklenen Sonuç",
      alternativeResult: "Alternatif Sonuç", hypotheses: "İlişkili Hipotezler",
      analyses: "Analizler", tags: "Etiketler", created: "Oluşturulma",
    },
  }[lang];

  return (
    <div className="space-y-8 max-w-3xl">
      <Link href="/experiments" className="text-sm text-cosmos-400 hover:text-cosmos-200 transition-colors">
        {labels.back}
      </Link>

      <div className="space-y-3">
        <div className="flex items-start justify-between gap-4">
          <h1 className="text-2xl font-semibold text-cosmos-100 leading-snug">{exp.title}</h1>
          <span className={`inline-flex items-center px-2.5 py-1 rounded border text-sm font-medium ${statusCfg.color}`}>
            {lang === "tr" ? statusCfg.labelTr : statusCfg.label}
          </span>
        </div>

        {/* Pipeline timeline */}
        <div className="flex items-center gap-2">
          {PIPELINE.map((s, i) => {
            const step = i + 1;
            const cfg = STATUS_CONFIG[s];
            const active = step <= currentStep;
            const isCurrent = step === currentStep;
            return (
              <div key={s} className="flex items-center gap-2">
                <div className="flex flex-col items-center gap-1">
                  <div className={`w-2.5 h-2.5 rounded-full transition-all ${isCurrent ? "bg-accent scale-125" : active ? "bg-cosmos-400" : "bg-cosmos-700"}`} />
                  <span className={`text-[10px] ${isCurrent ? "text-accent" : active ? "text-cosmos-400" : "text-cosmos-600"}`}>
                    {lang === "tr" ? cfg.labelTr : cfg.label}
                  </span>
                </div>
                {i < PIPELINE.length - 1 && (
                  <div className={`h-px w-8 mb-3 ${active && step < currentStep ? "bg-cosmos-400" : "bg-cosmos-700"}`} />
                )}
              </div>
            );
          })}
        </div>

        {exp.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {exp.tags.map((t) => (
              <span key={t.id} className="text-xs px-2 py-0.5 rounded bg-cosmos-800 text-cosmos-400">{t.name}</span>
            ))}
          </div>
        )}
      </div>

      <p className="text-cosmos-300 leading-relaxed">{exp.description}</p>

      <div className="grid grid-cols-2 gap-3 text-sm">
        {exp.estimatedBudget != null && (
          <div className="rounded border border-cosmos-800 bg-cosmos-900/50 px-4 py-3">
            <p className="text-xs text-cosmos-500 mb-1">{labels.budget}</p>
            <p className="text-cosmos-200 font-medium">${exp.estimatedBudget.toLocaleString()}</p>
          </div>
        )}
        {exp.duration && (
          <div className="rounded border border-cosmos-800 bg-cosmos-900/50 px-4 py-3">
            <p className="text-xs text-cosmos-500 mb-1">{labels.duration}</p>
            <p className="text-cosmos-200">{exp.duration}</p>
          </div>
        )}
        {exp.fundingSource && (
          <div className="rounded border border-cosmos-800 bg-cosmos-900/50 px-4 py-3">
            <p className="text-xs text-cosmos-500 mb-1">{labels.funding}</p>
            <p className="text-cosmos-200">{exp.fundingSource}</p>
          </div>
        )}
      </div>

      <section>
        <h2 className="text-sm font-medium text-cosmos-400 uppercase tracking-wide mb-2">{labels.methodology}</h2>
        <p className="text-sm text-cosmos-300 leading-relaxed whitespace-pre-wrap">{exp.methodology}</p>
      </section>

      {exp.equipment && (
        <section>
          <h2 className="text-sm font-medium text-cosmos-400 uppercase tracking-wide mb-2">{labels.equipment}</h2>
          <p className="text-sm text-cosmos-300 leading-relaxed whitespace-pre-wrap">{exp.equipment}</p>
        </section>
      )}

      <div className="space-y-3">
        <div className="rounded border border-cosmos-800 bg-cosmos-900/50 px-4 py-3">
          <p className="text-xs font-medium text-cosmos-500 uppercase tracking-wide mb-1">{labels.expectedResult}</p>
          <p className="text-sm text-cosmos-200">{exp.expectedResult}</p>
        </div>
        {exp.alternativeResult && (
          <div className="rounded border border-cosmos-800 bg-cosmos-900/50 px-4 py-3">
            <p className="text-xs font-medium text-cosmos-500 uppercase tracking-wide mb-1">{labels.alternativeResult}</p>
            <p className="text-sm text-cosmos-400">{exp.alternativeResult}</p>
          </div>
        )}
      </div>

      {exp.hypotheses.length > 0 && (
        <section>
          <h2 className="text-sm font-medium text-cosmos-400 uppercase tracking-wide mb-3">{labels.hypotheses}</h2>
          <div className="space-y-2">
            {exp.hypotheses.map((h) => (
              <Link key={h.id} href={`/hypotheses/${h.id}`}
                className="flex items-center gap-3 rounded border border-cosmos-800 bg-cosmos-900/50 px-4 py-2.5 hover:border-cosmos-700 transition-colors">
                <span className="text-sm text-cosmos-300 flex-1 truncate">{h.title}</span>
                <span className="text-xs text-cosmos-500">{Math.round(h.confidenceScore * 100)}%</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {exp.analyses.length > 0 && (
        <section>
          <h2 className="text-sm font-medium text-cosmos-400 uppercase tracking-wide mb-3">{labels.analyses}</h2>
          <div className="space-y-2">
            {exp.analyses.map((a) => (
              <Link key={a.id} href={`/analyses/${a.id}`}
                className="block rounded border border-cosmos-800 bg-cosmos-900/50 px-4 py-2.5 hover:border-cosmos-700 transition-colors">
                <p className="text-sm text-cosmos-300">{a.title}</p>
                <p className="text-xs text-cosmos-500 mt-0.5 line-clamp-1">{a.conclusion}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <div className="text-xs text-cosmos-600 border-t border-cosmos-800 pt-4">
        {labels.created} {new Date(exp.createdAt).toLocaleDateString()}
      </div>
    </div>
  );
}
