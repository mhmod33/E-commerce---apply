/////////////////////////////////////// category toggling function
let categList = document.querySelector(".category-nav-list");

function categlist() {
  categList.classList.toggle("active");
}

// *********************************------------------add to cart functions --------------------*********************************

fetch("products.json")
  .then((Response) => Response.json())
  .then((data) => {
    let addToCartBtns = document.querySelectorAll(".btn-add-to-cart");
    addToCartBtns.forEach((button) => {
      button.addEventListener("click", (event) => {
        const productId = event.target.getAttribute("data-id");
        let selectedItem = data.find((product) => product.id == productId);

        let allMatchingItems = document.querySelectorAll(
          `.btn-add-to-cart[data-id="${productId}"]`
        );

        allMatchingItems.forEach((btn) => {
          btn.classList.add("Activ");
          btn.innerHTML = `<i class="fa-solid fa-cart-shopping"></i>Item in cart`;
        });

        addToCartFun(selectedItem);
      });
    });
  });

function addToCartFun(product) {
  console.log(product);
  const cartItem = JSON.parse(localStorage.getItem("CartItem")) || [];
  cartItem.push({ ...product, quantity: 1 });
  localStorage.setItem("CartItem", JSON.stringify(cartItem));

  updateCart();
}

/////////////////////////////////////////////////update the cart using update function ////////////////////////////////////////////////
function updateCart() {
  const cartItem = JSON.parse(localStorage.getItem("CartItem")) || [];
  const itemsInCart = document.getElementById("cart-items");


  let totalPrice=0;
  let totalCount=0;

  itemsInCart.innerHTML = "";
  cartItem.forEach((item, index) => {

    // calc total items in the cart
    let countCartItems=document.querySelector('.count-item-cart');
    totalCount+=item.quantity;
    countCartItems.innerHTML=totalCount;
    
    
    // calc total items in the cart for header icon
    let countCartItemsInHeader=document.querySelector('.count-item-header');
    countCartItemsInHeader.innerHTML=totalCount;
    // calc total price for each item
    let totalPriceForItem=item.price*item.quantity;
    
    // calc total price for all items
    totalPrice+=totalPriceForItem;
    let totalPriceCalc=document.querySelector('.price-cart-total');
    totalPriceCalc.textContent=`$${totalPrice}`;



    itemsInCart.innerHTML += `
       <div class="item-cart">
                <img src="${item.img}" alt="">
                <div class="item-content">
                    <h4>${item.name}</h4>
                    <p class="price-cart" >$${totalPriceForItem}</p>
                    <div class="quantity-control">
                        <button class="decrease-quantity" data-index=${index}>-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="increase-quantity" data-index=${index}>+</button>
                    </div>
                </div>
                <button class="delete-item" data-index=${item.index} ><i class="fa-solid fa-trash-can"></i></button>
            </div>`;
  })
let increaseBtn=document.querySelectorAll('.increase-quantity');
let decreaseBtn=document.querySelectorAll('.decrease-quantity');


increaseBtn.forEach(button=>{
  button.addEventListener('click',(event)=>{
    let itemIndex=event.target.getAttribute("data-index");
    IncreaseQuantity(itemIndex);
  });
});



decreaseBtn.forEach(button=>{
  button.addEventListener('click',(event)=>{
    let itemIndex=event.target.getAttribute("data-index");
    DecreaseQuantity(itemIndex);
  });
});




  ////////////////////////////////////////////////// delete item and remove it from  cart ////////////////////////////////////////////////
  let deleteButton = document.querySelectorAll(".delete-item");
  deleteButton.forEach((button) => {
    button.addEventListener("click", (event) => {
      let itemIndex = event.target.closest("button").getAttribute("data-index");
      removeItem(itemIndex);
    });
  });
}



function removeItem(index) {
  const cartItem = JSON.parse(localStorage.getItem("CartItem")) || [];
  let removeProduct = cartItem.splice(index, 1)[0];
  localStorage.setItem("CartItem", JSON.stringify(cartItem));
  updateCart();

  updateButtonsSatate(removeProduct.id);
}
////////////////////// update the status of the function, that when the item removed from the cart it returns to the ordinary status ////////////////////////////////////////////////

function updateButtonsSatate(productId) {
  let allMatchingItems = document.querySelectorAll(
    `.btn-add-to-cart[data-id="${productId}"]`
  );

  allMatchingItems.forEach((button) => {
    button.classList.remove("Activ");
    button.innerHTML = `<i class="fa-solid fa-cart-shopping"></i>add to cart`;
  });
}


function IncreaseQuantity(index){
  let cartItem = JSON.parse(localStorage.getItem("CartItem")) || [];
  cartItem[index].quantity +=1;
  localStorage.setItem("CartItem", JSON.stringify(cartItem));
  updateCart();
}



function DecreaseQuantity(index){
  let cartItem = JSON.parse(localStorage.getItem("CartItem")) || [];

  if (cartItem[index].quantity > 1 ){
  cartItem[index].quantity-=1;
}
  localStorage.setItem("CartItem", JSON.stringify(cartItem));
  updateCart();
}



updateCart();

////////////////////////////////////////////////////////////////////////////
