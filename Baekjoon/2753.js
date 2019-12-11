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
