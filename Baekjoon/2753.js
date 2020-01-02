// Leap Year Q.2753

// 1st solution

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');
// const inputA = input[0];
const inputA = 2000;

if (inputA % 4 === 0 && (inputA % 100 !== 0 || inputA % 400 === 0)) {
  console.log(1);
} else {
  console.log(0);
}

// 2nd solution

// for submit

// const fs = require('fs');
// const year = parseInt(fs.readFileSync('/dev/stdin').toString().trim());

// const year = 2000; // for local test

// if (year % 4 === 0 && year % 400 === 0) {
//   console.log(1);
// } else if (year % 4 === 0 && year % 100 !== 0) {
//   console.log(1);
// } else {
//   console.log(0);
// }
