// Hansoo(category - function)

// 1st Solution

// For submit

// const fs = require('fs');
// const N = parseInt(fs.readFileSync('/dev/stdin').toString().trim());

function hansoo(N) {
  const numArr = [];
  let hansoo, digitCount;
  let temp = 0;

  for (let i = 1; i <= N; i++) {
    if (i < 100) {
      hansoo = i;
    } else if (i < 1000) {
      digitCount = 0;
      temp = i;
      while (temp > 0) {
        numArr[digitCount] = temp % 10;
        temp = parseInt(temp / 10);
        digitCount++;
      }
      if (numArr[0] - numArr[1] === numArr[1] - numArr[2]) {
        hansoo++;
      }
    } else {
      break;
    }
  }

  return hansoo;
}

// For Test
console.log(hansoo(110));
console.log(hansoo(1));
console.log(hansoo(210));
console.log(hansoo(1000));

// For submit
// console.log(hansoo(N));

// Other Solution

// For submit
// const fs = require('fs');
// const N = parseInt(fs.readFileSync('/dev/stdin').toString().trim());

// For Test
// const N = 110;

// function findHansoo(N) {
//   if (N < 100) {
//     return true;
//   } else {
//     const numArr = N.toString()
//       .split('')
//       .map(num => {
//         return parseInt(num);
//       });
//     if (numArr[0] - numArr[1] === numArr[1] - numArr[2]) {
//       return true;
//     }
//   }

//   return false;
// }

// let hansoo = 0;
// for (let i = 1; i <= N; i++) {
//   if (findHansoo(i)) {
//     hansoo++;
//   }
// }

// console.log(hansoo);

// 2nd Solution

// For submit

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim();

// For local test
// const input = '1000';

// function hanCheck(num) {
//   num = parseInt(num);
//   let counter = 0;
//   for (let i = 1; i <= num; i++) {
//     if (i < 100) {
//       counter++;
//     } else if (i < 1000) {
//       let temp = i;
//       let numArr = [];
//       let index = 0;
//       while (temp > 0) {
//         numArr[index] = temp % 10;
//         temp = parseInt(temp / 10);
//         index++;
//       }
//       if (numArr[0] - numArr[1] === numArr[1] - numArr[2]) {
//         counter++;
//       }
//     }
//   }
//   console.log(counter);
// }

// hanCheck(input);

// 3rd Solution

// For submit

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim();

// For local test
// const input = '110';
// const N = parseInt(input);

// function hanCheck(N) {
//   let hansoo = 0;
//   for (let i = 1; i <= N; i++) {
//     if (i < 100) {
//       hansoo++;
//     } else {
//       const numArr = i
//         .toString()
//         .split('')
//         .map(num => parseInt(num));
//       if (numArr[0] - numArr[1] === numArr[1] - numArr[2]) {
//         hansoo++;
//       }
//     }
//   }
//   console.log(hansoo);
// }

// hanCheck(N);
