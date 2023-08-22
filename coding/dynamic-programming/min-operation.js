const minimumOperation = (num) => {
  const result = new Array(num + 1).fill(0);
  for(let i = 1; i <= num; i++) {
    result[i] = result[i - 1] + 1;
    if(i % 2 === 0) {
      result[i] = Math.min(result[i], result[i / 2] + 1);
    }
  }
  return result[num];
}

console.log(minimumOperation(3))