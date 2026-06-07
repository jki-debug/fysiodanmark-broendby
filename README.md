# FysioDanmark Brøndby — Preview-system

Dette repository indeholder HTML-preview-sider til Anders Heckmanns godkendelse,  
inden Web Koncept integrerer indholdet i CMS'et.

**Preview-URL (lokalt):** `http://localhost:7700`  
**Preview-URL (Netlify):** `https://[dit-navn].netlify.app`  
**Start server:** `npx serve -p 7700` i projektmappen

---

## Filer i projektet

| Fil | Formål |
|-----|--------|
| `index.html` | Samlet preview med alle sider og panel-navigation |
| `design-guide.css` | Alle farver, fontstørrelser og designtokens — ret her |
| `billeder.js` | Billedregister — aktivér billeder her |
| `ikoner.js` | Ikonregister — alle ikoner og deres ID'er |
| `billeder.md` | Dokumentation for billedsystemet |
| `ikoner.md` | Dokumentation for ikonsystemet |
| `assets/images/` | Billedfiler gemmes her |

---

## Navigation i preview

Brug topmenuen til at skifte mellem sider:
- **Logo / Forside** — forsiden
- **Fagklinikker → Kiropraktor klinik**
- **Specialist enheder → Rygspecialist Enheden**

---

## Design Guide — farver og størrelser

Alle designtokens samles i **`design-guide.css`**. Ret én variabel — opdateres overalt.

### Brandfarver

```css
--farve-groen:        #77B834;   /* Primær grøn — knapper, ikoner, links */
--farve-groen-moerk:  #68a52d;   /* Hover */
--farve-graa-cta:     #82807E;   /* Sekundær grå knap */
--farve-footer:       #323232;   /* Footer baggrund */
```

### Fontstørrelser

```css
--fs-hero-h1:       48px;   /* Forside hero-titel */
--fs-hero-tagline:  36px;   /* Forside hero-undertitel */
--fs-h1:            42px;   /* Underside hero-overskrift */
--fs-h2:            19px;   /* Sektion-overskrifter */
--fs-body:          15px;   /* Brødtekst */
```

### Logo

```css
--logo-nav-hoejde:    50px;   /* Logo i navigationsbaren */
--logo-footer-hoejde: 36px;   /* Logo i footer */
```

### Hero-billede

```css
--hero-billede:    url('assets/images/hero-bygning.jpg');
--hero-moerkhed:   0.42;   /* 0 = lyst, 1 = sort — prøv 0.35–0.55 */
--hero-min-hoejde: 520px;
```

---

## Billedsystem

Alle billeder styres via **`billeder.js`**. Placeholders vises automatisk, indtil et billede aktiveres.

### Aktivér et billede

1. Gem billedfilen i `assets/images/`
2. Åbn `billeder.js`
3. Fjern `//` foran det matchende ID:
   ```js
   "HOME-HERO": { src: "assets/images/hero-bygning.jpg", alt: "Brøndby Sundhedshus" },
   ```
4. Genindlæs siden — placeholderen erstattes automatisk

### Registrerede billed-ID'er

| ID | Position | Fil | Status |
|----|----------|-----|--------|
| `HOME-LOGO` | Logo i nav + footer | `logo.png` | ✅ Klar |
| `HOME-HERO` | Forside hero-baggrund | `hero-bygning.jpg` | ✅ Klar |
| `KIRO-HERO` | Kiropraktor — hero | `kiropraktor-hero.webp` | ⏳ Afventer |
| `KIRO-PORTRAET` | Kiropraktor — portræt | `kiropraktor-portraet-joergen.webp` | ⏳ Afventer |
| `KIRO-ACTION` | Kiropraktor — prisliste | `kiropraktor-action.webp` | ⏳ Afventer |
| `RYG-HERO` | Rygspecialist — hero | `rygspecialist-hero.webp` | ⏳ Afventer |
| `RYG-PORTRAET` | Rygspecialist — portræt | `rygspecialist-portraet-joergen.webp` | ⏳ Afventer |
| `RYG-ACTION` | Rygspecialist — prisliste | `rygspecialist-action.webp` | ⏳ Afventer |

### Tilføj billede til ny side

Tilføj en ny sektion i `billeder.js`:
```js
// ── NY SIDE ─────────────────────────────────────────────
// "NYSTED-HERO": { src: "assets/images/ny-side-hero.webp", alt: "..." },
```

Og tilføj en ny tabel i `billeder.md`.

### Billedplaceholder — ret beskrivelsestekst

Placeholderens beskrivelse til fotografen rettes direkte i `index.html`.  
Søg (`Ctrl+F`) på det relevante billed-ID, fx `RYG-HERO`, og ret `img-slot-desc`:

```html
<div class="img-slot-desc">Din beskrivelse til fotografen her.</div>
```

---

## Ikonsystem

Alle ikoner er fra **[Lucide](https://lucide.dev/icons)** — et minimalistisk line-style bibliotek.  
Ikoner styres via **`ikoner.js`** med semantiske ID'er.

### Brug et ikon i HTML

```html
<i data-ikon-id="COND-HOVED"></i>
```

`ikoner.js` oversætter automatisk ID'et til det rigtige Lucide-ikon.

### Tilføj et nyt ikon

1. Find ikonets navn på [lucide.dev/icons](https://lucide.dev/icons) (fx `brain`)
2. Åbn `ikoner.js` og tilføj en linje:
   ```js
   "COND-NYT-IKON": "brain",
   ```
3. Brug `data-ikon-id="COND-NYT-IKON"` i HTML
4. Genindlæs siden

### Skift ikonbibliotek globalt

1. Skift CDN-linket i `<head>` til det nye bibliotek
2. Opdater ikonnavnene i `ikoner.js`
3. Alle sider opdateres automatisk — ingen HTML-ændringer nødvendige

### Registrerede ikon-ID'er

| ID | Lucide-navn | Bruges til |
|----|-------------|------------|
| `TOPBAR-TELEFON` | `phone` | Top-bar telefon |
| `TOPBAR-ADRESSE` | `map-pin` | Top-bar adresse |
| `TOPBAR-EMAIL` | `mail` | Top-bar e-mail |
| `HOME-KORT-KLINIK` | `stethoscope` | Forside fagklinik-kort |
| `HOME-KORT-SPECIALIST` | `scan-search` | Forside specialist-kort |
| `HOME-KORT-ERHVERV` | `building-2` | Forside erhvervs-kort |
| `UI-KAMERA` | `camera` | Billedplaceholder (foto) |
| `UI-PERSON` | `user` | Billedplaceholder (portræt) |
| `UI-KORT` | `map-pin` | Billedplaceholder (kort) |
| `TREAT-LED` | `move` | Ledfrigørende behandling |
| `TREAT-BLOEDDEL` | `hand` | Bløddelsbehandling |
| `TREAT-TRAENING` | `dumbbell` | Fase-specifik træning |
| `TREAT-UDDANNELSE` | `presentation` | Patientuddannelse |
| `COND-NAKKE` | `bone` | Hold i ryg/nakke |
| `COND-DISCUS` | `zap` | Diskusprolaps |
| `COND-HOVED` | `brain` | Spændingshovedpine |
| `COND-LED` | `alert-circle` | Overbelastning / led |
| `RYGT-UDREDNING` | `search` | Tværfaglig udredning |
| `RYGT-BEHANDLING` | `hand-helping` | Manuel behandling |
| `RYGT-REHAB` | `activity` | Rehabilitering |
| `RYGT-ERHVERV` | `briefcase` | Arbejdspladsindsats |
| `RYGS-KRONISK` | `bone` | Diskusprolaps (ryg) |
| `RYGS-SMERTER` | `heart-pulse` | Langvarige smerter |
| `RYGS-SYGEMELDT` | `stethoscope` | Sygemelding |
| `RYGS-KOMPLEKS` | `network` | Komplekse forløb |
| `DISC-KIRO` | `bone` | Kiropraktik |
| `DISC-FYSIO` | `activity` | Fysioterapi |
| `DISC-AKUPUNKTUR` | `syringe` | Akupunktur |
| `DISC-TRAENING` | `dumbbell` | Træning |
| `DISC-LAEGE` | `stethoscope` | Rygkirurg |
| `DISC-PSYKOLOG` | `brain` | Psykolog |
| `DISC-ERHVERV` | `briefcase` | Arbejdsplads |

### Juster ikon-størrelse og stroke

```css
/* Stroke-tykkelse for alle Lucide-ikoner */
svg[data-lucide] { stroke-width: 1.5; }  /* standard er 2 */
```

---

## Tilføj en ny side

1. Opret et nyt `<div id="panel-[navn]" class="page-panel">` i `index.html`
2. Tilføj et menupunkt i nav-dropdownen
3. Tilføj billed-ID'er i `billeder.js` og `billeder.md`
4. Tilføj ikon-ID'er i `ikoner.js` og `ikoner.md`
5. Opdater `showPanel()` med breadcrumb-tekst for den nye side

---

## Workflow — fra preview til CMS

1. Ret og byg i `index.html`
2. Send link (eller screenshot) til Anders Heckmann til godkendelse
3. Iterér til indholdet er godkendt
4. Send godkendt HTML + `design-guide.css` til Web Koncept til CMS-integration
5. Web Koncept håndterer Google Maps embeds, booking-integration og live-billeder

---

## Statuskoder for billeder

| Symbol | Betydning |
|--------|-----------|
| ✅ Klar | Fil gemt + aktiveret i `billeder.js` |
| ⏳ Afventer | Afventer foto — placeholder vises |
| 📐 Skal beskæres | Fil modtaget, men skal tilpasses format |
| 🔒 CMS | Indsættes af Web Koncept ved integration |
