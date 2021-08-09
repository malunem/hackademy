displayProducts(fakeProducts);
displayNumberOfProducts(fakeProducts);


// CATEGORY FILTER

const bodyCategories = document.querySelector('#bodyCategories');
const accordionsWrapper = document.querySelector('.accordionsWrapper');
const showedProducts = document.querySelector('.showedProducts');

//make filters always visible
document.addEventListener('scroll', () => {
    let scrolled = window.scrollY;
    let windowHeight = window.innerHeight;

    if (scrolled < windowHeight) {            
        accordionsWrapper.style.top = `${(navbar1.getBoundingClientRect().height)+(navbar2.getBoundingClientRect().height)+20}px`;
        showedProducts.style.top = `${(navbar1.getBoundingClientRect().height)+(navbar2.getBoundingClientRect().height)}px`;
    } else {
        accordionsWrapper.style.top = "20px"; //20px is css .filter-column padding
        showedProducts.style.top = "0px"; //20px is css .filter-column padding

    }
});

fakeCategories.forEach((category) => {
    let categoryWrapper = document.createElement('div');
    categoryWrapper.classList.add('form-check');
    categoryWrapper.innerHTML = `
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="${category}">
        <label data-category="${category}" class="form-check-label" for="${category}">
            ${category}
        </label>`;
    bodyCategories.append(categoryWrapper);
})

//add event listener to filter just created
document.querySelectorAll('[data-category]').forEach((label, i) => {
    label.addEventListener('click', () => {
        const choosenCategory = label.dataset.category;

        let filteredProducts = fakeProducts.filter((el) => 
            el.product_category === choosenCategory,
        );

        console.log(filteredProducts)

        displayProducts(filteredProducts);
        displayNumberOfProducts(filteredProducts);

    })
})

function displayNumberOfProducts(productsShowed) {
    const productsNumber = document.querySelector('.productsNumber');
    productsNumber.innerHTML = `${productsShowed.length}`;
}