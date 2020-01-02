// 1st Solution

// For submit

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

// 2nd Solution(reduce, do ... while)

// For submit

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim();

// For local test
// const input = '26';
// let newNum = parseInt(input);
// let counter = 0;

// do {
//   newNum =
//     (newNum % 10) * 10 +
//     ((newNum
//       .toString()
//       .split('')
//       .reduce((acc, num) => +acc + +num) %
//       10) %
//       10);
//   counter++;
// } while (parseInt(newNum) !== parseInt(input));

// console.log(counter);

// 3rd Solution(do ... while)

// For submit

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim();

// For local test
// const ORIGIN = '26';
// let newNum = parseInt(ORIGIN);
// let counter = 0;

// do {
//   newNum = (newNum % 10) * 10 + ((parseInt(newNum / 10) + (newNum % 10)) % 10);
//   counter++;
// } while (parseInt(newNum) !== parseInt(ORIGIN));

// console.log(counter);

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
