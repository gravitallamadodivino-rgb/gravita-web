/**
 * Team Component - Equipo Profesional de Gravita
 * ============================================================
 * Diseño: Modernismo Terapéutico Audaz
 * - Fondo blanco con acentos navy/teal
 * - Tarjetas de perfil con foto, nombre, especialidad y biografía
 * - Grid responsive con animaciones de hover
 * - Tipografía: Barlow Condensed (títulos), Poppins (texto)
 */

import { Heart, Brain, Users } from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  specialty: string;
  bio: string;
  image: string;
  icon: React.ReactNode;
}

const teamMembers: TeamMember[] = [
  {
    id: "jennifer",
    name: "Jennifer",
    specialty: "Psicóloga Clínica",
    bio: "Especialista en terapia cognitivo-conductual y tratamiento de adicciones. Con más de 10 años de experiencia en rehabilitación integral.",
    image: "https://via.placeholder.com/300x400?text=Jennifer",
    icon: <Brain className="w-8 h-8" />,
  },
  {
    id: "psiquiatra",
    name: "Dr. Psiquiatra",
    specialty: "Psiquiatra",
    bio: "Especialista en salud mental y prescripción farmacológica. Acompaña el proceso de recuperación desde una perspectiva médica integral.",
    image: "https://via.placeholder.com/300x400?text=Psiquiatra",
    icon: <Heart className="w-8 h-8" />,
  },
  {
    id: "terapeuta",
    name: "Terapeuta",
    specialty: "Terapeuta Grupal",
    bio: "Facilitador de dinámicas terapéuticas y actividades psicomotrices. Especializado en el Modelo Minnesota y terapia de grupo.",
    image: "https://via.placeholder.com/300x400?text=Terapeuta",
    icon: <Users className="w-8 h-8" />,
  },
  {
    id: "psicomotricista",
    name: "Psicomotricista",
    specialty: "Especialista en Psicomotricidad",
    bio: "Diseña e implementa actividades físicas terapéuticas que restauran funciones neurológicas y favorecen la recuperación integral.",
    image: "https://via.placeholder.com/300x400?text=Psicomotricista",
    icon: <Heart className="w-8 h-8" />,
  },
];

export default function Team() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        {/* Encabezado */}
        <div className="mb-16 text-center">
          <span
            className="inline-block px-4 py-2 rounded-full mb-4 text-sm font-bold uppercase tracking-wider"
            style={{
              backgroundColor: "oklch(0.76 0.14 185 / 0.1)",
              color: "oklch(0.76 0.14 185)",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Nuestro Equipo
          </span>
          <h2
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              color: "oklch(0.18 0.06 250)",
            }}
          >
            PROFESIONALES DEDICADOS
          </h2>
          <p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Un equipo integral y altamente calificado comprometido con tu
            recuperación y bienestar.
          </p>
        </div>

        {/* Grid de Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              style={{
                backgroundColor: "oklch(0.98 0.001 286.375)",
              }}
            >
              {/* Imagen */}
              <div className="relative h-80 overflow-hidden bg-gradient-to-br from-teal-100 to-blue-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/* Overlay en hover */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                >
                  <div
                    className="text-teal-400"
                    style={{
                      fontSize: "3rem",
                    }}
                  >
                    {member.icon}
                  </div>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6">
                <h3
                  className="text-2xl font-bold mb-2"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    color: "oklch(0.18 0.06 250)",
                  }}
                >
                  {member.name}
                </h3>
                <p
                  className="text-sm font-semibold mb-4 uppercase tracking-wider"
                  style={{
                    color: "oklch(0.76 0.14 185)",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {member.specialty}
                </p>
                <p
                  className="text-gray-600 text-sm leading-relaxed"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {member.bio}
                </p>

                {/* Divisor */}
                <div
                  className="mt-4 pt-4 border-t-2"
                  style={{
                    borderColor: "oklch(0.92 0.004 286.32)",
                  }}
                >
                  <p
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{
                      color: "oklch(0.76 0.14 185)",
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    Especialista en Gravita
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p
            className="text-gray-600 mb-6"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            ¿Quieres conocer más sobre nuestro equipo?
          </p>
          <a
            href="#contacto"
            className="inline-block px-8 py-4 rounded-lg font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-lg"
            style={{
              backgroundColor: "oklch(0.76 0.14 185)",
              color: "white",
              fontFamily: "'Barlow Condensed', sans-serif",
            }}
          >
            Contáctanos
          </a>
        </div>
      </div>
    </section>
  );
}
