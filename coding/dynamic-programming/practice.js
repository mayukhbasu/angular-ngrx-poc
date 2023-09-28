const knapsack = (values = [], weights = [], capacity) => {
  let dp = [];
  for(let i = 0; i <= values.length; i++) {
    dp[i] = [];
    for(let j = 0; j <= capacity; j++) {
      dp[i][j] = 0;
    }
  }
  for(let i = 1; i <= values.length; i++) {
    for(let j = 1; j <= capacity; j++) {
      if(weights[i - 1] <= j) {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weights[i - 1]] + values[i - 1]);
      } else {  
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
  return dp[values.length][capacity];
}

const values = [60, 100, 120];
const weights = [1, 4, 6];
const capacity = 10;
console.log(knapsack(values, weights, capacity)); 