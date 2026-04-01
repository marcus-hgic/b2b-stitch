import type { Testimonial } from "@/lib/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 nordic-shadow relative">
      {/* Quote icon */}
      <svg
        className="text-apricot mb-4 w-8 h-8"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
      </svg>

      <p className="italic text-lg text-ink leading-relaxed mb-6">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      <div className="flex items-center gap-4">
        {/* Initials avatar */}
        <div className="w-10 h-10 rounded-full bg-duck-blue text-white flex items-center justify-center text-sm font-bold">
          {testimonial.initials}
        </div>
        <div>
          <p className="font-bold font-headline">{testimonial.name}</p>
          <p className="text-sm text-slate-text">{testimonial.title}</p>
        </div>
      </div>
    </div>
  );
}
