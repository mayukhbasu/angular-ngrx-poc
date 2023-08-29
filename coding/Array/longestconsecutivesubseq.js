const longestConsecutiveSubsequence = (arr = []) => {
  const sequenceSet = new Set();
  let ans = 0;
  for(let item of arr) {
    sequenceSet.add(item);
  }
  for(let i = 0; i < arr.length; i++) {
    if(!sequenceSet.has(arr[i] - 1)) {
      let item = arr[i];
      while(sequenceSet.has(item)) item++;
      ans = Math.max(ans, item - arr[i]);
    }
  }
  return ans;
}

const arr = [1, 9, 3, 10, 4, 20, 2];
console.log(longestConsecutiveSubsequence(arr))