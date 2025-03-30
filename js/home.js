fetch("products.json")
  .then((Response) => Response.json())
  .then((data) => {
    let swiperItemsSale = document.getElementById("swiperItemsSale");

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
  });

// let price = 10;
// let oldprice = 100;
// console.log(salePercent);
