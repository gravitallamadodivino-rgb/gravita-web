/* ============================================================
   GRAVITA Footer
   Design: Dark navy with teal accents and gradient top border
   ============================================================ */

import { Phone, MapPin, Facebook, Instagram, MessageCircle, Heart } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663499381074/M5iwhPNNoErtEE48H3Hzkw/logogravita-Photoroom_13de6208.png";

const quickLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Galería", href: "#galeria" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Contacto", href: "#contacto" },
];

const services = [
  "Modelo Minnesota",
  "Terapia Grupal",
  "Terapia Individual",
  "Actividades Psicomotrices",
  "Salud Mental",
  "Bienestar Integral",
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ backgroundColor: "oklch(0.12 0.05 250)" }}>
      {/* Gradient top border */}
      <div
        className="h-1"
        style={{
          background: "linear-gradient(90deg, oklch(0.18 0.06 250), oklch(0.76 0.14 185), oklch(0.18 0.06 250))",
        }}
      />

      <div className="container py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={LOGO_URL}
                alt="Gravita Logo"
                className="w-20 h-20 object-contain"
              />
              <div className="flex flex-col leading-none">
                <span
                  className="font-display text-white text-2xl font-bold"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.08em" }}
                >
                  GRAVITA
                </span>
                <span
                  className="text-xs font-body font-light tracking-widest uppercase"
                  style={{ color: "oklch(0.76 0.14 185)", fontFamily: "'Poppins', sans-serif", fontSize: "0.55rem" }}
                >
                  Clínica Terapéutica Integral
                </span>
              </div>
            </div>

            <p
              className="text-white/50 text-sm font-body leading-relaxed mb-6"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Centro de rehabilitación para adicciones y trastornos emocionales en Morelia, Michoacán.
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: "https://www.facebook.com/Clinicagravita", label: "Facebook" },
                { icon: Instagram, href: "https://www.instagram.com/clinicagravita", label: "Instagram" },
                { icon: MessageCircle, href: "https://wa.me/524433617392", label: "WhatsApp" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                  style={{
                    backgroundColor: "rgba(0, 201, 177, 0.1)",
                    color: "oklch(0.76 0.14 185)",
                    border: "1px solid rgba(0, 201, 177, 0.2)",
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4
              className="font-display font-bold text-white text-lg mb-4 uppercase tracking-wide"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Navegación
            </h4>
            <div
              className="w-8 h-0.5 mb-5"
              style={{ backgroundColor: "oklch(0.76 0.14 185)" }}
            />
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="text-white/50 hover:text-white text-sm font-body transition-colors"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="font-display font-bold text-white text-lg mb-4 uppercase tracking-wide"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Servicios
            </h4>
            <div
              className="w-8 h-0.5 mb-5"
              style={{ backgroundColor: "oklch(0.76 0.14 185)" }}
            />
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s}>
                  <span
                    className="text-white/50 text-sm font-body"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="font-display font-bold text-white text-lg mb-4 uppercase tracking-wide"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Contacto
            </h4>
            <div
              className="w-8 h-0.5 mb-5"
              style={{ backgroundColor: "oklch(0.76 0.14 185)" }}
            />
            <div className="space-y-4">
              <div className="flex gap-3">
                <Phone size={16} style={{ color: "oklch(0.76 0.14 185)", flexShrink: 0, marginTop: 2 }} />
                <div>
                  <a
                    href="tel:4433617392"
                    className="block text-white/70 hover:text-white text-sm font-body transition-colors"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    443 361 73 92
                  </a>
                  <a
                    href="tel:4433241402"
                    className="block text-white/70 hover:text-white text-sm font-body transition-colors"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    443 324 14 02
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <MapPin size={16} style={{ color: "oklch(0.76 0.14 185)", flexShrink: 0, marginTop: 2 }} />
                <p
                  className="text-white/70 text-sm font-body leading-relaxed"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Lucas Balderas #107, Chapultepec Oriente, Morelia, Michoacán
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p
            className="text-white/30 text-xs font-body text-center sm:text-left"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            © 2026 Clínica Gravita. Todos los derechos reservados.
          </p>
          <p
            className="text-white/30 text-xs font-body flex items-center gap-1"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Hecho con <Heart size={12} style={{ color: "oklch(0.76 0.14 185)" }} /> en Morelia, Michoacán
          </p>
        </div>
      </div>
    </footer>
  );
}
