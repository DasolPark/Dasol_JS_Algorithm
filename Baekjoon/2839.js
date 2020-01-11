// Sugar Delivery

// 3rd Solution

// For submit

// const fs = require('fs');
// let SUGAR = Number(fs.readFileSync('/dev/stdin'));

let SUGAR = 11; // 18 4 6 9 11
const BIG = 5;
const SMALL = 3;

let bigMax = Math.floor(SUGAR / BIG);
while (bigMax >= 0) {
  let tempSugar = SUGAR - bigMax * BIG;
  if (tempSugar % SMALL === 0) {
    console.log(bigMax + tempSugar / SMALL);
    return;
  } else {
    bigMax--;
  }
}
console.log(-1);

// 1st Solution

// For submit

// const fs = require('fs');
// const SUGAR = parseInt(fs.readFileSync('/dev/stdin').toString().trim());

// For local test
// const SUGAR = 18; // 18 4 6 9 11
// const BIG = 5;
// const SMALL = 3;

// if (SUGAR >= SMALL) {
//   let bigMax = Math.floor(SUGAR / BIG);
//   if (bigMax <= 0) {
//     if (SUGAR % SMALL === 0) {
//       console.log(SUGAR / SMALL);
//       return;
//     } else {
//       console.log(-1);
//       return;
//     }
//   } else {
//     while (bigMax >= 0) {
//       let tempSugar = SUGAR - bigMax * BIG;
//       if (tempSugar % SMALL === 0) {
//         console.log(bigMax + tempSugar / SMALL);
//         return;
//       } else {
//         bigMax--;
//       }
//     }
//     console.log(-1);
//   }
// } else {
//   console.log(-1);
// }

// 2nd(other solution)

// For submit

// const fs = require('fs');
// let SUGAR = parseInt(fs.readFileSync('/dev/stdin').toString().trim());

// For local test
// let SUGAR = 9; // 18 4 6 9 11
// let bags = 0;

// while (true) {
//   if (SUGAR % 5 === 0) {
//     console.log(SUGAR / 5 + bags);
//     break;
//   } else if (SUGAR <= 0) {
//     console.log(-1);
//     break;
//   }
//   SUGAR = SUGAR - 3;
//   bags++;
// }
