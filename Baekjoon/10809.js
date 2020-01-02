// 2nd Solution

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim();

const input = 'baekjoon';
const result = [];

for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
  result.push(input.indexOf(String.fromCharCode(i)));
}

console.log(result.join(' '));

// 1st Solution(not so good)

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// const input = ['baekjoon'];
// const checker = [
//   'a',
//   'b',
//   'c',
//   'd',
//   'e',
//   'f',
//   'g',
//   'h',
//   'i',
//   'j',
//   'k',
//   'l',
//   'm',
//   'n',
//   'o',
//   'p',
//   'q',
//   'r',
//   's',
//   't',
//   'u',
//   'v',
//   'w',
//   'x',
//   'y',
//   'z'
// ];

// const result = [];

// for (let char of checker) {
//   if (input[0].includes(char)) {
//     result.push(input[0].indexOf(char));
//   } else {
//     result.push(-1);
//   }
// }

// console.log(result.join(' '));
