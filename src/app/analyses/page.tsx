import { getAnalyses } from "@/lib/data";
import AnalysesClient from "@/components/AnalysesClient";

export const metadata = {
  title: "Analyses",
  description: "Meta-analyses and AI-assisted analysis results for computational universe research.",
};

export default function AnalysesPage() {
  const analyses = getAnalyses();
  return <AnalysesClient analyses={analyses} />;
}
