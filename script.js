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


// function fertyield (answer) {
//     if (answer == "no") {
//         yieldOutput = yieldOutput
//     }

//     else  {
//         let premreg = prompt("Did you use premium or regular fertilizer?");
//             if (premreg == "yes") {
//                 yieldOutput =  yieldOutput * 1.15
//             }
//             else {
//                 yieldOutput = yieldOutput * 1.1
//             }
//         }
//      return yieldOutput
//     }

// let finalYieldOutput = fertyield(fertilizer);

// console.log(finalYieldOutput)



// Determine how the yield is affected by the rain...
// ○ Normally the land produces 50 bushels of grain.
// ○ But if there's too much rain (20 inches or more), that number goes down by 10%.
// ○ Or if there's too little rain (less than 10 inches), that number goes down by 20%.


// Adding or subtracting a percentage:
// ○ To increase a number by a certain percent, multiply by 1 plus the decimal of the
// percent--so to increase by 10%, multiple by 1.1 (10% = .1)
// ○ To decrease a number by a certain percent, multiply by 1 minus the decimal of the
// percent--so to decrease by 10%, multiply by .8 (20% = .2)

// function convertInchesToAsterisks (inches) {
//     let inchNumber = parseInt(inches, 10);
//     let asterisks = "*".repeat(inchNumber);
//     return asterisks;
// }


// make it into a String
// convert string to *

// for loop

// make inch into a number
// run through numbers
// for each number add to string with an aterisk
// at the end, print the string atsrisks
// print an asterisk until number is document

// start with empty string, add to string
// start with empty array, add string to array, join array to string at the end


// convert string of inches of rain to number
// make string you want to repeat "*"
// a.repeat the number of inches of rain

// i give you this, you return this

