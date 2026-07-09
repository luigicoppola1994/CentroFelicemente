import { useState, useRef, useEffect } from 'react';

// ─── Knowledge Base ───────────────────────────────────────────────────────────
const FAQS: { tags: string[]; question: string; answer: string }[] = [
  {
    tags: ['logopedia', 'logopedista', 'linguaggio', 'comunicazione', 'parlare'],
    question: `Cosa tratta la Logopedia?`,
    answer: `In età evolutiva la logopedia tratta tutti i disturbi legati alla comunicazione, l'evoluzione del linguaggio verbale e scritto attraverso il gioco guidato. In età adulta si interviene con terapie mirate su patologie specifiche. È possibile anche un trattamento di tipo mio-funzionale per riequilibrare i muscoli oro-facciali.`,
  },
  {
    tags: ['psicomotricità', 'psicomotricista', 'motorio', 'movimento', 'bambino'],
    question: `Cos'è la Psicomotricità?`,
    answer: `La psicomotricità è una disciplina che considera l'unione del corpo e della mente nello sviluppo del bambino. Attraverso il gioco e il movimento si lavora su difficoltà emotive, relazionali e motorie.`,
  },
  {
    tags: ['psicologia', 'psicologo', 'sostegno', 'psicologico', 'adulti', 'ansia', 'depressione'],
    question: `Offrite sostegno psicologico?`,
    answer: `Sì, offriamo sostegno psicologico per bambini, adolescenti e adulti. I nostri psicologi lavorano su difficoltà emotive, ansia, depressione, difficoltà relazionali e percorsi di crescita personale.`,
  },
  {
    tags: ['psicoterapia', 'psicoterapeuta', 'terapia'],
    question: `Cos'è la Psicoterapia?`,
    answer: `La psicoterapia è un percorso terapeutico che, attraverso tecniche evidence-based, aiuta a risolvere blocchi emotivi, traumi e difficoltà psicologiche strutturate. Offriamo approcci cognitivo-comportamentali e altri.`,
  },
  {
    tags: ['fisioterapia', 'fisioterapista', 'riabilitazione', 'fisico', 'dolore'],
    question: `Fate fisioterapia?`,
    answer: `Sì, offriamo servizi di fisioterapia per adulti e bambini, con trattamenti riabilitativi personalizzati per patologie muscolari, articolari e neurologiche.`,
  },
  {
    tags: ['dsa', 'dislessia', 'discalculia', 'disortrografia', 'disgrafia', 'apprendimento', 'disturbo'],
    question: `Cos'è la Certificazione DSA?`,
    answer: `La Certificazione DSA è un documento che certifica la presenza di un Disturbo Specifico dell'Apprendimento (dislessia, discalculia, disgrafia, disortrografia). Viene redatta da un'équipe composta da Logopedista, Psicologo e Neuropsichiatra Infantile (NPI).`,
  },
  {
    tags: ['adhd', 'deficit', 'attenzione', 'iperattività', 'progetto adhd'],
    question: `Avete un progetto per l'ADHD?`,
    answer: `Sì! Il nostro Progetto ADHD è rivolto alle scuole e propone due seminari per docenti (4 ore totali) e un incontro per i genitori. Si approfondisce il disturbo, i segnali d'allarme e le strategie pratiche da usare in classe e in famiglia.`,
  },
  {
    tags: ['autismo', 'aba', 'spettro autistico', 'spazio sollievo', 'metodo aba'],
    question: `Avete supporto per l'autismo?`,
    answer: `Sì, offriamo il progetto "Spazio Sollievo" ogni due sabati al mese, con attività strutturate per ragazzi con disturbo dello spettro autistico e supporto alle famiglie. Usiamo metodologie ABA (Applied Behavior Analysis) evidence-based.`,
  },
  {
    tags: ['feuerstein', 'cognitivo', 'potenziamento', 'metodo'],
    question: `Cosa è il Metodo Feuerstein?`,
    answer: `Il metodo Feuerstein è un approccio di potenziamento cognitivo che mira a sviluppare le capacità di apprendimento della persona attraverso la mediazione. È utile in caso di difficoltà cognitive, DSA o semplicemente per potenziare le abilità intellettive.`,
  },
  {
    tags: ['mediazione', 'familiare', 'genitori', 'separazione', 'conflitto'],
    question: `Fate mediazione familiare?`,
    answer: `Sì, offriamo mediazione familiare dedicata ai genitori che devono affrontare il loro ruolo parentale pur in situazione conflittuale (ad esempio in caso di separazione), favorendo il benessere dei figli.`,
  },
  {
    tags: ['screening', 'scuola', 'infanzia', 'primaria', 'prerequisiti', '5 anni'],
    question: `Cos'è il progetto Screening Scuola?`,
    answer: `Il progetto di screening è rivolto alla Scuola dell'Infanzia (5 anni) e alla Scuola Primaria. Si valutano i prerequisiti all'apprendimento per individuare precocemente bambini a rischio di DSA. Include un incontro con le insegnanti e la restituzione individuale alle famiglie.`,
  },
  {
    tags: ['orari', 'orario', 'apertura', 'quando', 'disponibilità'],
    question: `Quali sono gli orari?`,
    answer: `Il Centro Felicemente è aperto dal Lunedì al Sabato, dalle ore 8:00 alle ore 20:00. Riceviamo esclusivamente su appuntamento.`,
  },
  {
    tags: ['dove', 'sede', 'indirizzo', 'posizione', 'cusago', 'trovare', 'parcheggio'],
    question: `Dove si trova il centro?`,
    answer: `Il Centro Felicemente si trova in Viale Europa 70, 20090 Cusago (MI), facilmente raggiungibile in auto. Puoi trovare la mappa interattiva nella pagina Contatti.`,
  },
  {
    tags: ['telefono', 'contatto', 'chiamare', 'email', 'scrivere', 'contatti'],
    question: `Come vi contatto?`,
    answer: `Puoi chiamarci al 02 3595 4902 (lun-sab 8:00-20:00) oppure scriverci a info@centrofelicemente.it. Per informazioni sui costi o per prenotare, puoi anche compilare il form nella pagina Contatti.`,
  },
  {
    tags: ['5x1000', 'donazione', 'sostienici', 'iban', 'bonifico', 'aiutare'],
    question: `Come posso sostenervi?`,
    answer: `Puoi destinarci il tuo 5x1000 indicando il nostro codice fiscale 12087780966 nella dichiarazione dei redditi (730 o Modello Unico). Oppure puoi fare una donazione tramite bonifico bancario:\n\nIBAN: IT38T0306909496100000015837\nBanca Intesa – Cooperativa Sociale Centro Felicemente.`,
  },
  {
    tags: ['neuropsicologia', 'neuropsichiatria', 'npi', 'valutazione neuropsicologica'],
    question: `Offrite Neuropsicologia/Neuropsichiatria infantile?`,
    answer: `Sì, offriamo servizi di Neuropsicologia e Neuropsichiatria Infantile, con particolare attenzione ai problemi di apprendimento come DSA e BES. Il percorso diagnostico include la valutazione multidisciplinare da parte dell'équipe del centro.`,
  },
];

// Quick-access categories shown as chips
const CHIPS = [
  { label: '🗣️ Logopedia', tags: ['logopedia'] },
  { label: '🧠 Psicologia', tags: ['psicologia', 'psicoterapia'] },
  { label: '📚 DSA', tags: ['dsa', 'apprendimento'] },
  { label: '♾️ Autismo', tags: ['autismo', 'aba'] },
  { label: '👨‍👩‍👧 ADHD', tags: ['adhd'] },
  { label: '📞 Contatti', tags: ['contatti', 'telefono', 'dove', 'sede'] },
  { label: '❤️ Donazioni', tags: ['sostienici', '5x1000'] },
];

function getBestMatches(query: string): typeof FAQS {
  const q = query.toLowerCase();
  const scored = FAQS.map((faq) => {
    let score = 0;
    faq.tags.forEach((tag) => {
      if (q.includes(tag)) score += 3;
    });
    faq.question
      .toLowerCase()
      .split(' ')
      .forEach((word) => {
        if (q.includes(word) && word.length > 3) score += 1;
      });
    return { faq, score };
  });
  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((s) => s.faq);
}

function getMatchingFAQs(tags: string[]): typeof FAQS {
  return FAQS.filter((faq) => faq.tags.some((t) => tags.includes(t))).slice(0, 4);
}

// ─── Types ────────────────────────────────────────────────────────────────────
type Msg = {
  id: number;
  role: 'bot' | 'user';
  text: string;
  suggestions?: typeof FAQS;
  chips?: typeof CHIPS;
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [isNearFooter, setIsNearFooter] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    {
      id: 0,
      role: 'bot',
      text: 'Ciao! 👋 Sono l\'assistente virtuale del **Centro Felicemente**. Posso risponderti sulle nostre terapie, progetti e informazioni pratiche. Scegli un argomento o scrivi la tua domanda!',
      chips: CHIPS,
    },
  ]);
  const [input, setInput] = useState('');
  const [counter, setCounter] = useState(1);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Rileva lo scroll per cambiare colore del bottone vicino al footer
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;

      // Se si è a meno di 350px dalla fine della pagina, diventiamo bianchi
      if (documentHeight - scrollPosition < 350) {
        setIsNearFooter(true);
      } else {
        setIsNearFooter(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // controllo iniziale
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Ascolta apertura/chiusura menu mobile
  useEffect(() => {
    const handleMenuToggle = (e: Event) => {
      setIsMobileMenuOpen((e as CustomEvent).detail.open);
    };
    const handleOpenChat = () => {
      setOpen(true);
    };
    window.addEventListener('mobileMenuToggle', handleMenuToggle);
    window.addEventListener('openChatBot', handleOpenChat);
    return () => {
      window.removeEventListener('mobileMenuToggle', handleMenuToggle);
      window.removeEventListener('openChatBot', handleOpenChat);
    };
  }, []);

  const addMsg = (msg: Omit<Msg, 'id'>) => {
    setCounter((c) => {
      const id = c + 1;
      setMessages((prev) => [...prev, { ...msg, id }]);
      return id;
    });
  };

  const handleSend = (text?: string) => {
    const query = (text ?? input).trim();
    if (!query) return;
    setInput('');

    addMsg({ role: 'user', text: query });

    setTimeout(() => {
      const matches = getBestMatches(query);
      if (matches.length === 0) {
        addMsg({
          role: 'bot',
          text: 'Non ho trovato una risposta precisa alla tua domanda. Ti invito a **contattarci direttamente** compilando il form oppure chiamandoci al **02 3595 4902** (lun-sab 8:00-20:00).',
        });
      } else if (matches.length === 1) {
        addMsg({
          role: 'bot',
          text: matches[0].answer,
          chips: CHIPS,
        });
      } else {
        addMsg({
          role: 'bot',
          text: 'Ho trovato alcune risposte che potrebbero interessarti. Quale si avvicina alla tua domanda?',
          suggestions: matches,
        });
      }
    }, 450);
  };

  const handleChipClick = (chip: (typeof CHIPS)[0]) => {
    const matched = getMatchingFAQs(chip.tags);
    addMsg({ role: 'user', text: chip.label });
    setTimeout(() => {
      if (matched.length === 0) {
        addMsg({
          role: 'bot',
          text: 'Non ho trovato informazioni su questo argomento. Per maggiori dettagli puoi contattarci al **02 3595 4902** o usare il form contatti.',
        });
      } else if (matched.length === 1) {
        addMsg({ role: 'bot', text: matched[0].answer, chips: CHIPS });
      } else {
        addMsg({
          role: 'bot',
          text: 'Ecco le domande più frequenti su questo argomento:',
          suggestions: matched,
        });
      }
    }, 350);
  };

  const handleSuggestionClick = (faq: (typeof FAQS)[0]) => {
    addMsg({ role: 'user', text: faq.question });
    setTimeout(() => {
      addMsg({ role: 'bot', text: faq.answer, chips: CHIPS });
    }, 300);
  };

  const renderText = (text: string) =>
    text
      .split(/(\*\*[^*]+\*\*)/)
      .map((part, i) =>
        part.startsWith('**') && part.endsWith('**') ? (
          <strong key={i}>{part.slice(2, -2)}</strong>
        ) : (
          <span key={i}>{part}</span>
        )
      );

  return (
    <>
      <style>{`
        .chatbot-window {
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 360px;
          max-width: calc(100vw - 40px);
          height: 600px;
          max-height: calc(100vh - 40px);
          background-color: #fff;
          border-radius: 20px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.15);
          display: flex;
          flex-direction: column;
          z-index: 99999;
          overflow: hidden;
          font-family: 'Inter', sans-serif;
          border: 1px solid #e5e7eb;
          transform: translateY(0);
          opacity: 1;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }

        .chatbot-window-hidden {
          transform: translateY(20px);
          opacity: 0;
          pointer-events: none;
        }

        @media (max-width: 640px) {
          .chatbot-window {
            bottom: 0;
            right: 0;
            width: 100vw;
            max-width: 100vw;
            height: 100dvh;
            max-height: 100dvh;
            border-radius: 0;
            border: none;
            padding-top: env(safe-area-inset-top, 0);
          }
          @supports not (height: 100dvh) {
            .chatbot-window {
              height: 100%;
              position: fixed;
              top: 0;
              bottom: 0;
            }
          }
        }
      `}</style>

      {/* Floating button - Nascosto quando la chat è aperta o il menu mobile è aperto */}
      {!open && !isMobileMenuOpen && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Apri assistente virtuale"
          style={{
            position: 'fixed',
            bottom: '28px',
            right: '28px',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: isNearFooter ? '#ffffff' : '#0b3c82',
            color: isNearFooter ? '#0b3c82' : '#ffffff',
            border: 'none',
            boxShadow: isNearFooter ? '0 8px 24px rgba(0,0,0,0.15)' : '0 8px 24px rgba(11,60,130,0.35)',
            cursor: 'pointer',
            zIndex: 99998,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '26px',
            transition: 'all 0.3s ease',
          }}
          onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; }}
          onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
        >
          💬
        </button>
      )}

      {/* Chat window */}
      <div className={open ? 'chatbot-window' : 'chatbot-window chatbot-window-hidden'}>
        {/* Header con X di chiusura */}
        <div
          style={{
            backgroundColor: '#0b3c82',
            color: '#fff',
            padding: '16px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            flexShrink: 0,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                overflow: 'hidden',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}
            >
              <img src="/faviconcentro.jpg" alt="Logo Centro" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            <div>
              <p style={{ fontWeight: 700, fontSize: '14px', margin: 0 }}>Assistente</p>
              <p style={{ fontSize: '11px', opacity: 0.75, margin: 0 }}>Centro Felicemente</p>
            </div>
          </div>

          <button
            onClick={() => setOpen(false)}
            aria-label="Chiudi"
            style={{
              background: 'transparent',
              border: 'none',
              color: '#fff',
              fontSize: '20px',
              cursor: 'pointer',
              padding: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: 0.8,
              transition: 'opacity 0.2s',
            }}
            onMouseOver={(e) => { e.currentTarget.style.opacity = '1'; }}
            onMouseOut={(e) => { e.currentTarget.style.opacity = '0.8'; }}
          >
            ✕
          </button>
        </div>

        {/* Messages */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            backgroundColor: '#f8faff',
          }}
        >
          {messages.map((msg) => (
            <div key={msg.id} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {/* Bubble */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
                }}
              >
                <div
                  style={{
                    maxWidth: '85%',
                    padding: '10px 14px',
                    borderRadius: msg.role === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                    backgroundColor: msg.role === 'user' ? '#0b3c82' : '#fff',
                    color: msg.role === 'user' ? '#fff' : '#1e293b',
                    fontSize: '13px',
                    lineHeight: '1.6',
                    boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                    whiteSpace: 'pre-line',
                  }}
                >
                  {renderText(msg.text)}
                </div>
              </div>

              {/* Suggested FAQ buttons */}
              {msg.suggestions && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', paddingLeft: '4px' }}>
                  {msg.suggestions.map((faq, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => handleSuggestionClick(faq)}
                      style={{
                        textAlign: 'left',
                        padding: '9px 14px',
                        borderRadius: '12px',
                        border: '1.5px solid #dbeafe',
                        backgroundColor: '#eff6ff',
                        color: '#0b3c82',
                        fontSize: '12.5px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        fontFamily: 'Inter, sans-serif',
                        lineHeight: '1.4',
                        transition: 'background-color 0.15s',
                      }}
                      onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#dbeafe'; }}
                      onMouseOut={(e) => { e.currentTarget.style.backgroundColor = '#eff6ff'; }}
                    >
                      📌 {faq.question}
                    </button>
                  ))}
                </div>
              )}

              {/* Quick-access chips */}
              {msg.chips && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', paddingLeft: '4px' }}>
                  {msg.chips.map((chip, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => handleChipClick(chip)}
                      style={{
                        padding: '5px 11px',
                        borderRadius: '999px',
                        border: '1px solid #e5e7eb',
                        backgroundColor: '#fff',
                        color: '#374151',
                        fontSize: '11.5px',
                        fontWeight: 500,
                        cursor: 'pointer',
                        fontFamily: 'Inter, sans-serif',
                        transition: 'all 0.15s',
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = '#0b3c82';
                        e.currentTarget.style.color = '#fff';
                        e.currentTarget.style.borderColor = '#0b3c82';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = '#fff';
                        e.currentTarget.style.color = '#374151';
                        e.currentTarget.style.borderColor = '#e5e7eb';
                      }}
                    >
                      {chip.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Quick contact link */}
        <div style={{ padding: '8px 16px', borderTop: '1px solid #f0f0f0', backgroundColor: '#fff' }}>
          <a
            href="/contatti"
            style={{
              display: 'block',
              textAlign: 'center',
              fontSize: '12px',
              color: '#e30613',
              fontWeight: 600,
              textDecoration: 'none',
              padding: '6px',
            }}
          >
            Non hai trovato risposta? → Contattaci direttamente
          </a>
        </div>

        {/* Input area */}
        <div
          style={{
            display: 'flex',
            gap: '8px',
            padding: '12px 16px',
            borderTop: '1px solid #f0f0f0',
            backgroundColor: '#fff',
            flexShrink: 0,
            paddingBottom: '12px',
          }}
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Scrivi la tua domanda..."
            style={{
              flex: 1,
              padding: '9px 14px',
              borderRadius: '12px',
              border: '1.5px solid #e5e7eb',
              fontSize: '13px',
              outline: 'none',
              fontFamily: 'Inter, sans-serif',
              color: '#1e293b',
              backgroundColor: '#f9fafb',
            }}
          />
          <button
            type="button"
            onClick={() => handleSend()}
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '12px',
              backgroundColor: '#0b3c82',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
