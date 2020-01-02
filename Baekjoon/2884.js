// Alarm

// For submit

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');
// const hour = parseInt(input[0]);
// const min = parseInt(input[1]);

// For local test
const hour = 10;
const min = 10;

if (min < 45) {
  if (hour === 0) {
    console.log(hour - 1 + 24);
  } else {
    console.log(hour - 1);
  }
  console.log(min - 45 + 60);
} else {
  console.log(hour);
  console.log(min - 45);
}

// input으로 값 가져올 때, parseInt 매우 중요(이것 때문에 틀린 줄 알았음)

// 2nd Solution

// for submit

// const fs = require('fs');
// const hhmm = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

// const hhmm = ['10', '10']; // for local test
// let hour = parseInt(hhmm[0]);
// let minute = parseInt(hhmm[1]);

// if (minute < 45) {
//   if (hour === 0) {
//     hour = 23;
//     minute = 60 + (minute - 45);
//   } else {
//     hour = hour - 1;
//     minute = 60 + (minute - 45);
//   }
//   console.log(`${hour} ${minute}`);
// } else {
//   console.log(`${hour} ${minute - 45}`);
// }
