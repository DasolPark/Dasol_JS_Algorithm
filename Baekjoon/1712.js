// Break-Even Point

// 1st Solution(other)

// For submit

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(num => parseInt(num));

// For local test
const input = ['1000', '70', '170'].map(num => parseInt(num));
const A = input.shift();
const B = input.shift();
const C = input.shift();
const netProfit = C - B;

if (netProfit <= 0) {
  console.log(-1);
} else {
  console.log(Math.floor(A / netProfit) + 1);
}

// 2nd Solution(ohter)

// For submit

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(num => parseInt(num));

// For local test
// const input = ['1000', '70', '170'].map(num => parseInt(num));
// const A = input.shift();
// const B = input.shift();
// const C = input.shift();

// if (C <= B) {
//   console.log(-1);
// } else {
//   console.log(Math.floor(A / (C - B)) + 1);
// }
