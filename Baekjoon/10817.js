// Three Numbers (The second biggest Number);

// 1st Solution

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');
// const a = parseInt(input[0]);
// const b = parseInt(input[1]);
// const c = parseInt(input[2]);

const input = ['10', '20', '30']; // For local test

const a = parseInt(input[0]);
const b = parseInt(input[1]);
const c = parseInt(input[2]);

let max = 0;

max = Math.max(a, b, c);

if (max === a) {
  console.log(Math.max(b, c));
} else if (max === b) {
  console.log(Math.max(a, c));
} else {
  console.log(Math.max(a, b));
}

// 2nd Solution(map, sort)

// For submit

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

// const input = ['20', '30', '10']; // For local test

// const inputToInt = input
//   .map(element => parseInt(element))
//   .sort((a, b) => a - b);

// console.log(inputToInt[inputToInt.length - 2]);
