// Sort numbers(Ascending order)

// For submit

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(num => parseInt(num));

// For local test
const input = [5, 5, 2, 3, 4, 1];
const N = input.shift();
const sorted = input.sort((a, b) => a - b);

for (let i = 0; i < N; i++) {
  console.log(sorted[i]);
}

// For submit

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(num => parseInt(num));

// For local test
// const input = [5, 5, 2, 3, 4, 1];
// input.shift();
// const sorted = input.sort((a, b) => a - b);

// for (let num of sorted) {
//   console.log(num);
// }
