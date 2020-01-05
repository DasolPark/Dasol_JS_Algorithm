// 2nd Solution(reduce(), Math.max.apply())

// For submit

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim();

// For local test
const input = '734 893';
const revEntire = input.split('').reduce((rev, numChar) => numChar + rev, '');
const eachNumArr = revEntire.split(' ');
const max = Math.max.apply(null, eachNumArr);

console.log(max);

// 1st Solution(reduce, Math.max.apply())

// For submit

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim();

// For local test
// const input = '734 893';
// const reverseInt = input
//   .split('')
//   .reduce((rev, num) => {
//     return num + rev;
//   }, '')
//   .split(' ');
// const max = Math.max.apply(null, reverseInt);

// console.log(max);

// 3rd Solution(for...of, No Math.max())

// For submit

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim();

// For local test
// const input = '734 893';
// let rev = '';

// for (let numChar of input) {
//   rev = numChar + rev;
// }

// const eachNumArr = rev.split(' ').map(num => parseInt(num));
// let max = 0;

// for (let i = 0; i < eachNumArr.length; i++) {
//   if (eachNumArr[i] > max) {
//     max = eachNumArr[i];
//   }
// }

// console.log(max);

// 4th Solution(reverse())

// For submit

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim();

// For local test
// const input = '734 893';
// let rev = input
//   .split('')
//   .reverse()
//   .join('');

// const eachNumArr = rev.split(' ').map(num => parseInt(num));
// let max = 0;

// for (let i = 0; i < eachNumArr.length; i++) {
//   if (eachNumArr[i] > max) {
//     max = eachNumArr[i];
//   }
// }

// console.log(max);
