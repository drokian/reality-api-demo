import { notFound } from "next/navigation";
import { getHypotheses, getHypothesisById } from "@/lib/data";
import HypothesisDetail from "@/components/HypothesisDetail";

export async function generateStaticParams() {
  const params = getHypotheses().map((h: { id: number }) => ({ id: String(h.id) }));
  // Next.js 16 with `output: export` requires at least one static param per
  // dynamic route (error E87). Emit a placeholder when the snapshot is empty;
  // the page handler below maps it to a 404.
  return params.length > 0 ? params : [{ id: "_" }];
}

export default async function HypothesisDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (id === "_") notFound();
  const hypothesis = getHypothesisById(parseInt(id));
  if (!hypothesis) notFound();
  return <HypothesisDetail hypothesis={hypothesis} />;
}
