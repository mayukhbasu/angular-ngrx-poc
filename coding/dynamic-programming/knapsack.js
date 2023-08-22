const knapsack = (profits = [], weights = [],n, weight) => {
  if(weight < 0) return -Infinity;
  if(n < 0 || weight === 0) return 0;
  const include = weights[n] + knapsack(profits, weights, n - 1, weight - weights[n]);
  const exclude = knapsack(profits, weights, n - 1, weight);
  return Math.max(include, exclude);
}

const profits = [20, 5, 10, 40, 15, 25];
const weights = [1, 2, 3, 8, 7, 4];
let knapsackWeight = 10;
let n = profits.length - 1;
console.log(knapsack(profits, weights,n, knapsackWeight));