// 1st Solution (submitted)

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// For local test

const input = [
  '5',
  'OOXXOXXOOO',
  'OOXXOOXXOO',
  'OXOXOXOXOXOXOX',
  'OOOOOOOOOO',
  'OOOOXOOOOXOOOOX'
];

// 2nd Solution

const N = parseInt(input[0]);

for (let i = 1; i <= N; i++) {
  let counter = 1;
  let eachSum = 0;
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === 'O') {
      eachSum += counter;
      counter++;
    } else {
      counter = 1;
    }
  }
  console.log(eachSum);
}

// 1st Solution

// const N = parseInt(input[0]);
// const result = [];
// let idx = 0;

// for (let i = 1; i <= N; i++) {
//   let counter = 0;
//   for (let j = 0; j < input[i].length; j++) {
//     if (input[i][j] === 'O') {
//       counter++;
//       result.push(counter);
//     } else {
//       counter = 0;
//       result.push(counter);
//     }
//   }
// }

// for (let i = 1; i <= N; i++) {
//   let eachSum = 0;
//   for (let j = 0; j < input[i].length; j++) {
//     eachSum += result[idx];
//     idx++;
//   }
//   console.log(eachSum);
// }

// other solution

// const N = parseInt(input[0]);

// for (let i = 0; i < N; i++) {
//   let eachO = String(input[i + 1]).split('X');
//   let sum = 0;
//   for (let j = 0; j < eachO.length; j++) {
//     for (let k = 1; k <= String(eachO[j]).length; k++) {
//       sum += k;
//     }
//   }
//   console.log(sum);
// }
