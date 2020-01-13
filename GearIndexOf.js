// Question
// a = "aaaabcacabc";
// b = "abc";
// b is at 3 in a and 8
// a.indexOf(b)
// Can you write a function to do the same as indexOf in javascript?
// basically look for a string in another string

// Answered
// const indexOf = (a, b) => {
//   for (var i = 0; i < a.length; i++) {
//     if (a[i] === b) {
//       return i;
//     }
//   }
//   return -1;
// };

// 1st Solution

const a = 'aaaabcacabc'; //3,8
const b = 'abc';
const indexOf = [];

for (let i = 0; i < a.length - (b.length - 1); i++) {
  if (a[i] === b[0] && a[i + 1] === b[1] && a[i + 2] === b[2]) {
    indexOf.push(i);
  }
}

console.log(indexOf);

// 2nd Solution

// let a = 'aaaabcacabc'; //3,8
// let b = 'abc';

// let inputStr = a;
// let regExp = /abc/;
// let searched = 0;
// const indexOf = [];

// while (searched !== -1) {
//   searched = inputStr.search(regExp);
//   indexOf.push(searched);
//   inputStr = inputStr.replace(regExp, 'ABC');
// }

// indexOf.pop();
// console.log(...indexOf);
