const circle = document.querySelector('.wrapper');
const items = document.querySelectorAll('.child');

let distAngle = 360/items.length;

items.forEach((item, index) => {

    position = index * distAngle
    let x = 250 + (250 * Math.cos(position*(Math.PI/180)));
    let y = 250 + (250 * Math.sin(position*(Math.PI/180)));

    item.style.position = "absolute";
    item.style.top = `calc(${y}px - 25px)`;
    item.style.left = `calc(${x}px - 25px)`;

})