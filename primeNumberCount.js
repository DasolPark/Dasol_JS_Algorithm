// 소수 찾기
// 문제 설명
// 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

// 소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
// (1은 소수가 아닙니다.)

// 제한 조건
// n은 2이상 1000000이하의 자연수입니다.
// 입출력 예
// n	result
// 10	4
// 5	3
// 입출력 예 설명
// 입출력 예 #1
// 1부터 10 사이의 소수는 [2,3,5,7] 4개가 존재하므로 4를 반환

// 입출력 예 #2
// 1부터 5 사이의 소수는 [2,3,5] 3개가 존재하므로 3를 반환

//# 1st solution(ds)

function solution(n) {
  let flag = true;
  let count = 1;

  for (let i = 3; i <= n; i++) {
    flag = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        flag = false;
      }
    }
    if (flag) count++;
  }
  return count;
}

//# 2nd solution(에라토스테네스의 체) 방법으로 풀어보자

console.log(solution(5));
// 5는 (2 3 5) 총 3개
