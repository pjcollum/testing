const add = (num1, num2) => {
    return num1 + num2;
}

let myArray = ['Dean', 'Dan', 'Tom', 'Danneh']

let userInput;
let userBalance = 1000;

const withdrawFunction = userInput => {     //single paramenters dont need brackets
    return (userBalance -= userInput)
}

let booleanValue = true
//module.exports = add;   //single line export
module.exports = {      //multiple function export
    add,
    myArray,
    userInput,
    userBalance,
    withdrawFunction,
    booleanValue
}
