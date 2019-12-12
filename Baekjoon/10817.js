// Three Numbers (The second biggest Number);

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');
// const a = parseInt(input[0]);
// const b = parseInt(input[1]);
// const c = parseInt(input[2]);

const a = 10;
const b = 20;
const c = 30;

let max = 0;

max = Math.max(a, b, c);

if (max === a) {
  console.log(Math.max(b, c));
} else if (max === b) {
  console.log(Math.max(a, c));
} else {
  console.log(Math.max(a, b));
}
