const knapSack = (targetWeight, weights = [], profits = [], n) => {
  const dp = new Array(targetWeight + 1).fill(0);
  for(let i = 0; i <= n ; i++) {
    for(let weight = targetWeight; weight >= 0; weight--) {
      if(weights[i] <= weight) {
        dp[weight] = Math.max(dp[weight], dp[weight - weights[i]]+profits[i]);
      }
    }
  }
  return dp[targetWeight];
}

  // Driver code
var profit = [ 60, 100, 120 ];
var weight = [ 10, 20, 30 ];
var W = 50;
var n = profit.length;
console.log(knapSack(W, weight, profit, n));
