"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Users, Settings, Lightbulb } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 },
};

export default function GetInvolvedPage() {
  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/com_eng.jpg"
          alt="Get Involved Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-emerald-950/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/50 to-emerald-950/80" />
        
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto mt-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-[#4aa537]/20 border border-[#4aa537]/40 text-[#4aa537] text-xs md:text-sm font-bold uppercase tracking-[0.2em] px-5 py-2 rounded-full mb-6">
              Public, Community & Group Involvement
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-lg tracking-tight">
              Get Involved
            </h1>
            <p className="text-xl md:text-2xl text-emerald-50/90 max-w-4xl mx-auto leading-relaxed font-medium">
              Join us in fostering sustainable urban development through collaboration, structured dialogue, and applied engagement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          
          {/* Who */}
          <motion.div 
            {...fadeInUp}
            transition={{ delay: 0.1 }}
            className="bg-[#f8f9fc] rounded-[2.5rem] p-10 shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-lg transition-all hover:-translate-y-1"
          >
            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-sm mb-8 text-[#4aa537]">
              <Users size={32} />
            </div>
            <h2 className="text-3xl font-extrabold text-emerald-950 mb-6 tracking-tight">
              Who
            </h2>
            <ul className="space-y-4 text-gray-700 text-lg font-medium flex-1">
              <li className="flex items-start gap-3">
                <div className="mt-2 w-2 h-2 rounded-full bg-[#4aa537] flex-shrink-0" />
                <span className="leading-relaxed">Academic staff from the University of Greenwich and Academic staff and students from the Universitas Pembangunan Jaya.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 w-2 h-2 rounded-full bg-[#4aa537] flex-shrink-0" />
                <span className="leading-relaxed">Selected industry professionals linked to the Pembangunan Jaya Group.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 w-2 h-2 rounded-full bg-[#4aa537] flex-shrink-0" />
                <span className="leading-relaxed">Community facing and practice oriented stakeholders engaged through UPJ networks.</span>
              </li>
            </ul>
          </motion.div>

          {/* How */}
          <motion.div 
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="bg-[#f8f9fc] rounded-[2.5rem] p-10 shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-lg transition-all hover:-translate-y-1"
          >
            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-sm mb-8 text-[#4aa537]">
              <Settings size={32} />
            </div>
            <h2 className="text-3xl font-extrabold text-emerald-950 mb-6 tracking-tight">
              How
            </h2>
            <ul className="space-y-4 text-gray-700 text-lg font-medium flex-1">
              <li className="flex items-start gap-3">
                <div className="mt-2 w-2 h-2 rounded-full bg-[#4aa537] flex-shrink-0" />
                <span className="leading-relaxed">Participatory academic and professional engagement activities.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 w-2 h-2 rounded-full bg-[#4aa537] flex-shrink-0" />
                <span className="leading-relaxed">Structured dialogue, reflection, and feedback mechanisms.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 w-2 h-2 rounded-full bg-[#4aa537] flex-shrink-0" />
                <span className="leading-relaxed">Applied, sustainability focused engagement within defined ethical and governance frameworks.</span>
              </li>
            </ul>
          </motion.div>

          {/* What They Contribute */}
          <motion.div 
            {...fadeInUp}
            transition={{ delay: 0.3 }}
            className="bg-[#f8f9fc] rounded-[2.5rem] p-10 shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-lg transition-all hover:-translate-y-1"
          >
            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-sm mb-8 text-[#4aa537]">
              <Lightbulb size={32} />
            </div>
            <h2 className="text-3xl font-extrabold text-emerald-950 mb-6 tracking-tight">
              What They Contribute
            </h2>
            <ul className="space-y-4 text-gray-700 text-lg font-medium flex-1">
              <li className="flex items-start gap-3">
                <div className="mt-2 w-2 h-2 rounded-full bg-[#4aa537] flex-shrink-0" />
                <span className="leading-relaxed">Contextual insight, professional experience, and stakeholder perspectives.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 w-2 h-2 rounded-full bg-[#4aa537] flex-shrink-0" />
                <span className="leading-relaxed">Engagement with sustainability and urban development challenges.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 w-2 h-2 rounded-full bg-[#4aa537] flex-shrink-0" />
                <span className="leading-relaxed">Feedback on relevance and applicability within approved project activities.</span>
              </li>
            </ul>
          </motion.div>

        </div>

        {/* CTA Section */}
        <motion.div 
          {...fadeInUp}
          className="text-center"
        >
          <Link 
            href="/contact"
            className="inline-block bg-[#4aa537] text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-emerald-700 transition-all hover:scale-105 shadow-xl shadow-emerald-200"
          >
            Get Involved Now
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
