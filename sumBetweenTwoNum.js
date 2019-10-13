// 두 정수 사이의 합
// 문제 설명
// 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
// 예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

// 제한 조건
// a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
// a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.
// a와 b의 대소관계는 정해져있지 않습니다.
// 입출력 예
// a	b	return
// 3	5	12
// 3	3	3
// 5	3	12

// # 1st solution

// function solution(a, b) {
//   let first,
//     second = 0;
//   let result = 0;
//   if (a >= b) {
//     first = b;
//     second = a;
//   } else {
//     first = a;
//     second = b;
//   }
//   for (var i = first; i <= second; i++) {
//     result += i;
//   }
//   return result;
// }

// # other solution

function adder(a, b) {
  return ((a + b) * (Math.abs(b - a) + 1)) / 2;
}
// ((첫 번째 수 + 맨 끝 수) * 총 더할 수의 개수)/2
// 3+5=8, 5-3+1=3, 8*3=24, 24/2=12;
// 3+3=6, 3-3+1=1, 6*1=6, 6/2=3;
// 5+3=8, 3-5+1=3, 8*3=24, 24/2=12;

// other solution

// function adder(a, b, s = 0){
//   for (var i = Math.min(a, b); i <= Math.max(a, b); i++) s += i;
//   return s;
// }

console.log(solution(3, 5));
console.log(solution(3, 3));
console.log(solution(5, 3));
