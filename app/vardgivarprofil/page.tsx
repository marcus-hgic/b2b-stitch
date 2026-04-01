import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

import SectionHeading from "@/components/section-heading";
import FeatureZigzag from "@/components/feature-zigzag";
import OnboardingSteps from "@/components/onboarding-steps";
import IntegrationLogos from "@/components/integration-logos";
import TestimonialCard from "@/components/testimonial-card";
import CtaSection from "@/components/cta-section";

import { vardgivarprofilFeatures } from "@/data/features";
import { homeTestimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Vårdgivarprofil — Synlighet på rätt plats | Vården.se",
  description:
    "Få en professionell, SEO-anpassad profil på Sveriges största vårdplattform. Nå patienter som aktivt söker just den vård ni erbjuder.",
  openGraph: { locale: "sv_SE", type: "website" },
};

const onboardingSteps = [
  {
    number: 1,
    title: "Skapa en Vårdgivarprofil",
    description:
      "Visa upp en professionell profil för din klinik med tjänster, öppettider och omdömen.",
  },
  {
    number: 2,
    title: "Integrera med ditt bokningssystem",
    description:
      "Vi kopplar er profil till ert befintliga system så att allt synkas automatiskt.",
  },
  {
    number: 3,
    title: "Smidig bokning = mindre admin",
    description:
      "Patienter bokar direkt, ni får mer tid till vård och mindre tid vid telefonen.",
  },
];

const bulletPoints = [
  "Lägre CPC utan content-kostnader för produktion",
  "Förbättra synlighet med SEO-anpassat innehåll",
  "Nå rätt patienter med målgruppsanpassad branding",
];

export default function VardgivarprofilPage() {
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
              Vi hjälper din mottagning att synas och nå rätt patienter
            </h1>
            <p className="text-xl text-white/70 leading-relaxed mb-10 max-w-2xl">
              Få en professionell, SEO-anpassad profil på Sveriges största
              vårdplattform. Nå patienter som aktivt söker just den vård ni
              erbjuder.
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
                src="https://img.varden.se/varden.se/b2b/product/product-vardgivarprofil--2048x1024.webp"
                alt="Vårdgivarprofil på Vården.se"
                width={2048}
                height={1024}
                priority
                className="w-full h-auto rounded-2xl hero-float drop-shadow-[0_24px_48px_rgba(0,0,0,0.3)]"
              />
            </div>
          </div>
        </div>
      </header>

      {/* -- 2. What is Vårdgivarprofil? -- */}
      <section className="py-24 bg-cloud px-6">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading heading="Vad är en Vårdgivarprofil?" />
          <p className="text-lg text-slate-text leading-relaxed mt-6">
            En unik, SEO-anpassad profil som visar era tjänster, öppettider och
            omdömen på Vården.se — Sveriges största samlingsplats för legitimerad
            vård med över 1 000 000 sidvisningar per månad.
          </p>
          <div className="mt-10 inline-block bg-white rounded-2xl nordic-shadow px-10 py-8">
            <p className="text-4xl lg:text-5xl font-extrabold font-headline text-duck-blue">
              1 000 000+
            </p>
            <p className="text-lg text-slate-text mt-2">
              sidvisningar per månad
            </p>
          </div>
        </div>
      </section>

      {/* -- 3. Features Zigzag -- */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            heading="Så hjälper Vårdgivarprofilen er mottagning"
            subtext="Från synlighet till bokning — allt på en och samma plattform."
          />
          <div className="mt-16">
            <FeatureZigzag features={vardgivarprofilFeatures} />
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

      {/* -- 5. Bullet points -- */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-3xl mx-auto">
          <SectionHeading heading="Varför välja Vårdgivarprofil?" />
          <ul className="mt-10 space-y-5">
            {bulletPoints.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0 w-6 h-6 bg-duck-blue/10 rounded-full flex items-center justify-center">
                  <Check size={14} className="text-duck-blue" />
                </span>
                <span className="text-lg text-ink leading-relaxed">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* -- 6. Integration Logos -- */}
      <section className="py-16 bg-cloud">
        <IntegrationLogos />
      </section>

      {/* -- 7. Testimonials -- */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading heading="Vad våra kunder säger" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
            {homeTestimonials.map((t) => (
              <TestimonialCard key={t.name} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* -- 8. CTA -- */}
      <CtaSection
        heading="Redo att synas för rätt patienter?"
        subtext="Skapa er Vårdgivarprofil och nå patienter som aktivt söker den vård ni erbjuder."
        buttonText="Boka kostnadsfri genomgång"
      />
    </>
  );
}
