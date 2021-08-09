const singleProduct = fakeProducts[Math.round(Math.random()*fakeProducts.length)];
const removeButton = document.querySelector('.rmv-button');
const addButton = document.querySelector('.add-button');
let cartQuantity = document.querySelector('#cartQuantity');


//Display single product
displaySingleProduct(singleProduct);

//Add and remove buttons
removeButton.addEventListener('click', () => {removeFromCart()});
addButton.addEventListener('click', () => {addToCart()});

//Similar products
const similarProducts = getSimilarProducts(`${singleProduct.product_category}`);
displayProducts(similarProducts.slice(0,6));


function getSimilarProducts(category) {
    return fakeProducts.filter((product) => product.product_category === `${category}`);
}

function addToCart() {
    cartQuantity.innerText++;
    console.log('aggiungi');
    console.log(cartQuantity);
} 

function removeFromCart() {
    (cartQuantity.innerText > 0) ? cartQuantity.innerText-- : null;
} 