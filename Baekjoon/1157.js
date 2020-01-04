// 2nd Solution

// For submit

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim();

// For local test
const input = 'Mississipi';
const charMap = {};

for (let char of input.toLowerCase()) {
  charMap[char] = charMap[char] ? charMap[char] + 1 : 1;
}

let max = Math.max.apply(null, Object.values(charMap));
let maxChar = '';
let counter = 0;
for (let char in charMap) {
  if (charMap[char] === max) {
    maxChar = char;
    counter++;
  }
  if (counter > 1) {
    console.log('?');
    return;
  }
}

console.log(maxChar.toUpperCase());

// 1st Solution

// For submit

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim();

// For local test
// const input = 'Mississipi';
// const newStr = input.toLowerCase();
// const charMap = {};

// for (let char of newStr) {
//   charMap[char] = charMap[char] ? charMap[char] + 1 : 1;
// }

// let max = 0;
// for (let char in charMap) {
//   if (charMap[char] > max) {
//     max = charMap[char];
//     maxChar = char.toUpperCase();
//   }
// }

// let counter = 0;
// for (let char in charMap) {
//   if (charMap[char] === max) {
//     counter++;
//   }
//   if (counter > 1) {
//     console.log('?');
//     return;
//   }
// }

// console.log(maxChar);
