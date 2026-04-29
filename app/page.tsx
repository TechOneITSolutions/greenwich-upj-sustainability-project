"use client";

import Hero from "@/components/Hero";
import { motion } from "framer-motion";
import { Users, Mail, ArrowRight } from "lucide-react";
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
      <section className="bg-emerald-900 py-10 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full"
            >
              <Image
                src="/images/mission_vision.png"
                alt="Engineering team collaboration"
                width={600}
                height={800}
                className="rounded-xl shadow-2xl object-cover w-full h-[600px]"
              />
            </motion.div>

            <motion.div {...fadeIn} className="w-full flex flex-col gap-8">
              <div>
                <h2 className="text-4xl font-bold mb-3 tracking-tight">
                  Mission Statement
                </h2>
                <p className="text-xl text-white/90 font-medium">
                  To advance academic collaboration, staff development, and
                  educational innovation through a responsible UK–Indonesia
                  partnership involving universities, industry linked
                  organisations, and education foundations.
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-bold mb-3 tracking-tight">
                  Vision Statement
                </h2>
                <p className="text-xl text-white/90 leading-relaxed font-medium">
                  To enable the University of Greenwich and Universitas
                  Pembangunan Jaya to contribute meaningfully to sustainable,
                  inclusive, and resilient built environments through globally
                  connected higher education.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Focus Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-16 items-center">
            <motion.div {...fadeIn} className="order-2 lg:order-1">
              <div className="mb-8">
                <h2 className="text-5xl font-bold text-black capitalize mb-4 tracking-tight">
                  Our project focus
                </h2>
                <div className="h-1.5 w-40 bg-black rounded-full"></div>
              </div>
              <p className="text-xl text-gray-800 mb-8 leading-relaxed font-medium">
                This project is an international collaboration led by the
                University of Greenwich (UK) in partnership with Universitas
                Pembangunan Jaya (UPJ), Indonesia.
              </p>
              <p className="text-xl text-gray-800 mb-12 leading-relaxed font-medium">
                The collaboration emphasises{" "}
                <strong className="text-emerald-700">context-aware co-development</strong> aligned with
                international quality expectations and local priorities instead
                of exporting a fixed model. Activities are delivered over a
                defined programme cycle and are embedded within a formal
                institutional partnership framework.
              </p>
              <a
                href="/about"
                className="bg-emerald-900 text-white px-10 py-4 rounded-xl font-bold hover:bg-emerald-900/80 transition-all inline-block text-lg"
              >
                Learn More
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <div className="relative group">
                <Image
                  src="/images/project_focus.png"
                  alt="Sustainability in Built Environment"
                  className="rounded-[3rem] shadow-2xl w-full h-[700px] object-cover"
                  width={600}
                  height={800}
                />
              </div>
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
                  you&apos;re an academic, industry expert, student, or someone
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
    </div>
  );
}
