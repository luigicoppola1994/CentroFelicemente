export default function Hero() {
  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center bg-gray-900 text-white pt-28 pb-40 md:pt-36 md:pb-48 overflow-hidden">
      {/* Background Image with Dark Gray Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/medico_cura_pazienti.png" 
          alt="Medico che si prende cura dei pazienti" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-900/80 to-gray-800/40 backdrop-blur-[2px]"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl space-y-8">
          <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-medium text-white/95">Centro Medico Specializzato</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight tracking-tight text-white drop-shadow-sm">
            Professionalità e passione al servizio di chi ha bisogno
          </h1>
          <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl drop-shadow-sm font-sans">
            Centro Felicemente - Accompagniamo con dedizione ogni persona verso il proprio benessere
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a href="/#servizi" className="btn-primary bg-white text-gray-900 hover:bg-gray-100 border-none px-8 py-4 text-lg">
              Scopri i nostri servizi
            </a>
            <a href="/#contatti" className="btn-secondary border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold">
              Contattaci
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
