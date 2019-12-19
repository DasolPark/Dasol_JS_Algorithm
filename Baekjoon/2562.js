// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
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
