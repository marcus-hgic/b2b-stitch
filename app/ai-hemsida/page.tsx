import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import SectionHeading from "@/components/section-heading";
import FeatureZigzag from "@/components/feature-zigzag";
import OnboardingSteps from "@/components/onboarding-steps";
import IntegrationLogos from "@/components/integration-logos";
import TestimonialCard from "@/components/testimonial-card";
import CtaSection from "@/components/cta-section";

import { aiHemsidaFeatures } from "@/data/features";
import { homeTestimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "AI hemsida — Byggd för patientbokningar | Vården.se",
  description:
    "En modern och SEO-optimerad mottagningshemsida som gör det enkelt för patienter att hitta, välja och boka er mottagning.",
  openGraph: { locale: "sv_SE", type: "website" },
};

const onboardingSteps = [
  {
    number: 1,
    title: "Berätta om er mottagning",
    description:
      "Vi samlar in information om er verksamhet, tjänster och varumärke för att bygga en skräddarsydd hemsida.",
  },
  {
    number: 2,
    title: "Vi bygger er hemsida",
    description:
      "Vår AI skapar en modern, SEO-optimerad hemsida anpassad efter er verksamhet och patientgrupp.",
  },
  {
    number: 3,
    title: "Gå live och ta emot bokningar",
    description:
      "Er hemsida publiceras med integrerad bokning. Patienter hittar er via Google och bokar direkt.",
  },
];

// Use Maria Nilsson testimonial specifically
const selectedTestimonials = homeTestimonials.filter(
  (t) => t.name === "Maria Nilsson" || t.name === "Anna Lindqvist"
);

export default function AiHemsidaPage() {
  return (
    <>
      {/* -- 1. Product Hero -- */}
      <header className="hero-gradient relative px-6 pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <span className="inline-block text-sm uppercase tracking-widest text-white/80 bg-white/10 px-4 py-1.5 rounded-full font-semibold mb-4">
              Våra tjänster
            </span>
            <h1 className="text-4xl lg:text-5xl font-extrabold font-headline tracking-tight leading-[1.1] mb-8 text-white">
              En vårdanpassad hemsida byggd för patientbokningar
            </h1>
            <p className="text-xl text-white/70 leading-relaxed mb-10 max-w-2xl">
              En modern och SEO-optimerad mottagningshemsida som gör det enkelt
              för patienter att hitta, välja och boka er mottagning — utan att ni
              behöver lägga tid på webbutveckling.
            </p>

            <Link
              href="/kontakt"
              className="inline-block bg-apricot text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all"
            >
              Boka kostnadsfri genomgång
            </Link>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative z-10">
              <Image
                src="https://img.varden.se/varden.se/b2b/product/product-search-wide--2048x1024.webp"
                alt="AI hemsida för vårdgivare"
                width={2048}
                height={1024}
                priority
                className="w-full h-auto rounded-2xl hero-float drop-shadow-[0_24px_48px_rgba(0,0,0,0.3)]"
              />
            </div>
          </div>
        </div>
      </header>

      {/* -- 2. What is AI hemsida? -- */}
      <section className="py-24 bg-cloud px-6">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading heading="Vad är AI hemsida?" />
          <p className="text-lg text-slate-text leading-relaxed mt-6">
            En komplett mottagningshemsida som byggs och underhålls av AI.
            Optimerad för Google-sökningar, integrerad med ert bokningssystem och
            designad för att konvertera besökare till patienter.
          </p>
          <div className="mt-10 inline-block bg-white rounded-2xl nordic-shadow px-10 py-8">
            <p className="text-4xl lg:text-5xl font-extrabold font-headline text-duck-blue">
              Live på en vecka
            </p>
            <p className="text-lg text-slate-text mt-2">
              från start till publicering
            </p>
          </div>
        </div>
      </section>

      {/* -- 3. Features Zigzag -- */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            heading="Allt ni behöver i en hemsida"
            subtext="Från design till SEO — vi hanterar allt så att ni kan fokusera på vård."
          />
          <div className="mt-16">
            <FeatureZigzag features={aiHemsidaFeatures} />
          </div>
        </div>
      </section>

      {/* -- 4. How it works -- */}
      <section className="py-24 bg-cloud px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading heading="Så kommer ni igång" />
          <div className="mt-16">
            <OnboardingSteps steps={onboardingSteps} />
          </div>
        </div>
      </section>

      {/* -- 5. Integration Logos -- */}
      <section className="py-16 bg-white">
        <IntegrationLogos />
      </section>

      {/* -- 6. Testimonials -- */}
      <section className="py-24 bg-cloud px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading heading="Vad våra kunder säger" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
            {selectedTestimonials.map((t) => (
              <TestimonialCard key={t.name} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* -- 7. CTA -- */}
      <CtaSection
        heading="Redo för en hemsida som bokar patienter?"
        subtext="Låt oss bygga en modern, SEO-optimerad hemsida som gör det enkelt för patienter att hitta och boka er mottagning."
        buttonText="Boka kostnadsfri genomgång"
      />
    </>
  );
}
