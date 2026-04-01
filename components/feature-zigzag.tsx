import Image from "next/image";
import type { Feature } from "@/lib/types";

interface FeatureZigzagProps {
  features: Feature[];
}

export default function FeatureZigzag({ features }: FeatureZigzagProps) {
  return (
    <div className="space-y-16">
      {features.map((feature, index) => {
        const isOdd = index % 2 !== 0;

        return (
          <div
            key={feature.title}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            {/* Image */}
            <div
              className={`rounded-2xl overflow-hidden shadow-md border border-whisper bg-cloud ${
                isOdd ? "md:order-2" : ""
              }`}
            >
              {feature.imageSrc ? (
                <Image
                  src={feature.imageSrc}
                  alt={feature.title}
                  width={1024}
                  height={676}
                  className="w-full h-auto object-cover"
                />
              ) : (
                <div className="h-64 flex items-center justify-center text-slate-text text-sm">
                  Bild saknas
                </div>
              )}
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
