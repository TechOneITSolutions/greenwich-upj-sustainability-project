"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 },
};

const categories = ["All", "Workshops", "Meetings", "Field Work"];

const images = [
  {
    src: "/images/about_hero.png",
    alt: "Sustainable City Planning",
    category: "Workshops",
    title: "Workshop on Urban Sustainability",
  },
  {
    src: "/images/mission_vision.png",
    alt: "Team Discussion",
    category: "Meetings",
    title: "Project Board Meeting",
  },
  {
    src: "/images/project_focus.png",
    alt: "Field Engineer",
    category: "Field Work",
    title: "On-site Safety Assessment",
  },
  {
    src: "/images/about_background.png",
    alt: "Collaboration",
    category: "Workshops",
    title: "Knowledge Exchange Seminar",
  },
  // Add more as needed, reusing images for now
  {
    src: "/images/team_member_1.png",
    alt: "Academic Portrait",
    category: "Meetings",
    title: "Partner Institution Visit",
  },
  {
    src: "/images/team_member_2.png",
    alt: "Research Discussion",
    category: "Field Work",
    title: "Community Engagement Program",
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-emerald-950 mb-8">
            Project Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Visual highlights of our collaborative efforts, workshops, and 
            milestones in advancing sustainable engineering education.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full font-bold transition-all ${
                activeCategory === cat
                  ? "bg-[#4aa537] text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredImages.map((img, i) => (
            <motion.div
              layout
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="group relative aspect-square rounded-[2rem] overflow-hidden shadow-xl cursor-pointer"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-emerald-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <p className="text-emerald-400 font-bold uppercase tracking-widest text-xs mb-2">
                  {img.category}
                </p>
                <h3 className="text-white text-xl font-bold">
                  {img.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
