let input = prompt("How many inches of rain fell?");

function forLoopConvert (inches) {
    let inchNumber = parseInt(inches, 10);
    let asterisks = "";
    for (let i = 0; i < inchNumber; i++) {
        asterisks += "*";
    }
    return asterisks;
}

let output = forLoopConvert(input);

console.log(output);

function rainYield (inches) {
    let inchNumber = parseInt(inches, 10);
    let yield = 0
    if (inchNumber >= 20 ) {
       yield = 50 * .9
    } else if (inchNumber < 10) {
        yield = 50 * .8
    } else {
        yield = 50
    }
return yield;
}

let yieldOutput = rainYield(input);

// console.log(yieldOutput);

let fertilizer = prompt("Did you use fertilizer?");

function fertyield (answer) {
    if (answer == "yes") {
        let premreg = prompt("Did you use premium or regular fertilizer?");
            if (premreg == "premium") {
                yieldOutput = yieldOutput * 1.15
            } else {
                yieldOutput = yieldOutput * 1.1
            }
        }
     return yieldOutput.toFixed(2)
    }

let finalYieldOutput = fertyield(fertilizer);

console.log("The yield should be " + (finalYieldOutput) + " bushels per acre.")