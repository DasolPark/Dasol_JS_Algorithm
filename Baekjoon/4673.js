// Self Number

// 4th Solution

const n = 10000;
const isSelfNum = new Array(n + 1);
isSelfNum.fill(true);

function d(n) {
  const N = n.toString().split('');

  return n + N.reduce((acc, num) => (acc += +num), 0);
}

for (let i = 1; i <= n; i++) {
  isSelfNum[d(i)] = false;
}

for (let i = 1; i <= n; i++) {
  if (isSelfNum[i]) {
    console.log(i);
  }
}

// 3rd Solution

// function d(n) {
//   let temp = n;
//   let sum = temp;

//   while (temp > 0) {
//     sum += temp % 10;
//     temp = parseInt(temp / 10);
//   }

//   return sum;
// }

// const N = 10000;
// const selfNumCheckArr = new Array(N);
// selfNumCheckArr.fill(false);

// for (let i = 1; i <= N; i++) {
//   selfNumCheckArr[d(i)] = true;
//   if (!selfNumCheckArr[i]) {
//     console.log(i);
//   }
// }

// 1st solution

// const N = 10000;
// let arr = [];

// for (let i = 0; i <= N; i++) {
//   d(i);
// }

// function d(n) {
//   if (n < 10) {
//     arr[n + n] = 1;
//   } else if (n < 100) {
//     arr[n + parseInt(n / 10) + (n % 10)] = 1;
//   } else if (n < 1000) {
//     arr[n + parseInt(n / 100) + parseInt((n % 100) / 10) + (n % 10)] = 1;
//   } else if (n < 10000) {
//     arr[
//       n +
//         parseInt(n / 1000) +
//         parseInt((n % 1000) / 100) +
//         parseInt((n % 100) / 10) +
//         (n % 10)
//     ] = 1;
//   } else {
//     arr[
//       n +
//         parseInt(n / 10000) +
//         parseInt((n % 10000) / 1000) +
//         parseInt((n % 1000) / 100) +
//         parseInt((n % 100) / 10) +
//         (n % 10)
//     ] = 1;
//   }
// }

// for (let i = 1; i <= N; i++) {
//   if (!(arr[i] === 1)) {
//     console.log(i);
//   }
// }

// 2nd solution(string - array[index])

// const N = 10000;
// const arr = [];

// for (let i = 0; i <= N; i++) {
//   arr[i] = 0;
// }

// for (let i = 1; i <= N; i++) {
//   d(i);
// }

// function d(n) {
//   const str = n.toString();

//   if (n < 10) {
//     arr[n + n] = 1;
//   } else if (n < 100) {
//     arr[n + parseInt(str[0]) + parseInt(str[1])] = 1;
//   } else if (n < 1000) {
//     arr[n + parseInt(str[0]) + parseInt(str[1]) + parseInt(str[2])] = 1;
//   } else if (n < 10000) {
//     arr[
//       n +
//         parseInt(str[0]) +
//         parseInt(str[1]) +
//         parseInt(str[2]) +
//         parseInt(str[3])
//     ] = 1;
//   } else {
//     arr[
//       n +
//         parseInt(str[0]) +
//         parseInt(str[1]) +
//         parseInt(str[2]) +
//         parseInt(str[3]) +
//         parseInt(str[4])
//     ];
//   }
// }

// for (let i = 1; i <= N; i++) {
//   if (arr[i] === 0) {
//     console.log(i);
//   }
// }
