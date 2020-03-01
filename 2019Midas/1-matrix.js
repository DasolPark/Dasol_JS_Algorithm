function solution(matrix, n) {
  const rotated = [];

  for (let i = 0; i < matrix.length; i++) {
    rotated.push([]);
  }

  if (n % 4 === 1) {
    // 90 deg
    for (let row = 0; row < matrix.length; row++) {
      for (let column = 0; column < matrix.length; column++) {
        rotated[column][matrix.length - 1 - row] = matrix[row][column];
      }
    }
  } else if (n % 4 === 2) {
    // 180 deg
    for (let row = 0; row < matrix.length; row++) {
      for (let column = 0; column < matrix.length; column++) {
        rotated[matrix.length - 1 - row][matrix.length - 1 - column] =
          matrix[row][column];
      }
    }
  } else if (n % 4 === 3) {
    // 270 deg
    for (let row = 0; row < matrix.length; row++) {
      for (let column = 0; column < matrix.length; column++) {
        rotated[matrix.length - 1 - column][row] = matrix[row][column];
      }
    }
  } else {
    // 360 deg
    return matrix;
  }

  return rotated;
}

console.log(
  solution(
    [
      [1, 2],
      [3, 4]
    ],
    1
  )
);
console.log(
  solution(
    [
      [1, 2],
      [3, 4]
    ],
    2
  )
);
console.log(
  solution(
    [
      [1, 2],
      [3, 4]
    ],
    3
  )
);
