import { useState, useEffect } from 'react';

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href} 
    className="relative text-gray-800 font-sans font-medium hover:text-[#0b3c82] transition-colors py-2 group"
  >
    {children}
    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#0b3c82] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></span>
  </a>
);

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  return (
    <>
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-gray-200/50 py-2' 
            : 'bg-gray-50/90 backdrop-blur-lg border-b border-gray-200 py-4'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center space-x-2 relative z-10 shrink-0">
              <img
                src="/centrofelicementelogo.png"
                alt="Centro Felicemente"
                className={`w-auto transition-all duration-300 ${scrolled ? 'h-10' : 'h-12'}`}
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/chi-siamo">Chi siamo</NavLink>
              
              {/* Dropdown menu */}
              <div className="relative group">
                <button className="relative text-gray-800 font-sans font-medium hover:text-[#0b3c82] transition-colors py-2 group flex items-center gap-1">
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
              
              <NavLink href="/progetti">Progetti</NavLink>
              <NavLink href="/contatti">Contatti</NavLink>

              <a 
                href="/sostienici" 
                className="ml-4 inline-flex items-center justify-center px-6 py-2.5 bg-[#0b3c82] text-white rounded-full font-semibold hover:bg-[#e30613] transition-colors duration-300 shadow-md hover:shadow-lg font-sans text-sm"
              >
                Sostienici
              </a>
            </nav>

            {/* Mobile hamburger button — 3 animated bars */}
            <button
              className="md:hidden relative z-[60] flex flex-col justify-center items-center w-10 h-10 rounded-xl focus:outline-none"
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
        <div className="relative z-10 flex flex-col h-full px-6 pt-24 pb-8 overflow-y-auto">
          
          {/* Logo in overlay */}
          <div className="mb-6 flex justify-center">
            <img src="/centrofelicementelogo.png" alt="Centro Felicemente" className="h-14 w-auto brightness-0 invert" />
          </div>

          <nav className="flex flex-col">
            {[
              { href: '/', label: 'Home' },
              { href: '/chi-siamo', label: 'Chi siamo' },
              { href: '/servizi', label: 'Servizi' },
              { href: '/certificazioni', label: 'Certificazioni' },
              { href: '/progetti', label: 'Progetti' },
              { href: '/contatti', label: 'Contatti' },
            ].map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`group flex items-center justify-between py-3 border-b border-white/10 text-white/80 hover:text-white font-sans font-semibold text-xl tracking-tight transition-all duration-300 ${
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
          <div className={`pt-4 transition-all duration-500 ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: '450ms' }}>
            <a 
              href="/sostienici" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center w-full bg-[#e30613] hover:bg-red-700 text-white rounded-2xl py-3.5 font-bold text-base transition-all duration-300 shadow-lg shadow-red-900/30"
            >
              ❤️&nbsp; Sostienici Ora
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
