const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// Open / close menu
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuToggle.classList.toggle("open");
});

// Close menu when a link is clicked (for mobile UX)
document.querySelectorAll("#nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuToggle.classList.remove("open");
  });
});

function showSection(sectionId) {
  // Hide all sections
  let sections = document.querySelectorAll('.section');
  sections.forEach(sec => sec.style.display = "none");

  // Show only clicked section
  document.getElementById(sectionId).style.display = "block";
}


