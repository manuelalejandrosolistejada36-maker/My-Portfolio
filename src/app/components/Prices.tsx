"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";

export function Prices() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<{
    name: string;
    price: string;
  } | null>(null);

  const handleContractClick = (planName: string, price: string) => {
    setSelectedPlan({ name: planName, price });
    setShowPaymentModal(true);
  };

  const handleSubmitPayment = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para procesar el pago
    alert("Pago procesado exitosamente");
    setShowPaymentModal(false);
  };

  return (
    <section id="pricing" className="max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* Title */}
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-white">
          Precios
        </h2>
        <p className="mt-1 text-gray-400">
          Planes que se adaptan a tus necesidades y presupuesto.
        </p>
      </div>
      {/* End Title */}

      {/* Grid */}
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:items-center">
        {/* Card - Plan Básico */}
        <div className="flex flex-col border border-neutral-800 hover:border-blue-600 text-center rounded-xl p-8 bg-neutral-900/50 transition-all duration-300 cursor-pointer transform hover:scale-105">
          <h4 className="font-medium text-lg text-white">Plan Básico</h4>
          <span className="mt-7 font-bold text-5xl text-white">
            <span className="font-bold text-2xl me-0">S/</span>
            {isAnnual ? "3,780" : "350"}
          </span>
          <p className="mt-2 text-sm text-gray-400">
            {isAnnual ? "Pago anual" : "Pago único"}
          </p>
          <p className="mt-3 text-sm text-gray-300">
            Ideal para emprendedores que están empezando.
          </p>

          <ul className="mt-7 space-y-2.5 text-sm">
            <li className="flex gap-x-2">
              <svg
                className="shrink-0 mt-0.5 size-4 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-gray-300">1 página principal</span>
            </li>

            <li className="flex gap-x-2">
              <svg
                className="shrink-0 mt-0.5 size-4 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-gray-300">Diseño responsive</span>
            </li>

            <li className="flex gap-x-2">
              <svg
                className="shrink-0 mt-0.5 size-4 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-gray-300">Integración redes sociales</span>
            </li>

            <li className="flex gap-x-2">
              <svg
                className="shrink-0 mt-0.5 size-4 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-gray-300">1 modificación post-entrega</span>
            </li>

            <li className="flex gap-x-2">
              <svg
                className="shrink-0 mt-0.5 size-4 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-gray-300">Asesoría hosting y dominio</span>
            </li>
          </ul>

          <a
            className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-neutral-700 bg-transparent text-gray-300 hover:bg-neutral-800 focus:outline-hidden focus:bg-neutral-800 cursor-pointer"
            onClick={() =>
              handleContractClick(
                "Plan Básico",
                isAnnual ? "3,780" : "350"
              )
            }
          >
            Contratar
          </a>
        </div>
        {/* End Card */}

        {/* Card - Plan Premium */}
        <div className="flex flex-col border-2 hover:border-blue-400 text-center shadow-xl rounded-xl p-8 bg-neutral-900/50 transition-all duration-300 cursor-pointer transform hover:scale-105">
          <p className="mb-3">
            <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-xs uppercase font-semibold bg-blue-600 text-white">
              Más popular
            </span>
          </p>
          <h4 className="font-medium text-lg text-white">Plan Premium</h4>
          <span className="mt-5 font-bold text-5xl text-white">
            <span className="font-bold text-2xl me-0">S/</span>
            {isAnnual ? "7,020" : "650"}
          </span>
          <p className="mt-2 text-sm text-gray-400">
            {isAnnual ? "Pago anual" : "Pago único"}
          </p>
          <p className="mt-3 text-sm text-gray-300">
            Para negocios que buscan una presencia sólida y completa.
          </p>

          <ul className="mt-7 space-y-2.5 text-sm">
            <li className="flex gap-x-2">
              <svg
                className="shrink-0 mt-0.5 size-4 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-gray-300">Hasta 4 páginas internas</span>
            </li>

            <li className="flex gap-x-2">
              <svg
                className="shrink-0 mt-0.5 size-4 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-gray-300">Diseño moderno responsive</span>
            </li>

            <li className="flex gap-x-2">
              <svg
                className="shrink-0 mt-0.5 size-4 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-gray-300">Galería o catálogo</span>
            </li>

            <li className="flex gap-x-2">
              <svg
                className="shrink-0 mt-0.5 size-4 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-gray-300">SEO básico</span>
            </li>

            <li className="flex gap-x-2">
              <svg
                className="shrink-0 mt-0.5 size-4 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-gray-300">Chat flotante</span>
            </li>

            <li className="flex gap-x-2">
              <svg
                className="shrink-0 mt-0.5 size-4 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-gray-300">3 modificaciones post-entrega</span>
            </li>
          </ul>

          <a
            className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 cursor-pointer"
            onClick={() =>
              handleContractClick(
                "Plan Premium",
                isAnnual ? "7,020" : "650"
              )
            }
          >
            Contratar
          </a>
        </div>
        {/* End Card */}

        {/* Card - Plan VIP */}
        <div className="flex flex-col border border-neutral-800 hover:border-blue-600 text-center rounded-xl p-8 bg-neutral-900/50 transition-all duration-300 cursor-pointer transform hover:scale-105">
          <h4 className="font-medium text-lg text-white">Plan VIP</h4>
          <span className="mt-5 font-bold text-5xl text-white">
            <span className="font-bold text-2xl me-0">S/</span>
            {isAnnual ? "10,800" : "1,000"}
          </span>
          <p className="mt-2 text-sm text-gray-400">
            {isAnnual ? "Pago anual" : "Pago único"}
          </p>
          <p className="mt-3 text-sm text-gray-300">
            La opción más completa para marcas que quieren algo top.
          </p>

          <ul className="mt-7 space-y-2.5 text-sm">
            <li className="flex gap-x-2">
              <svg
                className="shrink-0 mt-0.5 size-4 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-gray-300">Hasta 8 páginas o más</span>
            </li>

            <li className="flex gap-x-2">
              <svg
                className="shrink-0 mt-0.5 size-4 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-gray-300">Diseño premium con animaciones</span>
            </li>

            <li className="flex gap-x-2">
              <svg
                className="shrink-0 mt-0.5 size-4 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-gray-300">Tienda online (20 productos)</span>
            </li>

            <li className="flex gap-x-2">
              <svg
                className="shrink-0 mt-0.5 size-4 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-gray-300">SEO mejorado y optimización</span>
            </li>

            <li className="flex gap-x-2">
              <svg
                className="shrink-0 mt-0.5 size-4 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-gray-300">Integración de pagos</span>
            </li>

            <li className="flex gap-x-2">
              <svg
                className="shrink-0 mt-0.5 size-4 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-gray-300">Chat en vivo + WhatsApp</span>
            </li>

            <li className="flex gap-x-2">
              <svg
                className="shrink-0 mt-0.5 size-4 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-gray-300">5 modificaciones post-entrega</span>
            </li>
          </ul>

          <a
            className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-neutral-700 bg-transparent text-gray-300 hover:bg-neutral-800 focus:outline-hidden focus:bg-neutral-800 cursor-pointer"
            onClick={() =>
              handleContractClick("Plan VIP", isAnnual ? "10,800" : "1,000")
            }
          >
            Contratar
          </a>
        </div>
        {/* End Card */}
      </div>
      {/* End Grid */}

      {/* Modal de Pago */}
      <AnimatePresence>
        {showPaymentModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
            onClick={() => setShowPaymentModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-md bg-neutral-900 border border-neutral-800 rounded-2xl p-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botón de cerrar */}
              <button
                onClick={() => setShowPaymentModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Título */}
              <h3 className="text-2xl font-bold text-white mb-2">
                Confirmar Pago
              </h3>
              <p className="text-gray-400 mb-6">
                {selectedPlan?.name} - S/ {selectedPlan?.price}
              </p>

              {/* Formulario */}
              <form onSubmit={handleSubmitPayment} className="space-y-4">
                {/* Nombre en tarjeta */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Nombre en la tarjeta
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-blue-600 transition-colors"
                    placeholder="Juan Pérez"
                  />
                </div>

                {/* Número de tarjeta */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Número de tarjeta
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={19}
                    className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-blue-600 transition-colors"
                    placeholder="1234-5678-9012-3456"
                  />
                </div>

                {/* Fecha de expiración y CVV */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Fecha de expiración
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={5}
                      className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-blue-600 transition-colors"
                      placeholder="MM/AA"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      CVV
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={4}
                      className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-blue-600 transition-colors"
                      placeholder="123"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-blue-600 transition-colors"
                    placeholder="correo@ejemplo.com"
                  />
                </div>

                {/* Botones */}
                <div className="flex gap-3 mt-6">
                  <button
                    type="button"
                    onClick={() => setShowPaymentModal(false)}
                    className="flex-1 py-3 px-4 text-sm font-medium rounded-lg border border-neutral-700 bg-transparent text-gray-300 hover:bg-neutral-800 transition-colors"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3 px-4 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                  >
                    Pagar S/ {selectedPlan?.price}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Prices;
