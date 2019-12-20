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
