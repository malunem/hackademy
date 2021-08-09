const singleProduct = fakeProducts[Math.round(Math.random()*fakeProducts.length)];
const scoresWrapper = document.querySelector('.scores-wrapper');

//Display single product
displaySingleProduct(singleProduct);

//fake images scores (google ai review)
const scores = [
    {
        Blood: `${getRandomScore()}`,
        Racism: `${getRandomScore()}`,
        Adult: `${getRandomScore()}`,
        Medical: `${getRandomScore()}`,
    },
    {
        Blood: `${getRandomScore()}`,
        Racism: `${getRandomScore()}`,
        Adult: `${getRandomScore()}`,
        Medical: `${getRandomScore()}`,
    },
    {
        Blood: `${getRandomScore()}`,
        Racism: `${getRandomScore()}`,
        Adult: `${getRandomScore()}`,
        Medical: `${getRandomScore()}`,
    },
]

let averages = getAverage(scores);
console.log(averages);

averages.forEach((average) => {
    let div = document.createElement('div');
    div.classList.add('progress', 'mb-2');
    console.log(div);

    let label = document.createElement('p');
    label.innerText = `${average[0]}`;
    console.log(label);

    let progressBar = document.createElement('div');
    progressBar.classList.add('progress-bar', 'col-12', 'secondary-background');
    progressBar.setAttribute('role', 'progressbar');
    progressBar.setAttribute('aria-valuenow', `${Math.round(average[1])}`);
    progressBar.setAttribute('aria-valuemin', '0');
    progressBar.setAttribute('aria-valuemax', '100');
    progressBar.style.width = `${Math.round(average[1])}%`;
    progressBar.innerText = `${average[1].toFixed(2)}%`;
    console.log(progressBar);

    div.append(progressBar);
    scoresWrapper.append(label, div);
})

console.log(scoresWrapper);

function getAverage(scores) {    
    let objectKeys = Object.keys(scores[0]);

    let keyAverages = []; //array of arrays
    objectKeys.forEach((key, i) => {
        let keyAverage = (scores.map(el => Number(el[key])) //returns all values of the key in all objects
                        .reduce((t,n) => {return t+n}) / scores.length); //returns average of key values
        
        keyAverages[i] = [key, keyAverage];
    });
    return keyAverages;
}

function getRandomScore() {
    return Math.floor(Math.random()*100);
}