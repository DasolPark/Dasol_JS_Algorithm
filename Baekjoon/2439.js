// Input Star(right to left) Q.2439

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin');
// const T = parseInt(input) - 1;

const T = 5 - 1;

for (let row = 0; row <= T; row++) {
  stair = '';
  for (let col = T; col >= 0; col--) {
    if (row >= col) {
      stair += '*';
    } else {
      stair += ' ';
    }
  }
  console.log(stair);
}

// row: 0->4
// col: 4->0
// Star Coordinate:
//                         (0,4)
//                   (1,3),(1,4)
//             (2,2),(2,3),(2,4)
//       (3,1),(3,2),(3,3),(3,4)
// (4,0),(4,1),(4,2),(4,3),(4,4)
