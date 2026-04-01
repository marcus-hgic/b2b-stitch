import type { Metadata } from "next";
import { Mail, Headset, Receipt, Clock, Users, Shield } from "lucide-react";

import ContactForm from "@/components/contact-form";
import TrustLogoStrip from "@/components/trust-logo-strip";
import { customerLogos } from "@/data/logos";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontakta Vården.se — vi hjälper er komma igång inom 24 timmar.",
  openGraph: { locale: "sv_SE", type: "website" },
};

const contactCards = [
  {
    Icon: Mail,
    email: "salj@varden.se",
    description: "Frågor om tjänster och hur ni blir kund",
  },
  {
    Icon: Headset,
    email: "support@varden.se",
    description: "Frågor om er profil eller ändringar",
  },
  {
    Icon: Receipt,
    email: "ekonomi@varden.se",
    description: "Avtal och fakturor",
  },
];

const trustBadges = [
  { Icon: Clock, text: "Vi svarar inom 24 timmar" },
  { Icon: Users, text: "18 000+ mottagningar medverkar" },
  { Icon: Shield, text: "Ingen bindningstid" },
];

export default function KontaktPage() {
  return (
    <>
      {/* ── 1. Hero ── */}
      <section className="hero-gradient py-20 pt-32 text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-extrabold font-headline tracking-tight leading-[1.1] mb-6 text-white">
            Kom igång med Vården.se
          </h1>
          <p className="text-xl text-white/70 leading-relaxed">
            Fyll i formuläret så kontaktar vi dig inom 24 timmar.
          </p>
        </div>
      </section>

      {/* ── 2. Split layout: Form + Contact info ── */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left — Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-whisper p-8">
            <ContactForm />
          </div>

          {/* Right — Contact info cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {contactCards.map((card) => (
              <div
                key={card.email}
                className="bg-white rounded-xl p-6 border border-whisper"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-duck-blue/10 flex items-center justify-center rounded-lg shrink-0">
                    <card.Icon className="text-duck-blue" size={20} />
                  </div>
                  <div>
                    <p className="font-bold font-headline">{card.email}</p>
                    <p className="text-sm text-slate-text mt-1">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Trust badges strip ── */}
      <section className="bg-cloud py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-10">
          {trustBadges.map((badge) => (
            <div
              key={badge.text}
              className="flex items-center gap-3 text-sm font-medium"
            >
              <badge.Icon className="text-duck-blue" size={20} />
              <span>{badge.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── 4. Trust logos ── */}
      <TrustLogoStrip
        title="Förtroende från ledande kliniker"
        logos={customerLogos}
      />
    </>
  );
}
