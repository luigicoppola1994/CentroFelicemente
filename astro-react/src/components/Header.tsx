import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-lg border-b border-gray-200 sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <img 
              src="/centrofelicementelogo.png" 
              alt="Centro Felicemente" 
              className="h-12 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-900 hover:text-primary transition-colors font-sans font-medium">Home</a>
            <a href="/chi-siamo" className="text-gray-900 hover:text-primary transition-colors font-sans font-medium">Chi siamo</a>
            <div className="relative group">
              <button className="text-gray-900 hover:text-primary transition-colors font-sans font-medium flex items-center">
                Cosa facciamo
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-200">
                <a href="/servizi" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary font-sans">Servizi</a>
                <a href="/certificazioni" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary font-sans">Certificazioni</a>
              </div>
            </div>
            <a href="/progetti" className="text-gray-900 hover:text-primary transition-colors font-sans font-medium">Progetti</a>
            <a href="/#contatti" className="text-gray-900 hover:text-primary transition-colors font-sans font-medium">Contatti</a>
            <a href="/sostienici" className="btn-primary">Sostienici</a>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <a href="/" className="text-gray-900 hover:text-primary transition-colors font-sans font-medium">Home</a>
              <a href="/chi-siamo" className="text-gray-900 hover:text-primary transition-colors font-sans font-medium">Chi siamo</a>
              <a href="/servizi" className="text-gray-900 hover:text-primary transition-colors font-sans font-medium">Servizi</a>
              <a href="/certificazioni" className="text-gray-900 hover:text-primary transition-colors font-sans font-medium">Certificazioni</a>
              <a href="/progetti" className="text-gray-900 hover:text-primary transition-colors font-sans font-medium">Progetti</a>
              <a href="/#contatti" className="text-gray-900 hover:text-primary transition-colors font-sans font-medium">Contatti</a>
              <a href="/sostienici" className="btn-primary text-center">Sostienici</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
