"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language-context";

const content = {
  en: {
    heading: "Decoding the Source Code of Reality",
    subtitle: "An open research project exploring the hypothesis that the universe is a computational system — and attempting to discover its \u201Cinterface\u201D.",
    references: "References",
    referencesDesc: "Academic sources and research references. Simulation hypothesis, quantum information theory, holographic principle, and more.",
    observations: "Observations",
    observationsDesc: "Systematic observation records. Patterns in nature evaluated through the lens of the computational universe model.",
    hypotheses: "Hypotheses",
    hypothesesDesc: "Falsifiable predictions about the computational nature of reality \u2014 from speed of light as clock speed to the Bekenstein bound as memory limit.",
    experiments: "Experiments",
    experimentsDesc: "Designed experiments to test computational universe hypotheses \u2014 from low-budget data analyses to lab-scale quantum optics.",
    analyses: "Analyses",
    analysesDesc: "Meta-analyses and AI-assisted research findings linking observations to hypotheses.",
    positioning: "Positioning",
    positioningDesc: "How Reality API differs from the simulation hypothesis, Wolfram Physics Project, and digital physics \u2014 and what we are actually doing.",
  },
  tr: {
    heading: "Ger\u00E7ekli\u011Fin Kaynak Kodunu \u00C7\u00F6zmek",
    subtitle: "Evrenin hesaplamal\u0131 bir sistem oldu\u011Fu hipotezini ara\u015Ft\u0131ran ve bu sistemin \u201Caray\u00FCz\u00FCn\u00FC\u201D ke\u015Ffetmeye \u00E7al\u0131\u015Fan a\u00E7\u0131k bir ara\u015Ft\u0131rma projesi.",
    references: "Referanslar",
    referencesDesc: "Akademik kaynaklar ve ara\u015Ft\u0131rma referanslar\u0131. Sim\u00FClasyon hipotezi, kuantum bilgi teorisi, holografik ilke ve daha fazlas\u0131.",
    observations: "G\u00F6zlemler",
    observationsDesc: "Sistematik g\u00F6zlem kay\u0131tlar\u0131. Do\u011Fadaki \u00F6r\u00FCnt\u00FCler, hesaplamal\u0131 evren modeli perspektifinden de\u011Ferlendiriliyor.",
    hypotheses: "Hipotezler",
    hypothesesDesc: "Ger\u00E7ekli\u011Fin hesaplamal\u0131 do\u011Fas\u0131na dair yanl\u0131\u015Flanabilir tahminler \u2014 \u0131\u015F\u0131k h\u0131z\u0131n\u0131n saat h\u0131z\u0131 olmas\u0131ndan Bekenstein s\u0131n\u0131r\u0131n\u0131n bellek limiti olmas\u0131na kadar.",
    experiments: "Deneyler",
    experimentsDesc: "Hesaplamal\u0131 evren hipotezlerini test etmek i\u00E7in tasar\u0131lanan deneyler \u2014 d\u00FC\u015F\u00FCk b\u00FCt\u00E7eli veri analizlerinden laboratuvar \u00F6l\u00E7e\u011Fine kadar.",
    analyses: "Analizler",
    analysesDesc: "G\u00F6zlemleri hipotezlere ba\u011Flayan meta-analizler ve yapay zeka destekli ara\u015Ft\u0131rma bulgular\u0131.",
    positioning: "Konumland\u0131rma",
    positioningDesc: "Reality API'nin sim\u00FClasyon hipotezi, Wolfram Physics Project ve dijital fizikten fark\u0131 \u2014 ve ger\u00E7ekte ne yapt\u0131\u011F\u0131m\u0131z.",
  },
};

export default function Home() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <div className="space-y-12">
      <section className="space-y-4 pt-8">
        <h1 className="text-3xl font-bold tracking-tight text-cosmos-100">
          {t.heading}
        </h1>
        <p className="text-cosmos-400 max-w-2xl leading-relaxed">
          {t.subtitle}
        </p>
      </section>

      <section className="grid gap-6 sm:grid-cols-2">
        {(["references", "observations", "hypotheses", "experiments", "analyses", "positioning"] as const).map((key) => (
          <Link
            key={key}
            href={`/${key}`}
            className="group rounded-lg border border-cosmos-800 bg-cosmos-900/50 p-6 transition-colors hover:border-accent/40 hover:bg-cosmos-900"
          >
            <h2 className="text-lg font-semibold text-cosmos-200 group-hover:text-accent transition-colors">
              {t[key]}
            </h2>
            <p className="mt-2 text-sm text-cosmos-400">
              {t[`${key}Desc` as keyof typeof t]}
            </p>
          </Link>
        ))}
      </section>
    </div>
  );
}
