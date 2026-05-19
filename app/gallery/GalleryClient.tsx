"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type GalleryData = {
  id: string;
  title: string;
  image_url: string;
  created_at: string;
};

export default function GalleryClient({ photos }: { photos: GalleryData[] }) {
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
            project events.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {photos.map((img) => (
            <motion.div
              layout
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className={`group relative aspect-square rounded-[2.5rem] overflow-hidden shadow-xl cursor-pointer ${!img.image_url ? 'border-4 border-emerald-100 bg-gradient-to-br from-emerald-50 to-teal-50/50 flex flex-col items-center justify-center p-8 text-center' : ''}`}
            >
              {img.image_url ? (
                <>
                  <Image
                    src={img.image_url}
                    alt={img.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-emerald-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                    <h3 className="text-white text-xl font-bold mb-1">
                      {img.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{new Date(img.created_at).toLocaleDateString()}</p>
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center h-full w-full relative z-10 transition-transform duration-700 group-hover:scale-105">
                  <div className="w-16 h-1 bg-emerald-400 rounded-full mb-6 opacity-50"></div>
                  <h3 className="text-emerald-950 text-2xl md:text-3xl font-bold mb-4 leading-tight">
                    {img.title}
                  </h3>
                  <p className="text-emerald-700/60 text-sm font-medium tracking-wide uppercase">{new Date(img.created_at).toLocaleDateString()}</p>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
        
        {photos.length === 0 && (
          <div className="text-center text-gray-500 text-xl py-24">
            Check back later for event photos!
          </div>
        )}
      </div>
    </div>
  );
}
