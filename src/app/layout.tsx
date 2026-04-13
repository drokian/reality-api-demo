import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import NavigationLoader from "@/components/NavigationLoader";
import { LanguageProvider } from "@/lib/language-context";
import "./globals.css";

const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: {
    default: "Reality API — Demo",
    template: "%s — Reality API Demo",
  },
  description: "An open research project exploring the hypothesis that the universe is a computational system — systematically recording observations and building a reference library.",
  openGraph: {
    title: "Reality API — Demo",
    description: "Decoding the Source Code of Reality — open computational physics research.",
    type: "website",
    locale: "en_US",
    alternateLocale: "tr_TR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={mono.variable}>
      <body className="font-[family-name:var(--font-mono)] min-h-screen">
        <LanguageProvider>
          <NavigationLoader />
          <Navbar />
          <main className="mx-auto max-w-5xl px-6 py-8">{children}</main>
        </LanguageProvider>
      </body>
    </html>
  );
}
