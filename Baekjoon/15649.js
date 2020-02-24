// N and M (1) Permutation

// For submit

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(nm => parseInt(nm));

// For local test
const input = [4, 2];
const N = input.shift();
const M = input.shift();

const visited = new Array(N);
let output = [];

function print() {
  console.log(output.join(' '));
}

function dfs(cnt) {
  if (cnt === M) {
    print();
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
