export default function Support() {
  return (
    <section id="sostienici" className="relative py-16 md:py-24 overflow-hidden bg-white">
      {/* Decorative clean background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 bg-[#0b3c82]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#e30613]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* Left: Content */}
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-3 md:space-y-4">
              <span className="inline-block text-xs font-semibold tracking-widest text-[#0b3c82] bg-blue-50 px-3.5 py-1.5 rounded-full uppercase font-sans">
                Fai la differenza
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 leading-tight">
                Sostienici
              </h2>
            </div>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg font-sans">
              Partecipa anche tu attivamente alla nostra missione. Il tuo supporto ci permette di continuare ad offrire servizi di alta qualità a chi ne ha più bisogno.
            </p>

            {/* Impact highlights */}
            <div className="flex gap-6 sm:gap-8 pt-2">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0b3c82] tracking-tight font-display">100%</div>
                <div className="text-xs text-gray-500 font-semibold font-sans mt-1">Trasparenza</div>
              </div>
              <div className="w-px bg-gray-200"></div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0b3c82] tracking-tight font-display">500+</div>
                <div className="text-xs text-gray-500 font-semibold font-sans mt-1">Famiglie aiutate</div>
              </div>
              <div className="w-px bg-gray-200"></div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0b3c82] tracking-tight font-display">10+</div>
                <div className="text-xs text-gray-500 font-semibold font-sans mt-1">Anni di attività</div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <a
                href="/sostienici"
                className="group inline-flex items-center justify-center sm:justify-start gap-3 w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-[#0b3c82] text-white rounded-full font-semibold text-base sm:text-lg hover:bg-[#e30613] transition-all duration-300 shadow-md hover:shadow-lg font-sans"
              >
                <span>Scopri come sostenerci</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Visual element — visible on md+ */}
          <div className="hidden md:flex justify-center">
            <div className="relative">
              <div className="relative w-72 h-72 flex items-center justify-center">
                {/* Animated rings */}
                <div className="absolute inset-0 rounded-full border border-gray-100 animate-pulse"></div>
                <div className="absolute inset-4 rounded-full border border-gray-100"></div>
                <div className="absolute inset-10 rounded-full border border-gray-100"></div>
                <div className="absolute inset-16 rounded-full bg-gradient-to-br from-[#0b3c82]/5 to-[#e30613]/5 backdrop-blur-sm"></div>

                {/* Heart SVG */}
                <svg className="relative w-24 h-24 text-[#e30613]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor" opacity="0.9"/>
                </svg>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 border border-gray-100 shadow-md">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🤝</span>
                  <span className="text-gray-800 text-sm font-semibold font-sans">Insieme</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 border border-gray-100 shadow-md">
                <div className="flex items-center gap-2">
                  <span className="text-xl">❤️</span>
                  <span className="text-gray-800 text-sm font-semibold font-sans">Grazie</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
