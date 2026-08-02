// Année dynamique dans le footer
document.getElementById("year").textContent = new Date().getFullYear();

// Active l'onglet de navigation selon la section visible
const sections = document.querySelectorAll("section[id], header#top, footer#contact");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "top";
  const pos = window.scrollY + 120;
  sections.forEach((sec) => {
    if (pos >= sec.offsetTop) current = sec.id;
  });
  navLinks.forEach((a) => {
    a.classList.toggle("active", a.getAttribute("href") === "#" + current);
  });
});