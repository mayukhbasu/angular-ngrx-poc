const maxProfitcalculation = (prices = []) => {
  let minValue = Infinity;
  let maxProfit = -Infinity;
  for(let i = 0; i < prices.length; i++) {
    if(prices[i] < minValue) minValue = prices[i];
    maxProfit = Math.max(arr[i] - minValue);
  }
  return maxProfit;
}

const prices = [7,1,5,3,6,4];
console.log(maxProfitcalculation(prices));