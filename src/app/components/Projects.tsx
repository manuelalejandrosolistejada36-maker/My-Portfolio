import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { Countdown } from "./Countdown";
import { useState } from "react";
import { X } from "lucide-react";
import React from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    image?: string;
    tags?: {
      frontend: string[];
      backend: string[];
    };
    countdown?: boolean;
    launchDate?: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [showCountdownModal, setShowCountdownModal] = useState(false);
  const [modalLaunchDate, setModalLaunchDate] = useState<string>("");

  const handleClick = (e: React.MouseEvent, item: any) => {
    if (item.countdown && item.launchDate) {
      const now = new Date().getTime();
      const target = new Date(item.launchDate).getTime();
      
      if (now < target) {
        e.preventDefault();
        setModalLaunchDate(item.launchDate);
        setShowCountdownModal(true);
      }
    }
  };

  return (
    <>
      <div
        className={cn(
          "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
          className
        )}
      >
        {items.map((item, idx) => (
          <a
            href={item?.link}
            key={item?.link + idx}
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={(e) => handleClick(e, item)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-neutral-200 block  rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card>
              {item.image && (
                <div className="mb-4 overflow-hidden rounded-xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-44 object-cover block"
                  />
                </div>
              )}
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
              {item.countdown && item.launchDate && (
                <div className="mt-4">
                  <Countdown targetDate={item.launchDate} />
                </div>
              )}
              {item.tags && (item.tags.frontend.length > 0 || item.tags.backend.length > 0) && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.frontend.map((tag, i) => (
                    <span
                      key={`frontend-${i}`}
                      className="px-2.5 py-1 text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                  {item.tags.backend.map((tag, i) => (
                    <span
                      key={`backend-${i}`}
                      className="px-2.5 py-1 text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </Card>
          </a>
        ))}
      </div>

      {/* Modal de Countdown */}
      <AnimatePresence>
        {showCountdownModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
            onClick={() => setShowCountdownModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative bg-neutral-900 border border-neutral-800 rounded-3xl p-8 md:p-12 max-w-2xl w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botón cerrar */}
              <button
                onClick={() => setShowCountdownModal(false)}
                className="absolute top-4 right-4 p-2 hover:bg-neutral-800 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-neutral-400" />
              </button>

              {/* Contenido del modal */}
              <div className="text-center">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Tiempo de espera no finalizado
                  </h3>
                  <p className="text-neutral-400 text-lg mb-8">
                    Por favor, espera hasta que la cuenta regresiva termine para acceder al proyecto.
                  </p>
                </motion.div>

                {/* Countdown grande */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="mb-6"
                >
                  <CountdownLarge targetDate={modalLaunchDate} />
                </motion.div>

                <motion.button
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  onClick={() => setShowCountdownModal(false)}
                  className="px-8 py-3 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl transition-colors font-medium"
                >
                  Entendido
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Componente CountdownLarge para el modal
const CountdownLarge = ({ targetDate }: { targetDate: string }) => {
  const [timeLeft, setTimeLeft] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  React.useEffect(() => {
    const target = new Date(targetDate).getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: "Días", value: timeLeft.days },
    { label: "Horas", value: timeLeft.hours },
    { label: "Minutos", value: timeLeft.minutes },
    { label: "Segundos", value: timeLeft.seconds },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      {timeUnits.map((unit, index) => (
        <div key={index} className="flex flex-col items-center">
          <motion.div
            key={unit.value}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-neutral-800/80 backdrop-blur-sm border border-neutral-700 rounded-2xl p-6 md:p-8 w-full"
          >
            <span className="text-5xl md:text-6xl font-bold text-white tabular-nums block">
              {unit.value.toString().padStart(2, "0")}
            </span>
          </motion.div>
          <span className="text-sm md:text-base text-neutral-400 mt-3 font-medium uppercase tracking-wider">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/20 group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
