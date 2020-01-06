// Croatia Alphabet

// 1st Solution(Regular Expressions)

// For submit

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim();

// For local test
const input = 'ljes=njak';

var regex = /c\=|c\-|dz\=|d\-|lj|nj|s\=|z\=/g;
const result = input.replace(regex, ' ');

console.log(result.length);

// 2nd Solution(while, idx, if else)

// For submit

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim();

// For local test
// const input = 'ljes=njak';
// let idx = 0;
// let counter = 0;

// while (idx < input.length) {
//   if (
//     input[idx] === 'c' &&
//     (input[idx + 1] === '=' || input[idx + 1] === '-')
//   ) {
//     idx += 2;
//     counter++;
//   } else if (
//     input[idx] === 'd' &&
//     input[idx + 1] === 'z' &&
//     input[idx + 2] === '='
//   ) {
//     idx += 3;
//     counter++;
//   } else if (input[idx] === 'd' && input[idx + 1] === '-') {
//     idx += 2;
//     counter++;
//   } else if (
//     input[idx + 1] === 'j' &&
//     (input[idx] === 'l' || input[idx] === 'n')
//   ) {
//     idx += 2;
//     counter++;
//   } else if (input[idx] === 's' && input[idx + 1] === '=') {
//     idx += 2;
//     counter++;
//   } else if (input[idx] === 'z' && input[idx + 1] === '=') {
//     idx += 2;
//     counter++;
//   } else {
//     idx++;
//     counter++;
//   }
// }

// console.log(counter);

// 3rd Solution(shift, while, if else)

// For submit

// const fs = require('fs');
// const str = fs.readFileSync('/dev/stdin').toString().trim().split('');

// For local test
// const str = 'ljes=njak'.split('');
// let counter = 0;

// while (str.length) {
//   if (str[0] === 'c' && (str[1] === '=' || str[1] === '-')) {
//     counter++;
//     str.shift();
//     str.shift();
//   } else if (str[0] === 'd' && str[1] === 'z' && str[2] === '=') {
//     counter++;
//     str.shift();
//     str.shift();
//     str.shift();
//   } else if (str[0] === 'd' && str[1] === '-') {
//     counter++;
//     str.shift();
//     str.shift();
//   } else if (str[1] === 'j' && (str[0] === 'l' || str[0] === 'n')) {
//     counter++;
//     str.shift();
//     str.shift();
//   } else if (str[0] === 's' && str[1] === '=') {
//     counter++;
//     str.shift();
//     str.shift();
//   } else if (str[0] === 'z' && str[1] === '=') {
//     counter++;
//     str.shift();
//     str.shift();
//   } else {
//     counter++;
//     str.shift();
//   }
// }

// console.log(counter);
