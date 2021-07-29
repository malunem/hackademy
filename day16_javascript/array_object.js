// 1. Scrivere una funzione che trasforma un array in oggetto.

let array = [1,2,3,4,5,6]

console.log(getObject(array))

function getObject (array) {
    let object = {}

    array.forEach((el, i) => {
        object[i] = el
    })

    return object
}