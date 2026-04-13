"use client";

import { useLanguage } from "@/lib/language-context";

const content = {
  en: {
    title: "Academic Positioning",
    subtitle: "How Reality API relates to — and differs from — adjacent research traditions.",
    quote: `"We are not testing Bostrom's simulation argument. We are investigating Wheeler's 'it from bit' hypothesis from an engineering perspective."`,
    whatWeDoHeading: "What We Are Doing",
    whatWeDo: [
      <>Reality API is a systematic observation-based research project within <strong className="text-cosmos-200">computational information physics</strong> — the hypothesis that information is the fundamental substrate of physical reality (Wheeler 1990, &ldquo;It from Bit&rdquo;). This is not a claim that the universe is a simulation run by an external agent. It is a claim that the mathematical structure of physical law is isomorphic to information-processing systems, and that this isomorphism has <em>measurable consequences</em>.</>,
    ],
    comparisons: [
      {
        title: "vs. Bostrom Simulation Argument",
        rows: [
          ["Probabilistic philosophical argument", "Empirical, observation-based research"],
          ["May-be-in-a-simulation claim", "Information is the substrate of physical law"],
          ["No falsifiable predictions", "7 falsifiable hypotheses with specific predictions"],
          ["No experimental program", "Concrete experiments with budgets"],
          ["External simulator implied", "No external agent — structural isomorphism only"],
        ],
        note: "Bostrom's argument is a trilemma about the prior probability of simulated civilizations. It makes no predictions about quantum decoherence or gravitational time dilation. Reality API does.",
        themCol: "Them",
        usCol: "Reality API",
      },
      {
        title: "vs. Wolfram Physics Project",
        rows: [
          ["Rule-based (hypergraph rewriting)", "Observation-based (empirical phenomena)"],
          ["Bottom-up: propose rules, derive physics", "Top-down: observe physics, infer structure"],
          ["Custom computational framework", "Standard information theory + quantum mechanics"],
          ["No direct experimental predictions yet", "Falsifiable predictions tied to existing data"],
        ],
        note: "We share the intuition that computation is fundamental. Where Wolfram builds a model and checks if it reproduces GR and QM, we start from GR and QM and ask whether information-theoretic interpretations yield new predictions.",
        themCol: "Them",
        usCol: "Reality API",
      },
    ],
    vazzaHeading: "Response to Vazza (2020) Resource Objection",
    vazzaP1: <>Vazza&apos;s critique applies to <strong className="text-cosmos-200">brute-force simulation</strong> — computing every particle trajectory independently. Our model does not require this.</>,
    vazzaP2: <>The <strong className="text-cosmos-200">lazy evaluation hypothesis</strong> states: only observed (measured) states are resolved to a definite value. Unobserved states remain in superposition. Under this model, computational cost is proportional to the number of <em>measurements</em>, not the number of particles. This is consistent with quantum decoherence theory (Zurek 2003) and resolves the resource objection.</>,
    objectionsHeading: "Common Objections",
    objections: [
      {
        q: `"This is just the simulation hypothesis / Matrix theory"`,
        a: "No. The simulation hypothesis requires an external simulator. We make no such claim. We hypothesize that physical law has information-theoretic structure — the same way quantum mechanics has probabilistic structure.",
      },
      {
        q: `"You can't simulate the universe with less resources than the universe"`,
        a: "Correct — for brute-force simulation. Our lazy evaluation hypothesis predicts that only measured states are resolved, proportional to observer density × information transfer. This is testable.",
      },
      {
        q: `"This is philosophy, not physics"`,
        a: "Each of our seven hypotheses makes a specific, quantitative, falsifiable prediction tied to measurable physical quantities — speed of light, refractive index, decoherence rate, GRB arrival times. If they are wrong, the hypotheses are wrong.",
      },
    ],
    terminologyHeading: "Terminology Guidelines",
    useLabel: "What we stand for",
    avoidLabel: "What we distance ourselves from",
    useTerms: [
      "Computational information physics",
      "Information-physics relationship",
      "Falsifiable hypothesis",
      "Wheeler's \"it from bit\" framework",
      "Computational model",
    ],
    avoidTerms: [
      "Simulation (unqualified)",
      "The Matrix / we live in a simulation",
      "God / Creator / programmer",
      "Hacking reality",
      "Virtual reality",
    ],
    fullDoc: "Full positioning document:",
  },
  tr: {
    title: "Akademik Konumlandırma",
    subtitle: "Reality API'nin komşu araştırma gelenekleriyle ilişkisi ve onlardan farkı.",
    quote: `"Biz Bostrom'un simülasyon argümanını test etmiyoruz; Wheeler'ın 'it from bit' hipotezini mühendislik perspektifinden araştırıyoruz."`,
    whatWeDoHeading: "Ne Yapıyoruz",
    whatWeDo: [
      <>Reality API, <strong className="text-cosmos-200">hesaplamalı bilgi fiziği</strong> alanında sistematik gözlem tabanlı bir araştırma projesidir — bilginin fiziksel gerçekliğin temel altyapısı olduğu hipotezi (Wheeler 1990, &ldquo;It from Bit&rdquo;). Bu, evrenin harici bir ajan tarafından yönetilen bir simülasyon olduğu iddiası değildir. Fizik yasasının matematiksel yapısının bilgi işlem sistemleriyle izomorfik olduğu ve bu izomorfizmin <em>ölçülebilir sonuçları</em> olduğu iddiasıdır.</>,
    ],
    comparisons: [
      {
        title: "Bostrom Simülasyon Argümanı ile Karşılaştırma",
        rows: [
          ["Olasılıkçı felsefi argüman", "Ampirik, gözlem tabanlı araştırma"],
          ["Simülasyonda olabiliriz iddiası", "Bilgi, fizik yasasının altyapısıdır"],
          ["Yanlışlanabilir tahmin yok", "Spesifik tahminlerle 7 yanlışlanabilir hipotez"],
          ["Deneysel program yok", "Bütçeli somut deney önerileri"],
          ["Harici simülatör ima edilir", "Harici ajan yok — yalnızca yapısal izomorfizm"],
        ],
        note: "Bostrom'un argümanı, simüle edilmiş medeniyetlerin ön olasılığı üzerine bir trilemdır. Kuantum dekoheransı veya yerçekimi zaman genişlemesi hakkında hiçbir tahmin yapmaz. Reality API yapar.",
        themCol: "Onlar",
        usCol: "Reality API",
      },
      {
        title: "Wolfram Physics Project ile Karşılaştırma",
        rows: [
          ["Kural tabanlı (hipergraf yeniden yazımı)", "Gözlem tabanlı (ampirik fenomenler)"],
          ["Aşağıdan yukarı: kurallar öner, fizik türet", "Yukarıdan aşağı: fizik gözlemle, yapı çıkar"],
          ["Özel hesaplama çerçevesi", "Standart bilgi teorisi + kuantum mekaniği"],
          ["Henüz doğrudan deneysel tahmin yok", "Mevcut veriye bağlı yanlışlanabilir tahminler"],
        ],
        note: "Hesaplamanın temel olduğu sezgisini paylaşıyoruz. Wolfram GR ve QM'yi yeniden üretip üretmediğini kontrol ederken, biz GR ve QM'den başlayıp bilgi teorik yorumların yeni tahminler üretip üretmediğini soruyoruz.",
        themCol: "Onlar",
        usCol: "Reality API",
      },
    ],
    vazzaHeading: "Vazza (2020) Kaynak İtirazına Yanıt",
    vazzaP1: <>Vazza&apos;nın eleştirisi <strong className="text-cosmos-200">kaba kuvvet simülasyonu</strong>na uygulanır — her parçacık yörüngesini bağımsız olarak hesaplamak. Modelimiz bunu gerektirmez.</>,
    vazzaP2: <><strong className="text-cosmos-200">Lazy evaluation hipotezi</strong> şunu öngörür: yalnızca gözlemlenen (ölçülen) durumlar belirli bir değere çözümlenir. Gözlemlenmeyen durumlar süperpozisyonda kalır. Bu modelde hesaplama maliyeti, parçacık sayısına değil <em>ölçüm</em> sayısına orantılıdır. Bu, kuantum dekoherans teorisiyle (Zurek 2003) tutarlıdır ve kaynak itirazını çözer.</>,
    objectionsHeading: "Yaygın İtirazlar",
    objections: [
      {
        q: `"Bu sadece simülasyon hipotezi / Matrix teorisi"`,
        a: "Hayır. Simülasyon hipotezi harici bir simülatör gerektirir. Böyle bir iddiada bulunmuyoruz. Fizik yasasının bilgi teorik yapıya sahip olduğunu hipotez ediyoruz — kuantum mekaniğinin olasılıksal yapıya sahip olduğu gibi.",
      },
      {
        q: `"Evrenin kaynaklarından daha azıyla evreni simüle edemezsiniz"`,
        a: "Doğru — kaba kuvvet simülasyonu için. Lazy evaluation hipotezimiz yalnızca ölçülen durumların çözüldüğünü, gözlemci yoğunluğu × bilgi transferiyle orantılı olduğunu öngörür. Bu test edilebilir.",
      },
      {
        q: `"Bu fizik değil, felsefe"`,
        a: "Yedi hipotezimizin her biri, ölçülebilir fiziksel niceliklerle bağlantılı somut, nicel, yanlışlanabilir bir tahmin yapar — ışık hızı, kırılma indisi, dekoherans hızı, GRB foton varış süreleri. Yanlışlarsa, hipotezler yanlıştır.",
      },
    ],
    terminologyHeading: "Terminoloji Kılavuzu",
    useLabel: "Savunduklarımız",
    avoidLabel: "Uzak Durduklarımız",
    useTerms: [
      "Hesaplamalı bilgi fiziği",
      "Bilgi-fizik ilişkisi",
      "Yanlışlanabilir hipotez",
      "Wheeler'ın \"it from bit\" çerçevesi",
      "Hesaplamalı model",
    ],
    avoidTerms: [
      "Simülasyon (nitelenmemiş)",
      "Matrix / simülasyon içinde yaşıyoruz",
      "Tanrı / Yaratıcı / programcı",
      "Gerçekliği hacklemek",
      "Sanal gerçeklik",
    ],
    fullDoc: "Tam konumlandırma belgesi:",
  },
};

export default function PositioningPage() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <div className="max-w-3xl space-y-12">
      <div>
        <h1 className="text-2xl font-semibold text-cosmos-100">{t.title}</h1>
        <p className="mt-2 text-sm text-cosmos-400">{t.subtitle}</p>
      </div>

      <blockquote className="border-l-2 border-accent pl-6 py-1">
        <p className="text-lg text-cosmos-200 italic leading-relaxed">{t.quote}</p>
      </blockquote>

      <section className="space-y-4">
        <h2 className="text-sm font-medium text-cosmos-400 uppercase tracking-wide">{t.whatWeDoHeading}</h2>
        {t.whatWeDo.map((p, i) => (
          <p key={i} className="text-sm text-cosmos-300 leading-relaxed">{p}</p>
        ))}
      </section>

      {t.comparisons.map((c) => (
        <section key={c.title} className="space-y-3">
          <h2 className="text-sm font-medium text-cosmos-400 uppercase tracking-wide">{c.title}</h2>
          <div className="overflow-x-auto rounded border border-cosmos-800">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-cosmos-800 bg-cosmos-900/50">
                  <th className="px-4 py-2 text-left text-xs font-medium text-cosmos-500">{c.themCol}</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-accent">{c.usCol}</th>
                </tr>
              </thead>
              <tbody>
                {c.rows.map(([them, us], i) => (
                  <tr key={i} className="border-b border-cosmos-800/50 last:border-0">
                    <td className="px-4 py-2.5 text-cosmos-400">{them}</td>
                    <td className="px-4 py-2.5 text-cosmos-200">{us}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-cosmos-500 leading-relaxed">{c.note}</p>
        </section>
      ))}

      <section className="space-y-3">
        <h2 className="text-sm font-medium text-cosmos-400 uppercase tracking-wide">{t.vazzaHeading}</h2>
        <div className="rounded border border-cosmos-800 bg-cosmos-900/50 px-4 py-4 space-y-2">
          <p className="text-sm text-cosmos-300 leading-relaxed">{t.vazzaP1}</p>
          <p className="text-sm text-cosmos-300 leading-relaxed">{t.vazzaP2}</p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-sm font-medium text-cosmos-400 uppercase tracking-wide">{t.objectionsHeading}</h2>
        <div className="space-y-3">
          {t.objections.map((o) => (
            <div key={o.q} className="rounded border border-cosmos-800 bg-cosmos-900/50 px-4 py-4">
              <p className="text-sm font-medium text-cosmos-300 mb-2">{o.q}</p>
              <p className="text-sm text-cosmos-400 leading-relaxed">{o.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-sm font-medium text-cosmos-400 uppercase tracking-wide">{t.terminologyHeading}</h2>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded border border-green-400/20 bg-green-400/5 px-4 py-3">
            <p className="text-xs font-medium text-green-400 mb-2">{t.useLabel}</p>
            <ul className="text-xs text-cosmos-300 space-y-1">
              {t.useTerms.map((term) => <li key={term}>{term}</li>)}
            </ul>
          </div>
          <div className="rounded border border-red-400/20 bg-red-400/5 px-4 py-3">
            <p className="text-xs font-medium text-red-400 mb-2">{t.avoidLabel}</p>
            <ul className="text-xs text-cosmos-300 space-y-1">
              {t.avoidTerms.map((term) => <li key={term}>{term}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <div className="text-xs text-cosmos-600 border-t border-cosmos-800 pt-4">
        {t.fullDoc} <code className="text-cosmos-500">docs/positioning.md</code>
      </div>
    </div>
  );
}
