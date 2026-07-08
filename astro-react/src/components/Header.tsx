import { useState, useEffect } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Sync state with actual DOM class on mount
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <header className="bg-white/80 dark:bg-gray-950/90 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 transition-colors duration-300">
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
            <a href="/" className="text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-blue-400 transition-colors font-sans font-medium">Home</a>
            <a href="/chi-siamo" className="text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-blue-400 transition-colors font-sans font-medium">Chi siamo</a>
            <div className="relative group">
              <button className="text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-blue-400 transition-colors font-sans font-medium flex items-center">
                Cosa facciamo
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-900 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-200 dark:border-gray-700">
                <a href="/servizi" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary font-sans">Servizi</a>
                <a href="/certificazioni" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary font-sans">Certificazioni</a>
              </div>
            </div>
            <a href="/progetti" className="text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-blue-400 transition-colors font-sans font-medium">Progetti</a>
            <a href="/#contatti" className="text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-blue-400 transition-colors font-sans font-medium">Contatti</a>

            {/* Dark mode toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Cambia tema"
              className="relative w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 text-gray-700 dark:text-yellow-300"
            >
              {/* Sun icon (shown in dark mode) */}
              <svg
                className={`w-5 h-5 absolute transition-all duration-300 ${isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-50'}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
              </svg>
              {/* Moon icon (shown in light mode) */}
              <svg
                className={`w-5 h-5 absolute transition-all duration-300 ${isDark ? 'opacity-0 -rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            </button>

            <a href="/sostienici" className="btn-primary">Sostienici</a>
          </nav>

          {/* Mobile: toggle + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            {/* Dark mode toggle mobile */}
            <button
              onClick={toggleTheme}
              aria-label="Cambia tema"
              className="w-9 h-9 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-yellow-300 transition-all duration-300"
            >
              {isDark ? (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
              )}
            </button>

            {/* Hamburger */}
            <button
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6 text-gray-900 dark:text-gray-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-100 dark:border-gray-800 pt-4">
            <div className="flex flex-col space-y-4">
              <a href="/" className="text-gray-900 dark:text-gray-100 hover:text-primary font-sans font-medium">Home</a>
              <a href="/chi-siamo" className="text-gray-900 dark:text-gray-100 hover:text-primary font-sans font-medium">Chi siamo</a>
              <a href="/servizi" className="text-gray-900 dark:text-gray-100 hover:text-primary font-sans font-medium">Servizi</a>
              <a href="/certificazioni" className="text-gray-900 dark:text-gray-100 hover:text-primary font-sans font-medium">Certificazioni</a>
              <a href="/progetti" className="text-gray-900 dark:text-gray-100 hover:text-primary font-sans font-medium">Progetti</a>
              <a href="/#contatti" className="text-gray-900 dark:text-gray-100 hover:text-primary font-sans font-medium">Contatti</a>
              <a href="/sostienici" className="btn-primary text-center">Sostienici</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
