document.addEventListener('DOMContentLoaded', function() {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const navLinks = document.querySelector(".nav-links");

  // Toggle nav links when hamburger menu is clicked
  hamburgerMenu.addEventListener("click", function() {
      navLinks.classList.toggle("show");
  });
});
