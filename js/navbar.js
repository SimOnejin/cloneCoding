// About navbar

var modal;
var btn;
var span;

document.addEventListener("DOMContentLoaded", function() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data;
            // 네비게이션 바 높이에 따른 컨텐츠 상단 마진 조정
            var navbar = document.getElementById('navbar');
            var content_1 = document.getElementById('content_1');
            content_1.style.paddingTop = 0 + 'px';

            function adjustContentMargin() {
                var navbarHeight = navbar.offsetHeight;
                content_1.style.paddingTop = navbarHeight + 'px';
            }
            adjustContentMargin();
            window.addEventListener('resize', adjustContentMargin);

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
// function handleScroll() {
//     // Show button when scrolled down 100px from top
//
//     if (rootElement.scrollTop > 100) {
//         btn.style.display = "block";
//     } else {
//         btn.style.display = "none";
//     }
// }
//       window.onclick = function(event) {
//         if (event.target == modal) {
//           modal.style.display = "none";
//         }
//       }
//     })
// });
