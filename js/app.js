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
});
document.addEventListener("DOMContentLoaded", function() {
    const link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/png';
    link.href = 'img/github-mark/github-mark.png'; // 실제 이미지 경로로 변경하세요
    document.head.appendChild(link);
});
