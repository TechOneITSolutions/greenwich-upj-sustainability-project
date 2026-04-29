"use client";

import { motion } from "framer-motion";
import { GraduationCap, Globe2, Building2, BookOpen, Users2, Target, Award, Lightbulb } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 },
};

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/about_hero.png"
          alt="About Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-emerald-950/60" />
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold mb-6"
          >
            About the Project
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto font-medium"
          >
            Redefining engineering education through international collaboration and sustainable innovation.
          </motion.p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-sm uppercase tracking-[0.2em] text-emerald-600 font-bold mb-4">
              Overview
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-emerald-950 mb-8 leading-tight">
              A Global Initiative for Future-Ready Engineers
            </h3>
            <div className="space-y-6 text-lg text-emerald-900/70 leading-relaxed">
              <p>
                The Greenwich-UPJ Sustainability Project is a flagship initiative
                born from the British Council &apos;s &quot;Going Global Partnerships&quot;
                programme. Our mission is to build stronger, more inclusive, and
                internationally connected higher education systems.
              </p>
              <p>
                By fostering deep-rooted collaborations between the University of
                Greenwich (UK) and Universitas Pembangunan Jaya (Indonesia), we are
                bridging the gap between academic theory and real-world industrial
                sustainability.
              </p>
            </div>
          </motion.div>
          <motion.div
            {...fadeInUp}
            className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/mission_vision.png"
              alt="Collaboration"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Background Section */}
      <section className="py-24 bg-emerald-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            {...fadeInUp}
            className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl order-2 md:order-1"
          >
            <Image
              src="/images/about_background.png"
              alt="Project Background"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div {...fadeInUp} className="order-1 md:order-2">
            <h2 className="text-sm uppercase tracking-[0.2em] text-emerald-600 font-bold mb-4">
              Background
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-emerald-950 mb-8 leading-tight">
              Why We Started
            </h3>
            <div className="space-y-6 text-lg text-emerald-900/70 leading-relaxed">
              <p>
                Traditional engineering education often focuses heavily on technical
                proficiency, sometimes at the expense of societal and environmental
                preparedness. We recognized a vital need for a more holistic
                strategy.
              </p>
              <p>
                Our initiative integrates &quot;Design for Sustainability&quot; (DfS) as a
                core component of the curriculum. We believe that future engineers
                must be equipped not just with technical skills, but with the
                ethical framework and innovative mindset required to tackle global
                climate challenges.
              </p>
              <div className="pt-8 grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-4xl font-black text-emerald-600">2024</h4>
                  <p className="text-sm font-bold uppercase tracking-widest text-emerald-900/40">Launch Year</p>
                </div>
                <div>
                  <h4 className="text-4xl font-black text-emerald-600">2+</h4>
                  <p className="text-sm font-bold uppercase tracking-widest text-emerald-900/40">Institutions</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Aims & Objectives Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-[0.2em] text-emerald-600 font-bold mb-4">
            Aims & Objectives
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-emerald-950 mb-6">
            Strategic Focus Areas
          </h3>
          <p className="text-xl text-emerald-900/60 max-w-3xl mx-auto">
            Our project is built upon three pillars of transformation that ensure
            long-term impact and academic excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Curriculum Development",
              desc: "Creating a robust framework that aligns academic studies with live industry requirements and global sustainability goals.",
              icon: GraduationCap,
              color: "bg-emerald-600",
            },
            {
              title: "International Collaboration",
              desc: "Advancing partnerships between UK and Indonesian institutions through knowledge exchange and joint research.",
              icon: Globe2,
              color: "bg-[#4aa537]",
            },
            {
              title: "Capacity Building",
              desc: "Empowering universities with tools, resources, and digital innovations to deliver high-quality, future-focused education.",
              icon: Building2,
              color: "bg-emerald-800",
            },
          ].map((obj, i) => (
            <motion.div
              key={i}
              {...fadeInUp}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[2.5rem] bg-white border border-emerald-100 shadow-xl hover:shadow-2xl transition-all group"
            >
              <div className={`${obj.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform`}>
                <obj.icon size={32} />
              </div>
              <h4 className="text-2xl font-bold text-emerald-950 mb-4">{obj.title}</h4>
              <p className="text-emerald-900/60 leading-relaxed text-lg">{obj.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-emerald-950 text-white px-4 sm:px-6 lg:px-8 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 blur-[120px] rounded-full -mr-48 -mt-48" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <h2 className="text-sm uppercase tracking-[0.2em] text-emerald-400 font-bold mb-4">
              Benefits
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold mb-6">
              Impact for Stakeholders
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                target: "For Students",
                desc: "Gain deep appreciation of sustainability issues and the mental resilience needed to maneuver industry challenges.",
                icon: Target,
              },
              {
                target: "For Institutions",
                desc: "Enhanced curricula attuned to world standards, building international reputation and attracting top talent.",
                icon: Award,
              },
              {
                target: "For Community",
                desc: "Setting a standard for integrating sustainability and health into engineering programs globally.",
                icon: Lightbulb,
              },
            ].map((benefit, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="relative pl-12 border-l border-emerald-800"
              >
                <div className="absolute left-0 top-0 -ml-[1px] w-[1px] h-full bg-gradient-to-b from-emerald-400 to-transparent" />
                <benefit.icon className="text-emerald-400 mb-6 w-12 h-12" />
                <h4 className="text-2xl font-bold mb-4">{benefit.target}</h4>
                <p className="text-emerald-100/60 text-lg leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Team Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#4aa537]/10 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-20 text-black">
            <h3 className="text-5xl md:text-6xl font-extrabold mb-8 ">
              Project Team Profiles
            </h3>
            <p className="text-xl  max-w-4xl mx-auto leading-relaxed">
              The successful execution of this project is impelled by a committed
              and dedicated team of experts from various disciplines, each
              bringing special expertise and experience to the effort. Here are
              brief profiles of core team members:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Nnedinma Umeokafor",
                role: "Principal Investigator and Project Director/Lead",
                bio: "Dr. Nnedinma Umeokafor is a Programme Leader (MSc Occupational Safety, Health and Environment) and Senior Lecturer in Built Environment at the University of Greenwich, London, United Kingdom.",
                img: "/images/team_1.png",
              },
              {
                name: "Prof. Ahmed M. Fahmy Yousef",
                role: "Egypt Principal Investigator",
                bio: "Dr. Ahmed is dedicated to designing and evaluating new learning technologies that integrate cognitive science, learning analytics, and interactive media to enhance student outcomes in connected learning environments.",
                img: "/images/team_2.png",
              },
              {
                name: "Prof. Masoud E. Shaheen",
                role: "Egypt Principal Investigator",
                bio: "MASOUD E. SHAHEEN received the B.Sc. degree in science from the Department of Mathematics and Computer Science, Minia University, in 1996, the M.S. degree in computer science from the Faculty of Science, Fayoum University, Egypt, in 2005.",
                img: "/images/team_3.png",
              },
            ].map((member, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl p-10 flex flex-col items-center text-center shadow-2xl"
              >
                <div className="relative w-24 h-24 rounded-full overflow-hidden mb-8 border-4 border-emerald-50">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="text-3xl font-extrabold text-emerald-950 mb-4 leading-tight">
                  {member.name}
                </h4>
                <p className="text-[#4aa537] font-bold text-xl mb-6 leading-tight uppercase">
                  {member.role}
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div {...fadeInUp} className="mb-16">
            <h2 className="text-sm uppercase tracking-[0.2em] text-emerald-600 font-bold mb-4">
              Partnerships
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-emerald-950">
              Funders & Collaborators
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                name: "British Council",
                role: "Primary Funder",
                desc: "Supporting stronger, more globally allied higher education systems through 'Going Global Partnerships'.",
              },
              {
                name: "University of Greenwich",
                role: "Academic Partner (UK)",
                desc: "Leading international expertise in Built Environment and sustainable engineering education.",
              },
              {
                name: "Universitas Pembangunan Jaya",
                role: "Academic Partner (Indonesia)",
                desc: "Pioneering sustainable urban development and industry-aligned academic innovation in Indonesia.",
              },
            ].map((partner, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-lg border border-emerald-100 text-left"
              >
                <div className="h-12 flex items-center mb-6">
                  <span className="text-2xl font-black text-emerald-950">{partner.name}</span>
                </div>
                <h4 className="text-emerald-600 font-bold mb-4 uppercase tracking-wider text-sm">
                  {partner.role}
                </h4>
                <p className="text-emerald-900/60 leading-relaxed">
                  {partner.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="bg-emerald-950 rounded-[3rem] p-12 md:p-20 text-center text-white shadow-2xl relative overflow-hidden"
          >
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black mb-8">
                Be Part of the Solution
              </h2>
              <p className="text-xl md:text-2xl text-emerald-100 mb-12 max-w-2xl mx-auto">
                Whether you&apos;re a student, educator, or industry leader, your collaboration is key to a sustainable future.
              </p>
             <Link href="/contact" className="bg-white text-emerald-950 px-12 py-5 rounded-full font-bold text-xl hover:bg-emerald-50 transition-all inline-block shadow-lg">
               Get Involved
             </Link>
              
            </div>
            <Users2 className="absolute -bottom-10 -right-10 w-64 h-64 text-white/10" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
