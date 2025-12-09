"use client";
import React, { useState } from "react";
import { Timeline } from "./Timeline";
import { motion, AnimatePresence } from "motion/react";

export const TimelineSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const data = [
    {
      title: "2025",
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
              alt="The Stylo Cave website"
              width={500}
              height={500}
              onClick={() => setSelectedImage("/image/the-stylo-cave.png")}
              className="h-20 w-full rounded-lg object-cover cursor-pointer hover:scale-105 transition-transform duration-300 shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/image/manuel-code-2.png"
              alt="Manuel Code portfolio"
              width={500}
              height={500}
              onClick={() => setSelectedImage("/image/manuel-code-2.png")}
              className="h-20 w-full rounded-lg object-cover cursor-pointer hover:scale-105 transition-transform duration-300 shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/image/the-stylo-cave2.png"
              alt="The Stylo Cave detail"
              width={500}
              height={500}
              onClick={() => setSelectedImage("/image/the-stylo-cave2.png")}
              className="h-20 w-full rounded-lg object-cover cursor-pointer hover:scale-105 transition-transform duration-300 shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/cards.png"
              alt="Project cards"
              width={500}
              height={500}
              onClick={() => setSelectedImage("https://assets.aceternity.com/cards.png")}
              className="h-20 w-full rounded-lg object-cover cursor-pointer hover:scale-105 transition-transform duration-300 shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset] md:h-44 lg:h-60"
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
              alt="JavaScript course"
              width={500}
              height={500}
              onClick={() => setSelectedImage("/image/javascript.jpg")}
              className="h-20 w-full rounded-lg object-cover cursor-pointer hover:scale-105 transition-transform duration-300 shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/image/html&css.jpg"
              alt="HTML & CSS course"
              width={500}
              height={500}
              onClick={() => setSelectedImage("/image/html&css.jpg")}
              className="h-20 w-full rounded-lg object-cover cursor-pointer hover:scale-105 transition-transform duration-300 shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      <section id="features" className="w-full font-bold px-0 py-15 md:px-35 flex flex-col items-center justify-center">
        <div className="relative w-full overflow-clip">
          <Timeline
            data={data}
            title="Mi Trayectoria como Desarrollador."
          />
        </div>
      </section>

      {/* Modal para imagen ampliada */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-7xl max-h-[90vh] cursor-default"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors text-2xl font-bold z-10"
                aria-label="Cerrar"
              >
                ✕
              </button>
              <img
                src={selectedImage}
                alt="Imagen ampliada"
                className="w-full h-full object-contain rounded-lg shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
