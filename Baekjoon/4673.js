// 1st solution

const N = 10000;
let arr = [];

for (let i = 0; i <= N; i++) {
  d(i);
}

function d(n) {
  if (n < 10) {
    arr[n + n] = 1;
  } else if (n < 100) {
    arr[n + parseInt(n / 10) + (n % 10)] = 1;
  } else if (n < 1000) {
    arr[n + parseInt(n / 100) + parseInt((n % 100) / 10) + (n % 10)] = 1;
  } else if (n < 10000) {
    arr[
      n +
        parseInt(n / 1000) +
        parseInt((n % 1000) / 100) +
        parseInt((n % 100) / 10) +
        (n % 10)
    ] = 1;
  } else {
    arr[
      n +
        parseInt(n / 10000) +
        parseInt((n % 10000) / 1000) +
        parseInt((n % 1000) / 100) +
        parseInt((n % 100) / 10) +
        (n % 10)
    ] = 1;
  }
}

for (let i = 1; i <= N; i++) {
  if (!(arr[i] === 1)) {
    console.log(i);
  }
}

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

// other solution 1
// let check = new Array(10001);
// let result = '';

// Array.prototype.sum = function() {
//   return this.reduce((p, c) => {
//     return parseInt(p) + parseInt(c);
//   });
// };

// function d(n) {
//   n = new String(n); // n = n.toString();
//   return parseInt(n) + parseInt(n.split('').sum());
// }

// for (let i = 1; i <= 10000; i++) {
//   check[d(i)] = true;
// }

// for (let i = 1; i <= 10000; i++) {
//   if (check[i] === undefined) {
//     result += new String(i) + '\n';
//     // console.log(i);
//   }
// }

// console.log(result.slice(0, result.length - 1));

// other solution 2

// var arr = new Array(10001);
// //arr.fill(false);

// for (var i = 1; i <= 10000; i++) {
//   var tmp = i; // 123
//   var sum = tmp; // 123
//   while (tmp > 0) {
//     sum += tmp % 10; // 3+2+1
//     tmp = parseInt(tmp / 10); // 12, 1, 0
//   }
//   arr[sum] = true;
// }

// for (var j = 1; j <= 10000; j++) {
//   if (!arr[j]) {
//     console.log(j);
//   }
// }
