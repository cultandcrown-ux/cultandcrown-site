# Cult & Crown: sito e blog

Sito statico in Astro con pannello per scrivere gli articoli su `/admin`.

## 1. Carica il progetto su GitHub
1. Su GitHub crea un nuovo repository chiamato `cultandcrown-site` (va bene anche privato).
2. Nella pagina del repository vuoto clicca "uploading an existing file" e trascina **il contenuto** di questa cartella (non la cartella stessa). Conferma con "Commit changes".

## 2. Pubblica con Cloudflare Pages (gratis)
1. Crea un account su cloudflare.com.
2. Workers & Pages > Create > Pages > Connect to Git, autorizza GitHub e scegli `cultandcrown-site`.
3. Framework preset: **Astro**. Build command: `npm run build`. Output directory: `dist`.
4. Deploy: dopo un paio di minuti il sito è online su un indirizzo `.pages.dev`.

## 3. Collega cultandcrown.com
1. In Cloudflare: Add a domain > `cultandcrown.com` > piano Free. Cloudflare ti mostra 2 nameserver.
2. Su SiteGround: Servizi > Domini > cultandcrown.com > Nameserver, sostituisci quelli attuali con i 2 di Cloudflare.
3. Se usi una email sul dominio, controlla in Cloudflare (DNS) che i record MX siano stati importati.
4. Quando il dominio risulta attivo su Cloudflare: progetto Pages > Custom domains > aggiungi `cultandcrown.com` e `www.cultandcrown.com`. HTTPS si attiva da solo.

## 4. Attiva il pannello per scrivere
1. Apri `public/admin/config.yml` (anche direttamente da GitHub, icona matita) e sostituisci `GITHUB-USERNAME` con il tuo username GitHub.
2. Su GitHub: Settings > Developer settings > Personal access tokens > Fine-grained tokens > Generate. Accesso solo al repository `cultandcrown-site`, permesso **Contents: Read and write**.
3. Vai su `cultandcrown.com/admin`, scegli "Sign in with token" e incolla il token.
4. Scrivi, carica la copertina, premi Publish: il sito si aggiorna da solo in 1-2 minuti.

## Note
- **Font**: il sito usa Bodoni Moda come sostituto. Metti `BodoniFLF-Roman.woff2`, `BodoniFLF-Bold.woff2` e `BodoniFLF-Italic.woff2` in `public/fonts` e il Bodoni FLF viene usato automaticamente.
- **Newsletter**: il form è pronto ma non ancora collegato. Quando scegli il servizio, l'indirizzo del form va in `src/components/Newsletter.astro`.
- **Articoli**: i 10 articoli in `src/content/articles` sono scalette da completare dal pannello.
- **Copertine**: se un articolo non ha la foto, il sito disegna una locandina con Film, Anno e Orologio (colore scelto con "Poster colour"). Caricando una foto, la locandina viene sostituita.
- **Reel in home**: titoli e link sono in `src/data/reels.ts`.
- **Categorie**: testi e nomi sono in `src/data/site.ts`.
- **Lavorare in locale** (facoltativo): `npm install` e poi `npm run dev`.
