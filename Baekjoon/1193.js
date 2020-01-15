// Find Fraction

// 1st Solution

// For submit

// const fs = require('fs');
// const X = Number(fs.readFileSync('/dev/stdin').toString().trim());

// For local test
let X = 14;
let counter = 0;

while (X > 0) {
  counter++;
  X = X - counter;
}

if (counter % 2 === 0) {
  console.log(`${counter + X}/${1 + -X}`);
} else {
  console.log(`${1 + -X}/${counter + X}`);
}

// 2nd Solution

// For submit

// const fs = require('fs');
// let X = Number(fs.readFileSync('/dev/stdin').toString().trim());

// For local test
// let X = 11;
// let groupCounter = 0;
// let ascendingNumArr = [];
// let descendingNumArr = [];

// while (X > 0) {
//   groupCounter++;
//   X = X - groupCounter;
// }

// for (let i = 0; i < groupCounter; i++) {
//   ascendingNumArr.push(i + 1);
//   descendingNumArr.push(groupCounter - i);
// }

// if (groupCounter % 2 === 0) {
//   console.log(
//     `${ascendingNumArr[groupCounter - 1 + X]}/${
//       descendingNumArr[groupCounter - 1 + X]
//     }`
//   );
// } else {
//   console.log(
//     `${descendingNumArr[groupCounter - 1 + X]}/${
//       ascendingNumArr[groupCounter - 1 + X]
//     }
//     `
//   );
// }
