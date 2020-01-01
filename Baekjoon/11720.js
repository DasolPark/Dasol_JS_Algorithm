// For Submit

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// For Local Test
let input = ['5', '54321'];
let sum = 0;

// 1st Solution

for (let num of input[1]) {
  sum += parseInt(num);
}

console.log(sum);

// 2nd Solution

// for (let i = 0; i < parseInt(input[0]); i++) {
//   sum += parseInt(input[1][i]);
// }

// console.log(sum);
