# Ideas de Diseño - Landing Page Clínica Gravita

<response>
<idea>
**Design Movement:** Brutalismo Médico Humanista — fusión de la solidez clínica con calidez emocional.

**Core Principles:**
1. Contraste dramático entre azul marino profundo y turquesa vibrante, reflejando la dualidad entre la seriedad del tratamiento y la esperanza de la recuperación.
2. Tipografía asimétrica y jerárquica: títulos en Barlow Condensed Bold en mayúsculas, cuerpo en Nunito para calidez.
3. Formas orgánicas circulares que enmarcan imágenes, inspiradas en el logo de Gravita.
4. Espaciado generoso con secciones que "respiran" para transmitir calma y confianza.

**Color Philosophy:** El azul marino (#0d1b3e) representa estabilidad y profesionalismo médico. El turquesa (#00c9b1) evoca curación, agua y renovación. Juntos crean una tensión visual que habla de transformación.

**Layout Paradigm:** Diseño diagonal con secciones que se inclinan ligeramente (clip-path), creando dinamismo sin caos. La navegación es lateral en desktop, con el contenido fluyendo en columnas asimétricas (60/40).

**Signature Elements:**
1. Franjas diagonales turquesa que dividen secciones, como el diseño de las publicaciones de Facebook.
2. Imágenes enmarcadas en círculos con borde turquesa, replicando el estilo visual de las fotos de la clínica.
3. Tarjetas de servicio con número grande en turquesa como decoración de fondo.

**Interaction Philosophy:** Transiciones suaves al hacer scroll (fade-in desde abajo). Hover en tarjetas levanta ligeramente con sombra. Botones CTA con efecto de onda al hacer clic.

**Animation:** Entrada de elementos con framer-motion: fade + translateY(20px) → translateY(0). Stagger de 0.1s entre tarjetas. Header con blur al hacer scroll.

**Typography System:**
- Display: Barlow Condensed 700 (títulos hero)
- Headings: Montserrat 700 (secciones)
- Body: Nunito 400/600 (texto descriptivo)
- Accent: Montserrat 800 (números, CTAs)
</idea>
<probability>0.08</probability>
</response>

<response>
<idea>
**Design Movement:** Neo-Clínico Esperanzador — minimalismo médico con toques de calidez latinoamericana.

**Core Principles:**
1. Fondo blanco roto (#f8f9fa) con bloques de color azul marino para crear contraste limpio.
2. Grid asimétrico de 3 columnas en servicios con tarjetas que mezclan texto e imagen.
3. Iconografía de línea delgada en turquesa para los servicios.
4. Fotografías con overlay de color para unificar el estilo visual.

**Color Philosophy:** Blanco dominante para transmitir higiene y claridad mental. Azul marino para autoridad médica. Turquesa como color de vida y esperanza. Amarillo dorado para llamadas a la acción urgentes.

**Layout Paradigm:** Diseño de revista médica: columnas de texto con imágenes flotantes, pull-quotes en turquesa, y una barra lateral de contacto fija en desktop.

**Signature Elements:**
1. Pull-quotes en turquesa con comillas grandes decorativas.
2. Barra de progreso o estadísticas animadas (porcentaje de éxito, años de experiencia).
3. Timeline vertical para mostrar el proceso de recuperación.

**Interaction Philosophy:** Scroll suave con parallax sutil en el hero. Contadores animados para estadísticas. Formulario con validación en tiempo real.

**Animation:** Parallax en hero (0.3x velocidad). Contadores que incrementan al entrar en viewport. Cards con hover scale(1.02).

**Typography System:**
- Display: Playfair Display 700 Italic (hero)
- Headings: DM Sans 700
- Body: DM Sans 400
- Accent: DM Mono (números y datos)
</idea>
<probability>0.07</probability>
</response>

<response>
<idea>
**Design Movement:** Modernismo Terapéutico Audaz — diseño que comunica transformación y fuerza.

**Core Principles:**
1. Hero de pantalla completa con imagen de fondo oscura y tipografía masiva en blanco.
2. Secciones alternadas: oscura (azul marino) y clara (blanco/gris muy claro), creando ritmo visual.
3. Tarjetas de servicio con gradiente azul→turquesa en hover, sin bordes, solo sombras.
4. Formulario de contacto dividido: mitad oscura con información, mitad clara con el form.

**Color Philosophy:** Azul marino profundo (#0d1b3e) como base dominante, turquesa (#00c9b1) como acento de acción, blanco puro para contraste máximo. El color comunica: "somos serios, pero te traemos luz".

**Layout Paradigm:** Diseño de pantalla completa (full-bleed) con secciones que ocupan el 100% del ancho. Contenido centrado con max-width de 1200px. Hero con texto alineado a la izquierda sobre imagen oscurecida.

**Signature Elements:**
1. Línea decorativa turquesa vertical en el lado izquierdo del hero text.
2. Números grandes semitransparentes como decoración de fondo en secciones de servicios.
3. Gradiente diagonal azul→turquesa en el footer y CTA sections.

**Interaction Philosophy:** Scroll-triggered animations con Framer Motion. Hover en servicios revela descripción con slide-up. Botón WhatsApp flotante siempre visible.

**Animation:** Hero text entra con stagger (título → subtítulo → botones). Servicios con fade-in desde abajo al hacer scroll. Testimonios con slide horizontal.

**Typography System:**
- Display: Barlow Condensed 800 (hero, muy grande)
- Headings: Poppins 700
- Body: Poppins 400
- Labels: Poppins 500 uppercase con letter-spacing
</idea>
<probability>0.09</probability>
</response>

## Decisión

Se elige el **enfoque 3: Modernismo Terapéutico Audaz** por su capacidad de comunicar transformación y fuerza, con un hero impactante que captura la atención inmediatamente y secciones alternadas que crean un ritmo visual dinámico. Este enfoque replica mejor el estilo visual de la página de Facebook de Gravita: fondo oscuro azul marino, acentos turquesa vibrantes, y tipografía bold que transmite confianza y profesionalismo.
