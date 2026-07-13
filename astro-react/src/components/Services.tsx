export default function Services() {
  const categories = [
    {
      name: 'RIABILITAZIONE',
      services: [
        {
          title: 'Logopedia',
          image: '/immagine-per-diagnosi-1.jpg',
          link: '/logopedia',
          description: 'Terapia del linguaggio per disturbi della comunicazione.',
          gradient: 'from-blue-500 to-cyan-400'
        },
        {
          title: 'TPNEE',
          image: '/CERTIFICAZIONIpng-2.jpg',
          link: '/tpnee',
          description: 'Trattamento Psicomotorio dell\'Età Evolutiva - Riabilitazione per bambini.',
          gradient: 'from-purple-500 to-pink-400'
        },
        {
          title: 'Fisioterapia',
          image: '/assdom-1.png',
          link: '/fisioterapia',
          description: 'Trattamenti riabilitativi per recuperare funzionalità e mobilità.',
          gradient: 'from-green-500 to-emerald-400'
        },
        {
          title: 'ABA',
          image: '/IMMAGINE-per-riempire-la-sezione-servizi.png',
          link: '/aba',
          description: 'Analisi Comportamentale Applicata per disturbi dello spettro autistico.',
          gradient: 'from-orange-500 to-amber-400'
        }
      ]
    },
    {
      name: 'MEDICINA',
      services: [
        {
          title: 'Neuropsichiatria Infantile',
          image: '/immagine-per-diagnosi-1.jpg',
          link: '/neuropsichiatria-infantile',
          description: 'Diagnosi e certificazioni neuropsichiatriche per bambini e adolescenti.',
          gradient: 'from-indigo-500 to-violet-400'
        },
        {
          title: 'Diagnosi Specialistiche',
          image: '/CERTIFICAZIONIpng-2.jpg',
          link: '/diagnosi-specialistiche',
          description: 'Valutazioni cliniche e diagnostiche da specialisti qualificati.',
          gradient: 'from-teal-500 to-cyan-400'
        },
        {
          title: 'Ecografie ed ECG',
          image: '/assdom-1.png',
          link: '/ecografie-ecg',
          description: 'Esami diagnostici strumentali per la valutazione cardiaca e interna.',
          gradient: 'from-red-500 to-rose-400'
        },
        {
          title: 'Esami di Laboratorio',
          image: '/IMMAGINE-per-riempire-la-sezione-servizi.png',
          link: '/esami-laboratorio',
          description: 'Analisi cliniche complete per monitorare lo stato di salute.',
          gradient: 'from-sky-500 to-blue-400'
        }
      ]
    },
    {
      name: 'PSICOLOGIA E PSICOTERAPIA',
      services: [
        {
          title: 'Psicoterapia Individuale',
          image: '/immagine-per-diagnosi-1.jpg',
          link: '/psicoterapia-individuale',
          description: 'Percorsi terapeutici personalizzati per il benessere psicologico.',
          gradient: 'from-violet-500 to-purple-400'
        },
        {
          title: 'Terapia di Coppia',
          image: '/CERTIFICAZIONIpng-2.jpg',
          link: '/terapia-coppia',
          description: 'Supporto per migliorare la comunicazione e la relazione di coppia.',
          gradient: 'from-pink-500 to-rose-400'
        },
        {
          title: 'Terapia Familiare',
          image: '/assdom-1.png',
          link: '/terapia-familiare',
          description: 'Interventi sistemici per risolvere conflitti familiari.',
          gradient: 'from-fuchsia-500 to-pink-400'
        },
        {
          title: 'Supporto Genitori',
          image: '/IMMAGINE-per-riempire-la-sezione-servizi.png',
          link: '/supporto-genitori',
          description: 'Orientamento e supporto per genitori in difficoltà.',
          gradient: 'from-amber-500 to-orange-400'
        }
      ]
    }
  ];

  return (
    <section id="servizi" className="pt-8 pb-24 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            I Nostri Servizi
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Offriamo una gamma completa di interventi e percorsi terapeutici per accompagnare ogni persona verso il proprio benessere.
          </p>
        </div>

        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-20">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-[#0b3c82] dark:text-white mb-10 tracking-tight flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-[#0b3c82] to-[#5ac8fa] rounded-full"></span>
              {category.name}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.services.map((service, serviceIndex) => (
                <a
                  key={serviceIndex}
                  href={service.link}
                  className="group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-[#0b3c82] dark:hover:border-[#5ac8fa] flex flex-col h-full"
                >
                  {/* Image */}
                  <div className="relative h-40 overflow-hidden flex-shrink-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Title */}
                    <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-3">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                      {service.description}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-[#0b3c82] dark:text-[#5ac8fa] font-semibold text-sm transition-all">
                      <span>Scopri di più</span>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
