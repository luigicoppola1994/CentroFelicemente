import { useState } from 'react';

interface ServiceItem {
  id: string;
  title: string;
  icon: string;
  summary: string;
  content: React.ReactNode;
}

const services: ServiceItem[] = [
  {
    id: 'logopedia',
    title: 'Logopedia',
    icon: '🗣️',
    summary: 'Trattamento dei disturbi legati alla comunicazione, il linguaggio verbale e scritto, e la deglutizione.',
    content: (
      <div className="space-y-6">
        <div className="font-sans text-gray-700 leading-relaxed space-y-4">
          <p>
            In età evolutiva la logopedia tratta tutti i disturbi legati alla comunicazione, l’evoluzione del linguaggio verbale e scritto attraverso il gioco guidato. In età adulta si interviene con terapie mirate su patologie specifiche. E’ possibile, inoltre, realizzare un trattamento di tipo mio-funzionale sia in età evolutiva che adulta atto a riequilibrare i muscoli della masticazione, deglutizione ed articolazione.
          </p>
          <p>
            In età adulta e senile la logopedia si occupa di riabilitare le funzioni connesse alla comunicazione verbale, alla comprensione, alla memoria e di educare ad una corretta deglutizione, in particolare legata all’alimentazione.
          </p>
        </div>
        <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mt-6">
          <h4 className="font-bold text-[#0b3c82] mb-4 text-lg">INDICATA PER:</h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm font-sans text-gray-700">
            <li className="flex items-start"><span className="text-[#e30613] mr-2">•</span> Ritardo di linguaggio</li>
            <li className="flex items-start"><span className="text-[#e30613] mr-2">•</span> Difficoltà di apprendimento</li>
            <li className="flex items-start"><span className="text-[#e30613] mr-2">•</span> Disturbi Specifici di Apprendimento (DSA quali dislessia, disortografia e discalculia)</li>
            <li className="flex items-start"><span className="text-[#e30613] mr-2">•</span> Disturbi specifici del linguaggio (disfasia)</li>
            <li className="flex items-start"><span className="text-[#e30613] mr-2">•</span> Disartria</li>
            <li className="flex items-start"><span className="text-[#e30613] mr-2">•</span> Balbuzie</li>
            <li className="flex items-start"><span className="text-[#e30613] mr-2">•</span> Ritardo mentale</li>
            <li className="flex items-start"><span className="text-[#e30613] mr-2">•</span> Sindromi genetiche</li>
            <li className="flex items-start"><span className="text-[#e30613] mr-2">•</span> Disturbo misto dello sviluppo</li>
            <li className="flex items-start"><span className="text-[#e30613] mr-2">•</span> Disturbi della deglutizione (deglutizione atipica), disfagia dell’anziano</li>
            <li className="flex items-start"><span className="text-[#e30613] mr-2">•</span> Patologie della voce (disfonie, adulti e bambini)</li>
            <li className="flex items-start"><span className="text-[#e30613] mr-2">•</span> Afasie post-traumatiche e patologie lesionali (ictus, esiti di traumi cranici, patologie neurodegenerative e altre)</li>
            <li className="flex items-start"><span className="text-[#e30613] mr-2">•</span> Disprassia verbale - Tecnica PROMPT</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 'psicomotricita',
    title: 'Psicomotricità',
    icon: '🏃‍♂️',
    summary: 'Osserva e sostiene l’attività psichica attraverso il movimento del corpo, con il fine di armonizzare lo sviluppo.',
    content: (
      <div className="space-y-6">
        <div className="font-sans text-gray-700 leading-relaxed space-y-4">
          <p>
            La Psicomotricità osserva e sostiene l’attività psichica attraverso il movimento del corpo, con il fine di armonizzare lo sviluppo della persona.
            La Terapia Psicomotoria si rivolge a bambini e/o preadolescenti che, per cause diverse (organiche o ambientali) presentano conclamate patologie, ritardi o disarmonie di sviluppo o che sopportano difficoltà importanti nella loro crescita.
          </p>
          <p>
            Essa interviene, con uno sguardo d’insieme su specifiche aree funzionali: <strong>AREA MOTORIA, AREA RELAZIONALE, AREA PSICOMOTORIA, AREA COGNITIVA, AREA DEL GIOCO, ATTENZIONE</strong>.
          </p>
          <p>
            La Terapia Neuropsicomotoria è una branca della Medicina Riabilitativa che si occupa della prevenzione e soprattutto del recupero funzionale e/o del potenziamento motorio, cognitivo e comunicativo e relazionale del bambino. È una disciplina che ha come obiettivo finale quello di permettere INTEGRAZIONE ARMONICA dei diversi aspetti (motori, funzionali, affettivi, relazionali e cognitivi) che consentono di accompagnare il processo di crescita e di ristabilire un’immagine di sé positiva, integrata, solida e strutturata, che favorisca scambi comunicativi ricchi e creativi con l’ambiente e con le persone che lo popolano.
          </p>
          <p>
            Il presupposto di fondo è che il piacere intrinseco alla possibilità di incidere sull’ambiente attraverso azioni, gesti e/o parole e relazioni, funzioni per il bambino come uno stimolo a muoversi, esprimersi e comunicare utilizzando il suo patrimonio funzionale, anche quando questo non sia completamente integro.
          </p>
          <p>
            Nella seduta di psicomotricità vengono incoraggiate le ABILITÀ ESPRESSIVE e prese in considerazione le peculiari caratteristiche di ogni soggetto, a seconda della sua personalità, della tappa evolutiva che sta attraversando e considerando i limiti dovuti ad una eventuale patologia.
          </p>
        </div>
        
        <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
          <h4 className="font-bold text-[#0b3c82] mb-2 text-lg">IN PSICOMOTRICITA’ VENGONO UTILIZZATI:</h4>
          <p className="font-sans text-gray-700 text-sm">
            L’esplorazione senso motoria e l’utilizzo di spazi e oggetti, l’attività motoria, il gioco, la relazione terapeutica, le attività espressive corporee, vocali, musicali, grafiche e plastiche e il rilassamento.
          </p>
        </div>

        <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
          <h4 className="font-bold text-[#e30613] mb-4 text-lg">INDICATA PER:</h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm font-sans text-gray-700">
            <li className="flex items-start"><span className="text-[#e30613] mr-2">•</span> Ritardo psicomotorio</li>
            <li className="flex items-start"><span className="text-[#e30613] mr-2">•</span> Ritardo neuromotorio, degenerazione neuromotoria</li>
            <li className="flex items-start"><span className="text-[#e30613] mr-2">•</span> Disturbi della coordinazione (disprassia e altri)</li>
            <li className="flex items-start"><span className="text-[#e30613] mr-2">•</span> Disgrafia (disturbo specifico della scrittura)</li>
            <li className="flex items-start"><span className="text-[#e30613] mr-2">•</span> Deficit di attenzione e iperattività ADHD</li>
            <li className="flex items-start"><span className="text-[#e30613] mr-2">•</span> Disturbi emotivo-relazionali (disturbi della regolazione, disturbi dell’attaccamento, autismo, disturbo generalizzato dello sviluppo DGS e altri)</li>
            <li className="flex items-start"><span className="text-[#e30613] mr-2">•</span> Difficoltà comportamentali (iperattività, inibizione, disturbo oppositivo-provocatorio e altri)</li>
            <li className="flex items-start"><span className="text-[#e30613] mr-2">•</span> Disturbi comportamentali da neurodegenerazione (wandering, aggressività, agitazione, insonnia e altri)</li>
            <li className="flex items-start"><span className="text-[#e30613] mr-2">•</span> Disturbo misto dello sviluppo</li>
            <li className="flex items-start"><span className="text-[#e30613] mr-2">•</span> Ritardi cognitivi</li>
            <li className="flex items-start"><span className="text-[#e30613] mr-2">•</span> Sindromi genetiche</li>
            <li className="flex items-start"><span className="text-[#e30613] mr-2">•</span> Obesità e altri</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 'psicologia',
    title: 'Psicologia e Psicoterapia',
    icon: '🧠',
    summary: 'Attività rivolta a bambini, ragazzi e adulti che possono incontrare difficoltà di natura emotiva, relazionale, intellettiva.',
    content: (
      <div className="space-y-6">
        <div className="font-sans text-gray-700 leading-relaxed space-y-4">
          <p>
            L’attività dello psicologo è rivolta a bambini, ragazzi e adulti che possono incontrare difficoltà di natura emotiva, relazionale, intellettiva.
            È inoltre indirizzata a genitori ed educatori nei quali possono insorgere dubbi o preoccupazioni legate al loro ruolo.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
            <h4 className="font-bold text-[#0b3c82] mb-4 text-lg">TIPI DI INTERVENTO:</h4>
            <ul className="space-y-2 text-sm font-sans text-gray-700">
              <li className="flex items-start"><span className="text-[#0b3c82] mr-2">•</span> diagnosi e valutazione psicologica</li>
              <li className="flex items-start"><span className="text-[#0b3c82] mr-2">•</span> diagnosi, valutazione e terapia per DSA</li>
              <li className="flex items-start"><span className="text-[#0b3c82] mr-2">•</span> consulenza psicologica</li>
              <li className="flex items-start"><span className="text-[#0b3c82] mr-2">•</span> psicoterapia individuale o di gruppo</li>
              <li className="flex items-start"><span className="text-[#0b3c82] mr-2">•</span> terapia familiare</li>
              <li className="flex items-start"><span className="text-[#0b3c82] mr-2">•</span> terapia di coppia</li>
              <li className="flex items-start"><span className="text-[#0b3c82] mr-2">•</span> terapia EMDR</li>
            </ul>
          </div>
          
          <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
            <h4 className="font-bold text-[#e30613] mb-4 text-lg">INDICATA PER:</h4>
            <ul className="space-y-2 text-sm font-sans text-gray-700">
              <li className="flex items-start"><span className="text-[#e30613] mr-2">•</span> Disturbi alimentari</li>
              <li className="flex items-start"><span className="text-[#e30613] mr-2">•</span> Disturbi del sonno</li>
              <li className="flex items-start"><span className="text-[#e30613] mr-2">•</span> Disturbi della condotta (aggressività, disturbo oppositivo-provocatorio, condotta asociale)</li>
              <li className="flex items-start"><span className="text-[#e30613] mr-2">•</span> Disturbi dell’umore</li>
              <li className="flex items-start"><span className="text-[#e30613] mr-2">•</span> Disturbi della regolazione emotiva</li>
              <li className="flex items-start"><span className="text-[#e30613] mr-2">•</span> Disturbi dell’attaccamento</li>
              <li className="flex items-start"><span className="text-[#e30613] mr-2">•</span> Autismo e disturbi generalizzati dello sviluppo DGS</li>
              <li className="flex items-start"><span className="text-[#e30613] mr-2">•</span> Disturbi d’ansia, depressione (primaria e secondaria)</li>
              <li className="flex items-start"><span className="text-[#e30613] mr-2">•</span> Psicosi, Nevrosi</li>
              <li className="flex items-start"><span className="text-[#e30613] mr-2">•</span> Disturbo compulsivo-ossessivo</li>
              <li className="flex items-start"><span className="text-[#e30613] mr-2">•</span> Disturbo post traumatico da stress</li>
              <li className="flex items-start"><span className="text-[#e30613] mr-2">•</span> ADHD</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'neuropsicologia',
    title: 'Neuropsicologia – DSA',
    icon: '🧩',
    summary: 'Valutazione e trattamento delle funzioni cognitive del bambino e riabilitazione di deficit in età adulta e senile.',
    content: (
      <div className="space-y-6">
        <div className="font-sans text-gray-700 leading-relaxed space-y-4">
          <p>
            In età evolutiva, la neuropsicologia si occupa della valutazione e del trattamento/potenziamento delle funzioni cognitive del bambino (ossia attenzione, linguaggio, memoria, percezione, prassie) e degli apprendimenti (lettura, scrittura e calcolo).
            Si occupa inoltre della riabilitazione di eventuali deficit cognitivi e delle annesse implicazioni di tipo psicologico, affettivo e di personalità.
          </p>
          <p>
            In età adulta e senile, con le persone affette da patologie neurodegenerative, la neuropsicologia offre validi strumenti di mantenimento delle abilità cognitive residue (in ambito linguistico, della memoria e delle capacità di attenzione), a partire da un’approfondita valutazione.
          </p>
        </div>

        <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
          <h4 className="font-bold text-[#0b3c82] mb-4 text-lg">IL LAVORO DEL NEUROPSICOLOGO SI ARTICOLA IN:</h4>
          <ul className="space-y-3 text-sm font-sans text-gray-700">
            <li className="flex items-start"><span className="text-[#0b3c82] mr-2">•</span> Attività di potenziamento delle funzioni cognitive di base e degli apprendimenti tramite giochi ed esercizi</li>
            <li className="flex items-start"><span className="text-[#0b3c82] mr-2">•</span> Accompagnamento alla individuazione e utilizzo di strategie compensative per meglio valorizzare le competenze presenti</li>
            <li className="flex items-start"><span className="text-[#0b3c82] mr-2">•</span> Sviluppo di uno stile metacognitivo di approccio al compito, ossia di riflessione e consapevolezza sui processi mentali e sui propri punti di forza e di debolezza.</li>
          </ul>
        </div>

        <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
          <h4 className="font-bold text-[#e30613] mb-4 text-lg">INDICATA PER:</h4>
          <ul className="space-y-2 text-sm font-sans text-gray-700">
            <li className="flex items-start"><span className="text-[#e30613] mr-2">•</span> Disturbi dell’apprendimento (dislessia, disortografia e discalculia)</li>
            <li className="flex items-start"><span className="text-[#e30613] mr-2">•</span> Disturbi dell’attenzione, memoria, percezione</li>
            <li className="flex items-start"><span className="text-[#e30613] mr-2">•</span> Ritardo mentale o profilo cognitivo borderline</li>
            <li className="flex items-start"><span className="text-[#e30613] mr-2">•</span> Patologie neurodegenerative senili e invecchiamento</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 'neuropsichiatria',
    title: 'Neuropsichiatria infantile',
    icon: '🩺',
    summary: 'Medico specializzato in prevenzione, diagnosi, cura e riabilitazione di patologie neuropsicologiche da 0 a 18 anni.',
    content: (
      <div className="space-y-6">
        <div className="font-sans text-gray-700 leading-relaxed space-y-4">
          <p>
            Il neuropsichiatra infantile è un medico specializzato che si occupa della prevenzione, della diagnosi, della cura e della riabilitazione di patologie neurologiche, neuropsicologiche e psichiatriche che possono incorrere da 0 a 18 anni. Questo specialista entra in gioco nel caso di patologie come paralisi cerebrali infantili, epilessia, disturbi del neurosviluppo (come ADHD oppure il disturbo dello spettro autistico) fino ai disturbi dell'apprendimento e può lavorare sia nelle Asl/strutture ospedaliere che nei centri privati. Spesso lavora in equipe insieme ai logopedisti, agli psicologi dell'età evolutiva e ai terapisti della neuro psicomotricità dell’età evolutiva, seguendo il percorso diagnostico- valutativo e condividendo gli obiettivi di un percorso riabilitativo.
          </p>
          <p>
            La famiglia si rivolge al neuropsichiatra infantile quando insorge una difficoltà in un bambino/adolescente in ambiti neurologico, psichiatrico o neuropsicologico. Ad esempio nel momento in cui i genitori si accorgono che può esserci un ritardo nell'acquisizione del linguaggio o dello sviluppo motorio, oppure difficoltà nell'apprendimento scolastico o ancora se il bambino manifesta un possibile disturbo dell'umore (es.ansia o depressione). Le segnalazioni non arrivano solo dai genitori ma anche dalle insegnanti o dai pediatri che indirizzano la famiglia verso una visita specialistica.
          </p>
          <p>
            La visita del Neuropsichiatra Infantile è essenziale per comprendere la reale difficoltà del bambino e individuare la migliore strategia di intervento per aiutarlo, dandogli i giusti strumenti per affrontare la sua difficoltà.
          </p>
          <p>
            Numerosi studi sulla diagnosi precoce fanno leva sul fatto che la plasticità neuronale durante la fase evolutiva è molto elevata: questo significa che intervenendo prima si può veramente fare la differenza. Ad esempio, nel caso dei bambini a cui viene diagnosticato il disturbo dello spettro autistico, fare una diagnosi entro i primi tre anni di vita significa iniziare un percorso terapeutico molto precocemente, che permette al bambino di migliorare e acquisire nuove competenze negli ambiti che a lui sono più difficili. Anche diagnosticare precocemente un disturbo dell’apprendimento è fondamentale, poiché il bambino potrà usufruire degli strumenti compensativi e dispensativi adatti che gli permetteranno quanto prima di avere un apprendimento adeguato alle sue necessità. È fondamentale farlo quanto prima anche per evitare che il bambino emotivamente si senta “sbagliato” o non adeguato rispetto ai suoi compagni di classe che magari possono avere un apprendimento più veloce. In tal modo si rafforzerà anche la sua autostima e si potenzieranno le sue capacità tramite gli strumenti forniti.
          </p>
          <p>
            La nostra equipe è costituita da medici e terapisti specializzati nell’ambito clinico- diagnostico e, posta la diagnosi, si rende disponibile per offrire un supporto sinergico a famiglie, insegnanti e altri specialisti coinvolti nell’intervento sul bambino/ragazzo.
          </p>
        </div>
      </div>
    )
  },
  {
    id: 'feuerstein',
    title: 'Metodo Feuerstein',
    icon: '💡',
    summary: 'Basato sulla modificabilità cognitiva strutturale, insegna come imparare spostando l’attenzione dai risultati ai processi.',
    content: (
      <div className="space-y-6">
        <div className="font-sans text-gray-700 leading-relaxed space-y-4">
          <p>
            Basato sul concetto di modificabilità cognitiva strutturale, questo metodo insegna come imparare, sposta l’attenzione dai risultati ai processi, al come si arriva ai risultati. Mira a formare delle competenze applicabili alle diverse situazioni di vita.
          </p>
          <p>Si struttura in 3 strumenti fondamentali:</p>
          
          <div className="space-y-4 pl-4">
            <div>
              <strong className="text-gray-900 block">1 - LPAD (Learning Potential Assesment Device)</strong>
              Sistema di valutazione del potenziale di apprendimento. A differenza del test standard, LPAD è strutturato in modo da conoscere come il soggetto impara, quali sono le funzioni cognitive carenti. Non si ferma alle risposte date, ma “media” la possibilità di arrivarci.
            </div>
            <div>
              <strong className="text-gray-900 block">2 - PAS (Programma di Arricchimento Strumentale)</strong>
              Composto da 14 strumenti, composti da una serie di esercizi di difficoltà crescente, che si pone come obiettivo il superamento delle funzioni cognitive carenti.
            </div>
            <div>
              <strong className="text-gray-900 block">3 - EAM (Esperienza di apprendimento mediato)</strong>
              Il prof. Feuerstein sostiene e pratica la pedagogia della mediazione, che è uno stile di relazione che si pone nei confronti del soggetto con l’assoluta convinzione del cambiamento. Il mediatore è una persona che si fa carico in modo intenzionale degli apprendimenti del bambino nei seguenti modi: seleziona gli stimoli, amplifica, modifica, filtra, “altera” le condizioni naturali degli stimoli, che sarebbero casuali, per creare condizioni più favorevoli all’apprendimento.
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mt-6">
          <h4 className="font-bold text-[#0b3c82] mb-3 text-lg">Gruppi di Potenziamento Cognitivo con il Metodo Feuerstein</h4>
          <p className="font-sans text-sm text-gray-700 mb-3">Durante questi incontri si sperimenteranno alcuni strumenti del PAS con i seguenti obiettivi:</p>
          <ul className="space-y-2 text-sm font-sans text-gray-700 mb-4">
            <li className="flex items-start"><span className="text-[#0b3c82] mr-2">•</span> Sperimentare e acquisire consapevolezza delle proprie capacità e competenze</li>
            <li className="flex items-start"><span className="text-[#0b3c82] mr-2">•</span> Acquisire un metodo per imparare e per studiare</li>
            <li className="flex items-start"><span className="text-[#0b3c82] mr-2">•</span> Migliorare il proprio senso di competenza e incrementare l’autostima</li>
            <li className="flex items-start"><span className="text-[#0b3c82] mr-2">•</span> Potenziare le abilità scolastiche</li>
          </ul>
          <p className="font-sans text-sm text-gray-700">
            Prima di avviare il percorso si terrà un incontro per genitori per coinvolgerli direttamente nel processo di apprendimento. Utile anche un incontro individuale con ciascuno dei bambini che parteciperanno al gruppo. Alla fine del percorso è previsto un incontro di restituzione alle famiglie, sia di gruppo sia individuale.
          </p>
        </div>

        <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
          <h4 className="font-bold text-[#e30613] mb-2 text-lg">INDICATA PER:</h4>
          <p className="font-sans text-sm text-gray-700">
            Tale metodo viene applicato in diverse situazioni: ritardi mentali, difficoltà di apprendimento, formazione in ambito aziendale. Tale diversificazione è giustificata dal fatto che la metodologia e gli strumenti utilizzati, possono essere applicati a livelli diversi e hanno l’obiettivo di rendere il soggetto protagonista attivo del suo apprendimento a partire dalla consapevolezza delle operazioni mentali e delle strategie, che ciascuno utilizza nei processi di apprendimento e risoluzione. Viene applicato sia individualmente sia in gruppo.
          </p>
        </div>
      </div>
    )
  },
  {
    id: 'mediazione',
    title: 'Mediazione Familiare',
    icon: '🤝',
    summary: 'Intervento per genitori in separazione che vivono una situazione di disagio in relazione alla gestione dei figli.',
    content: (
      <div className="space-y-6">
        <div className="font-sans text-gray-700 leading-relaxed space-y-4">
          <p>
            La mediazione familiare è un intervento pensato per genitori, conviventi o sposati in fase di separazione, separati o divorziati che vivono una situazione di disagio e conflittualità, in relazione alla gestione dei figli.
          </p>
        </div>
        
        <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
          <h4 className="font-bold text-[#0b3c82] mb-2 text-lg">IL PERCORSO E’ FINALIZZATO:</h4>
          <p className="font-sans text-sm text-gray-700">
            Al recupero delle capacità di comunicazione e collaborazione, per definire accordi e prendere decisioni condivise anche nella quotidianità, partendo dai bisogni dei figli.
          </p>
        </div>

        <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
          <h4 className="font-bold text-[#e30613] mb-2 text-lg">INDICATA PER:</h4>
          <p className="font-sans text-sm text-gray-700">
            Situazioni di difficoltà relazionali, emotive, educative o psicologiche in relazione a separazione o divorzio della coppia con figli.
          </p>
        </div>
      </div>
    )
  },
  {
    id: 'aba',
    title: 'Metodo cognitivo-comportamentale A.B.A. per l’ autismo',
    icon: '⭐',
    summary: 'L\'approccio scientificamente più valido per il trattamento dei disturbi dello spettro autistico (Analisi Comportamentale Applicata).',
    content: (
      <div className="space-y-6">
        <div className="font-sans text-gray-700 leading-relaxed space-y-4">
          <p>
            La metodologia ABA per l’autismo, il cui acronimo vuol dire Analisi Comportamentale Applicata, è la scienza applicata che deriva dalla scienza di base conosciuta come Analisi del Comportamento Secondo Baer, Wolf e Risley (1968), l’applicazione dei principi del comportamento è tesa ad incrementare e migliorare specifici comportamenti considerati socialmente significativi. In altri termini la terapia ABA cerca di comprendere in che modo i comportamenti si modificano o come possono essere influenzati dall’ambiente esterno, in modo tale da applicare tali principi per ampliare il repertorio comportamentale di persone.
          </p>
          <p>
            Le “Linea guida 21 per Il trattamento dei Disturbi dello Spettro Autistico (ASD) nei bambini e negli adolescenti” consigliano l’utilizzo delle procedure derivate dall’ABA per il trattamento di dette condizioni, alla luce dei numerosi studi che ne sostengono l’efficacia nel migliorare le abilità intellettive, il linguaggio, i comportamenti adattivi ed, in generale, la qualità della vita in bambini con ASD (e non solo!).
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 mt-6">
          <h4 className="font-bold text-gray-900 mb-4 text-lg">I profili delle figure coinvolte:</h4>
          
          <div className="space-y-6">
            <div>
              <h5 className="font-bold text-[#0b3c82] text-md mb-2">SUPERVISORE ABA</h5>
              <p className="font-sans text-sm text-gray-700 mb-2">
                Psicologo / psicoterapeuta o medico che ha conseguito una specifica formazione in qualità di supervisore per gli interventi ABA. I principali compiti di un supervisore ABA sono:
              </p>
              <ul className="space-y-2 text-sm font-sans text-gray-700 pl-4">
                <li className="flex items-start"><span className="text-[#0b3c82] mr-2">•</span> <strong>Raccogliere dati:</strong> descrivere i comportamenti facendo riferimento a caratteristiche osservabili e misurabili.</li>
                <li className="flex items-start"><span className="text-[#0b3c82] mr-2">•</span> <strong>Formulazione di un progetto terapeutico personalizzato:</strong> sviluppare un programma basato sui problemi specifici e capacità di apprendimento del bambino.</li>
                <li className="flex items-start"><span className="text-[#0b3c82] mr-2">•</span> <strong>Ascolto:</strong> presa in carico globale, inclusa formazione rivolta ai genitori e strategie per il contesto familiare.</li>
                <li className="flex items-start"><span className="text-[#0b3c82] mr-2">•</span> <strong>Coordinamento del team:</strong> supervisionare i terapisti ABA e altre figure rilevanti.</li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-[#e30613] text-md mb-2">TERAPISTA ABA</h5>
              <p className="font-sans text-sm text-gray-700 mb-2">
                Specializzato nell’insegnamento delle procedure e strategie comportamentali. Lavorano sotto la stretta supervisione di un analista. Compiti specifici:
              </p>
              <ul className="space-y-2 text-sm font-sans text-gray-700 pl-4">
                <li className="flex items-start"><span className="text-[#e30613] mr-2">•</span> Implementare programmi di comunicazione in sessioni uno a uno</li>
                <li className="flex items-start"><span className="text-[#e30613] mr-2">•</span> Costruire una buona relazione con il bambino e la sua famiglia</li>
                <li className="flex items-start"><span className="text-[#e30613] mr-2">•</span> Prendere note per ciascuna sessione e inserire dati in database</li>
                <li className="flex items-start"><span className="text-[#e30613] mr-2">•</span> Osservare il comportamento e applicare strategie di riabilitazione idonee</li>
                <li className="flex items-start"><span className="text-[#e30613] mr-2">•</span> Monitorare gli esiti dell’intervento</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
];

export default function ServiziAccordion() {
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
      {services.map((service) => {
        const isOpen = openId === service.id;
        
        return (
          <div 
            key={service.id}
            className={`bg-white rounded-3xl border transition-all duration-300 overflow-hidden ${
              isOpen 
                ? 'border-blue-200 shadow-lg shadow-blue-900/5' 
                : 'border-gray-200/80 shadow-sm hover:border-gray-300'
            }`}
          >
            {/* Header / Clickable area */}
            <button
              onClick={(e) => handleToggle(service.id, e.currentTarget)}
              className="w-full text-left p-6 md:p-8 flex items-center gap-4 md:gap-6 focus:outline-none"
              aria-expanded={isOpen}
            >
              <div className="text-3xl md:text-4xl select-none shrink-0 w-12 flex items-center justify-center">
                {service.icon}
              </div>
              
              <div className="flex-1 min-w-0 text-left">
                <h3 className="text-xl md:text-2xl font-display font-bold text-gray-900 leading-tight">
                  {service.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-500 font-sans mt-1">
                  {service.summary}
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
                {service.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
