import { useState, useEffect } from 'react';

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href} 
    className="relative text-gray-800 font-sans font-medium hover:text-[#0b3c82] transition-colors py-2 group uppercase"
  >
    {children}
    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#0b3c82] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></span>
  </a>
);

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [language, setLanguage] = useState('it');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open + notify other components
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    window.dispatchEvent(new CustomEvent('mobileMenuToggle', { detail: { open: mobileMenuOpen } }));
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-[#0b3c82] to-[#0b3c82] text-white py-2">
        <div className="container-custom">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <a href="tel:+390212345678" className="flex items-center space-x-2 hover:text-white/80 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+39 02 1234 5678</span>
              </a>
              <a href="mailto:info@centrofelicemente.it" className="flex items-center space-x-2 hover:text-white/80 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@centrofelicemente.it</span>
              </a>
            </div>
            <div className="flex items-center space-x-4">
              {/* Search Bar */}
              <div className="relative hidden md:block">
                <input
                  type="text"
                  placeholder="Cerca..."
                  className="bg-white/10 border border-white/20 rounded-full px-4 py-1.5 pl-10 text-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent w-48 transition-all"
                />
                <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              {/* Language Switch */}
              <div className="flex items-center space-x-2 border-l border-white/20 pl-4">
                <button
                  onClick={() => setLanguage('it')}
                  className={`w-8 h-6 rounded transition-all overflow-hidden ${language === 'it' ? 'ring-2 ring-white/50' : 'opacity-60 hover:opacity-100'}`}
                  title="Italiano"
                >
                  <svg viewBox="0 0 640 480" className="w-full h-full">
                    <g fillRule="evenodd" strokeWidth="1pt">
                      <path fill="#fff" d="M0 0h640v480H0z"/>
                      <path fill="#009246" d="M0 0h213.3v480H0z"/>
                      <path fill="#ce2b37" d="M426.7 0h213.3v480H426.7z"/>
                    </g>
                  </svg>
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`w-8 h-6 rounded transition-all overflow-hidden ${language === 'en' ? 'ring-2 ring-white/50' : 'opacity-60 hover:opacity-100'}`}
                  title="English"
                >
                  <svg viewBox="0 0 60 30" className="w-full h-full">
                    <rect fill="#012169" width="60" height="30"/>
                    <path d="M0 0l60 30M60 0L0 30" stroke="#fff" strokeWidth="6"/>
                    <path d="M0 0l60 30M60 0L0 30" stroke="#C8102E" strokeWidth="4"/>
                    <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10"/>
                    <path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6"/>
                  </svg>
                </button>
                <button
                  onClick={() => setLanguage('es')}
                  className={`w-8 h-6 rounded transition-all overflow-hidden ${language === 'es' ? 'ring-2 ring-white/50' : 'opacity-60 hover:opacity-100'}`}
                  title="Español"
                >
                  <svg viewBox="0 0 640 480" className="w-full h-full">
                    <path fill="#c60b1e" d="M0 0h640v480H0z"/>
                    <path fill="#ffc400" d="M0 128h640v224H0z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-gray-200/50 py-2' 
            : 'bg-gray-50/90 backdrop-blur-lg border-b border-gray-200 py-4'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center">
            {/* Logo */}
            <a href="/" className="flex items-center space-x-2 relative z-10 shrink-0">
              <img
                src="/centrofelicementelogo.png"
                alt="Centro Felicemente"
                className={`w-auto transition-all duration-300 ${scrolled ? 'h-10' : 'h-12'}`}
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8 lg:space-x-10 ml-auto">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/chi-siamo">Chi siamo</NavLink>
              
              {/* Dropdown menu */}
              <div className="relative group">
                <button className="relative text-gray-800 font-sans font-medium hover:text-[#0b3c82] transition-colors py-2 group flex items-center gap-1 uppercase">
                  Cosa facciamo
                  <svg className="w-4 h-4 text-gray-500 group-hover:text-[#0b3c82] transform group-hover:-rotate-180 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#0b3c82] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></span>
                </button>
                
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-56 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                  <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl shadow-blue-900/5 border border-gray-100 overflow-hidden">
                    <a href="/servizi" className="block px-6 py-4 text-gray-700 hover:bg-blue-50/80 hover:text-[#0b3c82] font-sans font-medium transition-colors border-b border-gray-50/50">
                      I nostri Servizi
                    </a>
                    <a href="/certificazioni" className="block px-6 py-4 text-gray-700 hover:bg-blue-50/80 hover:text-[#0b3c82] font-sans font-medium transition-colors">
                      Certificazioni
                    </a>
                  </div>
                </div>
              </div>
              
              <NavLink href="/visite-esami">Visite/Esami</NavLink>
              <NavLink href="/contatti">Contatti</NavLink>
              <NavLink href="/sostienici">Sostienici</NavLink>

              <a 
                href="/prenota" 
                className="ml-4 inline-flex items-center justify-center px-6 py-2.5 bg-[#0b3c82] text-white rounded-full font-semibold hover:bg-[#e30613] transition-colors duration-300 shadow-md hover:shadow-lg font-sans text-sm uppercase"
              >
                Prenota
              </a>
            </nav>

            {/* Mobile hamburger button — 3 animated bars */}
            <button
              className="md:hidden relative z-[60] flex flex-col justify-center items-center w-10 h-10 rounded-xl focus:outline-none ml-auto"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <span className={`block w-6 h-[2px] rounded-full transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'bg-white rotate-45 translate-y-[7px]' : 'bg-gray-800'}`}></span>
              <span className={`block w-6 h-[2px] rounded-full my-[5px] transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'bg-white opacity-0 scale-x-0' : 'bg-gray-800'}`}></span>
              <span className={`block w-6 h-[2px] rounded-full transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'bg-white -rotate-45 -translate-y-[7px]' : 'bg-gray-800'}`}></span>
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen mobile overlay menu */}
      <div
        className={`fixed inset-0 z-[55] md:hidden transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Dark backdrop */}
        <div 
          className="absolute inset-0 bg-[#07224d]"
          onClick={() => setMobileMenuOpen(false)}
        ></div>

        {/* Decorative circles */}
        <div className="absolute -bottom-20 -right-20 w-72 h-72 border-[40px] border-white/5 rounded-full pointer-events-none"></div>
        <div className="absolute top-20 -left-20 w-60 h-60 border-[30px] border-white/5 rounded-full pointer-events-none"></div>

        {/* Menu Content */}
        <div className="relative z-10 flex flex-col h-full px-6 pt-6 pb-8 overflow-y-auto">

          {/* Top bar: Logo + close X */}
          <div className="flex items-center justify-between mb-8">
            <img src="/centrofelicementelogo.png" alt="Centro Felicemente" className="h-12 w-auto brightness-0 invert" />
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Chiudi menu"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col">
            {[
              { href: '/', label: 'Home' },
              { href: '/chi-siamo', label: 'Chi siamo' },
              { href: '/servizi', label: 'Servizi' },
              { href: '/certificazioni', label: 'Certificazioni' },
              { href: '/visite-esami', label: 'Visite/Esami' },
              { href: '/contatti', label: 'Contatti' },
              { href: '/sostienici', label: 'Sostienici' },
            ].map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`group flex items-center justify-between py-3 border-b border-white/10 text-white/80 hover:text-white font-sans font-semibold text-xl tracking-tight transition-all duration-300 uppercase ${
                  mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                }`}
                style={{ transitionDelay: `${80 + i * 50}ms` }}
              >
                <span>{item.label}</span>
                <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className={`pt-6 space-y-3 transition-all duration-500 ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: '400ms' }}>
            <a 
              href="/prenota" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center w-full bg-[#0b3c82] hover:bg-[#e30613] text-white rounded-2xl py-3.5 font-bold text-base transition-all duration-300 shadow-lg uppercase"
            >
              Prenota
            </a>
            <p className="text-center text-white/40 text-xs mt-3 font-sans">
              Viale Europa, 70 — Cusago (MI)
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
