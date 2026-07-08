export default function Footer() {
  return (
    <footer
      id="contatti"
      className="relative overflow-hidden pt-20 pb-10 border-t border-white/10"
      style={{
        backgroundColor: '#0b3c82',
        color: '#e0ebff',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      {/* Pure blue background - no decorative elements */}

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
          
          {/* Column 1: Branding & Opening Hours (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <img
                src="/centrofelicementelogo.png"
                alt="Centro Felicemente"
                className="h-14 w-auto mb-6 brightness-0 invert" // Invert logo to white for high contrast on blue background
              />
              <p className="text-sm text-blue-100/80 leading-relaxed font-sans max-w-sm">
                Cooperativa Sociale Centro Felicemente. Professionalità e passione al servizio di chi ha bisogno, per l'età evolutiva e gli adulti.
              </p>
            </div>
            
            <div className="p-5 rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md">
              <span className="text-[11px] font-bold tracking-widest text-red-300 uppercase block mb-2">
                Disponibilità
              </span>
              <h4 className="text-white font-bold text-base mb-3 font-sans">ORARI DI APERTURA</h4>
              <div className="flex justify-between items-center text-sm font-sans">
                <span className="text-blue-100 font-medium">Lunedì - Sabato</span>
                <span className="text-[#0b3c82] font-bold bg-white px-3 py-1 rounded-lg text-xs">
                  8:00 - 20:00
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Dove Siamo (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <span className="text-[11px] font-bold tracking-widest text-white bg-white/15 px-3 py-1 rounded-full uppercase block w-max mb-4">
                La Nostra Sede
              </span>
              <h4 className="text-white font-bold text-lg mb-4 font-sans">DOVE SIAMO</h4>
              <p className="text-sm text-blue-100/80 leading-relaxed mb-6 font-sans">
                Il nostro centro medico specialistico è situato in una zona facilmente accessibile di Cusago.
              </p>
              
              <div className="space-y-4 font-sans">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-lg flex-shrink-0 mt-0.5 border border-white/5">
                    📍
                  </div>
                  <div>
                    <h5 className="text-xs text-blue-200/60 font-semibold uppercase tracking-wider mb-1">Indirizzo</h5>
                    <p className="text-white text-sm leading-relaxed">
                      Viale Europa, 70<br />
                      20090 Cusago (MI) - Italia
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-lg flex-shrink-0 border border-white/5">
                    📞
                  </div>
                  <div>
                    <h5 className="text-xs text-blue-200/60 font-semibold uppercase tracking-wider mb-0.5">Telefono</h5>
                    <a
                      href="tel:+390235954902"
                      className="text-base font-bold text-white hover:underline transition-all flex items-center gap-1"
                    >
                      <span>02 3595 4902</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Navigatore & Dati Fiscali (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <span className="text-[11px] font-bold tracking-widest text-white bg-white/15 px-3 py-1 rounded-full uppercase block w-max mb-4">
                Google Maps
              </span>
              <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-xl h-44">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11199.143870731363!2d9.0485128!3d45.4338157!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd33d5d415de0b343!2sCentro%20Felicemente!5e0!3m2!1sit!2sit!4v1672846733912!5m2!1sit!2sit"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="opacity-95 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>

            <div className="space-y-1.5 font-sans text-xs text-blue-200/70">
              <p>PEC: <a href="mailto:centrofelicemente@pec.it" className="text-white hover:underline">centrofelicemente@pec.it</a></p>
              <p>Email: <a href="mailto:info@centrofelicemente.it" className="text-white hover:underline">info@centrofelicemente.it</a></p>
              <p>Codice Univoco: <span className="text-white">N92GLON</span></p>
              <p>Partita IVA: <span className="text-white">12087780966</span></p>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-8"></div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 font-sans text-xs text-blue-200/60">
          <p className="text-center md:text-left leading-relaxed">
            © 2026 Centro Felicemente | Centro Medico Specializzato |{' '}
            <a href="/privacy" className="text-white hover:underline transition-colors">
              Informativa privacy
            </a>{' '}
            |{' '}
            <a href="/cookies" className="text-white hover:underline transition-colors">
              Cookies
            </a>
          </p>
          
          {/* Social Link */}
          <a
            href="https://www.facebook.com/centrofelicemente"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 border border-white/15 text-white hover:bg-white hover:text-[#0b3c82] transition-all duration-300 shadow-lg"
            aria-label="Facebook"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
