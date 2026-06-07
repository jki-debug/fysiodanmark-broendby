/**
 * ══════════════════════════════════════════════════════════
 *  BILLEDREGISTER — FysioDanmark Brøndby
 *  Se billeder.md for fuld dokumentation og statuser.
 *
 *  Sådan aktiverer du et billede:
 *  1. Gem billedfilen i assets/images/
 *  2. Fjern // foran det matchende ID herunder
 *  3. Genindlæs siden — placeholder erstattes automatisk
 * ══════════════════════════════════════════════════════════
 */

const BILLEDER = {

  // ── FORSIDE ─────────────────────────────────────────────
  "HOME-LOGO":    { src: "assets/images/logo.png",         alt: "FysioDanmark Brøndby logo" },
  "HOME-HERO":    { src: "assets/images/hero-bygning.jpg", alt: "Brøndby Sundhedshus — FysioDanmark Brøndby" },

  // ── KIROPRAKTOR KLINIK ───────────────────────────────────
  // "KIRO-HERO":     { src: "assets/images/kiropraktor-hero.webp",            alt: "Kiropraktor Jørgen Kilsgaard i konsultation med patient" },
  // "KIRO-PORTRAET": { src: "assets/images/kiropraktor-portraet-joergen.webp", alt: "Jørgen Kilsgaard, kiropraktor MPH hos FysioDanmark Brøndby" },
  // "KIRO-ACTION":   { src: "assets/images/kiropraktor-action.webp",          alt: "Kiropraktisk behandling hos FysioDanmark Brøndby" },

  // ── RYGSPECIALIST ENHEDEN ────────────────────────────────
  // "RYG-HERO":     { src: "assets/images/rygspecialist-hero.webp",            alt: "Tværfagligt team i Rygspecialist Enheden hos FysioDanmark Brøndby" },
  // "RYG-PORTRAET": { src: "assets/images/rygspecialist-portraet-joergen.webp", alt: "Jørgen Kilsgaard, leder af Rygspecialist Enheden" },
  // "RYG-ACTION":   { src: "assets/images/rygspecialist-action.webp",          alt: "Behandling i Rygspecialist Enheden" },

};

/**
 * ── AUTO-ERSTATNING AF PLACEHOLDERS ────────────────────────
 * Kører ved DOMContentLoaded og:
 *  1. Finder alle <div data-img-id="...">
 *  2. Slår ID op i BILLEDER{}
 *  3. Erstatter placeholder med <img> hvis billedet er registreret
 *  4. Håndterer hero-baggrundsbilleder (data-img-type="bg")
 */
document.addEventListener('DOMContentLoaded', () => {

  // Almindelige billede-slots
  document.querySelectorAll('[data-img-id]').forEach(slot => {
    const id  = slot.dataset.imgId;
    const cfg = BILLEDER[id];
    if (!cfg) return; // Ikke registreret endnu — behold placeholder

    if (slot.dataset.imgType === 'bg') {
      // Baggrundsbillede (hero)
      slot.style.backgroundImage = `url('${cfg.src}')`;
      slot.classList.add('img-slot--loaded');
    } else {
      // Normalt billede — erstat placeholder-indhold med <img>
      const img = document.createElement('img');
      img.src   = cfg.src;
      img.alt   = cfg.alt || '';
      img.style.cssText = 'width:100%;height:100%;object-fit:cover;display:block;';
      slot.innerHTML = '';
      slot.appendChild(img);
      slot.classList.add('img-slot--loaded');
    }
  });

  // Logo (separat — sættes på alle <img data-img-id="HOME-LOGO">)
  document.querySelectorAll('img[data-img-id]').forEach(imgEl => {
    const id  = imgEl.dataset.imgId;
    const cfg = BILLEDER[id];
    if (!cfg) return;
    imgEl.src = cfg.src;
    imgEl.alt = cfg.alt || '';
  });

});
