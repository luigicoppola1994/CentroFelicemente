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

  // Add subtle shadow when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
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

          {/* Mobile hamburger button */}
          <div className="md:hidden flex items-center relative z-10">
            <button
              className="p-2 -mr-2 rounded-xl text-gray-800 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#0b3c82]/20"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                  className={`transition-all duration-300 origin-center`}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
          }`}
        >
          <nav className="pb-6 border-t border-gray-100 flex flex-col space-y-2 pt-4">
            <a href="/" className="block py-2.5 px-4 text-gray-800 hover:text-[#0b3c82] hover:bg-blue-50/50 rounded-xl font-sans font-medium transition-colors">Home</a>
            <a href="/chi-siamo" className="block py-2.5 px-4 text-gray-800 hover:text-[#0b3c82] hover:bg-blue-50/50 rounded-xl font-sans font-medium transition-colors">Chi siamo</a>
            
            <div className="px-4 py-2">
              <span className="block text-xs font-bold tracking-widest text-gray-400 uppercase mb-2">Cosa facciamo</span>
              <div className="flex flex-col space-y-1 pl-4 border-l-2 border-gray-100">
                <a href="/servizi" className="block py-2 px-4 text-gray-600 hover:text-[#0b3c82] hover:bg-blue-50/50 rounded-xl font-sans font-medium transition-colors">Servizi</a>
                <a href="/certificazioni" className="block py-2 px-4 text-gray-600 hover:text-[#0b3c82] hover:bg-blue-50/50 rounded-xl font-sans font-medium transition-colors">Certificazioni</a>
              </div>
            </div>
            
            <a href="/progetti" className="block py-2.5 px-4 text-gray-800 hover:text-[#0b3c82] hover:bg-blue-50/50 rounded-xl font-sans font-medium transition-colors">Progetti</a>
            <a href="/contatti" className="block py-2.5 px-4 text-gray-800 hover:text-[#0b3c82] hover:bg-blue-50/50 rounded-xl font-sans font-medium transition-colors">Contatti</a>
            
            <div className="pt-4 px-4">
              <a href="/sostienici" className="flex items-center justify-center w-full bg-[#0b3c82] text-white rounded-xl py-3.5 font-bold hover:bg-[#e30613] transition-colors shadow-md text-base">
                Sostienici Ora
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
