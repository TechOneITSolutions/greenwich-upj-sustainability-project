"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  X,
  Leaf,
  Users,
  Globe,
  Shield,
  Building2,
  GraduationCap,
  Handshake,
  Send,
  ChevronDown,
} from "lucide-react";

const fi = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 },
};

const whyParagraphs = [
  "Across many rapidly developing regions of the world, cities and communities are experiencing significant environmental, social, and infrastructure pressures. Urban expansion, climate-related risks, changing economic demands, and the need for more inclusive development are placing increasing responsibility on universities to equip graduates with the knowledge and practical skills required to respond effectively.",
  "At the same time, higher education institutions are facing their own challenges. Many universities are seeking new ways to modernise teaching, strengthen international collaboration, connect more closely with industry, and ensure that education remains relevant to real-world needs. While sustainability has become a global priority, there remains a need for more collaborative, locally informed, and practice-oriented approaches to teaching and learning within the built environment disciplines.",
  "The project team recognised that these challenges cannot be addressed through isolated efforts or one-directional knowledge transfer. Instead, meaningful progress requires partnerships built on mutual learning, shared expertise, and respect for local context. The collaboration between the University of Greenwich and Universitas Pembangunan Jaya was therefore established to create a platform for responsible international engagement — bringing together academic expertise, industry insight, and regional experience to explore how sustainability-focused education can evolve in ways that are both globally connected and locally relevant.",
  "The project also responds to the increasing importance of stronger relationships between universities and external stakeholders. By involving education foundations, industry-linked organisations, and community-facing partners, the initiative seeks to bridge the gap between academic learning and the practical realities of urban development and sustainability practice.",
  "Another key motivation behind the project is the recognition that academic staff and institutions themselves require ongoing support and development in order to adapt to emerging global challenges. Through collaborative workshops, dialogue, shared resources, and professional engagement activities, the project aims to strengthen institutional capability and foster long-term academic growth across both partner universities.",
  "Ultimately, the Greenwich-UPJ Sustainability Project was started because the project partners believe that sustainable futures are built through collaboration, shared learning, and internationally connected education. By working together across borders, disciplines, and sectors, the partnership aims to contribute to more resilient, inclusive, and future-ready built environments for generations to come.",
];

const focusAreas = [
  {
    n: 1,
    icon: Leaf,
    title: "Sustainability",
    desc: "Sustainable built environment education at the University of Greenwich and Universitas Pembangunan Jaya (UPJ)",
  },
  {
    n: 2,
    icon: Users,
    title: "Capacity Building",
    desc: "Capacity development for academic staff and institutions for both partner universities",
  },
  {
    n: 3,
    icon: Globe,
    title: "Collaboration",
    desc: "Structured international collaboration with industry connected organisations",
  },
  {
    n: 4,
    icon: Shield,
    title: "Equity & Inclusion",
    desc: "Equity, inclusion, and alignment with global sustainability priorities",
  },
];

const stakeholders = [
  {
    org: "University of Greenwich",
    benefit:
      "Strengthened internationalisation and transnational education capacity",
  },
  {
    org: "Universitas Pembangunan Jaya",
    benefit: "Enhanced staff capability and global academic engagement",
  },
  {
    org: "Students and Staff",
    benefit:
      "Enriched, internationally informed learning and teaching experiences",
  },
  {
    org: "External Partners",
    benefit: "Strengthened university–industry–community collaboration",
  },
];

const team = [
  {
    name: "Dr. Nnedinma Umeokafor",
    role: "Project Lead (UK) & Principal Investigator",
    img: "/images/team_mems/Dr_Nnedinma.png",
    bio: `Dr. Nnedinma Umeokafor is an internationally recognised academic, researcher, and innovator in the fields of project management, construction management, occupational health and safety, and sustainable built environment development.

He currently serves as Associate Professor in Project and Safety Innovations within the School of Engineering at the University of Greenwich, where his work focuses on advancing safer, more sustainable, and more effective approaches to project delivery, infrastructure development, and regulatory innovation.

Dr. Umeokafor’s research has gained international recognition for its contribution to improving health, safety, wellbeing, governance, and project performance within construction and engineering sectors—particularly in developing and emerging economies. His work bridges academic research with practical industry application, with a strong emphasis on sustainability, policy development, innovation, and capacity building.

He has authored more than 100 scholarly outputs, including peer-reviewed journal articles, conference papers, book chapters, and industry-focused publications. His research has appeared in leading international journals and has contributed significantly to global discussions on construction safety, regulatory systems, project governance, sustainable development, and the future of the built environment.

Throughout his academic career, Dr. Umeokafor has held teaching, research, and leadership positions at several UK higher education institutions, including the University of Greenwich, Liverpool John Moores University, Kingston University London, University College of Estate Management, and the University of East London. His experience spans curriculum development, academic leadership, doctoral supervision, and interdisciplinary research collaboration.

His research and professional interests include:
• Sustainable built environment development
• Project and construction management
• Occupational health, safety, and wellbeing
• Regulatory innovation and governance
• International higher education collaboration
• Infrastructure delivery in developing economies
• Sustainability and capacity development

Dr. Umeokafor has secured research and development funding from organisations including the British Council, the British Academy, and the Lloyd’s Register Foundation. He also contributes to international peer review and research governance through memberships of professional and academic bodies including the EPSRC, ESRC, and the British Council peer review colleges.

He is a Fellow of the Higher Education Academy (FHEA), a Fellow of the Association for Project Management (FAPM), and a Chartered Construction Manager with the Chartered Institute of Building (MCIOB).

As Principal Investigator for the Greenwich-UPJ Sustainability Project, Dr. Umeokafor leads the strategic direction of the collaboration between the United Kingdom and Indonesia, supporting the project’s mission to strengthen sustainability-focused education, academic innovation, and international institutional partnership within the built environment sector.`,
  },
  {
    name: "Prof. Elisabeth Rukmini",
    role: "PARTNER INSTITUTION LEAD (Indonesia) & co-Principal Investigator",
    where: "",
    img: "/images/team_mems/Prof_Elisabeth.JPG",
    bio: `Prof. Elisabeth Rukmini is the Rector of Universitas Pembangunan Jaya and an experienced academic leader, educator, and researcher with extensive expertise in higher education development, strategic planning, educational innovation, and international collaboration.

Her academic background spans chemistry, science education, higher education policy, and futures studies. She obtained her Bachelor’s degree in Chemistry from Universitas Gadjah Mada, completed a Master’s degree in Chemistry at Kosin University in South Korea, and later earned a PhD in Chemistry Education from Miami University, Ohio, USA. She has also undertaken postdoctoral research at Tamkang University in Taiwan, focusing on Futures Studies and forward-thinking approaches in higher education.

Throughout her career, Prof. Elisabeth has held senior academic and institutional leadership positions across Indonesian higher education. Prior to becoming Rector of UPJ, she served in strategic leadership roles involving collaboration, research, institutional development, operations, and innovation management. Her work has consistently focused on strengthening the relevance of higher education within rapidly changing social, technological, and industry contexts.

Her research and professional interests include:
• Active and meaningful learning approaches
• Higher education policy and strategic transformation
• Futures thinking and educational innovation
• Sustainability and socially impactful education
• Internationalisation and cross-sector collaboration

Prof. Elisabeth is also recognised for promoting a human-centred approach to education—emphasising critical thinking, empathy, collaboration, and the practical application of knowledge to societal challenges. Under her leadership, UPJ has continued to strengthen its focus on applied research, sustainability, urban development, and industry engagement.

Within the Greenwich-UPJ Sustainability Project, she serves as Co-Principal Investigator, helping guide the project’s strategic direction and institutional collaboration between Indonesia and the United Kingdom. Her leadership supports the project’s broader vision of advancing sustainable built environment education through globally connected and locally relevant partnerships.`,
  },
  {
    name: "Dr. Zaki Saptari Saldi",
    role: "Associate Professor and director of urban studies",
    where: "(UPJ, Indonesia)",
    img: "/images/team_mems/Dr_Zaki.jpg",
    bio: `Dr. Zaki Saptari Saldi is an academic and information technology practitioner with experience in software development, educational data analytics, and artificial intelligence–based research. He is actively involved in teaching, research, and the development of technology-driven systems to support the enhancement of learning quality.

He is the Head of the Education Bureau at Universitas Pembangunan Jaya. He received his master’s degree from Universitas Indonesia and is currently pursuing her doctoral studies at Universiti Tun Hussein Onn Malaysia. His main area of expertise is software engineering, with research interests encompassing learning analytics and AI applications in education, and a current focus on technology‑enabled learning systems.`,
  },
  {
    name: "Dr. Safitri Jaya",
    role: "Head Of Education Bureau Institution ",
    where: "(UPJ, Indonesia)",
    img: "/images/team_mems/Dr_Safitri.png",
    bio: `Dr. Safitri Jaya is an academic and information technology practitioner with experience in software development, educational data analytics, and artificial intelligence–based research. She is actively involved in teaching, research, and the development of technology-driven systems to support the enhancement of learning quality. She is the Head of the Education Bureau at Universitas Pembangunan Jaya. She received her master’s degree from Universitas Indonesia and is currently pursuing her doctoral studies at Universiti Tun Hussein Onn Malaysia. Her main area of expertise is software engineering, with research interests encompassing learning analytics and AI applications in education, and a current focus on technology‑enabled learning systems.`,
  },

  {
    name: "Okky Dharmosetio",
    role: "Business and institutional leader",
    where: "(Indonesia)",
    img: "/images/team_member_1.png",
    bio: `Okky Dharmosetio is an Indonesian business and institutional leader associated with the Yayasan Pendidikan Jaya and the Pembangunan Jaya Group, organisations recognised for their longstanding contributions to education, urban development, infrastructure, and community advancement in Indonesia.
 
Through his involvement across education and industry-linked organisations, Okky Dharmosetio contributes strategic insight into the relationship between higher education, professional practice, and sustainable urban development. His role reflects the broader mission of the Pembangunan Jaya network to support socially impactful development and strengthen connections between academia, industry, and communities.

He has held leadership and governance positions within organisations connected to the wider Pembangunan Jaya Group, including corporate and institutional oversight roles within property, infrastructure, engineering, and development-related sectors. Publicly available corporate records also identify him as serving in senior leadership and commissioner-level positions within companies associated with the Jaya Group network.

The Pembangunan Jaya Group is one of Indonesia’s established development and infrastructure networks, with activities spanning property development, construction, urban infrastructure, education, engineering services, and community-oriented initiatives. Through Yayasan Pendidikan Jaya, the group has also played a significant role in supporting educational institutions and learning initiatives in Indonesia.

Within the Greenwich-UPJ Sustainability Project, Okky Dharmosetio serves as Associate Partner Representative, helping strengthen engagement between the academic partnership and industry-linked stakeholders in Indonesia. His involvement supports the project’s emphasis on responsible collaboration, regional context, sustainability, and practical relevance within the built environment sector.

His contribution to the project reflects the importance of connecting universities with external partners who can provide industry perspective, institutional support, and insight into the evolving challenges of sustainable urban and community development.`,
  },
];

function ContactModal({ onClose }: { onClose: () => void }) {
  const [sent, setSent] = useState(false);
  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative bg-white rounded-[2rem] shadow-2xl w-full max-w-lg p-10 z-10"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-700 transition-colors"
        >
          <X size={24} />
        </button>
        {sent ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-[#4aa537] rounded-full flex items-center justify-center mx-auto mb-6">
              <Send className="text-white" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-emerald-950 mb-3">
              Message Sent!
            </h3>
            <p className="text-gray-600">
              Thank you for reaching out. We will be in touch shortly.
            </p>
          </div>
        ) : (
          <>
            <h2 className="text-3xl font-extrabold text-emerald-950 mb-2">
              Contact Us
            </h2>
            <p className="text-gray-500 mb-8 text-sm">
              We welcome your enquiry — please complete the form below.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="space-y-5"
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wide">
                    First Name
                  </label>
                  <input
                    id="modal-first"
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wide">
                    Last Name
                  </label>
                  <input
                    id="modal-last"
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wide">
                  Email
                </label>
                <input
                  id="modal-email"
                  type="email"
                  required
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wide">
                  Organisation
                </label>
                <input
                  id="modal-org"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wide">
                  Message
                </label>
                <textarea
                  id="modal-msg"
                  required
                  rows={4}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#4aa537] text-white py-4 rounded-xl font-bold text-sm hover:bg-emerald-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </>
        )}
      </motion.div>
    </div>
  );
}

function ProfileModal({
  member,
  onClose,
}: {
  member: (typeof team)[0];
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[200] grid place-items-center p-4"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative bg-white rounded-[2rem] shadow-2xl w-full max-w-2xl p-10 z-10 flex flex-col items-center gap-8 "
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-700 transition-colors"
        >
          <X size={24} />
        </button>
        <div className="relative w-40 h-40 flex-shrink-0 rounded-full overflow-hidden border-4 border-[#4aa537]/20 shadow-lg">
          <Image
            src={member.img}
            alt={member.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1 text-center md:text-left overflow-y-auto max-h-[60vh] pr-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="sticky top-0 z-10 bg-white border-b border-gray-200">
            <h2 className=" text-3xl font-extrabold text-emerald-950 mb-2 leading-tight">
              {member.name}
            </h2>
            <p className="text-[#4aa537] font-bold text-sm uppercase tracking-wide mb-4">
              {member.role}
            </p>
          </div>

          <div className="h-px w-full bg-emerald-100 mb-6"></div>
          <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line">
            {member.bio}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

function Accordion({ panels }: { panels: { title: string; body: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {panels.map((p, i) => (
        <div
          key={i}
          className="border border-emerald-100 rounded-2xl overflow-hidden"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-8 py-5 text-left bg-white hover:bg-emerald-50 transition-colors group"
          >
            <span className="font-bold text-emerald-950 text-lg">
              {p.title}
            </span>
            <ChevronDown
              className={`text-[#4aa537] transition-transform duration-300 flex-shrink-0 ml-4 ${open === i ? "rotate-180" : ""}`}
              size={20}
            />
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="px-8 pb-6 text-gray-600 leading-relaxed">
                  {p.body}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

export default function AboutPage() {
  const [contactModal, setContactModal] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState<number | null>(null);
  const [showFullWhy, setShowFullWhy] = useState(false);
  return (
    <div className="bg-white min-h-screen">
      {/* 1 — Hero */}
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/about_hero.png"
          alt="About the Project"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/80 via-emerald-950/60 to-emerald-950/80" />
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-block bg-[#4aa537]/20 border border-[#4aa537]/40 text-[#4aa537] text-xs font-bold uppercase tracking-[0.2em] px-5 py-2 rounded-full mb-6"
          >
            About the Project
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
          >
            Strengthening Institutional and Staff Capacity in
            Sustainability-Focused Education
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-emerald-100/80 max-w-3xl mx-auto"
          >
            An international collaboration between the University of Greenwich
            and Universitas Pembangunan Jaya, Indonesia.
          </motion.p>
        </div>
      </section>

      {/* 2 — Overview */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fi}>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#4aa537]">
              Overview
            </span>
            <h2 className="text-2xl md:text-5xl font-extrabold text-emerald-950 mt-4 mb-8 leading-tight">
              Exploring How Future-Oriented Higher Education Can Respond to
              Sustainability Challenges
            </h2>
          </motion.div>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fi}>
            <div className="flex flex-col gap-4 text-lg text-gray-600 leading-relaxed">
              <p>
                The Greenwich-UPJ Sustainability Project is an international
                collaboration led by the University of Greenwich (UK) in
                partnership with Universitas Pembangunan Jaya (UPJ), Indonesia,
                focusing on strengthening capacity in sustainable built
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
                The collaboration emphasises context-aware co-development
                aligned with international quality expectations and local
                priorities instead of exporting a fixed model. Activities are
                embedded within a formal institutional partnership framework.
              </p>
              <button
                onClick={() => setContactModal(true)}
                className="mt-10 bg-emerald-950 text-white px-10 py-4 rounded-xl font-bold hover:bg-emerald-800 transition-all text-sm uppercase tracking-wider inline-block"
              >
                Find Out More
              </button>
            </div>
          </motion.div>
          <motion.div
            {...fi}
            className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/project_focus.png"
              alt="Project collaboration"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* 3 — Mission & Vision */}
      <section className="bg-emerald-900 py-16 text-white overflow-hidden">
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
                alt="Mission and Vision"
                width={600}
                height={800}
                className="rounded-[2.5rem] shadow-2xl object-cover w-full h-[500px]"
              />
            </motion.div>
            <motion.div {...fi} className="w-full flex flex-col gap-10">
              <div>
                <h2 className="text-4xl font-bold mb-3 tracking-tight">
                  Mission Statement
                </h2>
                <p className="text-xl text-white/90 font-medium leading-relaxed">
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
                <p className="text-xl text-white/90 font-medium leading-relaxed">
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

      {/* 4 — Aims & Objectives */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fi} className="mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#4aa537]">
              Aims & Objectives
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-emerald-950 mt-4 mb-4">
              Purpose
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl leading-relaxed">
              To strengthen institutional and staff capacity at the University
              of Greenwich and Universitas Pembangunan Jaya in delivering
              sustainability focused, internationally oriented education.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: GraduationCap,
                title: "Key Aims",
                items: [
                  "Support academic and professional development at both partner universities",
                  "Enhance collaboration between higher education, industry, and policy-adjacent organisations",
                  "Strengthen long-term UK–Indonesia engagement in the built environment discipline",
                ],
              },
              {
                icon: Handshake,
                title: "Expected Outcomes",
                items: [
                  "Improved institutional capability in sustainable built environment education",
                  "Stronger academic collaboration between the University of Greenwich and UPJ",
                  "Enhanced engagement with industry and education foundations linked to urban development",
                  "Shared learning resources within formal partnership arrangements",
                ],
              },
              {
                icon: Building2,
                title: "Benefits",
                items: [
                  "University of Greenwich: strengthened internationalisation and transnational education capacity",
                  "Universitas Pembangunan Jaya: enhanced staff capability and global academic engagement",
                  "Students and staff: enriched, internationally informed learning and teaching experiences",
                  "External partners: strengthened university–industry–community collaboration",
                ],
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                {...fi}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="bg-white rounded-[2rem] p-10 shadow-lg border border-gray-100"
              >
                <div className="w-14 h-14 bg-emerald-950 rounded-2xl flex items-center justify-center text-white mb-6">
                  <card.icon size={26} />
                </div>
                <h3 className="text-xl font-extrabold text-emerald-950 mb-5">
                  {card.title}
                </h3>
                <ul className="space-y-3">
                  {card.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-gray-600 text-sm leading-relaxed"
                    >
                      <span className="text-[#4aa537] font-black mt-0.5 flex-shrink-0">
                        •
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — Why We Started */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fi} className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#4aa537]">
              Background
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-emerald-950 mt-4 mb-6">
              Why We Started
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              The Greenwich-UPJ Sustainability Project was created in response
              to a growing global need for higher education institutions to
              better prepare future professionals for the complex sustainability
              and urban development challenges facing modern societies.
            </p>
          </motion.div>
          <motion.div
            {...fi}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-6 text-lg text-gray-600 leading-relaxed"
          >
            <p>{whyParagraphs[0]}</p>
            <AnimatePresence initial={false}>
              {showFullWhy && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6 overflow-hidden"
                >
                  {whyParagraphs.slice(1).map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                  <p className="mt-10 text-gray-500 italic text-lg border-l-4 border-[#4aa537] pl-6">
                    &ldquo;Sustainable futures are built through collaboration,
                    shared learning, and internationally connected
                    education.&rdquo;
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          <motion.button
            {...fi}
            transition={{ delay: 0.3, duration: 0.8 }}
            onClick={() => setShowFullWhy(!showFullWhy)}
            className="mt-6 inline-flex items-center gap-2 text-[#4aa537] font-bold uppercase tracking-wider text-sm hover:text-emerald-700 transition-colors"
          >
            {showFullWhy ? "Read Less" : "Read More"}
          </motion.button>
        </div>
      </section>

      {/* 6 — Strategic Focus */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-emerald-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#4aa537]/10 blur-[140px] rounded-full -mr-60 -mt-60 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div {...fi} className="mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#4aa537]">
              Strategic Focus
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mt-4">
              Key Focus Areas of the Project
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusAreas.map((f, i) => (
              <motion.div
                key={i}
                {...fi}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="bg-white/5 border border-white/10 rounded-[2rem] p-8 hover:bg-white/10 transition-colors"
              >
                <div className="text-5xl font-black text-[#4aa537]/30 mb-4">
                  0{f.n}
                </div>
                <div className="w-12 h-12 bg-[#4aa537] rounded-xl flex items-center justify-center text-white mb-5">
                  <f.icon size={22} />
                </div>
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7 — Benefits */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fi} className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#4aa537]">
              Benefits
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-emerald-950 mt-4">
              Impact On Stakeholders
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stakeholders.map((s, i) => (
              <motion.div
                key={i}
                {...fi}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="bg-white rounded-[2rem] p-8 shadow-md border border-gray-100 text-center"
              >
                <div className="text-4xl font-black text-emerald-100 mb-4">
                  0{i + 1}
                </div>
                <h3 className="text-lg font-extrabold text-emerald-950 mb-3">
                  {s.org}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {s.benefit}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8 — Our People */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#4aa537]/5">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fi} className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#4aa537]">
              Our People
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-emerald-950 mt-4 mb-4">
              Project Team Profiles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Summary profiles of core team members of the Greenwich-UPJ Project
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5 justify-items-center">
            {team.map((m, i) => (
              <motion.div
                key={i}
                {...fi}
                transition={{ delay: i * 0.15, duration: 0.8 }}
                className="w-full max-w-[28rem] bg-white rounded-[2rem] p-5 shadow-xl border border-gray-100 flex flex-col items-center text-center"
              >
                <div className="relative w-20 h-20 rounded-full overflow-hidden mb-6 border-4 border-[#4aa537]/20 shadow-lg">
                  <Image
                    src={m.img}
                    alt={m.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-extrabold text-emerald-950 mb-2 leading-tight">
                  {m.name}
                </h3>
                <p className="text-[#4aa537] font-bold text-xs uppercase tracking-wide mb-1 leading-tight">
                  {m.role}
                </p>
                <p className="text-[#4aa537] font-bold text-xs uppercase tracking-wide mb-5 leading-tight">
                  {m.where}
                </p>
                <button
                  onClick={() => setSelectedProfile(i)}
                  className="text-xs font-bold uppercase tracking-wider text-emerald-700 border border-emerald-200 px-5 py-2 rounded-full hover:bg-emerald-50 transition-colors"
                >
                  See Profile
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9 — Partnerships */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fi} className="mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#4aa537]">
              Partnerships
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-emerald-950 mt-4 mb-4">
              Partners & Stakeholders
            </h2>
            <p className="text-lg text-gray-500 max-w-3xl">
              Partners and organisations provide academic leadership,
              institutional support, industry insight, and regional context to
              support the collaboration&apos;s objectives.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                badge: "Lead Institution",
                name: "University of Greenwich",
                country: "United Kingdom",
                color: "bg-emerald-950",
              },
              {
                badge: "Partner Institution",
                name: "Universitas Pembangunan Jaya (UPJ)",
                country: "Indonesia",
                color: "bg-[#4aa537]",
              },
              {
                badge: "Associated / Supporting",
                name: "Yayasan Pendidikan Jaya & Pembangunan Jaya Group",
                country: "Indonesia",
                color: "bg-emerald-700",
              },
            ].map((p, i) => (
              <motion.div
                key={i}
                {...fi}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="rounded-[2rem] overflow-hidden border border-gray-100 shadow-lg"
              >
                <div className={`${p.color} text-white px-8 py-5`}>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
                    {p.badge}
                  </span>
                </div>
                <div className="bg-white p-8">
                  <h3 className="text-xl font-extrabold text-emerald-950 mb-2">
                    {p.name}
                  </h3>
                  <p className="text-gray-400 text-sm font-bold uppercase tracking-wide">
                    {p.country}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10 — Get Involved */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-emerald-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/about_background.png')] bg-cover bg-center opacity-10" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div {...fi}>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#4aa537]">
              Get Involved
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold mt-4 mb-6">
              Your Contribution Is Welcomed
            </h2>
            <p className="text-xl text-emerald-100/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Academic & research experts, students, built environment industry
              players and interested parties are welcomed to get involved and
              contribute in various ways to the project.
            </p>
            <Link
              href="/get_involved"
              className="inline-block bg-[#4aa537] text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-emerald-500 transition-all shadow-xl hover:shadow-[#4aa537]/30 hover:-translate-y-1"
            >
              Get Involved
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {contactModal && (
          <ContactModal onClose={() => setContactModal(false)} />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {selectedProfile !== null && (
          <ProfileModal
            member={team[selectedProfile]}
            onClose={() => setSelectedProfile(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
