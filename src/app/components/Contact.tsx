// src/components/Contact.tsx
'use client'; 

import React, { useState, FormEvent } from 'react';

// 1. Datos Fijos (¡Lo que se elimina de page.tsx!)
const RECIPIENT_EMAIL = 'manuelalejandrosolistejada36@gmail.com';
const TECH_OPTIONS = [
  'Node.js',
  'React',
  'Next.js',
  'TypeScript',
  'CSS v4 (Simulado)',
  'TypeScrip (Repetido, ajustado para ser claro)'
];

/**
 * @interface FormData
 * Define la estructura de los datos del formulario.
 */
interface FormData {
  email: string;
  projectDescription: string;
  technologies: string[];
}

// Ya no acepta props, es autocontenido
const Contact: React.FC = () => { 
  const [formData, setFormData] = useState<FormData>({
    email: '',
    projectDescription: '',
    technologies: [],
  });
  
  // Maneja el cambio en campos de texto/área
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Maneja el cambio en los checkboxes de tecnologías
  const handleTechChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      if (checked) {
        return { ...prev, technologies: [...prev.technologies, value] };
      } else {
        return {
          ...prev,
          technologies: prev.technologies.filter((tech) => tech !== value),
        };
      }
    });
  };

  // Maneja el envío del formulario
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // 1. Crear el cuerpo del correo (body)
    const techList = formData.technologies.join(', ');
    const subject = encodeURIComponent(`Nuevo Proyecto de Colaboración de: ${formData.email}`);
    
    // Texto que irá en el cuerpo del correo
    const body = encodeURIComponent(
      `Correo de Contacto: ${formData.email}\n\n` +
      `Descripción del Proyecto:\n${formData.projectDescription}\n\n` +
      `Tecnologías Interesadas:\n${techList}`
    );

    // 2. Construir el link mailto usando la constante RECIPIENT_EMAIL
    const mailtoLink = `mailto:${RECIPIENT_EMAIL}?subject=${subject}&body=${body}`;

    // 3. Abrir el cliente de correo
    window.location.href = mailtoLink;
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-xl border border-gray-200">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-2">
        Rellena el formulario.
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Campo de Correo */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-black">
            Tu Correo Electrónico
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black"
            placeholder="ejemplo@correo.com"
          />
        </div>

        {/* Campo de Descripción del Proyecto */}
        <div>
          <label htmlFor="projectDescription" className="block text-sm font-medium text-black">
            Descripción del Proyecto (lo que más o menos deseas)
          </label>
          <textarea
            name="projectDescription"
            id="projectDescription"
            rows={5}
            required
            value={formData.projectDescription}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black"
            placeholder="Necesito que crees una aplicacion que..."
          />
        </div>

        {/* Botón de Envío */}
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contact;