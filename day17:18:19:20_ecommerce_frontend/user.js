const randomUser = displayRandomUser();

//display user products
const userProducts = fakeProducts.filter(product => product.product_seller === randomUser.user_name);
displayProducts(userProducts);