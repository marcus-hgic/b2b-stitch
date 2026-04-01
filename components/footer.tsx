import Link from "next/link";
import { footerLinks } from "@/data/navigation";

export default function Footer() {
  return (
    <footer className="bg-ink w-full pt-16 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 max-w-7xl mx-auto">
        {/* Brand column */}
        <div className="space-y-6">
          <span className="text-lg font-bold text-white font-headline">
            Vården.se
          </span>
          <p className="text-slate-400 text-sm leading-relaxed">
            Sveriges mest kompletta samlingsplats för hälsa och vård. Vi gör det
            enklare att hitta, jämföra och boka vård.
          </p>
        </div>

        {/* Tjänster column */}
        <div>
          <h5 className="text-white font-bold mb-6">Tjänster</h5>
          <ul className="space-y-4">
            {footerLinks.tjanster.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Kontakt column */}
        <div>
          <h5 className="text-white font-bold mb-6">Kontakt</h5>
          <ul className="space-y-4">
            {footerLinks.kontakt.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Företag column */}
        <div>
          <h5 className="text-white font-bold mb-6">Företag</h5>
          <ul className="space-y-4">
            {footerLinks.foretag.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-8 mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-400 text-xs">
          &copy; {new Date().getFullYear()} Vården Online Sverige AB. Alla rättigheter förbehållna.
        </p>
        <div className="flex gap-6">
          <Link className="text-slate-400 hover:text-white text-xs" href="/integritetspolicy">
            Integritetspolicy
          </Link>
          <Link className="text-slate-400 hover:text-white text-xs" href="/villkor">
            Användarvillkor
          </Link>
          <Link className="text-slate-400 hover:text-white text-xs" href="/cookies">
            Cookies
          </Link>
        </div>
      </div>
    </footer>
  );
}
