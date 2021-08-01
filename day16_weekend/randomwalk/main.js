const stepText = document.querySelector('.steps');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let coordinates = getRandomCoordinates(); //x, y

function getRandomCoordinates() {
    
    let x = Math.round(Math.random()*canvas.width);
    let y = Math.round(Math.random()*canvas.height);
    console.log(x, y)
    return [x, y]
}

let start;
let steps = 0;

//press enter to start
document.addEventListener('keypress', (event) => {
    if (event.key == 'Enter') {
        getStarted(); //begin randomWalk
        console.log('start')
    }
})

//press space bar to stop
document.addEventListener('keypress', (event) => {
    if (event.code == 'Space') {
        clearInterval(start); //stop calling makeStep
        console.log('stop')
    }
})

function getStarted() {
    start = setInterval(randomWalk, 0.01); //start randomWalk
}

function randomWalk() {
    steps++; //count steps
    steps >= 500000 ? clearInterval(start) : null; //set max steps

    let dir = getDirection() //returns number 0-3
    
    ctx.beginPath();                              
    ctx.moveTo(coordinates[0], coordinates[1]);
    
    getNewCoordinates(dir); //updates coordinates array
    console.log(dir);
    console.log(coordinates);
    checkCoordinates();
    makeStep();
    updateSteps();
}

function makeStep() {

    ctx.lineTo(coordinates[0], coordinates[1]);
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.5)';  

    ctx.stroke();
}

function getDirection() {
    return Math.floor(Math.random()*4)
}

function getNewCoordinates(direction) {
    if (direction == 0) {         //top
        coordinates[0] -= 3;
    } else if (direction == 1) {  //right
        coordinates[1] += 3;
    } else if (direction == 2) {  //bottom
        coordinates[0] += 3;
    } else {                //left
        coordinates[1] -= 3;
    }
}

function checkCoordinates() {
    (coordinates[0] >= canvas.width) ? coordinates[0]-- : null;
    (coordinates[1] >= canvas.height) ? coordinates[1]-- : null;
    (coordinates[0] <= 0) ? coordinates[0]++ : null;
    (coordinates[1] <= 0) ? coordinates[1]++ : null;
}

function updateSteps(){
    stepText.textContent = `Steps: ${steps}`;
}