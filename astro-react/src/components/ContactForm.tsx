import React, { useState } from 'react';

export default function ContactForm({ isCompact = false }: { isCompact?: boolean }) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  const FormContent = () => {
    if (status === 'success') {
      return (
        <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-8 md:p-12 text-center h-full flex flex-col items-center justify-center min-h-[400px]">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-3xl mb-4">
            ✓
          </div>
          <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-2 font-sans">Messaggio Inviato!</h3>
          <p className="text-gray-600 text-lg font-sans">
            Grazie per averci contattato. Ti risponderemo il prima possibile all'indirizzo email che ci hai fornito.
          </p>
          <button 
            onClick={() => setStatus('idle')}
            className="mt-8 text-[#0b3c82] font-semibold font-sans hover:underline"
          >
            Invia un altro messaggio
          </button>
        </div>
      );
    }

    return (
      <div className={`bg-white rounded-3xl p-6 md:p-12 shadow-sm border border-gray-100/80 relative overflow-hidden h-full ${isCompact ? '' : 'shadow-xl shadow-gray-100'}`}>
        {isCompact && <h3 className="text-2xl font-display font-bold text-gray-900 mb-6 font-sans">Scrivici un messaggio</h3>}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-800 mb-2 font-sans">Nome e Cognome *</label>
              <input 
                type="text" 
                id="name" 
                required
                className="w-full px-5 py-4 bg-gray-50/50 hover:bg-gray-50 focus:bg-white rounded-2xl border border-gray-200 focus:ring-2 focus:ring-[#0b3c82]/20 focus:border-[#0b3c82] transition-colors outline-none font-sans text-sm"
                placeholder="Mario Rossi"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-800 mb-2 font-sans">Telefono</label>
              <input 
                type="tel" 
                id="phone" 
                className="w-full px-5 py-4 bg-gray-50/50 hover:bg-gray-50 focus:bg-white rounded-2xl border border-gray-200 focus:ring-2 focus:ring-[#0b3c82]/20 focus:border-[#0b3c82] transition-colors outline-none font-sans text-sm"
                placeholder="333 1234567"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-2 font-sans">Email *</label>
            <input 
              type="email" 
              id="email" 
              required
              className="w-full px-5 py-4 bg-gray-50/50 hover:bg-gray-50 focus:bg-white rounded-2xl border border-gray-200 focus:ring-2 focus:ring-[#0b3c82]/20 focus:border-[#0b3c82] transition-colors outline-none font-sans text-sm"
              placeholder="mario.rossi@email.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-800 mb-2 font-sans">Messaggio *</label>
            <textarea 
              id="message" 
              rows={isCompact ? 4 : 5}
              required
              className="w-full px-5 py-4 bg-gray-50/50 hover:bg-gray-50 focus:bg-white rounded-2xl border border-gray-200 focus:ring-2 focus:ring-[#0b3c82]/20 focus:border-[#0b3c82] transition-colors outline-none font-sans resize-none text-sm"
              placeholder="Scrivi qui la tua richiesta per prenotazioni o informazioni..."
            ></textarea>
          </div>

          <p className="text-xs text-gray-400 leading-normal font-sans">
            Inviando questo modulo acconsenti al trattamento dei dati personali in conformità con la nostra Privacy Policy.
          </p>

          <div className="pt-2">
            <button 
              type="submit" 
              disabled={status === 'submitting'}
              className="w-full bg-[#0b3c82] hover:bg-[#082a5c] text-white font-bold py-4 px-8 rounded-2xl transition-all shadow-md hover:shadow-lg disabled:opacity-70 flex justify-center items-center gap-2 tracking-wide font-sans text-base"
            >
              {status === 'submitting' ? 'Invio in corso...' : 'Invia Messaggio'}
              {status !== 'submitting' && (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              )}
            </button>
          </div>
        </form>
      </div>
    );
  };

  if (isCompact) {
    return <FormContent />;
  }

  // Sezione estesa per la Homepage
  return (
    <section id="info" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative background blurs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-400/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-red-400/5 rounded-full blur-3xl -z-10"></div>

      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-widest text-[#0b3c82] uppercase bg-blue-50 px-3.5 py-1.5 rounded-full font-sans">
              Contatti
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mt-4 mb-4 tracking-tight">
              Richiedi Informazioni
            </h2>
            <p className="text-lg text-gray-600 max-w-lg mx-auto leading-relaxed font-sans">
              Siamo qui per rispondere alle tue domande e supportarti nel tuo percorso con professionalità e riservatezza.
            </p>
          </div>

          <FormContent />
        </div>
      </div>
    </section>
  );
}
