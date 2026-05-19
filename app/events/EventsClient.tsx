"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 },
};

type EventData = {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  image_url: string;
}

export default function EventsClient({ upcomingevents, pastevents }: { upcomingevents: EventData[], pastevents: EventData[] }) {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/events.jpg"
          alt="Events Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-emerald-950/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/50 to-emerald-950/80" />
        
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto mt-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-[#4aa537]/20 border border-[#4aa537]/40 text-[#4aa537] text-xs font-bold uppercase tracking-[0.2em] px-5 py-2 rounded-full mb-6">
              Engagement &amp; Collaboration
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-lg tracking-tight">
              Project Events
            </h1>
            <p className="text-xl md:text-2xl text-emerald-50/90 max-w-4xl mx-auto leading-relaxed font-medium">
              Our project fosters engagement, knowledge exchange, and collaboration through events and activities. These events are designed to bring together stakeholders from academia, industry, and the broader community to share insights, develop ideas, and advance project goals.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">

        {/* Tab Bar */}
        <div className="flex items-center gap-2 mb-16 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`relative px-8 py-4 text-base font-bold transition-all duration-200 ${
              activeTab === 'upcoming'
                ? 'text-[#4aa537]'
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            Upcoming Events
            <span className="ml-2 text-xs font-semibold bg-[#4aa537]/10 text-[#4aa537] px-2 py-0.5 rounded-full">
              {upcomingevents.length}
            </span>
            {activeTab === 'upcoming' && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#4aa537] rounded-full"
              />
            )}
          </button>

          <button
            onClick={() => setActiveTab('past')}
            className={`relative px-8 py-4 text-base font-bold transition-all duration-200 ${
              activeTab === 'past'
                ? 'text-[#4aa537]'
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            Past Events
            <span className="ml-2 text-xs font-semibold bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
              {pastevents.length}
            </span>
            {activeTab === 'past' && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#4aa537] rounded-full"
              />
            )}
          </button>
        </div>

        <AnimatePresence mode="wait">

          {/* Upcoming Events Tab */}
          {activeTab === 'upcoming' && (
            <motion.div
              key="upcoming"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
            >
              {upcomingevents.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {upcomingevents.map((evt, i) => (
                    <motion.div
                      key={evt.id}
                      {...fadeInUp}
                      transition={{ delay: i * 0.08 }}
                      className="bg-white rounded-[2rem] overflow-hidden flex flex-col shadow-sm border border-gray-100 group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      {/* Card Image */}
                      <div className="relative w-full aspect-[4/3] overflow-hidden flex-shrink-0">
                        <Image
                          src={evt.image_url || "/images/workshop.jpg"}
                          alt={evt.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <span className="absolute top-3 left-3 bg-[#4aa537] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                          Upcoming
                        </span>
                        {/* Date badge on image */}
                        <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 text-center min-w-[56px] shadow">
                          <p className="text-[#4aa537] font-black text-xl leading-none">
                            {new Date(evt.date).getDate()}
                          </p>
                          <p className="text-gray-500 text-xs font-semibold uppercase">
                            {new Date(evt.date).toLocaleDateString('en-GB', { month: 'short' })}
                          </p>
                        </div>
                      </div>

                      {/* Card Body */}
                      <div className="flex flex-col flex-1 p-5 gap-3">
                        <h3 className="text-lg font-extrabold text-emerald-950 leading-snug line-clamp-2">
                          {evt.title}
                        </h3>
                        <p className="text-gray-500 text-sm line-clamp-2 flex-1">
                          {evt.description}
                        </p>

                        <div className="space-y-2 text-xs text-gray-500 font-medium pt-1">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-3.5 h-3.5 text-[#4aa537] flex-shrink-0" />
                            <span>{new Date(evt.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <MapPin className="w-3.5 h-3.5 text-[#4aa537] flex-shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{evt.location}</span>
                          </div>
                        </div>

                        <Link
                          href="/contact"
                          className="mt-2 w-full text-center bg-[#4aa537] text-white px-4 py-2.5 rounded-xl font-bold text-sm hover:bg-emerald-700 transition-all hover:scale-[1.02] shadow-md shadow-emerald-100"
                        >
                          Register Now
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-24">
                  <div className="w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-6">
                    <Calendar className="w-10 h-10 text-emerald-300" />
                  </div>
                  <p className="text-2xl font-bold text-gray-400 mb-2">No upcoming events</p>
                  <p className="text-gray-400">Check back soon — more events will be announced shortly!</p>
                </div>
              )}
            </motion.div>
          )}

          {/* Past Events Tab */}
          {activeTab === 'past' && (
            <motion.div
              key="past"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
            >
              {pastevents.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {pastevents.map((evt, i) => (
                    <motion.div
                      key={evt.id}
                      {...fadeInUp}
                      transition={{ delay: i * 0.1 }}
                      className="bg-white rounded-[2rem] overflow-hidden flex flex-col p-6 gap-6 shadow-sm border border-gray-100 group hover:shadow-lg transition-all"
                    >
                      <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-md flex-shrink-0">
                        <Image
                          src={evt.image_url || "/images/workshop.jpg"}
                          alt={evt.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                        />
                        <span className="absolute top-3 left-3 bg-gray-700/80 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-sm">
                          Past
                        </span>
                      </div>

                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-extrabold text-emerald-950 mb-2">
                          {evt.title}
                        </h3>
                        <p className="text-gray-500 font-medium mb-4 text-sm md:text-base">
                          {evt.description}
                        </p>

                        <div className="space-y-3 text-sm text-gray-600 font-medium">
                          <div className="flex items-center gap-3">
                            <Calendar className="text-gray-400 w-4 h-4" />
                            <span>{new Date(evt.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <MapPin className="text-gray-400 w-4 h-4 flex-shrink-0" />
                            <span className="line-clamp-1">{evt.location}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-24">
                  <div className="w-20 h-20 rounded-full bg-gray-50 flex items-center justify-center mx-auto mb-6">
                    <Clock className="w-10 h-10 text-gray-300" />
                  </div>
                  <p className="text-2xl font-bold text-gray-400 mb-2">No past events yet</p>
                  <p className="text-gray-400">Events that have already taken place will appear here.</p>
                </div>
              )}
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}
