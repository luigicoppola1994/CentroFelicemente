# Centro Felicemente - Sito Web Astro + React

Sito web ricreato con Astro e React basato sul contenuto originale di CentroFelicemente.

## Struttura del Progetto

```
astro-react/
├── src/
│   ├── components/       # Componenti React
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Stats.tsx
│   │   ├── Services.tsx
│   │   ├── Support.tsx
│   │   ├── ABAMethod.tsx
│   │   ├── ContactForm.tsx
│   │   └── Footer.tsx
│   ├── layouts/
│   │   └── Layout.astro   # Layout principale
│   ├── pages/
│   │   └── index.astro    # Homepage
│   └── styles/
│       └── global.css    # Stili globali con Tailwind
├── public/                # File statici (immagini, ecc.)
├── astro.config.mjs       # Configurazione Astro
├── tailwind.config.mjs    # Configurazione Tailwind
├── tsconfig.json          # Configurazione TypeScript
└── package.json           # Dipendenze
```

## Componenti Principali

- **Header**: Navigazione responsive con menu mobile
- **Hero**: Sezione hero con call-to-action
- **Stats**: Statistiche del centro (operatori, ore di terapia, ecc.)
- **Services**: Griglia dei servizi offerti
- **Support**: Sezione per sostenere il centro
- **ABAMethod**: Informazioni sul metodo ABA
- **ContactForm**: Form di contatto
- **Footer**: Contatti, orari e mappa

## Installazione

1. Naviga nella directory del progetto:
```bash
cd astro-react
```

2. Installa le dipendenze:
```bash
npm install
```

Se l'installazione fallisce con errori relativi a esbuild, prova a pulire la cache:
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

3. Avvia il server di sviluppo:
```bash
npm run dev
```

4. Apri il browser su `http://localhost:4321`

## Comandi Disponibili

- `npm run dev` - Avvia il server di sviluppo
- `npm run build` - Crea il build di produzione
- `npm run preview` - Anteprima del build di produzione

## Tecnologie Utilizzate

- **Astro**: Framework per siti web
- **React**: Libreria UI per i componenti interattivi
- **Tailwind CSS**: Framework CSS per lo styling
- **TypeScript**: Tipizzazione statica

## Note

Le immagini utilizzate nel sito originale devono essere copiate nella cartella `public/`:
- logo-4.png

- AdobeStock_420415421-scaled-1.jpeg
- immagine-per-diagnosi-1.jpg
- CERTIFICAZIONIpng-2.jpg
- assdom-1.png
- IMMAGINE-per-riempire-la-sezione-servizi.png
- sostienici-scaled.jpg
- autismo.png
- icona.png

## Personalizzazione

I colori principali possono essere modificati in `tailwind.config.mjs`:
- `primary`: Colore principale (rosso)
- `secondary`: Colore secondario (giallo)
- `dark`: Colore scuro per footer
