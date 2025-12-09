"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownProps {
  targetDate: string;
}

export const Countdown = ({ targetDate }: CountdownProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
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
        setIsExpired(false);
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setIsExpired(true);
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

  if (isExpired) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.5 }}
        className="p-4 bg-neutral-800/30 backdrop-blur-sm border border-neutral-700/50 rounded-xl"
      >
        <p className="text-neutral-400 text-xs mb-3 text-center font-medium">
          Lanzamiento en:
        </p>
        
        <div className="grid grid-cols-4 gap-2">
          {timeUnits.map((unit, index) => (
            <div key={index} className="flex flex-col items-center">
              <motion.div
                key={unit.value}
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="bg-neutral-700/50 rounded-lg p-2 min-w-[45px]"
              >
                <span className="text-xl font-bold text-white tabular-nums">
                  {unit.value.toString().padStart(2, "0")}
                </span>
              </motion.div>
              <span className="text-[10px] text-neutral-500 mt-1.5 font-medium">
                {unit.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
