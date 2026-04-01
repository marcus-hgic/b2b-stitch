interface SectionHeadingProps {
  label?: string;
  heading: string;
  subtext?: string;
  centered?: boolean;
}

export default function SectionHeading({
  label,
  heading,
  subtext,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      {label && (
        <span className="inline-block text-sm uppercase tracking-widest text-duck-blue-light bg-duck-blue-light/10 px-4 py-1.5 rounded-full font-semibold mb-4">
          {label}
        </span>
      )}
      <h2 className="text-3xl lg:text-4xl font-extrabold font-headline">
        {heading}
      </h2>
      {subtext && (
        <p className="text-lg text-slate-text max-w-2xl mt-4 mx-auto">
          {subtext}
        </p>
      )}
    </div>
  );
}
