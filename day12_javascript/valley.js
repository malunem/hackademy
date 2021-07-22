/* Input : an array of integers.

Output : this array, but sorted in such a way that there are two wings:

the left wing with numbers decreasing,

the right wing with numbers increasing.

the two wings have the same length. If the length of the array is odd the wings are around the bottom, if the length is even the bottom is considered to be part of the right wing.

each integer l of the left wing must be greater or equal to its counterpart r in the right wing, the difference l - r being as small as possible. In other words the right wing must be nearly as steep as the left wing.

EXAMPLE 1:
input = [79, 35, 54, 19, 35, 25]
output = [79, 35, 25, 19, 35, 54]

EXAMPLE 2:
input = [67, 93, 100, -16, 65, 97, 92]
output = [100, 93, 67, -16, 65, 92, 97] */

console.log(makeValley([79, 35, 54, 19, 35, 25]))
//console.log(makeValley([67, 93, 100, -16, 65, 97, 92]))

function makeValley(arr) {
    arr.sort((a, b) => b - a)

    let leftWing = []
    let rightWing = []
    let bottom

    if (arr.length % 2 != 0) {
        bottom = arr.pop()
    }

    for (let i = 0; i < arr.length ; i++) {
        if (i % 2 == 0) leftWing.push(arr[i])
        else rightWing.push(arr[i])
    }

    rightWing = rightWing.reverse()

    if (bottom) {
        return [...leftWing, bottom, ...rightWing]
    } else {
        return [...leftWing, ...rightWing]
    }
}