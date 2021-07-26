//Dato un array, produrre un oggetto di coppie chiave:valore fatte così => numero:numeroDiVolteCheCompare

let array = [1,4,5,6,3,2,1,6,4,3,2,1,4,5,6,3,2,1,5,6,9]

console.log(getOccurrences(array))

function getOccurrences(input) {

    let keys = Array.from(new Set(input))

    let occurrences = []

    for (let i = 0; i < keys.length; i++) {
        let temp = []

        temp[0] = keys[i]

        temp[1] = 0

        input.forEach(el => {
                if (el == temp[0]) {
                    temp[1]++
                }
        })

        occurrences.push(temp)

    }

    return Object.fromEntries(occurrences)
}