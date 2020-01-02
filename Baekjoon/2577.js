// 1st Solution(for...of, map)

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

// For Local Test
const input = ['150', '266', '427'];
const result = input[0] * input[1] * input[2];
const charMap = {};

for (let num of result.toString()) {
  charMap[num] = charMap[num] ? charMap[num] + 1 : 1;
}

for (let i = 0; i < 10; i++) {
  if (charMap[i]) {
    console.log(charMap[i]);
  } else {
    console.log(0);
  }
}

// *************************************************************************************
// Object의 key로 string(숫자 string)을 지정하면, key에 number를 넣어도 값을 불러올 수 있다.
// *************************************************************************************

// 2nd Solution(reduce, nested loop)

// For submit

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// For local test
// const input = ['150', '266', '427'];
// const multiplyAll = input.reduce((acc, num) => acc * num).toString();

// for (let i = 0; i < 10; i++) {
//   let counter = 0;
//   for (let j = 0; j < multiplyAll.length; j++) {
//     if (i === parseInt(multiplyAll[j])) {
//       counter++;
//     }
//   }
//   console.log(counter);
// }
