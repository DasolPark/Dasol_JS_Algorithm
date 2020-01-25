// Escape from Rectangle

// For submit

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(num => parseInt(num));

// For local test
const input = [6, 2, 10, 3]; // x y w h
const x = input[0];
const y = input[1];
const w = input[2];
const h = input[3];
const counters = [x, y, w - x, h - y];

console.log(Math.min.apply(null, counters));
