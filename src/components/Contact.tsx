/* ============================================================
   GRAVITA Contact Section
   Design: Split layout - dark info side + light form side
   Contact info from Facebook page
   ============================================================ */

import { useEffect, useRef, useState } from "react";
import { Phone, MapPin, Clock, MessageCircle, Send, Facebook, Instagram } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Teléfonos",
    lines: ["443 361 73 92", "443 324 14 02"],
    href: "tel:4433617392",
  },
  {
    icon: MapPin,
    title: "Dirección",
    lines: ["Lucas Balderas #107", "Chapultepec Oriente", "Morelia, Michoacán, C.P. 58260"],
    href: "https://maps.google.com/?q=Lucas+Balderas+107+Chapultepec+Oriente+Morelia+Michoacan",
  },
  {
    icon: Clock,
    title: "Horario",
    lines: ["Siempre disponibles", "Atención 24/7"],
    href: null,
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    lines: ["+52 1 443 361 7392"],
    href: "https://wa.me/524433617392",
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to WhatsApp with form data
    const msg = `Hola, me llamo ${formData.name}. ${formData.message} Mi teléfono es ${formData.phone}.`;
    window.open(`https://wa.me/524433617392?text=${encodeURIComponent(msg)}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      id="contacto"
      ref={sectionRef}
      className="py-20 md:py-28"
      style={{ backgroundColor: "#f8faff" }}
    >
      <div className="container">
        {/* Section header */}
        <div className="animate-on-scroll text-center mb-16">
          <span
            className="text-xs font-body font-semibold tracking-widest uppercase mb-3 block"
            style={{ color: "oklch(0.76 0.14 185)", fontFamily: "'Poppins', sans-serif" }}
          >
            Estamos aquí para ti
          </span>
          <h2
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "oklch(0.18 0.06 250)" }}
          >
            COMIENZA EL
            <span style={{ color: "oklch(0.76 0.14 185)" }}> CAMBIO HOY</span>
          </h2>
          <p
            className="text-gray-500 font-body mt-4 max-w-lg mx-auto"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Da el primer paso hacia la recuperación. Nuestro equipo está disponible
            las 24 horas para orientarte.
          </p>
        </div>

        {/* Split layout */}
        <div className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl">
          {/* Left: Contact Info (dark) */}
          <div
            className="animate-on-scroll p-8 md:p-12"
            style={{ backgroundColor: "oklch(0.18 0.06 250)" }}
          >
            <h3
              className="font-display font-bold text-2xl text-white mb-2"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              INFORMACIÓN DE CONTACTO
            </h3>
            <div
              className="w-12 h-1 mb-8"
              style={{ backgroundColor: "oklch(0.76 0.14 185)" }}
            />

            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1"
                    style={{ backgroundColor: "rgba(0, 201, 177, 0.15)" }}
                  >
                    <item.icon size={18} style={{ color: "oklch(0.76 0.14 185)" }} />
                  </div>
                  <div>
                    <p
                      className="text-white/50 text-xs font-body font-medium uppercase tracking-widest mb-1"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {item.title}
                    </p>
                    {item.lines.map((line) =>
                      item.href ? (
                        <a
                          key={line}
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="block text-white font-body font-medium text-sm hover:text-teal transition-colors"
                          style={{ fontFamily: "'Poppins', sans-serif", color: "white" }}
                        >
                          {line}
                        </a>
                      ) : (
                        <p
                          key={line}
                          className="text-white font-body font-medium text-sm"
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                          {line}
                        </p>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="mt-10 pt-8 border-t border-white/10">
              <p
                className="text-white/50 text-xs font-body uppercase tracking-widest mb-4"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Síguenos
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/Clinicagravita"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors"
                  style={{
                    backgroundColor: "rgba(0, 201, 177, 0.12)",
                    color: "oklch(0.76 0.14 185)",
                    border: "1px solid rgba(0, 201, 177, 0.2)",
                  }}
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="https://www.instagram.com/clinicagravita"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors"
                  style={{
                    backgroundColor: "rgba(0, 201, 177, 0.12)",
                    color: "oklch(0.76 0.14 185)",
                    border: "1px solid rgba(0, 201, 177, 0.2)",
                  }}
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://wa.me/524433617392"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors"
                  style={{
                    backgroundColor: "rgba(0, 201, 177, 0.12)",
                    color: "oklch(0.76 0.14 185)",
                    border: "1px solid rgba(0, 201, 177, 0.2)",
                  }}
                >
                  <MessageCircle size={18} />
                </a>
              </div>
            </div>

            {/* Decorative circles */}
            <div
              className="absolute bottom-0 right-0 w-40 h-40 rounded-full opacity-5 pointer-events-none"
              style={{ backgroundColor: "oklch(0.76 0.14 185)", transform: "translate(30%, 30%)" }}
            />
          </div>

          {/* Right: Contact Form (light) */}
          <div className="animate-on-scroll p-8 md:p-12 bg-white">
            <h3
              className="font-display font-bold text-2xl mb-2"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "oklch(0.18 0.06 250)" }}
            >
              ENVÍANOS UN MENSAJE
            </h3>
            <div
              className="w-12 h-1 mb-8"
              style={{ backgroundColor: "oklch(0.76 0.14 185)" }}
            />

            {submitted ? (
              <div
                className="flex flex-col items-center justify-center h-64 text-center"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: "rgba(0, 201, 177, 0.15)" }}
                >
                  <Send size={28} style={{ color: "oklch(0.76 0.14 185)" }} />
                </div>
                <h4
                  className="font-display font-bold text-xl mb-2"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "oklch(0.18 0.06 250)" }}
                >
                  ¡Mensaje enviado!
                </h4>
                <p
                  className="text-gray-500 text-sm font-body"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Te redirigimos a WhatsApp para continuar la conversación.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    className="block text-xs font-body font-semibold uppercase tracking-widest mb-2"
                    style={{ color: "oklch(0.18 0.06 250)", fontFamily: "'Poppins', sans-serif" }}
                  >
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Tu nombre"
                    className="w-full px-4 py-3 rounded-xl text-sm font-body outline-none transition-all"
                    style={{
                      border: "2px solid #e5e7eb",
                      fontFamily: "'Poppins', sans-serif",
                      color: "oklch(0.18 0.06 250)",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "oklch(0.76 0.14 185)")}
                    onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-xs font-body font-semibold uppercase tracking-widest mb-2"
                      style={{ color: "oklch(0.18 0.06 250)", fontFamily: "'Poppins', sans-serif" }}
                    >
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="tu@correo.com"
                      className="w-full px-4 py-3 rounded-xl text-sm font-body outline-none transition-all"
                      style={{
                        border: "2px solid #e5e7eb",
                        fontFamily: "'Poppins', sans-serif",
                        color: "oklch(0.18 0.06 250)",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "oklch(0.76 0.14 185)")}
                      onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs font-body font-semibold uppercase tracking-widest mb-2"
                      style={{ color: "oklch(0.18 0.06 250)", fontFamily: "'Poppins', sans-serif" }}
                    >
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="443 000 0000"
                      className="w-full px-4 py-3 rounded-xl text-sm font-body outline-none transition-all"
                      style={{
                        border: "2px solid #e5e7eb",
                        fontFamily: "'Poppins', sans-serif",
                        color: "oklch(0.18 0.06 250)",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "oklch(0.76 0.14 185)")}
                      onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-xs font-body font-semibold uppercase tracking-widest mb-2"
                    style={{ color: "oklch(0.18 0.06 250)", fontFamily: "'Poppins', sans-serif" }}
                  >
                    Mensaje *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                    className="w-full px-4 py-3 rounded-xl text-sm font-body outline-none transition-all resize-none"
                    style={{
                      border: "2px solid #e5e7eb",
                      fontFamily: "'Poppins', sans-serif",
                      color: "oklch(0.18 0.06 250)",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "oklch(0.76 0.14 185)")}
                    onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-teal w-full justify-center text-sm"
                >
                  <Send size={16} />
                  Enviar por WhatsApp
                </button>

                <p
                  className="text-center text-xs text-gray-400 font-body"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Tu información es confidencial y nunca será compartida.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
