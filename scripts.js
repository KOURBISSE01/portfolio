// Année dynamique (footer not used in new layout, kept harmless)
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ── Navigation par sections (slide deck) ────────────────────────
const pills = document.querySelectorAll(".pill, .tab");
const slides = document.querySelectorAll(".slide");

function activate(sectionId) {
  // Mettre à jour la classe active sur les liens (pills + tabs)
  pills.forEach((el) => {
    el.classList.toggle("active", el.dataset.section === sectionId);
  });
  // Afficher la bonne section
  slides.forEach((sec) => {
    sec.classList.toggle("active", sec.id === sectionId);
  });
  // Fermer le comportement natif ancre → garder le scroll en douceur
}

pills.forEach((el) => {
  el.addEventListener("click", (e) => {
    const target = el.dataset.section;
    if (target) activate(target);
  });
});

// Hash profond (ex : #projets au chargement ou via lien externe)
window.addEventListener("hashchange", () => {
  const id = location.hash.replace("#", "");
  if (id && document.getElementById(id)) activate(id);
});

if (location.hash) {
  const id = location.hash.replace("#", "");
  if (document.getElementById(id)) activate(id);
}