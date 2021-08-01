const colorDivs = document.querySelectorAll('.color');
const colorTexts = document.querySelectorAll('.color p');
const lockIcons = document.querySelectorAll('.color i');
const lockedColors = []

//initialize lockedColors
colorDivs.forEach((el, i) => lockedColors[i] = false);

//initialize divs random colors
randomizeColors()

//listen to pressed space bar
document.addEventListener('keyup', (event) => {
    if (event.code === 'Space') {
      randomizeColors()
    }
})

//listen to color clicked
colorDivs.forEach((el, i) => {
    el.addEventListener('click', () => {toggleBlockColor(i)})
})

function randomizeColors() {
    colorDivs.forEach((color, i) => {
        let randomColor = Math.round(Math.random() * 255*255*255)

        let colorCode = `#${randomColor.toString(16)}`

        setColorAndText(colorCode, i);
    })   
}

function setColorAndText(colorCode, index) {
    if (!lockedColors[index]) {
        colorDivs[index].style.backgroundColor = `${colorCode}`;
        colorTexts[index].innerHTML = `${colorCode}`;
    }
}

function toggleBlockColor(index) {
    lockedColors[index] = !lockedColors[index];
    lockIcons[index].classList = 'fas'; //reset classes

    if (lockedColors[index]) {
        lockIcons[index].classList.add('fa-lock');
    } else {
        lockIcons[index].classList.add('fa-unlock');
    }
}