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
// -----------------------

let categList = document.querySelector(".category-nav-list");
console.log(categList);

function categlist() {
  categList.classList.toggle("active");
}
