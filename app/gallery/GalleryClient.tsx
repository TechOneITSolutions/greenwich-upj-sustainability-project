"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Images } from "lucide-react";

type GalleryData = {
  id: string;
  title: string;
  location?: string;
  category?: string;
  image_url: string;
  created_at: string;
};

export default function GalleryClient({ photos }: { photos: GalleryData[] }) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const formatDate = (dateString: string) => {
    const d = new Date(dateString);
    return `${d.getUTCDate().toString().padStart(2, '0')}/${(d.getUTCMonth() + 1).toString().padStart(2, '0')}/${d.getUTCFullYear()}`;
  };

  const categories = ["All", "Workshops", "Meetings", "Fieldwork"];
  const filtered = activeCategory === "All" ? photos : photos.filter(p => p.category === activeCategory);

  return (
    <div className="bg-white min-h-screen pb-24">

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/events.jpg"
          alt="Gallery Background"
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
              Visual Highlights
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-lg tracking-tight">
              Project Gallery
            </h1>
            <p className="text-xl md:text-2xl text-emerald-50/90 max-w-3xl mx-auto leading-relaxed font-medium">
              Visual highlights of our collaborative efforts, workshops, and project events.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">

        {/* Category Tabs — always visible */}
        <div className="flex items-center gap-2 mb-12 border-b border-gray-200 overflow-x-auto scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-6 py-4 text-sm font-bold whitespace-nowrap transition-all duration-200 flex-shrink-0 ${
                activeCategory === cat
                  ? "text-[#4aa537]"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {cat}
              {cat !== "All" && (
                <span className={`ml-2 text-xs font-semibold px-2 py-0.5 rounded-full ${
                  activeCategory === cat
                    ? "bg-[#4aa537]/10 text-[#4aa537]"
                    : "bg-gray-100 text-gray-500"
                }`}>
                  {photos.filter(p => p.category === cat).length}
                </span>
              )}
              {activeCategory === cat && (
                <motion.div
                  layoutId="galleryTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#4aa537] rounded-full"
                />
              )}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filtered.length > 0 ? (
              filtered.map((img) => (
                <motion.div
                  layout
                  key={img.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  className={`group relative aspect-square rounded-[2.5rem] overflow-hidden shadow-xl cursor-pointer ${
                    !img.image_url
                      ? "border-4 border-emerald-100 bg-gradient-to-br from-emerald-50 to-teal-50/50 flex flex-col items-center justify-center p-8 text-center"
                      : ""
                  }`}
                >
                  {img.image_url ? (
                    <>
                      <Image
                        src={img.image_url}
                        alt={img.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      {img.category && (
                        <span className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm text-emerald-800 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                          {img.category}
                        </span>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-emerald-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                        <h3 className="text-white text-xl font-bold mb-1">{img.title}</h3>
                        {img.location && <p className="text-emerald-400 text-sm font-medium mb-1">{img.location}</p>}
                        <p className="text-gray-400 text-sm">{formatDate(img.created_at)}</p>
                      </div>
                    </>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full w-full relative z-10 transition-transform duration-700 group-hover:scale-105">
                      {img.category && (
                        <span className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-emerald-500 bg-emerald-100 px-3 py-1 rounded-full">
                          {img.category}
                        </span>
                      )}
                      <div className="w-16 h-1 bg-emerald-400 rounded-full mb-6 opacity-50" />
                      <h3 className="text-emerald-950 text-2xl md:text-3xl font-bold mb-2 leading-tight">{img.title}</h3>
                      {img.location && <p className="text-emerald-600/80 text-sm font-semibold uppercase tracking-wider mb-2">{img.location}</p>}
                      <p className="text-emerald-700/60 text-sm font-medium tracking-wide uppercase mt-2">{formatDate(img.created_at)}</p>
                    </div>
                  )}
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="col-span-full p-16 text-center bg-white rounded-[2.5rem] border-2 border-dashed border-gray-200"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-4">
                  <Images className="w-8 h-8 text-emerald-300" />
                </div>
                <p className="text-gray-500 font-medium text-lg mb-1">
                  {activeCategory === "All" ? "No photos yet" : `No photos in "${activeCategory}"`}
                </p>
                <p className="text-gray-400">
                  {activeCategory === "All"
                    ? "Photos will appear here once they're added."
                    : "Check back soon or browse another category."}
                </p>
                {activeCategory !== "All" && (
                  <button
                    onClick={() => setActiveCategory("All")}
                    className="mt-4 text-emerald-600 font-semibold hover:text-emerald-800 underline underline-offset-4 transition-colors"
                  >
                    View all photos
                  </button>
                )}
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
