/* You are given a string of letters and an array of numbers.
The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.
After each removal the size of the string decreases (there is no empty space).
Return the only letter left.

Example:

let letters = "zbk", coords = [0, 1]
    letters = "bk", coords = [1]
    letters = "b", coords = []
    return 'b'
Notes
The given string will never be empty.
The length of the array is always one less than the length of the string.
All numbers are valid.
There can be duplicate letters and numbers. */


let letters = "zbk", coords = [0, 1]

console.log(lastSurvivor(letters, coords))

function lastSurvivor(letters, coords) {

    let array = Array.from(letters)

    for (let i = 0; i < coords.length; i++) {
        array.splice(coords[i], 1)  
    }

    return array[0]
}