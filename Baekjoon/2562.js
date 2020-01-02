// 1st Solution(for loop)

// For submit

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

// For local test
const input = ['3', '29', '38', '12', '57', '74', '40', '85', '61'];
const inputToInt = input.map(num => (num = parseInt(num)));
let max = 0;
let idx = 0;

for (let i = 0; i < inputToInt.length; i++) {
  if (inputToInt[i] > max) {
    max = inputToInt[i];
    idx = i + 1;
  }
}

console.log(max);
console.log(idx);

// 2nd Solution(map, Math.max, apply, indexOf)

// For submit

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(num => parseInt(num));

// For local test
// const input = ['3', '29', '38', '12', '57', '74', '40', '85', '61'];
// const numArr = input.map(num => parseInt(num));
// const max = Math.max.apply(null, numArr);
// const indexOf = numArr.indexOf(max) + 1;

// console.log(max);
// console.log(indexOf);
