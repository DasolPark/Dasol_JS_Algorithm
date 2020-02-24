// N and M (1)

// For submit

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(nm => parseInt(nm));

// For local test
const input = [4, 2];
const N = input.shift();
const M = input.shift();

const numArr = new Array(N);
const visited = new Array(N);
let output = [];

for (let i = 0; i <= N; i++) {
  numArr[i] = i + 1;
}

function print() {
  console.log(`${output.join(' ').trim()}`);
}

function dfs(cnt) {
  if (cnt === M) {
    print();
    return;
  }

  for (let i = 0; i < N; i++) {
    if (visited[i] === true) continue;
    visited[i] = true;
    output.push(numArr[i]);
    dfs(cnt + 1);
    output.pop();
    visited[i] = false;
  }
}

dfs(0);
