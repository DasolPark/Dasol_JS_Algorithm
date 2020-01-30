// Reduce with Math

const numArr = [20, 10, 35, 30, 7];
const min = numArr.reduce((a, b) => Math.min(a, b));
const max = numArr.reduce((a, b) => Math.max(a, b));

console.log(`${min} ${max}`);

// Just Math

const minMath = Math.min.apply(null, numArr);
const maxMath = Math.max.apply(null, numArr);

console.log(`${minMath} ${maxMath}`);
