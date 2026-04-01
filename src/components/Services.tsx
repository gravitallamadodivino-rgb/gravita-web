/* ============================================================
   GRAVITA Services Section
   Design: Dark navy background with teal accent cards
   Based on Facebook highlighted content
   ============================================================ */

import { useEffect, useRef } from "react";
import { Brain, Users2, Dumbbell, Building2, Leaf, Shield } from "lucide-react";

const SERVICES_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663499381074/M5iwhPNNoErtEE48H3Hzkw/gravita_services_bg-Kcje9ipNJypgmVJvtXLuY9.webp";

const services = [
  {
    icon: Shield,
    number: "01",
    title: "Modelo Minnesota",
    description:
      "Metodología probada internacionalmente que aborda la adicción como una enfermedad tratable. Un enfoque estructurado de 12 pasos para una recuperación duradera.",
    tags: ["Adicciones", "Rehabilitación"],
  },
  {
    icon: Users2,
    number: "02",
    title: "Terapia Grupal e Individual",
    description:
      "Sesiones terapéuticas personalizadas que combinan el poder del grupo con la atención individual. Cada paciente recibe un plan de tratamiento adaptado a sus necesidades.",
    tags: ["Psicología", "Terapia"],
  },
  {
    icon: Dumbbell,
    number: "03",
    title: "Actividades Psicomotrices",
    description:
      "Dinámicas físicas integrales que restauran funciones neurológicas, mejoran la coordinación, la concentración y la gestión emocional. El cuerpo y el espíritu sanan juntos.",
    tags: ["Psicomotricidad", "Bienestar"],
  },
  {
    icon: Building2,
    number: "04",
    title: "Instalaciones Adecuadas",
    description:
      "Espacios diseñados específicamente para el bienestar y la recuperación. Un ambiente seguro, tranquilo y terapéutico que favorece el proceso de sanación.",
    tags: ["Infraestructura", "Seguridad"],
  },
  {
    icon: Brain,
    number: "05",
    title: "Salud Mental Integral",
    description:
      "Atención especializada para trastornos emocionales y de salud mental. Nuestros profesionales abordan cada caso con profundidad y sensibilidad.",
    tags: ["Salud Mental", "Psiquiatría"],
  },
  {
    icon: Leaf,
    number: "06",
    title: "Bienestar Integral",
    description:
      "Un enfoque holístico que integra el bienestar físico, emocional y espiritual. Creemos que la recuperación verdadera abarca todas las dimensiones del ser humano.",
    tags: ["Holístico", "Espiritualidad"],
  },
];

export default function Services() {
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
      id="servicios"
      ref={sectionRef}
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        backgroundImage: `url(${SERVICES_BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(13, 27, 62, 0.93)" }}
      />

      <div className="container relative z-10">
        {/* Section header */}
        <div className="animate-on-scroll text-center mb-16">
          <span
            className="text-xs font-body font-semibold tracking-widest uppercase mb-3 block"
            style={{ color: "oklch(0.76 0.14 185)", fontFamily: "'Poppins', sans-serif" }}
          >
            Lo que ofrecemos
          </span>
          <h2
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            NUESTROS
            <span style={{ color: "oklch(0.76 0.14 185)" }}> SERVICIOS</span>
          </h2>
          <p
            className="text-white/60 font-body mt-4 max-w-xl mx-auto"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Un enfoque integral que abarca todas las dimensiones de la recuperación
            para garantizar resultados duraderos.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.number}
              className="animate-on-scroll card-hover group relative p-6 rounded-2xl"
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(0, 201, 177, 0.15)",
                backdropFilter: "blur(8px)",
                transitionDelay: `${i * 0.08}s`,
              }}
            >
              {/* Large number decoration */}
              <span
                className="absolute top-4 right-6 font-display font-bold text-6xl select-none pointer-events-none"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  color: "rgba(0, 201, 177, 0.08)",
                  lineHeight: 1,
                }}
              >
                {service.number}
              </span>

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300"
                style={{
                  backgroundColor: "rgba(0, 201, 177, 0.12)",
                }}
              >
                <service.icon
                  size={22}
                  style={{ color: "oklch(0.76 0.14 185)" }}
                />
              </div>

              {/* Title */}
              <h3
                className="font-display font-bold text-xl text-white mb-3"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className="text-white/60 text-sm font-body leading-relaxed mb-4"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-body font-medium px-2 py-1 rounded-full"
                    style={{
                      backgroundColor: "rgba(0, 201, 177, 0.1)",
                      color: "oklch(0.76 0.14 185)",
                      border: "1px solid rgba(0, 201, 177, 0.2)",
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bottom teal line on hover */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(90deg, oklch(0.76 0.14 185), transparent)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
