import { getExperiments } from "@/lib/data";
import ExperimentsClient from "@/components/ExperimentsClient";

export const metadata = {
  title: "Experiments",
  description: "Proposed and planned experiments testing the computational universe hypotheses.",
};

export default function ExperimentsPage() {
  const experiments = getExperiments();
  return <ExperimentsClient experiments={experiments} />;
}
