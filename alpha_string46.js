// # other solutions

// function solution(s){
//   var regex = /^\d{6}$|^\d{4}$/;
//   return regex.test(s);
// }

// function solution(s) {
//   var result = false;

//   if ((s.length === 4 || s.length === 6) && !isNaN(s)) result = true;

//   return result;
// }

// function alpha_string46(s){
//   var result = false;
//   if((s.length == 4 || s.length == 6) && /^[0-9]+$/.test(s)) {
//     result = true;
//   }

//   return result;
// }

// # 1st solution(ds final)

function solution(s) {
  let result = false;

  // This would be better
  if ((s.length === 4 || s.length === 6) && !Number.isNaN(parseInt(s)))
    result = true;
  // if ((s.length === 4 || s.length === 6) && !isNaN(s))
  // result = true;

  return result;
}

console.log(solution('a234'));
console.log(solution('1234'));
