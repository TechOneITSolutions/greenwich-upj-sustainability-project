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

export default function EventsPage() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-emerald-950 mb-8">
            Our Events
          </h1>
          <p className="text-xl text-gray-600 max-w-5xl leading-relaxed font-medium">
            Our project is committed to fostering engagement, knowledge exchange,
            and collaboration through a series of carefully planned events and
            activities. These events are designed to bring together stakeholders
            from academia, industry, and the broader community to share insights,
            develop new ideas, and advance the goals of the project. Below, you&apos;ll
            find details on our planned and upcoming events, as well as a record
            of past activities.
          </p>
          <div className="mt-12 w-full md:w-1/3 h-[1px] bg-gray-200" />
        </motion.div>

        {/* Upcoming Events Section */}
        <section>
          <motion.h2
            {...fadeInUp}
            className="text-4xl md:text-5xl font-extrabold text-emerald-950 mb-16"
          >
            Upcoming Events
          </motion.h2>

          <div className="space-y-12">
            {/* Event Card */}
            <motion.div
              {...fadeInUp}
              className="bg-[#f8f9fc] rounded-[3rem] overflow-hidden flex flex-col lg:flex-row p-8 md:p-12 gap-12 items-center shadow-sm border border-gray-100"
            >
              {/* Event Image */}
              <div className="relative w-full lg:w-[400px] aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl flex-shrink-0 group">
                <Image
                  src="/images/mission_vision.png"
                  alt="Stakeholder Workshop"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Event Details */}
              <div className="flex-1">
                <h3 className="text-4xl md:text-6xl font-extrabold text-emerald-950 mb-4 tracking-tight">
                  Stakeholder Workshop
                </h3>
                <p className="text-[#4aa537] font-bold text-2xl md:text-3xl mb-10 leading-tight">
                  Sustainable Built Environment Workshop
                </p>

                <div className="space-y-6 text-gray-700 text-lg md:text-xl mb-12 font-medium">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-[#4aa537] w-5 h-5" />
                    </div>
                    <span>Universitas Pembangunan Jaya, Tangerang Selatan, Indonesia.</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                      <Calendar className="text-[#4aa537] w-5 h-5" />
                    </div>
                    <span>18th - 19th November 2024</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                      <Clock className="text-[#4aa537] w-5 h-5" />
                    </div>
                    <span>09:00</span>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-block bg-[#4aa537] text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-emerald-700 transition-all hover:scale-105 shadow-xl shadow-emerald-200"
                >
                  Register Now
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
