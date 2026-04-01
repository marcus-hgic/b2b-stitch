import Link from "next/link";

interface CtaSectionProps {
  heading: string;
  subtext: string;
  buttonText: string;
  buttonHref?: string;
}

export default function CtaSection({
  heading,
  subtext,
  buttonText,
  buttonHref = "/kontakt",
}: CtaSectionProps) {
  return (
    <section className="bg-apricot-bg py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-headline font-extrabold mb-6">
          {heading}
        </h2>
        <p className="text-lg text-slate-text mb-12">{subtext}</p>
        <Link
          href={buttonHref}
          className="inline-block clinical-gradient text-white px-10 py-4 rounded-xl font-bold shadow-xl hover:scale-[1.02] transition-transform"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
