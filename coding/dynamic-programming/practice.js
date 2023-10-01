function findSmallestUnattainableSum(arr) {
  arr.sort((a, b) => a - b);

  let sum = 1;

  for (let num of arr) {
      if (num <= sum) {
          sum += num;
      } else {
          break;
      }
  }

  return sum;
}

const input = [1,2,5];
console.log(findSmallestUnattainableSum(input));  
