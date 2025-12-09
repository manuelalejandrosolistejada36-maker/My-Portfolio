"use client";
import React from "react";
import { motion } from "motion/react";
import { LayoutTextFlip } from "./LayoutTextFlip";
import { Mail, Linkedin, Github } from "lucide-react";

export const Hero = () => {
  const profileData = {
    name: "Manuel Alejandro",
    email: "manuelalejandrosolistejada36@gmail.com",
    linkedinUrl: "https://www.linkedin.com/in/manuel-alejandro-69064937a/",
    githubUrl: "https://github.com/manuelalejandrosolistejada36-maker",
    aboutText: "Desarrollador web apasionado por crear experiencias digitales atractivas y funcionales. Especializado en desarrollo front-end con React, Next.js y Tailwind CSS.",
    imageUrl: "https://images.unsplash.com/photo-1510706019500-d23a509eecd4?q=80&w=2667&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen py-20 px-4">
      <div className="max-w-5xl w-full">
        {/* Tarjeta de perfil elegante */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Efecto de resplandor de fondo */}
          <div className="absolute inset-0 bg-linear-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl" />
          
          {/* Tarjeta principal */}
          <div className="relative bg-neutral-900/50 backdrop-blur-xl border border-neutral-800 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              {/* Imagen de perfil */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="shrink-0"
              >
                <img
                  src="/image/prefile.jpeg"
                  alt="Profile"
                  className="w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover ring-4 ring-neutral-800 shadow-xl"
                />
              </motion.div>

              {/* Información de perfil */}
              <div className="flex-1 text-center md:text-left">
                {/* Manuel.Code con animación */}
                <div className="mb-4">
                  <LayoutTextFlip
                    text="Manuel.Code "
                    words={["Node js", "React", "Tailwind CSS", "Next js", "HTML & CSS"]}
                  />
                </div>
                
                <p className="text-neutral-400 text-base md:text-lg mb-4">
                  Software Engineer & Frontend Developer
                </p>
                
                <p className="text-neutral-400 text-sm mb-6 max-w-xl">
                  {profileData.aboutText}
                </p>

                {/* Enlaces sociales */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={`mailto:${profileData.email}`}
                    className="flex items-center gap-2 px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl transition-all duration-200 group"
                  >
                    <Mail className="w-5 h-5 group-hover:text-blue-400 transition-colors" />
                    <span className="text-sm">Enviar Email</span>
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={profileData.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl transition-all duration-200 group"
                  >
                    <Linkedin className="w-5 h-5 group-hover:text-blue-500 transition-colors" />
                    <span className="text-sm">LinkedIn</span>
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={profileData.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl transition-all duration-200 group"
                  >
                    <Github className="w-5 h-5 group-hover:text-purple-400 transition-colors" />
                    <span className="text-sm">GitHub</span>
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
