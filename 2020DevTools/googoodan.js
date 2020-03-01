for (let i = 2; i < 10; i++) {
  if (i === 6) {
    console.log('');
  }
  for (let j = 1; j < 10; j++) {
    if (j === 4) continue;
    console.log(`${i} * ${j} = ${i * j}`);
  }
}
