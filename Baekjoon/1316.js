// Group Word Checker

// 3rd Solution

// For submit

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// For local test
// const input = ['3', 'happy', 'new', 'year'];
const input = ['4', 'aba', 'abab', 'abcabc', 'a'];
const N = parseInt(input.shift());
let counter = N;

for (let i = 0; i < N; i++) {
  const charMap = {};
  for (let j = 0; j < input[i].length; j++) {
    if (!charMap[input[i][j]]) {
      charMap[input[i][j]] = true;
    } else if (input[i][j] !== input[i][j - 1]) {
      counter--;
      break;
    }
  }
}

console.log(counter);

// 1st Solution

// For submit

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// For local test
// const input = ['3', 'happy', 'new', 'year'];
// const input = ['4', 'aba', 'abab', 'abcabc', 'a'];
// const N = parseInt(input[0]);
// let counter = N;

// for (let i = 1; i <= N; i++) {
//   const charMap = {};
//   for (let j = 0; j < input[i].length; j++) {
//     if (!charMap[input[i][j]]) {
//       charMap[input[i][j]] = true;
//     } else if (charMap[input[i][j]] && input[i][j - 1] === input[i][j]) {
//       continue;
//     } else {
//       counter--;
//       break;
//     }
//   }
// }
// console.log(counter);

// 2nd solution(other)

// For submit

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// For local test
// const input = ['3', 'happy', 'new', 'year'];
// const input = ['4', 'aba', 'abab', 'abcabc', 'a'];
// const N = parseInt(input.shift());
// let counter = 0;

// function checkGroupWord(str) {
//   const checker = [];

//   for (let i = 0; i < str.length; i++) {
//     if (checker.indexOf(str[i]) === -1) {
//       checker.push(str[i]);
//     } else {
//       if (checker[checker.length - 1] !== str[i]) {
//         return;
//       }
//     }
//   }
//   counter++;
// }

// for (let i = 0; i < N; i++) {
//   checkGroupWord(input[i]);
// }

// console.log(counter);
