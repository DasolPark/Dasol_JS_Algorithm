// Alarm

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');
// const hour = parseInt(input[0]);
// const min = parseInt(input[1]);

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
