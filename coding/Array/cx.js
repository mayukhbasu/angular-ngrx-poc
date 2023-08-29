const isSubArrayWithZeroSum = (arr = []) => {
  const set = new Set();
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if(set.has(0) || set.has(sum)) return true;
    set.add(sum);
  }
  return false;
}

const arr =  [1, 4, -2, -2, 5, -4, 3];
console.log(isSubArrayWithZeroSum(arr));