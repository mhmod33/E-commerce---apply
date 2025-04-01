fetch("products.json")
  .then((Response) => Response.json())
  .then((data) => {
    let swiperItemsSale = document.getElementById("swiperItemsSale");
    let swiperElectronics = document.getElementById("swiperElectronics");
    let swiperAppliances = document.getElementById("swiperAppliances");
    let swiperMobiles = document.getElementById("swiperMobiles");

    data.forEach((product) => {
      let salePercent = Math.floor(
        ((product.old_price - product.price) / product.old_price) * 100
      );

      if (product.old_price) {
        swiperItemsSale.innerHTML += `
            <div class="swiper-slide product">
                        <span class="sale-present">%${salePercent}</span>
                        <div class="img-product">
                            <a href=""><img src="${product.img}" alt=""></a>
                        </div>

                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>

                        <div class="name-product"><a href="">${product.name}</a></div>

                        <div class="price">
                            <p><span>$${product.price}</span></p>
                            <p class="old-price">$${product.old_price}</p>
                        </div>
                        <div class="icons">
                            <span class="btn-add-to-cart">
                                <i class="fa-solid fa-cart-shopping"></i>Add To Cart
                            </span>
                            <span class="btn-heart">
                                <i class="fa-regular fa-heart"></i>
                            </span>

                        </div>
                    </div>
    `;
      }
    });

    data.forEach((product) => {
      let old_price_paragraph = product.old_price
        ? `<p class="old-price">$${product.old_price}</p>`
        : "";
      let old_price_div = product.old_price
        ? `<span class="sale-present">%${Math.floor(
            ((product.old_price - product.price) / product.old_price) * 100
          )}</span>`
        : "";

      if (product.catetory == "electronics") {
        swiperElectronics.innerHTML += `
            <div class="swiper-slide product">
                        ${old_price_div}

                        <div class="img-product">
                            <a href=""><img src="${product.img}" alt=""></a>
                        </div>

                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>

                        <div class="name-product"><a href="">${product.name}</a></div>

                        <div class="price">
                            <p><span>$${product.price}</span></p>
                            ${old_price_paragraph}
                        </div>
                        <div class="icons">
                            <span class="btn-add-to-cart">
                                <i class="fa-solid fa-cart-shopping"></i>Add To Cart
                            </span>
                            <span class="btn-heart">
                                <i class="fa-regular fa-heart"></i>
                            </span>

                        </div>
                    </div>
    `;
      }
    });

    data.forEach((product) => {
      let old_price_paragraph = product.old_price
        ? `<p class="old-price">$${product.old_price}</p>`
        : "";
      let old_price_div = product.old_price
        ? `<span class="sale-present">%${Math.floor(
            ((product.old_price - product.price) / product.old_price) * 100
          )}</span>`
        : "";

      if (product.catetory == "appliances") {
        swiperAppliances.innerHTML += `
            <div class="swiper-slide product">
                        ${old_price_div}

                        <div class="img-product">
                            <a href=""><img src="${product.img}" alt=""></a>
                        </div>

                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>

                        <div class="name-product"><a href="">${product.name}</a></div>

                        <div class="price">
                            <p><span>$${product.price}</span></p>
                            ${old_price_paragraph}
                        </div>
                        <div class="icons">
                            <span class="btn-add-to-cart">
                                <i class="fa-solid fa-cart-shopping"></i>Add To Cart
                            </span>
                            <span class="btn-heart">
                                <i class="fa-regular fa-heart"></i>
                            </span>

                        </div>
                    </div>
    `;
      }
    });

    data.forEach((product) => {
      let old_price_paragraph = product.old_price
        ? `<p class="old-price">$${product.old_price}</p>`
        : "";
      let old_price_div = product.old_price
        ? `<span class="sale-present">%${Math.floor(
            ((product.old_price - product.price) / product.old_price) * 100
          )}</span>`
        : "";

      if (product.catetory == "mobiles") {
        swiperMobiles.innerHTML += `
            <div class="swiper-slide product">
                        ${old_price_div}

                        <div class="img-product">
                            <a href=""><img src="${product.img}" alt=""></a>
                        </div>

                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>

                        <div class="name-product"><a href="">${product.name}</a></div>

                        <div class="price">
                            <p><span>$${product.price}</span></p>
                            ${old_price_paragraph}
                        </div>
                        <div class="icons">
                            <span class="btn-add-to-cart">
                                <i class="fa-solid fa-cart-shopping"></i>Add To Cart
                            </span>
                            <span class="btn-heart">
                                <i class="fa-regular fa-heart"></i>
                            </span>

                        </div>
                    </div>
    `;
      }
    });
  });

// cart
window.onload(() => {
  let cart = document.querySelector(".cart");
  cart.style.marginRight = "-350px";
});
function showHideCart() {
  let cart = document.querySelector(".cart");
  cart.classList.toggle("actv");
}
showHideCart();
