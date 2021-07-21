/* Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese" */

let weight = 60
let height = 160

console.log(bmi(weight, height))

function bmi(weight, height) {
        
    let bmi = weight / (height**2)
    
    if (bmi <= 18.5) {
        return "Underweight"
    } else if (bmi <= 25.0) {
        return "Normal"
    } else if (bmi <= 30.0) {
        return "Overweight"
    } else {
        return "Obese"
    }
}