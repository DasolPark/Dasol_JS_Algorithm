// 베르트랑 공준(Bertrand Gongjoon)

// For submit

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(num => parseInt(num));

// For local test
const input = [1, 10, 13, 100, 1000, 10000, 100000, 0];

while (true) {
  const n = input.shift();
  if (n === 0) {
    break;
  }
  let counter = 0;
  const m = 2 * n;
  const isPrimeArr = new Array(m + 1);

  isPrimeArr.fill(true);
  for (let i = 0; i <= n; i++) {
    isPrimeArr[i] = false;
  }

  for (let i = 2; i < m + 1; i++) {
    if (parseInt(Math.pow(i, 2) > m)) {
      break;
    } else {
      for (let square = parseInt(Math.pow(i, 2)); square < m + 1; square += i) {
        isPrimeArr[square] = false;
      }
    }
  }

  for (let i = 2; i < m + 1; i++) {
    if (isPrimeArr[i]) {
      counter++;
    }
  }
  console.log(counter);
}
