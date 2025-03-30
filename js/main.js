// ----------------------
// category toggling
let categList = document.querySelector(".category-nav-list");

function categlist() {
  categList.classList.toggle("active");
}

// // add products dynamically
// let allProdsCont = document.getElementById("swiperItemsSale");
// let price = document.querySelector("#swiperItemsSale .price p span");
// let jsonFile = fetch("products.json")
//   .then((response) => response.json())
//   .then((data) => {
//     return data;
//   });
// console.log(data);
