export interface ObservationReference {
  id: number;
  number: number;
  authors: string;
  year: number;
  title: string;
}

export interface ObservationWithRefs {
  id: number;
  number: number;
  title: string;
  titleEn?: string | null;
  date: string;
  category: string;
  source: string;
  confidence: string;
  description: string;
  descriptionEn?: string | null;
  computationalRelevance: string | null;
  computationalRelevanceEn?: string | null;
  softwareAnalogy: string | null;
  softwareAnalogyEn?: string | null;
  openQuestions: string | null;
  openQuestionsEn?: string | null;
  relatedObservations: string | null;
  relatedObservationsEn?: string | null;
  translationStatus?: string;
  references: ObservationReference[];
}

export const CATEGORY_LABELS: Record<string, string> = {
  "fizik": "Physics",
  "kuantum": "Quantum",
  "bilgi-teorisi": "Information Theory",
  "kozmoloji": "Cosmology",
  "bilinç": "Consciousness",
  "mühendislik": "Engineering",
  "diğer": "Other",
};

export const CONFIDENCE_LABELS: Record<string, string> = {
  "yüksek": "High",
  "orta": "Medium",
  "düşük": "Low",
  "spekülatif": "Speculative",
};

export const SOURCE_LABELS: Record<string, string> = {
  "akademik referans": "Academic Reference",
  "kişisel gözlem": "Personal Observation",
  "haber": "News",
  "deney": "Experiment",
};

export const REFERENCE_CATEGORY_LABELS: Record<string, string> = {
  "Simülasyon ve Hesaplamalı Evren": "Simulation & Computational Universe",
  "Bilgi ve Fizik": "Information & Physics",
  "Kuantum Mekaniği ve Gözlemci": "Quantum Mechanics & Observer",
  "Uzay-Zaman Manipülasyonu": "Spacetime Manipulation",
  "Kuantum İletişim": "Quantum Communication",
  "Planck Ölçeği ve Minimum Uzunluk": "Planck Scale & Minimum Length",
  "Kara Delik Bilgi Paradoksu": "Black Hole Information Paradox",
  "Kuantum Hesaplama ve Evren Simülasyonu": "Quantum Computing & Universe Simulation",
  "Bilinç ve Kuantum Mekaniği": "Consciousness & Quantum Mechanics",
  "Füzyon Enerjisi": "Fusion Energy",
  "Hesaplamalı Evren Karşı Argümanlar": "Counterarguments to Computational Universe",
};
