import { useState } from 'react';

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

const projects = [
  {
    id: 'spazio-sollievo',
    title: 'SPAZIO SOLLIEVO',
    icon: '🌿',
    summary: 'Il progetto sarà attivo due sabati al mese, nelle seguenti 3 fasce orarie: dalle 9,00 alle 16,00...',
    content: (
      <div className="space-y-6 font-sans text-gray-700 leading-relaxed">
        <div>
          <p>Il progetto sarà attivo due sabati al mese, nelle seguenti 3 fasce orarie:</p>
          <ul className="mt-3 space-y-1 pl-4 list-disc text-gray-600">
            <li>dalle 9,00 alle 16,00</li>
            <li>dalle 9,00 alle 12,00</li>
            <li>dalle 13,00 alle 16,00</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 text-lg mb-2">Destinatari</h4>
          <p className="mb-3">Gli utenti sono divisi, principalmente, in due gruppi:</p>
          <ul className="space-y-3 pl-2">
            <li className="flex items-start"><CheckIcon /> <span><strong>Gruppo grandi:</strong> ragazzi, con diagnosi di disturbo generalizzato dello sviluppo e disturbo dello spettro autistico.</span></li>
            <li className="flex items-start"><CheckIcon /> <span><strong>Gruppo piccoli:</strong> bambini o ragazzi, con disturbo generalizzato dello sviluppo e dello spettro autistico, ai quali vengono proposti interventi individualizzati, condotti da educatori specializzati. È prevista la possibilità di svolgere questo tipo intervento anche in piccolo gruppo, laddove possibile.</span></li>
          </ul>
          <p className="mt-3 font-medium text-gray-900">Per entrambi i gruppi, costituisce criterio di esclusione la presenza di comportamenti disadattivi altamente invalidanti.</p>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 text-lg mb-2">Il progetto prevede:</h4>
          <p className="font-bold mb-2">per gli utenti:</p>
          <ul className="space-y-3 pl-2">
            <li className="flex items-start"><CheckIcon /> <span><strong>Personale appositamente formato</strong> rispetto al funzionamento autistico, Psicologi, Pedagogisti, Educatori. Affiancamento di Volontari, opportunamente formati, che coadiuvino il lavoro degli Operatori, permettendo un rapporto adulto/utente più alto, anche 1:1, laddove necessario, ad esempio in caso di uscite, programmi diversificati, necessità specifiche.</span></li>
            <li className="flex items-start"><CheckIcon /> <span>Definizione di <strong>Piani Educativi Individualizzati</strong>, al fine di garantire ad ogni persona accolta il servizio più efficace possibile. Per ogni persona verrà aperta una cartella nella quale saranno raccolti e aggiornati regolarmente i Piani Educativi Individualizzati e tutta la documentazione utile alla conoscenza della situazione.</span></li>
            <li className="flex items-start"><CheckIcon /> <span>Utilizzo di <strong>metodi e tecniche cognitivo/comportamentali</strong> per l’insegnamento e/o il potenziamento delle abilità e delle competenze pratiche, sociali e cognitive, per la realizzazione delle attività, per la gestione dei comportamenti problematici e disadattivi, per la strutturazione dello spazio e del tempo, finalizzato a rendere il servizio offerto dalla cooperativa il più adeguato ed efficace possibile alle caratteristiche di ciascun utente.</span></li>
            <li className="flex items-start"><CheckIcon /> <span><strong>Consulenza scientifica e metodologica</strong> coordinamento da parte degli analisti del comportamento dell’equipe .</span></li>
            <li className="flex items-start"><CheckIcon /> <span><strong>Lavoro di rete</strong> con altri soggetti coinvolti nella presa in carico degli utenti (famiglia, specialisti, assistenti sociali, terapisti, ecc.).</span></li>
          </ul>

          <p className="font-bold mt-5 mb-2">per le famiglie:</p>
          <ul className="space-y-3 pl-2">
            <li className="flex items-start"><CheckIcon /> <span>Indicazione e condivisione delle migliori <strong>strategie di intervento educativo</strong> a supporto della speciale esperienza genitoriale.</span></li>
            <li className="flex items-start"><CheckIcon /> <span>Costituzione di una <strong>rete consolidata</strong> di confronto e supporto reciproci tra le famiglie.</span></li>
            <li className="flex items-start"><CheckIcon /> <span>Occasioni di <strong>“sollievo”</strong> al sabato (con cadenza prestabilita).</span></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 text-lg mb-3">Finalità e obiettivi</h4>
          <ul className="space-y-2 pl-2">
            <li className="flex items-start"><CheckIcon /> <span>Apprendere e generalizzare le abilità apprese durante i training individualizzati, o in piccolissimo gruppo</span></li>
            <li className="flex items-start"><CheckIcon /> <span>Promuovere il senso di autoefficacia</span></li>
            <li className="flex items-start"><CheckIcon /> <span>Incrementare l’autostima</span></li>
            <li className="flex items-start"><CheckIcon /> <span>Promuovere la creatività</span></li>
            <li className="flex items-start"><CheckIcon /> <span>Fornire strumenti e mezzi di espressione di sé</span></li>
            <li className="flex items-start"><CheckIcon /> <span>Sviluppare abilità motorie, cognitive, di autonomia, socio-relazionali</span></li>
            <li className="flex items-start"><CheckIcon /> <span>Promuovere la comunicazione</span></li>
            <li className="flex items-start"><CheckIcon /> <span>Offrire supporto alle famiglie</span></li>
          </ul>
        </div>

        <div className="bg-blue-50 p-5 rounded-2xl border border-blue-100">
          <p className="font-bold text-[#0b3c82]">PER INFO E COSTI: <a href="mailto:info.centrofelicemente@gmail.com" className="underline font-normal">info.centrofelicemente@gmail.com</a></p>
        </div>
      </div>
    )
  },
  {
    id: 'progetto-adhd',
    title: 'PROGETTO ADHD',
    icon: '🎯',
    summary: 'Seminari per docenti e incontri per le famiglie sulla gestione scolastica e relazionale dell\'ADHD.',
    content: (
      <div className="space-y-6 font-sans text-gray-700 leading-relaxed">
        <p>
          Il presente progetto formativo viene proposto dal centro “FeliceMente” alla scuola, considerando la crescente incidenza del Disturbo da Deficit di Attenzione/Iperattività e l'importanza della collaborazione tra le figure adulte di riferimento - responsabili della riabilitazione, dell’istruzione e dell’educazione – al fine di modificare il profilo cognitivo, comportamentale e sociale dei bambini e ragazzi con ADHD.
        </p>
        <p>
          La conoscenza del disturbo e degli strumenti e strategie utili al fine di lavorare in modo efficace con questi bambini e ragazzi, resulta pertanto di primaria importanza per coloro che operano in contesti formativo-educativi.
        </p>

        <div>
          <h4 className="font-bold text-gray-900 text-lg mb-2">Obiettivi Generali:</h4>
          <p>L’obiettivo generale dei seminari con i docenti è approfondire la conoscenza del disturbo e delle sue manifestazioni, nonché fornire indicazioni e strategie pratiche da impiegare con i bambini e ragazzi con diagnosi di ADHD.</p>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 text-lg mb-2">Obiettivi Specifici:</h4>
          <p>Nel primo seminario verrà presentato un inquadramento del disturbo e delle sue manifestazioni nelle differenti fasce d'età, dunque si affronterà la tematica relativa all’individuazione dei segnali di “allarme”, si illustrerà il percorso diagnostico e si approfondiranno i comportamenti problema.</p>
          <p className="mt-3">Durante il secondo seminario si proporranno strategie educative e didattiche da applicare in classe, sia relativamente al metodo di studio che alla gestione delle dinamiche relazionali e sociali; verrà altresì posta l'attenzione sugli aspetti emotivi associati al disturbo nonché alle modalità di collaborazione più funzionali tra la scuola e la famiglia.</p>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 text-lg mb-2">Destinatari:</h4>
          <ul className="space-y-2">
            <li className="flex items-start"><CheckIcon /> <span>Docenti della Scuola dell'infanzia, primaria e secondaria di Primo Grado.</span></li>
            <li className="flex items-start"><CheckIcon /> <span>Gli specialisti del Centro “FeliceMente” rilasceranno ai docenti un attestato di partecipazione.</span></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 text-lg mb-2">Metodologia e tempi:</h4>
          <p>Vengono proposti due seminari con i docenti della durata complessiva di quattro ore, in fascia oraria post-scolastica. Inoltre viene proposto un incontro con le famiglie, in fascia oraria serale, della durata di un’ora e trenta minuti.</p>
          <p className="mt-2">Durante gli incontri con i docenti verranno mostrati video, presentazioni in formato Power Point ed esempi di Diagnosi e relativa organizzazione del piano di lavoro dell’alunno. L’incontro con le famiglie sarà informativo e orientativo rispetto ai segnali d’allarme e alla gestione del bambino affetto da ADHD: verranno mostrati ai genitori video e presentazioni esplicativi.</p>
        </div>

        <div className="bg-red-50 p-5 rounded-2xl border border-red-100">
          <p className="font-medium text-gray-800">
            <strong>Risorse:</strong> Gli incontri verranno tenuti dagli specialisti del centro FeliceMente<br />
            <strong>Referente del progetto:</strong> Dott.ssa Anna Montuori<br />
            Logopedista del centro “FeliceMente”
          </p>
        </div>
      </div>
    )
  },
  {
    id: 'screening-scuola',
    title: 'SCREENING SCUOLA INFANZIA E PRIMARIA',
    icon: '🏫',
    summary: 'Rilevazione dei prerequisiti di apprendimento e individuazione precoce del rischio di DSA.',
    content: (
      <div className="space-y-6 font-sans text-gray-700 leading-relaxed">
        <h3 className="text-center font-bold text-xl text-gray-950">PRESENTAZIONE SCREENING PER BAMBINI DI 5 ANNI</h3>

        <div>
          <h4 className="font-bold text-gray-950 text-lg mb-2">L’importanza dello screening nella scuola dell’infanzia</h4>
          <p>Con el termine “screening” si intende una metodologia di rilevazione in grado di predire un disturbo sulla base della presenza di segni critici individuabili. Nell’ambito dell’apprendimento, lo screening è possibile perché lettura, scrittura e calcolo sono il risultato di funzioni psicologiche che hanno iniziato a svilupparsi gradualmente molto tempo prima: la valutazione del livello di sviluppo di specifici precursori critici <strong>(PREREQUISITI)</strong> consente di prevedere le caratteristiche dell’evoluzione degli apprendimenti. Lo screening non evidenzia in modo inequivocabile un disturbo, ma si pone l’obiettivo di individuare, con un buon livello di attendibilità, soggetti a rischio al fine di porre le basi per un programma educativo di recupero.</p>
        </div>

        <div>
          <h4 className="font-bold text-gray-950 text-lg mb-2">Vantaggi di uno screening</h4>
          <p className="mb-2">Lo screening offre diversi vantaggi:</p>
          <ul className="space-y-1 pl-2 mb-4">
            <li className="flex items-start"><CheckIcon /> <span>valutare un ampio numero di soggetti</span></li>
            <li className="flex items-start"><CheckIcon /> <span>rivalutare il ruolo della scuola</span></li>
            <li className="flex items-start"><CheckIcon /> <span>avvicinare insegnanti e specialisti.</span></li>
          </ul>
          <p className="mb-3">La Scuola dell’Infanzia concorre alla formazione armonica dei bambini, nel rispetto e nella valorizzazione dell’identità, delle capacità, delle differenze e dei ritmi evolutivi di ciascuno. Inoltre costituisce l’ambiente che accompagna nel passaggio alla scuola primaria: un momento importante nella vita dei più piccoli che deve essere oggetto di attenzione e sensibilità. In quest’ottica essa rappresenta un contesto “ecologico” ed un luogo privilegiato per osservare la regolare comparsa dei prerequisiti per lo sviluppo delle strumentalità ed eventualmente intraprendere un’azione preventiva su eventuali difficoltà linguistiche e psicologiche.</p>
          
          <p className="font-bold mb-2">L’individuazione precoce dei bambini a rischio è importante per:</p>
          <ul className="space-y-2 pl-2 mb-4">
            <li className="flex items-start"><CheckIcon /> <span><strong>PREVENIRE:</strong> comparsa e consolidamento di strategie errate</span></li>
            <li className="flex items-start"><CheckIcon /> <span><strong>LIMITARE I DANNI:</strong> frustrazione per gli insuccessi, perdita di motivazione all’apprendimento, chiusura in se stessi, bassa autostima, problemi relazionali.</span></li>
          </ul>

          <p className="font-bold mb-2">Prevenzione e intervento precoce consentono, infatti, di evitare o ridurre il manifestarsi di difficoltà di apprendimento nella scuola dell’obbligo e dei disagi ad esse collegate, diminuendo le probabilità che il bambino vada incontro a:</p>
          <ul className="space-y-1 pl-2 mb-4">
            <li className="flex items-start"><CheckIcon /> <span>insuccesso ed abbandono scolastico</span></li>
            <li className="flex items-start"><CheckIcon /> <span>futuro professionale di basso livello</span></li>
            <li className="flex items-start"><CheckIcon /> <span>difficoltà nello sviluppo della personalità</span></li>
            <li className="flex items-start"><CheckIcon /> <span>adattamento sociale non equilibrato</span></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-gray-950 text-lg mb-2">Quali obiettivi dovrebbe avere uno screening nella Scuola dell’Infanzia?</h4>
          <p className="mb-2">Ogni screening può presentare diversi obiettivi specifici, ma è fondamentale che non vengano trascurati gli obiettivi di carattere generale:</p>
          <ul className="space-y-3 pl-2">
            <li className="flex items-start"><CheckIcon /> <span>Accertare il regolare sviluppo delle competenze linguistiche e dei prerequisiti alla scolarizzazione</span></li>
            <li className="flex items-start"><CheckIcon /> <span>Offrire a genitori e insegnanti indicazioni puntuali per una serena prosecuzione del percorso scolastico del bambino, orientandoli rispetto ad un’eventuale diagnosi precoce, al fine di evitare l’ansia che nasce da inutili allarmismi o, viceversa, interventi tardivi che determinano il consolidamento del disturbo. Si possono così evitare anche etichettamenti futuri che interferiscono con l’accrescimento dell’autostima del bambino (“sei pigro”, “non ti impegni”...)</span></li>
            <li className="flex items-start"><CheckIcon /> <span>Salvaguardare il progredire degli apprendimenti, riducendo il disagio scolastico provato dal bambino nel constatare i propri insuccessi</span></li>
            <li className="flex items-start"><CheckIcon /> <span>costruire un ambiente sensibile e rispondente alle necessità del bambino con difficoltà, per mezzo di una adeguata opera di informazione di genitori e insegnanti che potranno essere di sostegno al bambino, ma anche divulgatori di conhecimentos e quindi di atteggiamenti preventivi.</span></li>
          </ul>
          <p className="mt-3">Le difficoltà, se individuate precocemente, potranno essere affrontate e superate brillantemente dal bambino, in un contesto di equipe formato da genitori-insegnanti- terapisti. In questo modo egli risulterà adeguatamente maturo per le richieste della scuola primaria, dal punto di vista linguistico, comportamentale, sociale e affettivo.</p>
        </div>

        <div>
          <h4 className="font-bold text-gray-950 text-lg mb-2">Il progetto è così strutturato:</h4>
          <ol className="space-y-3 list-decimal list-inside pl-2 mb-4">
            <li>un <strong>incontro formativo</strong> con le insegnanti/educatrici di circa due ore (verranno presentate le tappe evolutive e come individuare i segnali d'allarme; sarà spiegato l'uso di un protocollo di osservazione che potranno usare gli insegnanti come criterio predittivo di possibili difficoltà; verrà esposta la modalità di svolgimento dell'intero iter di screening), per poter segnalare quali alunni dovrebbero parteciparvi</li>
            <li><strong>screening</strong> condotto dalla dott.ssa Montuori e/o collaboratrici, logopediste, a scuola (saranno somministrati agli alunni test standardizzati per la valutazione dei prerequisiti all'apprendimento)</li>
            <li><strong>Restituzione</strong>, in modalità da remoto, individualmente (potranno partecipare all’incontro anche le insegnanti), alle famiglie il cui bambino presenti delle difficoltà da segnalare (verrà rilasciata una relazione contenente i risultati dello screening e i consigli per l'eventuale intervento di recupero).</li>
          </ol>
          <p>I genitori che intendono iscrivere il proprio figlio al progetto, dovranno compilare un apposito modulo, da consegnare alle insegnanti prima del 26/02/2021.</p>
          <p className="mt-2 font-medium">Dott.ssa Anna Montuori Logopedista e referente del centro</p>
        </div>

        <div>
          <h4 className="font-bold text-gray-950 text-lg mb-2">Destinatari</h4>
          <ul className="space-y-2 pl-2">
            <li className="flex items-start"><CheckIcon /> <span>DOCENTI/GENITORI alunni ultimo anno Infanzia</span></li>
            <li className="flex items-start"><CheckIcon /> <span>DOCENTI/GENITORI alunni classi prime Scuola Primaria</span></li>
            <li className="flex items-start"><CheckIcon /> <span><strong>Oggetto:</strong> Avvio indagine <strong>rilevazione Disturbi Specifici di Apprendimento (DSA)</strong> – L.170/2010, art.3, c.3</span></li>
            <li className="flex items-start"><CheckIcon /> <span><strong>Comunicazione alle famiglie:</strong></span></li>
            <li className="flex items-start"><span className="text-[#059669] mr-2">•</span><span>Gentili Genitori, con la presente desideriamo offrirvi informazioni inerenti all’attività di screening gratuito inserito nel “Progetto ABC inclusione”, per l’individuazione precoce dei disturbi dell’apprendimento (DSA) che il nostro Istituto Comprensivo, scuola inclusiva e sempre attenta alle problematiche dei propri alunni, in collaborazione di professionisti preparati, ha deciso di intraprendere per l’anno scolastico. La somministrazione interesserà gli alunni dell’ultimo anno della Scuola dell’Infanzia e gli alunni delle classi seconde/terze del ciclo della primaria.</span></li>
            <li className="flex items-start"><span className="text-[#059669] mr-2">•</span><span><strong>Perché un progetto di screening nella scuola?</strong> Perché si assiste ad un considerevole aumento dei disturbi dell’apprendimento. La scuola si connota come un contesto privilegiato di osservazione e rilevazione dei problemi di apprendimento e come luogo di indirizzo per gli alunni e le loro famiglie verso una risoluzione efficace e tempestiva delle difficoltà.</span></li>
            <li className="flex items-start"><span className="text-[#059669] mr-2">•</span><span>Lo screening - pur non avendo un valore diagnostico - sarà svolto nel rispetto della privacy del bambino con l’obiettivo di “leggere” le sue eventuali difficoltà, al fine di individuare le strategie più idonee riguardo all’intervento educativo da mettere in atto per il raggiungimento del successo formativo dell'alunno. L’individuazione precoce consente, ovviamente, di intervenire con maggiore efficacia.</span></li>
            <li className="flex items-start"><span className="text-[#059669] mr-2">•</span><span>Lo screening verrà effettuato dagli Specialisti, previa segnalazione degli insegnanti di classe, e saranno impiegati i seguenti strumenti:<br /><br />
            - Questionario Osservativo IPDA e test CMF per alunni dell’ultimo anno dell’Infanzia<br />
            - PROVE MT, AC-MT e BATTERIA BVSCO-2 per alunni delle classi seconde/terze della Primaria.<br /><br />
            Gli esiti delle rilevazioni saranno comunicati alle famiglie. Per tale motivo si chiede ai genitori il consenso all’indagine in oggetto compilando il modello allegato alla presente, che dovrà essere riconsegnato all’insegnante di classe.<br /><br />
            Consapevole dell'importanza della collaborazione con le famiglie si coglie l’occasione per porgere Cordiali Saluti.<br />
            Il Dirigente scolastico</span></li>
          </ul>
        </div>

        <div className="pt-4 border-t border-gray-100">
          <a
            href="/Progetto-Screening-scuola-infanzia-e-primaria-6-2.pdf"
            download="Progetto-Screening-scuola-infanzia-e-primaria-6-2.pdf"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#e30613] text-white rounded-2xl hover:bg-[#c20510] transition-colors font-semibold shadow-md"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            SCARICA ALLEGATO SCREENING
          </a>
        </div>
      </div>
    )
  }
];

export default function ProgettiAccordion() {
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
      {projects.map((project) => {
        const isOpen = openId === project.id;
        
        return (
          <div 
            key={project.id}
            className={`bg-white rounded-3xl border transition-all duration-300 overflow-hidden ${
              isOpen 
                ? 'border-blue-200 shadow-lg shadow-blue-900/5' 
                : 'border-gray-200/80 shadow-sm hover:border-gray-300'
            }`}
          >
            {/* Header / Clickable area */}
            <button
              onClick={(e) => handleToggle(project.id, e.currentTarget)}
              className="w-full text-left p-6 md:p-8 flex items-center gap-4 md:gap-6 focus:outline-none"
              aria-expanded={isOpen}
            >
              <div className="text-3xl md:text-4xl select-none shrink-0 w-12 flex items-center justify-center">
                {project.icon}
              </div>
              
              <div className="flex-1 min-w-0 text-left">
                <h3 className="text-xl md:text-2xl font-display font-bold text-gray-900 leading-tight">
                  {project.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-500 font-sans mt-1">
                  {project.summary}
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
                maxHeight: isOpen ? '3500px' : '0px',
                opacity: isOpen ? 1 : 0,
                overflow: 'hidden'
              }}
              className={isOpen ? 'border-t border-gray-100' : ''}
            >
              <div className="p-6 md:p-8 text-left">
                {project.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
