const summingSquares = (num = 0, memo = {}) => {
  if(num in memo) return memo[num];
  if(num === 0) return 0;
  let minSquares = Infinity;
  for(let i = 1; i <= Math.sqrt(num); i++) {
    let square = i * i;
    let numSquares = 1 + summingSquares(num - square, memo);
    minSquares = Math.min(minSquares, numSquares);
  }
  memo[num] = minSquares;
  return minSquares;
}

console.log(summingSquares(6));