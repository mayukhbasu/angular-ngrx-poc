const fib = (n , memo = {}) => {
    if(n in memo) return fib(n);
    if(n === 0) return 0;
    if(n === 1) return 1;
    memo[n] = fib(n - 1,memo) + fib(n - 2, memo);
    return memo[n];
}

console.log(fib(5));