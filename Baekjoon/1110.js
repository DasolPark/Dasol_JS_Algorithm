// const fs = require('fs');
// let newNum = fs.readFileSync('/dev/stdin').toString();
let newNum = '26';
const ORIGIN = parseInt(newNum);
let counter = 0;

while (newNum !== ORIGIN || counter === 0) {
  newNum = (newNum % 10) * 10 + ((parseInt(newNum / 10) + (newNum % 10)) % 10);
  counter++;
}

console.log(counter);

// Timeout code

// const fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString();

// if (parseInt(input) < 10) {
//   input = '0' + input;
// }

// let newNum = input;
// let counter = 0;
// let sum = 0;

// while (newNum !== input || counter === 0) {
//   sum = parseInt(newNum[0]) + parseInt(newNum[1]);

//   if (sum < 10) {
//     sum = '0' + sum.toString();
//   } else {
//     sum = sum.toString();
//   }

//   newNum = newNum[1] + sum[1];
//   counter++;
// }

// console.log(counter);
