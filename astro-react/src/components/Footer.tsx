export default function Footer() {
  return (
    <footer id="contatti" className="bg-gray-50 text-gray-800 pt-24 pb-12 relative overflow-hidden border-t border-gray-200">
      {/* Soft decorative background glow matching the light theme */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#0b3c82]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-10 left-10 w-80 h-80 bg-[#e30613]/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-16">
          
          {/* Column 1: Info, Opening Hours & Corporate Info (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <span className="inline-block text-xs font-semibold tracking-wider text-[#0b3c82] bg-blue-50 px-3 py-1 rounded-full uppercase font-sans mb-4">
                Orari & Info
              </span>
              <h3 className="text-xl font-display font-bold tracking-tight text-gray-900 mb-6 font-sans">ORARI DI APERTURA</h3>
              <div className="p-5 rounded-2xl bg-white border border-gray-150 shadow-sm">
                <div className="flex justify-between items-center font-sans">
                  <span className="text-gray-600 font-medium">Lunedì - Sabato</span>
                  <span className="text-white font-bold bg-[#0b3c82] px-3 py-1 rounded-lg text-sm">8:00 - 20:00</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-display font-bold tracking-tight text-gray-900 mb-4 font-sans">DATI SOCIETARI</h3>
              <ul className="space-y-2.5 text-sm text-gray-600 font-sans">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e30613]"></span>
                  <span>PEC: <a href="mailto:centrofelicemente@pec.it" className="text-[#0b3c82] hover:underline">centrofelicemente@pec.it</a></span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0b3c82]"></span>
                  <span>Email: <a href="mailto:info@centrofelicemente.it" className="text-[#0b3c82] hover:underline">info@centrofelicemente.it</a></span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0b3c82]"></span>
                  <span>Codice Univoco: <strong className="text-gray-900">N92GLON</strong></span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0b3c82]"></span>
                  <span>Partita IVA: <strong className="text-gray-900">12087780966</strong></span>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 2: Sede / Dove Siamo (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <span className="inline-block text-xs font-semibold tracking-wider text-[#0b3c82] bg-blue-50 px-3 py-1 rounded-full uppercase font-sans mb-4">
                Sede
              </span>
              <h3 className="text-xl font-display font-bold tracking-tight text-gray-900 mb-6 font-sans">DOVE SIAMO</h3>
              <p className="text-gray-600 text-base leading-relaxed mb-6 font-sans">
                Il nostro centro medico specialistico è pronto ad accogliere i pazienti presso la sede principale, facilmente raggiungibile.
              </p>
              
              <div className="p-6 rounded-2xl bg-white border border-gray-150 shadow-sm space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-xl mt-0.5">📍</span>
                  <p className="text-gray-800 font-medium font-sans text-base leading-relaxed">
                    Viale Europa, 70<br />
                    20090 Cusago (MI) - Italia
                  </p>
                </div>
                
                <div className="w-full h-px bg-gray-150"></div>
                
                <div className="flex items-center gap-3">
                  <span className="text-xl">📞</span>
                  <a href="tel:+390235954902" className="text-lg font-bold text-[#0b3c82] hover:text-[#e30613] transition-colors font-sans flex items-center gap-1.5 group">
                    <span>02 3595 4902</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Mappa (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <span className="inline-block text-xs font-semibold tracking-wider text-[#0b3c82] bg-blue-50 px-3 py-1 rounded-full uppercase font-sans mb-4">
                Mappa
              </span>
              <h3 className="text-xl font-display font-bold tracking-tight text-gray-900 mb-6 font-sans">NAVIGATORE</h3>
              <div className="relative rounded-2xl overflow-hidden border border-gray-150 shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.123456789!2d9.012345678!3d45.456789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDI3JzI0LjQiTiA5wrAwMCc0NC40IkU!5e0!3m2!1sit!2sit!4v1234567890"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="opacity-95 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-250 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left font-sans">
            © 2026 Centro Felicemente | Centro Medico Specializzato |{' '}
            <a href="/privacy" className="text-gray-600 hover:text-[#0b3c82] hover:underline transition-colors">
              Informativa privacy
            </a>{' '}
            |{' '}
            <a href="/cookies" className="text-gray-400 hover:text-[#0b3c82] hover:underline transition-colors">
              Cookies
            </a>
          </p>
          
          {/* Social */}
          <a
            href="https://www.facebook.com/centrofelicemente"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-200 text-gray-500 hover:text-white hover:bg-[#0b3c82] hover:border-[#0b3c82] transition-all duration-300 shadow-sm"
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
