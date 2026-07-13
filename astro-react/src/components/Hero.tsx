import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      bgColor: 'bg-gradient-to-br from-[#0b3c82] to-[#1a5bb8]',
      title: 'Professionalità e passione al servizio di chi ha bisogno',
      subtitle: 'Centro Felicemente - Accompagniamo con dedizione ogni persona verso il proprio benessere'
    },
    {
      bgColor: 'bg-gradient-to-br from-[#e30613] to-[#ff4d4d]',
      title: 'Eccellenza nei servizi medici specializzati',
      subtitle: 'Un team di professionisti al tuo fianco per ogni esigenza'
    },
    {
      bgColor: 'bg-gradient-to-br from-[#10b981] to-[#34d399]',
      title: 'Innovazione e cura per il tuo benessere',
      subtitle: 'Metodologie all\'avanguardia per risultati concreti'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden">
      {/* Slides */}
      <div className="relative h-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide 
                ? 'translate-x-0 opacity-100' 
                : index === (currentSlide - 1 + slides.length) % slides.length
                  ? '-translate-x-full opacity-0'
                  : 'translate-x-full opacity-0'
            }`}
          >
            <div className={`w-full h-full ${slide.bgColor} flex items-center justify-center`}>
              <div className="container-custom text-center text-white">
                <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight tracking-tight mb-6">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl opacity-90 mb-8">
                  {slide.subtitle}
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a href="/#servizi" className="btn-primary bg-white text-[#0b3c82] hover:bg-gray-100">
                    Scopri i nostri servizi
                  </a>
                  <a href="/#contatti" className="btn-secondary bg-white/20 text-white hover:bg-white/30 border border-white/30">
                    Contattaci
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
}

