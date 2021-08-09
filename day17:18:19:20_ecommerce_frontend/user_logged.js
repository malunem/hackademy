const randomUserLogged = displayRandomUser();
const tableSell = document.querySelector('.table-sell');
const tableBuy = document.querySelector('.table-buy');

let sellNumber = Math.floor(Math.random()*(10-1)+1);
let sellProducts = fakeProducts.filter(product => product.product_seller === randomUserLogged.user_name);
let temporaryProducts = fakeProducts.filter(product => product.product_seller !== randomUserLogged.user_name);
let buyNumber = Math.floor(Math.random()*(10-1)+1);
let buyProducts = selectRandomProducts(temporaryProducts, buyNumber);

displayTableSell(sellProducts);
displayTableBuy(buyProducts);

function displayTableSell(products) {
    
    products.forEach((product, i) => {
        let tableRow = document.createElement('tr');
        tableSell.append(tableRow);

        tableRow.innerHTML = `<th scope="row" class="">${i+1}</th>`;

        let productID = document.createElement('td');
        productID.innerText = `${product.product_ID}`;
        tableRow.append(productID);

        let productName = document.createElement('td');
        productName.innerText = `${product.product_name}`;
        tableRow.append(productName);

        let productDate = document.createElement('td');
        productDate.innerText = `${getItalianDate(product.product_date)}`;
        tableRow.append(productDate);

        let productStatus = document.createElement('td');
        let randomStatus = getRandomBoolean();
        productStatus.innerText = `${getStatus(randomStatus)}`;
        tableRow.append(productStatus);
    });
}

function displayTableBuy(products) {
    
    products.forEach((product, i) => {
        let tableRow = document.createElement('tr');
        tableBuy.append(tableRow);

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
    });
}

function getStatus(bool) {
    let status;
    (bool) ? status = 'Venduto' : status = 'In vendita';
    return status;
}