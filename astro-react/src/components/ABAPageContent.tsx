import { useState } from 'react';

export default function ABAPageContent() {
  const [openCards, setOpenCards] = useState<number[]>([]);

  const toggleCard = (index: number, buttonEl: HTMLButtonElement) => {
    if (openCards.includes(index)) {
      setOpenCards(openCards.filter(i => i !== index));
    } else {
      setOpenCards([...openCards, index]);
      setTimeout(() => {
        buttonEl.parentElement?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
  };

  const sections = [
    {
      title: "Cos'è l'Applied Behavior Analysis (ABA)",
      subtitle: "Scienza ed evoluzione dell'Analisi Comportamentale Applicata",
      icon: "🧠",
      content: (
        <div className="space-y-4 text-gray-600 font-sans leading-relaxed text-left">
          <p>
            L'acronimo <strong>"ABA"</strong> è l'abbreviazione di Analisi Comportamentale Applicata, ovvero la scienza basata sui principi dell’Analisi del Comportamento (Skinner, 1953). Gli interventi basati sull'Applied Behavior Analysis (ABA) sono diventati noti al pubblico non specializzato con il nome di <em>“metodo ABA”</em> o <em>“metodologia ABA per l’autismo”</em>. È necessario specificare che l’ABA non è una “terapia” per l’autismo, sebbene trovi nell’ambito dell’autismo e della disabilità una delle sue massime espressioni.
          </p>
          <p>
            La metodologia ABA per l’autismo è la scienza applicata che deriva dalla scienza di base conosciuta come Analisi del Comportamento (Skinner, 1953). Secondo Baer, Wolf e Risley (1968), l’applicazione dei principi del comportamento è tesa ad incrementare e migliorare specifici comportamenti considerati socialmente significativi.
          </p>
          <p>
            In altri termini, la terapia ABA cerca di comprendere in che modo i comportamenti si modificano o come possono essere influenzati dall’ambiente esterno, in modo tale da applicare tali principi per ampliare il repertorio comportamentale di persone con autismo con comportamenti il più possibile adattivi.
          </p>
          <p>
            Il primo ad ideare programmi di intervento precoce basati sull’analisi comportamentale applicata destinati a bambini con autismo o con ritardi nello sviluppo fu <strong>Lovaas</strong>, partendo dal lavoro svolto da Skinner negli anni ‘30. L'obiettivo di Lovaas, negli anni ‘60, era quello di cominciare precocemente l’intervento con bambini di circa due anni, al fine di aiutarli ad acquisire il prima possibile abilità comunicativo-educative ed abilità di vita quotidiana. Scopo dell’intervento era "generalizzare" le competenze acquisite attraverso i programmi, all’interno dell’ambiente naturale di vita dei bambini.
          </p>
          <p className="bg-blue-50 border-l-4 border-[#0b3c82] p-4 rounded-r-xl text-gray-700">
            Ad oggi, l’applicazione dell’ABA per l’autismo è caratterizzata da un <strong>intervento altamente personalizzato</strong> (ovvero cucito su uno specifico bambino in un determinato contesto) e dall'importanza indiscussa della <strong>motivazione</strong>.
          </p>
        </div>
      )
    },
    {
      title: "L'ABA in 7 dimensioni",
      subtitle: "Le caratteristiche fondamentali che definiscono questa scienza",
      icon: "📐",
      content: (
        <div className="space-y-6 text-gray-600 font-sans leading-relaxed text-left">
          <div className="space-y-4 text-left">
            <div className="border-b border-gray-100 pb-4">
              <h4 className="font-bold text-gray-900 flex items-center gap-2">
                <span className="text-[#0b3c82] font-mono">1.</span> Analisi comportamentale APPLICATA
              </h4>
              <p className="mt-1 text-sm">
                L’Analisi Comportamentale Applicata (ABA) è la scienza applicata, che deriva dall’Analisi del Comportamento, ossia la scienza di base che studia i processi di apprendimento. Essa trova applicazione in svariati ambiti, tra cui lo sviluppo tipico e atipico, e ha dimostrato grande efficacia negli interventi per il trattamento della disabilità e dell’autismo. Il metodo ABA è la scienza in cui le tecnologie derivate dai principi del comportamento sono applicate in modo sistematico per migliorare comportamenti socialmente significativi.
              </p>
            </div>

            <div className="border-b border-gray-100 pb-4">
              <h4 className="font-bold text-gray-900 flex items-center gap-2">
                <span className="text-[#0b3c82] font-mono">2.</span> Analisi COMPORTAMENTALE applicata
              </h4>
              <p className="mt-1 text-sm">
                Analizza le relazioni funzionali (schemi di risposta) tra organismo e ambiente; è un modo altamente preciso e complesso di parlare del comportamento, del contesto/ambiente (del modo in cui esso è organizzato) e delle relazioni funzionali che intercorrono tra queste due unità di analisi. Per comportamento intendiamo quella porzione di interazione dell’organismo con l’ambiente; un movimento situabile spazialmente e temporalmente che provoca un cambiamento visibile, misurabile e traducibile in dati descrittivi (frequenza, durata, intensità, latenza, percentuale), con validità intersoggettiva (IOA). Osservare il comportamento significa osservarne la topografia (la sua forma) e la funzione (gli effetti che produce).
                <br />
                <em>Un comportamento può avere la stessa forma (es. lanciare) ma funzioni diverse (es. richiamare attenzione, evitamento del compito) o viceversa, comportamenti con forme diverse (urlare, lanciare oggetti, piangere) possono avere tutti la stessa funzione (es. richiamare l’attenzione).</em>
              </p>
            </div>

            <div className="border-b border-gray-100 pb-4">
              <h4 className="font-bold text-gray-900 flex items-center gap-2">
                <span className="text-[#0b3c82] font-mono">3.</span> ANALISI comportamentale applicata
              </h4>
              <p className="mt-1 text-sm">
                Le decisioni in Analisi del Comportamento si basano sempre sull’analisi dei dati, traducendo la realtà fenomenica osservata in variabili concrete che possono essere isolate, misurate e quindi manipolate.
              </p>
            </div>

            <div className="border-b border-gray-100 pb-4">
              <h4 className="font-bold text-gray-900 flex items-center gap-2">
                <span className="text-[#0b3c82] font-mono">4.</span> TECNOLOGICA
              </h4>
              <p className="mt-1 text-sm">
                Le procedure vengono chiaramente descritte e sono reperibili in letteratura, per facilitare la replica da parte di altre persone (la scienza dev’essere replicabile e trasmissibile). Si parla di “ingegneria comportamentale” sottolineando il versante di applicazione tecnica del metodo ABA.
              </p>
            </div>

            <div className="border-b border-gray-100 pb-4">
              <h4 className="font-bold text-gray-900 flex items-center gap-2">
                <span className="text-[#0b3c82] font-mono">5.</span> CONCETTUALMENTE SISTEMATICA
              </h4>
              <p className="mt-1 text-sm">
                Le procedure si basano sui principi di base comportamentali (non è un ricettario), la cui efficacia è dimostrata dalla ricerca sperimentale. Non c’é bisogno di uscire dalla scienza comportamentale per spiegare nuovi fenomeni.
              </p>
            </div>

            <div className="border-b border-gray-100 pb-4">
              <h4 className="font-bold text-gray-900 flex items-center gap-2">
                <span className="text-[#0b3c82] font-mono">6.</span> EFFICACE
              </h4>
              <p className="mt-1 text-sm">
                Gli interventi sono efficaci e producono effetti (effect size) dimostrati significativi dalla ricerca sperimentale. Una caratteristica fondamentale dell’ABA è quella di essere evidence-based, adotta esclusivamente procedure che le ricerche in ambito scientifico hanno dimostrato essere efficaci, applicandole con rigore scientifico ed effettuando un costante monitoraggio dei risultati raggiunti.
              </p>
            </div>

            <div className="pb-2">
              <h4 className="font-bold text-gray-900 flex items-center gap-2">
                <span className="text-[#0b3c82] font-mono">7.</span> GENERALE
              </h4>
              <p className="mt-1 text-sm">
                “L’apprendimento è ciò che rimane quando termina l’insegnamento (Skinner)”. Gli interventi sono generalmente applicabili in ambienti diversi, a più comportamenti specifici e hanno effetti a lungo termine.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Ambiti di applicazione dell'analisi comportamentale",
      subtitle: "Dove trova impiego il bagaglio di principi e procedure ABA",
      icon: "🎯",
      content: (
        <div className="space-y-4 text-gray-600 font-sans leading-relaxed text-left">
          <p>
            Un’idea molto diffusa è che l’Analisi Comportamentale Applicata sia la terapia dell’autismo. In realtà il Metodo ABA fonda le sue radici nel comportamentismo, che ha dato vita all’Analisi sperimentale del Comportamento, i cui principi sono applicati a svariate aree.
          </p>
          <p>
            È importante sottolineare che l’analisi comportamentale applicata non è una tecnica e non è un singolo metodo: <strong>è un ampio corpus di principi e procedure</strong> che si possono applicare in contesti diversi. Le procedure applicative ABA-based sono sensibili al contesto e individuali.
          </p>
          <p>
            La ricchezza di tecniche di comprovata efficacia consente di disegnare modelli che contengono procedure e pacchetti di intervento cuciti addosso a ogni soggetto e a ogni situazione con grande flessibilità (Moderato e Presti, 2019). Gli interventi sono erogati secondo diversi modelli scientifici (UCLA YAP, NET, PRT, EIBI, MIPIA, ESDM, CABAS, ecc.).
          </p>
          <p>
            L’attenzione dell’analisi comportamentale applicata è rivolta ai comportamenti socialmente significativi (abilità scolastiche, sociali, comunicative, adattive), rendendola adatta ad essere applicata a qualsiasi ambito di intervento.
          </p>
          
          <div className="mt-6 bg-gray-50 border border-gray-100 rounded-2xl p-6 space-y-4">
            <h4 className="font-bold text-gray-900 text-base">Un programma strutturato dovrebbe idealmente:</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[#e30613] font-bold mt-0.5">•</span>
                <span>Rivolgersi a tutte le aree deficitarie di ogni singolo bambino, con obiettivi chiaramente definiti.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#e30613] font-bold mt-0.5">•</span>
                <span>Affrontare tutti i comportamenti problema manifestati dal bambino.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#e30613] font-bold mt-0.5">•</span>
                <span>Essere basato sui principi dell’apprendimento e della motivazione.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#e30613] font-bold mt-0.5">•</span>
                <span>Coinvolgere in maniera massiccia la famiglia, con genitori che partecipano attivamente.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#e30613] font-bold mt-0.5">•</span>
                <span>Essere inizialmente domiciliare e gradualmente esteso ad altri contesti di vita (es. la scuola).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#e30613] font-bold mt-0.5">•</span>
                <span>Essere guidato da esperti con formazioni e certificazione post-universitaria in ABA.</span>
              </li>
              <li className="flex items-start gap-2 md:col-span-2">
                <span className="text-[#e30613] font-bold mt-0.5">•</span>
                <span>Contenere sia componenti del DTT (discrete trial training) che del NET (natural environment training) in maniera integrata.</span>
              </li>
            </ul>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {sections.map((section, index) => {
        const isOpen = openCards.includes(index);
        return (
          <div 
            key={index}
            className={`bg-white rounded-3xl border transition-all duration-300 overflow-hidden ${
              isOpen 
                ? 'border-blue-200 shadow-lg shadow-blue-900/5' 
                : 'border-gray-200/80 shadow-sm hover:border-gray-300'
            }`}
          >
            {/* Header / Clickable area */}
            <button
              onClick={(e) => toggleCard(index, e.currentTarget)}
              className="w-full text-left p-6 md:p-8 flex items-center gap-4 md:gap-6 focus:outline-none"
              aria-expanded={isOpen}
            >
              <div className="text-3xl md:text-4xl select-none shrink-0 w-12 flex items-center justify-center">
                {section.icon}
              </div>
              
              <div className="flex-1 min-w-0 text-left">
                <h3 className="text-xl md:text-2xl font-display font-bold text-gray-900 leading-tight">
                  {section.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-500 font-sans mt-1">
                  {section.subtitle}
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
              <div className="p-6 md:p-8">
                {section.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
