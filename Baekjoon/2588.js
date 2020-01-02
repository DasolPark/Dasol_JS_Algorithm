// Multiplication Q.2588

const a = 472;
const b = 385;

// 1st Solution

// var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString().split('\n');
// var a = parseInt(input[0]);
// var b = parseInt(input[1]);

// var first = a * (b % 10);
// var second = a * Math.floor((b / 10) % 10);
// var third = a * Math.floor(b / 10 / 10);

// console.log(first);
// console.log(second);
// console.log(third);
// console.log(a * b);

// 2st Solution

// var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString().split('\n');
// var a = parseInt(input[0]);
// var b = parseInt(input[1]);

const bStr = b.toString();

const first = parseInt(bStr[bStr.length - 1]) * a;
const second = parseInt(bStr[bStr.length - 2]) * a;
const third = parseInt(bStr[bStr.length - 3]) * a;

console.log(first);
console.log(second);
console.log(third);
console.log(a * b);

// 3rd Solution (eachDigitOfNumbers)

// for submit

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// function eachDigitOfNumbers(num) {
//   let i = 0;
//   let temp = num;
//   let arr = [];

//   while (temp > 0) {
//     arr[i] = temp % 10;
//     temp = parseInt(temp / 10);
//     i++;
//   }

//   return arr;
// }

// const input = ['472', '385']; // for local test
// const offset = [1, 10, 100];
// let total = 0;

// const eachDigit = eachDigitOfNumbers(parseInt(input[1]));

// for (let i = 0; i < input[0].length; i++) {
//   let value = eachDigit[i] * input[0];
//   console.log(value);
//   total += value * offset[i];
// }

// console.log(total);

// 4th Solution

// for submit

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// const input = ['472', '385']; // for local test
// const offset = [100, 10, 1];
// const eachResult = [];
// let total = 0;

// for (let i = input[1].length - 1; i >= 0; i--) {
//   eachResult.push(parseInt(input[0]) * parseInt(input[1][i]));
//   console.log(eachResult[eachResult.length - 1]);
//   total += eachResult.pop() * offset.pop();
// }

// console.log(total);

// 5th Solution

// for submit

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// const input = ['472', '385']; // for local test
// const a = parseInt(input[0]);
// const b = input[1];

// for (let i = 0; i < b.length; i++) {
//   console.log(a * parseInt(b[b.length - 1 - i]));
// }

// console.log(a * parseInt(b));

// 결론(복습)
// index를 이용하든지, 각 자릿수를 나눠서 이용하면 된다. 그리고 total은 필요없다.
// 결과값은 그냥 input[0]과 input[1]를 출력해주면 된다(유연한 사고하기)
