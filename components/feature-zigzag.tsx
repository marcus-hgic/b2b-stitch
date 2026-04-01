import type { Feature } from "@/lib/types";
import * as LucideIcons from "lucide-react";

interface FeatureZigzagProps {
  features: Feature[];
}

export default function FeatureZigzag({ features }: FeatureZigzagProps) {
  return (
    <div className="space-y-16">
      {features.map((feature, index) => {
        const Icon =
          (LucideIcons as Record<string, LucideIcons.LucideIcon>)[
            feature.icon
          ] ?? LucideIcons.Sparkles;
        const isOdd = index % 2 !== 0;

        return (
          <div
            key={feature.title}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            {/* Placeholder icon card */}
            <div
              className={`bg-cloud rounded-2xl h-64 flex items-center justify-center ${
                isOdd ? "md:order-2" : ""
              }`}
            >
              <Icon className="text-duck-blue" size={56} strokeWidth={1.5} />
            </div>

            {/* Text content */}
            <div className={isOdd ? "md:order-1" : ""}>
              <h3 className="text-2xl font-bold font-headline mb-4">
                {feature.title}
              </h3>
              <p className="text-slate-text leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
