// Sort words

// 1st Solution

// For submit

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// For local test
const input = [
  '13',
  'but',
  'i',
  'wont',
  'hesitate',
  'no',
  'more',
  'no',
  'more',
  'it',
  'cannot',
  'wait',
  'im',
  'yours'
];
const N = input.shift();
const sorted = [];
const lengthArr = input.map(str => str.length);
const max = Math.max.apply(null, lengthArr);
const min = Math.min.apply(null, lengthArr);

for (let i = min; i <= max; i++) {
  const group = [];
  for (let j = 0; j < N; j++) {
    if (input[j].length === i) {
      if (group.indexOf(input[j]) === -1) group.push(input[j]);
    }
  }
  if (group.length > 1) {
    sorted.push(...group.sort());
  } else {
    sorted.push(...group);
  }
}

console.log(sorted.join('\n'));

// 2nd Solution

// For submit

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// For local test
// const input = [
//   '13',
//   'but',
//   'i',
//   'wont',
//   'hesitate',
//   'no',
//   'more',
//   'no',
//   'more',
//   'it',
//   'cannot',
//   'wait',
//   'im',
//   'yours'
// ];
// const N = input.shift();
// const sorted = input.sort((a, b) => a.length - b.length || a.localeCompare(b));
// const uniqueValues = new Set(sorted);
// console.log(Array.from(uniqueValues).join('\n'));
