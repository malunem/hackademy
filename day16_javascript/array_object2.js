// 1. Scrivere una funzione che trasforma un array in oggetto.

let array = [['chiave1', 1], ['chiave2', 2], ['chiave3', 3]]

console.log(getObject(array))

function getObject (array) {
    return Object.fromEntries(array)
}

console.log(getObject2(array))

//alternativa imperativa
function getObject2 (array) {
    let final = {}

    array.forEach(el => {
        final[el[0]] = el[1]
    })

    return final
}