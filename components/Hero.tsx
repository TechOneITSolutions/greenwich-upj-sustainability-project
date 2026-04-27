"use client";

import { motion } from "framer-motion";

const Hero = () => {
  const content = {
    title: "Advancing Sustainability in Built Environment Education through International Collaboration",
    description: "Join our team from Greenwich University, London and Universitas Pembangunan Jaya (UPJ), Indonesia as we seek to strengthen capacity in sustainable built environment education",
    cta: "About the Project",
    link: "/about",
    src: "/video/bgimage.mp4",
  };

  return (
    <section className="relative py-12 md:py-18 bg-black flex items-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src={content.src} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/80 via-emerald-950/40 to-emerald-950/90 z-10" />
      </div>

      <div className="relative z-20 mx-auto max-w-7xl px-6 w-full">
        <div className="">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center mb-8">
              <span className="h-px w-12 bg-white"></span>
              <span className="text-white font-bold uppercase tracking-[0.2em] text-xs ml-4">
                Global Collaboration • Sustainability • Innovation
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white  mb-8 leading-[1.1]">
              {content.title}
            </h1>
            <p className="text-lg sm:text-xl md:text-xl lg:text-2xl leading-relaxed text-gray-200 max-w-3xl mb-12">
              {content.description}
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <a
                href={content.link}
                className="rounded-full bg-white px-6 py-2 text-lg font-bold text-black shadow-lg hover:shadow-xl hover:-translate-y-1 cursor-pointer transition-all duration-300"
              >
                {content.cta}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
