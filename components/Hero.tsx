"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const slides = [
  {
    title: "Advancing Sustainability in Built Environment Education through International Collaboration",
    description: "Join our team from Greenwich University, London and Universitas Pembangunan Jaya (Indonesia) as we seek to strengthen capacity in sustainable built environment education.",
    cta: "About the Project",
    link: "/about",
  },
  {
    title: "Shaping the future of Sustainability-focused Higher Education in the Built Environment",
    description: "Strengthening institutional and staff capacity in delivering sustainability focused, internationally oriented education through effective partnership between academia and industry stakeholders.",
    cta: "Find Out More",
    link: "/about",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000); // 10 seconds for readability
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[800px] bg-black flex items-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="/video/bgimage.mp4" type="video/mp4" />
        </video>
        {/* Modern multi-stop gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/90 via-emerald-950/40 to-emerald-950/95 z-10" />
      </div>

      <div className="relative z-20 mx-auto max-w-7xl px-6 w-full pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center mb-10">
              <motion.span 
                initial={{ width: 0 }}
                animate={{ width: 60 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="h-1 bg-[#4aa537] inline-block rounded-full"
              ></motion.span>
              <span className="text-white font-bold uppercase text-xs md:text-sm ml-6">
                Innovation • Sustainability • Global Collaboration
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-10 max-w-6xl drop-shadow-2xl">
              {slides[current].title}
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-emerald-50/70 max-w-4xl mb-16 font-medium">
              {slides[current].description}
            </p>
            
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <Link
                href={slides[current].link}
                className="group relative rounded-full bg-white px-12 py-5 text-xl font-bold text-emerald-950 shadow-2xl hover:shadow-emerald-500/20 hover:-translate-y-2 transition-all duration-500 flex items-center gap-4"
              >
                {slides[current].cta}
                <div className="bg-[#4aa537] p-2 rounded-full text-white group-hover:translate-x-2 transition-transform duration-500">
                    <ArrowRight size={24} />
                </div>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Modern Pagination Indicators */}
        <div className="absolute bottom-16 left-6 flex items-center gap-6">
            {slides.map((_, i) => (
                <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className="group relative flex items-center py-4"
                >
                    <span className={`text-xs font-black mr-3 transition-colors duration-500 ${current === i ? "text-white" : "text-white/30"}`}>
                        0{i + 1}
                    </span>
                    <div className={`h-1.5 transition-all duration-700 rounded-full ${
                        current === i ? "w-24 bg-[#4aa537]" : "w-12 bg-white/20 group-hover:bg-white/40"
                    }`} />
                </button>
            ))}
        </div>
      </div>

      {/* Side Decorative Element */}
      <div className="absolute right-0 bottom-0 p-12 hidden lg:block opacity-20">
          <div className="text-white font-black text-[12rem] leading-none select-none">
              G-UPJ
          </div>
      </div>
    </section>
  );
};

export default Hero;
