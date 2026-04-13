import { notFound } from "next/navigation";
import { getExperiments, getExperimentById } from "@/lib/data";
import ExperimentDetail from "@/components/ExperimentDetail";

export async function generateStaticParams() {
  const params = getExperiments().map((e: { id: number }) => ({ id: String(e.id) }));
  // Next.js 16 with `output: export` requires at least one static param per
  // dynamic route (error E87). Emit a placeholder when the snapshot is empty;
  // the page handler below maps it to a 404.
  return params.length > 0 ? params : [{ id: "_" }];
}

export default async function ExperimentDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (id === "_") notFound();
  const experiment = getExperimentById(parseInt(id));
  if (!experiment) notFound();
  return <ExperimentDetail experiment={experiment} />;
}
