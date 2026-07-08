export default function Services() {
  const services = [
    {
      title: 'Diagnosi',
      image: '/immagine-per-diagnosi-1.jpg',
      link: '/diagnosi',
      description: 'Valutazioni cliniche e diagnostiche da specialisti qualificati.'
    },
    {
      title: 'Certificazioni',
      image: '/CERTIFICAZIONIpng-2.jpg',
      link: '/certificazioni',
      description: 'Rilascio di certificazioni cliniche ufficiali e autorizzazioni DSA.'
    },
    {
      title: 'Assistenza Domiciliare',
      image: '/assdom-1.png',
      link: '/assistenza-domiciliare',
      description: 'Supporto riabilitativo e specialistico a domicilio.'
    },
    {
      title: 'Servizi',
      image: '/IMMAGINE-per-riempire-la-sezione-servizi.png',
      link: '/servizi',
      description: 'Terapie individuali e percorsi di benessere su misura per te.'
    },
  ];

  return (
    <section id="servizi" className="pt-8 pb-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4 tracking-tight">
            I Nostri Servizi
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Offriamo una gamma completa di interventi e percorsi terapeutici per accompagnare ogni persona verso il proprio benessere.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <a
              key={index}
              href={service.link}
              className="group relative flex flex-col justify-end min-h-[380px] rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 bg-gray-900"
            >
              {/* Background Image with Zoom Effect */}
              <div className="absolute inset-0 z-0 bg-gray-950">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-70 group-hover:opacity-50"
                />
                {/* Elegant overlay: dark gray-black gradient for readability without blue tint */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/95 via-gray-900/60 to-transparent"></div>
              </div>

              {/* Card content - Always visible */}
              <div className="relative z-10 p-6 flex flex-col">
                {/* Title - fixed height so all cards align */}
                <h3 className="text-lg font-display font-bold text-white leading-tight min-h-[48px] flex items-end" title={service.title}>
                  {service.title}
                </h3>

                {/* Description - fixed height for uniform alignment */}
                <p className="text-white/75 text-sm leading-relaxed mt-2 min-h-[40px]">
                  {service.description}
                </p>


                {/* Animated CTA button */}
                <div className="mt-4 flex justify-end">
                  <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-semibold tracking-wide border border-white/20 group-hover:bg-white group-hover:text-gray-900 group-hover:border-white transition-all duration-500">
                    <span>Scopri di più</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
