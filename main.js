new Swiper('.reviews .swiper', {  
  slidesPerView: "auto",
  spaceBetween: 20,
  loop: true, 

  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true
  },
  
  navigation: {
    prevEl: ".review-btn-next",
    nextEl: ".review-btn-prev",
  },
  
  on: {
    slideChange: function () {
      const slides = this.slides;
      
      if (slides[this.activeIndex] && slides[this.activeIndex + 1] && window.innerWidth > 800) {
        slides.forEach(slide => {
          slide.style.opacity = 0.5;
        });

        slides[this.activeIndex].style.opacity = 1;
        slides[this.activeIndex + 1].style.opacity = 1;
      }
    },
  },
});

new Swiper('.in-progress .swiper', {  
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true, 

  navigation: {
    prevEl: ".in-progress-btn-next",
    nextEl: ".in-progress-btn-prev",
  },

  breakpoints: {
    1136: {
      slidesPerView: 3
    },
    710: {
      slidesPerView: 2
    },
    300: {
      slidesPerView: 1
    }
  }
});

function initAOS() {
  const screenWidth = window.innerWidth;

  AOS.init({
    disable: screenWidth < 1050,
  });
}

initAOS();
window.addEventListener('resize', initAOS);

const burger = document.querySelector(".burger-menu");
const modal = document.querySelector(".burger-menu-wrap");

burger.addEventListener('click', () => {
  modal.classList.toggle("burger-menu-active");
});

modal.addEventListener('click', (e) => {
  if (e.target === modal || e.target.classList[0] === "burger-menu-item") {
    modal.classList.remove("burger-menu-active");
  }
});