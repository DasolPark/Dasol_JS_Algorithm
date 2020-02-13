// Find Alphabet

// 2nd Solution

// For submit

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim();

// For local test
const input = 'baekjoon';
const arr = [];

for (let i = 'a'.charCodeAt(); i <= 'z'.charCodeAt(); i++) {
  console.log(input.indexOf(String.fromCharCode(i)));
}

// 1st Solution

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim();

// const input = 'baekjoon';
// const result = [];

// for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
//   result.push(input.indexOf(String.fromCharCode(i)));
// }

// console.log(result.join(' '));
