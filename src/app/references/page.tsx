import { getReferences } from "@/lib/data";
import ReferencesClient from "@/components/ReferencesClient";

export const metadata = {
  title: "References",
  description: "Academic sources and research references — simulation hypothesis, quantum information theory, holographic principle, and more.",
};

const categoryOrder = [
  "Simülasyon ve Hesaplamalı Evren",
  "Bilgi ve Fizik",
  "Kuantum Mekaniği ve Gözlemci",
  "Uzay-Zaman Manipülasyonu",
  "Kuantum İletişim",
  "Planck Ölçeği ve Minimum Uzunluk",
  "Kara Delik Bilgi Paradoksu",
  "Kuantum Hesaplama ve Evren Simülasyonu",
  "Bilinç ve Kuantum Mekaniği",
  "Füzyon Enerjisi",
  "Hesaplamalı Evren Karşı Argümanlar",
];

export default function ReferencesPage() {
  const references = getReferences();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const groupedMap = new Map<string, any[]>();
  for (const ref of references) {
    const list = groupedMap.get(ref.category) || [];
    list.push(ref);
    groupedMap.set(ref.category, list);
  }

  const sortedCategories = [...groupedMap.keys()].sort(
    (a, b) => (categoryOrder.indexOf(a) ?? 99) - (categoryOrder.indexOf(b) ?? 99)
  );

  const grouped = Object.fromEntries(groupedMap);

  return <ReferencesClient grouped={grouped} sortedCategories={sortedCategories} />;
}
