import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Search, CalendarDays, Bot, CheckCircle } from "lucide-react";

import TrustLogoStrip from "@/components/trust-logo-strip";
import StatsBar from "@/components/stats-bar";
import SectionHeading from "@/components/section-heading";
import EcosystemCard from "@/components/ecosystem-card";
import PainPointCard from "@/components/pain-point-card";
import OnboardingSteps from "@/components/onboarding-steps";
import TestimonialCard from "@/components/testimonial-card";
import IntegrationLogos from "@/components/integration-logos";
import CtaSection from "@/components/cta-section";

import { customerLogos } from "@/data/logos";
import { ecosystemProducts } from "@/data/products";
import { painPoints } from "@/data/pain-points";
import { onboardingSteps } from "@/data/onboarding";
import { homeTestimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "För Vårdgivare — Nå fler patienter med Vården.se",
  description:
    "Stärk din mottagning med Sveriges största vårdplattform. Synlighet, onlinebokning, AI-chatt och mer — allt du behöver för att växa.",
  openGraph: { locale: "sv_SE", type: "website" },
};

const categories = [
  "Tandläkare",
  "Vårdcentral",
  "Fysioterapeut",
  "Psykolog",
  "Ögonklinik",
];

const valueProps = [
  {
    Icon: Search,
    title: "Patienter söker vård digitalt",
    description:
      "Var där dina patienter letar. Vi optimerar din synlighet så att du alltid är förstahandsvalet vid sökningar.",
  },
  {
    Icon: CalendarDays,
    title: "Ett smidigt bokningsflöde",
    description:
      "Minska friktionen vid tidsbokning. Vårt system integreras sömlöst med ditt befintliga journalsystem.",
  },
  {
    Icon: Bot,
    title: "Digitalt AI-stöd",
    description:
      "Effektivisera patientmötet med intelligent triagering och automatiserade administrativa flöden.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── 1. Hero ── */}
      <header className="hero-gradient relative px-6 pt-40 pb-32 overflow-hidden min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center w-full">
          <div className="lg:col-span-6">
            <h1 className="text-5xl lg:text-7xl font-extrabold font-headline tracking-tight leading-[1.08] mb-10 text-white">
              Ökad synlighet, fler bokningar och minskad administrativ
              belastning.
            </h1>
            <p className="text-xl lg:text-2xl text-white/70 leading-relaxed mb-12 max-w-2xl">
              Vården.se hjälper privata vårdgivare att bli hittade där patienter
              söker vård, skapa ett smidigt bokningsflöde och avlasta
              mottagningen genom digitalt stöd som hanterar det återkommande.
            </p>

            <div className="flex flex-wrap gap-4 mb-16">
              <Link
                href="/kontakt"
                className="bg-apricot text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all"
              >
                Kom igång nu
              </Link>
              <Link
                href="/tjanster"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all"
              >
                Se hur det fungerar
              </Link>
            </div>

            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <span
                  key={cat}
                  className="bg-white/10 px-4 py-2 rounded-full text-sm font-medium text-white/80"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative z-10">
              <Image
                src="https://img.varden.se/varden.se/b2b/hero/search-varden--2048x812.webp"
                alt="Vården.se sökresultat för vårdgivare"
                width={2048}
                height={812}
                priority
                className="w-full h-auto rounded-2xl hero-float drop-shadow-[0_24px_48px_rgba(0,0,0,0.3)] scale-110 origin-left"
              />
            </div>
          </div>
        </div>
      </header>

      {/* ── 2. Trust Logo Strip ── */}
      <TrustLogoStrip
        title="Används av ledande kliniker i Norden"
        logos={customerLogos}
      />

      {/* ── 3. Stats Bar ── */}
      <StatsBar />

      {/* ── 4. Value Propositions ── */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading heading="Varför välja Vården.se?" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {/* Card 1: Patienter söker vård digitalt */}
            <div className="group bg-gradient-to-br from-duck-blue/5 to-duck-blue/10 border-l-4 border-duck-blue rounded-2xl p-8">
              <div className="w-16 h-16 rounded-2xl bg-duck-blue/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Search className="text-duck-blue" size={40} />
              </div>
              <h3 className="text-xl font-bold font-headline mb-4">
                {valueProps[0].title}
              </h3>
              <p className="text-slate-text leading-relaxed">
                {valueProps[0].description}
              </p>
            </div>
            {/* Card 2: Ett smidigt bokningsflöde */}
            <div className="group bg-gradient-to-br from-[#4D9BA9]/5 to-[#4D9BA9]/10 border-l-4 border-duck-blue-light rounded-2xl p-8">
              <div className="w-16 h-16 rounded-2xl bg-[#4D9BA9]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CalendarDays className="text-duck-blue-light" size={40} />
              </div>
              <h3 className="text-xl font-bold font-headline mb-4">
                {valueProps[1].title}
              </h3>
              <p className="text-slate-text leading-relaxed">
                {valueProps[1].description}
              </p>
            </div>
            {/* Card 3: Digitalt AI-stöd */}
            <div className="group bg-gradient-to-br from-apricot/5 to-apricot/10 border-l-4 border-apricot rounded-2xl p-8">
              <div className="w-16 h-16 rounded-2xl bg-apricot/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Bot className="text-apricot" size={40} />
              </div>
              <h3 className="text-xl font-bold font-headline mb-4">
                {valueProps[2].title}
              </h3>
              <p className="text-slate-text leading-relaxed">
                {valueProps[2].description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Ecosystem ── */}
      <section className="py-24 bg-cloud px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Vårt ekosystem"
            heading="Ett komplett digitalt ekosystem för er mottagning"
            subtext="Modulära lösningar som fungerar oberoende av varandra eller som en kraftfull helhet."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
            {ecosystemProducts.map((product) => (
              <EcosystemCard key={product.title} product={product} />
            ))}
          </div>
          <p className="flex items-center justify-center gap-2 text-sm text-slate-text mt-10">
            <CheckCircle className="text-duck-blue" size={18} />
            Ingen bindningstid
          </p>
        </div>
      </section>

      {/* ── 6. Pain Points ── */}
      <section className="py-24 bg-apricot-bg px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            heading="Känner ni igen er?"
            subtext="Vanliga utmaningar vi hjälper vårdgivare att lösa varje dag."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
            {painPoints.map((pp) => (
              <PainPointCard key={pp.title} painPoint={pp} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Onboarding ── */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading heading="Enkel uppstart" />
          <div className="mt-16">
            <OnboardingSteps steps={onboardingSteps} />
          </div>
        </div>
      </section>

      {/* ── 8. Testimonials ── */}
      <section className="py-24 bg-cloud px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading heading="Förtroende från mottagningar över hela Sverige" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
            {homeTestimonials.map((t) => (
              <TestimonialCard key={t.name} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. Integration Logos ── */}
      <section className="py-16 bg-white">
        <IntegrationLogos />
      </section>

      {/* ── 10. CTA ── */}
      <CtaSection
        heading="Redo att stärka din mottagning?"
        subtext="Anslut dig till hundratals vårdgivare som redan växer med Vården.se."
        buttonText="Boka kostnadsfri genomgång"
      />
    </>
  );
}
