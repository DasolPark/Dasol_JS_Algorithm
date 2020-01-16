// ACM Hotel

// 1st Solution - Good

// For submit

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// For local test
const input = ['2', '6 12 10', '30 50 72'];
const T = parseInt(input.shift());

for (let i = 0; i < T; i++) {
  const HWN = input[i].split(' ');
  let H = parseInt(HWN.shift());
  HWN.shift();
  let N = parseInt(HWN.shift());
  let roomCnt = 1;

  while (N > H) {
    roomCnt++;
    N = N - H;
  }
  if (roomCnt < 10) {
    console.log(`${N}0${roomCnt}`);
  } else {
    console.log(`${N}${roomCnt}`);
  }
}

// 2nd Solution - Good

// For submit

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// For local test
// const input = ['2', '6 12 10', '30 50 72'];
// const T = Number(input.shift());

// for (let i = 0; i < T; i++) {
//   const HWN = input[i].split(' ');
//   let H = Number(HWN.shift());
//   HWN.shift();
//   let N = Number(HWN.shift());

//   const floor = N % H === 0 ? H : N % H;
//   const roomNum = Number.isInteger(N / H) ? N / H : Math.ceil(N / H);

//   if (roomNum < 10) {
//     console.log(`${floor}0${roomNum}`);
//   } else {
//     console.log(`${floor}${roomNum}`);
//   }
// }

// 3rd Solution(array) - Good

// For submit

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// For local test
// const input = ['2', '6 12 10', '30 50 172'];

// const T = Number(input.shift());
// for (let k = 0; k < T; k++) {
//   const arr = [];
//   const HWN = input[k].split(' ');
//   const H = Number(HWN[0]);
//   const W = Number(HWN[1]);
//   const N = Number(HWN[2]);

//   for (let i = 1; i <= W; i++) {
//     for (let j = 1; j <= H; j++) {
//       if (i < 10) {
//         arr.push(j + '0' + i);
//       } else {
//         arr.push(`${j}${i}`);
//       }
//     }
//   }
//   console.log(arr[N - 1]);
// }
