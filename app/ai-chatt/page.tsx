import type { Metadata } from "next";
import Link from "next/link";
import {
  Clock,
  CalendarDays,
  Globe,
  Phone,
  MessageCircle,
  Smartphone,
  Shield,
  CreditCard,
  Zap,
  Code,
  Palette,
  BotMessageSquare,
  Send,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import SectionHeading from "@/components/section-heading";
import TestimonialCard from "@/components/testimonial-card";
import PricingCard from "@/components/pricing-card";
import FaqAccordion from "@/components/faq-accordion";
import CtaSection from "@/components/cta-section";

import { aiChattFeatures } from "@/data/features";
import { aiChattFaq } from "@/data/faq";
import { aiChattTestimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "AI-chatt — Digitalt patientstöd dygnet runt",
  description:
    "AI-driven patientkommunikation dygnet runt. Skräddarsydd AI-chatt som svarar patienter, bokar tider och avlastar din mottagning.",
  openGraph: { locale: "sv_SE", type: "website" },
};

const iconMap: Record<string, LucideIcon> = {
  Clock,
  CalendarDays,
  Globe,
  Phone,
  MessageCircle,
  Smartphone,
  Instagram: Send,
};

const trustBadges = [
  { Icon: Shield, label: "Gratis testperiod" },
  { Icon: CreditCard, label: "Inget kreditkort" },
  { Icon: Zap, label: "Klart på 5 min" },
];

const howItWorks = [
  {
    step: 1,
    Icon: Code,
    title: "Lägg till en rad kod",
    description:
      "Kopiera en enkel kodsnutt till din hemsida. Ingen teknisk kunskap krävs.",
  },
  {
    step: 2,
    Icon: Palette,
    title: "Anpassa till din klinik",
    description:
      "Välj färger, logotyp och ton. Lägg till information om er verksamhet.",
  },
  {
    step: 3,
    Icon: BotMessageSquare,
    title: "Börja svara automatiskt",
    description:
      "AI-assistenten börjar svara på patientfrågor direkt — dygnet runt.",
  },
];

export default function AiChattPage() {
  return (
    <>
      {/* ── 1. Product Hero ── */}
      <header className="hero-gradient relative px-6 pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left column */}
          <div className="lg:col-span-7">
            <span className="inline-block text-sm uppercase tracking-widest text-white/80 bg-white/10 px-4 py-1.5 rounded-full font-semibold mb-4">
              AI-chatt
            </span>
            <h1 className="text-5xl lg:text-6xl font-extrabold font-headline tracking-tight leading-[1.1] mb-8 text-white">
              Skräddarsydd AI-chatt för din mottagning
            </h1>
            <p className="text-xl text-white/70 leading-relaxed mb-10 max-w-2xl">
              Ge dina patienter omedelbar hjälp — dygnet runt.
              Vår AI-assistent svarar på frågor, bokar tider
              och avlastar receptionen så att ditt team kan fokusera på
              det som verkligen krävs.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Link
                href="/kontakt"
                className="bg-apricot text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all"
              >
                Kom igång nu
              </Link>
              <Link
                href="#prissattning"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all"
              >
                Se priser
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6">
              {trustBadges.map(({ Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 text-sm text-white/70"
                >
                  <Icon size={18} className="text-white/80" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — chat widget mockup */}
          <div className="lg:col-span-5 relative">
            <div className="bg-white rounded-2xl nordic-shadow border border-whisper overflow-hidden">
              {/* Chat header */}
              <div className="clinical-gradient px-5 py-4 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                  <BotMessageSquare size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">AI-assistent</p>
                  <p className="text-white/70 text-xs">Online nu</p>
                </div>
              </div>

              {/* Chat bubbles */}
              <div className="p-5 space-y-4">
                {/* Bot message */}
                <div className="flex gap-2">
                  <div className="w-7 h-7 rounded-full bg-duck-blue/10 flex items-center justify-center shrink-0 mt-0.5">
                    <BotMessageSquare size={14} className="text-duck-blue" />
                  </div>
                  <div className="bg-cloud rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%]">
                    <p className="text-sm">
                      Hej! Jag är er digitala assistent. Hur kan jag hjälpa dig idag?
                    </p>
                  </div>
                </div>

                {/* User message */}
                <div className="flex justify-end">
                  <div className="clinical-gradient text-white rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%]">
                    <p className="text-sm">
                      Jag vill boka en tid för undersökning.
                    </p>
                  </div>
                </div>

                {/* Bot message */}
                <div className="flex gap-2">
                  <div className="w-7 h-7 rounded-full bg-duck-blue/10 flex items-center justify-center shrink-0 mt-0.5">
                    <BotMessageSquare size={14} className="text-duck-blue" />
                  </div>
                  <div className="bg-cloud rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%]">
                    <p className="text-sm">
                      Självklart! Jag hittar lediga tider åt dig. Vilken dag passar bäst?
                    </p>
                  </div>
                </div>
              </div>

              {/* Input bar */}
              <div className="px-5 pb-5">
                <div className="flex items-center gap-2 border border-whisper rounded-xl px-4 py-3">
                  <span className="text-sm text-slate-text flex-1">
                    Skriv ditt meddelande...
                  </span>
                  <div className="w-8 h-8 clinical-gradient rounded-lg flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 12h14M12 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── 2. Features Grid ── */}
      <section className="py-24 bg-cloud px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            heading="Allt du behöver för smart patientkommunikation"
            subtext="Sex kraftfulla funktioner som gör din mottagning tillgänglig för alla — dygnet runt."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-16">
            {aiChattFeatures.map((feature) => {
              const Icon = iconMap[feature.icon] ?? Clock;
              return (
                <div
                  key={feature.title}
                  className="bg-white rounded-xl p-6 border border-whisper"
                >
                  <div className="w-12 h-12 bg-duck-blue/10 flex items-center justify-center rounded-xl mb-4">
                    <Icon className="text-duck-blue" size={24} />
                  </div>
                  <h3 className="text-xl font-bold font-headline mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-text leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. How It Works ── */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            heading="Kom igång på 3 enkla steg"
            subtext="Från installation till automatiserade svar — på under 5 minuter."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
            {howItWorks.map(({ step, Icon, title, description }) => (
              <div key={step} className="text-center">
                <div className="w-16 h-16 clinical-gradient text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-extrabold font-headline">
                  {step}
                </div>
                <h3 className="text-xl font-bold font-headline mb-3">
                  {title}
                </h3>
                <p className="text-slate-text leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Pricing ── */}
      <section id="prissattning" className="py-24 bg-cloud px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            heading="Enkel och transparent prissättning"
            subtext="En plan, allt inkluderat. Inga dolda avgifter."
          />
          <div className="mt-16">
            <PricingCard />
          </div>
        </div>
      </section>

      {/* ── 5. Testimonials ── */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading heading="Vad våra kunder säger" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
            {aiChattTestimonials.map((t) => (
              <TestimonialCard key={t.name} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. FAQ ── */}
      <section className="py-24 bg-cloud px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading heading="Vanliga frågor" />
          <div className="mt-16">
            <FaqAccordion items={aiChattFaq} />
          </div>
        </div>
      </section>

      {/* ── 7. CTA ── */}
      <CtaSection
        heading="Redo att förbättra din patientkommunikation?"
        subtext="Starta din kostnadsfria testperiod idag och se hur AI-chatten kan avlasta din mottagning."
        buttonText="Boka kostnadsfri genomgång"
      />
    </>
  );
}
