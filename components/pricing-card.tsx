import Link from "next/link";
import { Check } from "lucide-react";

const features = [
  "Obegränsat antal chattkonversationer",
  "Tillgänglig dygnet runt",
  "Stöd för 50+ språk",
  "Röstsamtal med AI-assistent",
  "Instagram DM-integration",
  "Anpassad till din kliniks profil",
  "Integration med journalsystem",
  "Admingränssnitt för insikter",
  "Personlig onboarding",
];

export default function PricingCard() {
  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl p-8 border border-whisper nordic-shadow text-center">
      <p className="text-sm uppercase tracking-widest text-duck-blue-light font-semibold mb-2">
        Allt ing&#229;r
      </p>
      <p className="text-4xl font-extrabold font-headline text-duck-blue mb-1">
        1&nbsp;995 kr/m&#229;n
      </p>
      <p className="text-sm text-slate-text mb-8">(exkl. moms)</p>

      <ul className="text-left space-y-3 mb-8">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-3">
            <Check
              size={18}
              className="text-duck-blue shrink-0 mt-0.5"
            />
            <span className="text-ink">{f}</span>
          </li>
        ))}
      </ul>

      <Link
        href="/kontakt"
        className="inline-block w-full clinical-gradient text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all text-center"
      >
        Kom ig&#229;ng nu
      </Link>
      <p className="text-sm text-slate-text mt-4">
        Ingen bindningstid. Avsluta n&#228;r du vill.
      </p>
    </div>
  );
}
