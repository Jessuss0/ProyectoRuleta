"use client";
import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { getNumber } from "@/app/utils/getNumber";

export default function Ruleta() {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const [loading, setLoading] = useState(false);

  const startAnimation = async () => {
    await getNumber(count);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h2 className="min-h-28 text-5xl md:text-8xl text-purple-600 mb-8 font-black text-transparent bg-clip-text bg-gradient-to-r from-[#4352f1] to-[#9003bb]">
        Proyecto Ruleta!
      </h2>
      <motion.h1 className="mt-20 md:text-8xl text-5xl text-white">
        {rounded}
      </motion.h1>
      <button
        className="mt-10 px-6 py-2 text-xl bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
        onClick={startAnimation}
        disabled={loading}
      >
        {"¡Iniciar Ruleta!"}
      </button>
    </div>
  );
}
