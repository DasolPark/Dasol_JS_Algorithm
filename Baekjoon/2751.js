// Sort Numbers 2

// 1st Solution ( sort() )

// For submit

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// For local test
// const input = [5, 5, 4, 3, 2, 1, -1, -3];
// const N = input.shift();

// let results = '';
// input.sort((a, b) => a - b).forEach(num => (results += `${num}\n`));

// console.log(results);

// 2nd Solution ( Quick Sort )

// For submit

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(num => parseInt(num, 10));

// For local test
const input = [10, 5, 2, 3, 1, 4, 2, 3, 5, 1, 7];
const N = input.shift();

const result = quickSortStarter(input).join('\n');

function quickSortStarter(arr) {
  if (!arr.length) {
    return arr;
  }
  return quickSort(arr, 0, arr.length - 1);
}

function quickSort(array, l, r) {
  const pivot = array[Math.floor((l + r) / 2)];
  let left = l;
  let right = r;

  while (left <= right) {
    while (array[left] < pivot) left++;
    while (array[right] > pivot) right--;

    if (left <= right) {
      const temp = array[left];
      array[left] = array[right];
      array[right] = temp;
      left++;
      right--;
    }
  }

  if (l < right) quickSort(array, l, right);
  if (r > left) quickSort(array, left, r);

  return array;
}

console.log(result);
