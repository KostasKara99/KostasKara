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

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // run on page load

<script>
  const backToTopButton = document.getElementById("backToTop");

  // Show button after scrolling down 300px
  window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  };

  // Scroll to top when clicked
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
</script>
