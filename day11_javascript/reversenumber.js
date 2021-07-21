/* Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example:
348597 => [7,9,5,8,4,3] */

let n = 348597

console.log(digitize(n))

function digitize(n) {
    
    let digits = String(n)
    
    let splitted = digits.split("")
    
    splitted = splitted.map(el => Number(el))
    
    return splitted.reverse()
}