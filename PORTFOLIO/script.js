// Reveal sections on scroll
const sections = document.querySelectorAll("section");

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(sec => {
    const boxTop = sec.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      sec.classList.add("reveal");
    }
  });
}

// Back to top button functionality
const backToTopButton = document.getElementById("backToTop");

function handleScroll() {
  // Reveal sections
  revealOnScroll();
  
  // Show/hide back to top button
  if (backToTopButton) {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  }
}

// Set up scroll event listener
window.addEventListener("scroll", handleScroll);
revealOnScroll(); // run on page load

// Scroll to top when clicked
if (backToTopButton) {
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
