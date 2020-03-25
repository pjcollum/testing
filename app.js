// npm i jest --save-dev
// change the test string to jest in package.json
// npm test

//development driven by tests..

// 1. write test
// 2. the test should fail
// 3. write code to make the test pass
// 4. refactor

// const moreThanSix = (myArray) => {
//     let newArray = [];

//     for (let i =0; i < myArray.length; i++){
//         if (myArray[i].length > 6){
//             newArray.push(myArray[i]);
//         }
//     }
//     return newArray;
// }

const moreThanSix = (myArray) => {
    return myArray.filter(anArrayItem => anArrayItem.length > 6)
}

//export all modules you want to use
module.exports = {
    moreThanSix
}