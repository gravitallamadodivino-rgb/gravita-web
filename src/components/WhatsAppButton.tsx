/* ============================================================
   GRAVITA WhatsApp Floating Button
   Always visible, links to WhatsApp contact
   ============================================================ */

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/524433617392?text=Hola,%20me%20gustaría%20obtener%20información%20sobre%20los%20servicios%20de%20Clínica%20Gravita."
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Contactar por WhatsApp"
      title="Escríbenos por WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}
