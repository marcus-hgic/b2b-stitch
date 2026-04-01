import Image from "next/image";
import { ehrLogos } from "@/data/logos";

export default function IntegrationLogos() {
  return (
    <section className="py-16 px-6 border-y border-whisper">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-sm text-slate-text uppercase tracking-wider mb-10 font-semibold">
          Integrerar med etablerade journalsystem
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {ehrLogos.map((logo) => (
            <Image
              key={logo.name}
              src={logo.src}
              alt={logo.name}
              width={120}
              height={40}
              className="grayscale hover:grayscale-0 transition duration-300 object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
