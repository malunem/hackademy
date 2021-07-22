/* Description:
Groups of characters decided to make a battle. Help them to figure out which group is more powerful. Create a function that will accept 2 variables and return the one who's stronger.

Rules:
Each character have its own power: A = 1, B = 2, ... Y = 25, Z = 26
Only capital characters can and will participate a battle.
Only two groups to a fight.
Group whose total power (A + B + C + ...) is bigger wins.
If the powers are equal, it's a tie.
Examples:
  battle("ONE", "TWO"); // => "TWO"`
  battle("ONE", "NEO"); // => "Tie!" */

console.log(battle("ONE", "TWO"))

function battle(x, y) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    
    let xScore = 0
    let yScore = 0
    
    Array.from(x)
        .forEach(el =>
            xScore += alphabet.indexOf(el)+1
        )

    Array.from(y)
        .forEach(el =>
            yScore += alphabet.indexOf(el)+1
        )
            
    if (xScore > yScore) return x
    else if (yScore > xScore) return y
    else return "Tie!"
            
}