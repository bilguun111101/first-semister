let products = [];
let i;

let url = "product_anime.json";

myShit();


function myShit(){
  fetch(url).then(res => res.json()).then(data =>{
    for(i = 0; i < data.length; i++){
        products.push(data[i]);
    }
    viewPoster(products)
    deleteCartItem()
  }).catch(error=> (alert('shit: ' + error)))
}


// some variables ------------------------------------

let cartIcon = document.querySelector("#cart-btn")
let cart = document.querySelector(".cart")
let cartBox = document.querySelectorAll('.cart-box');
let selectedProducts = [];
let total = 0;
let cartContent = document.querySelector('.cart-content');
let remove = document.querySelectorAll('.cart-remove');
let niit = document.querySelector('.total-price')
let closeCart = document.querySelector('#close-cart')


// View Poster ---------------------------------------------------

function viewPoster(products){
  const list = document.querySelector('.shop-content');
  let itemHtml = '';
  products.forEach((item) => {
    itemHtml += `
    <div class="product-box" data-id=${item.id}>
        <img src="${item.image}" alt="" class="product-img">
        <h2 class="product-title">${item.title}</h2>
        <span class="price">$${item.price}</span>
        <div class="fas fa-shopping-bag add-cart" id="add-cart"></div>
    </div>`
  });
  list.innerHTML = itemHtml;
}


// Cart Tab---------------------------------------------------

cartIcon.onclick = () =>{
  cart.classList.add('active')
}
closeCart.onclick = () =>{
  cart.classList.remove('active')
}

let btnAddToCart = document.getElementsByClassName('add-cart')
let addToCart = document.getElementsByClassName('product-box');


// ready----------------------------------------------------------------------------------------




function ready(data){
  for(let i = 0; i < addToCart.length; i++){
    addToCart[i].addEventListener('click', ()=>{
      let selectedProduct = data;
      let isExist = selectedProducts.findIndex((item)=> item.id === selectedProduct.id)
      // console.log(isExist);
      if(isExist > -1){
        // selectedProduct.price += 2;
        selectedProduct.inCart += 1;
      } else {
        selectedProducts.push(selectedProduct);
      }
      let totalPrice = 0;
      totalPrice += data.price   
      niit.textContent = '$' + totalPrice;
      console.log(totalPrice)

    //   updateTotal(selectedProducts);
      addCartItem();
    })
  }
}



// Update Total---------------------------------------------------------------------------------


// function updateTotal(selectedProducts) {
//   let totalPrice = 0;
//   let onMyShit = 0;

//   selectedProducts.forEach((item) => {
//     totalPrice += item.price;
//     // totalPrice = item.price * item.inCart;
//   });

//   niit.textContent = '$' + totalPrice;
// }




// addCartItem--------------------------------------------------------------------------------------

function addCartItem(){

let cartItem = '';

selectedProducts.forEach((item)=>{
  cartItem += `
          <div class="cart-box" data-id="">
          <img src="${item.image}" alt="" class="cart-img">
          <div class="detail-box">
              <div class="cart-product-title">${item.title}</div>
              <div class="cart-price">$${item.price}</div>
              <input type="number" value="${item.inCart}" class="cart-quantity" id="">
          </div>
          <div class="fa-solid fa-trash-can cart-remove" onclick="deleteCartItem(${item.id})" id=""></div>
        </div> `
});
cartContent.innerHTML = cartItem;
}




// DeleteCartItem-----------------------------------------------------------------------------------


function deleteCartItem(id) {
  selectedProducts = selectedProducts.filter((item, index) => {
    return (
      item.price = products[i].price,
      item.inCart = 1,
      item.id != id
    );
  });
  addCartItem();
  updateTotal(selectedProducts);
}