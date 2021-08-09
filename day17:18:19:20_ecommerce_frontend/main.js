//NAVBAR 
const navbar1 = document.querySelectorAll('.navbar')[0];
const navbar2 = document.querySelectorAll('.navbar')[1];

document.addEventListener('scroll', () => {
    let scrolled = window.scrollY;
    let windowHeight = window.innerHeight;

    if (scrolled < windowHeight) {
        navbar1.style.position = "sticky";
        navbar1.style.top = "0";
        navbar2.style.position = "sticky";
        navbar2.style.top = `${navbar1.getBoundingClientRect().height}px`;
    } else {
        navbar1.style.position = "";
        navbar1.style.top = "";
        navbar2.style.position = "";
        navbar2.style.top = "";
    }
})

const fakeCategories = ['Automotive', 'Baby', 'Beauty', 'Books', 'Clothing', 'Computer', 'Electronics', 'Games', 'Garden', 'Grocery', 'Health', 'Home', 'Industrial', 'Jewelry', 'Kids', 'Movies', 'Music', 'Outdoor', 'Shoes', 'Sports', 'Tools', 'Toys'];
const fakeCities = ['L\'Aquila', 'Potenza', 'Catanzaro', 'Napoli', 'Bologna', 'Trieste', 'Roma', 'Genova', 'Milano', 'Ancona', 'Campobasso', 'Torino', 'Bari', 'Cagliari', 'Palermo', 'Firenze', 'Trento', 'Perugia', 'Aosta', 'Venezia'];

//INITIALIZE FAKE USERS

//max users: 900 and min users: 300
const totalUsers = Math.floor(Math.random()*(900-300) + 300);
//array di oggetti
let fakeUsers = getRandomUsers(totalUsers); 

// INITIALIZE FAKE PRODUCTS

//array di oggetti
let fakeProducts = getRandomProducts(1000, fakeUsers);


function getRandomUsers(totalUsers) {

    let randomUsers = [];

    for (let i = 0; i < totalUsers; i++) {
        let user = {};
        //user ID
        user.userID = `#U${i.toString().padStart(6, "0")}`;
        //user name (user + i)
        user.user_name = `Utente ${i+1}`;
        //user city (random i from array)
        let randomCity = fakeCities[Math.floor(Math.random()*fakeCities.length)];
        user.user_city = `${randomCity}`;
        //user image (lorem picsum)
        user.user_pic = "https://picsum.photos/200/200";
        //user link (#)
        user.user_link = "./user.html";
        // year of registration
        user.user_year = Math.floor(Math.random()*(2020-2010)+2010);
    
        //add user to array
        randomUsers[i] = user;
    }

    return randomUsers;
}

function getRandomProducts(totalProducts, users) {
    let randomProducts = [];

    const fakeDescription = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae quis voluptatem perspiciatis consectetur officia cum, repudiandae laudantium, quidem earum atque, nemo corrupti natus sapiente unde dolorem! Dolorem libero voluptas magni.";

    for (let i = 0; i < totalProducts; i++) {
        let product = {};
        //product ID
        product.product_ID = `#P${i.toString().padStart(6, "0")}`;
        //product name (Product + i)
        product.product_name = `Prodotto ${i+1}`;
        //product category (random i from array)
        let randomCategory = fakeCategories[Math.floor(Math.random()*fakeCategories.length)];
        product.product_category = `${randomCategory}`;
        //product price (random)
        let randomPrice = (Math.random()*2000).toFixed(2);
        product.product_price = `${randomPrice}`;
        //product description (lorem)
        product.product_description = `${fakeDescription}`;
        //product image (lorem picsum)
        product.product_image = "https://picsum.photos/300/150";
        //product link (#)
        product.product_link = "#";
        // date
        product.product_date = randomDate();
        product.product_seller = `${users[Math.floor(Math.random()*users.length)].user_name}`;
    
        //add product to array
        randomProducts[i] = product;
    }

    return randomProducts;
}

//get random date between 2020 and today
function randomDate() {
    let start = (new Date(2020, 1, 1)).getTime();
    let today = (new Date()).getTime();

    return new Date(start + Math.random() * (today - start));
}


// DISPLAY PRODUCT CARDS

//function to be called with filteredProducts
function displayProducts(products) {

    let cardsWrapper = document.querySelector('.cards-wrapper');

    cardsWrapper.innerHTML = "";
    
    products.forEach((product) => {
        
        //create card columns
        let col = document.createElement('div');
        col.classList.add('col-12', 'col-md-6', 'col-lg-4', 'mb-4', 'd-flex', 'justify-content-center');
        cardsWrapper.append(col);
        
        //create cards
        let card = document.createElement('a');
        card.setAttribute('href', './single_product.html');
        card.setAttribute('target', '_blank');
        card.classList.add('card', 'product-card');
        col.append(card);

        //create detail tags (image, name, category, price, description)  
        let img = document.createElement('img');
        img.setAttribute('src', `${product.product_image}`);
        img.classList.add('img-fluid');

        let nameAndPrice = document.createElement('p');
        let name = document.createElement('strong');
        name.innerText = `${product.product_name}`;
        let price = document.createElement('span');
        price.classList.add('float-end');
        price.innerText = `€ ${product.product_price}`;

        nameAndPrice.append(name, price);

        let category = document.createElement('p');
        category.innerHTML = `<em>${product.product_category}</em>`;

        let description = document.createElement('p');
        description.classList.add('small');
        description.innerText = `${(product.product_description).substring(0, 70)}...`

        card.append(img, nameAndPrice, category, description);
    })
}

//select random user, display it and return it
function displayRandomUser() {
    const randomUser = fakeUsers[Math.floor(Math.random()*fakeUsers.length)];
    const userName = document.querySelector('.user-name');
    const userPic = document.querySelector('.user-pic');
    const userCity = document.querySelector('.user-city');
    const userYear = document.querySelector('.user-year');

    //display user info
    userName.innerText = `${randomUser.user_name}`;
    userPic.src = `${randomUser.user_pic}`;
    userCity.innerHTML = `<strong>Località:</strong> ${randomUser.user_city}`;
    userYear.innerHTML = `<strong>Utente iscritto dal:</strong> ${randomUser.user_year}`;

    return randomUser;
}

function getItalianDate(rawDate) {
    let formattedDate = new Intl.DateTimeFormat(
        "it", {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        }).format(rawDate);

    return formattedDate;
}

function getRandomBoolean() {
    return Boolean(Math.round(Math.random()));
}

function selectRandomProducts(products, totalProducts) {
    let selectedProducts = [];

    for (let i = 0; i < totalProducts; i++) {
        let randomIndex = Math.floor(Math.random()*products.length);
        selectedProducts.push(products[randomIndex]);
    }

    return selectedProducts;
}

function displaySingleProduct(product) {
    const singleProductName = document.querySelector('.s-product-name');
    const singleProductSeller = document.querySelector('.s-product-seller');
    const singleProductDate = document.querySelector('.s-product-date');
    const singleProductCategory = document.querySelector('.s-product-category');
    const singleProductPrice = document.querySelector('.s-product-price');
    const singleProductDescription = document.querySelector('.s-product-description');

    singleProductName.innerText = `${product.product_name}`;
    singleProductSeller.innerHTML = `<strong>Venditore:</strong> <a href="./user.html" target="_blank">${product.product_seller}</a>`;

    let formattedDate = getItalianDate(product.product_date);

    singleProductDate.innerHTML = `<strong>Annuncio pubblicato il:</strong> ${formattedDate}`;
    singleProductCategory.innerHTML = `<strong>Categoria:</strong> ${product.product_category}`;
    singleProductPrice.innerHTML = `<strong>€</strong> ${product.product_price}`;
    singleProductDescription.innerText = `${product.product_description}`;

}