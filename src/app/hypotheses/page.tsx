import { getHypotheses } from "@/lib/data";
import HypothesesClient from "@/components/HypothesesClient";

export const metadata = {
  title: "Hypotheses",
  description: "Falsifiable hypotheses in the Reality API computational universe research project.",
};

export default function HypothesesPage() {
  const hypotheses = getHypotheses();
  return <HypothesesClient hypotheses={hypotheses} />;
}
