/* ============================================================
   GRAVITA Navbar
   Design: Modernismo Terapéutico Audaz
   Navy bg with teal accent, Barlow Condensed logo
   ============================================================ */

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663499381074/M5iwhPNNoErtEE48H3Hzkw/logogravita-Photoroom_13de6208.png";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Galería", href: "#galeria" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(13, 27, 62, 0.97)" : "rgba(13, 27, 62, 0.85)",
        backdropFilter: "blur(12px)",
        boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.3)" : "none",
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => { e.preventDefault(); handleNavClick("#inicio"); }}
            className="flex items-center gap-3 group"
          >
            <img
              src={LOGO_URL}
              alt="Gravita Logo"
              className="w-16 h-16 md:w-20 md:h-20 object-contain"
            />
            <div className="flex flex-col leading-none hidden md:flex">
              <span
                className="font-display text-white text-xl md:text-2xl font-bold tracking-wide"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.08em" }}
              >
                GRAVITA
              </span>
              <span
                className="text-xs font-body font-light tracking-widest uppercase"
                style={{ color: "oklch(0.76 0.14 185)", fontFamily: "'Poppins', sans-serif", fontSize: "0.6rem" }}
              >
                Clínica Terapéutica Integral
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="text-white/80 hover:text-white text-sm font-body font-medium tracking-wide transition-colors duration-200 relative group"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {link.label}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                  style={{ backgroundColor: "oklch(0.76 0.14 185)" }}
                />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:4433617392"
              className="btn-teal text-sm"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <Phone size={16} />
              443 361 73 92
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="md:hidden border-t"
          style={{ borderColor: "rgba(0, 201, 177, 0.2)", backgroundColor: "rgba(13, 27, 62, 0.98)" }}
        >
          <div className="container py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="text-white/80 hover:text-white font-body font-medium py-2 border-b transition-colors"
                style={{ fontFamily: "'Poppins', sans-serif", borderColor: "rgba(255,255,255,0.08)" }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:4433617392"
              className="btn-teal text-sm justify-center mt-2"
            >
              <Phone size={16} />
              443 361 73 92
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
