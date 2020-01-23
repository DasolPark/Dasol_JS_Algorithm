// 베르트랑 공준(Bertrand Gongjoon)

// 2nd Solution

// For submit

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(num => parseInt(num));

// For local test
const input = [1, 10, 13, 100, 1000, 10000, 100000, 0];
for (let num of input) {
  if (num === 0) {
    break;
  }

  const n = num + 1;
  const m = 2 * num;
  const isPrimeNumArr = new Array(m + 1);
  let counter = 0;

  isPrimeNumArr.fill(true);
  isPrimeNumArr[0] = isPrimeNumArr[1] = false;

  for (let i = 2; i <= m; i++) {
    if (Math.pow(i, 2) > 1000000) {
      break;
    } else {
      for (let square = Math.pow(i, 2); square <= m; square += i) {
        isPrimeNumArr[square] = false;
      }
    }
  }

  for (let i = n; i <= m; i++) {
    if (isPrimeNumArr[i]) {
      counter++;
    }
  }
  console.log(counter);
}

// 1st Solution

// For submit

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(num => parseInt(num));

// For local test
// const input = [1, 10, 13, 100, 1000, 10000, 100000, 0];

// while (true) {
//   const n = input.shift();
//   if (n === 0) {
//     break;
//   }
//   let counter = 0;
//   const m = 2 * n;
//   const isPrimeArr = new Array(m + 1);

//   isPrimeArr.fill(true);
//   for (let i = 0; i <= n; i++) {
//     isPrimeArr[i] = false;
//   }

//   for (let i = 2; i < m + 1; i++) {
//     if (parseInt(Math.pow(i, 2) > m)) {
//       break;
//     } else {
//       for (let square = parseInt(Math.pow(i, 2)); square < m + 1; square += i) {
//         isPrimeArr[square] = false;
//       }
//     }
//   }

//   for (let i = 2; i < m + 1; i++) {
//     if (isPrimeArr[i]) {
//       counter++;
//     }
//   }
//   console.log(counter);
// }
