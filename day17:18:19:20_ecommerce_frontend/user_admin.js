const randomUserLogged = displayRandomUser();
const tableAdmin = document.querySelector('.table-admin');

let adminNumber = Math.floor(Math.random()*(10-1)+1);
let adminProducts = selectRandomProducts(fakeProducts, adminNumber);

displayTableAdmin(adminProducts);

function displayTableAdmin(products) {
    
    products.forEach((product, i) => {
        let tableRow = document.createElement('tr');
        tableAdmin.append(tableRow);

        tableRow.innerHTML = `<th scope="row" class="">${i+1}</th>`;

        let productName = document.createElement('td');
        productName.innerText = `${product.product_name}`;
        tableRow.append(productName);

        let productPrice = document.createElement('td');
        productPrice.innerText = `€ ${product.product_price}`;
        tableRow.append(productPrice);

        let productSeller = document.createElement('td');
        productSeller.innerText = `${product.product_seller}`;
        tableRow.append(productSeller);

        let productCategory = document.createElement('td');
        productCategory.innerText = `${product.product_category}`;
        tableRow.append(productCategory);

        let productDetails = document.createElement('td');
        productDetails.innerHTML = `<a href="./single_product_review.html" target="_blank">Link</a>`;
        tableRow.append(productDetails);
        
    });
}