/* ============================================================
   GRAVITA Testimonials Section - Prueba Social
   Design: Dark navy with teal quote marks and star ratings
   Based on 100% recommendation rate from Facebook
   ============================================================ */

import { useEffect, useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "María G.",
    relation: "Familiar de paciente",
    text: "Gravita cambió la vida de mi hijo. El equipo es increíblemente profesional y humano. Las instalaciones son adecuadas y el ambiente es de mucho apoyo. 100% recomendado.",
    rating: 5,
    initial: "M",
  },
  {
    name: "Roberto L.",
    relation: "Paciente recuperado",
    text: "El Modelo Minnesota que aplican en Gravita fue clave en mi recuperación. Las actividades físicas y la terapia grupal me ayudaron a recuperar el control de mi vida. Eternamente agradecido.",
    rating: 5,
    initial: "R",
  },
  {
    name: "Carmen V.",
    relation: "Familiar de paciente",
    text: "Desde el primer día sentimos el compromiso del equipo de Gravita. La atención es personalizada y siempre están disponibles. Mi hermano lleva meses en recuperación gracias a ellos.",
    rating: 5,
    initial: "C",
  },
  {
    name: "Alejandro M.",
    relation: "Paciente recuperado",
    text: "Las actividades psicomotrices fueron una revelación para mí. No solo recuperé coordinación física, sino también claridad mental y gestión emocional. Gravita es mucho más que una clínica.",
    rating: 5,
    initial: "A",
  },
  {
    name: "Patricia H.",
    relation: "Familiar de paciente",
    text: "El equipo de profesionales de Gravita nos acompañó en todo momento, tanto a mi esposo como a nuestra familia. Su enfoque integral hace una diferencia enorme en la recuperación.",
    rating: 5,
    initial: "P",
  },
  {
    name: "Jorge S.",
    relation: "Paciente recuperado",
    text: "Vine a Gravita sin esperanza y salí con una nueva perspectiva de vida. El ambiente, el equipo y el programa son exactamente lo que necesitaba para comenzar de nuevo.",
    rating: 5,
    initial: "J",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="testimonios"
      ref={sectionRef}
      className="py-20 md:py-28"
      style={{ backgroundColor: "oklch(0.18 0.06 250)" }}
    >
      <div className="container">
        {/* Section header */}
        <div className="animate-on-scroll text-center mb-16">
          <span
            className="text-xs font-body font-semibold tracking-widest uppercase mb-3 block"
            style={{ color: "oklch(0.76 0.14 185)", fontFamily: "'Poppins', sans-serif" }}
          >
            Prueba Social
          </span>
          <h2
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            LO QUE DICEN
            <span style={{ color: "oklch(0.76 0.14 185)" }}> DE NOSOTROS</span>
          </h2>

          {/* Rating summary */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  fill="oklch(0.76 0.14 185)"
                  style={{ color: "oklch(0.76 0.14 185)" }}
                />
              ))}
            </div>
            <span
              className="text-white font-body font-semibold"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              100% Recomendado
            </span>
            <span
              className="text-white/40 text-sm font-body"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              (6 reseñas en Facebook)
            </span>
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="animate-on-scroll card-hover relative p-6 rounded-2xl"
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(0, 201, 177, 0.12)",
                backdropFilter: "blur(8px)",
                transitionDelay: `${i * 0.08}s`,
              }}
            >
              {/* Quote icon */}
              <Quote
                size={32}
                className="mb-4 opacity-30"
                style={{ color: "oklch(0.76 0.14 185)" }}
              />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star
                    key={j}
                    size={14}
                    fill="oklch(0.76 0.14 185)"
                    style={{ color: "oklch(0.76 0.14 185)" }}
                  />
                ))}
              </div>

              {/* Text */}
              <p
                className="text-white/70 text-sm font-body leading-relaxed mb-6 italic"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-lg flex-shrink-0"
                  style={{
                    backgroundColor: "rgba(0, 201, 177, 0.2)",
                    color: "oklch(0.76 0.14 185)",
                    fontFamily: "'Barlow Condensed', sans-serif",
                  }}
                >
                  {t.initial}
                </div>
                <div>
                  <p
                    className="text-white font-body font-semibold text-sm"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="text-white/40 text-xs font-body"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {t.relation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="animate-on-scroll text-center mt-12">
          <a
            href="https://www.facebook.com/Clinicagravita"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body text-sm"
            style={{ color: "oklch(0.76 0.14 185)", fontFamily: "'Poppins', sans-serif" }}
          >
            Ver todas las reseñas en Facebook →
          </a>
        </div>
      </div>
    </section>
  );
}
