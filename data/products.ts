import type { EcosystemProduct, SecondaryService } from "@/lib/types";

export const ecosystemProducts: EcosystemProduct[] = [
  {
    title: "Vårdgivarprofil",
    subtitle: "Synlighet på rätt plats",
    description: "En professionell profil som gör att patienter hittar och väljer er när de söker vård, utan att ni behöver lägga tid på marknadsföring eller administration.",
    icon: "Globe",
    href: "/tjanster",
    accentColor: "#059669",
  },
  {
    title: "Appointments",
    subtitle: "Digitalt bokningsverktyg",
    description: "Ett modernt bokningsflöde integrerat med ert journalsystem som minskar avbrott, missade bokningar och telefonsamtal så att personalen får arbetsro.",
    icon: "CalendarDays",
    href: "/appointments",
    accentColor: "#0284C7",
    featured: true,
  },
  {
    title: "AI-chatt",
    subtitle: "Digitalt patientstöd dygnet runt",
    description: "Ett AI-drivet stöd som automatiskt hanterar vanliga frågor, guidar patienter rätt och avlastar teamet från återkommande ärenden dygnet runt.",
    icon: "MessageSquare",
    href: "/ai-chatt",
    accentColor: "#D97706",
  },
  {
    title: "Vårdanpassad hemsida",
    subtitle: "Byggd för patientbokningar",
    description: "En modern och SEO-optimerad mottagningshemsida byggd för att göra det enkelt för patienter att hitta, välja och boka er mottagning.",
    icon: "LayoutDashboard",
    href: "/tjanster",
    accentColor: "#E11D48",
  },
];

export const secondaryServices: SecondaryService[] = [
  {
    title: "Bokningsintegration",
    description: "Anslut era befintliga bokningssystem och visa tillgängliga tider direkt online.",
    icon: "Link",
  },
  {
    title: "Fotopaket",
    description: "Professionella bilder som stärker ert varumärke och bygger förtroende.",
    icon: "Camera",
  },
  {
    title: "Tandvårdswidget",
    description: "Låt patienter enkelt räkna ut sitt tandvårdsbidrag direkt på er sida. Gratis.",
    icon: "Calculator",
  },
  {
    title: "Annonsering",
    description: "Öka synligheten med riktade kampanjer på Vården.se.",
    icon: "Megaphone",
  },
];
