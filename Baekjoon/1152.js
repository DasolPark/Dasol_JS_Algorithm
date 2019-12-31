// For submit

// const fs = require('fs');
// const input = fs
//   .readFileSync('/dev/stdin')
//   .toString()
//   .trim()
//   .split(' ');

// For Local Test

const example = 'The Curious Case of Benjamin Button\n';
// const example = ' ';
const input = example.trim().split(' ');

if (input[0] === '') {
  console.log(0);
} else {
  console.log(input.length);
}
