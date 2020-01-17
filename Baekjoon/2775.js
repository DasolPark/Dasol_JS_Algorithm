// I'll be the president of the women's association

// 2nd Solution - Good

// For submit

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(num => Number(num));

// For local test
const input = [2, 1, 3, 2, 3];
const T = input.shift();

for (let i = 0; i < T; i++) {
  const a = input.shift();
  const b = input.shift();
  const apartment = [];

  for (let i = 0; i <= a; i++) {
    apartment.push([1]);
    for (let j = 1; j < b; j++) {
      if (i === 0) {
        apartment[i].push(j + 1);
      } else {
        apartment[i].push(apartment[i][j - 1] + apartment[i - 1][j]);
      }
    }
  }

  const floor = a;
  const room = b - 1;
  console.log(apartment[floor][room]);
}

// 1st Solution

// For submit

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(num => Number(num));

// For local test
// const input = [2, 1, 3, 2, 3];
// const T = input.shift();

// for (let i = 0; i < T; i++) {
//   const a = input.shift();
//   const b = input.shift();
//   const arr = [[1]];

//   for (let i = 2; i <= b; i++) {
//     arr[0].push(i);
//   }

//   for (let i = 1; i <= a; i++) {
//     arr.push([1]);
//     for (let j = 1; j < b; j++) {
//       arr[i].push(arr[i - 1][j] + arr[i][j - 1]);
//     }
//   }

//   console.log(arr[a][b - 1]);
// }
