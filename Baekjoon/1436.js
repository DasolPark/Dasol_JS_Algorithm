// Film director showm

// For submit

// const fs = require('fs');
// const input = parseInt(fs.readFileSync('/dev/stdin').toString().trim());

// For local test
let input = 2;
let theNumberAtTheEnd = 665;

while (input > 0) {
  theNumberAtTheEnd++;

  if (theNumberAtTheEnd.toString().includes('666')) {
    input--;
  }
}

console.log(theNumberAtTheEnd);
