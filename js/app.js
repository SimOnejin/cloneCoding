
document.addEventListener("DOMContentLoaded", function() {
  let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
      } else {
        entry.target.style.opacity = 0;
      }
    });
  }, { threshold: 0.5 });

  let boxes = document.querySelectorAll('.box');
  boxes.forEach(box => observer.observe(box));
});

window.addEventListener('load', () => {
  setTimeout(()=>scrollTo(0,0),100);
})



//Slide Effect
document.addEventListener("DOMContentLoaded", function() {
    let observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            } else {
                entry.target.classList.remove('animated');
            }
        });
    }, { threshold: 0.5 });

    let slides = document.querySelectorAll('.slide');
    slides.forEach(box => observer.observe(slide));
});



//Effect Sound
document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById('background-music');
    const startButton = document.getElementById('start-button');
    const initialPlayOverlay = document.getElementById('initial-play');
    let isPlaying = false;
    let scrollTimeout;
    var popupOverlay = document.getElementById('initial-play');
    var popupContent = document.querySelector('.popup-content');

    const playMusic = () => {
        if (!isPlaying) {
            audio.play().then(() => {
                isPlaying = true;
            }).catch(error => {
                console.error("Error playing audio:", error);
            });
        }
    };

    const pauseMusic = () => {
        if (isPlaying) {
            audio.pause();
            isPlaying = false;
        }
    };

    window.addEventListener('scroll', () => {
        if (initialPlayOverlay.classList.contains('hidden')) {
            clearTimeout(scrollTimeout);
            playMusic();
            scrollTimeout = setTimeout(() => {
                pauseMusic();
            }, 100); // 스크롤이 멈춘 후 100ms 후에 음악 일시 정지
        }
    });

    startButton.addEventListener('click', () => {
        initialPlayOverlay.classList.add('hidden');
    });
    // 오버레이 클릭 시 팝업 닫기
    popupOverlay.addEventListener('click', function(event) {
        // 클릭한 대상이 팝업 콘텐츠가 아니면 팝업 닫기
        if (!popupContent.contains(event.target)) {
            initialPlayOverlay.classList.add('hidden');
        }
    });
});

//For Tab's Logo
document.addEventListener("DOMContentLoaded", function() {
    const link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/png';
    link.href = 'img/logo.png';
    document.head.appendChild(link);
});


// //initial-play Can touch Anywhere
// document.addEventListener("DOMContentLoaded", function() {
//     var popupOverlay = document.getElementById('initial-play');
//     var popupContent = document.querySelector('.popup-content');
//     var startButton = document.getElementById('start-button');
//
//     // 팝업 닫기 함수
//     function closePopup() {
//         popupOverlay.style.display = 'none';
//     }
//
//     // Start 버튼 클릭 시 팝업 닫기
//     startButton.addEventListener('click', closePopup);
//
//
// });
