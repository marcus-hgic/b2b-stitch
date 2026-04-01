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

const productImages: Record<string, { src: string; alt: string; width: number; height: number }> = {
  "Vårdgivarprofil": {
    src: `${CDN}/hero/vardgivarprofil-tandvard--2048x1030.webp`,
    alt: "Vårdgivarprofil på Vården.se med sökresultat",
    width: 2048,
    height: 1030,
  },
  Appointments: {
    src: `${CDN}/product/appointments-hero--1536x1844.webp`,
    alt: "Appointments bokningsvy i Vården.se",
    width: 384,
    height: 1133,
  },
  "AI-chatt": {
    src: `${CDN}/product/appointments-aesthetica-alt--1536x1844.webp`,
    alt: "AI-chatt gränssnitt för patientstöd",
    width: 384,
    height: 1133,
  },
  "Vårdanpassad hemsida": {
    src: `${CDN}/product/product-search-wide--2048x1024.webp`,
    alt: "Vårdanpassad hemsida för mottagningar",
    width: 2048,
    height: 1024,
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
      <header className="hero-gradient relative px-6 pt-32 pb-20 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-sm uppercase tracking-widest text-white/80 bg-white/10 px-4 py-1.5 rounded-full font-semibold mb-4">
            Våra tjänster
          </span>
          <h1 className="text-5xl lg:text-6xl font-extrabold font-headline tracking-tight leading-[1.1] mb-6 text-white">
            Ett komplett digitalt ekosystem för er mottagning
          </h1>
          <p className="text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
            Modulära lösningar som fungerar oberoende av varandra eller som en kraftfull helhet — allt för att ni ska nå fler patienter, fylla fler tider och växa.
          </p>
        </div>
      </header>

      {/* ── 2. Core Products ── */}
      <section className="py-24 bg-cloud px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ecosystemProducts.map((product) => {
              const imgData = productImages[product.title];
              return (
                <div key={product.title} className="flex flex-col gap-0">
                  {imgData && (
                    <div className="bg-white rounded-t-2xl p-4 border border-b-0 border-whisper overflow-hidden">
                      <Image
                        src={imgData.src}
                        alt={imgData.alt}
                        width={imgData.width}
                        height={imgData.height}
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  )}
                  <EcosystemCard product={product} />
                </div>
              );
            })}
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
