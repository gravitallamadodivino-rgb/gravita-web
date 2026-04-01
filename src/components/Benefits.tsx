/* ============================================================
   GRAVITA Benefits Section - Por qué elegirnos
   Design: Light section with asymmetric image + benefits list
   Based on Facebook post about psicomotricidad
   ============================================================ */

import { useEffect, useRef } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

const ACTIVITY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663499381074/M5iwhPNNoErtEE48H3Hzkw/activity_photo_2_7ed2d630.webp";

const benefits = [
  {
    title: "Coordinación y Equilibrio",
    description:
      "Vital para restaurar funciones neurológicas afectadas por el consumo. Nuestras actividades físicas ayudan a recuperar el control total del cuerpo.",
  },
  {
    title: "Concentración Mental",
    description:
      "Enfocar la mente en metas inmediatas y precisas. Las dinámicas terapéuticas entrenan la atención y la claridad mental necesarias para la recuperación.",
  },
  {
    title: "Gestión Emocional",
    description:
      "Canalizar la energía y el estrés de manera positiva. Aprendemos a reconocer y manejar las emociones como herramienta fundamental de la sanación.",
  },
  {
    title: "Apoyo Familiar",
    description:
      "La familia es parte fundamental del proceso. Ofrecemos orientación y acompañamiento a los seres queridos durante todo el tratamiento.",
  },
];

export default function Benefits() {
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
      ref={sectionRef}
      className="py-20 md:py-28"
      style={{ backgroundColor: "white" }}
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text column */}
          <div className="animate-on-scroll">
            <span
              className="text-xs font-body font-semibold tracking-widest uppercase mb-3 block"
              style={{ color: "oklch(0.76 0.14 185)", fontFamily: "'Poppins', sans-serif" }}
            >
              Nuestro Enfoque
            </span>
            <h2
              className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "oklch(0.18 0.06 250)" }}
            >
              ¿POR QUÉ LA ACTIVIDAD
              <span style={{ color: "oklch(0.76 0.14 185)" }}> PSICOMOTRIZ</span>
              {" "}ES CLAVE?
            </h2>

            <p
              className="text-gray-600 font-body leading-relaxed mb-8"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              En Gravita, implementamos actividades físicas integrales que ayudan a nuestros
              pacientes a recuperar el control total de su cuerpo y mente. Estas dinámicas
              no son solo juegos, son <strong>herramientas terapéuticas</strong> que benefician
              de manera profunda y duradera.
            </p>

            {/* Benefits list */}
            <div className="space-y-6">
              {benefits.map((benefit, i) => (
                <div
                  key={benefit.title}
                  className="animate-on-scroll flex gap-4"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2
                      size={22}
                      style={{ color: "oklch(0.76 0.14 185)" }}
                    />
                  </div>
                  <div>
                    <h4
                      className="font-display font-bold text-lg mb-1"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "oklch(0.18 0.06 250)" }}
                    >
                      {benefit.title}
                    </h4>
                    <p
                      className="text-gray-500 text-sm font-body leading-relaxed"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="#contacto"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 font-body font-semibold text-sm group"
                style={{ color: "oklch(0.76 0.14 185)", fontFamily: "'Poppins', sans-serif" }}
              >
                Comienza el cambio hoy mismo
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>
          </div>

          {/* Image column */}
          <div className="animate-on-scroll relative">
            {/* Main image with circular frame */}
            <div className="relative">
              <div
                className="relative rounded-3xl overflow-hidden"
                style={{
                  boxShadow: "0 30px 80px rgba(13,27,62,0.2)",
                  border: "3px solid rgba(0, 201, 177, 0.3)",
                }}
              >
                <img
                  src={ACTIVITY_IMG}
                  alt="Actividades psicomotrices en Clínica Gravita"
                  className="w-full h-96 object-cover"
                />
                {/* Gradient overlay at bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-32"
                  style={{
                    background: "linear-gradient(to top, rgba(13,27,62,0.8), transparent)",
                  }}
                />
                {/* Bottom text overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <p
                    className="text-white font-display font-bold text-lg"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    #Psicomotricidad #SaludMental
                  </p>
                  <p
                    className="text-white/70 text-xs font-body"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    #ClínicaDeRehabilitación #Morelia #BienestarIntegral
                  </p>
                </div>
              </div>

              {/* Floating stat card */}
              <div
                className="absolute -top-6 -right-6 p-4 rounded-2xl"
                style={{
                  background: "oklch(0.18 0.06 250)",
                  boxShadow: "0 10px 30px rgba(13,27,62,0.3)",
                  border: "1px solid rgba(0,201,177,0.3)",
                }}
              >
                <p
                  className="font-display font-bold text-3xl"
                  style={{ color: "oklch(0.76 0.14 185)", fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  100%
                </p>
                <p
                  className="text-white/70 text-xs font-body"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Recomendado
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
