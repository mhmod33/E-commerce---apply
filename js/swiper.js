// callings

// swipper library

var swiper = new Swiper(".slide-swp", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
  autoplay: {
    delay: 2500,
  },
  loop: true,
});

var swiper = new Swiper(".slide-product", {
  slidesPerView: 5,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
  autoplay: {
    delay: 2500,
  },
  loop: true,
});

var swiper = new Swiper(".slide-product", {
  slidesPerView: 5,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-prev",
    prevEl: ".swiper-button-next",
  },
  autoplay: {
    delay: 2500,
  },
  loop: true,
  breakpoints: {
    1200:{
    slidesPerView:5,
    spaceBetween:20,
    },
    1000:{
      slidesPerView:4,
      spaceBetween:15,
      },
    700:{
      slidesPerView:3,
      spaceBetween:15,
    },
    400:{
      slidesPerView:2,
      spaceBetween:10,
    }

  },
});
