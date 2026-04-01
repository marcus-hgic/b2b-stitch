"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { mainNavLinks } from "@/data/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 w-full z-50 bg-duck-blue shadow-lg shadow-ink/10">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-screen-2xl mx-auto">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-white font-headline"
        >
          Vården.se
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-x-8">
          {mainNavLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  isActive
                    ? "text-white border-b-2 border-apricot pb-1 font-medium transition-all"
                    : "text-white/80 hover:text-white transition-colors font-medium"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          {/* CTA button */}
          <Link
            href="/kontakt"
            className="hidden md:inline-block bg-apricot text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:opacity-90 transition-all duration-200"
          >
            Boka kostnadsfri genomgång
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Stäng meny" : "Öppna meny"}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-[68px] bg-duck-blue z-40 flex flex-col items-center justify-start pt-12 gap-8">
          {mainNavLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={
                  isActive
                    ? "text-white text-xl font-bold border-b-2 border-apricot pb-1"
                    : "text-white/80 text-xl font-medium hover:text-white transition-colors"
                }
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/kontakt"
            onClick={() => setMobileOpen(false)}
            className="bg-apricot text-white px-8 py-3 rounded-lg font-bold text-lg mt-4"
          >
            Boka kostnadsfri genomgång
          </Link>
        </div>
      )}
    </nav>
  );
}
