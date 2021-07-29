let circle = document.querySelector('.wrapper');
const items = document.querySelectorAll('.child');

let deltaAngle = 360/items.length;

let rotations = []
let centralIcon = document.querySelector("#centralIcon")

//set first central icon with item at index 0
setCentralIcon(items[0])

//put items evenly spaced on the circle

items.forEach((item, i)  =>  {

    let rotation = deltaAngle * i 
    
    rotations.push(rotation)
    
    item.style.transform = `rotate(${rotation}deg) translate(250px) rotate(-${rotation}deg)`

    //add event listener to move items when one is clicked
    item.addEventListener('click', () => {
        setCentralIcon(items[i]);
        rotate(rotations[i]);
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

function rotate(rotation) {

    items.forEach((item, i) => {
        let angle = rotations[i] - rotation; //calc new position for every item
        let orientation = 360-angle; //calc angle to look right

        item.style.transition = '2s';
        item.style.transform = `rotate(${angle}deg)  translate(250px) rotate(${orientation}deg)`;
    })
}    