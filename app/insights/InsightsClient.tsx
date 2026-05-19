"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 },
};

type InsightData = {
  id: string;
  title: string;
  content: string;
  published_date: string;
  image_url: string;
};

function ArticleModal({ article, onClose }: { article: InsightData; onClose: () => void }) {
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
          <Image src={article.image_url || "/images/insight_hero_bg.jpg"} alt={article.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-6 left-6 sm:left-10 text-white pr-6">
            <h2 className="text-2xl sm:text-4xl font-extrabold leading-tight text-white drop-shadow-md">
              {article.title}
            </h2>
          </div>
        </div>
        <div className="p-6 sm:p-10 overflow-y-auto overflow-x-hidden bg-gray-50 flex-1">
          <div className="flex items-center gap-4 mb-8 text-sm font-bold text-gray-500 uppercase tracking-widest border-b border-gray-200 pb-4">
            <span className="text-[#4aa537]">{new Date(article.published_date).toLocaleDateString()}</span>
            <span>•</span>
            <span>By Greenwich-UPJ Team</span>
          </div>
          <div
            className="prose prose-lg prose-emerald max-w-none text-gray-700 leading-relaxed break-words [&_*]:max-w-full [&_img]:max-w-full [&_pre]:whitespace-pre-wrap [&_table]:block [&_table]:overflow-x-auto"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </motion.div>
    </div>
  );
}

export default function InsightsClient({ insights }: { insights: InsightData[] }) {
  const [selectedArticle, setSelectedArticle] = useState<InsightData | null>(null);

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
        {/* News Grid */}
        <div className="mt-24">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
               <h2 className="text-4xl font-extrabold text-emerald-950 mb-3">
                 Latest Articles
               </h2>
               <p className="text-gray-500 text-lg">Browse our most recent updates and research publications.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.map((news, i) => (
              <motion.article 
                key={news.id}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                onClick={() => setSelectedArticle(news)}
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-gray-100 flex flex-col group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src={news.image_url || "/images/insight_hero_bg.jpg"} 
                    alt={news.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="text-xs font-extrabold text-[#4aa537] mb-4 uppercase tracking-widest">
                    {new Date(news.published_date).toLocaleDateString()}
                  </div>
                  <h3 className="text-2xl font-extrabold text-emerald-950 mb-4 line-clamp-2 leading-tight">
                    {news.title}
                  </h3>
                  <div 
                    className="text-gray-600 leading-relaxed mb-8 line-clamp-3 flex-1 text-lg prose" 
                    dangerouslySetInnerHTML={{ __html: news.content }} 
                  />
                  <div className="mt-auto flex items-center text-emerald-950 font-extrabold text-sm uppercase tracking-widest group-hover:text-[#4aa537] transition-colors">
                    Read Article <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {insights.length === 0 && (
            <div className="text-center text-gray-500 text-xl py-24">
              Check back later for news and updates!
            </div>
          )}
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
