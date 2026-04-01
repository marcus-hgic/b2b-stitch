import type { NavLink } from "@/lib/types";

export const mainNavLinks: NavLink[] = [
  { href: "/tjanster", label: "Tjänster" },
  { href: "/appointments", label: "Appointments" },
  { href: "/ai-chatt", label: "AI-chatt" },
  { href: "/kontakt", label: "Kontakt" },
];

export const footerLinks = {
  tjanster: [
    { href: "/tjanster", label: "Alla tjänster" },
    { href: "/appointments", label: "Appointments" },
    { href: "/ai-chatt", label: "AI-chatt" },
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
