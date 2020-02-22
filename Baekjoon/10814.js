// sorting by age

// For submit

// 1st Solution ( new Array() )

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// For local test
const input = ['3', '21 Junkyu', '21 Dohyun', '20 Sunyoung'];
const N = input.shift();
const listFocusAge = new Array(201);
input.map(list => {
  const splited = list.split(' ');
  const age = parseInt(splited[0]);
  if (listFocusAge[age] === undefined) listFocusAge[age] = [];
  listFocusAge[age].push([age, splited[1]]);
});

let results = '';
listFocusAge.map(list => {
  if (list) {
    for (let i = 0; i < list.length; i++) {
      results += `${list[i][0]} ${list[i][1]}\n`;
    }
  }
});
console.log(results);

// 2nd Solution

// For submit

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// For local test
// const input = ['3', '21 Junkyu', '21 Dohyun', '20 Sunyoung'];
// const N = input.shift();
// const indexArr = [];
// const splited = input.map(item => item.split(' '));
// for (let i = 0; i < input.length; i++) {
//   indexArr.push([parseInt(splited[i][0]), splited[i][1], i]);
// }

// let results = '';
// indexArr
//   .sort((a, b) => a[0] - b[0] || a[2] - b[2])
//   .forEach(list => (results += `${list[0]} ${list[1]}\n`));

// console.log(results);
