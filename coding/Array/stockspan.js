const stockspan = (prices = []) => {
  const stack = [0];
  const result = new Array(prices.length).fill(0);
  result[0] = 1;
  for(let i = 1; i < prices.length; i++) {
    while(stack.length !== 0 && prices[stack[stack.length - 1]] <= prices[i]) stack.pop();
    result[i] = stack.length === 0 ? (i + 1) : i - stack[stack.length - 1];
    stack.push(i);
  }
  return result;
}

const price = [ 10, 4, 5, 90, 120, 80 ];
console.log(stockspan(price))