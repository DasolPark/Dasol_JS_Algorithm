function solution(n) {
  let flag = true;
  let count = 1;

  for (let i = 3; i <= n; i++) {
    flag = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        flag = false;
        break;
      }
    }
    if (flag) count++;
  }
  return count;
}

console.log(solution(5));
// 5는 (2 3 5) 총 3개
