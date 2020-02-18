// Sort coordinates 2

// For submit

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// For local test
const input = ['5', '0 4', '1 2', '1 -1', '2 2', '3 3'];
const N = input.shift();
const coordsArr = [];

for (let i = 0; i < N; i++) {
  coordsArr.push(input[i].split(' ').map(strNum => parseInt(strNum)));
}

let results = '';
coordsArr
  .sort((a, b) => {
    if (a[1] !== b[1]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  })
  .forEach(coords => (results += `${coords[0]} ${coords[1]}\n`));

console.log(results);
