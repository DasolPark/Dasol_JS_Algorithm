// 2nd Solution(current - after)

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');

// For Local Test
const input = ['1', '2', '3', '4', '5', '6', '7', '8'];
// const input = ['8', '7', '6', '5', '4', '3', '2', '1'];
// const input = ['8', '1', '7', '2', '6', '3', '5', '4'];
let ascending = 0;
let descending = 0;

for (let i = 0; i < input.length - 1; i++) {
  if (input[i] - input[i + 1] === -1) {
    ascending++;
  } else if (input[i] - input[i + 1] === 1) {
    descending++;
  }
}

if (ascending === 7) {
  console.log('ascending');
} else if (descending === 7) {
  console.log('descending');
} else {
  console.log('mixed');
}

// 1st Solution(string)

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');

// For Local Test
// const input = ['1', '2', '3', '4', '5', '6', '7', '8'];
// const input = ['8', '7', '6', '5', '4', '3', '2', '1'];
// const input = ['8', '1', '7', '2', '6', '3', '5', '4'];
// const scale = parseInt(input.join(''));
// const ascending = 12345678;
// const descending = 87654321;

// if (scale === ascending) {
//   console.log('ascending');
// } else if (scale === descending) {
//   console.log('descending');
// } else {
//   console.log('mixed');
// }
