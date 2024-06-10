// script.js
document.addEventListener('DOMContentLoaded', function() {
  // Scroll to top functionality
  document.getElementById('scrollToTopButton').addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Load Font Awesome dynamically
  var script = document.createElement('script');
  script.src = "https://kit.fontawesome.com/2aca29b317.js";
  script.crossOrigin = "anonymous";
  document.head.appendChild(script);
});
