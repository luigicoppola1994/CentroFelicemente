export default function ABAMethod() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50/50 to-white relative overflow-hidden">
      {/* Decorative background blurs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#0b3c82]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">

          {/* Left: Image */}
          <div className="md:col-span-5 relative group order-2 md:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-100 aspect-[4/3] bg-gray-100">
              <img
                src="/metodoaba.png"
                alt="Metodo ABA per l'Autismo"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
            </div>

            {/* Floating badge */}
            <div className="hidden sm:flex absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-md shadow-xl border border-gray-100 rounded-2xl p-4 items-center gap-3 z-20">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#0b3c82] font-bold">ABA</div>
              <div>
                <p className="text-xs text-gray-500 font-medium font-sans">Approccio Scientifico</p>
                <p className="text-sm text-gray-900 font-bold font-sans">Efficacia Validata</p>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="md:col-span-7 space-y-5 md:space-y-6 order-1 md:order-2">
            <span className="text-xs font-semibold tracking-widest text-[#0b3c82] bg-blue-50 px-3.5 py-1.5 rounded-full uppercase font-sans">
              Metodo Scientifico
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 leading-tight">
              Metodo ABA per l'Autismo
            </h2>
            <div className="text-gray-600 space-y-4 text-base md:text-lg leading-relaxed font-sans">
              <p>
                La metodologia ABA per l'autismo, il cui acronimo vuol dire
                <strong className="text-gray-900 font-bold"> Analisi Comportamentale Applicata</strong>, è la scienza applicata
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
                  className="group inline-flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 bg-[#0b3c82] text-white rounded-full font-semibold hover:bg-[#e30613] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg font-sans text-sm md:text-base"
                >
                  <span>Scopri di più</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
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
