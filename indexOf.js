// Let's make indexOf by myself

const a = 'abcde';
const b = 'c';

const indexOf = (a, b) => {
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b) {
      return i;
    }
  }
  return -1;
};

console.log(indexOf(a, b));
