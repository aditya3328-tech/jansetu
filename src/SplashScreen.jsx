import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function SplashScreen({ onFinish }) {
  const controls = useAnimation();

  useEffect(() => {
    // sequence: logo entrance -> pulse -> finish
    const run = async () => {
      await controls.start({ scale: [0.6, 1.05, 0.98, 1], rotate: [0, -8, 8, 0], transition: { duration: 1.2, ease: "easeInOut" } });
      await controls.start({ scale: [1, 1.03, 1], transition: { duration: 0.8, repeat: 1, repeatType: "reverse" } });
    };
    run();

    const timer = setTimeout(() => onFinish(), 2200);
    return () => clearTimeout(timer);
  }, [controls, onFinish]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen bg-gradient-to-br from-white to-sky-50 text-black p-6">
      <img
        className="mb-4 h-28 md:h-40 w-auto object-contain"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        src="logo.png"
        alt=""
      />

      <motion.h1
        className="text-xl md:text-3xl font-bold mb-2 text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        Loading JanSetu — Civic Sense Portal
      </motion.h1>

      <motion.p
        className="text-xs md:text-base text-black/80 mb-3 text-center max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        Preparing your experience…
      </motion.p>

      {/* Small partner logos */}
      <div className="flex items-center justify-center gap-4 mb-4">
        <img src="swacch-bharat.svg" alt="Swachh Bharat" className="h-8 md:h-10 w-auto object-contain" />
        <img src="make-in-india.png" alt="Make in India" className="h-8 md:h-20 w-auto object-contain" />
      </div>

      {/* Progress bar - responsive width */}
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md bg-white/20 rounded-full h-2 overflow-hidden">
        <motion.div
          className="h-2 bg-black"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2.1, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}
