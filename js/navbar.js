// About navbar

var modal;
var btn;
var span;


document.addEventListener("DOMContentLoaded", function() {
  fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('navbar').innerHTML = data;
      modal = document.getElementById("myModal");
      btn = document.getElementById("intro");
      span = document.getElementsByClassName("close")[0];
      btn.onclick = function() {
        modal.style.display = "block";
      }

      span.onclick = function() {
        modal.style.display = "none";
      }

      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
    });
});
function handleScroll() {
    // Show button when scrolled down 100px from top
    if (rootElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}
