/* ============================================================
   GRAVITA Landing Page - Home
   Design: Modernismo Terapéutico Audaz
   Sections: Navbar, Hero, About, Services, Benefits, Testimonials, Contact, Footer
   ============================================================ */

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
// Gallery eliminada temporalmente para evitar errores de carga
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Benefits />
      {/* Sección de Gallery comentada para que la página cargue hoy mismo */}
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
