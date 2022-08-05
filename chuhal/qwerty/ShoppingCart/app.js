// some variables ------------------------------------

let cartIcon = document.querySelector("#cart-btn")
let cart = document.querySelector(".cart")
let closeCart = document.querySelector("#close-cart")


//---------------------------------------------------

cartIcon.onclick = () =>{
    cart.classList.add('active')
}
closeCart.onclick = () =>{
    cart.classList.remove('active')
}


// DELETE and CHANGE -------------------------------------------------------------------

if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}
else{
    ready();
}

function removeCartItem(event){
    let buttonClicked = event.target;
    buttonClicked.parentElement.remove()
    updateTotal();
}

// Quantity change -----------------------------------------------------------

function quantityChanged(event){
    let input = event.target;
    if(isNaN(input.value) || input.value <= 0){
        input.value = 1
    }
    updateTotal()
}


function ready(){
    let removeCartButtons = document.getElementsByClassName('cart-remove')
    for(let i = 0; i < removeCartButtons.length; i++){
        let button = removeCartButtons[i]
        button.addEventListener('click', removeCartItem)
    }
    
    let quantityInputs = document.querySelectorAll('.cart-quantity')
    for(let i = 0; i < quantityInputs.length; i++){
        let input = quantityInputs[i];
        input.addEventListener('change', quantityChanged)
    }

    let addCart = document.getElementsByClassName('add-cart');
    for(let i = 0; i < addCart.length; i++){
        let button = addCart[i];
        button.addEventListener('click', addCartClicked)
    }
}

//add Cart-----------------------------------------------------------

function addCartClicked(event){
    let button = event.target
    let shopProducts = button.parentElement;
    let title = shopProducts.getElementsByClassName('product-title').innerText;
    let price = shopProducts.getElementsByClassName('price').innerText;
    let productImg = shopProducts.getElementsByClassName('product-img').src;
    addProductToCart(title, price, productImg);
    updateTotal();
}

function addProductToCart(title, price, productImg){
    let cartShopBox = document.createElement('div');
    cartShopBox.classList.add('cart-box')
    let cartItems = document.getElementsByClassName('cart-content');
    let cartItemsNames = cartItems.getElementsByClassName('cart-product-title');
    // for(let i = 0; i < cartItemsNames.length; i++){
    // }
}

let cartBoxContent = `
                        <img src="${productImg}" alt="" class="cart-img">
                        <div class="detail-box">
                            <div class="cart-product-title">Earbuds</div>
                            <div class="cart-price">$${price}</div>
                            <input type="number" value="1" class="cart-quantity" id="">
                        </div>
                        <div class="fa-solid fa-trash-can cart-remove"></div>`
cartShopBox.innerHTML += cartBoxContent;
cartItems.append(cartShopBox);
cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItem);
cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChanged);

//-----------------------------------------------------------------------


//---------------------------------------------------------------------------------------


// CART_ITEMS TOTAL COST ------------------------------------------------------------------------

function updateTotal(){
    let cartContent = document.getElementsByClassName('cart-content')[0];
    let cartBoxes = cartContent.querySelectorAll('.cart-box')
    let total = 0;
    for(let i = 0; i < cartBoxes.length; i++){
        let cartBox = cartBoxes[i];
        let priceElement = cartBox.querySelector('.cart-price')
        let quantityElemnt = cartBox.querySelector('.cart-quantity')
        let quantity = quantityElemnt.value;
        let price = parseInt(priceElement.innerText.replace('$', ""))
        total += (price * quantity)
        total = Math.round(total * 100) / 100;
        document.querySelector('total-price').textContent = '$' + total
    }
}