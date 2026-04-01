import Image from "next/image";
import type { Logo } from "@/lib/types";

interface TrustLogoStripProps {
  title?: string;
  logos: Logo[];
}

export default function TrustLogoStrip({ title, logos }: TrustLogoStripProps) {
  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {title && (
          <p className="text-center text-sm text-slate-text uppercase tracking-wider mb-8">
            {title}
          </p>
        )}
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
          {logos.map((logo) => (
            <Image
              key={logo.name}
              src={logo.src}
              alt={logo.name}
              width={120}
              height={40}
              className="object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
