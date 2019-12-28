// 1st Solution

// For submit
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// For local test
const input = [
  '5',
  '5 50 50 70 80 100',
  '7 100 95 90 80 70 60 50',
  '3 70 90 80',
  '3 70 90 81',
  '9 100 99 98 97 96 95 94 93 91'
];

const C = parseInt(input[0]);

for (let i = 1; i <= C; i++) {
  const NAndGradeArr = input[i].trim().split(' ');
  let totalGrade = 0;
  let avg = 0;
  let counter = 0;
  let proportion = 0;
  for (let j = 1; j <= parseInt(NAndGradeArr[0]); j++) {
    totalGrade += parseInt(NAndGradeArr[j]);
  }

  avg = totalGrade / parseInt(NAndGradeArr[0]);

  for (let k = 1; k <= parseInt(NAndGradeArr[0]); k++) {
    if (parseInt(NAndGradeArr[k]) > avg) {
      counter++;
    }
  }

  proportion = (counter / parseInt(NAndGradeArr[0])) * 100;
  console.log(proportion.toFixed(3) + '%');
}
// 비율 구하는 공식 : 비교량 / 기준량 * 100 (2 / 5 * 100)

// other solution (좀 특이해서 참고해보았다)

// var a = require('fs')
//     .readFileSync('/dev/stdin')
//     .toString()
//     .match(/[^\r\n]+/g)
//     .slice(1),
//   b = a.map(function(x) {
//     return x.split(' ');
//   }),
//   c = [],
//   e = [];
// for (var i = 0; i <= b.length - 1; i++) {
//   c.push(
//     b[i].reduce(function(pre, cur) {
//       return parseInt(pre) + parseInt(cur);
//     }) /
//       b[i][0] -
//       1
//   );

//   e.push(
//     b[i].slice(1).filter(function(x) {
//       return x > c[i];
//     })
//   );

//   console.log(((e[i].length / b[i][0]) * 100).toFixed(3) + '%');
// }
