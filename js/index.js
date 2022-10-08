const myPreloader = document.querySelector('.preloader');
const fadeOutEffect = setInterval(() => {
    if (!preloader.style.opacity) {
      preloader.style.opacity = 1;
    }
    if (preloader.style.opacity > 0) {
      preloader.style.opacity -= 0.5;
    } else {
      clearInterval(fadeEffect);
    }
  }, 300);
  window.addEventListener('load', fadeOutEffect);