"use client";
import React, { useState } from "react";
import { Timeline } from "./Timeline";
import { motion, AnimatePresence } from "motion/react";

interface ImageGalleryProps {
  images: { src: string; alt: string }[];
  onImageClick: (src: string) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onImageClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mt-6">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors mb-4 group"
      >
        <span className="tracking-tight">{isExpanded ? "Ocultar" : "Ver"} galería</span>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-2 gap-3">
              {images.map((image, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => onImageClick(image.src)}
                  className="group relative aspect-video overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-900/30 cursor-pointer"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface CourseCardProps {
  image: string;
  title: string;
  description: string;
  onImageClick: (src: string) => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ image, title, description, onImageClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left"
      >
        <div className="flex items-center justify-between py-4 border-b border-neutral-200 dark:border-neutral-800">
          <h3 className="text-base font-medium text-neutral-900 dark:text-neutral-100 tracking-tight">
            {title}
          </h3>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <svg
              className="w-5 h-5 text-neutral-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </motion.div>
        </div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="py-4 space-y-4">
              <div
                onClick={() => onImageClick(image)}
                className="relative aspect-video overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-900/30 cursor-pointer group/img"
              >
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/10 transition-colors duration-300" />
              </div>
              <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                {description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const TimelineSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const data = [
    {
      title: "2026",
      content: (
        <div>
          <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 max-w-2xl">
            A inicios de enero estuvimos creando la aplicación "Naroa" una tienda virtual de ropa online, el trabajo incluyó diseño UI/UX, desarrollo frontend con Next.js y Tailwind CSS, integración de pasarelas de pago y optimización para SEO y rendimiento.
          </p>
          <ImageGallery
            images={[
              { src: "/image/naroa.png", alt: "Naroa" },
            ]}
            onImageClick={setSelectedImage}
          />
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 max-w-2xl">
            A inicios y mediados del año desarrollé una página web para la barbería "The Stylo Cave", implementando un diseño moderno, funcional y orientado a la experiencia del usuario. Además, creé mi portafolio personal para presentar mis proyectos y mi creatividad y compromiso como desarrollador web.
          </p>
          <ImageGallery
            images={[
              { src: "/image/the-stylo-cave.png", alt: "The Stylo Cave" },
              { src: "/image/manuel-code-2.png", alt: "Manuel Code portfolio" },
              { src: "/image/huellitasfelices.png", alt: "Huellitas Felices" },
            ]}
            onImageClick={setSelectedImage}
          />
        </div>
      ),
    },
    {
      title: "Cursos Completados",
      content: (
        <div className="space-y-0">
          <CourseCard
            image="/image/javascript.jpg"
            title="JavaScript Completo"
            description="Dominé fundamentos de JS, ES6+, DOM manipulation, programación asíncrona, fetch API y desarrollo de aplicaciones interactivas modernas."
            onImageClick={setSelectedImage}
          />
          <CourseCard
            image="/image/html&css.jpg"
            title="HTML & CSS Avanzado"
            description="Aprendí estructura semántica, Flexbox, Grid, animaciones, responsive design y mejores prácticas para interfaces modernas y accesibles."
            onImageClick={setSelectedImage}
          />
        </div>
      ),
    },
  ];

  return (
    <>
      <section id="features" className="w-full px-4 py-16 md:py-24 md:px-8 flex flex-col items-center justify-center">
        <div className="relative w-full max-w-5xl">
          <Timeline
            data={data}
            title="Mi Trayectoria como Desarrollador."
          />
        </div>
      </section>

      {/* Modal minimalista estilo iOS */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 backdrop-blur-xl p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl max-h-[85vh] cursor-default"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200"
                aria-label="Cerrar"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <img
                src={selectedImage}
                alt="Vista ampliada"
                className="w-full h-full object-contain rounded-3xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
