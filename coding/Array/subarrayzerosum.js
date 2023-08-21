const isSubArrayWithZeroSum = (arr = []) => {
  const sumSet = new Set();
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if(sum === 0 || sumSet.has(sum)) return true;
    sumSet.add(sum)
  }
  return false;
}

const arr =  [1, 4, -2, -2, 5, -4, 3];
console.log(isSubArrayWithZeroSum(arr));