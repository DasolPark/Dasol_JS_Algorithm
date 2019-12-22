// 3rd Solution (submitted)

// For Submit
// const input = require('fs')
//   .readFileSync('/dev/stdin')
//   .toString()
//   .split('\n');

// For local Test
const input = ['3', '10 20 30'];
const N = parseInt(input[0]);
const grades = input[1].split(' ');
const max = Math.max.apply(null, grades);
let sumNewGrades = 0;

for (var i = 0; i < grades.length; i++) {
  sumNewGrades += (grades[i] / max) * 100;
}

console.log(sumNewGrades / N);

// 2nd Solution (Wrong only in baekjoon)

// For local test

// const input = ['3', '10 20 30'];
// const N = parseInt(input[0]);
// const grades = input[1].split(' ').map(num => {
//   return (num = parseInt(num));
// });
// const newGrades = [];
// let max = 0;
// let sumNewGrades = 0;
// let result = 0;

// for (let i = 1; i < N; i++) {
//   if (grades[i] > max) {
//     max = grades[i];
//   }
// }

// for (let grade of grades) {
//   newGrades.push((grade / max) * 100);
// }

// for (let grade of newGrades) {
//   sumNewGrades += grade;
// }

// result = sumNewGrades / newGrades.length;

// console.log(result.toFixed(2));

// 1st Solution (Spread - ES2015) (Wrong only in baekjoon)

// For local test

// const input = ['3', '40 80 60'];
// const N = parseInt(input[0]);
// const grades = input[1].split(' ').map(num => (num = parseInt(num)));
// const max = Math.max(...grades);
// const newGrades = [];
// let result = 0;

// for (let grade of grades) {
//   newGrades.push((grade / max) * 100);
// }

// for (let grade of newGrades) {
//   result += grade;
// }

// console.log(result / grades.length);
