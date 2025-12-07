"use client";
import Contact from "../app/components/Contact";
import { Metadata } from 'next';

import React, { useState } from "react";
import { defaultValueTypes, motion } from "motion/react";



// NOTA IMPORTANTE: Estas importaciones asumen que tienes los siguientes componentes definidos
// en las rutas indicadas en tu proyecto.
import { LayoutTextFlip } from "../app/components/LayoutTextFlip";
import { Timeline } from "../app/components/Timeline"; 
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "../app/components/Resizable-navbar";

import { HoverEffect } from "../app/components/Projects";

const textderechos = "© 2025 Manuel.Code. Todos los derechos reservados.";


const BotonWhatsApp = () => {
  // Define la URL del enlace con el número
  const whatsappUrl = 'https://wa.me/51941554701';
};

// Lista de proyectos (disponible a nivel de módulo)
export const projects = [
  {
    title: "The Stylo Cave",
    description:
      "La barbería The Stylo Cave es un espacio dedicado al cuidado y estilo masculino, ofreciendo servicios de corte de cabello, afeitado tradicional y tratamientos de belleza en un ambiente moderno y acogedor.",
    link: "https://thestylocave.vercel.app/",
    image: "/image/the-stylo-cave.png",
  },
  {
    title: "Proximo Proyecto",
    description:
      "Estamos trabajando en un nuevo proyecto emocionante. ¡Mantente atento para más detalles!",
    link: "",
    image: "https://via.placeholder.com/800x480?text=Netflix",
  },
  {
    title: "Proximo Proyecto",
    description:
      "Estamos trabajando en un nuevo proyecto emocionante. ¡Mantente atento para más detalles!",
    link: "",
    image: "https://via.placeholder.com/800x480?text=Google",
  },
  {
   title: "Proximo Proyecto",
    description:
      "Estamos trabajando en un nuevo proyecto emocionante. ¡Mantente atento para más detalles!",
    link: "",
    image: "https://via.placeholder.com/800x480?text=Meta",
  },
  {
    title: "Proximo Proyecto",
    description:
      "Estamos trabajando en un nuevo proyecto emocionante. ¡Mantente atento para más detalles!",
    link: "",
    image: "https://via.placeholder.com/800x480?text=Amazon",
  },
  {
    title: "Proximo Proyecto",
    description:
      "Estamos trabajando en un nuevo proyecto emocionante. ¡Mantente atento para más detalles!",
    link: "",
    image: "https://via.placeholder.com/800x480?text=Microsoft",
  },
];

// Componente de demostración para el efecto hover (exportable)
export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8 w-full">
      <HoverEffect items={projects} />
    </div>
  );
}
// --- 1. Componente de Línea de Tiempo (Experiencia / Trayectoria) ---
function TimelineComponent() {
  const data = [
    {
      title: "Año 2025",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-400 md:text-sm dark:text-neutral-200">
            A comienzos y a mediados comence el desarrolo de una pagina web basado en una Barberia "The Stylo Cave" dandole funcionalidad y un diseño moderno y atractivo, de igual manera pude crear mi portafolio personal para mostrar mis proyectos y habilidades como desarrollador web.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-400 md:text-sm dark:text-neutral-200">
            A base de los cursos adquiridos en Udemy, pude desarrollar proyectos que me permitieron aplicar mis conocimientos y habilidades en la creación de sitios web atractivos y funcionales.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/image/the-stylo-cave.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/image/manuel-code.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/image/the-stylo-cave2.png"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Mis Cursos Completados",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-400 md:text-sm dark:text-neutral-200">
            Mis cursos completados en Udemy incluyen:
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-neutral-400 md:text-sm dark:text-neutral-200">
              ✅ La creación y diseño de páginas web modernas con HTML y CSS
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-400 md:text-sm dark:text-neutral-200">
              ✅ El funcionamiento de JavaScript para agregar interactividad
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-400 md:text-sm dark:text-neutral-200">
              ✅ Introducción a Node.js y desarrollo de aplicaciones con React y Next.js
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-400 md:text-sm dark:text-neutral-200">
              ✅ La personalizacion de interfaces utilizando Tailwind CSS
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-400 md:text-sm dark:text-neutral-200">
              ✅ Despliegue y optimización de aplicaciones web para un rendimiento óptimo
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/image/javascript.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/image/html&css.jpg"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    // Sección con ID para el enlace de la Navbar
    <section id="features" className="w-full px-4 py-20 md:px-8 flex flex-col items-center justify-center">
      <div className="relative w-full overflow-clip">
        <Timeline 
          data={data} 
          title="Mi Trayectoria como Desarrollador."
          description="He dedicado un buen tiempo a formarme como desarrollador a través de la plataforma Udemy, donde adquirí una base sólida en la estructura de la programación utilizando HTML y CSS. Luego avancé hacia JavaScript, aprendiendo a darle funcionalidad e interactividad a las páginas web.
          Después di el siguiente paso hacia herramientas más completas del ecosistema JavaScript, trabajando con Node.js y desarrollando aplicaciones con React y su framework Next.js, aplicando Tailwind CSS para lograr interfaces modernas, rápidas y visualmente atractivas."
        />
      </div>
    </section>
  );
}

// --- 2. Componente de la Barra de Navegación ---
function NavbarComponent(): React.ReactElement {
  const navItems = [
    { name: "Mi trayectoria", link: "#features" },
    { name: "Proyectos", link: "#projects" },
    { name: "Contacto", link: "#contact" },
   ] ;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    // Navbar con fondo negro semitransparente
    <Navbar className="sticky top-0 z-50 bg-black backdrop-blur-sm border-b border-neutral-800">
      {/* Navegación de Escritorio */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <div className="flex items-center gap-4">
          <NavbarButton
            as="a"
            href="https://wa.me/51941554701"
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            className="hover:bg-gray-200"
          >
            Contáctame
          </NavbarButton>
        </div>
      </NavBody>  
      {/* Navegación Móvil */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        {/* Menú móvil */}
        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative" 
            >
              <span className="block">{item.name}</span>
            </a>
          ))}
          <div className="flex w-full flex-col gap-4">
            <NavbarButton
              as="a"
              href={`https://wa.me/51941554701`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              variant="primary"
              className="w-full text-black!"
            >
              Contáctame
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}

// --- 3. Contenido Principal (Hero con Animación de Texto) ---
const MainContent = () => {
  return (
    <section className="flex flex-col items-center justify-center h-[calc(100vh-80px)] pt-20">
      <motion.div className="relative mx-4 my-4 flex flex-col items-center justify-center gap-4 text-center sm:mx-0 sm:mb-0 sm:flex-row">
        <LayoutTextFlip
          text="Manuel.Code "
          words={["Node js", "React", "Tailwind CSS", "Next js", "HTML & CSS"]}
        />
      </motion.div>
      {/* Texto secundario gris claro */}
      <p className="mt-4 text-center text-base max-w-lg text-neutral-400 px-4">
        Desarrollando y creando experiencias digitales innovadoras y funcionales.
      </p>
    </section>
  );
};


// --- 4. Componente de Página Raíz (Exportación por defecto) ---

export default function Home() {
  return (
    // APLICACIÓN DEL TEMA OSCURO FORZADO: Fondo negro y texto blanco por defecto
    <div className="relative min-h-screen w-full bg-black text-white">
      
      {/* 1. Navbar */}
      <NavbarComponent />
      
      {/* 2. Sección Hero/Principal */}
      <MainContent />
      
      {/* 3. Sección de la Línea de Tiempo (Sobre mí) */}
      <TimelineComponent />
      
      {/* Sección de Proyectos (Placeholder) */}
      <section id="projects" className="min-h-screen pt-20 flex items-center justify-center bg-neutral-950">
        <div className="max-w-5xl mx-auto px-8 w-full">
          <HoverEffect items={projects} />
        </div>
      </section>

      {/* Sección de Contacto */}
      <section id="contact" className="min-h-screen pt-20 flex items-center justify-center bg-black">
        <div className="max-w-5xl mx-auto px-8 w-full">
          <h1 className="text-4xl font-extrabold text-center mb-10 text-white">
            ¿Cual es tu proximo proyecto?
          </h1>
          <Contact />
          <p className="text-center mt-8 text-sm text-neutral-400">
            Al presionar "Enviar", se abrirá tu cliente de correo predeterminado (como Gmail) con el mensaje preescrito.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 bg-black text-neutral-400 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm">
          {textderechos}
        </div>
      </footer>
    </div>
  );
}