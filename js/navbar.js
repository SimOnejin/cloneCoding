// About navbar
document.addEventListener("DOMContentLoaded", function() {
  fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('navbar').innerHTML = data;
      var modal = document.getElementById("myModal");
      var btn = document.getElementById("intro");
      var span = document.getElementsByClassName("close")[0];
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
