import Link from "next/link";
import type { EcosystemProduct } from "@/lib/types";
import {
  Search,
  Calendar,
  CalendarDays,
  MessageSquare,
  Globe,
  LayoutDashboard,
  HelpCircle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Search,
  Calendar,
  CalendarDays,
  MessageSquare,
  Globe,
  LayoutDashboard,
  HelpCircle,
};

interface EcosystemCardProps {
  product: EcosystemProduct;
}

export default function EcosystemCard({ product }: EcosystemCardProps) {
  const Icon = iconMap[product.icon] || HelpCircle;

  return (
    <div
      className={`bg-white rounded-2xl p-8 hover:shadow-lg transition border ${
        product.featured ? "border-apricot/30" : "border-whisper"
      }`}
    >
      <Icon className="mb-4" size={32} style={{ color: product.accentColor }} />
      <h4 className="font-bold font-headline text-xl mb-1">{product.title}</h4>
      <p className="text-duck-blue-light text-sm mb-3">{product.subtitle}</p>
      <p className="text-slate-text mb-4">{product.description}</p>
      <Link
        href={product.href}
        className="text-duck-blue font-semibold hover:underline"
      >
        Läs mer &rarr;
      </Link>
    </div>
  );
}
