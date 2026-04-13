"use client";

import Link from "next/link";
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
  updatedAt: string;
  observations: { id: number; number: number; title: string; confidence: string }[];
  references: { id: number; number: number; authors: string; year: number; title: string; url: string | null }[];
  experiments: { id: number; title: string; status: string; estimatedBudget: number | null }[];
  tags: { id: number; name: string }[];
};

const STATUS_CONFIG: Record<string, { label: string; color: string }> = {
  PROPOSED:  { label: "Proposed",  color: "text-yellow-400 border-yellow-400/40 bg-yellow-400/10" },
  TESTING:   { label: "Testing",   color: "text-blue-400  border-blue-400/40  bg-blue-400/10"  },
  SUPPORTED: { label: "Supported", color: "text-green-400 border-green-400/40 bg-green-400/10" },
  REFUTED:   { label: "Refuted",   color: "text-red-400   border-red-400/40   bg-red-400/10"   },
};

const CONFIDENCE_LABELS: Record<string, string> = {
  yüksek: "High", orta: "Medium", düşük: "Low", spekülatif: "Speculative",
};

export default function HypothesisDetail({ hypothesis: h }: { hypothesis: Hypothesis }) {
  const { lang } = useLanguage();
  const statusCfg = STATUS_CONFIG[h.status] ?? { label: h.status, color: "text-cosmos-400 border-cosmos-700 bg-cosmos-800" };
  const confidence = typeof h.confidenceScore === "number" ? h.confidenceScore : 0;
  const pct = Math.round(confidence * 100);
  const barColor = confidence >= 0.7 ? "bg-green-500" : confidence >= 0.4 ? "bg-yellow-500" : "bg-red-500";
  const tags = h.tags ?? [];
  const observations = h.observations ?? [];
  const references = h.references ?? [];
  const experiments = h.experiments ?? [];

  const labels = {
    en: { back: "← Hypotheses", prediction: "Falsifiable Prediction", alternative: "If prediction fails",
          mathForm: "Mathematical Form", confidence: "Confidence", status: "Status",
          lastTested: "Last tested", observations: "Linked Observations", references: "References",
          experiments: "Experiments", tags: "Tags", budget: "Budget", notTested: "Not yet tested" },
    tr: { back: "← Hipotezler", prediction: "Yanlışlanabilir Tahmin", alternative: "Tahmin başarısız olursa",
          mathForm: "Matematiksel Form", confidence: "Güven", status: "Durum",
          lastTested: "Son test", observations: "İlişkili Gözlemler", references: "Referanslar",
          experiments: "Deneyler", tags: "Etiketler", budget: "Bütçe", notTested: "Henüz test edilmedi" },
  }[lang];

  return (
    <div className="space-y-8 max-w-3xl">
      <Link href="/hypotheses" className="text-sm text-cosmos-400 hover:text-cosmos-200 transition-colors">
        {labels.back}
      </Link>

      <div className="space-y-3">
        <div className="flex items-start justify-between gap-4">
          <h1 className="text-2xl font-semibold text-cosmos-100 leading-snug">
            {lang === "tr" && h.titleTr ? h.titleTr : h.title}
          </h1>
          <span className={`inline-flex items-center px-2.5 py-1 rounded border text-sm font-medium ${statusCfg.color}`}>
            {statusCfg.label}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs text-cosmos-500">{labels.confidence}</span>
          <div className="h-2 w-32 rounded-full bg-cosmos-800 overflow-hidden">
            <div className={`h-full rounded-full ${barColor}`} style={{ width: `${pct}%` }} />
          </div>
          <span className="text-xs text-cosmos-300">{pct}%</span>
        </div>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {tags.map((t) => (
              <span key={t.id} className="text-xs px-2 py-0.5 rounded bg-cosmos-800 text-cosmos-400">{t.name}</span>
            ))}
          </div>
        )}
      </div>

      <p className="text-cosmos-300 leading-relaxed">
        {lang === "tr" && h.descriptionTr ? h.descriptionTr : h.description}
      </p>

      {h.mathematicalForm && (
        <div className="rounded border border-cosmos-800 bg-cosmos-900/50 px-4 py-3">
          <p className="text-xs text-cosmos-500 mb-1">{labels.mathForm}</p>
          <code className="text-accent text-sm font-mono">{h.mathematicalForm}</code>
        </div>
      )}

      <div className="space-y-3">
        <div className="rounded border border-cosmos-800 bg-cosmos-900/50 px-4 py-3">
          <p className="text-xs font-medium text-cosmos-500 uppercase tracking-wide mb-1">{labels.prediction}</p>
          <p className="text-sm text-cosmos-200">
            {lang === "tr" && h.predictionTr ? h.predictionTr : h.prediction}
          </p>
        </div>
        <div className="rounded border border-cosmos-800 bg-cosmos-900/50 px-4 py-3">
          <p className="text-xs font-medium text-cosmos-500 uppercase tracking-wide mb-1">{labels.alternative}</p>
          <p className="text-sm text-cosmos-400">
            {lang === "tr" && h.alternativeOutcomeTr ? h.alternativeOutcomeTr : h.alternativeOutcome}
          </p>
        </div>
      </div>

      {observations.length > 0 && (
        <section>
          <h2 className="text-sm font-medium text-cosmos-400 uppercase tracking-wide mb-3">{labels.observations}</h2>
          <div className="space-y-2">
            {observations.map((o) => (
              <Link
                key={o.id}
                href={`/observations/${o.id}`}
                className="flex items-center gap-3 rounded border border-cosmos-800 bg-cosmos-900/50 px-4 py-2.5 hover:border-cosmos-700 transition-colors"
              >
                <span className="text-xs text-cosmos-500 font-mono">#{String(o.number).padStart(3, "0")}</span>
                <span className="text-sm text-cosmos-300 truncate">{o.title}</span>
                <span className="ml-auto text-xs text-cosmos-500">{CONFIDENCE_LABELS[o.confidence] ?? o.confidence}</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {references.length > 0 && (
        <section>
          <h2 className="text-sm font-medium text-cosmos-400 uppercase tracking-wide mb-3">{labels.references}</h2>
          <div className="space-y-2">
            {references.map((r) => (
              <div key={r.id} className="rounded border border-cosmos-800 bg-cosmos-900/50 px-4 py-2.5">
                <span className="text-xs text-cosmos-500 mr-2">#{r.number}</span>
                <span className="text-sm text-cosmos-300">{r.authors} ({r.year}). </span>
                {r.url ? (
                  <a href={r.url} target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:underline">{r.title}</a>
                ) : (
                  <span className="text-sm text-cosmos-300 italic">{r.title}</span>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {experiments.length > 0 && (
        <section>
          <h2 className="text-sm font-medium text-cosmos-400 uppercase tracking-wide mb-3">{labels.experiments}</h2>
          <div className="space-y-2">
            {experiments.map((exp) => (
              <div key={exp.id} className="flex items-center gap-3 rounded border border-cosmos-800 bg-cosmos-900/50 px-4 py-2.5">
                <span className="text-sm text-cosmos-300 flex-1">{exp.title}</span>
                <span className="text-xs text-cosmos-500">{exp.status}</span>
                {exp.estimatedBudget && (
                  <span className="text-xs text-cosmos-500">${exp.estimatedBudget.toLocaleString()}</span>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="text-xs text-cosmos-600 border-t border-cosmos-800 pt-4">
        {h.lastTestedAt
          ? `${labels.lastTested}: ${new Date(h.lastTestedAt).toLocaleDateString()}`
          : labels.notTested}
        {" · "}Created {new Date(h.createdAt).toLocaleDateString()}
      </div>
    </div>
  );
}
