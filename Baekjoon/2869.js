// The snail wants to go up.

// 1st Solution - Good

// For submit

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(num => parseInt(num));

// For local test
const input = [2, 1, 5]; // 4
// const input = [10, 3, 54]; // 정답은 8 인데 7.285714가 나온다(Math.ceil()없을 때)
// const input = [5, 1, 11]; // 정답은 3인데 2.5가 나온다(Math.ceil()없을 때)
const A = input.shift();
const B = input.shift();
const V = input.shift();

console.log(Math.ceil((V - B) / (A - B)));

// 2nd Solution - Good

// For submit

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(num => parseInt(num));

// For local test
// const input = [2, 1, 5]; // 4
// const input = [10, 3, 54]; //8
// const A = input.shift();
// const B = input.shift();
// const V = input.shift();

// console.log(Math.ceil((V - A) / (A - B)) + 1);
