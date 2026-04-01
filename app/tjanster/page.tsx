import type { Metadata } from "next";
import Image from "next/image";
import {
  Link,
  Camera,
  Calculator,
  Megaphone,
  Globe,
  CalendarDays,
  MessageSquare,
  LayoutDashboard,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import SectionHeading from "@/components/section-heading";
import EcosystemCard from "@/components/ecosystem-card";
import IntegrationLogos from "@/components/integration-logos";
import CtaSection from "@/components/cta-section";

import { ecosystemProducts, secondaryServices } from "@/data/products";

export const metadata: Metadata = {
  title: "Tjänster",
  description:
    "Alla tjänster för att nå patienter, fylla tider och växa med Vården.se.",
  openGraph: { locale: "sv_SE", type: "website" },
};

const CDN = "https://img.varden.se/varden.se/b2b";

const productImages: Record<string, { src: string; alt: string }> = {
  Vårdgivarprofil: {
    src: `${CDN}/hero/search-varden--2048x812.webp`,
    alt: "Vårdgivarprofil på Vården.se med sökresultat",
  },
  Appointments: {
    src: `${CDN}/hero/search-varden--2048x812.webp`,
    alt: "Appointments bokningsvy i Vården.se",
  },
  "AI-chatt": {
    src: `${CDN}/hero/search-varden--2048x812.webp`,
    alt: "AI-chatt gränssnitt för patientstöd",
  },
  "Vårdanpassad hemsida": {
    src: `${CDN}/hero/search-varden--2048x812.webp`,
    alt: "Vårdanpassad hemsida för mottagningar",
  },
};

const secondaryIconMap: Record<string, LucideIcon> = {
  Link,
  Camera,
  Calculator,
  Megaphone,
};

export default function TjansterPage() {
  return (
    <>
      {/* ── 1. Hero ── */}
      <header className="relative px-6 pt-32 pb-20 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeading
            label="Våra tjänster"
            heading="Ett komplett digitalt ekosystem för er mottagning"
            subtext="Modulära lösningar som fungerar oberoende av varandra eller som en kraftfull helhet — allt för att ni ska nå fler patienter, fylla fler tider och växa."
          />
        </div>
      </header>

      {/* ── 2. Core Products ── */}
      <section className="py-24 bg-cloud px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ecosystemProducts.map((product) => (
              <div key={product.title} className="flex flex-col gap-0">
                <div className="bg-white rounded-t-2xl p-4 border border-b-0 border-whisper overflow-hidden">
                  <Image
                    src={productImages[product.title]?.src ?? `${CDN}/hero/search-varden--2048x812.webp`}
                    alt={productImages[product.title]?.alt ?? product.title}
                    width={2048}
                    height={812}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <EcosystemCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Secondary Services ── */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            heading="Fler tjänster"
            subtext="Kompletterande verktyg som stärker er digitala närvaro ytterligare."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {secondaryServices.map((service) => {
              const Icon = secondaryIconMap[service.icon] ?? Globe;
              return (
                <div
                  key={service.title}
                  className="bg-cloud rounded-2xl p-6 border border-whisper hover:shadow-lg transition"
                >
                  <Icon className="text-duck-blue mb-4" size={28} />
                  <h4 className="font-bold font-headline text-lg mb-2">
                    {service.title}
                  </h4>
                  <p className="text-slate-text text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. Integration Logos ── */}
      <section className="py-16 bg-white">
        <IntegrationLogos />
      </section>

      {/* ── 5. CTA ── */}
      <CtaSection
        heading="Vill ni veta mer?"
        subtext="Vi berättar gärna hur Vården.se kan hjälpa just er mottagning att växa."
        buttonText="Boka kostnadsfri genomgång"
      />
    </>
  );
}
