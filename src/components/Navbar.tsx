"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageToggle from "@/components/LanguageToggle";
import { useLanguage } from "@/lib/language-context";

const links = {
  en: [
    { href: "/references",   label: "References"   },
    { href: "/observations", label: "Observations" },
    { href: "/hypotheses",   label: "Hypotheses"   },
    { href: "/experiments",  label: "Experiments"  },
    { href: "/analyses",     label: "Analyses"     },
    { href: "/positioning",  label: "Positioning"  },
  ],
  tr: [
    { href: "/references",   label: "Referanslar" },
    { href: "/observations", label: "Gözlemler"   },
    { href: "/hypotheses",   label: "Hipotezler"  },
    { href: "/experiments",  label: "Deneyler"    },
    { href: "/analyses",     label: "Analizler"   },
    { href: "/positioning",  label: "Konumlandırma" },
  ],
};

export default function Navbar() {
  const pathname = usePathname();
  const { lang } = useLanguage();

  return (
    <nav className="sticky top-0 z-50 border-b border-cosmos-800 bg-cosmos-900/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-wide text-cosmos-100 hover:text-accent transition-colors">
          Reality API
        </Link>
        <div className="flex items-center gap-6">
          {links[lang].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${
                pathname === link.href
                  ? "text-accent font-medium"
                  : "text-cosmos-400 hover:text-cosmos-200"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <LanguageToggle />
        </div>
      </div>
    </nav>
  );
}
