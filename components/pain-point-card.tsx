import type { PainPoint } from "@/lib/types";
import {
  Clock,
  AlertTriangle,
  UserX,
  Languages,
  HelpCircle,
  Search,
  ShieldAlert,
  PhoneOff,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Clock,
  AlertTriangle,
  UserX,
  Languages,
  HelpCircle,
  Search,
  ShieldAlert,
  PhoneOff,
};

interface PainPointCardProps {
  painPoint: PainPoint;
}

export default function PainPointCard({ painPoint }: PainPointCardProps) {
  const Icon = iconMap[painPoint.icon] || HelpCircle;

  return (
    <div className="rounded-2xl p-6 nordic-shadow bg-white">
      <Icon className="text-duck-blue mb-4" size={28} />
      <h4 className="font-bold font-headline text-lg mb-2">
        {painPoint.title}
      </h4>
      <p className="text-slate-text text-sm">{painPoint.description}</p>
    </div>
  );
}
