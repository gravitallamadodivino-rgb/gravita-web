/* ============================================================
   GRAVITA About Section - Historia de la Marca
   Design: Light section with image + text layout
   ============================================================ */

import { useEffect, useRef } from "react";
import { Heart, Users, Award, Clock } from "lucide-react";

const ABOUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663499381074/M5iwhPNNoErtEE48H3Hzkw/gravita_about_bg-aTB3Xojsd6r7ntRmR65pKh.webp";
const GROUP_PHOTO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663499381074/M5iwhPNNoErtEE48H3Hzkw/activity_photo_1_8c75ba48.webp";

const values = [
  { icon: Heart, title: "Enfoque Humano", desc: "Tratamos a cada persona con dignidad, empatía y respeto." },
  { icon: Users, title: "Equipo Profesional", desc: "Especialistas en salud mental, adicciones y bienestar integral." },
  { icon: Award, title: "Modelo Minnesota", desc: "Metodología probada internacionalmente para la recuperación." },
  { icon: Clock, title: "Disponibilidad 24/7", desc: "Siempre disponibles para ti y tu familia cuando más lo necesitan." },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="nosotros"
      ref={sectionRef}
      className="py-20 md:py-28"
      style={{ backgroundColor: "#f8faff" }}
    >
      <div className="container">
        {/* Section header */}
        <div className="animate-on-scroll mb-16">
          <span
            className="text-xs font-body font-semibold tracking-widest uppercase mb-3 block"
            style={{ color: "oklch(0.76 0.14 185)", fontFamily: "'Poppins', sans-serif" }}
          >
            Nuestra Historia
          </span>
          <h2
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "oklch(0.18 0.06 250)" }}
          >
            SOBRE CLÍNICA
            <span style={{ color: "oklch(0.76 0.14 185)" }}> GRAVITA</span>
          </h2>
        </div>

        {/* Main content: image + text */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Image column */}
          <div className="animate-on-scroll relative">
            {/* Main image */}
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{ boxShadow: "0 20px 60px rgba(13,27,62,0.2)" }}
            >
              <img
                src={GROUP_PHOTO}
                alt="Equipo y pacientes de Clínica Gravita"
                className="w-full h-80 md:h-96 object-cover"
              />
              {/* Overlay badge */}
              <div
                className="absolute bottom-4 left-4 right-4 rounded-xl p-4 flex items-center gap-3"
                style={{
                  background: "rgba(13,27,62,0.9)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(0,201,177,0.3)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "oklch(0.76 0.14 185)" }}
                >
                  <Heart size={18} color="oklch(0.18 0.06 250)" />
                </div>
                <div>
                  <p
                    className="text-white font-body font-semibold text-sm"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Rehabilitación Integral
                  </p>
                  <p
                    className="text-white/60 text-xs font-body"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Cuerpo, mente y espíritu en armonía
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative teal circle */}
            <div
              className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-20 -z-10"
              style={{ backgroundColor: "oklch(0.76 0.14 185)" }}
            />
            <div
              className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full opacity-10 -z-10"
              style={{ backgroundColor: "oklch(0.18 0.06 250)" }}
            />
          </div>

          {/* Text column */}
          <div className="animate-on-scroll">
            <div className="teal-line-left mb-6">
              <p
                className="font-display text-2xl font-bold"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "oklch(0.18 0.06 250)" }}
              >
                Promovemos una rehabilitación integral diseñada para que cada paciente recupere su bienestar físico y emocional, facilitando una reincorporación plena y saludable a su núcleo familiar y a la sociedad
              </p>
            </div>

            <p
              className="text-gray-600 font-body leading-relaxed mb-6"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              En <strong>Gravita</strong>, somos un centro de rehabilitación especializado en adicciones
              y trastornos emocionales, ubicado en Morelia, Michoacán. Nuestro equipo integral,
              altamente profesional y profundamente humano, está dedicado a acompañar a cada persona
              en su camino hacia la recuperación.
            </p>

            <p
              className="text-gray-600 font-body leading-relaxed mb-8"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Implementamos el <strong>Modelo Minnesota</strong>, una metodología probada
              internacionalmente que aborda la adicción como una enfermedad tratable, combinando
              terapia individual, grupal, actividades físicas y apoyo espiritual para lograr
              una recuperación duradera y significativa.
            </p>

            <a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-teal inline-flex"
            >
              Comienza tu recuperación
            </a>
          </div>
        </div>

        {/* Values grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, i) => (
            <div
              key={val.title}
              className="animate-on-scroll card-hover p-6 rounded-xl"
              style={{
                backgroundColor: "white",
                boxShadow: "0 4px 20px rgba(13,27,62,0.08)",
                transitionDelay: `${i * 0.1}s`,
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: "rgba(0, 201, 177, 0.12)" }}
              >
                <val.icon size={22} style={{ color: "oklch(0.76 0.14 185)" }} />
              </div>
              <h3
                className="font-display font-bold text-lg mb-2"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "oklch(0.18 0.06 250)" }}
              >
                {val.title}
              </h3>
              <p
                className="text-gray-500 text-sm font-body leading-relaxed"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
