function rhombus(n) {
  const midpoint = Math.floor((2 * n - 1) / 2); // For #
  const turningPoint = Math.floor(n / 2); // For row
  let offset = 2;

  for (let row = 0; row < n; row++) {
    let level = '';
    if (row <= turningPoint) {
      for (let col = 0; col < 2 * n - 1; col++) {
        if (midpoint - row <= col && midpoint + row >= col) {
          level += '#';
        } else {
          level += ' ';
        }
      }
    } else {
      // 가장 긴 #을 찍고 넘어옴
      for (let col = 0; col < 2 * n - 1; col++) {
        if (midpoint - row + offset <= col && midpoint + row - offset >= col) {
          level += '#';
        } else {
          level += ' ';
        }
      }
      if (row === n - 1) {
        offset += 1;
      } else {
        offset += 2;
      }
    }
    console.log(level);
  }
}

// 1 3 5 7 9 7 5 3 1
// row: 0 1 2 3 4 5(3) 6(2) 7(1) 8(-1)
// midpoint: 4
// offset: 2 4 6 8 10

rhombus(3);
rhombus(5);
rhombus(7);
