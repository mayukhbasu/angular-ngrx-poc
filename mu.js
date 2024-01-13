const factorial = memoize((n) => {
  //console.log(`Computing factorial for ${n}`);  // This will help us see if the function is computed or retrieved from cache
  if (n <= 1) return 1;
  return n * factorial(n - 1);
});

console.log(factorial(5));  // Computes and logs: Computing factorial for 5, 4, 3, 2, 1
console.log(factorial(5));  // Retrieves from cache, no computation logs
console.log(factorial(6)); 