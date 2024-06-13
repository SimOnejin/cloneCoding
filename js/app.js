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



