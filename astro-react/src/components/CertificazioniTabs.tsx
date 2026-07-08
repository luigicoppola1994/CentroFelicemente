import { useState } from 'react';

interface CertItem {
  id: string;
  title: string;
  icon: string;
  summary: string;
  content: React.ReactNode;
}

const CheckIcon = () => (
  <span style={{
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    backgroundColor: 'rgba(227, 6, 19, 0.1)',
    color: '#e30613',
    marginRight: '10px',
    flexShrink: 0,
    marginTop: '2px',
  }}>
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 13l4 4L19 7" />
    </svg>
  </span>
);

const certificazioniData: CertItem[] = [
  {
    id: 'cose-dsa',
    title: 'Cos’è la Certificazione diagnostica di DSA?',
    icon: '📄',
    summary: 'Documento che certifica la presenza di un Disturbo Specifico dell\'Apprendimento.',
    content: (
      <div className="space-y-4 font-sans text-gray-700 leading-relaxed">
        <p>
          La Certificazione diagnostica di DSA è un documento che, come dice il nome, certifica la presenza di un Disturbo Specifico dell’Apprendimento.
        </p>
        <p>
          Su di essa, per prima cosa è segnalata proprio la diagnosi emersa in seguito alla valutazione effettuata. La diagnosi può essere relativa a uno solo tra i Disturbi Specifici dell’Apprendimento (dislessia, disortrografia, discalculia, disgrafia) ma anche a due o più di essi.
        </p>
        <p>
          La certificazione si ottiene in seguito a una valutazione specifica che porta alla diagnosi di DSA. La valutazione comprende sia domande relative alla storia e allo sviluppo del bambino, sia la somministrazione di prove specifiche del funzionamento cognitivo e degli apprendimenti (es. dettati, brani da leggere etc.).
        </p>
      </div>
    )
  },
  {
    id: 'chi-redige',
    title: 'Chi può redarre la certificazione di DSA?',
    icon: '👨‍⚕️',
    summary: 'L\'équipe che effettua la diagnosi: Logopedista, Psicologo, Neuropsichiatra Infantile.',
    content: (
      <div className="space-y-4 font-sans text-gray-700 leading-relaxed">
        <p>
          La certificazione è redatta da parte dell’équipe che effettua la diagnosi di DSA e che deve comprendere le figure di: Logopedista, Psicologo, Neuropsichiatra Infantile (NPI).
        </p>
        <div className="bg-blue-50 p-5 rounded-2xl border border-blue-100">
          <h4 className="font-bold text-[#0b3c82] mb-3">In Lombardia, ciò è possibile presso:</h4>
          <ul className="space-y-2">
            <li className="flex items-start"><CheckIcon /> i reparti di Neuropsichiatria Infantile e nei centri convenzionati con il Sistema Sanitario Nazionale</li>
            <li className="flex items-start"><CheckIcon /> gli studi privati in cui l’équipe è stata autorizzata dall’ATS a effettuare la diagnosi di DSA. L’autorizzazione viene concessa solo se i professionisti rispondono a precisi requisiti di formazione e competenza acquisita sul campo.</li>
          </ul>
        </div>
        <div className="bg-red-50 p-5 rounded-2xl border border-red-100 mt-4">
          <p className="font-medium text-[#e30613]">
            Presso la cooperativa Felicemente è presente un'equipe autorizzata dalle ATS di Milano Ovest Rhodense a effettuare attività di prima certificazione diagnostica di Disturbo Specifico dell'Apprendimento (DSA).
          </p>
        </div>
      </div>
    )
  },
  {
    id: 'contenuto-certificazione',
    title: 'Cosa c’è scritto sulla Certificazione di DSA?',
    icon: '📝',
    summary: 'Dati anamnestici, risultati, proposte e indicazioni per la scuola.',
    content: (
      <div className="space-y-4 font-sans text-gray-700 leading-relaxed">
        <p>Oltre alla diagnosi, singola o multipla, del/dei DSA presenti, sono anche riportati:</p>
        <ul className="space-y-3 mt-4">
          <li className="flex items-start"><CheckIcon /> <span>i dati anamnestici rilevanti, relativi alla storia e allo sviluppo del bambino, a eventuali valutazioni precedenti o percorsi di trattamento. Sono una sorta di presentazione generale del bambino</span></li>
          <li className="flex items-start"><CheckIcon /> <span>i risultati e le osservazioni relative al percorso di valutazione effettuato, con i punti di forza e le fatiche riscontrate</span></li>
          <li className="flex items-start"><CheckIcon /> <span>le proposte per l’intervento (trattamento, potenziamento)</span></li>
          <li className="flex items-start"><CheckIcon /> <span>le indicazioni per la scuola, che comprendono le misure compensative e dispensative che si ritengono più adatte per ogni bambino (es. tempi più lunghi per svolgere le prove scritte)</span></li>
          <li className="flex items-start"><CheckIcon /> <span>eventuali note aggiuntive che possono comprendere per esempio consigli generali su come aiutare/supportare al meglio il bambino</span></li>
          <li className="flex items-start"><CheckIcon /> <span>le indicazioni rispetto a quando aggiornare la certificazione stessa. La certificazione deve essere redatta seguendo un apposito modello predisposto dall’ATS (“Modulo di prima certificazione DSA” o “Modulo di aggiornamento del profilo funzionale”).</span></li>
        </ul>
      </div>
    )
  },
  {
    id: 'a-cosa-serve',
    title: 'A cosa serve la Certificazione di DSA?',
    icon: '🎯',
    summary: 'Valida ai fini scolastici per predisporre il Piano Didattico Personalizzato (PDP).',
    content: (
      <div className="space-y-4 font-sans text-gray-700 leading-relaxed">
        <p>
          La certificazione è “valida ai fini scolastici”, cioè ha valore legale affinché la scuola possa prendere atto della presenza di DSA e possa predisporre il Piano Didattico Personalizzato (PDP).
        </p>
        <p>
          La certificazione è ovviamente utile anche alla famiglia come traccia del percorso svolto, dato che si tratta di un documento scritto che sintetizza ciò che è stato fatto durante la valutazione con i risultati ottenuti.
        </p>
        <p>
          È poi valida in generale in tutte quelle situazioni in cui ci si può avvalere di misure dispensative/compensative, per es. in sede di esame per la patente, in Università.
        </p>
      </div>
    )
  },
  {
    id: 'validita',
    title: 'La Certificazione di DSA è valida per sempre o va aggiornata?',
    icon: '⏳',
    summary: 'La diagnosi vale per sempre, ma l\'aggiornamento è indicato al passaggio di ciclo.',
    content: (
      <div className="space-y-4 font-sans text-gray-700 leading-relaxed">
        <p>
          La diagnosi di DSA vale per sempre. È però utile aggiornare la certificazione, in modo che rappresenti al meglio la situazione attuale e sia un valido strumento di supporto al corpo docenti per predisporre un PDP adeguato.
        </p>
        <div className="bg-blue-50 p-5 rounded-2xl border border-blue-100">
          <h4 className="font-bold text-[#0b3c82] mb-3">L’aggiornamento in particolare è indicato, come da normativa (Conferenza Stato-Regioni sui DSA):</h4>
          <ul className="space-y-2">
            <li className="flex items-start"><CheckIcon /> Al passaggio da un ciclo scolastico all’altro e comunque, di norma, non prima di tre anni dal precedente</li>
            <li className="flex items-start"><CheckIcon /> Ogni qualvolta sia necessario modificare l’applicazione degli strumenti didattici e valutativi necessari, su segnalazione della scuola alla famiglia o su iniziativa della famiglia.</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 'ruolo-scuola',
    title: 'Cosa fa la scuola dopo aver ricevuto la Certificazione di DSA?',
    icon: '🏫',
    summary: 'Inserisce il documento nel fascicolo e il Consiglio di classe redige il PDP.',
    content: (
      <div className="space-y-4 font-sans text-gray-700 leading-relaxed">
        <p>
          La scuola protocolla il documento ricevuto e lo inserisce nel fascicolo personale dell’alunno. A questo punto il Dirigente Scolastico consegna copia della certificazione al coordinatore di classe, che a sua volta la condivide con il gruppo dei docenti.
        </p>
        <p>
          Il Consiglio di classe, di norma entro la fine del primo trimestre, redige il PDP. Quest’ultimo è il documento su cui sono indicati gli strumenti e le strategie che saranno adottati al fine di garantire allo studente condizioni individualizzate ottimali per l’apprendimento; deve quindi prevedere un intervento che rispetti le caratteristiche dell’alunno e permetta di sviluppare al meglio le sue potenzialità. 
        </p>
        <p>
          Il PDP deve essere condiviso fra docenti, famiglia, istituzioni scolastiche e socio-sanitarie.
        </p>
      </div>
    )
  },
  {
    id: 'dopo-certificazione',
    title: 'COSA FARE DOPO LA CERTIFICAZIONE DI DSA?',
    icon: '📈',
    summary: 'Aiutare il bambino a far fronte alle difficoltà con percorsi e potenziamento.',
    content: (
      <div className="space-y-4 font-sans text-gray-700 leading-relaxed">
        <p>
          Una volta accertata la presenza di un Disturbo Specifico dell’Apprendimento occorre muoversi per aiutare il bambino a far fronte in maniera costruttiva alle difficoltà riscontrate.
        </p>
        <p>
          La diagnosi di Disturbo Specifico dell’Apprendimento, infatti, è il punto di partenza per un percorso atto a lavorare sul potenziamento delle aree deficitarie. I percorsi che proponiamo si prefiggono obiettivi chiari e definiti, attraverso una continua ridefinizione con la famiglia e la scuola. Lavoriamo sull’automatizzazione dei processi di apprendimento, ma anche sulla costruzione di strategie ad hoc per aiutare i bambini a muoversi nello studio.
        </p>
        <p>
          Un elemento predittivo di bontà dell’intervento è sicuramente la precocità, che garantisce una maggiore possibilità di sviluppare e potenziare strategie adeguate.
        </p>
        
        <h4 className="font-bold text-[#0b3c82] mt-6 text-lg">Training Cognitivo Integrato</h4>
        <p>
          Il potenziamento dell’abilità di lettura in caso di difficoltà o di disturbo specifico della lettura (dislessia) consiste in cicli di allenamento specifico che hanno lo scopo di migliorare la correttezza e la velocità di lettura del bambino.
        </p>
        <p>
          Il potenziamento (training cognitivo) è un vero e proprio allenamento cognitivo e prevede la stimolazione dei meccanismi cerebrali di associazione fra il grafema (la lettera) e il corrispondente fonema (il suono). Per farlo si usano degli specifici programmi, computerizzati o carta e matita, che si scelgono in base all’età e allo scopo terapeutico.
        </p>
        <p>
          Per leggere, tuttavia, bisogna possedere anche delle abilità che noi definiamo “di base” che permettono al processo di lettura di realizzarsi meglio e con maggiori risultati. La lettura, infatti, si serve di processi sensoriali, percettivi, attentivi e di memoria che possono essere stimolati adeguatamente al fine di dare maggiore forza al potenziamento della lettura.
        </p>
        <p>
          Per tale ragione abbiamo scelto di praticare il <strong>Training Cognitivo Integrato</strong>, una metodologia di intervento di tipo integrato, cioè che lavora sia sui meccanismi specifici della lettura, sia su tutte quelle abilità cognitive che collaborano al processo specifico, come l’attenzione, la memoria e le funzioni esecutive.
        </p>
        <div className="bg-red-50 p-5 rounded-2xl border border-red-100 mt-4">
          <p>
            Per aiutare un bambino o un ragazzo con un Disturbo di Apprendimento non basta aumentare l’abilità di letto-scrittura e calcolo per ottenere soddisfazione, serenità e voglia di imparare, ma bisogna lavorare su <strong>motivazione e autostima</strong>. Infatti, sono proprio questi aspetti di tipo psicologico ad essere troppo spesso coinvolti quando siamo in presenza di un Disturbo Specifico dell’Apprendimento e, nel nostro Centro, vi dedichiamo una grande attenzione.
          </p>
        </div>
      </div>
    )
  },
  {
    id: 'strumenti-compensativi',
    title: 'Abilitazione all’uso di strumenti compensativi',
    icon: '💻',
    summary: 'Strumenti didattici e tecnologici che sostituiscono o facilitano le prestazioni.',
    content: (
      <div className="space-y-6 font-sans text-gray-700 leading-relaxed">
        
        <div>
          <h4 className="font-bold text-[#0b3c82] mb-2 text-lg">Cosa si intende per strumento compensativo e a cosa serve?</h4>
          <p>
            Gli strumenti compensativi sono “strumenti didattici e tecnologici che sostituiscono o facilitano le prestazioni richieste dallo studente nell’abilità deficitaria” (Legge 170/2010 e Linee Guida 2011).
          </p>
          <p className="mt-2 font-bold text-gray-900">Servono quindi a:</p>
          <ul className="mt-2 space-y-1">
            <li className="flex items-start"><CheckIcon /> sollevare il ragazzo da una prestazione complessa a causa del disturbo</li>
            <li className="flex items-start"><CheckIcon /> raggiungere gli obiettivi scolastici mostrando il proprio potenziale</li>
            <li className="flex items-start"><CheckIcon /> diventare autonomi.</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
          <p className="mb-2">Gli strumenti compensativi, in particolare se tecnologici, vanno scelti in base a parametri ben definiti:</p>
          <ul className="space-y-1 mb-2">
            <li className="flex items-start"><span className="text-[#0b3c82] mr-2">•</span> Esigenze di studio</li>
            <li className="flex items-start"><span className="text-[#0b3c82] mr-2">•</span> Età dello studente</li>
            <li className="flex items-start"><span className="text-[#0b3c82] mr-2">•</span> Tipologia di difficoltà specifica</li>
            <li className="flex items-start"><span className="text-[#0b3c82] mr-2">•</span> Qualità dello strumento</li>
          </ul>
          <p>
            Per facilitare la scelta possiamo individuare le caratteristiche generali dei diversi cicli scolastici, le caratteristiche del ragazzo e del contesto in cui vanno inseriti (uso a casa e/o a scuola), poiché uno strumento non adeguato può spingere il ragazzo a rifiutarlo e opporsi al suo uso, vanificando così tutti i possibili benefici.
          </p>
        </div>

      </div>
    )
  },
  {
    id: 'metodo-studio',
    title: 'Impostazione ed automatizzazione del metodo di studio',
    icon: '📚',
    summary: 'L\'importanza di imparare a studiare e costruire strategie funzionali.',
    content: (
      <div className="space-y-6 font-sans text-gray-700 leading-relaxed">
        <div>
          <p>
            Spesso si dà per scontato che studiare sia qualcosa di naturale e immediato per tutti i bambini, ma non è così.
            Studiare non è semplice: occorre imparare a studiare. Le abilità di studio, infatti, possono essere acquisite, sviluppate e potenziate.
            Per studiare bene, occorre costruire il proprio metodo di studio.
          </p>
          <p className="mt-2">
            Non esiste un metodo di studio efficace ugualmente per tutti: ci sono bambini che leggono e ripetono, altri che creano mappe concettuali ed altri ancora che riassumono i testi in brevi riassunti.
            Per questo è importante progettare dei momenti dedicati a sperimentare il metodo di studio migliore per sé, in modo da trovare i propri strumenti per imparare, ottimizzando tempi e risorse.
          </p>
        </div>

        <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
          <h4 className="font-bold text-[#0b3c82] mb-3 text-lg">L' importanza del Metodo di Studio</h4>
          <p className="mb-2">Spesso si trascura il fatto che per prepararsi a una verifica o a una interrogazione occorrono:</p>
          <ul className="space-y-1 mb-4">
            <li className="flex items-start"><span className="text-[#0b3c82] mr-2">•</span> buone abilità organizzative</li>
            <li className="flex items-start"><span className="text-[#0b3c82] mr-2">•</span> capacità di elaborare in modo personale il materiale a disposizione</li>
            <li className="flex items-start"><span className="text-[#0b3c82] mr-2">•</span> abilità di riflessione metacognitiva</li>
            <li className="flex items-start"><span className="text-[#0b3c82] mr-2">•</span> flessibilità</li>
            <li className="flex items-start"><span className="text-[#0b3c82] mr-2">•</span> motivazione</li>
          </ul>
          <p>
            Imparare a studiare è molto importante. Trovare il proprio metodo di studio non è semplice, soprattutto quando le difficoltà incontrate contribuiscono a ridurre la motivazione. Intraprendere un percorso per aiutare i bimbi a costruire strategie funzionali per approcciarsi in maniera positiva al mondo della scuola può risultare molto importante.
          </p>
          <p className="mt-2">
            Lavorando in ottica preventiva, si aiutano i bambini a evitare la frustrazione di uno studio sbagliato che, a lungo andare, può influenzare anche l’autostima e il proprio senso di efficacia. Imparare a studiare significa favorire l’amore per l’apprendimento e la gratificazione del conoscere. Promuovere un buon metodo di studio, inoltre, aiuta a ridurre fenomeni come l’abbandono scolastico.
          </p>
        </div>
      </div>
    )
  }
];

export default function CertificazioniAccordion() {
  const [openId, setOpenId] = useState<string | null>(null);

  const handleToggle = (id: string, buttonEl: HTMLButtonElement) => {
    const isOpening = openId !== id;
    setOpenId(isOpening ? id : null);
    if (isOpening) {
      setTimeout(() => {
        buttonEl.parentElement?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-3">
      {certificazioniData.map((item) => {
        const isOpen = openId === item.id;
        
        return (
          <div 
            key={item.id}
            className={`bg-white rounded-3xl border transition-all duration-300 overflow-hidden ${
              isOpen 
                ? 'border-blue-200 shadow-lg shadow-blue-900/5' 
                : 'border-gray-200/80 shadow-sm hover:border-gray-300'
            }`}
          >
            {/* Header / Clickable area */}
            <button
              onClick={(e) => handleToggle(item.id, e.currentTarget)}
              className="w-full text-left p-6 md:p-8 flex items-center gap-4 md:gap-6 focus:outline-none"
              aria-expanded={isOpen}
            >
              <div className="text-3xl md:text-4xl select-none shrink-0 w-12 flex items-center justify-center">
                {item.icon}
              </div>
              
              <div className="flex-1 min-w-0 text-left">
                <h3 className="text-xl md:text-2xl font-display font-bold text-gray-900 leading-tight">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-500 font-sans mt-1">
                  {item.summary}
                </p>
              </div>
              
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 shrink-0 ${
                isOpen 
                  ? 'bg-[#0b3c82] border-[#0b3c82] text-white rotate-180' 
                  : 'bg-gray-50 border-gray-200 text-gray-500 hover:bg-gray-100'
              }`}>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>

            {/* Expandable Body */}
            <div 
              style={{
                transition: 'all 0.4s ease-in-out',
                maxHeight: isOpen ? '2500px' : '0px',
                opacity: isOpen ? 1 : 0,
                overflow: 'hidden'
              }}
              className={isOpen ? 'border-t border-gray-100' : ''}
            >
              <div className="p-6 md:p-8 text-left">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
