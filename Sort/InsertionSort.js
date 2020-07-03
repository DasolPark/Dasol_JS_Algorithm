// Insertion Sort

let arr = [0, 1, 5, 3, 2, 4];
let i, j;
let key;

for (i = 2; i <= 5; i++) {
  key = arr[i];
  j = i - 1;
  while (j > 0 && arr[j] > key) {
    arr[j + 1] = arr[j];
    j -= 1;
  }
  arr[j + 1] = key;
}

console.log(arr);