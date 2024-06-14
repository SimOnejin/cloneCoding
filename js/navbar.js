var modal;
var btn;
var span;

document.addEventListener("DOMContentLoaded", function() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data;

            var navbar = document.getElementById('navbar');
            var content_1 = document.getElementById('content_1');

            function adjustContentMargin() {
                var navbarHeight = navbar.offsetHeight;
                content_1.style.paddingTop = navbarHeight + 'px';
            }

            // MutationObserver 설정
            var observer = new MutationObserver(function(mutations) {
                adjustContentMargin(); // 변경 사항이 발생할 때마다 여백 조정
            });

            // 네비게이션 바가 로드되고 난 후에 감시 시작
            var navbarLoadInterval = setInterval(function() {
                if (navbar.offsetHeight > 0) {
                    clearInterval(navbarLoadInterval);
                    adjustContentMargin(); // 초기 로드 시 패딩 조정
                    observer.observe(navbar, { childList: true, subtree: true }); // 네비게이션 바 변경 감시 시작
                }
            }, 100);

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

            // 스크롤에 따라 버튼 표시/숨김 처리fsdafas
            // window.addEventListener('scroll', function() {
            //     if (document.documentElement.scrollTop > 100) {
            //         btn.style.display = "block";
            //     } else {
            //         btn.style.display = "none";
            //     }
            // });

            // 초기 로드 시 스크롤 위치에 따라 버튼 표시/숨김 처리
            // if (document.documentElement.scrollTop > 100) {
            //     btn.style.display = "block";
            // } else {
            //     btn.style.display = "none";
            // }
        })
        .catch(error => console.error('Error loading navbar:', error));
});
