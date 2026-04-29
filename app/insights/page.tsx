"use client";

import { motion } from "framer-motion";
import { Newspaper, Bell, BookOpen, MessageSquare } from "lucide-react";
import Image from "next/image";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 },
};

export default function InsightsPage() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#064e3b] mb-8">
            Insight
          </h1>
          <p className="text-xl text-gray-600 max-w-5xl leading-relaxed font-medium">
            Welcome to the Insight page of the Greenwich-UPJ Sustainability project.
            Here, you&apos;ll find the latest updates, resources, and community 
            discussions related to sustainability and innovation in engineering education.
            Stay informed, get inspired, and join the conversation!
          </p>
        </motion.div>

        {/* News & Updates Banner */}
        <motion.section 
          {...fadeInUp}
          className="relative rounded-[3rem] overflow-hidden bg-emerald-950 text-white p-12 md:p-24 mb-20 shadow-2xl"
        >
          <div className="absolute inset-0 opacity-20">
             <Image 
                src="/images/about_background.png" 
                alt="Background" 
                fill 
                className="object-cover grayscale"
             />
          </div>
          <div className="relative z-10 max-w-4xl">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
              News & Updates
            </h2>
            <p className="text-[#4aa537] font-bold text-2xl md:text-3xl mb-8 uppercase tracking-widest">
              Latest News
            </p>
            <p className="text-xl md:text-2xl text-emerald-100/80 leading-relaxed font-medium">
              Stay up-to-date with the most recent developments and achievements 
              from the Greenwich-UPJ Sustainability Project. Read about our latest 
              research findings, project milestones, and newsworthy events.
            </p>
          </div>
        </motion.section>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
                { title: "Research Findings", icon: BookOpen, count: "12 Articles" },
                { title: "Project Milestones", icon: Bell, count: "8 Updates" },
                { title: "Community Talk", icon: MessageSquare, count: "24 Threads" },
                { title: "Press Releases", icon: Newspaper, count: "5 Articles" },
            ].map((cat, i) => (
                <motion.div 
                    key={i}
                    {...fadeInUp}
                    transition={{ delay: i * 0.1 }}
                    className="p-10 rounded-[2.5rem] bg-[#f8f9fc] border border-gray-100 hover:bg-emerald-50 hover:border-emerald-100 transition-all group cursor-pointer shadow-sm hover:shadow-md"
                >
                    <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                        <cat.icon className="w-8 h-8 text-[#4aa537]" />
                    </div>
                    <h3 className="text-2xl font-bold text-emerald-950 mb-2">{cat.title}</h3>
                    <p className="text-emerald-900/40 font-bold uppercase tracking-widest text-xs">{cat.count}</p>
                </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
}
