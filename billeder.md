# Billedbibliotek — FysioDanmark Brøndby

Alle billeder på sitet er registreret her med et unikt ID.  
Når et billede er klar, tilføjes filstien i **`billeder.js`** under det matchende ID.  
Placeholderen på siden erstattes automatisk ved næste genindlæsning.

---

## Sådan tilføjer du et nyt billede

1. Gem billedfilen i `assets/images/`
2. Åbn `billeder.js`
3. Find det relevante ID (se tabellerne nedenfor)
4. Fjern `//` foran linjen og indsæt filstien:
   ```js
   "KIRO-HERO": "assets/images/kiropraktor-hero.webp",
   ```
5. Genindlæs siden — placeholderen erstattes automatisk

---

## ID-konvention

Format: `[SIDE]-[POSITION]`

| Præfiks | Side |
|---------|------|
| `HOME`  | Forside |
| `KIRO`  | Kiropraktor klinik |
| `RYG`   | Rygspecialist Enheden |
| `FAELLES` | Bruges på flere sider (kort, logo) |

---

## Registrerede billeder

### Forside

| ID | Position | Filnavn (forslag) | Format | Indhold | Status |
|----|----------|-------------------|--------|---------|--------|
| `HOME-HERO` | Hero baggrundsbillede | `hero-bygning.jpg` | 16:9, min. 1600×900px | Bygningen — Brøndby Sundhedshus. Skråvinkel, blå himmel, grønt areal foran | ⏳ Afventer |
| `HOME-LOGO` | Logo i nav + footer | `logo.png` | PNG m. transparent baggrund, min. 300×120px | FysioDanmark Brøndby logo | ⏳ Afventer |

---

### Kiropraktor klinik (`/kiropraktor-broendby`)

| ID | Position | Filnavn (forslag) | Format | Indhold | Status |
|----|----------|-------------------|--------|---------|--------|
| `KIRO-HERO` | Hero — højre kolonne | `kiropraktor-hero.webp` | 16:10, min. 1200×750px | Jørgen i konsultation med patient. Varm lyssætning, roligt klinikmiljø | ⏳ Afventer |
| `KIRO-PORTRAET` | Sek. 2 — venstre kolonne | `kiropraktor-portraet-joergen.webp` | 3:4, min. 600×800px | Professionelt portræt Jørgen Kilsgaard. Neutralt klinikmiljø, afrundede hjørner | ⏳ Afventer |
| `KIRO-ACTION` | Prisliste — venstre kolonne | `kiropraktor-action.webp` | 3:4, min. 600×800px | Stemningsbillede af kiropraktisk behandling. Hænder på patient i fokus | ⏳ Afventer |
| `KIRO-KORT` | Find os — venstre kolonne | *(Google Maps embed)* | iframe | Google Maps med pin på Park Allé 156 | ⏳ Afventer |

---

### Rygspecialist Enheden (`/rygspecialist-enheden`)

| ID | Position | Filnavn (forslag) | Format | Indhold | Status |
|----|----------|-------------------|--------|---------|--------|
| `RYG-HERO` | Hero — højre kolonne | `rygspecialist-hero.webp` | 16:10, min. 1200×750px | Tværfagligt team i behandlingsrum eller Jørgen i faglig samtale. Faglig tyngde | ⏳ Afventer |
| `RYG-PORTRAET` | Sek. 2 — venstre kolonne | `rygspecialist-portraet-joergen.webp` | 3:4, min. 600×800px | Portræt Jørgen Kilsgaard (evt. andet end kiropraktor-versionen). Imødekommende | ⏳ Afventer |
| `RYG-ACTION` | Prisliste — venstre kolonne | `rygspecialist-action.webp` | 3:4, min. 600×800px | Behandlingssituation eller faglig samtale i rygspecialist-kontekst | ⏳ Afventer |
| `RYG-KORT` | Find os — venstre kolonne | *(Google Maps embed)* | iframe | Google Maps med pin på Park Allé 156 (deles med KIRO) | ⏳ Afventer |

---

## Statuskoder

| Symbol | Betydning |
|--------|-----------|
| ✅ Klar | Fil gemt + registreret i `billeder.js` — vises live |
| ⏳ Afventer | Afventer foto — placeholder vises |
| 📐 Skal beskæres | Fil modtaget men skal tilpasses format/størrelse |
| 🔒 CMS | Indsættes af Web Koncept ved CMS-integration |

---

## Tilføj fremtidig side

Når en ny underside oprettes, tilføj en ny tabel her:

```md
### [Sidenavn] (`/[url-slug]`)

| ID | Position | Filnavn | Format | Indhold | Status |
|----|----------|---------|--------|---------|--------|
| `[PRÆFIKS]-HERO` | Hero | `[filnavn].webp` | 16:10 | ... | ⏳ Afventer |
| `[PRÆFIKS]-PORTRAET` | Portræt | `[filnavn].webp` | 3:4 | ... | ⏳ Afventer |
```

---

## Teknisk note

Alle `<div class="img-slot" data-img-id="KIRO-HERO">` i HTML-filerne  
matches automatisk mod `billeder.js` ved sideindlæsning.  
Placeholderen viser altid sit eget ID, så det er nemt at identificere  
præcis hvilken fil der skal indsættes.
