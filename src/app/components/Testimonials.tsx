"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alejandro Tejada",
    role: "The Stylo Cave",
    content: "Trabajar con Manuel fue una experiencia excepcional. Su nivel de atención y detalle en cada momento dentro de la pagina, su nivel de perfeccion fasino a la empresa."
  },
  {
    id: 2,
    name: "Max Cartagena",
    role: "Huellitas Felices",
    content: "La atención al detalle y el compromiso con la excelencia son incomparables. su compromiso y su puntualidad a destacar, obteniendo el proyecto en menos tiempo del tiempo acordado."
  },
  {
    id: 3,
    name: "Roberto Silva",
    role: "Founder, StartupHub",
    content: "Una habilidad única para entender las necesidades del cliente y traducirlas en código. Su expertise nos ayudó a lanzar nuestro producto antes de lo esperado."
  },
  {
    id: 4,
    name: "María Fernández",
    role: "CTO, CloudTech Systems",
    content: "Profesionalismo de primer nivel. No solo cumplió con los requisitos técnicos, sino que aportó ideas innovadoras que mejoraron el producto final."
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const paginate = (newDirection: number) => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) return testimonials.length - 1;
      if (nextIndex >= testimonials.length) return 0;
      return nextIndex;
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 6000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section id="testimonials" className="py-32 px-4 bg-black">
      <div className="max-w-4xl mx-auto">
        {/* Header minimalista */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-light text-white mb-3 tracking-tight">
            Testimonios
          </h2>
          <div className="w-12 h-px bg-neutral-700 mx-auto mt-6" />
        </motion.div>

        {/* Carrusel minimalista */}
        <div className="relative min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1]
              }}
              className="text-center"
            >
              {/* Quote */}
              <p className="text-neutral-300 text-xl md:text-2xl leading-relaxed mb-12 font-light max-w-3xl mx-auto">
                "{testimonials[currentIndex].content}"
              </p>

              {/* Author */}
              <div className="space-y-1">
                <h4 className="text-white font-medium text-lg">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-neutral-500 text-sm">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation minimalista */}
        <div className="flex justify-center items-center gap-8 mt-16">
          {/* Botón anterior */}
          <button
            onClick={() => paginate(-1)}
            className="text-neutral-500 hover:text-white transition-colors text-sm tracking-wider"
            aria-label="Anterior testimonio"
          >
            ←
          </button>

          {/* Dots indicator minimalista */}
          <div className="flex gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 h-1 bg-white"
                    : "w-1 h-1 bg-neutral-700 hover:bg-neutral-500"
                }`}
                aria-label={`Ir al testimonio ${index + 1}`}
              />
            ))}
          </div>

          {/* Botón siguiente */}
          <button
            onClick={() => paginate(1)}
            className="text-neutral-500 hover:text-white transition-colors text-sm tracking-wider"
            aria-label="Siguiente testimonio"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;


