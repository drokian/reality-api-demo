import { getObservations } from "@/lib/data";
import ObservationsClient from "@/components/ObservationsClient";

export const metadata = {
  title: "Observations",
  description: "Systematic observation records evaluated through the lens of the computational universe model.",
};

export default function ObservationsPage() {
  const observations = getObservations();
  return <ObservationsClient observations={observations} />;
}
