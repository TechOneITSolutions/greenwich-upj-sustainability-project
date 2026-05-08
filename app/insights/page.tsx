"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Newspaper, Bell, BookOpen, MessageSquare, X } from "lucide-react";
import Image from "next/image";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 },
};
const newsAndUpdate = [
  {
    title: "Joint Research on Urban Heat Islands Published",
    desc: "A collaborative study between Greenwich and UPJ researchers highlights the growing impact of urban heat islands in Jakarta and London, proposing new sustainable mitigation strategies.",
    date: "12 May 2026",
    img: "/images/about_hero.png",
    category: "Research Findings"
  },
  {
    title: "New Student Exchange Program Announced",
    desc: "The partnership will see 20 students from the built environment disciplines participate in a cross-cultural exchange focusing on sustainable infrastructure.",
    date: "05 May 2026",
    img: "/images/project_focus.png",
    category: "Project Milestones"
  },
  {
    title: "Community Workshop: Green Building Materials",
    desc: "Join our upcoming community workshop where industry experts discuss the latest innovations in eco-friendly construction materials and their application in developing cities.",
    date: "28 Apr 2026",
    img: "/images/mission_vision.png",
    category: "Community Talk"
  }
];

function ArticleModal({ article, onClose }: { article: typeof newsAndUpdate[0]; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[200] grid place-items-center p-4 sm:p-6" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative bg-white rounded-[2rem] shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden z-10"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 bg-white/50 hover:bg-white text-emerald-950 p-2 rounded-full backdrop-blur-md transition-all shadow-sm"
        >
          <X size={24} />
        </button>
        <div className="relative h-64 sm:h-80 w-full flex-shrink-0">
          <Image src={article.img} alt={article.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-6 left-6 sm:left-10 text-white pr-6">
            <div className="mb-3 inline-block bg-[#4aa537] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-md">
              {article.category}
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold leading-tight text-white drop-shadow-md">
              {article.title}
            </h2>
          </div>
        </div>
        <div className="p-6 sm:p-10 overflow-y-auto bg-gray-50 flex-1">
          <div className="flex items-center gap-4 mb-8 text-sm font-bold text-gray-500 uppercase tracking-widest border-b border-gray-200 pb-4">
            <span className="text-[#4aa537]">{article.date}</span>
            <span>•</span>
            <span>By Greenwich-UPJ Team</span>
          </div>
          <div className="prose prose-lg prose-emerald max-w-none text-gray-700 leading-relaxed">
            <p className="text-xl font-medium text-emerald-950 mb-6 leading-relaxed">
              {article.desc}
            </p>
            <p>
              This initiative is part of a broader strategy to integrate sustainable practices into urban planning and development. The collaboration between the University of Greenwich and Universitas Pembangunan Jaya aims to foster innovative solutions tailored to local contexts while adhering to global standards.
            </p>
            <p className="mt-4">
              Our research teams have been working closely with local communities and industry leaders to identify key challenges and opportunities. By leveraging shared knowledge and resources, we believe that significant strides can be made in creating more resilient and inclusive built environments.
            </p>
            <h3 className="text-2xl font-bold text-emerald-950 mt-8 mb-4">Moving Forward</h3>
            <p>
              As we progress, we will continue to update our stakeholders on key milestones and findings. We invite you to stay engaged with our platform and participate in upcoming community discussions and workshops.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function InsightsPage() {
  const [selectedArticle, setSelectedArticle] = useState<typeof newsAndUpdate[0] | null>(null);

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/insight_hero_bg.jpg"
          alt="Insights Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-emerald-950/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/50 to-emerald-950/80" />
        
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto mt-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-[#4aa537]/20 border border-[#4aa537]/40 text-[#4aa537] text-xs font-bold uppercase tracking-[0.2em] px-5 py-2 rounded-full mb-6">
              Latest Updates & News
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-lg tracking-tight">
              Insights
            </h1>
            <p className="text-xl md:text-2xl text-emerald-50/90 max-w-3xl mx-auto leading-relaxed font-medium">
              Welcome to the Insights page of the Greenwich-UPJ Sustainability Project. Here, you&apos;ll find the latest updates, useful resources, and community discussions about the project. Stay informed, join the conversation and share ideas!
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* News & Updates Banner */}
        {/* <motion.section 
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
        </motion.section> */}

        {/* Categories Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
        </div> */}

        {/* News Grid */}
        <div className="mt-24">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
               <h2 className="text-4xl font-extrabold text-emerald-950 mb-3">
                 Latest Articles
               </h2>
               <p className="text-gray-500 text-lg">Browse our most recent updates and research publications.</p>
            </div>
            {/* <button className="text-[#4aa537] font-bold uppercase tracking-widest text-sm hover:text-emerald-700 transition-colors flex items-center gap-2">
              View All <span className="text-lg">→</span>
            </button> */}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsAndUpdate.map((news, i) => (
              <motion.article 
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                onClick={() => setSelectedArticle(news)}
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-gray-100 flex flex-col group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src={news.img} 
                    alt={news.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-extrabold text-emerald-950 uppercase tracking-widest shadow-sm">
                    {news.category}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="text-xs font-extrabold text-[#4aa537] mb-4 uppercase tracking-widest">
                    {news.date}
                  </div>
                  <h3 className="text-2xl font-extrabold text-emerald-950 mb-4 line-clamp-2 leading-tight">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-8 line-clamp-3 flex-1 text-lg">
                    {news.desc}
                  </p>
                  <div className="mt-auto flex items-center text-emerald-950 font-extrabold text-sm uppercase tracking-widest group-hover:text-[#4aa537] transition-colors">
                    Read Article <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
      <AnimatePresence>
        {selectedArticle && (
          <ArticleModal article={selectedArticle} onClose={() => setSelectedArticle(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}
