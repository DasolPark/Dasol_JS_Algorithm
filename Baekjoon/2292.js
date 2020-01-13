// Honey Comb

// 1st Solution - Good

// For submit

// const fs = require('fs');
// const N = Number(fs.readFileSync('/dev/stdin').toString().trim());

// For local test
const N = 58;
let counter = 1;
let range = 1;

while (range < N) {
  range += counter++ * 6;
}
console.log(counter);
