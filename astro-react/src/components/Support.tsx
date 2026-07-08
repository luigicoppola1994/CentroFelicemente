import React, { useState } from 'react';

export default function Support() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="sostienici" className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-[#0b3c82] via-[#0b3c82] to-[#082a5c]">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#e30613]/10 rounded-full blur-3xl"></div>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
                <span className="text-[#e30613] animate-pulse">❤️</span>
                <span className="text-xs font-semibold tracking-widest text-white uppercase font-sans">
                  Fai la differenza
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
                Sostieni il nostro <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-[#e30613]">impegno</span>
              </h2>
            </div>

            <p className="text-base sm:text-lg md:text-xl text-blue-100 leading-relaxed max-w-lg font-sans">
              Il tuo contributo è prezioso. Ci permette di continuare a offrire terapie, progetti inclusivi e supporto a chi ne ha più bisogno, migliorando la qualità della vita di tante famiglie.
            </p>

            {/* Impact highlights */}
            <div className="flex gap-6 sm:gap-10 pt-4 pb-4">
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">100%</div>
                <div className="text-sm text-blue-200 font-medium font-sans mt-1">Trasparenza</div>
              </div>
              <div className="w-px bg-white/20"></div>
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">500+</div>
                <div className="text-sm text-blue-200 font-medium font-sans mt-1">Famiglie aiutate</div>
              </div>
              <div className="w-px bg-white/20"></div>
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">10+</div>
                <div className="text-sm text-blue-200 font-medium font-sans mt-1">Anni di attività</div>
              </div>
            </div>
          </div>

          {/* Right: Donation Cards */}
          <div className="relative w-full max-w-lg mx-auto lg:ml-auto">
            <div className="space-y-6">
              
              {/* 5x1000 Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden transform transition-transform hover:-translate-y-1 duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-0 opacity-50"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-display font-bold text-[#0b3c82]">Dona il 5x1000</h3>
                    <span className="text-3xl">✍️</span>
                  </div>
                  <p className="text-gray-600 font-sans text-sm mb-6">
                    Nella tua dichiarazione dei redditi (730 o Modello Unico), firma nel riquadro dedicato alle Onlus e inserisci il nostro Codice Fiscale.
                  </p>
                  <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 flex items-center justify-between group">
                    <div>
                      <div className="text-xs text-gray-500 font-semibold mb-1 uppercase tracking-wider">Codice Fiscale</div>
                      <div className="text-xl font-bold tracking-widest text-gray-900 font-mono">12087780966</div>
                    </div>
                    <button 
                      onClick={() => copyToClipboard('12087780966', 'cf')}
                      className={`p-2.5 rounded-lg transition-all ${copied === 'cf' ? 'bg-emerald-100 text-emerald-600' : 'bg-blue-50 text-[#0b3c82] hover:bg-[#0b3c82] hover:text-white'}`}
                      aria-label="Copia Codice Fiscale"
                    >
                      {copied === 'cf' ? (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      ) : (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Bonifico Card */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 sm:p-8 shadow-xl text-white transform transition-transform hover:-translate-y-1 duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-display font-bold">Donazione Libera</h3>
                  <span className="text-3xl">🏦</span>
                </div>
                <p className="text-blue-100 font-sans text-sm mb-6">
                  Puoi supportarci in qualsiasi momento effettuando un bonifico bancario intestato a: <strong>Banca Intesa – Cooperativa Sociale Centro Felicemente</strong>.
                </p>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-between group">
                  <div className="overflow-hidden">
                    <div className="text-xs text-blue-200 font-semibold mb-1 uppercase tracking-wider">IBAN</div>
                    <div className="text-base sm:text-lg font-bold tracking-wider text-white font-mono truncate mr-2">IT38 T030 6909 4961 0000 0015 837</div>
                  </div>
                  <button 
                    onClick={() => copyToClipboard('IT38T0306909496100000015837', 'iban')}
                    className={`shrink-0 p-2.5 rounded-lg transition-all ${copied === 'iban' ? 'bg-emerald-500 text-white' : 'bg-white/20 text-white hover:bg-white hover:text-[#0b3c82]'}`}
                    aria-label="Copia IBAN"
                  >
                    {copied === 'iban' ? (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                    )}
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
