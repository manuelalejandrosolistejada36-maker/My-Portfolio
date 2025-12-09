// src/components/Profile.tsx

import React from 'react';
// Importamos los iconos de Lucide React, que tienes en tus dependencias.
import { Mail, Globe, Linkedin, Github } from 'lucide-react';

/**
 * Componente que muestra el perfil de usuario, incluyendo foto, título,
 * descripción y enlaces de contacto, adaptado del código HTML original.
 */
const Profile: React.FC = () => {
  // Datos de contacto y enlaces a actualizar
  const profileData = {
    name: "Manuel Alejandro", // Reemplaza "Eliana Garcia"
    title: "Software Engineer", // Reemplaza "Graphic Designer, Web designer/developer"
    email: "manuelalejandrosolistejada36@gmail.com", // Reemplaza el correo
    linkedinUrl: "https://www.linkedin.com/in/manuel-alejandro-69064937a/", // URL de LinkedIn (usaremos el icono de Globo como marcador o puedes usar Linkedin)
    githubUrl: "https://github.com/manuelalejandrosolistejada36-maker", // URL de GitHub
    
    // Contenido de la descripción
    aboutText1: "Soy un desarrollador web apasioando por crear experiencias digitales atractivas y funcionales. Con experiencia en HTML, CSS, JavaScript y frameworks modernos como React y Next.js, me especializo en construir interfaces de usuario intuitivas y responsivas.",
    aboutText2: "Enfocandome en el desarrollo front-end, me esfuerzo por mantenerme actualizado con las últimas tendencias y mejores prácticas en diseño web |Tailwind CSS| para ofrecer soluciones innovadoras y efectivas a los desafíos de desarrollo.",
    
    // URL de la imagen de perfil (reemplaza con tu imagen)
    imageUrl: "https://images.unsplash.com/photo-1510706019500-d23a509eecd4?q=80&w=2667&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };

  return (
    <div className="max-w-xl mx-auto p-10 md:p-10 shadow-xl rounded-xl">
      
      {/* */}
      <div className="flex items-center gap-x-3">
        <div className="shrink-0">
          <img 
            className="shrink-0 size-16 rounded-full object-cover" 
            src={profileData.imageUrl} 
            alt="Avatar del perfil"
          />
        </div>

        <div className="grow">
          <h1 className="text-xl font-semibold text-white">
            {profileData.name}
          </h1>
          <p className="text-sm text-white">
            {profileData.title}
          </p>
        </div>
      </div>
      {/* */}

      {/* --- DIVISOR SUTIL --- */}
      <div className="my-6 border-t border-gray-100 dark:border-gray-800"></div>

      {/* */}
      <div className="mt-8">
        <p className="text-sm text-white">
          {profileData.aboutText1}
        </p>

        <p className="mt-3 text-sm text-white">
          {profileData.aboutText2}
        </p>

        <ul className="mt-5 flex flex-col gap-y-3">
          
          {/* Email */}
          <li className="flex items-center gap-x-2.5">
            <Mail className="shrink-0 size-4 text-white" />
            <a 
              className="text-[13px] text-white underline hover:text-gray-800 hover:decoration-2 focus:outline-hidden focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400" 
              href={`mailto:${profileData.email}`}
            >
              @manuelalejandrosolistejada36@gmail.com
            </a>
          </li>

          {/* LinkedIn (Usamos el ícono de Lucide para ser más específico) */}
          <li className="flex items-center gap-x-2.5">
            <Linkedin className="shrink-0 size-4 text-white" />
            <a 
              className="text-[13px] text- underline hover:text-gray-800 hover:decoration-2 focus:outline-hidden focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400" 
              href={profileData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              @manuelalejandro
            </a>
          </li>

          {/* GitHub (Usamos el ícono de Lucide para ser más específico) */}
          <li className="flex items-center gap-x-2.5">
            <Github className="shrink-0 size-4 text-white" />
            <a 
              className="text-[13px] text-underline hover:text-gray-800 hover:decoration-2 focus:outline-hidden focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400" 
              href={profileData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              @manuelalejandrosolistejada36-maker
            </a>
          </li>

        </ul>
      </div>
      {/* */}
      
    </div>
  );
};

export default Profile;