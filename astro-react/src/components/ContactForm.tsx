import React, { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simula l'invio del modulo
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-8 text-center h-full flex flex-col items-center justify-center">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-3xl mb-4">
          ✓
        </div>
        <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">Messaggio Inviato!</h3>
        <p className="text-gray-600">
          Grazie per averci contattato. Ti risponderemo il prima possibile all'indirizzo email che ci hai fornito.
        </p>
        <button 
          onClick={() => setStatus('idle')}
          className="mt-6 text-[#0b3c82] font-semibold hover:underline"
        >
          Invia un altro messaggio
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8 shadow-sm relative overflow-hidden h-full">
      <h3 className="text-2xl font-display font-bold text-gray-900 mb-6 font-sans">Scrivici un messaggio</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome e Cognome *</label>
            <input 
              type="text" 
              id="name" 
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#0b3c82]/20 focus:border-[#0b3c82] transition-colors outline-none font-sans"
              placeholder="Mario Rossi"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefono</label>
            <input 
              type="tel" 
              id="phone" 
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#0b3c82]/20 focus:border-[#0b3c82] transition-colors outline-none font-sans"
              placeholder="333 1234567"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
          <input 
            type="email" 
            id="email" 
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#0b3c82]/20 focus:border-[#0b3c82] transition-colors outline-none font-sans"
            placeholder="mario.rossi@email.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Messaggio *</label>
          <textarea 
            id="message" 
            rows={4}
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#0b3c82]/20 focus:border-[#0b3c82] transition-colors outline-none font-sans resize-none"
            placeholder="Scrivi qui la tua richiesta per prenotazioni o informazioni..."
          ></textarea>
        </div>

        <div className="pt-2">
          <button 
            type="submit" 
            disabled={status === 'submitting'}
            className="w-full bg-[#0b3c82] hover:bg-[#082a5c] text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-md hover:shadow-lg disabled:opacity-70 flex justify-center items-center gap-2"
          >
            {status === 'submitting' ? 'Invio in corso...' : 'Invia Messaggio'}
            {status !== 'submitting' && (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            )}
          </button>
        </div>
        
        <p className="text-xs text-gray-400 mt-4 text-center">
          Inviando il modulo, accetti il trattamento dei dati personali ai sensi del GDPR.
        </p>
      </form>
    </div>
  );
}
