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
            Have questions about the project or want to collaborate? Reach out
            to our team using the form below or via our contact details.
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
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4aa537]/20 focus:border-[#4aa537] transition-all bg-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4aa537]/20 focus:border-[#4aa537] transition-all bg-white"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Inquiry about collaboration"
                  className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4aa537]/20 focus:border-[#4aa537] transition-all bg-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                  Message
                </label>
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
                  <h4 className="font-bold text-emerald-950 text-lg mb-1">
                    Our Locations
                  </h4>
                  <p className="text-gray-600 leading-relaxed mb-5">
                    University of Greenwich, Old Royal Naval College,
                    <br />
                    Park Row, London SE10 9LS, United Kingdom
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Jl. Cendrawasih Raya Blok B7/P, Sawah Baru, Ciputat,
                    <br />
                    Tangerang Selatan, Banten 15413, Indonesia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center flex-shrink-0 group-hover:bg-[#4aa537] transition-colors">
                  <Mail className="text-[#4aa537] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold text-emerald-950 text-lg mb-1">
                    Email Us
                  </h4>
                  <p className="text-gray-600 leading-relaxed font-bold">
                    contact@greenwich-upj-sustainability.org
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4 justify-center">
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="w-12 h-12 rounded-xl border-2 bg-emerald-50 flex items-center justify-center text-[#4aa537] hover:bg-[#4aa537] hover:text-white transition-all hover:-translate-y-1 shadow-sm"
                >
                  <svg
                    className="w-6 h-6 text-[#4aa537] hover:text-white transition-colors duration-300 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                      clip-rule="evenodd"
                    />
                    <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-12 h-12 rounded-xl border-2 bg-emerald-50 flex items-center justify-center text-[#4aa537] hover:bg-[#4aa537] hover:text-white transition-all hover:-translate-y-1 shadow-sm"
                >
                  <svg
                    className="w-6 h-6 text-[#4aa537] hover:text-white transition-colors duration-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-12 h-12 rounded-xl border-2 bg-emerald-50 flex items-center justify-center text-[#4aa537] hover:bg-[#4aa537] hover:text-white transition-all hover:-translate-y-1 shadow-sm"
                >
                  <svg
                    className="w-6 h-6 text-[#4aa537] hover:text-white transition-colors duration-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>

              {/* <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center flex-shrink-0 group-hover:bg-[#4aa537] transition-colors">
                  <Phone className="text-[#4aa537] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold text-emerald-950 text-lg mb-1">Call Us</h4>
                  <p className="text-gray-600 leading-relaxed font-bold">
                    +44 (0)20 8331 8000
                  </p>
                </div>
              </div> */}
            </motion.div>

            {/* Indonesia Partner Info */}
            {/* <motion.div 
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
            </motion.div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
