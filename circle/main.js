//select html items
const circle = document.querySelector('.wrapper');
const items = document.querySelectorAll('.child');
const centralIcon = document.querySelector("#centralIcon");
const articles = document.querySelectorAll("article");

let deltaAngle = 360/items.length;

let rotations = []
//set first central icon with item at index 0
setCentralIcon(items[0])

//put items evenly spaced on the circle

items.forEach((item, i)  =>  {

    let rotation = deltaAngle * i 
    rotations.push(rotation) //save starting rotations in array (used in rotate func)
    item.style.transform = `rotate(${rotation}deg) translate(250px) rotate(-${rotation}deg)`

    //add event listener to move items when one is clicked
    item.addEventListener('click', () => {
        setCentralIcon(items[i]);
        rotateItems(rotations[i]);
        visualizeArticle(i);
    })
})

function setCentralIcon (item) {
    //remove old classes
    centralIcon.classList = "";

    //add new classes
    let iconClassList = item.firstElementChild.classList;
    centralIcon.classList.add('central', 'fa-10x');
    iconClassList.forEach((value) => centralIcon.classList.add(`${value}`));
}

function rotateItems(rotation) {
    
    items.forEach((item, i) => {
        let angle = rotations[i] - rotation; //calc new position for every item 
        let orientation = 360-angle; //calc angle to look right

        item.style.transition = '2s';
        item.style.transform = `rotate(${angle}deg)  translate(250px) rotate(${orientation}deg)`;
    })
}    

function visualizeArticle(index) {
    //remove d-none class
    articles[index].classList = ""

    //add d-none to others
    articles.forEach((article, i) => {
        (i != index) ? (article.classList.add("d-none")) : null
    });
}