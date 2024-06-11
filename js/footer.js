document.addEventListener("DOMContentLoaded", function() {
  var fontAwesomeScript = document.createElement("script");
  fontAwesomeScript.src = "https://kit.fontawesome.com/2aca29b317.js";
  fontAwesomeScript.crossOrigin = "anonymous";
  document.head.appendChild(fontAwesomeScript);

  fetch('footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer').innerHTML = data;

      // Scroll to top functionality
      var scrollToTopBtn = document.getElementById("scrollToTopBtn");
      var rootElement = document.documentElement;

      // function handleScroll() {
      //   // Show button when scrolled down 100px from top
      //   if (rootElement.scrollTop > 100) {
      //     scrollToTopBtn.style.display = "block";
      //   } else {
      //     scrollToTopBtn.style.display = "none";
      //   }
      // }

      function scrollToTop() {
        // Scroll to top behavior
        rootElement.scrollTo({
          top: 0,
          behavior: "smooth"
        });

        // Temporarily disable handleScroll to prevent hiding the button
        window.removeEventListener("scroll", handleScroll);
        scrollToTopBtn.style.display = "block";  // Ensure button remains visible
        setTimeout(function() {
          window.addEventListener("scroll", handleScroll);
        }, 1000);  // Re-enable handleScroll after scrolling completes
      }

      scrollToTopBtn.addEventListener("click", scrollToTop);
      document.addEventListener("scroll", handleScroll);

      // Initial call to handleScroll to set button state on page load
      handleScroll();
    });
});
