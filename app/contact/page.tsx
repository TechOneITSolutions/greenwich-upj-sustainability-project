"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, MessageSquare, Send } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 },
};

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 text-center"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-emerald-950 mb-8">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Have questions about the project or want to collaborate? 
            Reach out to our team using the form below or via our contact details.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div 
            {...fadeInUp}
            className="bg-[#f8f9fc] rounded-[3rem] p-8 md:p-12 shadow-sm border border-gray-100"
          >
            <h2 className="text-3xl font-extrabold text-emerald-950 mb-8 flex items-center gap-3">
              <MessageSquare className="text-[#4aa537]" />
              Send a Message
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4aa537]/20 focus:border-[#4aa537] transition-all bg-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4aa537]/20 focus:border-[#4aa537] transition-all bg-white"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Subject</label>
                <input 
                  type="text" 
                  placeholder="Inquiry about collaboration"
                  className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4aa537]/20 focus:border-[#4aa537] transition-all bg-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Message</label>
                <textarea 
                  rows={6}
                  placeholder="How can we help you?"
                  className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4aa537]/20 focus:border-[#4aa537] transition-all bg-white resize-none"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-emerald-950 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-[#4aa537] transition-all flex items-center justify-center gap-3 shadow-xl"
              >
                Send Message
                <Send size={20} />
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <div className="space-y-12">
            <motion.div {...fadeInUp} className="space-y-8">
              <h2 className="text-3xl font-extrabold text-emerald-950 mb-8">
                Get in Touch
              </h2>
              
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center flex-shrink-0 group-hover:bg-[#4aa537] transition-colors">
                  <MapPin className="text-[#4aa537] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold text-emerald-950 text-lg mb-1">Our Location</h4>
                  <p className="text-gray-600 leading-relaxed">
                    University of Greenwich, Old Royal Naval College,<br />
                    Park Row, London SE10 9LS, United Kingdom
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center flex-shrink-0 group-hover:bg-[#4aa537] transition-colors">
                  <Mail className="text-[#4aa537] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold text-emerald-950 text-lg mb-1">Email Us</h4>
                  <p className="text-gray-600 leading-relaxed font-bold">
                    contact@greenwich-upj-sustainability.org
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center flex-shrink-0 group-hover:bg-[#4aa537] transition-colors">
                  <Phone className="text-[#4aa537] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold text-emerald-950 text-lg mb-1">Call Us</h4>
                  <p className="text-gray-600 leading-relaxed font-bold">
                    +44 (0)20 8331 8000
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Indonesia Partner Info */}
            <motion.div 
              {...fadeInUp}
              className="p-10 rounded-[3rem] bg-emerald-950 text-white relative overflow-hidden"
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Indonesia Partner</h3>
                <h4 className="text-emerald-400 font-bold mb-6 uppercase tracking-wider text-sm">Universitas Pembangunan Jaya</h4>
                <p className="text-emerald-100/60 leading-relaxed mb-8">
                  Jl. Cendrawasih Raya Blok B7/P, Sawah Baru, Ciputat,<br />
                  Tangerang Selatan 15413, Indonesia
                </p>
              </div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
