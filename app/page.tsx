"use client";

import Hero from "@/components/Hero";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import { Users, Target, Rocket, Mail, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 },
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />

      {/* Introduction Section */}
      <section id="about" className="py-24 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl font-extrabold tracking-tight text-emerald-950 sm:text-5xl mb-12 leading-tight">
              Delivering Sustainability-Focused, Internationally Oriented
              Education in the Built Environment
            </h2>
            <div className="space-y-8 text-lg leading-relaxed text-gray-600 max-w-4xl mx-auto">
              <p>
                Welcome to the official website of the{" "}
                <strong className="text-emerald-900">
                  "Greenwich-UPJ Sustainability Project"
                </strong>{" "}
                focused on strengthening capacity in sustainable built
                environment education through responsible academic–industry
                engagement and digital innovation.
              </p>
              <p>
                The initiative brings together academic expertise from both
                universities, supported by industry linked and educational
                organisations in Indonesia, to explore how future oriented
                higher education can better respond to sustainability, urban
                development, and skills challenges in different national
                contexts.
              </p>
              <p>
                Join us as we develop strategies for transnational education,
                research, and innovation through effective partnership between
                academia and industry stakeholders.
              </p>
            </div>
            <div className="mt-12">
              <a
                href="/about"
                className="inline-flex items-center space-x-2 text-emerald-900 font-bold hover:text-emerald-700 transition-colors group text-lg"
              >
                <span>Find Out More</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="max-w-7xl mx-auto py-24 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center px-4 sm:px-6 lg:px-8">
          <Image
            src="/renewable_energy.jpg"
            alt="Sustainable city"
            width={500}
            height={0}
            className="rounded-lg"
          />

          <div className="flex flex-row md:flex-col gap-5">
            <motion.div
              {...fadeIn}
              className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow group"
            >
              <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-extrabold text-emerald-950 mb-6">
                Mission Statement
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To advance academic collaboration, staff development, and
                educational innovation through a responsible UK–Indonesia
                partnership involving universities, industry linked
                organisations, and education foundations.
              </p>
            </motion.div>

            <motion.div
              {...fadeIn}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="bg-emerald-900 p-12 rounded-3xl shadow-2xl text-white hover:scale-[1.02] transition-transform"
            >
              <div className="w-14 h-14 bg-emerald-800 rounded-2xl flex items-center justify-center text-emerald-400 mb-8">
                <Rocket className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-extrabold mb-6">Vision Statement</h3>
              <p className="text-lg text-emerald-100/90 leading-relaxed">
                To enable the University of Greenwich and Universitas
                Pembangunan Jaya to contribute meaningfully to sustainable,
                inclusive, and resilient built environments through globally
                connected higher education.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Focus Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="lg:w-1/2 order-2 lg:order-1"
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1518005020451-aba3b8fdf972?auto=format&fit=crop&q=80&w=1200"
                  alt="Sustainability in Built Environment"
                  className="rounded-[3rem] shadow-2xl"
                />
                <div className="absolute inset-0 rounded-[3rem] bg-emerald-900/10 mix-blend-multiply"></div>
              </div>
            </motion.div>

            <motion.div {...fadeIn} className="lg:w-1/2 order-1 lg:order-2">
              <h2 className="text-4xl font-extrabold text-emerald-950 mb-8 tracking-tight">
                Our Project Focus
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                This project is an international collaboration led by the
                University of Greenwich (UK) in partnership with Universitas
                Pembangunan Jaya (UPJ), Indonesia.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                The collaboration emphasises{" "}
                <strong>context-aware co-development</strong> aligned with
                international quality expectations and local priorities instead
                of exporting a fixed model. Activities are delivered over a
                defined programme cycle and are embedded within a formal
                institutional partnership framework.
              </p>
              <a
                href="/about"
                className="bg-emerald-900 text-white px-10 py-4 rounded-full font-bold hover:bg-emerald-800 transition-all inline-block"
              >
                Learn More
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-4xl font-extrabold text-emerald-950 mb-6">
              Our Partners
            </h2>
            <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
              This initiative is made possible through the collaboration of
              partner academic institutions and industry stakeholders.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
            {/* Placeholder for partner logos */}
            <div className="h-20 w-40 bg-gray-200 rounded-xl flex items-center justify-center font-bold text-gray-400">
              Greenwich
            </div>
            <div className="h-20 w-40 bg-gray-200 rounded-xl flex items-center justify-center font-bold text-gray-400">
              UPJ
            </div>
            <div className="h-20 w-40 bg-gray-200 rounded-xl flex items-center justify-center font-bold text-gray-400">
              Industry A
            </div>
            <div className="h-20 w-40 bg-gray-200 rounded-xl flex items-center justify-center font-bold text-gray-400">
              Industry B
            </div>
          </div>

          <p className="mt-16 text-emerald-900 font-medium italic">
            "Together, we're leveraging the power of international collaboration
            to strengthen capacity in sustainable built environment education."
          </p>
        </div>
      </section>

      {/* Get Involved Sections */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              {...fadeIn}
              className="bg-emerald-50 p-12 rounded-[2.5rem] relative overflow-hidden"
            >
              <div className="relative z-10">
                <h3 className="text-3xl font-extrabold text-emerald-950 mb-6">
                  Get Involved
                </h3>
                <p className="text-lg text-emerald-900/70 mb-10">
                  We believe that collaboration is the key to success. Whether
                  you’re an academic, industry expert, student, or someone
                  passionate about education, there are numerous ways to
                  contribute.
                </p>
                <a
                  href="/contact"
                  className="bg-emerald-900 text-white px-8 py-4 rounded-full font-bold hover:bg-emerald-800 transition-all inline-block"
                >
                  Contact Us Now
                </a>
              </div>
              <Users className="absolute -bottom-10 -right-10 w-64 h-64 text-emerald-100/50" />
            </motion.div>

            <motion.div
              {...fadeIn}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="bg-emerald-900 p-12 rounded-[2.5rem] relative overflow-hidden text-white shadow-2xl"
            >
              <div className="relative z-10">
                <h3 className="text-3xl font-extrabold mb-6">
                  Want to know more?
                </h3>
                <p className="text-lg text-emerald-100/80 mb-10">
                  Are you seeking to collaborate, participate in the research,
                  or support the initiative as a funder or sponsor? We are ready
                  to listen to you!
                </p>
                <a
                  href="/contact"
                  className="bg-white text-emerald-900 px-8 py-4 rounded-full font-bold hover:bg-emerald-50 transition-all inline-block"
                >
                  Get in touch
                </a>
              </div>
              <Mail className="absolute -bottom-10 -right-10 w-64 h-64 text-white/5" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-950 text-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16 border-b border-white/10 pb-16">
            <div className="col-span-1 md:col-span-2">
              <h4 className="text-2xl font-bold mb-6">
                Greenwich-UPJ Sustainability Project
              </h4>
              <p className="text-emerald-100/60 max-w-2xl text-lg italic leading-relaxed">
                "Strengthening capacity in sustainable built environment
                education through responsible academic–industry engagement and
                digital innovation."
              </p>
            </div>
            <div>
              <h4 className="text-sm uppercase tracking-widest text-emerald-400 font-bold mb-8">
                Navigation
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="/"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/partners"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    Our Partners
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-emerald-100/40">
            <p>
              © {new Date().getFullYear()} Greenwich-UPJ Sustainability Project.
              All rights reserved.
            </p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
