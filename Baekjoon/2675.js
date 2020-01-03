// Repeat String

// 2nd Solution(Understandable code)

// For submit

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// For local test
const input = ['2', '3 ABC', '5 /HTP'];
const T = parseInt(input[0]);

for (let i = 1; i <= T; i++) {
  const R = parseInt(input[i].split(' ').slice(0));
  const S = input[i]
    .split(' ')
    .slice(1)
    .toString();
  let P = '';

  for (let j = 0; j < S.length; j++) {
    for (let k = 0; k < R; k++) {
      P += S[j];
    }
  }
  console.log(P);
}

// 1st Solution

// For submit

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// For local test
// const input = ['2', '3 ABC', '5 /HTP'];
// const T = parseInt(input[0]);

// for (let i = 1; i <= T; i++) {
//   const testCase = input[i].split(' ');
//   const R = parseInt(testCase[0]);
//   let result = '';
//   for (let j = 0; j < testCase[1].length; j++) {
//     for (let k = 0; k < R; k++) {
//       result += testCase[1][j];
//     }
//   }
//   console.log(result);
// }
