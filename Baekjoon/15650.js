// N and M (2) Combination

// For submit

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(nm => parseInt(nm));

// For local test
// const input = [3, 1];
// const N = input.shift();
// const M = input.shift();
// const visited = new Array(N);
// const output = [];

// function dfs(idx, cnt) {
//   if (cnt === M) {
//     console.log(output.join(' '));
//     return;
//   }

//   for (let i = idx; i < N; i++) {
//     if (visited[i] === true) continue;
//     visited[i] = true;
//     output.push(i + 1);
//     dfs(i, cnt + 1);
//     output.pop();
//     visited[i] = false;
//   }
// }

// dfs(0, 0);

// 2nd Solution

// For submit

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(nm => parseInt(nm));

// For local test
const input = [3, 1];
const N = input.shift();
const M = input.shift();
const visited = new Array(N);
const output = [];
let result = '';

function dfs(idx, cnt) {
  if (cnt === M) {
    result += `${output.join(' ')}\n`;
    return;
  }

  for (let i = idx; i < N; i++) {
    if (visited[i] === true) continue;
    visited[i] = true;
    output.push(i + 1);
    dfs(i, cnt + 1);
    output.pop();
    visited[i] = false;
  }
}

dfs(0, 0);
console.log(result);
