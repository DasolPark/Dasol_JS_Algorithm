// 3rd Solution (reduce, minMax)

// For submit

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

// For local test
const input = ['5', '20 10 35 30 7'];
const N = parseInt(input[0]);
const resultMinMax = input[1].split(' ').reduce(
  (minMax, num) => {
    const number = parseInt(num);
    minMax[0] = minMax[0] > number ? number : minMax[0];
    minMax[1] = minMax[1] < number ? number : minMax[1];
    return minMax;
  },
  [1000000, -1000000]
);

console.log(resultMinMax.join(' '));

// 2nd Solution (classic for loop)

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
// const N = parseInt(input[0]);
// const numArr = input[1].split(' ').map(num => {
//     num = parseInt(num);
//     return num;
// });

// let max = numArr[0];
// let min = numArr[0];

// for (let i = 0; i < numArr.length; i++) {
//   if (numArr[i] > max) {
//     max = numArr[i];
//   }

//   if (numArr[i] < min) {
//     min = numArr[i];
//   }
// }

// console.log(min + ' ' + max);

// 1st Solution(Spread in VSC - not passed)

// const input = ['5', '20 10 35 30 7'];
// const N = parseInt(input[0]);
// const numArr = input[1].split(' ').map(num => {
//   num = parseInt(num);
//   return num;
// });

// const max = Math.max(...numArr);
// const min = Math.min(...numArr);

// console.log(numArr);
// console.log(min + ' ' + max);

// 4th Solution(reduce)

// For submit

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// For local test
// const input = ['5', '20 10 35 30 7'];
// const N = parseInt(input[0]);
// const numArr = input[1].split(' ').map(num => parseInt(num));
// const max = numArr.reduce((a, b) => Math.max(a, b));
// const min = numArr.reduce((a, b) => Math.min(a, b));

// console.log(`${min} ${max}`);

// 5th Solution

// For submit

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// For local test
// const input = ['5', '20 10 35 30 7'];
// const N = parseInt(input[0]);
// const numArr = input[1].split(' ').map(num => parseInt(num));
// let max = numArr[0];
// let min = numArr[0];

// for (let i = 0; i < N; i++) {
//   if (numArr[i] > max) {
//     max = numArr[i];
//   }
//   if (numArr[i] < min) {
//     min = numArr[i];
//   }
// }

// console.log(`${min} ${max}`);
