// Sort inside

// 1st Solution ( sort() )

// For submit

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('').map(num => parseInt(num));

// For local test
const input = [2, 1, 4, 3];
console.log(input.sort((a, b) => b - a).join(''));

// 2nd Solution ( sort(), reverse() )

// For submit

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('').map(num => parseInt(num));

// For local test
// const input = [2, 1, 4, 3];
// console.log(input.sort().reverse().join(''));

// 3rd Solution ( Selection Sort )

// For submit

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('').map(num => parseInt(num));

// For local test
// let input = [2, 1, 4, 3];

// for (let i = 0; i < input.length; i++) {
//   let indexOfMax = i;

//   for (let j = i + 1; j < input.length; j++) {
//     if (input[indexOfMax] < input[j]) {
//       indexOfMax = j;
//     }
//   }

//   if (indexOfMax !== i) {
//     const maxier = input[indexOfMax];
//     input[indexOfMax] = input[i];
//     input[i] = maxier;
//   }
// }

// console.log(input.join(''));

// 4th Solution ( Bubble Sort )

// For submit

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('').map(num => parseInt(num));

// For local test
// let input = [2, 1, 4, 3];

// for (let i = 0; i < input.length; i++) {
//   for (let j = 0; j < input.length - 1 - i; j++) {
//     if (input[j] < input[j + 1]) {
//       const maxier = input[j + 1];
//       input[j + 1] = input[j];
//       input[j] = maxier;
//     }
//   }
// }

// console.log(input.join(''));

// 5th Solution( Merge Sort )

// For submit

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('').map(num => parseInt(num));

// For local test
// let input = [2, 1, 4, 3];

// function mergeSort(arr) {
//   if (arr.length === 1) {
//     return arr;
//   }

//   const center = Math.floor(arr.length / 2);
//   const left = arr.slice(0, center);
//   const right = arr.slice(center);

//   return merge(mergeSort(left), mergeSort(right));
// }

// function merge(left, right) {
//   const results = [];

//   while (left.length && right.length) {
//     if (left[0] > right[0]) {
//       results.push(left.shift());
//     } else {
//       results.push(right.shift());
//     }
//   }

//   return [...results, ...left, ...right];
// }

// console.log(mergeSort(input).join(''));
