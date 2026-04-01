import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import SectionHeading from "@/components/section-heading";
import FeatureZigzag from "@/components/feature-zigzag";
import OnboardingSteps from "@/components/onboarding-steps";
import IntegrationLogos from "@/components/integration-logos";
import TestimonialCard from "@/components/testimonial-card";
import FaqAccordion from "@/components/faq-accordion";
import CtaSection from "@/components/cta-section";

import { appointmentsFeatures } from "@/data/features";
import { appointmentsFaq } from "@/data/faq";
import { appointmentsTestimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Appointments — Bokningswidget för er hemsida | Vården.se",
  description:
    "Ge patienter möjligheten att boka direkt på er hemsida. Appointments integreras med ert journalsystem och erbjuder ett smidigt bokningsflöde dygnet runt.",
  openGraph: { locale: "sv_SE", type: "website" },
};

const appointmentsOnboardingSteps = [
  {
    number: 1,
    title: "Registrera kliniken",
    description:
      "Skapa ert konto och berätta om er verksamhet. Vi guidar er genom hela uppsättningen.",
  },
  {
    number: 2,
    title: "Integrera bokning",
    description:
      "Vi kopplar Appointments till ert journalsystem och anpassar designen efter er hemsida.",
  },
  {
    number: 3,
    title: "Ta emot bokningar",
    description:
      "Patienter kan nu boka direkt på er hemsida — dygnet runt, utan att behöva ringa.",
  },
];

export default function AppointmentsPage() {
  return (
    <>
      {/* ── 1. Product Hero ── */}
      <header className="hero-gradient relative px-6 pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <span className="inline-block text-sm uppercase tracking-widest text-white/80 bg-white/10 px-4 py-1.5 rounded-full font-semibold mb-4">
              Våra tjänster
            </span>
            <h1 className="text-4xl lg:text-5xl font-extrabold font-headline tracking-tight leading-[1.1] mb-8 text-white">
              Förenkla bokning på er egna hemsida med Appointments
            </h1>
            <p className="text-xl text-white/70 leading-relaxed mb-10 max-w-2xl">
              Ge patienter möjligheten att boka tid direkt på er hemsida,
              dygnet runt. Appointments integreras med ert journalsystem och
              anpassas efter er verksamhet.
            </p>

            <Link
              href="/kontakt"
              className="inline-block bg-apricot text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all"
            >
              Boka en demo
            </Link>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative z-10">
              <Image
                src="https://img.varden.se/varden.se/b2b/product/appointments-hero--1536x1844.webp"
                alt="Appointments bokningswidget"
                width={384}
                height={1133}
                priority
                className="w-full h-auto rounded-2xl hero-float drop-shadow-[0_24px_48px_rgba(0,0,0,0.3)]"
              />
            </div>
          </div>
        </div>
      </header>

      {/* ── 2. What is Appointments? ── */}
      <section className="py-24 bg-cloud px-6">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading heading="Vad är Appointments?" />
          <p className="text-lg text-slate-text leading-relaxed mt-6">
            Appointments är en bokningswidget som placeras direkt på er
            hemsida. Patienter ser lediga tider i realtid, väljer tjänst och
            utövare, och bokar utan att behöva ringa. Allt synkas automatiskt
            med ert journalsystem.
          </p>
          <div className="mt-10 inline-block bg-white rounded-2xl nordic-shadow px-10 py-8">
            <p className="text-4xl lg:text-5xl font-extrabold font-headline text-duck-blue">
              Upp till 25%
            </p>
            <p className="text-lg text-slate-text mt-2">
              mindre tid på admin
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. Features Zigzag ── */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            heading="Allt du behöver för smidig bokning"
            subtext="Appointments ger er full kontroll över bokningsflödet med funktioner som anpassas efter er verksamhet."
          />
          <div className="mt-16">
            <FeatureZigzag features={appointmentsFeatures} />
          </div>
        </div>
      </section>

      {/* ── 4. How it works ── */}
      <section className="py-24 bg-cloud px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading heading="Så kommer ni igång" />
          <div className="mt-16">
            <OnboardingSteps steps={appointmentsOnboardingSteps} />
          </div>
        </div>
      </section>

      {/* ── 5. Integration Logos ── */}
      <section className="py-16 bg-white">
        <IntegrationLogos />
      </section>

      {/* ── 6. Testimonials ── */}
      <section className="py-24 bg-cloud px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading heading="Vad våra kunder säger" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
            {appointmentsTestimonials.map((t) => (
              <TestimonialCard key={t.name} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. FAQ ── */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-3xl mx-auto">
          <SectionHeading heading="Vanliga frågor" />
          <div className="mt-12">
            <FaqAccordion items={appointmentsFaq} />
          </div>
        </div>
      </section>

      {/* ── 8. CTA ── */}
      <CtaSection
        heading="Redo att bli bokningsbar 24/7?"
        subtext="Anslut Appointments till er hemsida och låt patienter boka direkt — dygnet runt."
        buttonText="Boka kostnadsfri genomgång"
      />
    </>
  );
}
