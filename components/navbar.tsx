"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { mainNavLinks, productLinks } from "@/data/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close dropdown on route change
  useEffect(() => {
    setDropdownOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 150);
  };

  const isServicePage =
    productLinks.some((link) => pathname === link.href) ||
    pathname === "/tjanster";

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
          {/* Tjänster dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`flex items-center gap-1 font-medium transition-colors ${
                isServicePage
                  ? "text-white border-b-2 border-apricot pb-1"
                  : "text-white/80 hover:text-white"
              }`}
            >
              Tjänster
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {dropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-white rounded-xl shadow-xl border border-whisper py-2 z-50">
                <Link
                  href="/tjanster"
                  className="block px-4 py-2.5 text-ink hover:bg-cloud transition-colors text-sm font-semibold"
                >
                  Alla tjänster
                </Link>
                <div className="border-t border-whisper my-1" />
                {productLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-2.5 transition-colors text-sm ${
                      pathname === link.href
                        ? "text-duck-blue font-semibold bg-cloud"
                        : "text-ink hover:bg-cloud"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Other nav links (Kontakt) */}
          {mainNavLinks
            .filter((link) => link.href !== "/tjanster")
            .map((link) => {
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
        <div className="md:hidden fixed inset-0 top-[68px] bg-duck-blue z-40 flex flex-col items-center justify-start pt-12 gap-4 overflow-y-auto pb-12">
          {/* Tjänster expandable */}
          <button
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            className={`flex items-center gap-2 text-xl font-medium transition-colors ${
              isServicePage
                ? "text-white font-bold border-b-2 border-apricot pb-1"
                : "text-white/80 hover:text-white"
            }`}
          >
            Tjänster
            <ChevronDown
              size={20}
              className={`transition-transform duration-200 ${
                mobileServicesOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {mobileServicesOpen && (
            <div className="flex flex-col items-center gap-3 pl-4">
              <Link
                href="/tjanster"
                onClick={() => setMobileOpen(false)}
                className="text-white/70 text-base hover:text-white transition-colors"
              >
                Alla tjänster
              </Link>
              {productLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-base transition-colors ${
                    pathname === link.href
                      ? "text-white font-semibold"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}

          {/* Kontakt link */}
          {mainNavLinks
            .filter((link) => link.href !== "/tjanster")
            .map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`mt-4 ${
                    isActive
                      ? "text-white text-xl font-bold border-b-2 border-apricot pb-1"
                      : "text-white/80 text-xl font-medium hover:text-white transition-colors"
                  }`}
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
