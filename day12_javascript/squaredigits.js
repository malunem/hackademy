/* square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer */

console.log(squareDigits(9119))

function squareDigits(num){

    let array = String(num)
    .split("")
    .map(el => Number(el)**2)
    

    return Number(array.join(""))

}