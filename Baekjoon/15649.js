// N and M (1) Permutation

// 1st Solution

// For submit

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(nm => parseInt(nm));

// For local test
// const input = [4, 2];
// const N = input.shift();
// const M = input.shift();

// const visited = new Array(N);
// let output = [];

// function print() {
//   console.log(output.join(' '));
// }

// function dfs(cnt) {
//   if (cnt === M) {
//     print();
//     return;
//   }

//   for (let i = 0; i < N; i++) {
//     if (visited[i] === true) continue;
//     visited[i] = true;
//     output.push(i + 1);
//     dfs(cnt + 1);
//     output.pop();
//     visited[i] = false;
//   }
// }

// dfs(0);

// 2nd Solution

// For submit

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(nm => parseInt(nm));

// For local test
const input = [4, 2];
const N = input.shift();
const M = input.shift();

const visited = new Array(N);
let output = [];
let result = '';

function dfs(cnt) {
  if (cnt === M) {
    result += `${output.join(' ')}\n`;
    return;
  }

  for (let i = 0; i < N; i++) {
    if (visited[i] === true) continue;
    visited[i] = true;
    output.push(i + 1);
    dfs(cnt + 1);
    output.pop();
    visited[i] = false;
  }
}

dfs(0);
console.log(result.trim());
