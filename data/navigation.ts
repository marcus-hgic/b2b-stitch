import type { NavLink } from "@/lib/types";

export const productLinks: NavLink[] = [
  { href: "/vardgivarprofil", label: "Vårdgivarprofil" },
  { href: "/appointments", label: "Appointments" },
  { href: "/ai-chatt", label: "AI-chatt" },
  { href: "/ai-hemsida", label: "AI hemsida" },
];

export const mainNavLinks: NavLink[] = [
  { href: "/tjanster", label: "Tjänster" },
  { href: "/kontakt", label: "Kontakt" },
];

export const footerLinks = {
  tjanster: [
    { href: "/tjanster", label: "Alla tjänster" },
    { href: "/vardgivarprofil", label: "Vårdgivarprofil" },
    { href: "/appointments", label: "Appointments" },
    { href: "/ai-chatt", label: "AI-chatt" },
    { href: "/ai-hemsida", label: "AI hemsida" },
  ],
  kontakt: [
    { label: "salj@varden.se", href: "mailto:salj@varden.se" },
    { label: "support@varden.se", href: "mailto:support@varden.se" },
    { label: "ekonomi@varden.se", href: "mailto:ekonomi@varden.se" },
  ],
  foretag: [
    { href: "/kontakt", label: "Kontakta oss" },
  ],
};
