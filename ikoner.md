# Ikonbibliotek — FysioDanmark Brøndby

Alle ikoner er fra **Lucide** — et åbent, minimalistisk ikonbibliotek i line-stil.  
Se hele kataloget på **[lucide.dev/icons](https://lucide.dev/icons)**.

---

## CDN — indsæt i `<head>` på alle sider

```html
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
<script src="ikoner.js" defer></script>
```

---

## Sådan bruger du et ikon

```html
<!-- Brug altid data-ikon-id — aldrig direkte Lucide-navn i HTML -->
<i data-ikon-id="COND-HOVED"></i>
```

`ikoner.js` oversætter automatisk ID'et til det rigtige Lucide-ikon og renderer det som SVG.

---

## Sådan tilføjer du et nyt ikon

1. Find ikonets navn på [lucide.dev/icons](https://lucide.dev/icons) (fx `brain`)
2. Åbn `ikoner.js`
3. Tilføj en ny linje i den relevante sektion:
   ```js
   "COND-NYT-IKON": "brain",
   ```
4. Brug det i HTML:
   ```html
   <i data-ikon-id="COND-NYT-IKON"></i>
   ```
5. Genindlæs siden — ikonet vises automatisk

---

## Sådan skifter du ikonbibliotek

Vil du prøve et andet bibliotek (fx [Heroicons](https://heroicons.com/) eller [Phosphor](https://phosphoricons.com/))?

1. Skift CDN-linket i `<head>`
2. Opdater ikonnavnene i `ikoner.js` (kun ét sted)
3. Alle sider opdateres automatisk

---

## Ikonkatalog

### Top bar

| ID | Ikon | Lucide-navn | Bruges |
|----|------|-------------|--------|
| `TOPBAR-TELEFON` | Telefon | `phone` | Top-bar kontakt |
| `TOPBAR-ADRESSE` | Adresse | `map-pin` | Top-bar adresse |
| `TOPBAR-EMAIL` | E-mail | `mail` | Top-bar e-mail |

---

### Forside-kort

| ID | Ikon | Lucide-navn | Bruges |
|----|------|-------------|--------|
| `HOME-KORT-KLINIK` | Stetoskop | `stethoscope` | Fagklinikker-kort |
| `HOME-KORT-SPECIALIST` | Zoom-søg | `scan-search` | Specialist-kort |
| `HOME-KORT-ERHVERV` | Bygning | `building-2` | Erhvervskort |

---

### UI — Billedplaceholders

| ID | Ikon | Lucide-navn | Bruges |
|----|------|-------------|--------|
| `UI-KAMERA` | Kamera | `camera` | Hero/action placeholder |
| `UI-PERSON` | Person | `user` | Portræt placeholder |
| `UI-KORT` | Kortpin | `map-pin` | Google Maps placeholder |

---

### Kiropraktor klinik — Behandlinger

| ID | Ikon | Lucide-navn | Behandling |
|----|------|-------------|------------|
| `TREAT-LED` | Bevæge | `move` | Ledfrigørende behandling |
| `TREAT-BLOEDDEL` | Hånd | `hand` | Bløddelsbehandling |
| `TREAT-TRAENING` | Vægtstang | `dumbbell` | Fase-specifik træning |
| `TREAT-UDDANNELSE` | Præsentation | `presentation` | Patientuddannelse / ergonomi |

---

### Kiropraktor klinik — Tilstande

| ID | Ikon | Lucide-navn | Tilstand |
|----|------|-------------|----------|
| `COND-NAKKE` | Knogle | `bone` | Hold i ryg eller nakke |
| `COND-DISCUS` | Lyn | `zap` | Diskusprolaps / nerveudstråling |
| `COND-HOVED` | Hjerne | `brain` | Spændingshovedpine |
| `COND-LED` | Advarselscirkel | `alert-circle` | Overbelastning / fastlåste led |

---

### Rygspecialist Enheden — Behandlinger

| ID | Ikon | Lucide-navn | Behandling |
|----|------|-------------|------------|
| `RYGT-UDREDNING` | Søg | `search` | Tværfaglig udredning |
| `RYGT-BEHANDLING` | Hjælpende hånd | `hand-helping` | Kiropraktisk behandling |
| `RYGT-REHAB` | Aktivitet | `activity` | Rehabilitering og træning |
| `RYGT-ERHVERV` | Mappe | `briefcase` | Arbejdspladsindsats |

---

### Rygspecialist Enheden — Tilstande

| ID | Ikon | Lucide-navn | Tilstand |
|----|------|-------------|----------|
| `RYGS-KRONISK` | Knogle | `bone` | Diskusprolaps / nerverodsirritation |
| `RYGS-SMERTER` | Hjerterytme | `heart-pulse` | Langvarige lænde- og nakkesmerter |
| `RYGS-SYGEMELDT` | Stetoskop | `stethoscope` | Uarbejdsdygtighed og sygemelding |
| `RYGS-KOMPLEKS` | Netværk | `network` | Komplekse tværfaglige forløb |

---

### Discipliner (Under ét tag)

| ID | Ikon | Lucide-navn | Faggruppe |
|----|------|-------------|-----------|
| `DISC-KIRO` | Knogle | `bone` | Kiropraktik |
| `DISC-FYSIO` | Aktivitet | `activity` | Fysioterapi |
| `DISC-AKUPUNKTUR` | Sprøjte | `syringe` | Akupunktur |
| `DISC-TRAENING` | Vægtstang | `dumbbell` | Træning |
| `DISC-LAEGE` | Stetoskop | `stethoscope` | Rygkirurg / speciallæge |
| `DISC-PSYKOLOG` | Hjerne | `brain` | Psykolog |
| `DISC-ERHVERV` | Mappe | `briefcase` | Arbejdsplads |

---

## CSS-størrelser

Lucide-ikoner er SVG og styres med `width`/`height` i CSS:

```css
/* Størrelser — bruges via container-klassen */
.condition-icon svg  { width: 20px; height: 20px; color: #77B834; }
.treatment-icon svg  { width: 20px; height: 20px; color: #77B834; }
.discipline-card svg { width: 22px; height: 22px; color: #77B834; }
.home-card-icon svg  { width: 26px; height: 26px; color: white; }
.img-slot-icon       { width: 36px; height: 36px; color: #b0c090; }
.top-bar-item svg    { width: 14px; height: 14px; color: #888; }
```

Vil du justere stroke-tykkelsen på alle Lucide-ikoner globalt:
```css
svg[data-lucide] { stroke-width: 1.5; } /* standard er 2 */
```

---

## Fremtidige sider

Når en ny side oprettes, tilføj en ny sektion i `ikoner.js`:

```js
// ── NY SIDE ──────────────────────────────────────────────
"NYSTED-BEHANDLING": "activity",
"NYSTED-COND-X":     "bone",
```

Og tilføj en ny tabel i denne fil.
