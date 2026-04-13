import { notFound } from "next/navigation";
import { getAnalyses, getAnalysisById } from "@/lib/data";
import AnalysisDetail from "@/components/AnalysisDetail";

export async function generateStaticParams() {
  const params = getAnalyses().map((a: { id: number }) => ({ id: String(a.id) }));
  // Next.js 16 with `output: export` requires at least one static param per
  // dynamic route (error E87). Emit a placeholder when the snapshot is empty;
  // the page handler below maps it to a 404.
  return params.length > 0 ? params : [{ id: "_" }];
}

export default async function AnalysisDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (id === "_") notFound();
  const analysis = getAnalysisById(parseInt(id));
  if (!analysis) notFound();
  return <AnalysisDetail analysis={analysis} />;
}
