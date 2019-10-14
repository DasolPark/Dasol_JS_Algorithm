// 핸드폰 번호 가리기
// 문제 설명
// 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
// 전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.
// 제한 조건
// s는 길이 4 이상, 20이하인 문자열입니다.
// 입출력 예
// phone_number	return
// 01033334444	*******4444
// 027778888	*****8888

// # 1st solution(ds)

// function solution(phone_number) {
//   const result = [];
//   for (var i = 0; i < phone_number.length; i++) {
//     result[i] = i < phone_number.length - 4 ? "*" : phone_number[i];
//   }
//   return result.reduce((num, curVal) => {
//     return num + curVal;
//   });
// }

// other solution

function solution(s) {
  return s.replace(/\d(?=\d{4})/g, "*");
}

console.log(solution("01094546697"));

// Regular Expressions

// \d
// Matches a digit character. Equivalent to [0-9].
// For example, /\d/ or /[0-9]/ matches '2' in "B2 is the suite number."

// {n}
// Matches exactly n occurrences of the preceding expression. N must be a positive integer.
// For example, /a{2}/ doesn't match the 'a' in "candy," but it does match all of the a's in "caandy," and the first two a's in "caaandy."

// x(?=y)
// Matches 'x' only if 'x' is followed by 'y'. This is called a lookahead.
// For example, /Jack(?=Sprat)/ matches 'Jack' only if it is followed by 'Sprat'. /Jack(?=Sprat|Frost)/ matches 'Jack' only if it is followed by 'Sprat' or 'Frost'. However, neither 'Sprat' nor 'Frost' is part of the match results.
