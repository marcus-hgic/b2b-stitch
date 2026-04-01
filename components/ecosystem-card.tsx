import Image from "next/image";
import Link from "next/link";
import {
  Globe,
  CalendarDays,
  MessageSquare,
  LayoutDashboard,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { EcosystemProduct } from "@/lib/types";

const iconMap: Record<string, LucideIcon> = {
  Globe,
  CalendarDays,
  MessageSquare,
  LayoutDashboard,
};

interface EcosystemCardProps {
  product: EcosystemProduct;
}

export default function EcosystemCard({ product }: EcosystemCardProps) {
  const IconComponent = iconMap[product.icon];

  return (
    <div
      className={`group bg-white rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 border ${
        product.featured ? "border-apricot/30" : "border-whisper"
      }`}
    >
      {/* Image section */}
      {product.imageSrc ? (
        <div className="overflow-hidden" style={{ aspectRatio: "16/9" }}>
          <Image
            src={product.imageSrc}
            alt={product.title}
            width={1024}
            height={576}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      ) : (
        <div
          className="flex items-center justify-center bg-gradient-to-br from-cloud to-white"
          style={{ aspectRatio: "16/9" }}
        >
          {IconComponent && (
            <IconComponent size={64} className="text-duck-blue-light/40" />
          )}
        </div>
      )}

      {/* Text content */}
      <div className="p-6">
        <h4 className="font-bold font-headline text-xl mb-1">{product.title}</h4>
        <p className="text-duck-blue-light text-sm mb-3">{product.subtitle}</p>
        <p className="text-slate-text mb-4">{product.description}</p>
        <Link
          href={product.href}
          className="text-duck-blue font-semibold hover:underline"
        >
          Läs mer →
        </Link>
      </div>
    </div>
  );
}
