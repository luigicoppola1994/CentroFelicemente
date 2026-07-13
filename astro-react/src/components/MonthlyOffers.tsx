export default function MonthlyOffers() {
  const offers = [
    {
      title: 'Pacchetto Riabilitazione',
      originalPrice: '€300',
      price: '€199',
      description: '5 sedute di fisioterapia + 2 valutazioni',
      icon: '🏥'
    },
    {
      title: 'Check-up Completo',
      originalPrice: '€250',
      price: '€149',
      description: 'Visita specialistica + esami di laboratorio',
      icon: '🩺'
    },
    {
      title: 'Percorso Psicologico',
      originalPrice: '€400',
      price: '€279',
      description: '4 sedute di psicoterapia individuale',
      icon: '🧠'
    },
    {
      title: 'Pacchetto Logopedia',
      originalPrice: '€200',
      price: '€129',
      description: '6 sedute di terapia del linguaggio',
      icon: '💬'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            Proposte Speciali
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Piani personalizzati per accompagnarti nel tuo percorso di benessere
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-900 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-800 hover:border-[#0b3c82] dark:hover:border-[#5ac8fa] flex flex-col h-full overflow-hidden"
            >
              {/* Top border accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0b3c82] to-[#5ac8fa]"></div>
              
              <div className="p-8 flex flex-col flex-grow">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-2xl mb-6">
                  {offer.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-3">
                  {offer.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {offer.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-gray-400 dark:text-gray-500 text-sm line-through mr-2">
                    {offer.originalPrice}
                  </span>
                  <span className="text-3xl font-display font-bold text-[#0b3c82] dark:text-[#5ac8fa]">
                    {offer.price}
                  </span>
                </div>

                {/* CTA */}
                <a
                  href="/prenota"
                  className="block w-full text-center py-3 rounded-xl font-semibold text-sm bg-[#0b3c82] dark:bg-[#5ac8fa] text-white hover:bg-[#0a2d5f] dark:hover:bg-[#4aa0d8] transition-colors mt-auto"
                >
                  Richiedi Informazioni
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
