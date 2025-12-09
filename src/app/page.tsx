"use client";
import Testimonials from "../app/components/Testimonials";
import React from "react";
import { HoverEffect } from "../app/components/Projects";
import { NavbarComponent } from "../app/components/Navbar";
import { Hero } from "../app/components/Hero";
import { TimelineSection } from "../app/components/TimelineSection";
import { projects } from "../lib/projects";

const textderechos = "© 2025 Manuel.Code. Todos los derechos reservados.";

// --- Componente de Página Raíz (Exportación por defecto) ---

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-black text-white">
      {/* 1. Navbar */}
      {/* 1. Navbar */}
      <NavbarComponent />

      {/* 2. Sección Hero/Principal con Perfil */}
      <Hero />

      {/* 3. Sección de la Línea de Tiempo (Sobre mí) */}
      <TimelineSection />
      {/* Sección de Proyectos */}
      <section
        id="projects"
        className="min-h-screen pt-20 flex items-center justify-center bg-neutral-950"
      >
        <div className="max-w-5xl mx-auto px-8 w-full">
          <HoverEffect items={projects} />
        </div>
      </section>

      {/* Sección de Testimonios */}
      <Testimonials />

      {/* Footer */}
      <footer className="w-full py-6 bg-black text-neutral-400 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm">
          {textderechos}
        </div>
      </footer>
    </div>
  );
}
