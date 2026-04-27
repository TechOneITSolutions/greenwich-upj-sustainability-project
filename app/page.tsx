import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      
      {/* Introduction Section */}
      <section id="about" className="py-32 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative group">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1518005020451-aba3b8fdf972?auto=format&fit=crop&q=80&w=800" 
                  alt="Sustainable Architecture" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-emerald-100 rounded-full -z-0 opacity-50 blur-3xl group-hover:opacity-80 transition-opacity"></div>
              <div className="absolute top-10 -left-10 p-6 bg-emerald-900 text-white rounded-2xl shadow-xl z-20 hidden md:block animate-bounce-slow">
                <p className="text-4xl font-bold mb-1">15+</p>
                <p className="text-xs uppercase tracking-widest text-emerald-300">Global Partners</p>
              </div>
            </div>
            
            <div>
              <div className="inline-flex items-center space-x-2 text-emerald-600 font-bold tracking-[0.2em] uppercase text-xs mb-6">
                <span className="h-0.5 w-8 bg-emerald-600"></span>
                <span>The Collaboration</span>
              </div>
              <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl mb-8 leading-tight">
                Pioneering the Future of <span className="text-emerald-700 italic">Sustainable Engineering</span>
              </h2>
              <p className="text-lg leading-relaxed text-gray-600 mb-8">
                The Sustainable Built Environment Collaboration (SBEC) is a transnational project dedicated to the integration of environmental resilience and mental well-being in engineering education.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                <div className="flex flex-col gap-3">
                  <div className="h-10 w-10 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-700">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                  </div>
                  <h4 className="font-bold text-gray-900">Curriculum Integration</h4>
                  <p className="text-sm text-gray-500">Embedding sustainability modules in modern engineering courses.</p>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="h-10 w-10 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-700">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  </div>
                  <h4 className="font-bold text-gray-900">Stakeholder Paths</h4>
                  <p className="text-sm text-gray-500">Connecting global NGOs with local Indonesian industries.</p>
                </div>
              </div>
              <button className="px-8 py-3 bg-emerald-900 text-white font-bold rounded-full hover:bg-emerald-800 transition-colors">
                Learn More About Our Story
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Marquee Section */}
      <section id="partners" className="py-24 bg-gray-50 border-y border-gray-100 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12 text-center">
          <h3 className="text-lg font-bold text-gray-400 uppercase tracking-[0.2em]">Our Global Network</h3>
        </div>
        <div className="flex space-x-12 animate-marquee whitespace-nowrap items-center py-4">
          {[
            "University of Greenwich",
            "Universitas Pembangunan Jaya",
            "Fayoum University",
            "University of Wolverhampton",
            "British Council",
            "GC Consulting Group",
            "Haibuild Services",
          ].map((partner, index) => (
            <div key={index} className="flex items-center space-x-4 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
              <div className="h-12 w-12 bg-emerald-900 rounded-lg flex items-center justify-center text-white font-black italic">
                {partner.charAt(0)}
              </div>
              <span className="text-xl font-bold text-emerald-900">{partner}</span>
            </div>
          ))}
          {/* Duplicate for infinite effect if needed, but for now simple list */}
        </div>
      </section>

      {/* Gallery / Interactive Section */}
      <section id="gallery" className="py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-extrabold text-emerald-950 mb-4 tracking-tight">Collaboration Gallery</h2>
              <p className="text-gray-600 text-lg">Visual stories from our workshops, site visits, and community engagements.</p>
            </div>
            <a href="#" className="bg-emerald-50 text-emerald-900 px-8 py-3 rounded-full font-bold hover:bg-emerald-100 transition-all">
              Explore All Moments
            </a>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=600", title: "Stakeholder Meeting", cat: "Jakarta, 2026" },
              { img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600", title: "Site Assessment", cat: "London, 2026" },
              { img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600", title: "Curriculum Workshop", cat: "Fayoum, 2026" },
              { img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600", title: "Student Exchange", cat: "Global, 2026" },
            ].map((item, index) => (
              <div key={index} className="group relative aspect-square rounded-3xl overflow-hidden cursor-pointer shadow-lg">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-8 flex flex-col justify-end">
                  <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-1">{item.cat}</p>
                  <h4 className="text-white font-bold text-xl">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved Section - Fixed Background */}
      <section id="contact" className="py-40 bg-emerald-950 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover opacity-10 fixed" alt="Nature background" />
          <div className="absolute inset-0 bg-emerald-950/80 backdrop-blur-sm"></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl font-extrabold text-white sm:text-6xl mb-8 tracking-tight">Ready to Shape the <br /><span className="text-emerald-400 underline decoration-4 underline-offset-8">Green Future?</span></h2>
          <p className="text-xl text-emerald-100/80 max-w-2xl mx-auto mb-12">
            Join our transnational network and contribute to a more sustainable and healthy built environment.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="px-12 py-5 bg-white text-emerald-900 font-black rounded-full hover:bg-emerald-50 transition-all transform hover:scale-105 shadow-2xl">
              Apply as a Researcher
            </button>
            <button className="px-12 py-5 bg-emerald-600 text-white font-black rounded-full hover:bg-emerald-500 transition-all transform hover:scale-105 shadow-2xl">
              Industry Collaboration
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-24 pb-12 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-8">
                <div className="h-10 w-10 bg-emerald-900 rounded-lg flex items-center justify-center text-white font-bold">S</div>
                <span className="text-2xl font-black text-emerald-900">SBEC</span>
              </div>
              <p className="text-gray-500 max-w-md leading-loose mb-10 text-lg">
                Driving innovation in sustainable construction and engineering education through international academic partnerships.
              </p>
              <div className="flex space-x-6">
                {['facebook', 'twitter', 'linkedin', 'youtube'].map((social) => (
                  <a key={social} href="#" className="h-12 w-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-emerald-900 hover:text-white transition-all transform hover:-translate-y-1">
                    <span className="sr-only">{social}</span>
                    <div className="w-5 h-5 bg-current mask-social-icon"></div>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-emerald-900 mb-8 uppercase tracking-widest text-sm">Quick Links</h4>
              <ul className="space-y-4">
                {['Home', 'About Us', 'Our Partners', 'Latest Insights', 'Gallery', 'Events'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-600 hover:text-emerald-600 font-medium transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-emerald-900 mb-8 uppercase tracking-widest text-sm">Stay Updated</h4>
              <p className="text-sm text-gray-500 mb-6 leading-relaxed">Subscribe to our newsletter for the latest collaboration news.</p>
              <form className="flex flex-col gap-3">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-900/10 transition-all"
                />
                <button className="px-6 py-4 bg-emerald-900 text-white font-bold rounded-xl hover:bg-emerald-800 transition-all">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          
          <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 text-sm italic">
              © {new Date().getFullYear()} Sustainable Built Environment Collaboration. All rights reserved.
            </p>
            <div className="flex gap-10">
              <a href="#" className="text-gray-400 text-xs hover:text-emerald-900 transition-colors uppercase tracking-widest font-bold">Privacy Policy</a>
              <a href="#" className="text-gray-400 text-xs hover:text-emerald-900 transition-colors uppercase tracking-widest font-bold">Cookie Settings</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
