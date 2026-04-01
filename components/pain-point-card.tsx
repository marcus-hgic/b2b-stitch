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
  GitBranch,
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
  GitBranch,
};

const iconStyles: Record<string, { bg: string; text: string; border: string }> = {
  Clock: { bg: "bg-duck-blue/10", text: "text-duck-blue", border: "border-l-[3px] border-duck-blue" },
  AlertTriangle: { bg: "bg-apricot/10", text: "text-apricot", border: "border-l-[3px] border-apricot" },
  GitBranch: { bg: "bg-duck-blue-light/10", text: "text-duck-blue-light", border: "border-l-[3px] border-duck-blue-light" },
  HelpCircle: { bg: "bg-ink/10", text: "text-ink", border: "border-l-[3px] border-ink" },
};

const defaultStyle = { bg: "bg-duck-blue/10", text: "text-duck-blue", border: "border-l-[3px] border-duck-blue" };

interface PainPointCardProps {
  painPoint: PainPoint;
}

export default function PainPointCard({ painPoint }: PainPointCardProps) {
  const Icon = iconMap[painPoint.icon] || HelpCircle;
  const style = iconStyles[painPoint.icon] || defaultStyle;

  return (
    <div className={`rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow ${style.border}`}>
      <div className={`w-12 h-12 rounded-full ${style.bg} flex items-center justify-center mb-4`}>
        <Icon className={style.text} size={28} />
      </div>
      <h4 className="font-bold font-headline text-lg mb-2">
        {painPoint.title}
      </h4>
      <p className="text-slate-text text-sm">{painPoint.description}</p>
    </div>
  );
}
