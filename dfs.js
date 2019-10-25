// DFS 인접 행렬
let maps = [
  [0, 1, 1, 1, 0],
  [1, 0, 0, 0, 0],
  [1, 0, 0, 1, 1],
  [1, 0, 1, 0, 0],
  [0, 0, 1, 0, 0]
];

// 방문 여부
let isVisit = [0, 0, 0, 0, 0];

function dfs(v) {
  //
  isVisit[v] = 1;
  console.log(v); // 0 1 2 3 4
  for (let i = 0; i < 5; i++) {
    // 노드가 이어져있고, 방문을 하지 않았으면 dfs(i); 재귀가 핵심
    if (maps[v][i] === 1 && isVisit[i] === 0) dfs(i);
  }
}

console.log(dfs(0));
