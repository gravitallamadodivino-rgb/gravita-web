/* ============================================================
   GRAVITA Hero Section
   Design: Full-bleed dark hero with teal accent line
   Background: Generated hero image with dark overlay
   ============================================================ */

import { useEffect, useRef } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663499381074/M5iwhPNNoErtEE48H3Hzkw/gravita_hero_bg-oBhvo8DFej7mkFpvuHxwSN.webp";

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = [titleRef.current, subtitleRef.current, ctaRef.current];
    elements.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      setTimeout(() => {
        if (!el) return;
        el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 200 + i * 200);
    });
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${HERO_BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(13,27,62,0.92) 0%, rgba(13,27,62,0.75) 50%, rgba(0,80,80,0.6) 100%)",
        }}
      />

      {/* Teal diagonal accent */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1"
        style={{ background: "linear-gradient(90deg, oklch(0.76 0.14 185), oklch(0.60 0.14 185))" }}
      />

      {/* Content */}
      <div className="container relative z-10 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Tag */}
          <div
            className="inline-flex items-center gap-2 text-xs font-body font-semibold tracking-widest uppercase mb-6 px-4 py-2 rounded-full"
            style={{
              backgroundColor: "rgba(0, 201, 177, 0.15)",
              border: "1px solid rgba(0, 201, 177, 0.4)",
              color: "oklch(0.76 0.14 185)",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: "oklch(0.76 0.14 185)" }}
            />
            Modelo Minnesota · Morelia, Michoacán
          </div>

          {/* Main Title */}
          <h1
            ref={titleRef}
            className="font-display text-white font-bold leading-none mb-4"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(3rem, 8vw, 6rem)",
              letterSpacing: "-0.01em",
            }}
          >
            <span className="block">CLÍNICA</span>
            <span
              className="block"
              style={{ color: "oklch(0.76 0.14 185)" }}
            >
              TERAPÉUTICA
            </span>
            <span className="block">INTEGRAL</span>
          </h1>

          {/* Teal accent line */}
          <div
            className="w-20 h-1 mb-6"
            style={{ background: "oklch(0.76 0.14 185)" }}
          />

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="text-white/80 text-lg md:text-xl font-body font-light leading-relaxed mb-8 max-w-xl"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Centro de rehabilitación para adicciones y trastornos emocionales.
            Contamos con un equipo integral, altamente profesional y humano
            especializado en la recuperación.
          </p>

          {/* CTA Buttons */}
          <div ref={ctaRef} className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollToSection("#contacto")}
              className="btn-teal text-base"
            >
              <MessageCircle size={18} />
              Contáctanos Hoy
            </button>
            <button
              onClick={() => scrollToSection("#servicios")}
              className="btn-outline-white text-base"
            >
              Nuestros Servicios
            </button>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/10">
            {[
              { value: "100%", label: "Recomendado" },
              { value: "24/7", label: "Disponibilidad" },
              { value: "Integral", label: "Enfoque" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span
                  className="font-display text-3xl font-bold"
                  style={{ color: "oklch(0.76 0.14 185)", fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-white/60 text-sm font-body"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection("#nosotros")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
