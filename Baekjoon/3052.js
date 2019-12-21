// 2nd Solution

// For submit

// const fs = require('fs');
// const input = fs
//   .readFileSync('/dev/stdin')
//   .toString()
//   .trim()
//   .split('\n');

// For local test

const input = ['39', '40', '41', '42', '43', '44', '82', '83', '84', '85'];
const Rest = [];
let counter = 0;

for (let i = 0; i < input.length; i++) {
  const RestNum = parseInt(input[i]) % 42;
  if (!Rest[RestNum]) {
    Rest[RestNum] = 1;
    counter++;
  }
}

console.log(counter);

// 1st Solution ( Wrong but this is correct in local)
// 아마 Object.keys가 적용되지 않는 듯? 인줄 알았으나 값을 가져오는 과정에 trim()을 추가하니 해결 되었다.

// For submit

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

// For local test

// const input = ['39', '40', '41', '42', '43', '44', '82', '83', '84', '85'];
// const theRestMap = {};

// for (let num of input) {
//   const theRest = num % 42;
//   theRestMap[theRest] = theRestMap[theRest] ? theRestMap[theRest] + 1 : 1;
// }

// console.log(Object.keys(theRestMap).length);
