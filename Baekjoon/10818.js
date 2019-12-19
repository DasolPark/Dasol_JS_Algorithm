// 3rd Solution (reduce, minMax)

const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n');
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

// 1st Solution(Spread in VSC)

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
