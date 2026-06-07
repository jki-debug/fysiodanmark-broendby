/**
 * ══════════════════════════════════════════════════════════
 *  IKONREGISTER — FysioDanmark Brøndby
 *  Se ikoner.md for fuld dokumentation.
 *
 *  Ikonbibliotek: Lucide (https://lucide.dev)
 *  Skift ikontype globalt ved at ændre IKON_BIBLIOTEK
 *  og opdatere ikonnavnene nedenfor.
 *
 *  Sådan bruger du et ikon i HTML:
 *    <i data-ikon-id="COND-HOVED"></i>
 *
 *  Lucide-navne: se https://lucide.dev/icons/
 * ══════════════════════════════════════════════════════════
 */

const IKONER = {

  // ── TOP BAR ──────────────────────────────────────────────
  "TOPBAR-TELEFON":   "phone",
  "TOPBAR-ADRESSE":   "map-pin",
  "TOPBAR-EMAIL":     "mail",

  // ── FORSIDE KORT ─────────────────────────────────────────
  "HOME-KORT-KLINIK":      "stethoscope",
  "HOME-KORT-SPECIALIST":  "scan-search",
  "HOME-KORT-ERHVERV":     "building-2",

  // ── UI — BILLEDE PLACEHOLDERS ────────────────────────────
  "UI-KAMERA":   "camera",
  "UI-PERSON":   "user",
  "UI-KORT":     "map-pin",

  // ── KIROPRAKTOR — BEHANDLINGER ───────────────────────────
  "TREAT-LED":          "move",           // Ledfrigørende behandling
  "TREAT-BLOEDDEL":     "hand",           // Bløddelsbehandling
  "TREAT-TRAENING":     "dumbbell",       // Fase-specifik træning
  "TREAT-UDDANNELSE":   "presentation",   // Patientuddannelse / ergonomi

  // ── KIROPRAKTOR — TILSTANDE ──────────────────────────────
  "COND-NAKKE":    "bone",           // Nakke- og rygproblemer
  "COND-DISCUS":   "zap",            // Diskusprolaps / nerveudstråling
  "COND-HOVED":    "brain",          // Spændingshovedpine
  "COND-LED":      "alert-circle",   // Overbelastning / fastlåste led

  // ── RYGSPECIALIST — BEHANDLINGER ────────────────────────
  "RYGT-UDREDNING":  "search",           // Tværfaglig udredning
  "RYGT-BEHANDLING": "hand-helping",     // Tværfaglig behandling
  "RYGT-REHAB":      "activity",         // Rehabilitering
  "RYGT-ERHVERV":    "briefcase",        // Arbejdsfastholdelse

  // ── RYGSPECIALIST — TILSTANDE ───────────────────────────
  "RYGS-KRONISK":    "bone",             // Langvarige rygsmerter
  "RYGS-SMERTER":    "heart-pulse",      // Komplekse smerter
  "RYGS-SYGEMELDT":  "stethoscope",      // Sygemelding / uarbejdsdygtighed
  "RYGS-KOMPLEKS":   "network",          // Komplekse tværfaglige forløb

  // ── DISCIPLINER (Under ét tag) ───────────────────────────
  "DISC-KIRO":      "bone",
  "DISC-FYSIO":     "activity",
  "DISC-AKUPUNKTUR":"syringe",
  "DISC-TRAENING":  "dumbbell",
  "DISC-LAEGE":     "stethoscope",
  "DISC-PSYKOLOG":  "brain",
  "DISC-ERHVERV":   "briefcase",

};

/**
 * ── AUTO-ERSTATNING ─────────────────────────────────────────
 * Sætter data-lucide attribut på alle <i data-ikon-id="...">
 * og kalder lucide.createIcons() for at rendere SVG'erne.
 */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-ikon-id]').forEach(el => {
    const id   = el.dataset.ikonId;
    const navn = IKONER[id];
    if (!navn) {
      console.warn(`IKONER: Ukendt ID "${id}"`);
      return;
    }
    el.setAttribute('data-lucide', navn);
  });

  // Render alle Lucide-ikoner
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  } else {
    console.error('Lucide ikke indlæst — tjek CDN-linket i <head>');
  }
});
