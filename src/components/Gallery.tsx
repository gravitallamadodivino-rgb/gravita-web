/**
 * Gallery Component - Galería de fotos de Gravita
 * ============================================================
 * Diseño: Modernismo Terapéutico Audaz
 * - Fondo navy/oscuro con acentos teal
 * - Categorías filtradas: Instalaciones, Actividades, Equipo
 * - Grid responsive con animaciones de hover
 * - Tipografía: Barlow Condensed (títulos), Poppins (texto)
 */

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  title: string;
}

const galleryImages: GalleryImage[] = [
  // Instalaciones
  {
    id: "inst-1",
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663499381074/M5iwhPNNoErtEE48H3Hzkw/Capturadepantalla2026-03-22103634_16c723af.png",
    alt: "Exterior de Gravita",
    category: "Instalaciones",
    title: "Fachada Principal",
  },
  {
    id: "inst-2",
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663499381074/M5iwhPNNoErtEE48H3Hzkw/Capturadepantalla2026-03-22103931_4daf10c3.png",
    alt: "Entrada de Gravita",
    category: "Instalaciones",
    title: "Entrada Principal",
  },
  {
    id: "inst-3",
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663499381074/M5iwhPNNoErtEE48H3Hzkw/Capturadepantalla2026-03-22104017_be45e974.png",
    alt: "Baño terapéutico",
    category: "Instalaciones",
    title: "Spa Terapéutico",
  },

  // Actividades Psicomotrices
  {
    id: "act-1",
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663499381074/M5iwhPNNoErtEE48H3Hzkw/gravita_actividades_grupo_exterior_bdf97369.webp",
    alt: "Dinámicas grupales en exterior",
    category: "Actividades",
    title: "Dinámicas en Grupo",
  },
  {
    id: "act-2",
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663499381074/M5iwhPNNoErtEE48H3Hzkw/gravita_actividades_dinamica_individual_7283f5b5.webp",
    alt: "Actividad dinámica individual",
    category: "Actividades",
    title: "Actividades Dinámicas",
  },

  // Doble A
  {
    id: "juntas-1",
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663499381074/M5iwhPNNoErtEE48H3Hzkw/gravita_doble_a_grupo_f128bb8e.webp",
    alt: "Juntas de Doble A en grupo",
    category: "Doble A",
    title: "Juntas de Igualdad",
  },
  {
    id: "juntas-2",
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663499381074/M5iwhPNNoErtEE48H3Hzkw/gravita_terapia_grupal_2486bb14.webp",
    alt: "Sesiones de apoyo grupal",
    category: "Doble A",
    title: "Sesiones de Apoyo",
  },

  // Yoga
  {
    id: "yoga-1",
    src: "https://via.placeholder.com/400x300?text=Yoga",
    alt: "Clase de Yoga",
    category: "Yoga",
    title: "Práctica de Yoga",
  },

  // Estudio Bíblico
  {
    id: "biblia-1",
    src: "https://via.placeholder.com/400x300?text=Estudio+Biblico",
    alt: "Estudio Bíblico",
    category: "Estudio Bíblico",
    title: "Estudio Bíblico",
  },

  // Terapias Recreativas
  {
    id: "recreativas-1",
    src: "https://via.placeholder.com/400x300?text=Terapias+Recreativas",
    alt: "Terapias Recreativas",
    category: "Terapias Recreativas",
    title: "Dinámicas Recreativas",
  },

  // Equipo
  {
    id: "equipo-1",
    src: "https://via.placeholder.com/400x300?text=Equipo+Profesional",
    alt: "Equipo Profesional",
    category: "Equipo",
    title: "Nuestro Equipo",
  },
];

const categories = [
  "Todas",
  "Instalaciones",
  "Actividades",
  "Yoga",
  "Estudio Bíblico",
  "Doble A",
  "Terapias Recreativas",
  "Equipo",
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const filteredImages =
    selectedCategory === "Todas"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const toggleCategory = (category: string) => {
    setSelectedCategory(category);
    setExpandedCategory(
      expandedCategory === category ? null : category
    );
  };

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
            Conoce Nuestras Instalaciones
          </span>
          <h2
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              color: "oklch(0.18 0.06 250)",
            }}
          >
            GALERÍA DE FOTOS
          </h2>
          <p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Explora nuestras instalaciones, actividades terapéuticas y el equipo
            profesional dedicado a tu recuperación.
          </p>
        </div>

        {/* Categorías - Accordion en Mobile, Botones en Desktop */}
        <div className="mb-12">
          {/* Mobile Accordion */}
          <div className="md:hidden space-y-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => toggleCategory(category)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-lg border-2 transition-all"
                style={{
                  borderColor:
                    selectedCategory === category
                      ? "oklch(0.76 0.14 185)"
                      : "oklch(0.92 0.004 286.32)",
                  backgroundColor:
                    selectedCategory === category
                      ? "oklch(0.76 0.14 185 / 0.1)"
                      : "white",
                  color:
                    selectedCategory === category
                      ? "oklch(0.76 0.14 185)"
                      : "oklch(0.235 0.015 65)",
                }}
              >
                <span
                  className="font-semibold"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {category}
                </span>
                {category !== "Todas" && (
                  <ChevronDown
                    size={20}
                    className={`transition-transform ${
                      expandedCategory === category ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className="px-6 py-3 rounded-full font-semibold transition-all duration-300 border-2"
                style={{
                  borderColor:
                    selectedCategory === category
                      ? "oklch(0.76 0.14 185)"
                      : "oklch(0.92 0.004 286.32)",
                  backgroundColor:
                    selectedCategory === category
                      ? "oklch(0.76 0.14 185)"
                      : "white",
                  color:
                    selectedCategory === category
                      ? "white"
                      : "oklch(0.235 0.015 65)",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Galería Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.length > 0 ? (
            filteredImages.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 animate-on-scroll"
              >
                {/* Imagen */}
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />

                {/* Overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"
                >
                  <h3
                    className="text-white text-xl font-bold mb-2"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {image.title}
                  </h3>
                  <p
                    className="text-teal-300 text-sm font-semibold"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {image.category}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p
                className="text-gray-500 text-lg"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Próximamente más fotos de {selectedCategory}...
              </p>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p
            className="text-gray-600 mb-6"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            ¿Quieres conocer más sobre nuestras instalaciones?
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
            AGENDAR VISITA
          </a>
        </div>
      </div>
    </section>
  );
}
