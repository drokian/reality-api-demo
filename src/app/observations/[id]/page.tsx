import { notFound } from "next/navigation";
import Link from "next/link";
import { getObservations, getObservationById } from "@/lib/data";
import { CATEGORY_LABELS, CONFIDENCE_LABELS, SOURCE_LABELS } from "@/lib/observations";
import BilingualSection from "@/components/BilingualSection";
import BilingualTitle from "@/components/BilingualTitle";

const confidenceColors: Record<string, string> = {
  "yüksek": "bg-green-900/40 text-green-400 border-green-800",
  "orta": "bg-yellow-900/40 text-yellow-400 border-yellow-800",
  "düşük": "bg-orange-900/40 text-orange-400 border-orange-800",
  "spekülatif": "bg-purple-900/40 text-purple-400 border-purple-800",
};

export async function generateStaticParams() {
  const params = getObservations().map((obs: { id: number }) => ({ id: String(obs.id) }));
  // Next.js 16 with `output: export` requires at least one static param per
  // dynamic route (error E87). Emit a placeholder when the snapshot is empty;
  // the page handler below maps it to a 404.
  return params.length > 0 ? params : [{ id: "_" }];
}

export default async function ObservationDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  if (id === "_") notFound();
  const obs = getObservationById(parseInt(id));
  if (!obs) notFound();

  const translated = obs.translationStatus === "completed";

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <Link
          href="/observations"
          className="text-xs text-cosmos-400 hover:text-cosmos-200 transition-colors"
        >
          ← Observations
        </Link>

        <div className="space-y-3">
          <div className="flex items-start gap-3 min-w-0">
            <span className="text-sm font-mono text-cosmos-600 mt-1 shrink-0">
              #{String(obs.number).padStart(3, "0")}
            </span>
            <BilingualTitle
              en={obs.titleEn}
              tr={obs.title}
              isTranslated={translated}
            />
          </div>

          <div className="flex flex-wrap gap-2 text-xs">
            <span className="text-cosmos-400">
              {new Date(obs.date).toLocaleDateString("en-GB", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="text-cosmos-700">·</span>
            <span className="rounded border border-cosmos-700 bg-cosmos-800/50 px-2 py-0.5 text-cosmos-400">
              {CATEGORY_LABELS[obs.category] ?? obs.category}
            </span>
            <span className="rounded border border-cosmos-700 bg-cosmos-800/50 px-2 py-0.5 text-cosmos-400">
              {SOURCE_LABELS[obs.source] ?? obs.source}
            </span>
            <span
              className={`rounded border px-2 py-0.5 ${
                confidenceColors[obs.confidence] || "bg-cosmos-800 text-cosmos-400 border-cosmos-700"
              }`}
            >
              {CONFIDENCE_LABELS[obs.confidence] ?? obs.confidence}
            </span>
            {obs.translationStatus === "pending" && (
              <span className="rounded border border-cosmos-800 bg-cosmos-900/40 px-2 py-0.5 text-cosmos-600">
                translation pending
              </span>
            )}
          </div>
        </div>
      </div>

      <BilingualSection
        title="Description"
        en={obs.descriptionEn}
        tr={obs.description}
        isTranslated={translated}
      />

      {obs.computationalRelevance && (
        <BilingualSection
          title="Computational Relevance"
          en={obs.computationalRelevanceEn}
          tr={obs.computationalRelevance}
          isTranslated={translated}
        />
      )}

      {obs.softwareAnalogy && (
        <BilingualSection
          title="Software Analogy"
          en={obs.softwareAnalogyEn}
          tr={obs.softwareAnalogy}
          isTranslated={translated}
        />
      )}

      {obs.openQuestions && (
        <BilingualSection
          title="Open Questions"
          en={obs.openQuestionsEn}
          tr={obs.openQuestions}
          isTranslated={translated}
          asList
        />
      )}

      {obs.relatedObservations && (
        <BilingualSection
          title="Related Observations"
          en={obs.relatedObservationsEn}
          tr={obs.relatedObservations}
          isTranslated={translated}
        />
      )}

      {obs.references && obs.references.length > 0 && (
        <div className="space-y-2">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-cosmos-400">
            Academic References
          </h2>
          <div className="rounded-lg border border-cosmos-800 bg-cosmos-900/40 divide-y divide-cosmos-800/50">
            {obs.references.map((ref: { id: number; number: number; authors: string; year: number; title: string; url: string | null }) => (
              <div key={ref.id} className="flex items-start gap-3 px-4 py-3">
                <span className="text-xs text-cosmos-600 mt-0.5 w-5 shrink-0">
                  #{ref.number}
                </span>
                <div className="text-xs leading-relaxed">
                  <span className="text-cosmos-300 font-medium">{ref.authors}</span>
                  <span className="text-cosmos-500"> ({ref.year})</span>
                  {ref.url ? (
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-cosmos-400 hover:text-accent transition-colors mt-0.5"
                    >
                      {ref.title} ↗
                    </a>
                  ) : (
                    <span className="block text-cosmos-400 mt-0.5">{ref.title}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
