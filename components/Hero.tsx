const Hero = () => {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden bg-black">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="" type="video/mp4" />
         
        </video>
        {/* Dark Overlay with Green Tint */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/80 via-emerald-950/40 to-emerald-950/90 z-10" />
      </div>

      <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="flex items-center space-x-4 mb-8">
            <span className="h-px w-12 bg-emerald-400"></span>
            <span className="text-emerald-400 font-bold uppercase tracking-[0.2em] text-xs">
              Sustainability • Innovation • Collaboration
            </span>
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-7xl mb-8 leading-[1.1]">
            Sustainable Built <br />
            <span className="text-emerald-400">Environment</span> <br />
            Collaboration
          </h1>
          <p className="text-xl leading-8 text-emerald-50/90 max-w-xl mb-12">
            Driving the future of green urban infrastructure through a strategic partnership between the UK and Indonesia.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <a
              href="#about"
              className="rounded-full bg-emerald-500 px-10 py-4 text-sm font-bold text-white shadow-lg hover:bg-emerald-400 transition-all transform hover:-translate-y-1"
            >
              Discover Our Impact
            </a>
            <a href="#" className="flex items-center text-sm font-bold leading-6 text-white group">
              <span className="border-b-2 border-emerald-500 pb-1 group-hover:border-white transition-all">View Research Gallery</span>
              <svg className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
