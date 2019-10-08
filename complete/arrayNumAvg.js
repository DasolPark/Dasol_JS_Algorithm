//정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.
//제한사항
//arr은 길이 1 이상, 100 이하인 배열입니다.
//arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.
// 입출력 예
// arr	return
// [1,2,3,4]	2.5
// [5,5]	5

// # 1st solution

// function solution(arr) {
//   var answer = 0;
//   var i = 0;
//   var total = 0;
//   var result = 0;

//   for (i = 0; i < arr.length; i++) {
//     total += arr[i];
//   }

//   answer = total / arr.length;
//   return answer;
// }

// # 2nd solution(Final)

// function solution(arr) {
//   var answer = 0;

//   for (i = 0; i < arr.length; i++) {
//     answer += arr[i];
//   }

//   return answer / arr.length;
// }

// # 3rd solution(with reduce())

function solution(arr) {
  return arr.reduce((acc, curVal) => (acc += curVal)) / arr.length;
}

console.log(solution([1, 2, 3, 4]));
