const maxProfit = (prices = [], k) => {
  const profits = Array(k + 1).fill(0).map(x => Array(prices.length + 1).fill(0));
  for(let i = 1; i <= k; i++) {
    let maxDiff = -Infinity;
    for(let j = 1; j < prices.length; j++) {
      maxDiff = Math.max(maxDiff, profits[i- 1][j - 1] - prices[j - 1]);
      profits[i][j] = Math.max(maxDiff + prices[j], profits[i][j - 1]);
    }
  }
  return profits[k][prices.length - 1]
}

const k = 3;
const prices = [12, 14, 17, 10, 14, 13, 12, 15];
console.log(maxProfit(prices, k));