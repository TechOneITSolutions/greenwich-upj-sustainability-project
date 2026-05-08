"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 },
};

const upcomingevents = [
  {
    title: "Regulatory Roundtable",
    description: "A regulatory roundtable to discuss sustainable built environment strategies.",
    date: "25th - 29th May 2026",
    time: "09:00 - 17:00",
    location: "Universitas Pembangunan Jaya, Tangerang Selatan, Indonesia.",
    image: "/images/Roundtable.jpg",
    link: "/contact",
  },
  {
    title: "Stakeholder Workshops",
    description: "Stakeholder workshops bringing together academia, industry, and the broader community.",
    date: "24th - 26th June 2026",
    time: "09:00 - 17:00",
    location: "Universitas Pembangunan Jaya, Tangerang Selatan, Indonesia.",
    image: "/images/workshop.jpg",
    link: "/contact",
  },
];
const pastevents = [
  {
    title: "Stakeholder Workshop",
    description: "Sustainable Built Environment Workshop",
    date: "18th - 19th November 2024",
    time: "09:00",
    location: "Universitas Pembangunan Jaya, Tangerang Selatan, Indonesia.",
    image: "/images/workshop.jpg",
    link: "/contact",
  },
];

export default function EventsPage() {
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
              Engagement & Collaboration
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">

        {/* Upcoming Events Section */}
        <section>
          <motion.h2
            {...fadeInUp}
            className="text-4xl md:text-5xl font-extrabold text-emerald-950 mb-16"
          >
            Upcoming Events
          </motion.h2>

          <div className="space-y-12">
            {upcomingevents.map((evt, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="bg-[#f8f9fc] rounded-[2rem] overflow-hidden flex flex-col lg:flex-row p-6 md:p-8 gap-8 items-center shadow-sm border border-gray-100"
              >
                {/* Event Image */}
                <div className="relative w-full lg:w-[320px] aspect-[4/5] rounded-[1.5rem] overflow-hidden shadow-2xl flex-shrink-0 group">
                  <Image
                    src={evt.image}
                    alt={evt.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                {/* Event Details */}
                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl font-extrabold text-emerald-950 mb-3 tracking-tight">
                    {evt.title}
                  </h3>
                  <p className="text-[#4aa537] font-bold text-xl md:text-2xl mb-6 leading-tight">
                    {evt.description}
                  </p>

                  <div className="space-y-4 text-gray-700 text-base md:text-lg mb-8 font-medium">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                        <MapPin className="text-[#4aa537] w-5 h-5" />
                      </div>
                      <span>{evt.location}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                        <Calendar className="text-[#4aa537] w-5 h-5" />
                      </div>
                      <span>{evt.date}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                        <Clock className="text-[#4aa537] w-5 h-5" />
                      </div>
                      <span>{evt.time}</span>
                    </div>
                  </div>

                  <Link
                    href={evt.link}
                    className="inline-block bg-[#4aa537] text-white px-8 py-4 rounded-xl font-bold text-base md:text-lg hover:bg-emerald-700 transition-all hover:scale-105 shadow-xl shadow-emerald-200"
                  >
                    Register Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Past Events Section */}
        {pastevents.length > 0 && (
          <section className="mt-24">
            <motion.h2
              {...fadeInUp}
              className="text-4xl md:text-5xl font-extrabold text-emerald-950 mb-16"
            >
              Past Events
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pastevents.map((evt, i) => (
                <motion.div
                  key={i}
                  {...fadeInUp}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-[2rem] overflow-hidden flex flex-col p-6 gap-6 shadow-sm border border-gray-100 group hover:shadow-lg transition-all"
                >
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-md flex-shrink-0">
                    <Image
                      src={evt.image}
                      alt={evt.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                    />
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
                        <span>{evt.date}</span>
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
          </section>
        )}
      </div>
    </div>
  );
}
