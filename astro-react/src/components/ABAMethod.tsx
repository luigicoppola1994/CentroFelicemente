export default function ABAMethod() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#0b3c82] to-[#07224d] relative overflow-hidden text-white">
      {/* Decorative background lights using muted Brand Red (#e30613) and shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#e30613]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-white/[0.03] rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-12 gap-16 items-center">

          {/* Left: Beautiful CSS/SVG Interactive Illustration */}
          <div className="md:col-span-5 relative group">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/3] bg-gray-950">
              <img
                src="/metodoaba.png"
                alt="Metodo ABA per l'Autismo"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 to-transparent"></div>
            </div>

            {/* Small floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-white/10 backdrop-blur-md shadow-2xl border border-white/10 rounded-2xl p-4 flex items-center gap-3 transform group-hover:translate-y-[-4px] transition-transform duration-500">
              <div className="w-10 h-10 rounded-xl bg-[#e30613]/20 flex items-center justify-center text-[#e30613] font-bold">ABA</div>
              <div>
                <p className="text-xs text-white/60 font-medium font-sans">Approccio Scientifico</p>
                <p className="text-sm text-white font-bold font-sans">Efficacia Validata</p>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="md:col-span-7 space-y-6">
            <span className="text-xs font-semibold tracking-widest text-[#e30613] bg-white px-3.5 py-1.5 rounded-full uppercase font-sans">
              Metodo Scientifico
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight">
              Metodo ABA per l'Autismo
            </h2>
            <div className="text-white/80 space-y-5 text-base md:text-lg leading-relaxed font-sans">
              <p>
                La metodologia ABA per l'autismo, il cui acronimo vuol dire
                <strong className="text-white font-bold"> Analisi Comportamentale Applicata</strong>, è la scienza applicata
                che deriva dalla scienza di base conosciuta come Analisi del Comportamento.
              </p>
              <p>
                Essa trova applicazione in svariati ambiti, tra cui lo sviluppo del bambino,
                e ha dimostrato grande efficacia negli interventi per il trattamento dell'autismo
                e di altre disabilità.
              </p>
              <p>
                Il metodo ABA applica in modo sistematico e controllato i principi del
                comportamento per favorire l'apprendimento e migliorare l'autonomia sociale significativa.
              </p>
              <div className="pt-4">
                <a
                  href="/metodo-aba-per-lautismo"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-[#0b3c82] rounded-full font-semibold hover:bg-[#e30613] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg font-sans"
                >
                  <span>Leggi di più</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
