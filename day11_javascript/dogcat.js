/* I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only

Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that

Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that */

let humanYears = 5

console.log(dogCatYears(humanYears))

function dogCatYears(humanYears) {
    let catYears
    let dogYears

for (let year = 1; year <= humanYears; year++) {
    if (year == 1) {
        catYears = 15 
        dogYears = 15
    } else if (year == 2) {
        catYears = catYears + 9
        dogYears = dogYears + 9
    } else {
        catYears = catYears + 4
        dogYears = dogYears + 5
    }

}

let ages = [humanYears,catYears,dogYears]

return ages
}