function knapsack(values, weights, capacity) {
  const n = values.length;
  // Initialize a table to store the maximum value for each subproblem
  let dp = [];
  for(let i = 0; i <= weights.length; i++) {
    dp[i] = [];
    for(let j = 0; j <= capacity; j ++) {
      dp[i][j] = 0
    }
  }

  // Populate the dp table
  for (let i = 1; i <= n; i++) {
      for (let w = 1; w <= capacity; w++) {
          // If the current item's weight is less than or equal to the current capacity
          if (weights[i - 1] <= w) {
              dp[i][w] = Math.max(
                  dp[i - 1][w], // Value excluding the current item
                  dp[i - 1][w - weights[i - 1]] + values[i - 1] // Value including the current item
              );
          } else {
              dp[i][w] = dp[i - 1][w]; // Just carry over the value from the previous row (excluding the current item)
          }
      }
  }

  // Return the value in the bottom-right cell, which contains the answer for the full problem
  return dp[n][capacity];
}

// Example
const values = [60, 100, 120];
const weights = [1, 4, 6];
const capacity = 10;
console.log(knapsack(values, weights, capacity));  // Output: 220
