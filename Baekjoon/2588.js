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
