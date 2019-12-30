// 아래처럼 연산을 이용해 구하는 것도 가능하지만,
// toString()을 이용해 array의 index로 접근하는 것도 가능하다.

// 10의 자리 숫자를 받았을 때, 각 자릿수를 구하는 공식

const A = 21;
const AOne = A % 10;
const ATwo = parseInt(A / 10);

console.log(AOne);
console.log(ATwo + '\n');

// 100의 자리 숫자를 받았을 때, 각 자릿수를 구하는 공식

const B = 321;
const BOne = B % 10;
const BTwo = parseInt((B % 100) / 10);
const BThree = parseInt(B / 100);

console.log(BOne);
console.log(BTwo);
console.log(BThree + '\n');

// 1000의 자리 숫자를 받았을 때, 각 자릿수를 구하는 공식

const C = 4321;
const COne = C % 10;
const CTwo = parseInt((C % 100) / 10);
const CThree = parseInt((C % 1000) / 100);
const CFour = parseInt(C / 1000);

console.log(COne);
console.log(CTwo);
console.log(CThree);
console.log(CFour + '\n');

// 10000의 자리 숫자를 받았을 때, 각 자릿수를 구하는 공식

const D = 54321;

const DOne = D % 10;
const DTwo = parseInt((D % 100) / 10);
const DThree = parseInt((D % 1000) / 100);
const DFour = parseInt((D % 10000) / 1000);
const DFive = parseInt(D / 10000);

console.log(DOne);
console.log(DTwo);
console.log(DThree);
console.log(DFour);
console.log(DFive + '\n');

// Using while

function EachDigitOfNumbers(n) {
  const arr = [];
  let digitCount = 0;
  let number = n;

  while (number > 0) {
    arr[digitCount] = number % 10;
    number = parseInt(number / 10);
    digitCount++;
  }

  return arr;
}

// 54321
// arr[0] = 1
// 5432.1
// arr[1] = 2
// 543.2
// arr[2] = 3
// 54.3
// arr[3] = 4
// 5.4
// arr[4] = 5

console.log(EachDigitOfNumbers(54321));
